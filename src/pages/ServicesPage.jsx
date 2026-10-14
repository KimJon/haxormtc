import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  SERVICES, 
  CATEGORIES, 
  CONTACT_INFO, 
  createWhatsAppUrl 
} from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  Filter,
  ShieldCheck
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { formatPrice, currency, isAfrica } = useCurrency();

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-primaryText font-sans antialiased flex flex-col">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-12 pb-14 md:pt-18 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Service Catalog & Transparent Rates</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#373656] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
              Services Engineered to Win Clients & Grow Revenue
            </h1>

            <p className="body-figtree max-w-2xl mx-auto text-slate-600 leading-relaxed">
              Transparent pricing and milestone contracts with zero hidden fees for global clients and regional businesses. Choose a service below to view full deliverables, package tiers, and direct WhatsApp funnels.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Flagship Technical Delivery Pillars */}
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/15 px-2.5 py-0.5 rounded-full">
                  Flagship B2B Capabilities
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Core Implementation Pillars
                </h2>
              </div>
              <Link
                to="/agency-partners"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FE4775] hover:bg-[#e43864] transition shadow-xs shrink-0"
              >
                <span>Agency White-Label Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Link
                to="/services/crm-implementation"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-[#18D2FA]/50 transition group"
              >
                <div className="text-[10px] font-bold uppercase text-[#0EA5C6] mb-1">
                  Zoho • Odoo • HubSpot
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0EA5C6] transition">
                  CRM Implementation &rarr;
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Pipelines, data migration, lead assignment, automated triggers and executive dashboards.
                </p>
              </Link>

              <Link
                to="/services/business-automation"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-[#FE4775]/50 transition group"
              >
                <div className="text-[10px] font-bold uppercase text-[#FE4775] mb-1">
                  Workflows • Triggers • Logic
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FE4775] transition">
                  Business Automation &rarr;
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  End-to-end process mapping, notification cadences, routing, and multi-tier approvals.
                </p>
              </Link>

              <Link
                to="/services/integrations"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-card hover:border-[#FED147]/70 transition group"
              >
                <div className="text-[10px] font-bold uppercase text-amber-700 mb-1">
                  APIs • Webhooks • Sync
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-800 transition">
                  Software Integrations &rarr;
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  REST APIs, webhooks, website-to-CRM sync, bidirectional data mapping, and docs.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => {
                const serviceWhatsAppUrl = createWhatsAppUrl(service.whatsappText);
                return (
                  <div
                    key={service.id}
                    className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                      service.highlight
                        ? 'bg-white border-2 border-brand-cyan shadow-card hover:shadow-card-hover'
                        : 'bg-slate-50/70 border border-slate-200 shadow-xs hover:shadow-card'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full ${
                          service.highlight ? 'bg-cyan-100 text-brand-cyanDeep' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {service.badge}
                        </span>

                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-extrabold text-[#373656] font-mono">
                            {formatPrice(service.price)}
                          </span>
                          <span className="text-xs text-slate-500 font-medium ml-1">
                            {service.billing}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#373656] font-heading">
                        {service.name}
                      </h2>

                      <p className="text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                        {service.tagline}
                      </p>

                      {/* Package Tiers preview if available */}
                      {service.packages && (
                        <div className="my-4 p-3 rounded-2xl bg-cyan-50/60 border border-brand-cyan/20 text-xs text-slate-700 space-y-1">
                          <div className="font-extrabold text-brand-cyanDeep">Available Package Tiers:</div>
                          <div className="flex flex-wrap gap-2 pt-1 font-semibold">
                            {service.packages.map((p) => (
                              <span key={p.id} className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px]">
                                {p.name} ({formatPrice(p.price)})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Deliverables checklist */}
                      <div className="my-6 pt-6 border-t border-slate-200/80 space-y-2.5">
                        <span className="text-xs font-bold uppercase text-slate-500 tracking-wider block mb-2">
                          Key Deliverables:
                        </span>
                        {service.deliverables.slice(0, 5).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5 stroke-[3]" />
                            <span className="leading-snug">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition shadow-xs"
                      >
                        <span>View Full Landing Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={serviceWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-1/2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-1.5 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
