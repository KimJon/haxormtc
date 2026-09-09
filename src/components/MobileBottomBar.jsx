import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, Sparkles } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export default function MobileBottomBar() {
  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am browsing your website on my phone and would like to speak with a specialist."
  );

  return (
    <aside aria-label="Quick contact" className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Direct Email Button */}
        <a
          href={`mailto:${CONTACT_INFO.emailOfficial}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 border border-slate-200"
          aria-label="Email Haxor MTC"
        >
          <Mail className="w-3.5 h-3.5 text-brand-cyanDeep shrink-0" />
          <span>Email Us</span>
        </a>

        {/* Primary Sleek WhatsApp Conversion Button */}
        <a
          href={defaultWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-2.5 px-4 rounded-xl bg-brand-green hover:bg-[#20ba5a] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-glow-whatsapp transition active:scale-95"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-white shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Quote / Packages Link */}
        <Link
          to="/services"
          className="py-2.5 px-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-brand-cyanDeep text-xs font-bold flex items-center justify-center gap-1 transition active:scale-95 border border-brand-cyan/30"
          aria-label="View Packages"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Rates</span>
        </Link>

      </div>
    </aside>
  );
}
