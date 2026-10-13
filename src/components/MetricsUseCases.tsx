import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  FileCheck, 
  Briefcase, 
  HeartHandshake, 
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface MetricsUseCasesProps {
  onOpenDemoModal: () => void;
}

export const MetricsUseCases: React.FC<MetricsUseCasesProps> = ({ onOpenDemoModal }) => {
  const [activeProfile, setActiveProfile] = useState<number>(0);

  const metrics = [
    {
      value: "85%",
      label: "Reducción en tiempo dedicado",
      desc: "de reducción en el tiempo dedicado a estructuración manual y renombrado de ficheros.",
      icon: TrendingUp
    },
    {
      value: "0",
      label: "Incidencias de formato",
      desc: "incidencias por nombres de archivo no permitidos en sedes electrónicas oficiales.",
      icon: ShieldCheck
    },
    {
      value: "100%",
      label: "Trazabilidad verificable",
      desc: "de trazabilidad en las transferencias de expedientes hacia el almacenamiento corporativo.",
      icon: FileCheck
    }
  ];

  const profiles = [
    {
      id: "consultoras",
      icon: Briefcase,
      badge: "Multi-Cliente & Escala",
      title: "Consultoras Especializadas en Financiación Pública",
      description: "Gestiona decenas de expedientes paralelos para múltiples clientes manteniendo criterios homogéneos y estándares documentales rigurosos sin sobrecargar a tu equipo gestor.",
      benefits: [
        "Estandarización de plantillas entre distintos consultores",
        "Reducción drástica del cuello de botella en fechas límite de entrega",
        "Tranquilidad y respaldo frente a revisiones de auditores externos"
      ]
    },
    {
      id: "fundaciones",
      icon: HeartHandshake,
      badge: "Tercer Sector & Social",
      title: "Entidades Sin Ánimo de Lucro y Fundaciones",
      description: "Cumple con los plazos y formatos de las convocatorias sociales sin desviar horas esenciales de trabajo directo en tus programas de intervención.",
      benefits: [
        "Justificación transparente de fondos públicos y subvenciones autonómicas",
        "Menor sobrecarga de tareas administrativas para el personal técnico",
        "Generación inmediata de carpetas por línea de gasto y beneficiario"
      ]
    },
    {
      id: "empresas-id",
      icon: Building2,
      badge: "Fondos Europeos & Innovación",
      title: "Empresas Beneficiarias de Fondos Europeos y CDTI",
      description: "Asegura la correlación exacta entre gastos ejecutados, pedidos y justificantes de pago para auditorías exigentes de programas Next Generation e iniciativas de I+D.",
      benefits: [
        "Vigencia y estricta correlación entre facturas y transferencias bancarias",
        "Cumplimiento automático de directrices de nomenclatura del CDTI",
        "Carpeta de expediente sellada y lista para la visita de inspección física"
      ]
    }
  ];

  return (
    <section id="casos-de-uso" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <span>Impacto y Casos de Éxito</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Resultados contrastados en la gestión de justificaciones públicas.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Ahorro medible en horas de personal administrativo y mitigación definitiva del riesgo de penalizaciones o subsanaciones forzosas.
          </p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs text-left relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mb-2">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {metric.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Profiles / Use Cases Section */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-left">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Perfiles de Aplicación Especializados
            </h3>
            <p className="text-sm text-slate-600">
              Subventio se adapta al marco regulatorio específico de cada tipología de entidad.
            </p>
          </div>

          {/* Profile Switcher Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {profiles.map((profile, idx) => {
              const Icon = profile.icon;
              const isSelected = activeProfile === idx;
              return (
                <button
                  key={profile.id}
                  onClick={() => setActiveProfile(idx)}
                  className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20' 
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-5 h-5 shrink-0 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                  <div>
                    <span className="text-xs font-bold block leading-snug">
                      {profile.title}
                    </span>
                    <span className={`text-[11px] block mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      {profile.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Profile Detail View */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-block text-xs font-bold font-mono text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md mb-3">
                  {profiles[activeProfile].badge}
                </span>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {profiles[activeProfile].title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  {profiles[activeProfile].description}
                </p>

                <div className="space-y-2 mb-6">
                  {profiles[activeProfile].benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Solicitar Demo para este perfil</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200/90 shadow-2xs text-xs font-mono">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Plantilla Homologada Activa
                </div>
                <div className="p-3 rounded-lg bg-slate-900 text-slate-200 space-y-2">
                  <div className="text-emerald-400 text-[11px] font-bold">
                    ✓ Validado para Normativa 2025
                  </div>
                  <div className="text-slate-300">
                    Estructura: /EXP_AUDIT_RES/{'{Expediente}'}/
                  </div>
                  <div className="text-slate-400 text-[10px]">
                    Subcarpetas: 01_FichasTecnicas | 02_Facturacion | 03_Transferencias | 04_Declaraciones
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
