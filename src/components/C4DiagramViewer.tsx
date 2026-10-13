import React, { useState } from 'react';
import { 
  Maximize2, 
  X, 
  Sun, 
  Moon, 
  ZoomIn, 
  Cpu, 
  Network
} from 'lucide-react';

interface DiagramItem {
  id: string;
  level: string;
  title: string;
  whiteSrc: string;
  transparentSrc: string;
  description: string;
  keyPorts: string[];
}

export const C4DiagramViewer: React.FC = () => {
  const [bgMode, setBgMode] = useState<'transparent' | 'white'>('transparent');
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>('context');
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState<boolean>(false);

  const diagrams: DiagramItem[] = [
    {
      id: 'context',
      level: 'Nivel 1: Contexto',
      title: 'Diagrama de Contexto del Sistema',
      whiteSrc: '/architecture/context-white.png',
      transparentSrc: '/architecture/context-transparent.png',
      description: 'Muestra la frontera del Gestor Documental Subventio y su interacción con los actores humanos (usuarios gestores) y los sistemas externos de origen (Notion API) y destino (Google Drive API & OAuth 2.0).',
      keyPorts: ['Usuario Final (Empleado)', 'API de Notion (Origen)', 'API de Google Drive (Destino)', 'Google OAuth 2.0 Server']
    },
    {
      id: 'containers',
      level: 'Nivel 2: Contenedores',
      title: 'Diagrama de Contenedores del Sistema',
      whiteSrc: '/architecture/containers-white.png',
      transparentSrc: '/architecture/containers-transparent.png',
      description: 'Detalla los tres contenedores principales: Aplicación Frontend SPA (React/TypeScript), Backend API (Java 21/Spring Boot) y Base de Datos (PostgreSQL), así como sus conexiones JDBC, REST y protocolos de red.',
      keyPorts: ['Frontend React SPA', 'Backend API Spring Boot', 'PostgreSQL Database', 'Boundary Hexagonal']
    },
    {
      id: 'comp-generacion',
      level: 'Nivel 3: Componentes',
      title: 'Generación Asíncrona y Despliegue en Cloud',
      whiteSrc: '/architecture/component-generacion-white.png',
      transparentSrc: '/architecture/component-generacion-transparent.png',
      description: 'Orquestación de la construcción física de carpetas y ficheros en segundo plano (@Async). Desacoplamiento mediante los puertos GestorCarpetas y GestorArchivos para garantizar tolerancia ante caídas HTTP y respuesta 202 Accepted inmediata.',
      keyPorts: ['GeneradorEstructurasAsyncService', 'GestorCarpetas (Port)', 'GestorArchivos (Port)', 'Pool taskExecutor']
    },
    {
      id: 'comp-plantillas',
      level: 'Nivel 3: Componentes',
      title: 'Gestión y Validación de Plantillas',
      whiteSrc: '/architecture/component-plantillas-white.png',
      transparentSrc: '/architecture/component-plantillas-transparent.png',
      description: 'Módulo responsable del diseño visual, validación de variables de interpolación y persistencia JSON de las plantillas de expedientes en PostgreSQL mediante Spring Data JPA.',
      keyPorts: ['PlantillasService', 'PlantillaRepository', 'ValidadorVariables', 'GeneradorEstructurasController']
    },
    {
      id: 'comp-presets',
      level: 'Nivel 3: Componentes',
      title: 'Presets y Motor de Sanitización de Nombres',
      whiteSrc: '/architecture/component-presets-white.png',
      transparentSrc: '/architecture/component-presets-transparent.png',
      description: 'Motor secuencial de depuración normativa: eliminación de diacríticos, caracteres prohibidos en NTFS/POSIX, evasión de nombres reservados del kernel y truncamiento inteligente con hash MD5 anti-colisión.',
      keyPorts: ['SanitizerService', 'PresetsRepository', 'HashAntiColision', 'ReglasSanitizacionDTO']
    },
    {
      id: 'comp-seguridad',
      level: 'Nivel 3: Componentes',
      title: 'Seguridad, Autenticación y Control de Accesos',
      whiteSrc: '/architecture/component-seguridad-white.png',
      transparentSrc: '/architecture/component-seguridad-transparent.png',
      description: 'Filtro interceptor stateless JwtAuthenticationFilter, servicio de validación de tokens JJWT, encriptación BCrypt y resolución granular de fuentes según permisos y roles de usuario.',
      keyPorts: ['JwtAuthenticationFilter', 'JwtService', 'SecurityConfig', 'PermisosService']
    },
    {
      id: 'comp-sincronizacion',
      level: 'Nivel 3: Componentes',
      title: 'Sincronización con el Origen de Datos (Notion)',
      whiteSrc: '/architecture/component-sincronizacion-white.png',
      transparentSrc: '/architecture/component-sincronizacion-transparent.png',
      description: 'Consumo diferencial del árbol relacional de Notion mediante el puerto ConectorFuentes y el adaptador NotionAdapter (RestTemplate con paginación cursor-based). Reconciliación en tabla notion_nodes.',
      keyPorts: ['ConectorFuentes (Port)', 'NotionAdapter', 'NotionSyncService', 'NotionNodeRepository']
    }
  ];

  const currentDiagram = diagrams.find(d => d.id === selectedDiagramId) || diagrams[0];
  const activeImageSrc = bgMode === 'white' ? currentDiagram.whiteSrc : currentDiagram.transparentSrc;

  return (
    <section id="c4-diagrams" className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-mono font-medium mb-4">
            <Network className="w-3.5 h-3.5" />
            <span>Modelo C4 & Arquitectura Hexagonal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Modelo C4 y Arquitectura Hexagonal: Desacoplamiento de Dominio.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            El sistema implementa estrictamente los principios de la Arquitectura Hexagonal (Puertos y Adaptadores). El núcleo de dominio y los servicios de orquestación no mantienen acoplamiento con librerías de proveedores cloud ni con detalles de persistencia.
          </p>
        </div>

        {/* Ports and Adapters Architecture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono font-bold text-blue-400 mb-1">
              Puerto ConectorFuentes (Outbound)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Desacopla la consulta de jerarquías y esquemas. Implementado por <code>NotionAdapter</code>, permitiendo sustituir el origen en el futuro sin modificar la lógica de negocio.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono font-bold text-emerald-400 mb-1">
              Puerto GestorCarpetas (Outbound)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Contrato abstracto para la creación recursiva de directorios y resolución de IDs raíz. Su implementación en producción es <code>GoogleDriveAdapter</code>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <div className="text-xs font-mono font-bold text-indigo-400 mb-1">
              Puerto GestorArchivos (Outbound)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Contrato para la transferencia física de flujos binarios hacia el destino cloud mediante streaming directo en memoria.
            </p>
          </div>
        </div>

        {/* Asynchronous Execution Steps Circuit */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-left mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Flujo de Ejecución Asíncrona y Manejo de Concurrencia (HTTP 202 Circuit)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-blue-400 font-bold block mb-1">Paso 1: POST REST</span>
              <span className="text-slate-300 font-sans">GeneradorEstructurasController recibe el árbol JSON serializado.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-blue-400 font-bold block mb-1">Paso 2: Registro BD</span>
              <span className="text-slate-300 font-sans">Registra cabecera en tabla generacion con estado IN_PROGRESS.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-blue-400 font-bold block mb-1">Paso 3: @Async Dispatch</span>
              <span className="text-slate-300 font-sans">Despacha al pool desacoplado taskExecutor en segundo plano.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-emerald-400 font-bold block mb-1">Paso 4: 202 Accepted</span>
              <span className="text-slate-300 font-sans">Responde de inmediato al frontend evitando cortes de pasarela HTTP.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
              <span className="text-indigo-400 font-bold block mb-1">Paso 5: Polling React</span>
              <span className="text-slate-300 font-sans">El cliente consulta periódicamente trazas de auditoría en tiempo real.</span>
            </div>
          </div>
        </div>

        {/* Diagram Interactive Viewer Container */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl text-left">
          
          {/* Top Control Bar of Diagram Viewer */}
          <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 bg-slate-950">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900/50">
                  {currentDiagram.level}
                </span>
                <h3 className="text-base font-bold text-white">
                  {currentDiagram.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl font-normal">
                {currentDiagram.description}
              </p>
            </div>

            {/* View Mode Controls: Background Toggle & Zoom */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                <button
                  onClick={() => setBgMode('transparent')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    bgMode === 'transparent' 
                      ? 'bg-blue-600 text-white shadow-2xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Ver con fondo transparente técnico"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Fondo Transparente</span>
                </button>
                <button
                  onClick={() => setBgMode('white')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    bgMode === 'white' 
                      ? 'bg-white text-slate-900 shadow-2xs' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                  title="Ver con fondo blanco de alto contraste"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Fondo Blanco</span>
                </button>
              </div>

              <button
                onClick={() => setIsFullscreenModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                title="Ampliar diagrama en pantalla completa"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Pantalla Completa</span>
              </button>
            </div>
          </div>

          {/* Diagram Selector Tabs */}
          <div className="px-4 py-3 bg-slate-950/70 border-b border-slate-800 overflow-x-auto">
            <div className="flex items-center gap-2 min-w-max">
              {diagrams.map((d) => {
                const isSelected = selectedDiagramId === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDiagramId(d.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {d.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Diagram Display Canvas */}
          <div 
            className={`p-6 sm:p-10 flex items-center justify-center min-h-[460px] max-h-[640px] overflow-auto transition-colors duration-300 relative ${
              bgMode === 'white' 
                ? 'bg-white' 
                : 'bg-slate-950 bg-grid-pattern'
            }`}
          >
            <img 
              src={activeImageSrc} 
              alt={currentDiagram.title}
              className="max-h-[560px] w-auto object-contain rounded-lg transition-transform hover:scale-[1.01]"
              loading="lazy"
            />
          </div>

          {/* Diagram Component Footer Legend */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 font-mono">Componentes clave:</span>
              {currentDiagram.keyPorts.map((k, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800 font-mono text-[11px]">
                  {k}
                </span>
              ))}
            </div>
            <button
              onClick={() => setIsFullscreenModalOpen(true)}
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Ver en alta resolución</span>
            </button>
          </div>

        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {isFullscreenModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
            <div>
              <span className="text-xs font-mono text-blue-400 mr-2">{currentDiagram.level}</span>
              <h3 className="text-lg font-bold text-white inline">{currentDiagram.title}</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setBgMode('transparent')}
                  className={`px-2.5 py-1 rounded-lg ${bgMode === 'transparent' ? 'bg-blue-600 text-white' : 'text-slate-400'}`}
                >
                  Transparente
                </button>
                <button
                  onClick={() => setBgMode('white')}
                  className={`px-2.5 py-1 rounded-lg ${bgMode === 'white' ? 'bg-white text-slate-900' : 'text-slate-400'}`}
                >
                  Fondo Blanco
                </button>
              </div>
              <button
                onClick={() => setIsFullscreenModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className={`flex-1 flex items-center justify-center p-4 overflow-auto rounded-2xl ${bgMode === 'white' ? 'bg-white' : 'bg-slate-950'}`}>
            <img 
              src={activeImageSrc} 
              alt={currentDiagram.title} 
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};
