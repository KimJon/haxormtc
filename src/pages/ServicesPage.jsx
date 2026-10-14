import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import SocialProofSection from '../components/SocialProofSection';
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
  Layers,
  Cpu,
  Workflow
} from 'lucide-react';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { formatPrice } = useCurrency();

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header - Clarity Monochrome Minimalist */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Full Service Catalog &amp; Transparent Rates</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Services Engineered to Win Clients &amp; Scale Delivery
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
              Transparent wholesale sprint pricing and milestone contracts with zero hidden fees. Partner with Haxor MTC for CRM configuration, process automation, and full-stack software integrations.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#111111] text-white shadow-sm'
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
        <section className="py-16 md:py-20 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  Core Implementation Pillars
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight mt-2">
                  Specialist Technical Capabilities
                </h2>
              </div>
              <Link
                to="/agency-partners"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#111111] hover:bg-black transition-all shadow-sm shrink-0"
              >
                <span>Agency White-Label Hub</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/services/crm-implementation"
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase text-slate-400 mb-2">
                    Zoho • Odoo • HubSpot
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-black transition">
                    CRM Implementation &rarr;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    Pipelines, data migration, lead assignment, automated triggers, and executive dashboards.
                  </p>
                </div>
              </Link>

              <Link
                to="/services/business-automation"
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase text-slate-400 mb-2">
                    Workflows • Triggers • Logic
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-black transition">
                    Business Automation &rarr;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    End-to-end process mapping, notification cadences, routing, and multi-tier approvals.
                  </p>
                </div>
              </Link>

              <Link
                to="/services/integrations"
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold uppercase text-slate-400 mb-2">
                    APIs • Webhooks • Sync
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] group-hover:text-black transition">
                    Software Integrations &rarr;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    REST APIs, webhooks, website-to-CRM sync, bidirectional data mapping, and docs.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => {
                const serviceWhatsAppUrl = createWhatsAppUrl(service.whatsappText);
                return (
                  <div
                    key={service.id}
                    className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all ${
                      service.highlight
                        ? 'bg-white border-2 border-black shadow-sm'
                        : 'bg-white border border-slate-200 hover:border-black shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className={`text-[11px] font-bold uppercase px-3 py-1 rounded-full ${
                          service.highlight ? 'bg-black text-white' : 'bg-slate-100 text-slate-800'
                        }`}>
                          {service.badge}
                        </span>

                        <div className="text-right">
                          <span className="text-2xl sm:text-3xl font-black text-[#111111] font-mono">
                            {formatPrice(service.price)}
                          </span>
                          <span className="text-xs text-slate-500 font-medium ml-1">
                            {service.billing}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
                        {service.name}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {service.tagline}
                      </p>

                      {/* Package Tiers preview if available */}
                      {service.packages && (
                        <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                          <div className="font-bold text-black uppercase tracking-wider text-[11px]">Available Package Tiers:</div>
                          <div className="flex flex-wrap gap-2 pt-1 font-semibold">
                            {service.packages.map((p) => (
                              <span key={p.id} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-800">
                                {p.name} ({formatPrice(p.price)})
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Deliverables checklist */}
                      <div className="my-6 pt-6 border-t border-slate-200 space-y-3">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-2">
                          Key Deliverables:
                        </span>
                        {service.deliverables.slice(0, 5).map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <Check className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[3]" />
                            <span className="leading-snug">{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex flex-col sm:flex-row items-center gap-3 border-t border-slate-100">
                      <Link
                        to={`/services/${service.id}`}
                        className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center bg-[#111111] text-white hover:bg-black flex items-center justify-center gap-1.5 transition shadow-sm"
                      >
                        <span>View Full Landing Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={serviceWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-1/2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black flex items-center justify-center gap-1.5 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-black shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
