import React, { useState } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Terminal
} from 'lucide-react';

export const TechnicalChallenges: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const challenges = [
    {
      id: "bfs-graph",
      title: "1. Resolución de Relaciones Complejas mediante Algoritmos de Grafos (BFS)",
      badge: "Algoritmos & Grafos",
      desafio: "En esquemas de datos relacionales distribuidos en Notion, un archivo documental (por ejemplo, el comprobante bancario de un pago) puede no encontrarse en la tabla principal del proyecto, sino vinculado a través de una cadena transitiva de bases de datos intermedias (por ejemplo: Proyecto -> Licitación -> Factura -> Justificante). Era necesario descubrir la ruta de unión de forma autónoma y bidireccional sin requerir que el usuario configure consultas SQL manuales.",
      solucion: "Se diseñó e implementó el servicio GrafoRelacionesService. El componente inspecciona los esquemas de bases de datos en origen, construye un mapa bidireccional en memoria registrando tanto saltos directos como inversos, y aplica un algoritmo de Búsqueda en Anchura (Breadth-First Search - BFS) con control de nodos visitados y límite máximo de profundidad a 6 saltos. Asimismo, incorpora una política de sincronización silenciosa con tiempo de vida útil en caché (TTL) de 15 minutos para evitar consultas redundantes de esquemas.",
      fileLocation: "core/service/generadorEstructuras/GrafoRelacionesService.java",
      language: "java",
      code: `// Localizacion: core/service/generadorEstructuras/GrafoRelacionesService.java
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
}`
    },
    {
      id: "sanitization-maxpath",
      title: "2. Sanitización Estricta, MAX_PATH y Normas de la Administración Pública",
      badge: "Sistemas & Seguridad POSIX/NTFS",
      desafio: "Google Drive permite almacenar archivos con casi cualquier carácter Unicode y profundidades arbitrarias de carpetas mediante IDs alfanuméricos. Sin embargo, al descargar el expediente en local o sincronizar en Windows, el sistema colapsa de forma silenciosa si se superan los 260 caracteres de ruta absoluta (límite MAX_PATH), si existen nombres reservados del kernel (CON, PRN, AUX, NUL), o caracteres ilegales (\\ / : * ? \" < > |). Asimismo, sedes electrónicas públicas prohíben terminantemente tildes, diacríticos y espacios en blanco.",
      solucion: "Se desarrolló un motor modular (SanitizerService) en pipeline secuencial de 6 pasos: interpolación de variables, sustitución fonética de diacríticos y tildes, depuración de caracteres prohibidos en POSIX/NTFS, normalización de separadores reglamentarios, evasión de nombres reservados mediante prefijado de seguridad (_CON, _PRN), y truncamiento inteligente preservando la extensión real (.pdf) con un hash criptográfico corto (4 caracteres MD5) para evitar colisiones.",
      fileLocation: "core/service/generadorEstructuras/SanitizerService.java",
      language: "java",
      code: `// Localizacion: core/service/generadorEstructuras/SanitizerService.java
// Truncamiento inteligente con preservacion de extension y hash anti-colision
if (texto.length() > longitudMaxCuerpo) {
    fueTruncado = true;
    if (reglas.isTruncarConHash()) {
        String hash = generarHashCorto(cuerpo); // 4 caracteres hexadecimales MD5
        int maxSubstr = Math.max(1, longitudMaxCuerpo - 5);
        texto = texto.substring(0, Math.min(texto.length(), maxSubstr))
                     .replaceAll("[_\\\\-\\\\.]+$", "") + "_" + hash;
    } else {
        texto = texto.substring(0, longitudMaxCuerpo).replaceAll("[_\\\\-\\\\.]+$", "");
    }
    logMensaje = String.format("El nombre '%s' superaba el limite (%d chars) y fue truncado a '%s%s'",
            nombreOriginal, maxLen, texto, extReal);
}
String nombreFinal = texto + extReal;`
    },
    {
      id: "oom-streaming",
      title: "3. Prevención de Saturación de Memoria (OOM) y Control de Cuotas API",
      badge: "Concurrencia & Streaming",
      desafio: "Al transferir expedientes con cientos de justificantes y gigabytes de documentación, descargar todos los ficheros de forma simultánea en memoria RAM desbordaría la máquina virtual (OutOfMemoryError). Simultáneamente, emitir cientos de llamadas consecutivas contra las APIs de Notion y Google Drive provoca bloqueos inmediatos por tasa de uso excedida (HTTP 429 Too Many Requests).",
      solucion: "1. Manejo en Streaming de Flujos de Datos: La lectura de ficheros binarios se efectúa directamente mediante flujos de entrada enlazados (InputStream / ByteArrayInputStream), transfiriendo el flujo binario al cliente de almacenamiento en la nube sin almacenar ficheros temporales en disco ni retener arrays de bytes persistentes en heap. 2. Procesamiento Paginado y Throttling: Las consultas de identificadores se fragmentan en lotes controlados de 100 registros mediante cursores continuos (start_cursor y has_more) con pausas preventivas entre iteraciones.",
      fileLocation: "core/service/generadorEstructuras/StreamingDriveService.java",
      language: "java",
      code: `// Localizacion: core/service/generadorEstructuras/StreamingDriveService.java
// Transferencia en flujo directo por chunks sin acumular en heap (Previene OutOfMemoryError)
try (InputStream binarioStream = conectorFuentes.obtenerFlujoDescarga(urlDescargaTemporal)) {
    FileContent mediaContent = new FileContent(mimeType, binarioStream);
    
    // Subida directa al cliente oficial de Google Drive mediante streaming
    File archivoCreado = googleDriveClient.files()
        .create(metadataArchivo, mediaContent)
        .setFields("id, name, webViewLink, size")
        .execute();
        
    registrarAuditoriaExito(archivoCreado.getId(), archivoCreado.getName());
} catch (IOException e) {
    manejarReintentoConExponencialBackoff(e);
}`
    },
    {
      id: "reactive-perf",
      title: "4. Rendimiento Reactivo en Árboles Documentales y Persistencia de Sesión",
      badge: "Frontend React & Ergonomía",
      desafio: "En la aplicación de diseño en React (FolderStructureBuilder), el usuario manipula árboles de carpetas dinámicos con decenas de nodos anidados, reglas de filtrado y tablas de sanitización con más de 40 mapeos. Cualquier actualización provocaba la re-renderización de toda la jerarquía, degradando los FPS. Asimismo, era imperativo evitar 'sesiones fantasma' (frontend mostrando usuario logueado mientras el token JWT en el backend había expirado).",
      solucion: "1. Memoización Selectiva y Comparadores Profundos: Se implementó useMemo y funciones de comparación profunda (areReglasEqual) en componentes sensibles como NamingSettingsModal, desacoplando los inputs de texto del árbol visual subyacente. 2. Interceptor Global de Fetch: Intercepción reactiva de respuestas HTTP 401 Unauthorized de Spring Security que despacha un evento en el bus desacoplado de la ventana ('auth_unauthorized'), purga el localStorage y fuerza la salida inmediata con notificación de expiración controlada.",
      fileLocation: "documental-frontend/src/App.tsx",
      language: "typescript",
      code: `// Localizacion: documental-frontend/src/App.tsx
// Interceptor global para saneamiento de sesiones expiradas en cliente
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  if (response.status === 401) {
    // Purga de sesion local y emision de evento reactivo desacoplado
    localStorage.removeItem('subventio_auth_token');
    window.dispatchEvent(new Event('auth_unauthorized'));
  }
  return response;
};`
    }
  ];

  return (
    <section id="retos-tecnicos" className="py-20 lg:py-28 bg-[#08090a] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18e299]/10 border border-[#18e299]/30 text-[#18e299] text-xs font-mono font-medium mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Retos de Ingeniería del Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Retos Técnicos y Soluciones de Ingeniería.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Resolución rigurosa de desafíos de complejidad algorítmica, límites de sistemas de archivos de SO y ergonomía de concurrencia.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {challenges.map((c, idx) => {
            const isSelected = activeChallenge === idx;
            return (
              <button
                key={c.id}
                onClick={() => setActiveChallenge(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#18e299]/15 text-white border-[#18e299]/40 shadow-md shadow-[#18e299]/10'
                    : 'bg-[#101114] text-neutral-400 hover:text-neutral-200 border-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                <span className={`text-[11px] font-mono font-bold block mb-1 ${isSelected ? 'text-[#18e299]' : 'text-neutral-500'}`}>
                  {c.badge}
                </span>
                <span className="text-xs font-semibold block line-clamp-2 leading-snug">
                  {c.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Challenge Deep Dive Card */}
        <div className="bg-[#101114] rounded-2xl border border-white/[0.08] p-6 sm:p-8 text-left shadow-2xl">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono font-bold text-[#18e299] bg-[#18e299]/10 px-2.5 py-1 rounded border border-[#18e299]/20 mb-2 inline-block">
                {challenges[activeChallenge].badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {challenges[activeChallenge].title}
              </h3>
            </div>

            <div className="text-xs font-mono text-neutral-400 bg-[#121212] px-3 py-1.5 rounded-lg border border-white/[0.08]">
              {challenges[activeChallenge].fileLocation}
            </div>
          </div>

          {/* Challenge Description & Solution Explanation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 block mb-2">
                Desafío Técnico
              </span>
              <p className="text-neutral-300 leading-relaxed font-normal text-xs sm:text-sm">
                {challenges[activeChallenge].desafio}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Solución de Ingeniería
              </span>
              <p className="text-neutral-300 leading-relaxed font-normal text-xs sm:text-sm">
                {challenges[activeChallenge].solucion}
              </p>
            </div>
          </div>

          {/* Real Code Snippet Box with Copy Button */}
          <div>
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e0e0e] rounded-t-xl border-t border-x border-white/[0.08] text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#18e299]" />
                <span>{challenges[activeChallenge].fileLocation}</span>
              </div>
              <button
                onClick={() => handleCopy(challenges[activeChallenge].code, activeChallenge)}
                className="flex items-center gap-1.5 text-neutral-300 hover:text-white px-2.5 py-1 rounded bg-[#181818] hover:bg-[#222222] transition-colors cursor-pointer text-[11px]"
              >
                {copiedIndex === activeChallenge ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copiar Código</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 sm:p-5 bg-[#0c0d10] text-neutral-200 rounded-b-xl border border-white/[0.08] overflow-x-auto text-xs font-mono leading-relaxed">
              <code>{challenges[activeChallenge].code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
