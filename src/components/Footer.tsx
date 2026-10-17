import React from 'react';
import { 
  FileText, 
  ArrowUp, 
  ShieldCheck, 
  Lock, 
  Cpu
} from 'lucide-react';

interface FooterProps {
  onOpenDemoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemoModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#08090a] text-neutral-400 text-xs border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0c8c5e] to-[#18e299] flex items-center justify-center text-black font-extrabold shadow-md">
                <FileText className="w-4 h-4 text-black" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white">
                  Subventio
                </span>
                <p className="text-[10px] text-neutral-500 font-mono">
                  Automatización Documental Inteligente
                </p>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Plataforma de generación, sanitización y exportación de expedientes para convocatorias públicas, fondos NextGenerationEU y auditorías reglamentarias.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/[0.08]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#18e299]" />
                <span>RGPD Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 bg-white/[0.03] px-2.5 py-1 rounded-lg border border-white/[0.08]">
                <Lock className="w-3.5 h-3.5 text-[#18e299]" />
                <span>OAuth 2.0 Security</span>
              </div>
            </div>
          </div>

          {/* Links: Vista Comercial */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Plataforma
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollTo('beneficios')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Ventajas y Ahorro
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('funcionalidades')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Capacidades y Fases
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('solucion')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Comparativa de Costes
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDemoModal} 
                  className="text-[#18e299] hover:underline transition-colors cursor-pointer font-semibold"
                >
                  Contáctanos
                </button>
              </li>
            </ul>
          </div>

          {/* Links: Vista Técnica */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Arquitectura
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollTo('arquitectura')} 
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Cpu className="w-3 h-3 text-[#18e299]" />
                  <span>Diagramas C4</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('tech-stack')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Stack Tecnológico
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('retos-tecnicos')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Retos de Ingeniería
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('cicd-pipeline')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pipeline CI/CD
                </button>
              </li>
            </ul>
          </div>

          {/* Normativa y Cumplimiento */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider font-mono">
              Conformidad
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Directivas CDTI I+D+i</li>
              <li>Normas NextGenerationEU</li>
              <li>Sedes Electrónicas BOE / BDNS</li>
              <li>Estándar POSIX / NTFS MAX_PATH</li>
              <li>Hash Criptográfico SHA-256</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#18e299]" />
            <p className="text-[11px] text-neutral-400">
              © {new Date().getFullYear()} Subventio. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-500 font-mono">
              Sistemas operativos 99.98% uptime
            </span>

            <button
              onClick={() => scrollTo('inicio')}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Subir al inicio</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
