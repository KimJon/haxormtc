import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import CurrencySelector from './CurrencySelector';

export default function TopTicker() {
  const { formatPrice, currency } = useCurrency();
  const dynamicPromoPrice = formatPrice(7000);

  const promoUrl = createWhatsAppUrl(
    `Hello Haxor MTC, I would like to claim the ${dynamicPromoPrice} Website Development package with 1 Year Free Domain & Hosting!`
  );

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5 mx-auto md:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-coral text-white text-[11px] font-bold">
            <Sparkles className="w-3 h-3" />
            Special Package
          </span>
          <span className="text-slate-200 font-medium hidden sm:inline">
            Turnkey Website Development for only <strong className="text-white font-bold">{dynamicPromoPrice}</strong> — Includes <span className="text-brand-cyan font-bold">1 Year FREE Domain & Cloud Hosting</span>!
          </span>
          <span className="text-slate-200 font-medium sm:hidden">
            Website Dev for <strong className="text-white">{dynamicPromoPrice}</strong> (Free Domain & Hosting)
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3 text-slate-300 shrink-0 text-xs">
          <span className="flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            Executive Technology Partner • Milestone Delivery
          </span>
          <span className="text-slate-600">•</span>
          <CurrencySelector compact={true} />
          <span className="text-slate-600">•</span>
          <a
            href={promoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brand-cyan hover:text-white font-bold transition"
          >
            WhatsApp
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
