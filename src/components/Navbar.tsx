import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  ArrowRight, 
  Cpu, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['inicio', 'solucion', 'caracteristicas', 'metodologia', 'casos-de-uso', 'arquitectura', 'demo'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5' 
          : 'bg-white/60 backdrop-blur-xs border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => scrollTo('inicio')} 
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  Subventio
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase bg-blue-50 text-blue-700 border border-blue-200/60 rounded-full">
                  B2B SaaS
                </span>
              </div>
              <p className="text-[11px] text-slate-700 font-medium tracking-tight">
                by El Salto Adelante
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => scrollTo('solucion')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === 'solucion' 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Solución
            </button>
            <button
              onClick={() => scrollTo('caracteristicas')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === 'caracteristicas' 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Características
            </button>
            <button
              onClick={() => scrollTo('metodologia')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === 'metodologia' 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Metodología
            </button>
            <button
              onClick={() => scrollTo('casos-de-uso')}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === 'casos-de-uso' 
                  ? 'text-blue-600 bg-blue-50/80' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Casos de Uso
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Technical Link */}
            <button
              onClick={() => scrollTo('arquitectura')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                activeSection === 'arquitectura'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'text-slate-700 bg-slate-100/80 border-slate-300 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
              title="Acceder a la documentación técnica de arquitectura e ingeniería"
            >
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>Para Desarrolladores</span>
            </button>

            {/* Client Login Mock */}
            <button
              onClick={() => alert("Portal de clientes en producción: el acceso directo se proporciona a través del espacio corporativo configurado para su entidad.")}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-2 py-1.5 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Iniciar Sesión
            </button>

            {/* Primary CTA */}
            <button
              onClick={onOpenDemoModal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer group"
            >
              <span>Solicitar Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollTo('arquitectura')}
              className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-md"
            >
              Arquitectura
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Menú principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-slate-200 bg-white/95 rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo('solucion')}
                className="flex items-center justify-between p-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-left"
              >
                <span>Solución</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('caracteristicas')}
                className="flex items-center justify-between p-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-left"
              >
                <span>Características</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('metodologia')}
                className="flex items-center justify-between p-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-left"
              >
                <span>Metodología (Cómo Funciona)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('casos-de-uso')}
                className="flex items-center justify-between p-2.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-left"
              >
                <span>Casos de Uso</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
              <button
                onClick={() => scrollTo('arquitectura')}
                className="flex items-center justify-between p-2.5 text-sm font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg text-left mt-2"
              >
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span>Para Desarrolladores / Arquitectura</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemoModal();
                  }}
                  className="w-full py-2.5 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Solicitar Demostración Personalizada
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
