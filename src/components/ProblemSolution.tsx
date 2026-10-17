import React from 'react';
import {
  CheckCircle2,
  XCircle,
  Sparkles
} from 'lucide-react';

interface ProblemSolutionProps {
  onOpenDemoModal: () => void;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = () => {
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
      title: "Rechazos por caracteres en sedes electrónicas",
      desc: "Nombres de fichero rechazados por plataformas públicas debido a tildes, eñes, espacios o caracteres no permitidos por la administración."
    },
    {
      title: "Días de estrés antes del plazo oficial",
      desc: "Días enteros de trabajo contrarreloj antes de cada plazo de entrega preparando la memoria documental con riesgo constante de requerimiento."
    }
  ];

  const solutionPoints = [
    {
      title: "Sincronización directa con tus fuentes",
      desc: "Sincronización directa con tus bases de datos y repositorios para vincular gastos, contratos y comprobantes sin intervención manual."
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
      desc: "Detección inmediata de documentos faltantes o facturas sin comprobante bancario antes del envío formal."
    },
    {
      title: "Despliegue directo preparado para auditoría",
      desc: "Expedientes completos desplegados en almacenamiento en la nube, catalogados y preparados para superar auditorías sin subsanaciones."
    }
  ];

  return (
    <section id="solucion" className="py-24 lg:py-32 bg-white text-neutral-900 border-b border-neutral-200 relative overflow-hidden">

      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#18e299]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#0c8c5e]" />
            <span>Resolución de Problemas Operativos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 tracking-tight leading-tight mb-5">
            El coste invisible de justificar expedientes a mano frente a la tranquilidad de automatizar con Subventio.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Cada convocatoria de subvención exige criterios documentales estrictos. Un solo archivo extraviado o un nombre con caracteres incompatibles puede desencadenar requerimientos forzosos y penalizaciones económicas.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Column: Traditional Chaos */}
          <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-600">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-950 text-lg">
                      El Método Tradicional
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-700 border border-red-200">
                  Alto Riesgo
                </span>
              </div>

              <div className="space-y-3">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-red-100 shadow-2xs">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-red-100 text-red-700 font-mono flex items-center justify-center shrink-0 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Subventio Ecosystem */}
          <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">

            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#18e299]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#18e299] flex items-center justify-center text-black font-extrabold shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-950 text-lg">
                      Con Subventio
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Audit-Ready
                </span>
              </div>

              <div className="space-y-3">
                {solutionPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-2xs transition-colors">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-[#0c8c5e] font-mono flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-950 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
