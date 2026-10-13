import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Folder, 
  FolderOpen, 
  FileText, 
  ShieldCheck, 
  Cloud, 
  RefreshCw, 
  Database
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
  onExploreWorkflow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal, onExploreWorkflow }) => {
  const [selectedFolder, setSelectedFolder] = useState<string>('gastos');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(100);

  const triggerSimulatedExport = () => {
    setIsExporting(true);
    setExportProgress(12);
    const interval = setInterval(() => {
      setExportProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExporting(false);
          return 100;
        }
        return prev + 22;
      });
    }, 280);
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/60">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-blue-100/50 via-indigo-50/40 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-12 right-10 w-96 h-96 bg-blue-50/60 blur-2xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Automatización Documental para Fondos Públicos</span>
            </div>

            {/* Main Headline H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Justifica tus subvenciones sin perderte en el papeleo administrativo.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
              Subventio automatiza la organización, validación y exportación de expedientes documentales para consultoras, fundaciones y entidades beneficiarias de fondos públicos. Conecta tus fuentes de datos, define tus reglas y genera estructuras de carpetas impecables listas para auditoría en cuestión de segundos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-5">
              <button
                onClick={onOpenDemoModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all cursor-pointer group"
              >
                <span>Solicitar Demostración Personalizada</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreWorkflow}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>Explorar el Flujo de Trabajo</span>
              </button>
            </div>

            {/* Trust Microcopy */}
            <p className="text-xs text-slate-500 font-medium mb-8 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Sin necesidad de tarjeta de crédito. Implementación adaptada a convocatorias europeas, estatales y autonómicas.</span>
            </p>

            {/* Trust Tags */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-[11px] uppercase tracking-wider text-slate-600 font-bold mb-3">
                Homologable para convocatorias oficiales
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">NextGenerationEU</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">CDTI & MINECO</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">Red.es / Kit Digital</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200">Plataformas Autonómicas</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Photorealistic Subventio Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Depth Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden transition-all text-left">
              
              {/* Mockup Window Header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                    Subventio Studio v2.4 • Generador de Expedientes
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Sincronizado con Notion</span>
                </div>
              </div>

              {/* Sub-header Bar: Template Config */}
              <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Database className="w-3.5 h-3.5 text-blue-600" />
                  <span>Proyecto:</span>
                  <span className="font-mono bg-blue-100/70 text-blue-900 px-2 py-0.5 rounded font-bold border border-blue-200">
                    NextGen_Digitalizacion_2025
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-[11px]">Plantilla:</span>
                  <span className="font-medium text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
                    Orden TED/1025/2023
                  </span>
                </div>
              </div>

              {/* Mockup Interior: 2-column studio layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] bg-slate-50/50">
                
                {/* Left pane: Dynamic Folder Tree */}
                <div className="md:col-span-7 p-4 border-r border-slate-200 bg-white">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Árbol Documental Dinámico
                    </span>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                      Autogenerado
                    </span>
                  </div>

                  {/* Folder Structure */}
                  <div className="space-y-1 font-mono text-xs">
                    
                    {/* Root Folder */}
                    <div className="flex items-center gap-1.5 text-slate-800 font-bold p-1 rounded hover:bg-slate-50">
                      <FolderOpen className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="truncate">EXP_2025_FEDER_DIGITAL/</span>
                    </div>

                    {/* Level 1: Memoria Tecnica */}
                    <div className="pl-4">
                      <div className="flex items-center gap-1.5 text-slate-600 p-1 rounded hover:bg-slate-50">
                        <Folder className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">01_Memoria_Tecnica/</span>
                      </div>
                      <div className="pl-5 flex items-center gap-1.5 text-slate-500 text-[11px] py-0.5">
                        <FileText className="w-3 h-3 text-blue-500 shrink-0" />
                        <span className="truncate">Memoria_Actividades_Firmada.pdf</span>
                        <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded ml-auto">OK</span>
                      </div>
                    </div>

                    {/* Level 1: Justificantes Gasto (Selected Active Folder) */}
                    <div className="pl-4">
                      <div 
                        onClick={() => setSelectedFolder('gastos')}
                        className={`flex items-center justify-between gap-1.5 p-1 rounded cursor-pointer transition-colors ${
                          selectedFolder === 'gastos' ? 'bg-blue-50 text-blue-900 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <FolderOpen className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="truncate">02_Justificantes_Gasto/</span>
                        </div>
                        <span className="text-[9px] bg-blue-200/70 text-blue-800 px-1 rounded font-sans">
                          124 docs
                        </span>
                      </div>

                      {/* Nested Dynamic Folders with Notion Variables */}
                      <div className="pl-5 space-y-1 mt-1">
                        <div className="flex items-center gap-1.5 text-indigo-700 bg-indigo-50/60 p-1 rounded border border-indigo-100 text-[11px]">
                          <Folder className="w-3 h-3 text-indigo-500 shrink-0" />
                          <span className="font-bold">
                            {'{Proveedor}'}_{'{NumFactura}'}/
                          </span>
                        </div>
                        
                        {/* Concrete rendered files */}
                        <div className="pl-4 space-y-0.5 text-[11px] text-slate-600">
                          <div className="flex items-center gap-1.5 py-0.5">
                            <FileText className="w-3 h-3 text-blue-500 shrink-0" />
                            <span className="truncate text-slate-700 font-medium">Factura_FAC2025_001.pdf</span>
                          </div>
                          <div className="flex items-center gap-1.5 py-0.5">
                            <FileText className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate text-slate-700 font-medium">Comprobante_Pago_Transferencia.pdf</span>
                          </div>
                          <div className="flex items-center gap-1.5 py-0.5">
                            <FileText className="w-3 h-3 text-violet-500 shrink-0" />
                            <span className="truncate text-slate-700 font-medium">Certificado_Corriente_AEAT.pdf</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Level 1: Costes de Personal */}
                    <div className="pl-4 pt-1">
                      <div className="flex items-center gap-1.5 text-slate-600 p-1 rounded hover:bg-slate-50">
                        <Folder className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">03_Personal_Nomina_RLT/</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right pane: Inspector, Variables, Sanitization & Drive Export */}
                <div className="md:col-span-5 p-4 flex flex-col justify-between bg-slate-50/60">
                  
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Variables de Origen (Notion)
                    </span>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {'{Proyecto}'}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {'{Proveedor}'}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {'{NumFactura}'}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {'{Importe}'}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Conmutadores de Validación
                    </span>
                    
                    {/* Live Green Validation Switches */}
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs shadow-2xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium text-slate-700">Sanitización UTF-8 / Tildes</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs shadow-2xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium text-slate-700">Límite MAX_PATH (80 ch) + Hash</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200 text-xs shadow-2xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium text-slate-700">Prevención Nombres NTFS/POSIX</span>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom: Google Drive Cloud Export Monitor */}
                  <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <Cloud className="w-3.5 h-3.5 text-blue-600" />
                        <span>Despliegue a Google Drive</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold">
                        {exportProgress}% Completado
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden border border-slate-200/50">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-emerald-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${exportProgress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>142 de 142 ficheros validados</span>
                      <button
                        onClick={triggerSimulatedExport}
                        disabled={isExporting}
                        className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer flex items-center gap-1"
                      >
                        <RefreshCw className={`w-3 h-3 ${isExporting ? 'animate-spin' : ''}`} />
                        <span>Re-exportar</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Status Footer Bar */}
              <div className="bg-slate-900 text-slate-300 px-4 py-2 text-[11px] font-mono flex items-center justify-between">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="truncate">Destino: Google Drive / Expedientes_Auditoria_2025/</span>
                </div>
                <span className="text-slate-400 shrink-0 font-sans font-medium">Audit Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
