import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  Building2, 
  PhoneCall
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
    <section id="demo" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[250px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Implantación Ágil y Soporte Normativo</span>
          </div>

          {/* Headline H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
            Prepara tu organización para la próxima auditoría documental.
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
            Elimina la improvisación y el trabajo repetitivo de tus procesos de justificación. Descubre cómo Subventio puede ahorrar cientos de horas a tu equipo y blindar tus subvenciones frente a requerimientos formales.
          </p>

          {/* Interactive Request Form or Confirmation */}
          <div className="bg-slate-800/90 border border-slate-700 p-6 sm:p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto text-left mb-8 backdrop-blur-xs">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  ¡Solicitud Registrada con Éxito!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Hemos reservado tu turno prioritario. Un consultor técnico de Subventio se pondrá en contacto con <strong className="text-white">{email}</strong> en menos de 24 horas laborables.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-blue-400 hover:text-blue-300 underline cursor-pointer"
                  >
                    Registrar otra solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nombre de la Organización *
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        placeholder="Ej. Consultores I+D / Fundación"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Profesional *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu.nombre@organizacion.es"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all cursor-pointer group"
                  >
                    <span>Agendar una Demostración Guiada</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href="mailto:contacto@elsaltoadelante.com?subject=Consulta%20Especialista%20Subventio"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-slate-400" />
                    <span>Hablar con un Especialista</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Security Guarantee Microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tratamiento seguro de la información conforme al RGPD</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Autenticación robusta mediante estándares OAuth 2.0 y cifrado de extremo a extremo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
