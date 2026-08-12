import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappClean}?text=Hallo%20Nord%20Glanz,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Reinigung%20und%20m%C3%B6chte%20ein%20Angebot.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs py-2.5 px-3.5 rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-2 max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-semibold text-emerald-400 mb-0.5">Schnelles Angebot?</p>
            <p className="text-slate-300 text-[11px] leading-tight">
              Fotos per WhatsApp senden &amp; direkt Festpreis erhalten!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            id="whatsapp-tooltip-close-button"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
        aria-label="WhatsApp Nachricht schreiben"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
