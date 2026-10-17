import React from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  FolderSync, 
  Database, 
  Cloud, 
  FileSpreadsheet, 
  Layers
} from 'lucide-react';
import { MintlifyWaveCanvas } from './MintlifyWaveCanvas';

interface HeroProps {
  onOpenDemoModal: () => void;
  onExploreWorkflow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onExploreWorkflow }) => {
  const integrations = [
    {
      name: 'Google Drive',
      badge: 'Nativo',
      desc: 'Destino de carpetas y ficheros sellados',
      badgeClass: 'text-[#065f46] bg-[#18e299]/15 border-[#18e299]/30',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M12.01 1.5L4.5 14.5l3.75 6.5h15l-3.75-6.5z" opacity="0.3"/>
          <path fill="#FBBC05" d="M8.25 21l-3.75-6.5L12 1.5l3.75 6.5z"/>
          <path fill="#34A853" d="M12.01 1.5h7.49l3.75 6.5H15.76z"/>
          <path fill="#4285F4" d="M15.76 8L12 1.5 8.25 8z"/>
          <path fill="#EA4335" d="M4.5 14.5l3.75 6.5h7.51l-3.75-6.5z"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      badge: 'Nativo',
      desc: 'Esquemas de proyectos y base de datos',
      badgeClass: 'text-[#065f46] bg-[#18e299]/15 border-[#18e299]/30',
      icon: (
        <div className="w-5 h-5 flex items-center justify-center font-serif font-black text-xs rounded bg-neutral-900 text-white">
          N
        </div>
      )
    },
    {
      name: 'Airtable',
      badge: 'API Ready',
      desc: 'Bases de datos y CRM de subvenciones',
      badgeClass: 'text-amber-800 bg-amber-50 border-amber-200',
      icon: (
        <div className="w-5 h-5 flex items-center justify-center">
          <span className="w-3.5 h-3.5 bg-amber-500 rounded-sm transform rotate-45 inline-block" />
        </div>
      )
    },
    {
      name: 'PostgreSQL',
      badge: 'JDBC Directo',
      desc: 'Conexión a bases de datos relacionales',
      badgeClass: 'text-blue-800 bg-blue-50 border-blue-200',
      icon: <Database className="w-5 h-5 text-blue-600" />
    },
    {
      name: 'SharePoint / OneDrive',
      badge: 'API Ready',
      desc: 'Entornos Microsoft 365 corporativos',
      badgeClass: 'text-sky-800 bg-sky-50 border-sky-200',
      icon: <Cloud className="w-5 h-5 text-sky-600" />
    },
    {
      name: 'REST API & Webhooks',
      badge: 'Extensible',
      desc: 'Integración a medida con cualquier ERP',
      badgeClass: 'text-purple-800 bg-purple-50 border-purple-200',
      icon: <FileSpreadsheet className="w-5 h-5 text-purple-600" />
    },
    {
      name: 'Dropbox Business',
      badge: 'Hoja de ruta',
      desc: 'Almacenamiento cloud colaborativo',
      badgeClass: 'text-neutral-500 bg-neutral-100 border-neutral-200',
      icon: <Layers className="w-5 h-5 text-neutral-400" />
    },
    {
      name: 'Nextcloud / CIFS',
      badge: 'Hoja de ruta',
      desc: 'Servidores privados y carpetas en red',
      badgeClass: 'text-neutral-500 bg-neutral-100 border-neutral-200',
      icon: <FolderSync className="w-5 h-5 text-neutral-400" />
    }
  ];

  return (
    <section id="inicio" className="bg-white text-neutral-900 border-b border-neutral-200 relative">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO BLOCK: STRICTLY CONTAINS THE MINTLIFY GENERATIVE WAVE CANVAS  */}
      {/* ========================================================================= */}
      <div className="relative min-h-[88vh] lg:min-h-[96vh] overflow-hidden flex flex-col justify-between">
        
        {/* Mintlify Signature Ribbon Canvas (Strictly bounded inside this top block) */}
        <MintlifyWaveCanvas />

        {/* Subtle Ambient Glow behind App Mockup adjusted for light theme */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute right-[-5%] top-[15%] w-[750px] h-[550px] rounded-full blur-[120px] opacity-30 z-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(24, 226, 153, 0.22) 0%, rgba(186, 255, 36, 0.14) 40%, rgba(12, 140, 94, 0.04) 70%, transparent 100%)'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 relative z-10 w-full flex-1 flex flex-col justify-between">
        
        {/* 2-COLUMN SPLIT GRID (EXACT MINTLIFY HERO LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: PILL BADGE, EDITORIAL SERIF TITLE, CTAS     */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start text-left pt-2 lg:pt-10">
            
            {/* Mintlify Pill Badge: "Agent traffic 78.2917% >" style */}
            <a 
              href="#beneficios"
              className="group inline-flex items-center gap-2 rounded-[4px] border border-neutral-200 bg-neutral-50/90 py-1 pl-2.5 pr-1.5 text-xs font-mono text-neutral-700 hover:border-[#18e299] hover:bg-neutral-100 transition-smooth mb-7 shadow-2xs"
            >
              <span className="text-neutral-600 font-medium">Ahorro por expediente</span>
              <span className="inline-flex items-center gap-1 rounded-[2px] bg-[#18e299]/20 px-1.5 py-0.5 text-[#065f46] font-bold border border-[#18e299]/30">
                <span>34 horas</span>
                <span className="text-[10px] opacity-75">(85%)</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mintlify Editorial Serif Title in Deep Dark Slate */}
            <h1 className="font-serif text-[2.85rem] sm:text-[3.75rem] lg:text-[4.25rem] leading-[1.04] tracking-[-0.03em] font-normal text-neutral-950 mb-6">
              La plataforma de<br />
              justificación<br />
              inteligente
            </h1>

            {/* Subtitle with bold keywords */}
            <p className="text-sm sm:text-base lg:text-[17px] text-neutral-600 leading-relaxed font-normal mb-10 max-w-lg">
              Subventio automatiza la organización, validación y exportación de expedientes documentales para{' '}
              <strong className="font-semibold text-neutral-900">consultoras</strong>,{' '}
              <strong className="font-semibold text-neutral-900">fundaciones</strong> y{' '}
              <strong className="font-semibold text-neutral-900">entidades beneficiarias</strong> de fondos públicos. Conecta tus fuentes de datos, define tus reglas y genera estructuras de carpetas impecables listas para auditoría en cuestión de segundos.
            </p>

            {/* Mintlify CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-14 sm:mb-16 w-full sm:w-auto">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-1.5 rounded-[4px] bg-black text-white font-semibold text-sm px-4.5 py-2.5 hover:bg-neutral-800 active:scale-[0.97] transition-smooth cursor-pointer shadow-sm"
              >
                <span>Contáctanos</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreWorkflow}
                className="inline-flex items-center justify-center gap-2 rounded-[4px] border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-sm px-4.5 py-2.5 transition-smooth cursor-pointer shadow-2xs"
              >
                <span>Explorar Funcionalidades</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
              </button>
            </div>

            {/* Trust microcopy */}
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 pt-8 border-t border-neutral-200/90 w-full mt-4">
              <span className="flex items-center gap-1.5 text-neutral-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#18e299]" />
                <span>Google Drive &amp; Notion Sync</span>
              </span>
              <span className="text-neutral-400">•</span>
              <span>API Rest Extensible</span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: APPLICATION FRAME ALIGNED WITH SUBTITLE     */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 relative w-full lg:w-[115%] lg:max-w-none mt-10 lg:mt-[290px] xl:mt-[310px] lg:translate-x-2">
            
            {/* The App Window Frame in Light Theme */}
            <div className="rounded-[12px] border border-neutral-200/90 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)] overflow-hidden animate-float-hero transition-smooth hover:border-neutral-300 relative">
              
              {/* Window Header Bar (macOS style window chrome) */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-50/90">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-neutral-500 font-mono text-[11px] ml-2 hidden sm:inline-block">
                    app.subventio.es
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#065f46] bg-[#18e299]/15 px-2.5 py-0.5 rounded border border-[#18e299]/30 font-semibold">
                    Captura del Programa
                  </span>
                </div>
              </div>

              {/* Direct Image Slot */}
              <div className="relative aspect-[1080/720] min-h-[460px] sm:min-h-[540px] lg:min-h-[580px] xl:min-h-[640px] bg-neutral-100 overflow-hidden group flex items-center justify-center">
                <img 
                  src="/app-preview.svg" 
                  alt="Captura de pantalla de la interfaz de Subventio" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]" 
                />

                {/* Mintlify signature bottom gradient fade-out starting late (85%) so full UI is visible */}
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent 85% to-white/95" 
                />
              </div>

            </div>

          </div>

        </div>

      </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MINTLIFY BOTTOM SECTION: INTEGRATION ECOSYSTEM (GOOGLE DRIVE, NOTION)  */}
      {/* ========================================================================= */}
      <div className="relative z-20 border-t border-neutral-200/90 bg-neutral-50/60">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Block (Mintlify style: Integration Value Prop) */}
          <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-200/90 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#18e299]/15 border border-[#18e299]/30 text-[#065f46] text-xs font-mono font-medium mb-3">
                <span>Ecosistema de Integración</span>
              </div>
              <h2 className="text-xl/6 sm:text-2xl/7 font-medium tracking-[-0.01em] text-neutral-900">
                Conecta de forma nativa con tus{' '}
                <strong className="font-semibold text-neutral-950">fuentes de datos</strong> y almacenamiento cloud.
              </h2>
              <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                Extracción automática desde Notion y bases de datos relacionales con exportación directa a Google Drive y repositorios corporativos.
              </p>
            </div>

            <a
              href="#funcionalidades"
              className="mt-6 group inline-flex items-center gap-1.5 rounded-[4px] bg-black text-white font-semibold text-xs px-3.5 py-2 hover:bg-neutral-800 transition-smooth w-fit cursor-pointer shadow-xs"
            >
              <span>Explorar conectores</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Block: 8 Integration Cards in Grid */}
          <div className="lg:col-span-8 p-3 sm:p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 h-full">
              {integrations.map((item, idx) => (
                <div 
                  key={idx}
                  className="relative flex flex-col items-start justify-between p-3.5 rounded-[6px] border border-neutral-200 bg-white text-left min-h-[105px] shadow-2xs hover:border-[#18e299] hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="p-1.5 rounded bg-neutral-50 border border-neutral-100">
                      {item.icon}
                    </div>
                    <span className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="font-bold text-xs text-neutral-900 font-sans block mb-0.5">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-neutral-500 leading-tight line-clamp-2 block">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
