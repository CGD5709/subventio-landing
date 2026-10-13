# Documento de Especificacion, Textos y Contenidos para la Landing Page de Subventio

Este documento contiene la redaccion oficial de textos (copywriting) y las directrices de diseno, comportamiento y conversion necesarias para el desarrollo de la Landing Page de Subventio. El documento esta estructurado en dos grandes bloques funcionales correspondientes a las dos rutas principales de la aplicacion web:

1. Ruta Principal (/): La Cara B2B y Conversion de Negocio. Orientada exclusivamente a consultoras de subvenciones, asociaciones, fundaciones y gestores de proyectos publicos y europeos. Enfoque 100% en resolucion de problemas, ahorro de horas de trabajo, eliminacion del error humano y tranquilidad ante auditorias.
2. Ruta Tecnica (/arquitectura o /developers): La Cara para Desarrolladores y Tribunal Evaluador. Orientada a ingenieros de software, directores tecnicos (CTO) y miembros de tribunales academicos/tecnicos. Enfoque en arquitectura hexagonal, concurrencia asincrona, algoritmos de grafos, resiliencia ante APIs externas y calidad de ingenieria.

Regla general de diseno: No se deben emplear emoticonos ni recursos graficos informales. El estilo visual debe ser sobrio, con tipografia moderna (por ejemplo Inter o Geist), jerarquia clara, contraste equilibrado y estetica corporativa de software empresarial.

---

# Bloque 1: La Cara B2B (Ruta Principal: /)

## 1.1. Barra de Navegacion Superior (Navbar)

### Directrices de Diseno y Comportamiento (Instrucciones)
- Posicion: Barra fija en la parte superior (sticky/fixed) con fondo blanco translucido o desenfoque de cristal (backdrop-blur) al hacer scroll.
- Elementos a la izquierda: Logotipo oficial de Subventio con la leyenda secundaria "by El Salto Adelante".
- Enlaces de navegacion central: Anclas de navegacion suave a las secciones de la pagina: "Solucion", "Funcionalidades", "Como funciona", "Preguntas Frecuentes".
- Enlaces a la derecha:
  - Enlace tecnico discreto: "Arquitectura" o "Para Desarrolladores" (conduce a la ruta /arquitectura). Debe tener una apariencia secundaria (texto sobrio o contorno ligero) para no desviar la atencion del visitante de negocio, pero con visibilidad suficiente para evaluadores y tecnicos.
  - Boton CTA Principal: "Solicitar Demostracion" (estilo solido, color principal de marca, accion directa a modal de contacto o formulario al final de la pagina).

### Textos de la Interfaz
- Logotipo: Subventio
- Menu 1: Solucion
- Menu 2: Caracteristicas
- Menu 3: Metodologia
- Menu 4: Casos de Uso
- Acceso Tecnico: Para Desarrolladores
- Acceso Clientes: Iniciar Sesion
- Boton de Accion en Barra: Solicitar Demo

---

## 1.2. Seccion Hero (Gancho Principal)

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Diseno a dos columnas en pantallas de escritorio (grid o flex de 50/50) y apilamiento vertical en dispositivos moviles.
- Columna izquierda (Mensaje de Valor): Titular con tamano tipografico destacado (H1, 48px o superior), subtitulo explicativo de alto contraste y bloque horizontal de llamadas a la accion acompanado de microcopia de confianza.
- Columna derecha (Elemento Visual / Mockup): Representacion grafica fotorrealista y limpia del panel de control de Subventio. El mockup debe mostrar la interfaz real: el arbol interactivo de carpetas dinámicas, las etiquetas de variables de Notion (por ejemplo {Proyecto}, {Proveedor}, {NumeroFactura}), los conmutadores de validacion en verde y el monitor de exportacion hacia Google Drive. Se recomienda anadir una sombra suave multicapa y una inclinacion sutil en perspectiva para dar profundidad sin recargar.
- Comportamiento de los CTAs:
  - CTA Principal ("Solicitar Demo"): Abre una ventana modal con formulario de 4 campos o hace scroll directo al selector de reuniones.
  - CTA Secundario ("Ver Como Funciona"): Desplaza suavemente la pantalla hacia la seccion de flujo de trabajo en 3 pasos.

### Textos Oficiales de la Seccion Hero

Titular Principal (H1):
Justifica tus subvenciones sin perderte en el papeleo administrativo.

Subtitulo:
Subventio automatiza la organizacion, validacion y exportacion de expedientes documentales para consultoras, fundaciones y entidades beneficiarias de fondos publicos. Conecta tus fuentes de datos, define tus reglas y genera estructuras de carpetas impecables listas para auditoria en cuestion de segundos.

