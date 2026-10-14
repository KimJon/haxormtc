import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import CurrencySelector from './CurrencySelector';

export default function TopTicker() {
  const { currency } = useCurrency();

  const partnerUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run an agency / consultancy and would like to inquire about white-label CRM & automation technical delivery."
  );

  return (
    <div className="bg-[#1C1D1D] text-white text-xs py-2 px-4 relative z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5 mx-auto md:mx-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FE4775] text-white text-[10px] font-black uppercase tracking-wider">
            <Briefcase className="w-3 h-3 text-white" />
            Agency Partner
          </span>
          <span className="text-slate-200 font-medium hidden sm:inline">
            White-Label CRM &amp; Automation Delivery for Agencies in UK, Europe, Australia &amp; Worldwide.
          </span>
          <span className="text-slate-200 font-medium sm:hidden">
            White-Label CRM &amp; Automation for Agencies
          </span>
          <Link 
            to="/agency-partners"
            className="text-[#18D2FA] hover:text-white font-bold ml-1 inline-flex items-center gap-1 transition"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 text-slate-300 shrink-0 text-xs">
          <a 
            href={`mailto:${CONTACT_INFO.emailOfficial}`} 
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
          >
            <Mail className="w-3.5 h-3.5 text-[#18D2FA]" />
            <span>{CONTACT_INFO.emailOfficial}</span>
          </a>
          <span className="text-slate-600">•</span>
          <CurrencySelector compact={true} />
          <span className="text-slate-600">•</span>
          <a
            href={partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#18D2FA] hover:text-white font-bold transition"
          >
            Partner Desk
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
