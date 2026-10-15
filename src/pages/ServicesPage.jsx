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
  Workflow,
  ShieldCheck,
  Clock,
  Lock,
  GitBranch
} from 'lucide-react';
import { ZohoLogo, OdooLogo, GoogleAdsLogo, MetaPixelLogo, StripeLogo } from '../components/OfficialLogos';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { formatPrice } = useCurrency();

  const whatsAppServicesUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am reviewing your services catalog and would like to scope a project."
  );

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-slate-200 selection:text-black">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header - Rich Clarity Monochrome Hero */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Full Service Catalog &amp; Transparent Rates</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Services Engineered to Win Clients &amp; Scale Delivery
            </h1>

            <p className="clarity-text max-w-2xl mx-auto text-slate-600">
              Transparent wholesale sprint pricing and milestone contracts with zero hidden fees. Partner with Haxor MTC for CRM configuration, process automation, and full-stack software integrations.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsAppServicesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#111111] hover:bg-black transition flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>Scope on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition flex items-center gap-2"
              >
                <span>Book Scoping Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Reassurance Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-black" /> 24–48h Sprint Kickoff
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> 100% Milestone Approvals
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-black" /> Bilateral NDA Protected
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-3.5 h-3.5 text-black" /> Full Code &amp; Schema Handover
              </span>
            </div>

            {/* Supported Platforms Micro-Pill Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <span className="text-[11px] uppercase tracking-wider text-slate-600 font-semibold mr-1">
                Supported Ecosystems:
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                <ZohoLogo className="h-3.5 w-auto" /> Zoho One &amp; CRM
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                <OdooLogo className="h-3.5 w-auto" /> Odoo ERP
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                <GoogleAdsLogo className="h-3.5 w-3.5" /> Google Cloud
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                <MetaPixelLogo className="h-3.5 w-3.5" /> Meta CAPI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                <StripeLogo className="h-3 w-auto" /> Stripe Billing
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#111111] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Humanized Services Delivery Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/services-delivery.jpg" 
                  alt="Haxor MTC technical managers and engineers coordinating software delivery metrics" 
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Technical Sprint Management
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Transparent Sprint Deliverables
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Senior Engineering Sprints Built Around Client Deadlines
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    Every service engagement includes structured sprint backlogs, daily standups, and clear deployment staging milestones.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Flagship Technical Delivery Pillars */}
        <section className="py-16 md:py-20 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                  Core Implementation Pillars
                </span>
                <h2 className="clarity-h2 text-black mt-2">
                  Specialist Technical Capabilities
                </h2>
              </div>
              <Link
                to="/agency-partners"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#111111] hover:bg-black transition-all shadow-sm shrink-0"
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
                          <span className="text-2xl sm:text-3xl font-semibold text-[#111111]">
                            {formatPrice(service.price)}
                          </span>
                          <span className="text-xs text-slate-500 font-medium ml-1">
                            {service.billing}
                          </span>
                        </div>
                      </div>

                      <h3 className="clarity-h2 !text-2xl text-[#111111]">
                        {service.name}
                      </h3>

                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
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
