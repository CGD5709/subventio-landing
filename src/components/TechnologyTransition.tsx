import React from 'react';
import {
  Cpu,
  Terminal,
  ChevronDown,
  GitBranch,
  FileCode2,
  Layers
} from 'lucide-react';

export const TechnologyTransition: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <div
      id="tecnologia"
      className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f0eeeeff 12%, #e4e4e4ff 25%, #9c9c9cff 42%, #6e6e6eff 60%, #333333ff 78%, #08090a 100%)'
      }}
    >
      {/* Decorative ambient beams & glow in deep dark area */}
      <div
        className="pointer-events-none absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[380px] opacity-35 blur-[130px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(24, 226, 153, 0.40) 0%, rgba(12, 140, 94, 0.20) 50%, transparent 80%)'
        }}
      />

      {/* Cybernetic grid overlay fading in smoothly from dark zone */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 bg-grid-pattern"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 40%, black 75%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 40%, black 75%)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 text-center">

        {/* Pulsing Transition Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/20 text-[#18e299] text-xs font-mono font-medium mb-6 shadow-xl backdrop-blur-md animate-pulse">
          <Terminal className="w-3.5 h-3.5 text-[#18e299]" />
          <span>MODO INGENIERÍA &bull; ESPECIFICACIONES TÉCNICAS</span>
        </div>

        {/* Transition Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-[-0.02em] leading-tight mb-6 max-w-3xl mx-auto drop-shadow-lg">
          Del valor de negocio al{' '}
          <span className="text-[#18e299] font-medium">rigor de la ingeniería de software</span>.
        </h2>

        {/* Subtitle */}
        <p className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed mb-10 drop-shadow-sm">
          Explora la arquitectura hexagonal en Java 21, la resolución de grafos en memoria, los diagramas C4 y el pipeline de verificación que garantizan solvencia documental ante inspecciones públicas.
        </p>

        {/* Interactive Quick-Jump Technical Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => scrollTo('arquitectura')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] text-white text-xs font-mono transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <Cpu className="w-3.5 h-3.5 text-[#18e299]" />
            <span>Arquitectura Hexagonal</span>
          </button>

          <button
            onClick={() => scrollTo('tech-stack')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] text-white text-xs font-mono transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <Layers className="w-3.5 h-3.5 text-[#18e299]" />
            <span>Stack Tecnológico</span>
          </button>

          <button
            onClick={() => scrollTo('c4-diagrams')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] text-white text-xs font-mono transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <GitBranch className="w-3.5 h-3.5 text-[#18e299]" />
            <span>Diagramas C4</span>
          </button>

          <button
            onClick={() => scrollTo('retos-tecnicos')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[6px] bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.15] text-white text-xs font-mono transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <FileCode2 className="w-3.5 h-3.5 text-[#18e299]" />
            <span>Retos &amp; Código Fuente</span>
          </button>
        </div>

        {/* Animated Downward Smooth Indicator */}
        <div className="flex flex-col items-center justify-center gap-2 text-neutral-400">
          <span className="text-[11px] font-mono tracking-wider uppercase opacity-75">
            Desplaza hacia abajo para inspeccionar
          </span>
          <button
            onClick={() => scrollTo('arquitectura')}
            className="p-2 rounded-full border border-white/10 hover:border-[#18e299]/50 bg-white/[0.05] text-[#18e299] transition-all animate-bounce cursor-pointer"
            aria-label="Desplazar a sección de arquitectura"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Smooth bottom line seamlessly joining #08090a */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#18e299]/30 to-transparent" />
    </div>
  );
};