Llamadas a la Accion (CTAs):
- Boton Principal: Solicitar Demostracion Personalizada
- Boton Secundario: Explorar el Flujo de Trabajo

Microcopia de Confianza (bajo los botones):
Sin necesidad de tarjeta de credito. Implementacion adaptada a convocatorias europeas, estatales y autonomicas.

---

## 1.3. Seccion Problema vs. Solucion

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Dos bloques comparativos yuxtapuestos (Side-by-Side) con clara diferenciacion cromatica y visual.
- Lado Izquierdo (El Caos Administrativo Tradicional): Tarjeta con fondo gris tenue o borde de alerta neutro, tipografia apagada y lista de puntos criticos que evidencian la ineficiencia, el estres y el riesgo financiero.
- Lado Derecho (La Eficiencia con Subventio): Tarjeta con fondo destacado, borde de acento sutil, marcadores de verificacion sobrios y redaccion que transmite control, rapidez y precision matematica.
- Objetivo psicologico: Crear contraste inmediato entre el coste oculto del desorden operativo manual y la seguridad que aporta la automatizacion documental estandarizada.

### Textos Oficiales de Problema vs. Solucion

Titular de la Seccion (H2):
El coste invisible de justificar expedientes a mano frente a la tranquilidad de automatizar con Subventio.

Subtitulo de la Seccion:
Cada convocatoria de subvencion exige criterios documentales estrictos. Un solo archivo extraviado, un nombre con caracteres incompatibles o una discrepancia entre partidas puede desencadenar requerimientos de subsanacion y penalizaciones economicas.

Columna Izquierda: El Metodo Tradicional (Gestion Manual Dispersa)
- Descargas individuales de facturas, nominas y justificantes bancarios desde multiples plataformas sin nomenclatura unificada.
- Carpetas compartidas sin estructura fija donde los miembros del equipo duplican archivos o reemplazan versiones por error.
- Hojas de calculo interminables para comprobar que cada documento corresponde a la partida presupuestaria correcta.
- Nombres de fichero rechazados por plataformas publicas debido a tildes, caracteres especiales o rutas que exceden los limites del sistema.
- Dias enteros de trabajo contrarreloj antes de cada plazo de entrega preparando la memoria documental con riesgo constante de requerimiento.

Columna Derecha: El Ecosistema Subventio (Estructuracion Inteligente)
- Sincronizacion directa con tus bases de datos y sistemas de gestion para vincular gastos, contratos y comprobantes sin intervencion manual.
- Generacion automatica de jerarquias de carpetas organizadas por proyecto, partida y proveedor con un solo clic.
- Motor de sanitizacion integrado que normaliza los nombres segun los estandares tecnicos de cada administracion publica.
- Diagnostico preventivo de coherencia: deteccion inmediata de documentos faltantes o enlaces rotos antes del envio formal.
- Expedientes completos desplegados en la nube corporativa, catalogados y preparados para superar cualquier auditoria técnica o financiera.

---

## 1.4. Seccion de Caracteristicas Principales (Features)

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Cuadricula responsive de 4 tarjetas (2x2 en pantallas medianas o fila de 4 en pantallas amplias).
- Estilo de tarjeta: Tarjetas blancas sobre fondo de contraste suave, bordes con separacion milimetrica, icono vectorial monocromatico en la cabecera y tipografia de lectura comoda.
- Enfoque de redaccion: Cada tarjeta debe responder a un beneficio empresarial concreto, evitando la jerga de desarrollo y enfocandose en el ahorro de tiempo, la seguridad juridica y la precision operativa.

### Textos Oficiales de las 4 Caracteristicas

Titular de la Seccion (H2):
Disenado para responder a las exigencias tecnicas de las auditorias publicas.

Subtitulo de la Seccion:
Nuestra plataforma combina la flexibilidad del diseno visual de plantillas con la rigurosidad normativa que demandan los organismos reguladores.

Tarjeta 1:
- Titulo: Generacion Dinamica de Expedientes
- Texto: Construye arboles documentales completos a partir de plantillas personalizables. Subventio lee las partidas de tus proyectos y crea la jerarquia exacta de carpetas y ficheros requerida por cada entidad concedente, sin duplicar tareas.

Tarjeta 2:
- Titulo: Trazabilidad Integral y Registro de Auditoria
- Texto: Cada documento procesado cuenta con un historial pormenorizado de ejecucion. Supervisa el estado de transferencia de cada archivo, identifica advertencias al instante y mantén un control documental absoluto demostrable ante inspectores.

Tarjeta 3:
- Titulo: Motor de Sanitizacion y Cumplimiento Normativo
- Texto: Olvidate de los errores de subida en las sedes electronicas. El sistema depura de forma nativa tildes, caracteres prohibidos y rutas excesivamente largas, garantizando plena compatibilidad con plataformas publicas y entornos Windows.

