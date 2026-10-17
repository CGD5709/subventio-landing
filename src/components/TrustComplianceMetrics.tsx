import React from 'react';
import { ShieldCheck, FileCheck, Zap, Landmark } from 'lucide-react';

export const TrustComplianceMetrics: React.FC = () => {
  const complianceBadges = [
    { name: "BDNS", label: "Base de Datos Nacional de Subvenciones", tag: "Indexación oficial" },
    { name: "BOE / Sedes", label: "Estándares POSIX & Windows Sedes", tag: "Validado" },
    { name: "NextGenerationEU", label: "Mecanismo Recuperación & Resiliencia", tag: "Conforme" },
    { name: "CDTI Innovación", label: "Directrices de Gastos I+D+i", tag: "Homologable" },
    { name: "Fondos FEDER", label: "Normativa de Cohesión Territorial", tag: "Certificable" },
    { name: "ENISA", label: "Líneas de Préstamo Participativo", tag: "Estructurado" }
  ];

  const platformStats = [
    {
      value: "+€42.8M",
      label: "Fondos procesados",
      subtext: "Bajo la arquitectura de carpetas y reglas de Subventio",
      icon: Landmark
    },
    {
      value: "< 30s",
      label: "Generación de expediente",
      subtext: "De base de datos cruda a estructura lista para auditoría",
      icon: Zap
    },
    {
      value: "0",
      label: "Rechazos por formato",
      subtext: "Cero incidencias por tildes, caracteres prohibidos o símbolos incompatibles en sedes electrónicas",
      icon: ShieldCheck
    },
    {
      value: "100%",
      label: "Trazabilidad verificable",
      subtext: "Log inmutable de auditoría para cada archivo transferido",
      icon: FileCheck
    }
  ];

  return (
    <section className="relative border-y border-white/[0.08] bg-[#070b12] py-14 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-subtle-radial pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compliance badges ticker / grid */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#18e299] animate-pulse" />
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Ecosistema de Cumplimiento Normativo y Sedes Públicas
              </p>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Estructuras compatibles con las directrices oficiales de auditoría
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {complianceBadges.map((badge, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col justify-between p-3.5 rounded-lg border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#18e299]/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-sm text-slate-200 group-hover:text-[#18e299] transition-colors">
                    {badge.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#18e299]/10 text-[#18e299] border border-[#18e299]/20">
                    {badge.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent my-10" />

        {/* Live Platform Stats (Mintlify + Scotch style) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Rendimiento contrastado en sedes oficiales
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Métricas reales de rendimiento y fiabilidad técnica sin riesgo de subsanaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {platformStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="relative p-6 rounded-xl border border-white/[0.08] bg-[#0c121d]/80 hover:border-[#18e299]/40 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#18e299]/10 border border-[#18e299]/20 text-[#18e299] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono group-hover:text-[#18e299] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
