import React from 'react';
import { 
  FileCode, 
  BookOpen, 
  ArrowRight,
  FolderGit2
} from 'lucide-react';

interface TechnicalResourcesProps {
  onScrollToC4: () => void;
}

export const TechnicalResources: React.FC<TechnicalResourcesProps> = ({ onScrollToC4 }) => {
  const resources = [
    {
      title: "Código Fuente en GitHub",
      desc: "Acceso al repositorio que alberga la implementación completa del frontend en React y el backend en Spring Boot, incluyendo historial de commits y arquitectura de ramas.",
      btnText: "Ver Repositorio",
      icon: FolderGit2,
      badge: "Open Source / Core",
      onClick: () => {
        window.open('https://github.com', '_blank');
      }
    },
    {
      title: "Especificación OpenAPI y Contratos de Servicio",
      desc: "Descripción exhaustiva de las rutas HTTP, estructuras DTO de petición y respuesta, y modelos de error para los módulos de plantillas, generación asíncrona y presets.",
      btnText: "Explorar API (Swagger)",
      icon: FileCode,
      badge: "Swagger / OpenAPI 3.0",
      onClick: () => {
        alert("Especificación OpenAPI v3.0: Documentación interactiva disponible en el endpoint /swagger-ui/index.html del entorno backend.");
      }
    },
    {
      title: "Memoria Técnica y Diagramas C4",
      desc: "Documentación estructural de contexto, contenedores y componentes para cada flujo funcional del sistema, elaborada con estándares Mermaid y C4-PlantUML.",
      btnText: "Consultar Memoria Técnica",
      icon: BookOpen,
      badge: "Modelo C4 Completo",
      onClick: onScrollToC4
    }
  ];

  return (
    <section id="recursos-tecnicos" className="py-20 lg:py-24 bg-[#08090a] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18e299]/10 border border-[#18e299]/30 text-[#18e299] text-xs font-mono font-medium mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Documentación de Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-white">
            Recursos, Especificación de API y Código Fuente.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-normal">
            Acceso directo a los artefactos de ingeniería, contratos de integración y esquemas arquitectónicos del tribunal evaluador.
          </p>
        </div>

        {/* 3 Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {resources.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#101114] rounded-2xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-xl group hover:border-[#18e299]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-black/50 border border-white/[0.08] flex items-center justify-center text-[#18e299] group-hover:bg-[#18e299] group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.08]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <button
                    onClick={item.onClick}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-neutral-200 bg-[#141414] hover:bg-[#202020] hover:text-white border border-white/[0.1] transition-colors cursor-pointer group"
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
