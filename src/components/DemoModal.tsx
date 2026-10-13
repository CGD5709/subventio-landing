import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  Building2, 
  Mail, 
  User, 
  ShieldCheck, 
  ArrowRight
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900">
              Demostración Solicitada
            </h3>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              Gracias, <strong className="text-slate-900">{name}</strong>. Hemos recibido los datos de <strong className="text-slate-900">{org}</strong>. Un especialista técnico se pondrá en contacto a través de <strong className="text-slate-900">{email}</strong> para coordinar una sesión personalizada orientada a <strong className="text-slate-900">{convocatoria}</strong>.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 font-medium">
              Horario habitual de contacto: Lunes a Viernes, de 09:00 a 18:00 CET.
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
            >
              Volver a la Página Principal
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block mb-2">
                Demostración Guiada
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Solicita una Demo Personalizada
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Descubre en 20 minutos cómo Subventio estructura tus expedientes documentales y previene requerimientos de auditoría.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre y Apellidos *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carmen Martínez"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombre de la Organización / Consultora *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder="Ej. Gestora de Fondos Públicos S.L."
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Profesional *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="carmen@organizacion.es"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Ámbito o Convocatoria Principal
                </label>
                <select
                  value={convocatoria}
                  onChange={(e) => setConvocatoria(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                >
                  <option value="NextGenerationEU">Fondos Europeos NextGenerationEU / PRTR</option>
                  <option value="CDTI">CDTI / Proyectos I+D+i</option>
                  <option value="Autonómicas">Convocatorias Autonómicas / Entidades Locales</option>
                  <option value="Fundaciones">Tercer Sector y Fundaciones Sociales</option>
                  <option value="General">Múltiples convocatorias / Consultoría externa</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-500/20 transition-all cursor-pointer group"
                >
                  <span>Confirmar Solicitud de Demo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sin compromiso. Tratamiento de datos bajo normativa RGPD.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
