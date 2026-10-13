import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight
} from 'lucide-react';

interface ProblemSolutionProps {
  onOpenDemoModal: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ onOpenDemoModal }) => {
  const painPoints = [
    {
      title: "Descargas y nomenclatura desordenada",
      desc: "Descargas individuales de facturas, nóminas y justificantes bancarios desde múltiples plataformas sin nomenclatura unificada."
    },
    {
      title: "Carpetas compartidas sin control",
      desc: "Carpetas compartidas sin estructura fija donde los miembros del equipo duplican archivos o reemplazan versiones por error."
    },
    {
      title: "Hojas de cálculo interminables",
      desc: "Hojas de cálculo interminables para comprobar que cada documento corresponde a la partida presupuestaria correcta."
    },
    {
      title: "Rechazos por caracteres y MAX_PATH",
      desc: "Nombres de fichero rechazados por plataformas públicas debido a tildes, caracteres especiales o rutas que exceden los límites del sistema."
    },
    {
      title: "Días de estrés antes del plazo oficial",
      desc: "Días enteros de trabajo contrarreloj antes de cada plazo de entrega preparando la memoria documental con riesgo constante de requerimiento."
    }
  ];

  const solutionPoints = [
    {
      title: "Sincronización directa con tus fuentes",
      desc: "Sincronización directa con tus bases de datos y sistemas de gestión para vincular gastos, contratos y comprobantes sin intervención manual."
    },
    {
      title: "Jerarquías de carpetas con un solo clic",
      desc: "Generación automática de jerarquías de carpetas organizadas por proyecto, partida y proveedor con un solo clic."
    },
    {
      title: "Motor de sanitización normativa integrado",
      desc: "Motor de sanitización integrado que normaliza los nombres según los estándares técnicos de cada administración pública."
    },
    {
      title: "Diagnóstico preventivo de coherencia",
      desc: "Diagnóstico preventivo de coherencia: detección inmediata de documentos faltantes o enlaces rotos antes del envío formal."
    },
    {
      title: "Despliegue directo preparado para auditoría",
      desc: "Expedientes completos desplegados en la nube corporativa, catalogados y preparados para superar cualquier auditoría técnica o financiera."
    }
  ];

  return (
    <section id="solucion" className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-4">
            <span>Resolución de Problemas Operativos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            El coste invisible de justificar expedientes a mano frente a la tranquilidad de automatizar con Subventio.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Cada convocatoria de subvención exige criterios documentales estrictos. Un solo archivo extraviado, un nombre con caracteres incompatibles o una discrepancia entre partidas puede desencadenar requerimientos de subsanación y penalizaciones económicas.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Traditional Chaos */}
          <div className="rounded-2xl border border-red-200/80 bg-red-50/20 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      El Método Tradicional
                    </h3>
                    <p className="text-xs text-red-700 font-medium">
                      Gestión Manual Dispersa
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-800 border border-red-200">
                  Alto Riesgo
                </span>
              </div>

              <div className="space-y-4">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-red-100 shadow-2xs">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-200/60 flex items-center justify-between text-xs text-red-700 font-medium">
              <span>Resultado: Cientos de horas perdidas y subsanaciones urgentes</span>
              <AlertTriangle className="w-4 h-4 shrink-0" />
            </div>
          </div>

          {/* Right Column: Subventio Ecosystem */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20 p-6 sm:p-8 flex flex-col justify-between shadow-md shadow-blue-500/5 relative overflow-hidden">
            
            {/* Top Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-blue-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      El Ecosistema Subventio
                    </h3>
                    <p className="text-xs text-blue-700 font-medium">
                      Estructuración Inteligente y Rigor
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Audit Ready
                </span>
              </div>

              <div className="space-y-4">
                {solutionPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-blue-100/80 shadow-2xs hover:border-blue-300 transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-100 flex items-center justify-between">
              <span className="text-xs text-blue-900 font-semibold">
                Control absoluto y tranquilidad garantizada ante inspecciones
              </span>
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Ver demostración</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
