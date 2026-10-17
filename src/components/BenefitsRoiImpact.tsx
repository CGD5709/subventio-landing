import React, { useState } from 'react';
import { 
  Clock, 
  TrendingUp, 
  ShieldCheck, 
  FolderTree, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

interface BenefitsRoiImpactProps {
  onOpenDemoModal: () => void;
}

export const BenefitsRoiImpact: React.FC<BenefitsRoiImpactProps> = ({ onOpenDemoModal }) => {
  const [expedientesCount, setExpedientesCount] = useState<number>(10);

  // Constants for ROI calculations
  const hoursSavedPerExpediente = 34;
  const hourlyRate = 35;
  const totalHoursSaved = expedientesCount * hoursSavedPerExpediente;
  const totalMoneySaved = totalHoursSaved * hourlyRate;
  const monthsEquiv = (totalHoursSaved / 160).toFixed(1);

  const keyAdvantages = [
    {
      icon: Clock,
      stat: "85%",
      label: "Ahorro de Tiempo",
      title: "De 40 horas a 6 horas por expediente",
      description: "Elimina la búsqueda manual de facturas y justificantes de pago. Subventio vincula automáticamente cada documento contable a su partida presupuestaria.",
      highlight: "34 horas de trabajo técnico liberadas por cada cierre"
    },
    {
      icon: ShieldCheck,
      stat: "0%",
      label: "Riesgo de Rechazo",
      title: "Blindaje contra incidencias de formato",
      description: "El motor de sanitización elimina preventivamente tildes, eñes, espacios y caracteres prohibidos que provocan el rechazo automático de expedientes en las sedes electrónicas.",
      highlight: "Garantía de admisión documental sin requerimientos de subsanación"
    },
    {
      icon: TrendingUp,
      stat: "100%",
      label: "IMPORTE ASEGURADO",
      title: "Blindaje contra reintegros de subvención",
      description: "Asegura que cada euro de gasto elegible esté respaldado por su soporte probatorio en la carpeta y formato exactos, eliminando el riesgo de devoluciones con intereses por defecto de forma.",
      highlight: "Máxima solvencia documental ante cualquier inspección pública"
    },
    {
      icon: FolderTree,
      stat: "100%",
      label: "RIGOR ESTRUCTURAL",
      title: "Réplica exacta de la guía de justificación",
      description: "Modela y reutiliza plantillas que reproducen con precisión milimétrica la jerarquía de carpetas exigida por cada organismo convocante (CDTI, Fondos NextGen, ministerios o CC.AA.).",
      highlight: "Presentación impecable adaptada a los criterios del evaluador"
    }
  ];

  return (
    <section id="beneficios" className="relative py-24 lg:py-32 bg-[#fafafa] text-neutral-900 border-b border-neutral-200 overflow-hidden">
      
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#18e299]/10 via-[#0c8c5e]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18e299]/15 border border-[#18e299]/30 text-[#065f46] text-xs font-mono font-medium mb-4">
            <span>Impacto Financiero &bull; ROI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 tracking-[-0.02em] leading-tight mb-5">
            Ahorra más de <span className="text-[#0c8c5e] font-semibold">34 horas de trabajo</span> en cada justificación pública.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Compara el coste del método tradicional frente a la rentabilidad directa de estructurar tus expedientes con un motor inteligente.
          </p>
        </div>

        {/* Interactive Time Savings & ROI Calculator */}
        <div className="mb-20 rounded-[10px] border border-neutral-200/90 bg-white p-6 sm:p-10 relative overflow-hidden shadow-sm">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#18e299]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Interactive Control */}
            <div className="w-full lg:w-5/12 text-left">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                ¿Cuántos expedientes gestionas al año?
              </h3>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                Calcula las horas técnicas recuperadas y el ahorro de costes salariales que tu equipo dejará de malgastar en burocracia manual.
              </p>

              {/* Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-mono text-neutral-700">
                  <span>Expedientes anuales:</span>
                  <span className="text-xl font-bold text-[#0c8c5e]">{expedientesCount} expedientes</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="25" 
                  value={expedientesCount} 
                  onChange={(e) => setExpedientesCount(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
                />
                
                <div className="flex justify-between text-[11px] font-mono text-neutral-500 pt-1">
                  <span>1 expediente</span>
                  <span>25 expedientes</span>
                </div>
              </div>
            </div>

            {/* Right: Calculated Impact Stats Grid */}
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 shadow-2xs">
                <div className="text-xs text-neutral-500 font-medium mb-1 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0c8c5e]" />
                  <span>Horas de trabajo liberadas</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0c8c5e] font-mono mb-1">
                  {totalHoursSaved}h
                </div>
                <p className="text-xs text-neutral-600">
                  Equivalente a <strong className="text-neutral-900 font-semibold">{monthsEquiv} meses</strong> de jornada completa.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 shadow-2xs">
                <div className="text-xs text-neutral-500 font-medium mb-1 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#0c8c5e]" />
                  <span>Coste técnico recuperado</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-mono mb-1">
                  €{totalMoneySaved.toLocaleString('es-ES')}
                </div>
                <p className="text-xs text-neutral-600">
                  Estimado a 35€/h coste hora técnico medio.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50/70 shadow-2xs">
                <div className="text-xs text-neutral-500 font-medium mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Riesgo de subsanación</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-mono mb-1">
                  0%
                </div>
                <p className="text-xs text-neutral-600">
                  Archivos 100% conformes con requisitos de sedes.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="text-xs text-[#065f46] font-semibold mb-1">
                    Retorno Operativo Inmediato
                  </div>
                  <div className="text-sm font-semibold text-neutral-950">
                    Equipo enfocado en conseguir nuevas subvenciones, no en archivar PDF.
                  </div>
                </div>
                <button
                  onClick={onOpenDemoModal}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#065f46] hover:underline cursor-pointer"
                >
                  <span>Contáctanos para tu estudio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Advantage Pillars Cards (Mintlify Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {keyAdvantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl border border-neutral-200/90 bg-white hover:border-[#18e299] hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#18e299]/15 border border-[#18e299]/30 text-[#0c8c5e] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-black text-neutral-950 font-mono group-hover:text-[#0c8c5e] transition-colors">
                        {adv.stat}
                      </span>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                        {adv.label}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 mb-3 group-hover:text-[#0c8c5e] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#0c8c5e] shrink-0" />
                  <span>{adv.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
