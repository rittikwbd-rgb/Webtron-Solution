import React, { useState } from 'react';
import { ArrowUpRight, X, Calendar } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER } from '../data/agencyData';
import { AppLanguage } from '../types';

interface StickyWhatsAppCTAProps {
  currentLanguage?: AppLanguage;
  onOpenCalendar?: () => void;
}

const STICKY_TRANSLATIONS: Record<AppLanguage, { status: string; text: string; btn: string; bookCall: string }> = {
  EN: {
    status: 'Online Now • Direct Support',
    text: "Want to double your leads? Speak on WhatsApp or schedule a direct 1-on-1 strategy call!",
    btn: 'Chat on WhatsApp',
    bookCall: 'Book Strategy Call'
  },
  ES: {
    status: 'En Línea Ahora • Soporte Directo',
    text: '¿Quieres duplicar tus clientes? ¡Habla por WhatsApp o reserva una llamada estratégica!',
    btn: 'Hablar por WhatsApp',
    bookCall: 'Reservar Llamada'
  },
  FR: {
    status: 'En Ligne • Support Direct',
    text: 'Vous voulez doubler vos prospects? Discutons sur WhatsApp ou réservez un appel stratégique!',
    btn: 'Discuter sur WhatsApp',
    bookCall: 'Réserver un Appel'
  },
  DE: {
    status: 'Jetzt Online • Direkt-Support',
    text: 'Möchten Sie Ihre Leads verdoppeln? Chatten Sie auf WhatsApp oder buchen Sie ein Strategiegespräch!',
    btn: 'Auf WhatsApp chatten',
    bookCall: 'Termin Buchen'
  }
};

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const StickyWhatsAppCTA: React.FC<StickyWhatsAppCTAProps> = ({ currentLanguage = 'EN', onOpenCalendar }) => {
  const [minimized, setMinimized] = useState(false);
  const t = STICKY_TRANSLATIONS[currentLanguage] || STICKY_TRANSLATIONS.EN;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      
      {!minimized && (
        <div className="bg-white border border-slate-200 p-4 rounded-2xl shadow-2xl max-w-xs text-slate-900 animate-in slide-in-from-bottom-5 duration-300 relative group">
          <button
            type="button"
            onClick={() => setMinimized(true)}
            className="absolute -top-2 -left-2 p-1 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm"
            title="Dismiss notification"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 overflow-hidden p-0.5 shadow-2xs shrink-0">
                <img
                  src="/logo.png"
                  alt="Webtron Solution Logo"
                  className="w-full h-full object-contain"
                  width={24}
                  height={24}
                />
              </div>
              <span className="text-[11px] font-black text-slate-900 tracking-tight uppercase">Webtron Solution</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="text-[10px] font-extrabold text-emerald-700">Live</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-snug mb-3 font-medium">
            {t.text}
          </p>

          <div className="space-y-2">
            {onOpenCalendar && (
              <button
                type="button"
                onClick={onOpenCalendar}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{t.bookCall}</span>
              </button>
            )}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="floating-whatsapp-bubble-link"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>{t.btn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Buttons Bar */}
      <div className="flex items-center gap-2">
        {onOpenCalendar && (
          <button
            type="button"
            onClick={onOpenCalendar}
            className="p-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-blue-400 border border-slate-700 shadow-xl hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
            title={t.bookCall}
          >
            <Calendar className="w-5 h-5" />
          </button>
        )}

        {/* Main Pulse WhatsApp Circle Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-circle-btn"
          className="relative group p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center"
          title={`${t.btn} (${WHATSAPP_NUMBER})`}
        >
          <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-30"></span>
          <WhatsAppIcon className="w-7 h-7 text-white relative z-10" />
        </a>
      </div>

    </div>
  );
};

