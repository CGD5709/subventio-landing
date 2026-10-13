import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Cloud
} from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      number: "01",
      stepIndex: 1,
      title: "Centraliza tus fuentes y convocatorias",
      description: "Conecta la base de datos de tu organización o espacio de trabajo. Subventio identifica automáticamente los esquemas de gastos, proveedores, contratos y personal vinculados a cada subvención.",
      badge: "Ingesta y Esquemas",
      previewHeader: "Selector de Fuentes y Conexión de Datos",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Conexión Establecida
              </span>
              <span>API Notion v1 / OAuth</span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded">
                <span className="text-white font-sans font-medium">BBDD_Gastos_NextGen_2025</span>
                <span className="text-blue-400">142 registros detectados</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded">
                <span className="text-white font-sans font-medium">BBDD_Personal_Imputaciones</span>
                <span className="text-blue-400">18 trabajadores asignados</span>
              </div>
              <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded">
                <span className="text-white font-sans font-medium">BBDD_Proveedores_Contratos</span>
                <span className="text-blue-400">24 entidades validadas</span>
              </div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 font-sans flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mapeo relacional automático de relaciones directas y transitivas</span>
          </div>
        </div>
      )
    },
    {
      number: "02",
      stepIndex: 2,
      title: "Configura la plantilla del expediente",
      description: "Define la estructura requerida por las bases reguladoras mediante nuestro diseñador visual. Asigna variables dinámicas para nombrar carpetas y documentos según las pautas oficiales de la convocatoria.",
      badge: "Diseñador Visual",
      previewHeader: "Editor Visual de Jerarquías con Variables",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            <div className="text-[11px] text-slate-400 mb-2 font-sans font-medium">
              Estructura de Carpetas & Presets de Nomenclatura:
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-2 rounded bg-slate-800/90 text-indigo-300 border border-indigo-500/30 flex items-center gap-2">
                <span className="text-slate-400 font-sans">Carpeta raíz:</span>
                <span className="font-bold text-white">EXP_{'{Convocatoria}'}_{'{Anio}'}/</span>
              </div>
              <div className="pl-3 p-2 rounded bg-slate-800/60 text-slate-300 border border-slate-700/60 flex items-center gap-2">
                <span className="text-slate-400 font-sans">Subcarpeta:</span>
                <span className="text-blue-300">02_Facturas/{'{Proveedor}'}_{'{NumFactura}'}/</span>
              </div>
              <div className="pl-6 p-2 rounded bg-slate-800/40 text-emerald-300 border border-slate-700/40 flex items-center gap-2">
                <span className="text-slate-400 font-sans">Archivo:</span>
                <span>Factura_{'{NumFactura}'}_{'{Importe}'}EUR.pdf</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 font-sans">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-100 text-blue-800 font-medium">
              Sanitización UTF-8: Activa
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-100 text-indigo-800 font-medium">
              Truncamiento Hash MD5: Activo
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 text-emerald-800 font-medium">
              Max Path: 80 chars
            </span>
          </div>
        </div>
      )
    },
    {
      number: "03",
      stepIndex: 3,
      title: "Ejecuta la generación y valida el resultado",
      description: "Inicia el proceso en un solo clic. El motor procesa los archivos en segundo plano, aplica los presets de saneamiento de nombres y despliega el expediente completo en tu nube documental con informe de ejecución.",
      badge: "Despliegue Asíncrono",
      previewHeader: "Progreso de Generación & Auditoría en Vivo",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-slate-900 text-slate-200 border border-slate-800">
            <div className="flex items-center justify-between text-[11px] mb-2">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5" /> Google Drive Enterprise
              </span>
              <span className="text-slate-400">HTTP 202 Accepted • @Async</span>
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-300 font-sans">Procesamiento de adjuntos en streaming</span>
                <span className="text-emerald-400 font-bold">142/142 (100%)</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-2 w-full rounded-full" />
              </div>
            </div>
            <div className="p-2 rounded bg-slate-800/90 text-[11px] text-slate-300 space-y-1 font-mono">
              <div className="text-emerald-400">✓ 142 archivos transferidos sin almacenamiento en heap</div>
              <div className="text-slate-400">✓ Registro de auditoría guardado en generacion_log</div>
              <div className="text-blue-400">✓ Expediente final sellado en nube documental</div>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 font-sans flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Generación de informe de trazabilidad descargable para inspectores</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-4">
            <span>Flujo de Trabajo Operativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Tres pasos para transformar el desorden documental en un expediente cerrado.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Una transición fluida desde la información bruta de tu proyecto hasta el despliegue final de toda la documentación justificada.
          </p>
        </div>

        {/* 3 Steps Sequential Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Steps List (Left Column) */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.stepIndex;
              return (
                <div
                  key={step.stepIndex}
                  onClick={() => setActiveStep(step.stepIndex)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50/60 border-blue-300 shadow-md shadow-blue-500/5' 
                      : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-mono font-bold px-2.5 py-1 rounded-lg ${
                        isActive 
                          ? 'bg-blue-600 text-white shadow-2xs' 
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        {step.number}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${
                        isActive ? 'text-blue-700' : 'text-slate-500'
                      }`}>
                        {step.badge}
                      </span>
                    </div>
                    {isActive && (
                      <span className="text-xs font-bold text-blue-600 flex items-center gap-1 font-mono">
                        Paso Activo <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-bold mb-2 ${
                    isActive ? 'text-slate-900' : 'text-slate-800'
                  }`}>
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Step Preview (Right Column) */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-left border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                    {steps[activeStep - 1].previewHeader}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Fase {activeStep} de 3
                </span>
              </div>

              {/* Dynamic Interactive Step Preview Content */}
              {steps[activeStep - 1].previewContent}

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Subventio Engine • Automatización en tiempo real</span>
                <span className="text-emerald-400 font-sans font-medium">Validado</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
