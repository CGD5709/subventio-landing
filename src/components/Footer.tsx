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
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 text-left">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-white">
                  Subventio
                </span>
                <p className="text-[11px] text-slate-500 font-medium">
                  by El Salto Adelante
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Plataforma de automatización, sanitización y exportación documental para la justificación de subvenciones públicas, fondos NextGenerationEU y auditorías reglamentarias.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>RGPD Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span>OAuth 2.0 Security</span>
              </div>
            </div>
          </div>

          {/* Links: Vista Comercial */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-mono">
              Solución Comercial
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => scrollTo('inicio')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('solucion')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Problema vs. Solución
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('caracteristicas')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Características Principales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('metodologia')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Metodología (3 Pasos)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('casos-de-uso')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Métricas y Casos de Uso
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenDemoModal} 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Solicitar Demostración
                </button>
              </li>
            </ul>
          </div>

          {/* Links: Vista Técnica */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-mono">
              Área Técnica & Tribunal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={() => scrollTo('arquitectura')} 
                  className="hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <Cpu className="w-3 h-3 text-blue-400" />
                  <span>Hero de Arquitectura</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('tech-stack')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Stack Tecnológico (4 Capas)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('c4-diagrams')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Diagramas C4 & Hexagonal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('retos-tecnicos')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Retos BFS, MAX_PATH & Heap
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('cicd')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Canalización CI/CD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('recursos-tecnicos')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Recursos OpenAPI y Código
                </button>
              </li>
            </ul>
          </div>

          {/* Standards & Direct Access */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 font-mono">
              Convocatorias & Ámbito
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>NextGenerationEU (PRTR)</li>
              <li>Proyectos CDTI / Neotec</li>
              <li>Red.es / Kit Digital</li>
              <li>Fondos FEDER y FSE+</li>
              <li>Convocatorias Autonómicas</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Subventio by El Salto Adelante. Todos los derechos reservados. Software diseñado bajo estándares de alta rigurosidad documental.
          </p>

          <button
            onClick={() => scrollTo('inicio')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            <span>Volver arriba</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
