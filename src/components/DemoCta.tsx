import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Building2, 
  Sparkles,
  Lock
} from 'lucide-react';

interface DemoCtaProps {
  onOpenSpecialistChat?: () => void;
}

export const DemoCta: React.FC<DemoCtaProps> = () => {
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && org) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="demo" className="py-24 lg:py-32 bg-[#08090a] border-b border-white/[0.08] relative overflow-hidden">
      
      {/* Radiant ambient glow */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] opacity-35 blur-[140px] -z-10 rounded-full"
        style={{
          background: 'linear-gradient(135deg, rgba(24, 226, 153, 0.35) 0%, rgba(12, 140, 94, 0.2) 50%, rgba(24, 226, 153, 0.1) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18e299]/10 border border-[#18e299]/30 text-[#18e299] text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Implantación Inmediata &amp; Soporte Normativo</span>
          </div>

          {/* Headline H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Empieza a ahorrar decenas de horas en tu próxima justificación.
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
            Elimina la improvisación y el trabajo repetitivo. Descubre cómo Subventio blinda tus expedientes frente a requerimientos formales y agiliza la auditoría.
          </p>

          {/* Interactive Request Form or Confirmation */}
          <div className="bg-[#101114]/90 border border-white/[0.12] p-6 sm:p-10 rounded-2xl shadow-2xl max-w-2xl mx-auto text-left mb-8 backdrop-blur-md mint-glow-box">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-[#18e299]/20 text-[#18e299] rounded-full flex items-center justify-center mx-auto border border-[#18e299]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  ¡Mensaje recibido con éxito!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto">
                  Hemos registrado la solicitud para <span className="text-[#18e299] font-semibold">{org}</span>. Un especialista en justificación de fondos públicos te contactará en <span className="text-white font-mono">{email}</span> para atender tu consulta y asesorarte.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-mono text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Entidad u Organización
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Ej. Consultora I+D / Fundación"
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/[0.1] rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#18e299] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Correo Corporativo
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nombre@tuempresa.es"
                        className="w-full pl-10 pr-4 py-3 bg-black/50 border border-white/[0.1] rounded-lg text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#18e299] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm text-black bg-white hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer shadow-lg shadow-white/10"
                >
                  <span>Contáctanos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between pt-2 text-[11px] text-neutral-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#18e299]" />
                    Tratamiento confidencial de datos
                  </span>
                  <span>Respuesta en menos de 24 horas</span>
                </div>
              </form>
            )}
          </div>

          {/* Micro badges below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#18e299]" />
              Sin permanencia ni coste de configuración inicial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#18e299]" />
              Plantillas preconfiguradas para CDTI, Red.es y NextGen
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
