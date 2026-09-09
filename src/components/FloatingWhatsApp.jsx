import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export default function FloatingWhatsApp() {
  const [closed, setClosed] = useState(false);

  const defaultUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am on your website (haxormtc.com) and would like to speak with a specialist."
  );

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-50 items-end gap-3 pointer-events-auto">
      
      {/* Tooltip Notification bubble */}
      {!closed && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 text-xs shadow-lg backdrop-blur-xl animate-fade-in text-slate-700">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
          <span>Need quick pricing or a demo? <strong className="text-slate-900">We're online</strong></span>
          <button
            onClick={() => setClosed(true)}
            className="p-1 text-slate-400 hover:text-slate-700 transition"
            aria-label="Close notification"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Pulsing Floating Button */}
      <a
        href={defaultUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative w-14 h-14 rounded-full bg-brand-green flex items-center justify-center text-white shadow-glow-whatsapp hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
        <MessageSquare className="w-7 h-7 fill-white group-hover:scale-105 transition-transform" />
      </a>

    </div>
  );
}
