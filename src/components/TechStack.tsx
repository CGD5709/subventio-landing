import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  Layers
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackPanels = [
    {
      title: "Frontend y Capa de Presentación (SPA)",
      layer: "Capa de Presentación",
      icon: Layout,
      color: "border-blue-500/40 text-blue-400 bg-blue-950/20",
      items: [
        {
          tech: "React 18",
          role: "Gestión declarativa de componentes y renderizado reactivo del árbol documental dinámico."
        },
        {
          tech: "TypeScript",
          role: "Tipado estático riguroso en modelos DTO, árboles jerárquicos, reglas de filtrado y esquemas remotos, minimizando errores en tiempo de ejecución."
        },
        {
          tech: "Vite",
          role: "Empaquetador de alto rendimiento para construcción optimizada de módulos ES y experiencia de desarrollo ágil."
        },
        {
          tech: "TailwindCSS y Radix UI",
          role: "Sistema de diseño atómico accesible y personalizable, garantizando interfaces con foco en ergonomía de usuario y baja sobrecarga de estilos."
        },
        {
          tech: "Custom Hooks & Memoización",
          role: "Modularización de la lógica de estado mediante useFolderStructure y aplicación de useMemo para evitar renderizados redundantes en tablas complejas de sanitización."
        }
      ]
    },
    {
      title: "Backend y Lógica de Dominio (Core)",
      layer: "Capa de Aplicación y Dominio",
      icon: Server,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-950/20",
      items: [
        {
          tech: "Java 21 (LTS)",
          role: "Aprovechamiento de características avanzadas de lenguaje, optimización de rendimiento en máquinas virtuales modernas y soporte robusto a largo plazo."
        },
        {
          tech: "Spring Boot 4.0.2",
          role: "Ecosistema nuclear de soporte empresarial, inyección de dependencias desacoplada y gestión unificada del ciclo de vida de componentes."
        },
        {
          tech: "Spring Security 6 y JJWT",
          role: "Autenticación sin estado (Stateless) mediante tokens JWT con intercepción global en JwtAuthenticationFilter y codificación de contraseñas con BCrypt."
        },
        {
          tech: "Spring WebMVC & Bean Validation",
          role: "Validación automática de contratos REST mediante anotaciones declarativas y aislamiento estricto de capas."
        }
      ]
    },
    {
      title: "Persistencia, Modelado de Datos y Transacciones",
      layer: "Capa de Persistencia",
      icon: Database,
      color: "border-indigo-500/40 text-indigo-400 bg-indigo-950/20",
      items: [
        {
          tech: "PostgreSQL",
          role: "Motor de base de datos relacional para persistencia de usuarios, entidades de ejecución de generación, trazas pormenorizadas de auditoría (GeneracionLog) y presets de sanitización."
        },
        {
          tech: "Spring Data JPA y Hibernate",
          role: "Abstracción declarativa de repositorios y mapeo objeto-relacional optimizado, con persistencia flexible de árboles de plantillas en columnas de texto de gran capacidad."
        },
        {
          tech: "Base de datos en memoria H2",
          role: "Aislamiento total en entornos de pruebas automatizadas e integración continua."
        }
      ]
    },
    {
      title: "Servicios Externos, Integraciones Cloud y Seguridad",
      layer: "Infraestructura & Conectores",
      icon: Cloud,
      color: "border-purple-500/40 text-purple-400 bg-purple-950/20",
      items: [
        {
          tech: "Google Drive API Client v3 y OAuth 2.0",
          role: "Transferencia segura de flujo de bytes para creación de directorios jerárquicos y almacenamiento de ficheros mediante autorizaciones delegadas."
        },
        {
          tech: "Notion API (v1 / RestTemplate)",
          role: "Ingestión de esquemas dinámicos de bases de datos, paginación mediante cursores continuos y extracción de referencias a adjuntos."
        },
        {
          tech: "WireMock Standalone",
          role: "Simulación precisa de respuestas HTTP de APIs externas para ejecución de suites de pruebas deterministas e independientes de la red."
        }
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-24 bg-[#08090a] text-white border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18e299]/10 border border-[#18e299]/30 text-[#18e299] text-xs font-mono font-medium mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Matriz Tecnológica de Producción</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Stack Tecnológico y Criterios de Selección de Componentes.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-normal">
            Cada tecnología ha sido seleccionada para garantizar robustez empresarial, tipado estricto, resiliencia ante cortes de red y aislamiento estricto de capas.
          </p>
        </div>

        {/* 4 Stack Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackPanels.map((panel, idx) => {
            const Icon = panel.icon;
            return (
              <div 
                key={idx}
                className="bg-[#101114] rounded-2xl border border-white/[0.08] p-6 sm:p-8 flex flex-col justify-between shadow-xl text-left hover:border-[#18e299]/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${panel.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">
                          {panel.title}
                        </h3>
                        <span className="text-xs font-mono text-neutral-400">
                          {panel.layer}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {panel.items.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-black/60 border border-white/[0.06]">
                        <div className="text-xs font-mono font-bold text-[#18e299] mb-1 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#18e299]" />
                          <span>{item.tech}</span>
                        </div>
                        <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                          {item.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>Arquitectura Hexagonal Compatible</span>
                  <span className="text-emerald-400">Verificado</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
