import React, { useState } from 'react';
import { Language } from '../i18n/translations';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC<{language:Language}> = ({language}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fab-whatsapp fixed z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-xl border border-slate-200 text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-right duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{language === 'ES' ? 'Consulta tus viajes por WhatsApp' : language === 'EN' ? 'Ask about trips on WhatsApp' : 'Tanya paket wisata via WhatsApp'}</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 -mr-2 ml-1 flex h-9 w-9 items-center justify-center"
            aria-label={language === 'ES' ? 'Cerrar' : language === 'EN' ? 'Close' : 'Tutup'}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/6285820830530?text=${encodeURIComponent(language === 'ES' ? 'Hola, Banggai Paradise. Me gustaría recibir información sobre viajes a las islas Banggai.' : language === 'EN' ? 'Hello Banggai Paradise, I would like information about trips to the Banggai Islands.' : 'Halo Banggai Paradise, saya ingin tanya informasi trip ke Banggai')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-transform duration-200 hover:scale-110"
        aria-label={language === 'ES' ? 'Contactar por WhatsApp' : language === 'EN' ? 'Chat via WhatsApp' : 'Chat via WhatsApp'}
      >
        <MessageCircle aria-hidden="true" />
      </a>
    </div>
  );
};
