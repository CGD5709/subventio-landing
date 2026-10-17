import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      // Light theme on initial/top area
      if (scrollY < 200) {
        setIsDarkSection(false);
        return;
      }

      // Check if we have scrolled into the dark Technology / Architecture section
      const techEl = document.getElementById('tecnologia');
      if (techEl) {
        const rect = techEl.getBoundingClientRect();
        // Turn dark when the transition section reaches under the navbar
        setIsDarkSection(rect.top <= 20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
        isDarkSection
          ? 'bg-[#08090a]/90 backdrop-blur-md border-b border-white/[0.08] text-white shadow-lg'
          : isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-black/[0.08] text-neutral-900 shadow-xs'
            : 'bg-white/80 backdrop-blur-sm border-b border-black/[0.06] text-neutral-900'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        
        {/* Left: Brand Wordmark (Mintlify style: green icon + lowercase name) */}
        <div className="flex items-center gap-8">
          <button 
            onClick={() => scrollTo('inicio')} 
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            {/* Mintlify Logo Icon shape */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#0C8C5E"/>
              <path d="M14.5 7C14.5 7 18 10.5 18 14C18 16.2 16.2 18 14 18C11.8 18 10 16.2 10 14C10 11.8 12.5 8 14.5 7Z" fill="#18E299"/>
              <circle cx="9" cy="9" r="3" fill="#BAFF24" />
            </svg>
            <span className={`font-semibold text-base tracking-tight transition-colors ${
              isDarkSection ? 'text-white group-hover:text-[#18e299]' : 'text-neutral-950 group-hover:text-[#0c8c5e]'
            }`}>
              subventio
            </span>
          </button>

          {/* Desktop Navigation Menu */}
          <nav className={`hidden lg:flex items-center gap-6 text-sm font-medium transition-colors ${
            isDarkSection ? 'text-neutral-300' : 'text-neutral-600'
          }`}>
            <button 
              onClick={() => scrollTo('funcionalidades')}
              className={`flex items-center gap-1 transition-colors cursor-pointer py-1 ${
                isDarkSection ? 'hover:text-white' : 'hover:text-black'
              }`}
            >
              <span>Capacidades</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button 
              onClick={() => scrollTo('beneficios')}
              className={`flex items-center gap-1 transition-colors cursor-pointer py-1 ${
                isDarkSection ? 'hover:text-white' : 'hover:text-black'
              }`}
            >
              <span>Ventajas &amp; ROI</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-60" />
            </button>

            <button 
              onClick={() => scrollTo('solucion')}
              className={`transition-colors cursor-pointer py-1 ${
                isDarkSection ? 'hover:text-white' : 'hover:text-black'
              }`}
            >
              Comparativa
            </button>

            <button 
              onClick={() => scrollTo('tecnologia')}
              className={`transition-colors cursor-pointer py-1 flex items-center gap-1.5 ${
                isDarkSection ? 'text-[#18e299] font-semibold' : 'text-emerald-700 hover:text-black font-semibold'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#18e299]" />
              <span>Tecnología</span>
            </button>
          </nav>
        </div>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenDemoModal}
            className={`inline-flex items-center justify-center rounded-[4px] font-semibold text-xs px-3.5 py-2 transition-all cursor-pointer shadow-sm ${
              isDarkSection
                ? 'bg-white text-black hover:bg-neutral-200 active:scale-[0.98]'
                : 'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]'
            }`}
          >
            <span>Contáctanos</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={onOpenDemoModal}
            className={`rounded-[4px] font-semibold text-xs px-3 py-1.5 ${
              isDarkSection ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            Contacto
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 ${isDarkSection ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'}`}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`sm:hidden px-5 py-4 border-b space-y-3 text-sm font-sans animate-fadeIn ${
          isDarkSection 
            ? 'bg-[#101114] border-white/[0.08] text-neutral-300' 
            : 'bg-white border-neutral-200 text-neutral-800 shadow-lg'
        }`}>
          <button
            onClick={() => scrollTo('funcionalidades')}
            className="block w-full text-left py-1.5 hover:text-[#18e299]"
          >
            Capacidades (Scotch POS)
          </button>
          <button
            onClick={() => scrollTo('beneficios')}
            className="block w-full text-left py-1.5 hover:text-[#18e299]"
          >
            Ventajas e Impacto (ROI)
          </button>
          <button
            onClick={() => scrollTo('solucion')}
            className="block w-full text-left py-1.5 hover:text-[#18e299]"
          >
            Antes vs. Después
          </button>
          <button
            onClick={() => scrollTo('tecnologia')}
            className="block w-full text-left py-1.5 text-[#0c8c5e] dark:text-[#18e299] font-bold"
          >
            Tecnología
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDemoModal();
            }}
            className={`w-full mt-2 py-2 rounded-[4px] font-semibold text-xs text-center ${
              isDarkSection ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            Contáctanos
          </button>
        </div>
      )}

    </header>
  );
};
