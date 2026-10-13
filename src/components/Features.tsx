import React from 'react';
import { 
  FolderTree, 
  FileCheck2, 
  ShieldAlert, 
  GitMerge, 
  CheckCircle
} from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: FolderTree,
      badge: "Automatización",
      title: "Generación Dinámica de Expedientes",
      text: "Construye árboles documentales completos a partir de plantillas personalizables. Subventio lee las partidas de tus proyectos y crea la jerarquía exacta de carpetas y ficheros requerida por cada entidad concedente, sin duplicar tareas.",
      highlight: "Plantillas multi-convocatoria reutilizables"
    },
    {
      icon: FileCheck2,
      badge: "Transparencia",
      title: "Trazabilidad Integral y Registro de Auditoría",
      text: "Cada documento procesado cuenta con un historial pormenorizado de ejecución. Supervisa el estado de transferencia de cada archivo, identifica advertencias al instante y mantén un control documental absoluto demostrable ante inspectores.",
      highlight: "Trazabilidad forense por documento"
    },
    {
      icon: ShieldAlert,
      badge: "Conformidad",
      title: "Motor de Sanitización y Cumplimiento Normativo",
      text: "Olvídate de los errores de subida en las sedes electrónicas. El sistema depura de forma nativa tildes, caracteres prohibidos y rutas excesivamente largas, garantizando plena compatibilidad con plataformas públicas y entornos Windows.",
      highlight: "Evasión de errores MAX_PATH y caracteres POSIX/NTFS"
    },
    {
      icon: GitMerge,
      badge: "Inteligencia Relacional",
      title: "Cruce Relacional de Fuentes y Partidas",
      text: "Enlaza de manera automática proyectos, facturas, comprobantes de pago y personal asignado. El sistema localiza los adjuntos correspondientes y los ubica en su carpeta de justificación sin requerir ordenación manual.",
      highlight: "Resolución transversal de bases de datos"
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-4">
            <span>Capacidades Principales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            Diseñado para responder a las exigencias técnicas de las auditorías públicas.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Nuestra plataforma combina la flexibilidad del diseño visual de plantillas con la rigurosidad normativa que demandan los organismos reguladores.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors flex items-center justify-center text-slate-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {item.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
