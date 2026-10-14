import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import CurrencySelector from './CurrencySelector';

export default function TopTicker() {
  const partnerUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run an agency / consultancy and would like to inquire about white-label CRM & automation technical delivery."
  );

  return (
    <div className="bg-[#111111] text-slate-300 text-xs py-2 px-4 relative z-50 border-b border-neutral-800 font-work-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-2.5 mx-auto md:mx-0">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-white/10 text-white text-[10px] font-bold uppercase tracking-wider">
            Agency Delivery
          </span>
          <span className="text-slate-300 font-normal hidden sm:inline">
            White-Label CRM &amp; Workflow Automation for Digital Agencies in the UK, Europe, Australia &amp; Worldwide.
          </span>
          <span className="text-slate-300 font-normal sm:hidden">
            White-Label CRM &amp; Automation for Agencies
          </span>
          <Link 
            to="/agency-partners"
            className="text-white hover:text-slate-200 font-bold ml-1 inline-flex items-center gap-0.5 underline transition"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-400 shrink-0 text-xs">
          <a 
            href={`mailto:${CONTACT_INFO.emailOfficial}`} 
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition"
          >
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            <span>{CONTACT_INFO.emailOfficial}</span>
          </a>
          <span className="text-neutral-700">•</span>
          <CurrencySelector compact={true} />
          <span className="text-neutral-700">•</span>
          <a
            href={partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-slate-200 font-bold transition"
          >
            Partner Desk &rarr;
          </a>
        </div>

      </div>
    </div>
  );
}
