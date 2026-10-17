import React, { useState, useEffect } from 'react';
import { 
  FolderTree, 
  ShieldCheck, 
  Lock, 
  Image as ImageIcon
} from 'lucide-react';

interface ScotchStructureFeaturesProps {
  onOpenDemoModal: () => void;
}

interface FeatureCardProps {
  placeholderLabel: string;
  imageSrc?: string;
  title: string;
  desc: string;
  highlight: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  placeholderLabel,
  imageSrc,
  title,
  desc,
  highlight
}) => {
  return (
    <div className="rounded-[10px] border border-neutral-200 bg-white hover:border-[#18e299] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-2xs">
      
      {/* ======================================================== */}
      {/* IMAGE / SCREENSHOT PLACEHOLDER CONTAINER                 */}
      {/* ======================================================== */}
      <div className="relative aspect-[16/10] w-full bg-neutral-50 border-b border-neutral-200 flex flex-col items-center justify-center p-4 text-center overflow-hidden group-hover:bg-neutral-100/70 transition-colors">
        
        {/* Subtle grid and ambient gradient inside placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.01] to-transparent pointer-events-none" />
        
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-[#0c8c5e] group-hover:border-[#18e299]/50 transition-colors shadow-xs">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono text-neutral-600 font-medium block">
                Placeholder de Imagen
              </span>
              <span className="text-[9px] font-mono text-neutral-400 block">
                Captura: {placeholderLabel}
              </span>
            </div>
          </div>
        )}

        {/* Resolution / format tag */}
        <span className="absolute bottom-2 right-2 text-[9px] font-mono text-neutral-500 bg-white/90 px-1.5 py-0.5 rounded border border-neutral-200 shadow-2xs">
          16:10 • PNG / SVG
        </span>
      </div>

      {/* ======================================================== */}
      {/* CARD CONTENT (CLIENT-FOCUSED BENEFITS)                   */}
      {/* ======================================================== */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-bold text-neutral-900 text-base mb-2 group-hover:text-[#0c8c5e] transition-colors">
            {title}
          </h4>
          <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-4">
            {desc}
          </p>
        </div>
        <p className="text-xs text-[#065f46] font-semibold border-t border-neutral-100 pt-3">
          {highlight}
        </p>
      </div>

    </div>
  );
};

export const ScotchStructureFeatures: React.FC<ScotchStructureFeaturesProps> = ({ onOpenDemoModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('deteccion');

  const categories = [
    { id: 'deteccion', label: '1. Sincronización y Filtros' },
    { id: 'estructuracion', label: '2. Plantillas y Jerarquías' },
    { id: 'sanitizacion', label: '3. Sanitización Normativa' },
    { id: 'permisos', label: '4. Permisos y Control de Acceso' },
  ];

  const summaryPillars = [
    {
      icon: FolderTree,
      title: "Estructuración y Filtros",
      desc: "Generación automática de carpetas por convocatoria, segmentación por campos de base de datos y orden sin duplicar tareas manuales."
    },
    {
      icon: ShieldCheck,
      title: "Sanitización Normativa",
      desc: "Normalización de nombres de archivo y eliminación preventiva de tildes o símbolos no admitidos para garantizar la aceptación directa en sedes electrónicas."
    },
    {
      icon: Lock,
      title: "Control de Acceso y Permisos",
      desc: "Aislamiento estricto por proyecto y permisos granulares de administrador sobre bases de datos para evitar cruces de información confidencial."
    }
  ];

  // IntersectionObserver to sync the sticky left sidebar with the current scrolled section
  useEffect(() => {
    const sectionIds = ['deteccion', 'estructuracion', 'sanitizacion', 'permisos'];
    const elements = sectionIds
      .map(id => document.getElementById(`fase-${id}`))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('fase-', '');
            setActiveCategory(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Smooth scroll handler on click
  const handleScrollToPhase = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(`fase-${id}`);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32 bg-white text-neutral-900 border-b border-neutral-200">
      
      {/* Background glow lines subtle */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* ======================================================== */}
        {/* PARTE A: SCOTCH POS TOP 3-PILLAR SUMMARY                 */}
        {/* ======================================================== */}
        <div className="mb-24 lg:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18e299]/15 border border-[#18e299]/30 text-[#065f46] text-xs font-mono font-medium mb-4">
              <span>Arquitectura Funcional</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 tracking-[-0.02em] leading-tight">
              Todo lo que necesitas para justificar con rigor, ordenado a la perfección.
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal">
              La plataforma que elimina las tareas repetitivas y estandariza los criterios de entrega ante la administración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {summaryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-8 rounded-[8px] border border-neutral-200 bg-neutral-50/60 hover:bg-white hover:border-[#18e299] hover:shadow-md transition-all duration-300 group shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-[6px] bg-[#18e299]/15 border border-[#18e299]/30 text-[#0c8c5e] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-[#0c8c5e] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PARTE B: MINIMALIST SCOTCH POS SIDEBAR + STACKED PHASES WITH PLACEHOLDERS */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* ======================================================== */}
          {/* COMPACT MINIMALIST SIDEBAR (SMALLER FOOTPRINT)           */}
          {/* ======================================================== */}
          <aside className="lg:w-[200px] w-full lg:sticky lg:top-32 shrink-0 self-start z-20">
            <nav className="flex flex-col gap-2 text-left">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleScrollToPhase(cat.id)}
                    className={`flex items-center gap-2.5 text-left transition-all duration-200 cursor-pointer group py-1.5 px-2 rounded-[4px] ${
                      isActive
                        ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-2xs'
                        : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 font-normal'
                    }`}
                  >
                    {/* Compact glowing active dot */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${
                        isActive
                          ? 'bg-[#18e299] shadow-[0_0_8px_#18e299] opacity-100 scale-100'
                          : 'bg-transparent opacity-0 scale-50'
                      }`}
                    />
                    <span className="text-xs sm:text-[13px] leading-snug">
                      {cat.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Compact Minimalist CTA */}
            <div className="mt-8 pt-5 border-t border-neutral-200 max-w-[190px]">
              <p className="text-[11px] text-neutral-500 mb-2.5 leading-relaxed font-normal">
                ¿Tienes dudas con tu convocatoria?
              </p>
              <button
                onClick={onOpenDemoModal}
                className="w-full py-1.5 px-3 rounded-[4px] bg-black text-white font-semibold text-[11px] hover:bg-neutral-800 active:scale-[0.98] transition-smooth shadow-xs cursor-pointer"
              >
                Contáctanos
              </button>
            </div>
          </aside>

          {/* ======================================================== */}
          {/* STACKED PHASES WITH CLEAN IMAGE PLACEHOLDERS (1 TO 4)    */}
          {/* ======================================================== */}
          <div className="lg:flex-1 w-full space-y-24 lg:space-y-32">
            
            {/* ======================================================== */}
            {/* PHASE 1: Sincronización, Fuentes y Filtros                */}
            {/* ======================================================== */}
            <section id="fase-deteccion" className="scroll-mt-32 space-y-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#065f46] bg-[#18e299]/15 px-2.5 py-1 rounded border border-[#18e299]/30 inline-block mb-3 font-semibold">
                  Paso 01 • Sincronización, Fuentes y Filtros
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-[-0.02em] leading-tight mb-3">
                  Conexión directa con tus fuentes y filtrado inteligente de registros.
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  Importa facturas, extractos y bases de datos desde cualquier origen. Aplica filtros condicionales para clasificar y separar tus registros exactamente como exige cada organismo público sin procesar nada a mano.
                </p>
              </div>

              {/* 4 Visual Cards with Image Placeholders (2x2 Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FeatureCard 
                  placeholderLabel="Cruce de facturas y pagos"
                  title="Cruce automático de facturas y pagos"
                  desc="Empareja de forma instantánea cada factura emitida con su extracto bancario mediante importe, fecha y NIF del emisor."
                  highlight="✓ Cero errores de conciliación manual"
                />
                <FeatureCard 
                  placeholderLabel="Filtrado condicional por campos de BD (ej. Sexo, Categoría)"
                  title="Filtros condicionales por campos de base de datos"
                  desc="Implementa todos los filtros habituales de bases de datos. Si la administración pide separar la información en carpetas distintas (por ejemplo, una para hombres y otra para mujeres), el sistema filtra según el campo 'Sexo' de tu base de datos para organizar únicamente los archivos y registros necesarios sin tener que hacerlo a mano."
                  highlight="✓ Segmentación automática según exigencias de las bases"
                />
                <FeatureCard 
                  placeholderLabel="Diagnóstico preventivo de faltantes"
                  title="Diagnóstico preventivo de expedientes"
                  desc="Detecta facturas sin comprobante de transferencia o contratos sin firmar antes de presentar la memoria a la administración."
                  highlight="✓ Evita requerimientos de subsanación"
                />
                <FeatureCard 
                  placeholderLabel="Sincronización en la nube"
                  title="Integración con tus carpetas habituales"
                  desc="Conecta tus repositorios de Google Drive o Notion para que los archivos se sincronicen solos sin descargas manuales."
                  highlight="✓ Sin cambiar tu flujo de trabajo"
                />
              </div>
            </section>

            {/* ======================================================== */}
            {/* PHASE 2: Plantillas y Jerarquías                          */}
            {/* ======================================================== */}
            <section id="fase-estructuracion" className="scroll-mt-32 space-y-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#065f46] bg-[#18e299]/15 px-2.5 py-1 rounded border border-[#18e299]/30 inline-block mb-3 font-semibold">
                  Paso 02 • Plantillas y Jerarquías
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-[-0.02em] leading-tight mb-3">
                  Jerarquías dinámicas y plantillas multi-convocatoria.
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  Cada ministerio u organismo concedente exige una estructura de carpetas diferente. Configura o utiliza plantillas ya homologadas.
                </p>
              </div>

              {/* 3 Visual Cards with Image Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard 
                  placeholderLabel="Árbol oficial de carpetas"
                  title="Estructuras de carpetas oficiales"
                  desc="Genera en un solo clic la jerarquía exacta requerida por CDTI, Red.es, ministerios o comunidades autónomas sin crear carpetas a mano."
                  highlight="✓ Cero carpetas manuales erróneas"
                />
                <FeatureCard 
                  placeholderLabel="Selector de plantillas por convocatoria"
                  title="Plantillas homologadas y reutilizables"
                  desc="Guarda la estructura de una convocatoria exitosa y reutilízala para todos tus clientes o proyectos futuros."
                  highlight="✓ Estandarización para todo tu equipo"
                />
                <FeatureCard 
                  placeholderLabel="Índice documental con enlaces directos"
                  title="Índice interactivo para inspectores"
                  desc="Crea hojas de cálculo y memorias índice que enlazan cada factura con su ruta exacta en el expediente entregado."
                  highlight="✓ Auditoría técnica en pocos minutos"
                />
              </div>
            </section>

            {/* ======================================================== */}
            {/* PHASE 3: Sanitización Normativa                           */}
            {/* ======================================================== */}
            <section id="fase-sanitizacion" className="scroll-mt-32 space-y-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#065f46] bg-[#18e299]/15 px-2.5 py-1 rounded border border-[#18e299]/30 inline-block mb-3 font-semibold">
                  Paso 03 • Sanitización Normativa
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-[-0.02em] leading-tight mb-3">
                  Motor de sanitización preventiva contra errores de sedes.
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  Las sedes electrónicas públicas suelen rechazar archivos con tildes, caracteres especiales o rutas demasiado extensas. Subventio los depura de manera transparente.
                </p>
              </div>

              {/* 3 Visual Cards with Image Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard 
                  placeholderLabel="Normalización automática de nombres"
                  title="Normalización automática de nombres"
                  desc="Sustituye automáticamente caracteres prohibidos, tildes y símbolos conflictivos para que ningún archivo sea rebotado por el portal público."
                  highlight="✓ Cero rechazos por formato de archivo"
                />
                <FeatureCard 
                  placeholderLabel="Control preventivo de longitud de rutas"
                  title="Prevención de rutas excesivas"
                  desc="Truncado inteligente que previene errores del sistema operativo y asegura la accesibilidad de archivos en cualquier plataforma."
                  highlight="✓ Integridad total de ficheros profundos"
                />
                <FeatureCard 
                  placeholderLabel="Garantía de firma electrónica válida"
                  title="Preservación de firma y validez legal"
                  desc="El contenido del archivo permanece matemáticamente inalterado para garantizar que la firma electrónica mantenga su validez jurídica."
                  highlight="✓ Plena garantía probatoria ante auditorías"
                />
              </div>
            </section>

            {/* ======================================================== */}
            {/* PHASE 4: Permisos y Control de Acceso                     */}
            {/* ======================================================== */}
            <section id="fase-permisos" className="scroll-mt-32 space-y-10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#065f46] bg-[#18e299]/15 px-2.5 py-1 rounded border border-[#18e299]/30 inline-block mb-3 font-semibold">
                  Paso 04 • Permisos y Control de Acceso
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-950 tracking-[-0.02em] leading-tight mb-3">
                  Control granular de accesos y aislamiento estricto por proyecto.
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  El administrador define con precisión qué usuarios tienen permisos sobre cada base de datos y expediente, evitando cruces de información confidencial y garantizando que cada profesional acceda únicamente a su convocatoria.
                </p>
              </div>

              {/* 3 Visual Cards with Image Placeholders */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard 
                  placeholderLabel="Aislamiento por proyecto y asignación de usuarios"
                  title="Segmentación estricta por expediente"
                  desc="Restringe el acceso de técnicos, consultores externos y auditores a los proyectos específicos en los que participan, impidiendo la visibilidad de datos ajenos."
                  highlight="✓ Cero cruce accidental entre proyectos y clientes"
                />
                <FeatureCard 
                  placeholderLabel="Panel de administración de permisos y fuentes"
                  title="Permisos granulares sobre bases de datos"
                  desc="El administrador gestiona quién puede leer, editar o exportar información de cada base de datos y carpeta conectada mediante políticas de roles (RBAC)."
                  highlight="✓ Control absoluto de fuentes y credenciales"
                />
                <FeatureCard 
                  placeholderLabel="Registro de auditoría de accesos y RGPD"
                  title="Trazabilidad de accesos y cumplimiento RGPD"
                  desc="Registro inmutable de todas las consultas, descargas y modificaciones realizadas en cada expediente para máxima seguridad jurídica y confidencialidad."
                  highlight="✓ Gobernanza total y cumplimiento normativo"
                />
              </div>
            </section>

          </div>

        </div>

      </div>
    </section>
  );
};
