# Diagramas de Componentes por Flujo (Nivel 3 - Modelo C4)

Para facilitar la comprensión técnica y evitar la saturación visual de un único diagrama monolítico, la arquitectura del contenedor **Backend (Spring Boot)** se descompone en sus **flujos de valor y responsabilidades principales**. Todos los flujos respetan estrictamente la **Arquitectura Hexagonal (Puertos y Adaptadores)**.

---

## Índice de Flujos
1. [Flujo 1: Seguridad, Autenticación y Control de Accesos](#flujo-1-seguridad-autenticación-y-control-de-accesos)
2. [Flujo 2: Sincronización con el Origen de Datos (Notion)](#flujo-2-sincronización-con-el-origen-de-datos-notion)
3. [Flujo 3: Generación Asíncrona y Despliegue en Google Drive](#flujo-3-generación-asíncrona-y-despliegue-en-google-drive)
4. [Flujo 4: Gestión y Validación de Plantillas de Estructura](#flujo-4-gestión-y-validación-de-plantillas-de-estructura)
5. [Flujo 5: Presets y Motor de Sanitización de Nombres](#flujo-5-presets-y-motor-de-sanitización-de-nombres)

---

## Flujo 1: Seguridad, Autenticación y Control de Accesos

Este flujo modela la interceptación de peticiones, validación de firmas JWT, autenticación de usuarios y resolución de permisos granulares sobre las fuentes.

```mermaid
C4Component
    title C4 Component - Flujo de Seguridad, Autenticación y Accesos

    Person(usuario_cliente, "Usuario / Cliente", "Usuario que consume la API con credenciales o token JWT")
    ContainerDb(postgres, "Base de Datos", "PostgreSQL", "Almacena credenciales encriptadas (BCrypt), roles y permisos asignados")

    Container_Boundary(backend_seguridad, "Backend API - Módulo de Seguridad") {

        Component(security_filter, "JwtAuthenticationFilter / SecurityConfig", "Spring Security / JWT", "Intercepta peticiones HTTP, extrae el Bearer token, valida la firma y puebla el SecurityContext.")
        Component(auth_ctrl, "AuthController", "Spring MVC Controller", "Expone endpoints públicos (/api/auth/login, /api/auth/register).")
        Component(auth_service, "AuthService", "Core Application Service", "Verifica contraseñas con BCryptPasswordEncoder y gestiona el registro de usuarios.")
        Component(jwt_service, "JwtService", "Core Security Service", "Genera tokens JWT con claims de usuario y valida expiración/firmas criptográficas.")
        Component(permisos_service, "PermisosService", "Core Security Service", "Determina el conjunto de IDs permitidos y jerarquía de fuentes según el rol del usuario.")
        Component(usuario_repo, "UsuarioRepository", "Spring Data JPA", "Acceso a datos de la entidad Usuario.")

        Rel(usuario_cliente, security_filter, "Envía petición HTTP con cabecera Authorization: Bearer <token>")
        Rel(security_filter, jwt_service, "Valida firma criptográfica y extrae username")
        Rel(security_filter, auth_ctrl, "Permite paso a endpoints autorizados")

        Rel(usuario_cliente, auth_ctrl, "POST /api/auth/login o /register (Credenciales)")
        Rel(auth_ctrl, auth_service, "Solicita autenticación o registro de credenciales")
        Rel(auth_service, usuario_repo, "Busca usuario por email en BD")
        Rel(auth_service, jwt_service, "Solicita emisión de nuevo token JWT tras validar BCrypt")

        Rel(permisos_service, usuario_repo, "Consulta nodos permitidos y rol del usuario")
        Rel(usuario_repo, postgres, "Consultas JDBC (SELECT / INSERT usuarios y roles)")
    }
```

---

## Flujo 2: Sincronización con el Origen de Datos (Notion)

Mapea la extracción del árbol de páginas y bases de datos desde la API oficial de Notion hasta su persistencia local como nodos relacionales en base de datos. Se evidencia el desacoplamiento mediante el puerto `ConectorFuentes`.

```mermaid
C4Component
    title C4 Component - Flujo de Sincronización con el Origen de Datos (Notion)

    Person(admin_user, "Administrador", "Usuario con rol ADMIN que gestiona la estructura de fuentes")
    System_Ext(notion_api, "API de Notion", "Plataforma SaaS externa. Expone /v1/search, bases de datos y bloques")
    ContainerDb(postgres, "Base de Datos", "PostgreSQL", "Almacena los metadatos de las fuentes en la tabla notion_nodes")

    Container_Boundary(backend_sync, "Backend API - Módulo de Sincronización de Fuentes") {

        Component(admin_ctrl, "AdminPermisosController", "Spring MVC Controller", "Punto de entrada REST (/api/admin/sync-notion y /api/admin/notion-tree).")
        Component(notion_sync_service, "NotionSyncService", "Core Application Service", "Orquesta la sincronización diferencial, reconcilia árbol en BD y previene problemas de memoria OOM.")
        Component(port_conector, "ConectorFuentes", "Outbound Port (Java Interface)", "Contrato abstracto del core para consultar jerarquías y esquemas de datos.")
        Component(notion_adapter, "NotionAdapter", "Driven Adapter (RestTemplate)", "Implementación concreta que traduce llamadas abstractas a peticiones REST contra Notion.")
        Component(notion_node_repo, "NotionNodeRepository", "Spring Data JPA", "Persistencia y consulta de entidades NotionNode.")

        Rel(admin_user, admin_ctrl, "POST /api/admin/sync-notion (Orden de sincronización)")
        Rel(admin_ctrl, notion_sync_service, "Invoca sincronizarNodosNotion()")
        Rel(notion_sync_service, port_conector, "Llama a obtenerArbolCompletoEspacioTrabajo()")

        Rel(notion_adapter, port_conector, "Implementa contrato abstracto")
        Rel(notion_adapter, notion_api, "Petición HTTP POST /v1/search con API Key y versión de Notion")
        Rel(notion_api, notion_adapter, "Retorna lista de páginas y bases de datos en JSON")

        Rel(notion_sync_service, notion_node_repo, "Inserta nuevos nodos, actualiza existentes y elimina obsoletos")
        Rel(notion_node_repo, postgres, "Operaciones JDBC en tabla notion_nodes")
    }
```

---

## Flujo 3: Generación Asíncrona y Despliegue en Google Drive

Muestra el procesamiento de las estructuras de carpetas y ficheros. Se destaca la orquestación en segundo plano (`@Async`) para evitar bloqueos y timeouts HTTP, la consulta y extracción de entidades dinámicas y archivos en origen mediante el puerto `ConectorFuentes` (Notion), el despliegue físico a través de los puertos `GestorCarpetas` y `GestorArchivos` (Google Drive), y la trazabilidad de logs.

```mermaid
C4Component
    title C4 Component - Flujo Core de Generación Asíncrona y Despliegue en Drive

    Person(usuario_cliente, "Usuario", "Inicia la construcción física del árbol documental")
    System_Ext(notion_api, "API de Notion", "Origen de datos SaaS. Expone consultas a bases de datos, páginas y URLs de archivos")
    System_Ext(google_drive_api, "API de Google Drive", "Almacenamiento Cloud. Crea directorios y almacena archivos físicos")
    ContainerDb(postgres, "Base de Datos", "PostgreSQL", "Almacena cabeceras de ejecución (generacion) y logs (generacion_log)")

    Container_Boundary(backend_generacion, "Backend API - Módulo de Generación y Despliegue") {

        Component(gen_ctrl, "GeneradorEstructurasController", "Spring MVC Controller", "Endpoint REST (/api/estructuras/generar). Responde HTTP 202 Accepted de inmediato.")
        Component(async_service, "GeneradorEstructurasAsyncService", "Core Application Service (@Async)", "Orquestador asíncrono. Libera el hilo web y ejecuta el proceso pesado en el pool taskExecutor.")
        Component(core_generator, "GeneradorEstructurasService", "Core Domain Service", "Motor nuclear de generación. Recorre recursivamente los nodos, consulta fuentes en origen, evalúa metadatos y emite órdenes de creación.")
        Component(historial_service, "HistorialService", "Core Application Service", "Servicio auxiliar para consulta de ejecuciones previas y métricas de proceso.")

        Component(port_conector, "ConectorFuentes", "Outbound Port (Java Interface)", "Contrato abstracto para ejecutar consultas dinámicas y extraer URLs de archivos en origen.")
        Component(notion_adapter, "NotionAdapter", "Driven Adapter (RestTemplate)", "Implementación concreta que consulta registros y URLs de adjuntos en la API de Notion.")

        Component(port_carpetas, "GestorCarpetas", "Outbound Port (Java Interface)", "Contrato abstracto para resolución de raíz y creación de carpetas.")
        Component(port_archivos, "GestorArchivos", "Outbound Port (Java Interface)", "Contrato abstracto para subida y vinculación física de archivos.")

        Component(drive_adapter, "GoogleDriveAdapter", "Driven Adapter (Google Drive SDK)", "Implementación concreta que se comunica con Google Drive API usando Drive client.")

        Component(gen_repo, "GeneracionRepository", "Spring Data JPA", "Persiste cabeceras de ejecución y estados (IN_PROGRESS, SUCCESS, ERROR).")
        Component(log_repo, "GeneracionLogRepository", "Spring Data JPA", "Persiste trazas de auditoría e incidencias por cada nodo afectado.")

        Rel(usuario_cliente, gen_ctrl, "POST /api/estructuras/generar (JSON de árbol diseñado)")
        Rel(gen_ctrl, gen_repo, "Crea registro inicial con estado IN_PROGRESS")
        Rel(gen_ctrl, async_service, "Delega ejecución en segundo plano y retorna HTTP 202 con el ID generado")

        Rel(async_service, core_generator, "Invoca iniciarGeneracion() en hilo worker desacoplado")

        Rel(core_generator, port_conector, "Consulta entidades dinámicas y extrae URLs de archivos")
        Rel(notion_adapter, port_conector, "Implementa contrato")
        Rel(notion_adapter, notion_api, "Consultas POST /v1/databases/{id}/query y GET /v1/pages/{id}")

        Rel(core_generator, port_carpetas, "Invoca obtenerOCrearCarpetaRaiz() y crearCarpeta(padre, nombre)")
        Rel(core_generator, port_archivos, "Invoca subirArchivo(padreId, documento)")

        Rel(drive_adapter, port_carpetas, "Implementa contrato")
        Rel(drive_adapter, port_archivos, "Implementa contrato")
        Rel(drive_adapter, google_drive_api, "Llamadas SDK Google Drive (driveService.files().create)")

        Rel(async_service, gen_repo, "Actualiza registro final (SUCCESS / ERROR / WARNING y totalArchivos)")
        Rel(async_service, log_repo, "Guarda colección detallada de GeneracionLog")
        Rel(gen_ctrl, historial_service, "Consulta historial y logs para reportar progreso")

        Rel(gen_repo, postgres, "Persistencia JDBC en tabla generacion")
        Rel(log_repo, postgres, "Persistencia JDBC en tabla generacion_log")
    }
```

---

## Flujo 4: Gestión y Validación de Plantillas de Estructura

Muestra el ciclo de vida de las plantillas creadas por los usuarios, incluyendo su almacenamiento y la validación semántica de variables frente a los esquemas de bases de datos remotas.

```mermaid
C4Component
    title C4 Component - Flujo de Gestión y Validación de Plantillas

    Person(usuario_cliente, "Usuario", "Diseña, guarda y valida plantillas reutilizables")
    System_Ext(notion_api, "API de Notion", "Consulta de propiedades y columnas de bases de datos")
    ContainerDb(postgres, "Base de Datos", "PostgreSQL", "Almacena definiciones JSON de plantillas en tabla plantilla")

    Container_Boundary(backend_plantillas, "Backend API - Módulo de Plantillas") {

        Component(plantilla_ctrl, "PlantillaController", "Spring MVC Controller", "Endpoints REST (/api/plantillas) para CRUD y diagnóstico de plantillas.")
        Component(plantilla_service, "PlantillaService", "Core Application Service", "Lógica de persistencia de plantillas de usuario y diagnóstico masivo.")
        Component(template_validator, "TemplateValidatorService", "Core Domain Service", "Analiza variables {Propiedad} y verifica compatibilidad con esquemas de Notion.")
        Component(port_conector, "ConectorFuentes", "Outbound Port (Java Interface)", "Puerto abstracto para consulta de esquema de tablas.")
        Component(notion_adapter, "NotionAdapter", "Driven Adapter (RestTemplate)", "Implementación que consulta esquema a la API de Notion.")
        Component(plantilla_repo, "PlantillaRepository", "Spring Data JPA", "Persistencia de la entidad Plantilla.")

        Rel(usuario_cliente, plantilla_ctrl, "POST /api/plantillas (Guarda diseño) o GET (Diagnóstico)")
        Rel(plantilla_ctrl, plantilla_service, "Solicita guardar, listar o diagnosticar plantillas")
        Rel(plantilla_ctrl, template_validator, "Solicita validación preventiva del JSON recibido")
        Rel(plantilla_service, template_validator, "Ejecuta diagnóstico global de todas las plantillas del usuario")

        Rel(template_validator, port_conector, "Llama a obtenerEsquemaBaseDatos(idBD)")
        Rel(notion_adapter, port_conector, "Implementa contrato")
        Rel(notion_adapter, notion_api, "Consulta GET /v1/databases/{id} (esquema de columnas)")

        Rel(plantilla_service, plantilla_repo, "Guarda entidad con marca hasValidationErrors y fecha")
        Rel(plantilla_repo, postgres, "Sentencias JDBC en tabla plantilla")
    }
```

---

## Flujo 5: Presets y Motor de Sanitización de Nombres

Detalla la gestión de reglas de saneamiento de nombres de carpetas y ficheros (compatibilidad con Windows, eliminación de caracteres prohibidos, longitudes máximas y resolución anti-colisión con hash).

```mermaid
C4Component
    title C4 Component - Flujo de Presets y Motor de Sanitización

    Person(usuario_cliente, "Usuario / Administrador", "Configura presets de nombres o consulta reglas por defecto")
    ContainerDb(postgres, "Base de Datos", "PostgreSQL", "Almacena reglas de presets en tabla preset_sanitizacion")

    Container_Boundary(backend_sanitizacion, "Backend API - Módulo de Sanitización y Presets") {

        Component(preset_ctrl, "PresetSanitizacionController", "Spring MVC Controller", "Endpoints REST (/api/presets-sanitizacion) y catálogo de mapeos.")
        Component(preset_service, "PresetSanitizacionService", "Core Application Service", "Inicializa preset de sistema ('Windows Seguro') en @PostConstruct y gestiona presets de usuario.")
        Component(sanitizer_service, "SanitizerService", "Core Domain Service", "Lógica pura: caracteres prohibidos, palabras reservadas de Windows (CON, PRN), longitud y hash SHA-256.")
        Component(preset_repo, "PresetSanitizacionRepository", "Spring Data JPA", "Persistencia de la entidad PresetSanitizacion.")

        Rel(usuario_cliente, preset_ctrl, "GET /api/presets-sanitizacion o POST (Nuevo preset)")
        Rel(preset_ctrl, preset_service, "Solicita listar, guardar o resolver reglas de preset")
        Rel(preset_ctrl, sanitizer_service, "GET /mapeos-defecto (Obtiene catálogo de reemplazos)")

        Rel(preset_service, preset_repo, "Guarda configuración de reglas serializadas en JSON")
        Rel(preset_repo, postgres, "Operaciones JDBC en tabla preset_sanitizacion")
    }
```
