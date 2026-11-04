import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white shadow-xl border border-slate-200 text-xs font-semibold text-slate-800 animate-in fade-in slide-in-from-right duration-300">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Tanya paket wisata via WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/628124567890?text=Halo%20Banggai%20Paradise,%20saya%20ingin%20tanya%20informasi%20trip%20ke%20Banggai"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 transition-transform duration-200 hover:scale-110"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
