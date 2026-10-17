import React from 'react';
import { 
  Cpu, 
  ArrowUp 
} from 'lucide-react';

export const ArchitectureHero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const principles = [
    { num: "01", text: "Arquitectura Hexagonal (Ports and Adapters)" },
    { num: "02", text: "Procesamiento Asíncrono no Bloqueante (@Async)" },
    { num: "03", text: "Desacoplamiento de Persistencia y Dominio Puro" },
    { num: "04", text: "Resolución de Grafos con Algoritmo BFS Bidireccional" },
    { num: "05", text: "Pipeline Modular de Sanitización y Hash Anti-Colisión" }
  ];

  return (
    <div id="arquitectura" className="relative pt-24 pb-16 bg-[#08090a] text-white border-b border-white/[0.08] bg-grid-pattern overflow-hidden">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#18e299]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Control Bar: Return to Commercial View & Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101114] border border-white/[0.1] text-[#18e299] text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5 text-[#18e299] shrink-0" />
            <span>Documentación Técnica de Arquitectura e Ingeniería — Proyecto Gestor Documental</span>
          </div>

          <button
            onClick={() => scrollTo('inicio')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white bg-[#101114] hover:bg-white/[0.08] px-3.5 py-2 rounded-xl border border-white/[0.1] transition-colors cursor-pointer group"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#18e299] group-hover:-translate-y-0.5 transition-transform" />
            <span>Volver a la Vista Comercial</span>
          </button>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl text-left mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.2] mb-6">
            Arquitectura, Patrones de Diseño y Retos de Ingeniería en Subventio.
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Análisis pormenorizado del sistema de estructuración y orquestación documental: diseño desacoplado mediante Arquitectura Hexagonal en Java 21 y Spring Boot, interfaz reactiva en React y TypeScript, resolución de grafos relacionales mediante búsqueda en anchura (BFS) y canalizaciones asíncronas para despliegue de archivos en la nube.
          </p>
        </div>

        {/* 5 Principles Badges Grid */}
        <div className="text-left mb-10">
          <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-4">
            Principios Nucleares de Ingeniería
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {principles.map((p, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#101114] border border-white/[0.08] shadow-sm hover:border-white/[0.15] transition-colors"
              >
                <span className="text-xs font-mono font-bold text-[#18e299] bg-[#18e299]/10 px-2 py-0.5 rounded border border-[#18e299]/20">
                  {p.num}
                </span>
                <span className="text-xs font-medium text-neutral-200">
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Sub-navigation Pill Bar */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-400 mr-2">Secciones Técnicas:</span>
          <button
            onClick={() => scrollTo('tech-stack')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#101114] hover:bg-[#18191e] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] cursor-pointer transition-colors"
          >
            Stack Tecnológico
          </button>
          <button
            onClick={() => scrollTo('c4-diagrams')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#101114] hover:bg-[#18191e] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] cursor-pointer transition-colors"
          >
            Diagramas C4 (Visor)
          </button>
          <button
            onClick={() => scrollTo('retos-tecnicos')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#101114] hover:bg-[#18191e] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] cursor-pointer transition-colors"
          >
            Retos de Ingeniería & Código
          </button>
          <button
            onClick={() => scrollTo('cicd')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#101114] hover:bg-[#18191e] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] cursor-pointer transition-colors"
          >
            Canalización CI/CD
          </button>
          <button
            onClick={() => scrollTo('recursos-tecnicos')}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#101114] hover:bg-[#18191e] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-white/[0.15] cursor-pointer transition-colors"
          >
            Recursos & Repositorio
          </button>
        </div>

      </div>
    </div>
  );
};