Tarjeta 4:
- Titulo: Cruce Relacional de Fuentes y Partidas
- Texto: Enlaza de manera automatica proyectos, facturas, comprobantes de pago y personal asignado. El sistema localiza los adjuntos correspondientes y los ubica en su carpeta de justificacion sin requerir ordenacion manual.

---

## 1.5. Seccion de Flujo de Trabajo (Como Funciona)

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Componente secuencial horizontal de 3 fases numeradas (1, 2, 3), conectadas mediante una linea sutil o indicadores de progreso. En dispositivos moviles, las fases se presentan en disposicion vertical.
- Elemento visual complementario: Cada paso puede acompanarse de una miniatura esquematica de la pantalla correspondiente:
  - Fase 1: Selector de fuentes y esquemas de datos.
  - Fase 2: Editor interactivo de jerarquias con variables dinamicas.
  - Fase 3: Indicador de progreso de generacion y arbol resultante en almacenamiento en la nube.
- Redaccion: Clara, activa y orientada a transmitir simplicidad operativa.

### Textos Oficiales del Flujo de Trabajo

Titular de la Seccion (H2):
Tres pasos para transformar el desorden documental en un expediente cerrado.

Subtitulo de la Seccion:
Una transicion fluida desde la informacion bruta de tu proyecto hasta el despliegue final de toda la documentacion justificada.

Paso 1:
- Numero: 01
- Titulo: Centraliza tus fuentes y convocatorias
- Descripcion: Conecta la base de datos de tu organizacion o espacio de trabajo. Subventio identifica automaticamente los esquemas de gastos, proveedores, contratos y personal vinculados a cada subvencion.

Paso 2:
- Numero: 02
- Titulo: Configura la plantilla del expediente
- Descripcion: Define la estructura requerida por las bases reguladoras mediante nuestro disenador visual. Asigna variables dinamicas para nombrar carpetas y documentos segun las pautas oficiales de la convocatoria.

Paso 3:
- Numero: 03
- Titulo: Ejecuta la generacion y valida el resultado
- Descripcion: Inicia el proceso en un solo clic. El motor procesa los archivos en segundo plano, aplica los presets de saneamiento de nombres y despliega el expediente completo en tu nube documental con informe de ejecucion.

---

## 1.6. Seccion de Metricas y Casos de Uso

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Bloque con indicadores numericos de impacto empresarial seguido de tres pestanas o tarjetas de perfiles de cliente (Consultoras de Subvenciones, Asociaciones y Fundaciones, Empresas de I+D e Innovacion).
- Objetivo: Justificar el retorno de la inversion (ROI) a traves del ahorro medible en horas de personal administrativo y la mitigacion de penalizaciones por no subsanacion a tiempo.

### Textos Oficiales de Metricas y Casos de Uso

Titular de la Seccion (H2):
Resultados contrastados en la gestion de justificaciones publicas.

Bloque de Metricas:
- Metrica 1: 85% de reduccion en el tiempo dedicado a estructuracion manual y renombrado de ficheros.
- Metrica 2: 0 incidencias por nombres de archivo no permitidos en sedes electronicas oficiales.
- Metrica 3: 100% de trazabilidad en las transferencias de expedientes hacia el almacenamiento corporativo.

Perfiles de Aplicacion:
- Perfil 1: Consultoras Especializadas en Financiacion Publica
  Gestiona decenas de expedientes paralelos para multiples clientes manteniendo criterios homogeneos y estandares documentales rigurosos sin sobrecargar a tu equipo gestor.
- Perfil 2: Entidades Sin Animo de Lucro y Fundaciones
  Cumple con los plazos y formatos de las convocatorias sociales sin desviar horas esenciales de trabajo directo en tus programas de intervencion.
- Perfil 3: Empresas Beneficiarias de Fondos Europeos y CDTI
  Asegura la correlacion exacta entre gastos ejecutados, pedidos y justificantes de pago para auditorias exigentes de programas Next Generation e iniciativas de I+D.

---

