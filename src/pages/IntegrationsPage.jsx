import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import SocialProofSection from '../components/SocialProofSection';
import { 
  Layers, 
  ArrowRight, 
  MessageSquare, 
  RefreshCw, 
  Check, 
  Code2, 
  Database, 
  ShieldCheck 
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

export default function IntegrationsPage() {
  const { formatPrice } = useCurrency();

  const integrationsWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I want to discuss connecting our business applications and building custom software / API integrations."
  );

  const services = [
    {
      title: "REST API & Custom Connectors",
      desc: "Connect proprietary software, web platforms, and third-party SaaS services via robust, authenticated REST API integrations."
    },
    {
      title: "Website to CRM Connections",
      desc: "Sync lead forms, e-commerce transactions, and interactive quote tools directly into Zoho, Odoo, or HubSpot with complete data mapping."
    },
    {
      title: "Event-Driven Webhooks",
      desc: "Real-time listeners that trigger downstream workflows instantly when key events occur (payment completed, invoice paid, contract signed)."
    },
    {
      title: "Two-Way Data Synchronization",
      desc: "Keep inventory, customer records, and order statuses synchronized across separate platforms with bidirectional polling or webhooks."
    },
    {
      title: "Error Handling & Monitoring",
      desc: "Automatic retry logic, payload logging, and alert channels to detect and resolve network hiccups before data is lost."
    },
    {
      title: "Technical Documentation",
      desc: "Complete API endpoint documentation, data schema maps, authentication token guidelines, and post-launch maintenance notes."
    }
  ];

  const popularIntegrations = [
    { name: "Zoho CRM & Books", desc: "Automate deal-to-invoice workflows, multi-currency billing, and payment reconciliations across your sales pipeline." },
    { name: "Odoo ERP & POS", desc: "Sync physical point-of-sale checkout with central warehouse inventory and financial ledgers in real time." },
    { name: "Stripe & Payment Webhooks", desc: "Secure payment processing with real-time webhooks for subscriptions, one-time charges, and marketplace payouts." },
    { name: "WordPress & React Web Apps", desc: "Custom contact form listeners, lead capture hooks, and customer portal database connections." },
    { name: "Google & Meta Lead Ads", desc: "Direct webhook routing from Facebook/Instagram Lead Ads straight into your active CRM sales pipeline." },
    { name: "WhatsApp Business API", desc: "Automated booking notifications, payment receipt dispatches, and interactive customer bot journeys." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-slate-200 selection:text-black">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section - Clarity Monochrome Minimalist */}
        <section className="pt-20 pb-20 md:pt-28 md:pb-28 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-black" />
              <span>Software &amp; API Integrations</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Connect Your Business Tools. <br className="hidden sm:inline" />
              Reduce Manual Work.
            </h1>

            <p className="clarity-text max-w-3xl mx-auto text-slate-600">
              When business applications operate separately, staff are forced to duplicate records, manually re-enter data, and resolve inconsistent numbers. We help connect systems so information moves between them reliably, securely, and in real time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={integrationsWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[#111111] hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss an Integration</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Integration Scope</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>

            {/* Protocols & Connectors Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-600 font-semibold mr-1">
                Supported Protocols:
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                REST APIs &amp; Webhooks
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                GraphQL Endpoints
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                OAuth 2.0 &amp; HMAC Auth
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Stripe &amp; Payment Hooks
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                PostgreSQL &amp; MySQL Sync
              </span>
            </div>

            {/* Clean Monochrome Trust Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> Sub-200ms Latency
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> Automated Dead-Letter Queue
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> End-to-End Encryption
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> Swagger / Postman Specs
              </span>
            </div>

            {/* Humanized API Integrations Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/api-integrations.jpg" 
                  alt="Senior software engineers reviewing cloud architecture blueprints and API data connectors" 
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Cloud &amp; API Middleware
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Bi-Directional Synchronization
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Bulletproof Data Pipelines Between Your Core Tools
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    REST, GraphQL, webhook handlers, and custom database sync with automated deduplication and failover logging.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Integration Capabilities Grid */}
        <section className="py-20 md:py-28 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                Technical Scope
              </span>
              <h2 className="clarity-h2 text-black mt-3">
                Integration Services &amp; Middleware
              </h2>
              <p className="clarity-text text-slate-600 mt-3">
                We design clean, documented data pipelines between your web frontends, databases, and commercial software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6 font-semibold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="clarity-h3 text-black mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Common Architectures Section */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Systems &amp; Stacks
              </span>
              <h2 className="clarity-h2 text-black mt-3">
                Common Integration Architectures
              </h2>
              <p className="clarity-text text-slate-600 mt-2">
                Examples of systems we connect seamlessly to keep business operations synchronized.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularIntegrations.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-[#F4F5F7] border border-slate-200 hover:border-black transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-base text-[#111111]">{item.name}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Final CTA - Monochrome Dark Box */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-14 bg-[#111111] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Connect Your Stack
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Need Two or More Systems to Work Together?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tell us which applications you use and what information needs to move between them. We will evaluate API specifications and propose an efficient integration roadmap.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-slate-100 transition shadow-sm text-center"
                >
                  Discuss an Integration
                </Link>
                <a
                  href={integrationsWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#1F2937] hover:bg-slate-800 border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
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
