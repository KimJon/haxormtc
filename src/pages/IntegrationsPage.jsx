import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  Code2, 
  Zap, 
  Cpu, 
  Clock, 
  Sparkles,
  Database,
  RefreshCw,
  Check
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
      desc: "Sync lead forms, e-commerce transactions, and interactive quote tools directly into Zoho, Odoo, or HubSpot with data mapping."
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
    { name: "Zoho CRM & Books", desc: "Automate deal-to-invoice workflows, eTIMS tax compliance, and payment reconciliations." },
    { name: "Odoo ERP & POS", desc: "Sync physical point-of-sale checkout with central warehouse inventory and financial ledgers." },
    { name: "M-Pesa STK & Card Gateways", desc: "Instant phone STK push prompts and card payment webhooks for retail and direct booking apps." },
    { name: "WordPress & React Web Apps", desc: "Custom contact form listeners, lead capture hooks, and customer portal database connections." },
    { name: "Google & Meta Lead Ads", desc: "Direct webhook routing from Facebook/Instagram Lead Ads directly into your active sales pipeline." },
    { name: "WhatsApp Business API", desc: "Automated booking notifications, payment receipt dispatches, and interactive customer bot journeys." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#3F4040] font-sans antialiased flex flex-col selection:bg-[#FED147]/30 selection:text-[#3F4040]">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-surface-50 to-white border-b border-[#3F4040]/10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FED147]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#FED147]/50 shadow-xs text-xs font-bold uppercase tracking-wider text-[#D8AB16]">
              <Layers className="w-3.5 h-3.5 text-[#D8AB16]" />
              <span>Software &amp; API Integrations</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1D1D] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Connect Your Business Tools. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D2FA] via-[#0EA5C6] to-[#FED147]">
                Reduce Manual Work.
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#3F4040]/90 leading-relaxed">
              When business applications operate separately, staff are forced to duplicate records, manually re-enter data, and resolve inconsistent numbers. We help connect systems so information moves between them reliably, securely, and in real time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={integrationsWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-[#1C1D1D] bg-[#FED147] hover:bg-[#E5BC3A] transition shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-[#1C1D1D]" />
                <span>Discuss an Integration</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-[#3F4040] bg-white/90 hover:bg-white border border-[#3F4040]/20 hover:border-[#18D2FA] transition shadow-xs flex items-center justify-center gap-2"
              >
                <span>Submit Integration Scope</span>
                <ArrowRight className="w-4 h-4 text-[#18D2FA]" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#3F4040]/70">
              <span>REST APIs &amp; Webhooks</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>CRM-to-Web Sync</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>Payment Gateway Hooks</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>Error Retry Logic</span>
            </div>

          </div>
        </section>

        {/* Integration Capabilities Grid */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#D8AB16] bg-[#FED147]/20 px-3 py-1 rounded-full">
                Technical Scope
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                Integration Services &amp; Middleware
              </h2>
              <p className="text-sm sm:text-base text-[#3F4040]/80 mt-2">
                We design clean data pipelines between your web frontends, databases, and commercial software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#FED147] shadow-xs hover:shadow-card transition group">
                  <div className="w-9 h-9 rounded-xl bg-surface-100 text-[#D8AB16] flex items-center justify-center mb-4 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#1C1D1D] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#3F4040]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Popular Systems Connected */}
        <section className="py-20 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3 py-1 rounded-full">
                Systems &amp; Stacks
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                Common Integration Architectures
              </h2>
              <p className="text-sm text-[#3F4040]/80 mt-2">
                Examples of systems we connect seamlessly to keep business operations synchronized.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularIntegrations.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#3F4040]/10 shadow-xs">
                  <div className="flex items-center gap-2 mb-3">
                    <RefreshCw className="w-4 h-4 text-[#18D2FA]" />
                    <h4 className="font-bold text-base text-[#1C1D1D]">{item.name}</h4>
                  </div>
                  <p className="text-xs text-[#3F4040]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1C1D1D] to-[#3F4040] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FED147]">
                  Connect Your Stack
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Need Two or More Systems to Work Together?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Tell us which applications you use and what information needs to move between them. We will evaluate API specifications and propose an efficient integration roadmap.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#1C1D1D] bg-white hover:bg-slate-100 transition shadow-md"
                >
                  Discuss an Integration
                </Link>
                <a
                  href={integrationsWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] transition shadow-glow-whatsapp"
                >
                  WhatsApp Consultation
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