## 1.7. Seccion de Cierre y Llamada a la Accion Final (CTA Footer)

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Contenedor destacado de ancho completo o tarjeta envolvente con fondo oscuro corporativo (azul marino pizarra, por ejemplo #0F172A o #1E293B) y texto blanco con contraste optimo.
- Elementos: Titular potente de cierre, parrafo persuasivo que apele a la tranquilidad operativa y bloque interactivo con selector de horario de reunion o formulario simplificado de dos campos (Email profesional y Nombre de organizacion).
- Sellos de garantia: Menciones formales a la seguridad de los datos, almacenamiento bajo normativa europea (GDPR) y proteccion mediante credenciales cifradas.

### Textos Oficiales del Cierre Final

Titular de Cierre (H2):
Prepara tu organizacion para la proxima auditoria documental.

Parrafo de Cierre:
Elimina la improvisacion y el trabajo repetitivo de tus procesos de justificacion. Descubre como Subventio puede ahorrar cientos de horas a tu equipo y blindar tus subvenciones frente a requerimientos formales.

Boton de Accion Principal:
Agendar una Demostracion Guiada

Boton de Accion Secundario:
Hablar con un Especialista

Garantias de Seguridad (Microcopia):
Tratamiento seguro de la informacion conforme al RGPD. Autenticacion robusta mediante estandares OAuth 2.0 y cifrado de extremo a extremo.

---

# Bloque 2: La Cara para Desarrolladores / Tribunal (Ruta: /arquitectura o /developers)

## 2.1. Navegacion y Contexto de la Seccion Tecnica

### Directrices de Diseno e Instrucciones
- Barra de navegacion: Mantiene el acceso rapido a la aplicacion y un enlace de retorno a la version comercial: "<- Volver a la Vista Comercial".
- Badge superior: Etiqueta formal tipo "Documentacion Tecnica de Arquitectura e Ingenieria - Proyecto Gestor Documental El Salto".
- Audiencia objetivo: Profesionales de la ingenieria del software, evaluadores de tribunales tecnicos y directores de tecnologia que requieren comprender las decisiones de diseno, la modularidad del codigo, el tratamiento de concurrencia y la resiliencia del sistema.

---

## 2.2. Seccion Hero Tecnico

### Directrices de Diseno y Maquetacion (Instrucciones)
- Fondo: Tono oscuro o neutro tecnico con patron sutil de cuadricula de ingenieria (grid layout discreto).
- Disposicion: Titular tecnico riguroso, declaracion de arquitectura y resumen de metricas de diseno (Arquitectura Hexagonal, Concurrencia Desacoplada, Resiliencia API, Cumplimiento RFC y Estandares POSIX/NTFS).
- Botones de acceso directo: "Explorar Repositorio", "Ver Diagramas C4", "Matriz de Decisiones".

### Textos Oficiales del Hero Tecnico

Titular Tecnico (H1):
Arquitectura, Patrones de Diseno y Retos de Ingenieria en Subventio.

Subtitulo Tecnico:
Analisis pormenorizado del sistema de estructuracion y orquestacion documental: diseno desacoplado mediante Arquitectura Hexagonal en Java 21 y Spring Boot, interfaz reactiva en React y TypeScript, resolucion de grafos relacionales mediante busqueda en anchura (BFS) y canalizaciones asincronas para despliegue de archivos en la nube.

Etiquetas de Principios Arquitectonicos:
- Principio 1: Arquitectura Hexagonal (Ports and Adapters)
- Principio 2: Procesamiento Asincrono no Bloqueante (@Async)
- Principio 3: Desacoplamiento de Persistencia y Dominio Puro
- Principio 4: Resolucion de Grafos con Algoritmo BFS Bidireccional
- Principio 5: Pipeline Modular de Sanitizacion y Hash Anti-Colision

---

## 2.3. Seccion Stack Tecnologico (Tech Stack Detallado)

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: 4 paneles modulares organizados por capas del sistema (Capa de Presentacion, Capa de Aplicacion y Dominio, Capa de Persistencia y Datos, e Infraestructura y Conectores Externos).
- Cada tarjeta debe detallar la tecnologia, version concreta y justificacion tecnica de su eleccion en el proyecto.

### Textos Oficiales del Stack Tecnologico

Titular de la Seccion (H2):
Stack Tecnologico y Criterios de Seleccion de Componentes.

Panel 1: Frontend y Capa de Presentacion (SPA)
- React 18: Gestion declarativa de componentes y renderizado reactivo del arbol documental dinamico.
- TypeScript: Tipado estatico riguroso en modelos DTO, arboles jerarquicos, reglas de filtrado y esquemas remotos, minimizando errores en tiempo de ejecucion.
- Vite: Empaquetador de alto rendimiento para construccion optimizada de modulos ES y experiencia de desarrollo ágil.
- TailwindCSS y Radix UI: Sistema de diseno atomico accesible y personalizable, garantizando interfaces con foco en ergonomia de usuario y baja sobrecarga de estilos.
- Custom Hooks y Memoizacion: Modularizacion de la logica de estado mediante useFolderStructure y aplicacion de useMemo para evitar renderizados redundantes en tablas complejas de sanitizacion.

Panel 2: Backend y Logica de Dominio (Core)
- Java 21 (LTS): Aprovechamiento de caracteristicas avanzadas de lenguaje, optimizacion de rendimiento en maquinas virtuales modernas y soporte robusto a largo plazo.
- Spring Boot 4.0.2: Ecosistema nuclear de soporte empresarial, inyeccion de dependencias desacoplada y gestion unificada del ciclo de vida de componentes.
- Spring Security 6 y JJWT: Autenticacion sin estado (Stateless) mediante tokens JWT con intercepcion global en JwtAuthenticationFilter y codificacion de contraseñas con BCrypt.
- Spring WebMVC y Bean Validation: Validacion automatica de contratos REST mediante anotaciones declarativas y aislamiento estricto de capas.

Panel 3: Persistencia, Modelado de Datos y Transacciones
- PostgreSQL: Motor de base de datos relacional para persistencia de usuarios, entidades de ejecucion de generacion, trazas pormenorizadas de auditoria (GeneracionLog) y presets de sanitizacion.
- Spring Data JPA y Hibernate: Abstraccion declarativa de repositorios y mapeo objeto-relacional optimizado, con persistencia flexible de arboles de plantillas en columnas de texto de gran capacidad.
- Base de datos en memoria H2: Aislamiento total en entornos de pruebas automatizadas e integracion continua.

Panel 4: Servicios Externos, Integraciones Cloud y Seguridad
- Google Drive API Client v3 y Google OAuth 2.0: Transferencia segura de flujo de bytes para creacion de directorios jerarquicos y almacenamiento de ficheros mediante autorizaciones delegadas.
- Notion API (v1 / RestTemplate): Ingestion de esquemas dinamicos de bases de datos, paginacion mediante cursores continuos y extraccion de referencias a adjuntos.
- WireMock Standalone: Simulacion precisa de respuestas HTTP de APIs externas para ejecucion de suites de pruebas deterministas e independientes de la red.

---

## 2.4. Seccion de Arquitectura del Sistema y Diagramas C4

### Directrices de Diseno y Maquetacion (Instrucciones)
- Presentacion: Seccion interactiva con conmutador de vistas para los niveles del modelo C4: Contexto (Nivel 1), Contenedores (Nivel 2) y Componentes por Flujos (Nivel 3).
- Visualizacion: Debe incluir los diagramas generados en el proyecto (disponibles en public_information/docs/architecture/) con opcion de zoom o visualizacion en pantalla completa, acompanados de su explicacion tecnica detallada.
- Bloque de flujo de datos: Descripcion textual de la separacion entre comandos de escritura pesados y consultas de lectura livianas, detallando el flujo de los datos desde la solicitud inicial hasta la confirmacion en la nube.

### Textos Oficiales de la Seccion de Arquitectura

Titular de la Seccion (H2):
Modelo C4 y Arquitectura Hexagonal: Desacoplamiento de Dominio.

Texto Explicativo de la Filosofia Arquitectonica:
El sistema implementa estrictamente los principios de la Arquitectura Hexagonal (Puertos y Adaptadores). El nucleo de dominio y los servicios de orquestacion no mantienen acoplamiento con librerias de proveedores cloud ni con detalles de implementacion de persistencia. La interaccion con sistemas externos se gobierna a traves de contratos abstractos (puertos de salida), garantizando que cualquier cambio en las APIs de terceros (Notion, Google Drive o almacenamiento futuro en S3) no afecte a las reglas de negocio.

Detalle de Puertos y Adaptadores del Sistema:
- Puerto ConectorFuentes (Outbound Port): Interfaz que desacopla la consulta de jerarquias, esquemas relacionales y extraccion de URLs temporales. Su implementacion concreta es NotionAdapter, que gestiona la paginacion y traduccion de estructuras JSON complejas.
- Puerto GestorCarpetas (Outbound Port): Interfaz abstracta para la creacion recursiva de directorios y resolucion de identificadores raiz en sistemas de archivos. Su implementacion es GoogleDriveAdapter.
- Puerto GestorArchivos (Outbound Port): Contrato para la transferencia fisica de secuencias de bytes y vinculacion documental en el destino cloud.

Flujo de Ejecucion Asincrona y Manejo de Concurrencia:
A fin de solventar las restricciones de pasarelas en la nube (como cortes de conexion HTTP por inactividad a los 30 segundos en servicios como Heroku o Railway), el punto de entrada de generacion documental implementa el siguiente circuito:
1. El controlador GeneradorEstructurasController recibe la peticion POST con el arbol serializado en JSON.
2. Registra inmediatamente la cabecera en la tabla generacion con estado IN_PROGRESS.
3. Despacha la tarea pesada al orquestador GeneradorEstructurasAsyncService mediante el pool desacoplado taskExecutor bajo la anotacion @Async.
4. Responde de inmediato al cliente con un codigo HTTP 202 Accepted que incorpora el identificador de la generacion.
5. El cliente web efectua consultas periodicas no bloqueantes sobre el historial para monitorizar el avance y los registros de auditoria generados en tiempo real.

---

## 2.5. Seccion de Retos Tecnicos y Soluciones de Ingenieria

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: 4 articulos tecnicos modulares estructurados bajo el patron "Desafio / Analisis Tecnico / Solucion Implementada / Evidencia en Codigo".
- Fragmentos de codigo: Deben presentarse en bloques de codigo resaltados con sintaxis real del repositorio, acompanados de llamadas explicativas sobre las decisiones clave.

---

### Reto Tecnico 1: Resolucion de Relaciones Complejas mediante Algoritmos de Grafos (BFS)

#### Desafio
En esquemas de datos relacionales distribuidos en Notion, un archivo documental (por ejemplo, el comprobante bancario de un pago) puede no encontrarse en la tabla principal del proyecto, sino vinculado a traves de una cadena transitiva de bases de datos intermedias (por ejemplo: Proyecto -> Licitacion -> Factura -> Justificante). Era necesario descubrir la ruta de union de forma autonoma y bidireccional sin requerir que el usuario configure consultas SQL manuales.

#### Solucion de Ingenieria
Se diseno e implemento el servicio GrafoRelacionesService. El componente inspecciona los esquemas de bases de datos en origen, construye un mapa bidireccional en memoria registrando tanto saltos directos como inversos, y aplica un algoritmo de Busqueda en Anchura (Breadth-First Search - BFS) con control de nodos visitados y limite maximo de profundidad a 6 saltos. Asimismo, incorpora una politica de sincronizacion silenciosa con tiempo de vida util en cache (TTL) de 15 minutos para evitar consultas redundantes de esquemas.

#### Fragmento de Codigo Representativo (Backend Java):
```java
// Localizacion: core/service/generadorEstructuras/GrafoRelacionesService.java
public List<SaltoDTO> encontrarRuta(String origenDbId, String destinoDbId) {
    asegurarGrafoActualizado();

    String origenNorm = normalizarId(origenDbId);
    String destinoNorm = normalizarId(destinoDbId);

    if (origenNorm.equals(destinoNorm)) {
        return Collections.emptyList();
    }

    Queue<List<SaltoDTO>> cola = new LinkedList<>();
    Set<String> visitados = new HashSet<>();

    List<SaltoDTO> saltosIniciales = mapaRelaciones.getOrDefault(origenNorm, Collections.emptyList());
    for (SaltoDTO salto : saltosIniciales) {
        List<SaltoDTO> rutaInicial = new ArrayList<>();
        rutaInicial.add(salto);
        cola.add(rutaInicial);
    }
    visitados.add(origenNorm);

    while (!cola.isEmpty()) {
        List<SaltoDTO> rutaActual = cola.poll();
        SaltoDTO ultimoSalto = rutaActual.get(rutaActual.size() - 1);
        String nodoActual = ultimoSalto.getDbDestinoId();
        String nodoNorm = normalizarId(nodoActual);

        if (nodoNorm.equals(destinoNorm)) {
            return rutaActual; // Ruta optima mas corta encontrada
        }

        if (!visitados.contains(nodoNorm)) {
            visitados.add(nodoNorm);
            List<SaltoDTO> siguientesSaltos = mapaRelaciones.getOrDefault(nodoNorm, Collections.emptyList());

            for (SaltoDTO siguienteSalto : siguientesSaltos) {
                if (rutaActual.size() < 6) { // Limite de seguridad anti-bucles
                    List<SaltoDTO> nuevaRuta = new ArrayList<>(rutaActual);
                    nuevaRuta.add(siguienteSalto);
                    cola.add(nuevaRuta);
                }
            }
        }
    }
    return Collections.emptyList();
}
```

---

### Reto Tecnico 2: Sanitizacion Estricta, Prevencion de Colapso por MAX_PATH y Reglas de la Administracion Publica

#### Desafio
Google Drive permite almacenar archivos con casi cualquier caracter Unicode y profundidades arbitrarias de carpetas mediante identificadores alfanumericos. Sin embargo, cuando un organismo publico o un usuario descarga el expediente en local o lo sincroniza en Windows, el sistema colapsa de forma silenciosa o corrompe datos si se superan los 260 caracteres de ruta absoluta (limite clasico MAX_PATH), si existen nombres reservados del kernel (tales como CON, PRN, AUX, NUL), o si aparecen caracteres ilegales (\ / : * ? " < > |). Asimismo, sedes electronicas oficiales (como la Junta de Andalucia o plataformas de Fondos Europeos) prohiben terminantemente tildes, diacriticos y espacios en blanco.

#### Solucion de Ingenieria
Se desarrollo un motor nuclear modular (SanitizerService) implementado como una canalizacion secuencial de transformacion por pasos:
1. Interpolacion de variables dinamicas.
2. Mapeo de diacriticos y sustitucion de tildes preservando integridad contextual.
3. Sustitucion parametrizable de caracteres prohibidos en sistemas POSIX y NTFS.
4. Normalizacion de espacios en blanco mediante separadores reglamentarios.
5. Deteccion y evasion de nombres reservados de Windows mediante prefijado automatico de seguridad (_CON, _PRN).
6. Algoritmo de truncamiento inteligente: en caso de exceso de longitud (maximo 60 caracteres para carpetas y 80 para archivos), el sistema trunca la cadena preservando de forma obligatoria la extension real (.pdf, .xlsx) y anexa un sufijo hash criptografico corto (4 caracteres hexadecimales derivados de la cadena original) para evitar colisiones entre nombres truncados similares.

#### Fragmento de Codigo Representativo (Backend Java):
```java
// Localizacion: core/service/generadorEstructuras/SanitizerService.java
// Truncamiento inteligente con preservacion de extension y hash anti-colision
if (texto.length() > longitudMaxCuerpo) {
    fueTruncado = true;
    if (reglas.isTruncarConHash()) {
        String hash = generarHashCorto(cuerpo); // 4 caracteres hexadecimales MD5
        int maxSubstr = Math.max(1, longitudMaxCuerpo - 5);
        texto = texto.substring(0, Math.min(texto.length(), maxSubstr))
                     .replaceAll("[_\\-\\.]+$", "") + "_" + hash;
    } else {
        texto = texto.substring(0, longitudMaxCuerpo).replaceAll("[_\\-\\.]+$", "");
    }
    logMensaje = String.format("El nombre '%s' superaba el limite (%d chars) y fue truncado a '%s%s'",
            nombreOriginal, maxLen, texto, extReal);
}
String nombreFinal = texto + extReal;
```

---

### Reto Tecnico 3: Prevencion de Saturacion de Memoria (OOM) y Control de Cuotas de API (Rate Limiting)

#### Desafio
Al transferir expedientes con cientos de justificantes y megabytes de documentacion, descargar todos los ficheros de forma simultanea en memoria RAM desbordaria la maquina virtual (OutOfMemoryError). Simultaneamente, emitir cientos de llamadas consecutivas contra las APIs de Notion y Google Drive provoca bloqueos inmediatos por tasa de uso excedida (HTTP 429 Too Many Requests).

#### Solucion de Ingenieria
1. Manejo en Streaming de Flujos de Datos: La lectura de ficheros binarios se efectua directamente mediante flujos de entrada enlazados (InputStream / ByteArrayInputStream), transfiriendo el flujo binario al cliente de almacenamiento en la nube sin almacenar ficheros temporales en el disco del servidor ni retener arrays de bytes persistentes en heap.
2. Procesamiento Paginado y Control de Tasa (Throttling): Las consultas de identificadores se fragmentan en lotes controlados (lotes de 100 registros mediante cursores continuos start_cursor y has_more) incorporando tiempos de espera calculados entre iteraciones para respetar estrictamente las ventanas de consumo de las APIs proveedoras.

---

### Reto Tecnico 4: Rendimiento Reactivo en Arboles Documentales Complejos y Persistencia de Sesion

#### Desafio
En la aplicacion de diseno en React (FolderStructureBuilder), el usuario manipula arboles de carpetas dinamicos que contienen decenas de nodos anidados, reglas de filtrado y tablas de sanitizacion con mas de 40 mapeos de caracteres. Cualquier actualizacion de una sola variable provocaba la re-renderizacion completa de toda la jerarquia de componentes, degradando la tasa de cuadros por segundo (FPS) y la fluidez del cursor. Asimismo, era imperativo evitar las "sesiones fantasma" (estados donde el frontend muestra al usuario como autenticado mientras el token JWT en el backend ha expirado).

#### Solucion de Ingenieria
1. Memoizacion Selectiva y Comparadores Profundos: Se implemento el uso estricto de useMemo y funciones de comparacion profunda (areReglasEqual) en componentes sensibles como NamingSettingsModal, desacoplando los campos de texto del arbol visual subyacente.
2. Interceptor Global de Fetch y Ciclo de Sesion: Se configuro un interceptor sobre el fetch global de la ventana que escucha de manera reactiva cualquier codigo HTTP 401 Unauthorized emitido por Spring Security, disparando un evento en bus desacoplado que purga el almacenamiento local y fuerza la salida inmediata hacia la pantalla de inicio con mensaje de expiracion controlado.

#### Fragmento de Codigo Representativo (Frontend TypeScript):
```typescript
// Localizacion: documental-frontend/src/App.tsx
// Interceptor global para saneamiento de sesiones expiradas en cliente
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  if (response.status === 401) {
    window.dispatchEvent(new Event('auth_unauthorized'));
  }
  return response;
};
```

---

## 2.6. Seccion CI/CD, Despliegue e Infraestructura Cloud

### Directrices de Diseno y Maquetacion (Instrucciones)
- Presentacion: Flujo continuo horizontal que ilustre el ciclo de vida del software desde el control de versiones hasta los entornos de produccion.
- Aspectos a destacar: Separacion de entornos (.env.development y .env.production), analisis estatico de codigo, ejecucion de pruebas de regresion y automatizacion de despliegues ante push en la rama main.

### Textos Oficiales de la Seccion CI/CD

Titular de la Seccion (H2):
Canalizacion de Integracion y Despliegue Continuo (CI/CD).

Fase 1: Control de Versiones y Analisis Estatico
- Repositorio unificado bajo Git.
- Control de calidad en frontend mediante ESLint y verificacion rigurosa de tipos con compilador de TypeScript (tsc --noEmit).
- Verificacion de dependencias y plugins Maven en backend bajo estandar Java 21.

Fase 2: Suite de Pruebas Automatizadas
- Pruebas unitarias de servicios de dominio (GrafoRelacionesServiceTest, SanitizerServiceTest).
- Pruebas de integracion sobre controladores REST y filtros de seguridad con MockMvc.
- Aislamiento de llamadas externas mediante WireMock Standalone, validando las respuestas JSON de Notion y Google Drive sin dependencias de red externa.

Fase 3: Despliegue Automatizado del Frontend en Vercel
- Despliegue continuo activado por webhook en cada push a la rama principal.
- Asignacion automatica de certificado SSL/TLS con cifrado HTTPS de extremo a extremo.
- Distribucion global mediante red de entrega de contenidos (Edge CDN) con compresion y cacheado eficiente de activos estaticos.

Fase 4: Despliegue y Orquestacion del Backend en Railway
- Empaquetado en contenedor optimizado con maquina virtual Java 21 y configuracion de perfiles Spring Boot para produccion.
- Conexion cifrada a base de datos gestionada PostgreSQL con agrupamiento de conexiones (connection pooling).
- Gestion de secretos criptograficos de entorno para llaves maestras de Notion, certificados Google Service Account y firmas de claves privadas JWT.

---

## 2.7. Seccion de Enlaces, Repositorios y Documentacion Tecnica

### Directrices de Diseno y Maquetacion (Instrucciones)
- Disposicion: Fila o cuadricula de tarjetas de acceso directo con estilos interactivos y enlaces funcionales.
- Componentes obligatorios: Enlace al repositorio de codigo, enlace a la documentacion de endpoints REST (Swagger / OpenAPI) y enlace al visor de diagramas C4 y memoria tecnica del proyecto.

### Textos Oficiales de Accesos y Recursos Tecnicos

Titular de la Seccion (H2):
Recursos, Especificacion de API y Codigo Fuente.

Tarjeta 1: Repositorio del Proyecto
- Titulo: Codigo Fuente en GitHub
- Descripcion: Acceso al repositorio que alberga la implementacion completa del frontend en React y el backend en Spring Boot, incluyendo historial de commits y arquitectura de ramas.
- Texto del Boton: Ver Repositorio

Tarjeta 2: Documentacion de Endpoints REST
- Titulo: Especificacion OpenAPI y Contratos de Servicio
- Descripcion: Descripcion exhaustiva de las rutas HTTP, estructuras DTO de peticion y respuesta, y modelos de error para los modulos de plantillas, generacion asincrona y presets.
- Texto del Boton: Explorar API

Tarjeta 3: Modelado de Arquitectura C4
- Titulo: Memoria Tecnica y Diagramas C4
- Descripcion: Documentacion estructural de contexto, contenedores y componentes para cada flujo funcional del sistema, elaborada con estandares Mermaid y C4-PlantUML.
- Texto del Boton: Consultar Memoria Tecnica

---

# Resumen de Integracion y Recomendaciones de Implementacion

1. Separacion Limpia de Rutas:
   Se recomienda estructurar la aplicacion mediante un enrutador como react-router-dom, donde la ruta raiz (/) renderice la experiencia comercial B2B completa y la ruta secundaria (/arquitectura o /developers) aloje la documentacion tecnica.
2. Homogeneidad Estilistica:
   Ambas secciones deben compartir los mismos tokens de diseno de index.css y variables tematicas para preservar la coherencia de marca, manteniendo tipografias limpias y evitando cualquier tipo de icono informal o emoticono.
3. Ergonomia y Conversion:
   En la vista B2B, mantener siempre accesible el boton de solicitud de demostracion. En la vista tecnica, priorizar la legibilidad del codigo mediante bloques con resaltado sintactico y soporte de copia directa al portapapeles.
