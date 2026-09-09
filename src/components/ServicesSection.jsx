import React, { useState } from 'react';
import { 
  Check, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  BadgePercent,
  Clock
} from 'lucide-react';
import { SERVICES, CATEGORIES, createWhatsAppUrl } from '../data/servicesData';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-50 border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent SME & Enterprise Packages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Services <span className="text-brand-cyanDeep">Engineered for Conversion</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Every package is structured with clear deliverables, zero hidden fees, and maximum ROI for businesses in Kenya.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {CATEGORIES.filter(c => c.id !== 'software').map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spacious 2-Column Services Grid (No More Squeezing!) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const orderWhatsAppUrl = createWhatsAppUrl(service.whatsappText);

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-200 p-8 sm:p-10 bg-white border ${
                  service.highlight
                    ? 'border-brand-cyan shadow-card-hover ring-1 ring-brand-cyan/30'
                    : 'border-slate-200 shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute -top-3.5 right-8">
                    <span className="px-3.5 py-1 text-xs font-extrabold tracking-wide uppercase rounded-full bg-brand-coral text-white shadow-sm">
                      {service.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Service Channels / Platforms */}
                  {service.channels && (
                    <div className="flex items-center gap-2 mb-3">
                      {service.channels.map((ch, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Pricing Box - Wide, Spacious & Clear */}
                  <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-slate-500">Ksh.</span>
                        <span className="text-4xl font-extrabold text-slate-900 font-mono tracking-tight">
                          {service.price}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {service.billing}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-brand-green bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        Instant Kickoff
                      </span>
                    </div>

                    {/* Tier breakdowns if available */}
                    {service.tiers && (
                      <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                          Tier Packages:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.tiers.map((t, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                              <div className="flex items-center justify-between font-bold">
                                <span className="text-slate-800">{t.name}</span>
                                <span className="text-brand-cyanDeep font-mono">{t.price}</span>
                              </div>
                              <p className="text-[11px] text-slate-500 mt-1 leading-snug">{t.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Specific package options (e.g. Email Management) */}
                    {service.options && (
                      <div className="mt-4 pt-4 border-t border-slate-200 space-y-2">
                        <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                          Option Breakdown:
                        </div>
                        <div className="space-y-2">
                          {service.options.map((opt, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                              <div>
                                <span className="font-bold text-slate-800 block">{opt.name}</span>
                                <span className="text-[11px] text-slate-500">{opt.desc}</span>
                              </div>
                              <span className="font-mono font-extrabold text-brand-cyanDeep shrink-0 ml-3">
                                {opt.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Detailed Deliverables in Spacious 2-Column Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyanDeep" />
                      Detailed Package Deliverables:
                    </div>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                          <span className="w-4 h-4 rounded-full bg-cyan-100 border border-brand-cyan/40 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-brand-cyanDeep stroke-[3]" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Rapid WhatsApp response on 0729 915 459</span>
                  </div>

                  <a
                    href={orderWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-6 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Order via WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bundle Banner Below Grid */}
        <div className="mt-16 rounded-3xl p-8 bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-extrabold text-slate-900 flex items-center gap-2 justify-center md:justify-start">
              <BadgePercent className="w-6 h-6 text-brand-coral" />
              Need multiple services bundled together?
            </h4>
            <p className="text-sm text-slate-600">
              Combine Website Development + Social Media + POS for our automatic <strong>10% SME Bundle Discount</strong>.
            </p>
          </div>
          <a
            href="#calculator"
            className="px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md shrink-0 transition"
          >
            Launch Bundle Calculator
          </a>
        </div>

      </div>
    </section>
  );
}
