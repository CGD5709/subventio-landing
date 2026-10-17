import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  Mail, 
  User, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [org, setOrg] = useState('');
  const [email, setEmail] = useState('');
  const [convocatoria, setConvocatoria] = useState('NextGenerationEU');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-[#101114] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-white/[0.12] relative text-left mint-glow-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#18e299]/20 text-[#18e299] rounded-full flex items-center justify-center mx-auto border border-[#18e299]/40 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-white">
              Solicitud Recibida
            </h3>
            
            <p className="text-neutral-300 text-sm max-w-sm mx-auto leading-relaxed">
              Gracias, <strong className="text-white">{name}</strong>. Hemos registrado la solicitud de <strong className="text-[#18e299]">{org}</strong> para la línea de <strong className="text-white">{convocatoria}</strong>.
            </p>
            
            <p className="text-xs text-neutral-400 font-mono">
              Nos pondremos en contacto en {email} a la mayor brevedad posible.
            </p>

            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#18e299]/10 text-[#18e299] text-xs font-mono mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contacto Directo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Habla con nuestro equipo
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Cuéntanos tus necesidades de justificación y te responderemos en menos de 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Nombre y Apellidos
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Laura Gómez"
                    className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-white/[0.1] rounded-lg text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#18e299] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Empresa o Entidad
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Ej. Consultores de Innovación S.L."
                    className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-white/[0.1] rounded-lg text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#18e299] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Correo Electrónico Corporativo
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="laura@empresa.es"
                    className="w-full pl-9 pr-3 py-2.5 bg-black/50 border border-white/[0.1] rounded-lg text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#18e299] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Convocatoria de Interés Principal
                </label>
                <select
                  value={convocatoria}
                  onChange={(e) => setConvocatoria(e.target.value)}
                  className="w-full px-3 py-2.5 bg-black/50 border border-white/[0.1] rounded-lg text-white text-xs focus:outline-none focus:border-[#18e299] transition-colors cursor-pointer"
                >
                  <option value="NextGenerationEU">Fondos Europeos NextGenerationEU</option>
                  <option value="CDTI">CDTI (PID, CIEN, Misiones)</option>
                  <option value="Red.es">Red.es / Kit Digital</option>
                  <option value="Autonomica">Subvenciones Autonómicas / Estatales</option>
                  <option value="Otra">Otra línea de financiación pública</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-white text-black font-bold text-xs hover:bg-neutral-200 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <span>Contáctanos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 justify-center pt-1 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#18e299]" />
                <span>Datos protegidos bajo normativa europea RGPD</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
