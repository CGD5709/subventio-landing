import React from 'react';
import { 
  GitCommit, 
  TestTube2, 
  CloudRain, 
  Server, 
  Workflow,
  CheckCircle2
} from 'lucide-react';

export const CicdPipeline: React.FC = () => {
  const phases = [
    {
      num: "01",
      title: "Control de Versiones & Análisis Estático",
      badge: "Calidad de Código",
      icon: GitCommit,
      items: [
        "Repositorio unificado bajo Git.",
        "Control de calidad en frontend mediante ESLint y verificación rigurosa de tipos con TypeScript (tsc --noEmit).",
        "Verificación de dependencias y plugins Maven en backend bajo estándar Java 21 LTS."
      ]
    },
    {
      num: "02",
      title: "Suite de Pruebas Automatizadas",
      badge: "Testing Determinista",
      icon: TestTube2,
      items: [
        "Pruebas unitarias de servicios de dominio (GrafoRelacionesServiceTest, SanitizerServiceTest).",
        "Pruebas de integración sobre controladores REST y filtros de seguridad con MockMvc.",
        "Aislamiento de APIs de terceros mediante WireMock Standalone (sin dependencia de red externa)."
      ]
    },
    {
      num: "03",
      title: "Despliegue del Frontend en Vercel",
      badge: "Edge CDN & HTTPS",
      icon: CloudRain,
      items: [
        "Despliegue continuo activado por webhook en cada push verificado a la rama main.",
        "Asignación automática de certificado SSL/TLS con cifrado HTTPS estricto.",
        "Distribución global mediante Edge CDN con compresión Brotli y cacheado eficiente de activos estáticos."
      ]
    },
    {
      num: "04",
      title: "Orquestación del Backend en Railway",
      badge: "Contenedores Java 21",
      icon: Server,
      items: [
        "Empaquetado en contenedor optimizado con JVM Java 21 y perfil Spring Boot para producción.",
        "Conexión cifrada a PostgreSQL gestionado con HikariCP connection pooling.",
        "Gestión de variables y secretos criptográficos (claves maestras Notion, Google Service Account y JWT)."
      ]
    }
  ];

  return (
    <section id="cicd" className="py-20 lg:py-24 bg-[#08090a] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18e299]/10 border border-[#18e299]/30 text-[#18e299] text-xs font-mono font-medium mb-4">
            <Workflow className="w-3.5 h-3.5" />
            <span>Automatización DevOps &amp; Despliegue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Canalización de Integración y Despliegue Continuo (CI/CD).
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Garantía de entrega continua sin regresiones desde el commit local hasta los entornos de alta disponibilidad en producción.
          </p>
        </div>

        {/* 4 Pipeline Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <div 
                key={idx}
                className="bg-[#101114] rounded-2xl border border-white/[0.08] p-6 flex flex-col justify-between shadow-xl relative group hover:border-[#18e299]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#18e299]/10 text-[#18e299] border border-[#18e299]/20">
                      Fase {phase.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-black/50 border border-white/[0.06] flex items-center justify-center text-[#18e299]">
                      <Icon className="w-4 h-4 text-[#18e299]" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-4">
                    {phase.title}
                  </h3>

                  <ul className="space-y-3 text-xs text-neutral-300">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                  <span>{phase.badge}</span>
                  <span className="text-emerald-400">Automático</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
