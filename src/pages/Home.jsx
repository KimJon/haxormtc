import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import QuoteCalculator from '../components/QuoteCalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';
import TrustSection from '../components/TrustSection';
import BusinessKitsShowcase from '../components/BusinessKitsShowcase';
import { 
  Check,
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase, 
  Workflow, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Monitor, 
  Calculator, 
  Clock, 
  FileText, 
  Mail, 
  ChevronRight, 
  GitBranch, 
  BellRing, 
  Database, 
  Users2, 
  BarChart3, 
  Terminal, 
  FileCode2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { createWhatsAppUrl, CONTACT_INFO } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

export default function Home() {
  const { formatPrice } = useCurrency();
  const [activeDemo, setActiveDemo] = useState(1);
  const [demoStep, setDemoStep] = useState(3);

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run a digital agency / business and would like to discuss a CRM implementation & automation partnership."
  );

  const discussProjectWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I have a CRM / business process automation project in mind and would like to discuss requirements and scoping."
  );

  return (
    <div className="min-h-screen bg-white text-[#3F4040] font-sans antialiased flex flex-col selection:bg-[#18D2FA]/30 selection:text-[#3F4040]">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* SECTION 1: HERO (Clarity Performance Global Aesthetic) */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-surface-50 to-white border-b border-[#3F4040]/10">
          {/* Subtle Ambient Glows with Theme Colors */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#18D2FA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FE4775]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FED147]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#18D2FA]/40 shadow-xs text-xs font-bold uppercase tracking-wider text-[#0EA5C6]">
              <span className="w-2 h-2 rounded-full bg-[#18D2FA] animate-pulse" />
              <span>White-Label Technical Delivery Partner</span>
              <span className="text-[#3F4040]/30">•</span>
              <span className="text-[#3F4040] font-extrabold">UK • Europe • Australia • Worldwide</span>
            </div>

            {/* Primary Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1D1D] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Build Better Business Systems. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D2FA] via-[#0EA5C6] to-[#FE4775]">
                Deliver More for Your Clients.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#3F4040]/90 leading-relaxed font-sans font-normal">
              From CRM implementation to workflow automation and software integrations, Haxor MTC helps businesses and digital agencies turn manual processes into reliable, connected systems. Whether you need technical delivery support for your agency or a better way to manage your business, we help you implement practical technology solutions that work.
            </p>

            {/* Dual Clarity Performance Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/agency-partners"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FE4775] hover:bg-[#e43864] shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Briefcase className="w-4 h-4 text-white" />
                <span>Partner With Haxor</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#3F4040] bg-white/90 hover:bg-white border border-[#3F4040]/20 hover:border-[#18D2FA] backdrop-blur-sm transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <ChevronRight className="w-4 h-4 text-[#18D2FA]" />
              </a>
            </div>

            {/* Supporting Trust Statement */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#3F4040]/75">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18D2FA]" />
                Practical implementation
              </span>
              <span className="text-[#3F4040]/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18D2FA]" />
                Clear communication
              </span>
              <span className="text-[#3F4040]/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#18D2FA]" />
                Documented delivery
              </span>
            </div>

          </div>
        </section>

        {/* SECTION 2: WHO WE HELP (Split Panel Architecture) */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3 py-1 rounded-full border border-[#18D2FA]/20">
                Tailored Engagement Models
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1D1D] tracking-tight mt-3">
                Who We Help
              </h2>
              <p className="text-base text-[#3F4040]/80 mt-2">
                Whether you need behind-the-scenes technical execution for your client accounts or an internal system overhaul.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Audience 1: Digital Agencies and Consultancies */}
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-50 border border-[#18D2FA]/30 shadow-xs hover:shadow-card transition flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#18D2FA]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#18D2FA]/20 transition" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18D2FA]/15 text-[#0EA5C6] text-xs font-bold uppercase tracking-wider mb-5">
                    <Briefcase className="w-3.5 h-3.5 text-[#18D2FA]" />
                    <span>For Digital Agencies</span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1C1D1D] mb-3">
                    Need technical implementation support without expanding your permanent team?
                  </h3>

                  <p className="text-sm text-[#3F4040]/90 leading-relaxed mb-6 font-normal">
                    We help agencies deliver CRM projects, business automation, application integrations, and technical implementation work behind the scenes.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#0EA5C6] shrink-0 mt-0.5" />
                      <span><strong>100% White-Label:</strong> Delivered under your agency branding with mutual non-disclosure and non-compete terms.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#0EA5C6] shrink-0 mt-0.5" />
                      <span><strong>Capacity on Demand:</strong> Fixed-scope project sprints or reserved monthly technical blocks to handle overflow work.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#0EA5C6] shrink-0 mt-0.5" />
                      <span><strong>Agency Wholesale Margins:</strong> Wholesale rates structured so your agency preserves healthy margins.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#0EA5C6] shrink-0 mt-0.5" />
                      <span><strong>Target Sectors:</strong> Marketing agencies, web shops, CRM consultants, automation and operations advisors.</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/agency-partners"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-center bg-[#18D2FA] text-white hover:bg-[#0EA5C6] flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Explore Agency Partnerships</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Audience 2: Growing Businesses */}
              <div className="p-8 sm:p-10 rounded-3xl bg-surface-50 border border-[#FE4775]/30 shadow-xs hover:shadow-card transition flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#FE4775]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FE4775]/20 transition" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FE4775]/15 text-[#FE4775] text-xs font-bold uppercase tracking-wider mb-5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#FE4775]" />
                    <span>For Growing Businesses</span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1C1D1D] mb-3">
                    Still managing leads, customer follow-ups, reports, or business processes manually?
                  </h3>

                  <p className="text-sm text-[#3F4040]/90 leading-relaxed mb-6 font-normal">
                    We help you implement connected business systems that reduce repetitive work and improve visibility.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#FE4775] shrink-0 mt-0.5" />
                      <span><strong>Centralized Lead Pipeline:</strong> No lost enquiries; web leads route automatically with instant follow-ups.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#FE4775] shrink-0 mt-0.5" />
                      <span><strong>Workflow Automation:</strong> Connect your accounting, invoicing, WhatsApp, and email into unified triggers.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#FE4775] shrink-0 mt-0.5" />
                      <span><strong>Reliable Data Migration:</strong> Move away from messy spreadsheets with field-level data validation and cleanup.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-[#3F4040]">
                      <Check className="w-4 h-4 text-[#FE4775] shrink-0 mt-0.5" />
                      <span><strong>Full Staff Handover:</strong> Step-by-step documentation, recorded video walk-throughs, and warranty support.</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-center bg-[#FE4775] text-white hover:bg-[#e43864] flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Improve Your Business Systems</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: OUR CORE SERVICES (High-Contrast Clarity Dark Section) */}
        <section id="services" className="py-20 bg-[#3F4040] text-white relative overflow-hidden">
          {/* Subtle Accent Glows */}
          <div className="absolute top-0 left-10 w-96 h-96 bg-[#18D2FA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FE4775]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#18D2FA] bg-white/10 px-3.5 py-1 rounded-full border border-[#18D2FA]/30">
                  Technical Delivery Services
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                  Our Core Services
                </h2>
                <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
                  Specialized implementation capabilities designed to eliminate operational friction and scale client delivery.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#18D2FA]" />
                </Link>
              </div>
            </div>

            {/* 3 Core Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pillar 1: CRM Implementation */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#18D2FA]/50 transition flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#18D2FA]/20 text-[#18D2FA] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#18D2FA] bg-[#18D2FA]/10 px-2.5 py-1 rounded-md">
                    Zoho • Odoo • HubSpot
                  </span>

                  <h3 className="text-xl font-extrabold text-white mt-3 mb-2">
                    CRM Implementation
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Configure your CRM around your actual sales process, customer journey, and reporting requirements.
                  </p>

                  <div className="space-y-2 mb-8 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>CRM setup and configuration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>Sales pipeline design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>Contact and data migration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>Lead capture and assignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>Follow-up reminders &amp; task automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>Reporting dashboards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0" />
                      <span>Testing, training, and handover</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/services/crm-implementation"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-white/10 hover:bg-[#18D2FA] hover:text-white text-slate-200 flex items-center justify-center gap-2 transition"
                >
                  <span>Explore CRM Implementation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 2: Business Automation */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#FE4775]/50 transition flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FE4775]/20 text-[#FE4775] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Workflow className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FE4775] bg-[#FE4775]/10 px-2.5 py-1 rounded-md">
                    Workflows • Triggers • Logic
                  </span>

                  <h3 className="text-xl font-extrabold text-white mt-3 mb-2">
                    Business Automation
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Reduce repetitive work by connecting the steps, tools, and people involved in your business processes.
                  </p>

                  <div className="space-y-2 mb-8 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>Workflow mapping &amp; blueprinting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>Lead management automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>Automated notifications and reminders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>Task creation and smart assignment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>Automated reporting workflows</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>Approval processes &amp; sign-offs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0" />
                      <span>End-to-end testing &amp; documentation</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/services/business-automation"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-white/10 hover:bg-[#FE4775] hover:text-white text-slate-200 flex items-center justify-center gap-2 transition"
                >
                  <span>Explore Business Automation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Pillar 3: Software Integrations */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#FED147]/50 transition flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FED147]/20 text-[#FED147] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Layers className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FED147] bg-[#FED147]/10 px-2.5 py-1 rounded-md">
                    APIs • Webhooks • Two-Way Sync
                  </span>

                  <h3 className="text-xl font-extrabold text-white mt-3 mb-2">
                    Software Integrations
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Connect your business applications so that information moves between systems more reliably.
                  </p>

                  <div className="space-y-2 mb-8 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>Custom REST API integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>Real-time webhook triggers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>CRM and website integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>Data mapping and bidirectional sync</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>Integration staging &amp; payload testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>Error handling and monitor alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0" />
                      <span>Comprehensive technical documentation</span>
                    </div>
                  </div>
                </div>

                <Link
                  to="/services/integrations"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-white/10 hover:bg-[#FED147] hover:text-slate-900 text-slate-200 flex items-center justify-center gap-2 transition"
                >
                  <span>Explore Software Integrations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4: OUR WORK & CONCEPT DEMONSTRATIONS (Signature Clarity Interactive Architectural Feature) */}
        <section id="work" className="py-20 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/15 px-3.5 py-1 rounded-full border border-[#18D2FA]/30">
                Working System Demonstrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1D1D] tracking-tight mt-3">
                See How It Connects in Practice
              </h2>
              <p className="text-sm sm:text-base text-[#3F4040]/80 mt-2">
                Real, functional workflow architectures we design and deploy behind the scenes for agency clients and businesses.
              </p>

              {/* Demo Switcher Tabs */}
              <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#3F4040]/15 shadow-xs mt-6">
                <button
                  type="button"
                  onClick={() => setActiveDemo(1)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                    activeDemo === 1
                      ? 'bg-[#18D2FA] text-white shadow-xs'
                      : 'text-[#3F4040] hover:text-[#0EA5C6]'
                  }`}
                >
                  <Workflow className="w-3.5 h-3.5" />
                  <span>Demo 1: Website Enquiry to CRM</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveDemo(2)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                    activeDemo === 2
                      ? 'bg-[#18D2FA] text-white shadow-xs'
                      : 'text-[#3F4040] hover:text-[#0EA5C6]'
                  }`}
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Demo 2: Automated Follow-Up &amp; Reporting</span>
                </button>
              </div>
            </div>

            {/* DEMO 1: Website Enquiry to CRM */}
            {activeDemo === 1 && (
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#3F4040]/15 shadow-sm space-y-8 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded">
                      Concept Demonstration 01
                    </span>
                    <h3 className="text-xl font-black text-[#1C1D1D] mt-1">
                      Lead Capture, Validation, CRM Sync &amp; Assignment
                    </h3>
                    <p className="text-xs text-[#3F4040]/80 mt-1">
                      Visualizing what happens when a prospect submits an enquiry on a high-converting website.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Average Execution: &lt; 180ms</span>
                  </div>
                </div>

                {/* Interactive Workflow Diagram */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  
                  {/* Step 1 */}
                  <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200 relative group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center font-mono">
                        1
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Input</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Website Form Submitted
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Prospect inputs name, email, project budget and service requirements.
                    </p>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700">
                      POST /api/leads/v1
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-5 rounded-2xl bg-surface-50 border border-[#18D2FA]/40 relative group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#18D2FA] text-white text-xs font-bold flex items-center justify-center font-mono">
                        2
                      </span>
                      <span className="text-[10px] font-bold text-[#0EA5C6] uppercase">Automation</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Payload Sanitization &amp; Webhook
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Deduplicates email, parses country code, sets initial lead scoring weight.
                    </p>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-emerald-700">
                      status: "200_VALIDATED"
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200 relative group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center font-mono">
                        3
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">CRM Sync</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      CRM Deal Created
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Deal created in "New Qualified" stage; contact card mapped with full audit logs.
                    </p>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700">
                      Zoho / Odoo Lead ID: #7829
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-5 rounded-2xl bg-surface-50 border border-[#FE4775]/40 relative group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#FE4775] text-white text-xs font-bold flex items-center justify-center font-mono">
                        4
                      </span>
                      <span className="text-[10px] font-bold text-[#FE4775] uppercase">Trigger</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      Assignment &amp; Notifications
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Round-robin assigns account owner; triggers instant WhatsApp/email notification.
                    </p>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-[#FE4775]">
                      Task: "Call in &lt;15m"
                    </div>
                  </div>

                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="text-slate-600">
                    <strong>Business Impact:</strong> Replaces manual spreadsheet copy-pasting, eliminates 100% of missed form submissions, and drops response time from 14 hours to under 2 minutes.
                  </div>
                  <Link
                    to="/services/crm-implementation"
                    className="inline-flex items-center gap-1.5 font-bold text-[#0EA5C6] hover:underline shrink-0"
                  >
                    <span>Read CRM Implementation Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* DEMO 2: Automated Follow-Up and Reporting */}
            {activeDemo === 2 && (
              <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#3F4040]/15 shadow-sm space-y-8 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded">
                      Concept Demonstration 02
                    </span>
                    <h3 className="text-xl font-black text-[#1C1D1D] mt-1">
                      Pipeline Tracking, Aging Alarms &amp; Executive Reporting
                    </h3>
                    <p className="text-xs text-[#3F4040]/80 mt-1">
                      Visualizing automated follow-up cadences and executive pipeline dashboard aggregation.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Real-Time Cadence Automation</span>
                  </div>
                </div>

                {/* Dashboard & Pipeline Simulation */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Lead Pipeline Board Simulation */}
                  <div className="lg:col-span-2 p-5 rounded-2xl bg-surface-50 border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Live Pipeline Stages
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        18 Active Deals in Motion
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-xs">
                      {/* Column 1 */}
                      <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-slate-200/70 font-bold text-[11px] text-slate-700 flex justify-between">
                          <span>Qualified (6)</span>
                          <span>{formatPrice(45000)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                          <div className="font-bold text-slate-900">Acme Digital UK</div>
                          <div className="text-[11px] text-slate-500">White-label CRM Sprint</div>
                          <div className="mt-2 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                            Automated Welcome Sent
                          </div>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-[#18D2FA]/20 font-bold text-[11px] text-[#0EA5C6] flex justify-between">
                          <span>Proposal (8)</span>
                          <span>{formatPrice(72000)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-[#18D2FA]/30 shadow-2xs">
                          <div className="font-bold text-slate-900">Vanguard Studio AU</div>
                          <div className="text-[11px] text-slate-500">API Sync &amp; Automation</div>
                          <div className="mt-2 text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded inline-block">
                            Follow-Up Due: Today
                          </div>
                        </div>
                      </div>

                      {/* Column 3 */}
                      <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-emerald-100 font-bold text-[11px] text-emerald-800 flex justify-between">
                          <span>Won (4)</span>
                          <span>{formatPrice(58000)}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                          <div className="font-bold text-slate-900">Nordic Tech EU</div>
                          <div className="text-[11px] text-slate-500">Monthly Delivery Block</div>
                          <div className="mt-2 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
                            Invoice Generated
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Automated Alarms & Digest */}
                  <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BellRing className="w-4 h-4 text-[#FE4775]" />
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Automation Guardrails
                        </span>
                      </div>
                      
                      <div className="space-y-3 text-xs text-slate-600">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <div className="font-bold text-slate-800">48-Hour Stale Deal Trigger</div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Auto-alerts account executive if a proposal has had zero touchpoints for 48 hours.
                          </p>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                          <div className="font-bold text-slate-800">Daily Executive Slack Digest</div>
                          <p className="text-[11px] text-slate-500 mt-0.5">
                            Compiles won deals, overdue tasks, and conversion probability at 08:30 AM every weekday.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/services/business-automation"
                      className="mt-4 w-full py-2.5 px-3 rounded-xl text-center text-xs font-bold bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 flex items-center justify-center gap-1.5 transition"
                    >
                      <span>Explore Automation Blueprints</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="text-slate-600">
                    <strong>Business Impact:</strong> Prevents pipeline leakage, holds sales teams accountable, and gives leadership 100% accurate weekly revenue visibility.
                  </div>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-1.5 font-bold text-[#0EA5C6] hover:underline shrink-0"
                  >
                    <span>View More Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* SECTION 5: WHY WORK WITH HAXOR? (5 Core Value Pillars from Strategy Plan) */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3.5 py-1 rounded-full border border-[#18D2FA]/20">
                The Delivery Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1D1D] tracking-tight mt-3">
                Why Work With Haxor?
              </h2>
              <p className="text-base text-[#3F4040]/80 mt-2">
                Engineering rigor combined with commercial clarity. We eliminate technical roadblocks so your team can deliver more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Pillar 1: Practical Solutions */}
              <div className="p-7 rounded-3xl bg-surface-50 border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#18D2FA]/15 text-[#0EA5C6] flex items-center justify-center font-bold text-sm mb-4">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Practical Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We focus on solving specific business problems rather than adding technology without a clear purpose. Every tool, automation, and field in your system must earn its keep.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Flexible Delivery */}
              <div className="p-7 rounded-3xl bg-surface-50 border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FE4775]/15 text-[#FE4775] flex items-center justify-center font-bold text-sm mb-4">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Flexible Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    Work with us on a defined project, a technical sprint, or ongoing implementation support. We adapt to your project cadence and internal workflows seamlessly.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Clear Communication */}
              <div className="p-7 rounded-3xl bg-surface-50 border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FED147]/30 text-amber-800 flex items-center justify-center font-bold text-sm mb-4">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    Receive agreed deliverables, progress updates, and clear explanations of technical decisions. No confusing developer jargon—just measurable progress reports.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Documented Handover */}
              <div className="p-7 rounded-3xl bg-surface-50 border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#18D2FA]/15 text-[#0EA5C6] flex items-center justify-center font-bold text-sm mb-4">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Documented Handover
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    Where included in the agreed scope, receive setup documentation, workflow explanations, recorded staff walk-throughs, and warranty handover support.
                  </p>
                </div>
              </div>

              {/* Pillar 5: Flexible Partnership */}
              <div className="p-7 rounded-3xl bg-surface-50 border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between lg:col-span-2">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FE4775]/15 text-[#FE4775] flex items-center justify-center font-bold text-sm mb-4">
                    05
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Flexible Partnership
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We can work directly with businesses or behind the scenes with agencies under full white-label NDAs, depending on the agreed arrangement. You preserve your client relationship while we ensure technical excellence.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6: HOW WE WORK (6-Step Structured Delivery Framework) */}
        <section className="py-20 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3.5 py-1 rounded-full border border-[#18D2FA]/20">
                Predictable Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1D1D] tracking-tight mt-3">
                How We Work
              </h2>
              <p className="text-base text-[#3F4040]/80 mt-2">
                Our 6-step delivery methodology ensures complete transparency, defined milestones, and zero scope ambiguity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Step 1 */}
              <div className="p-7 rounded-3xl bg-white border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Discover
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We understand the business problem, existing software tools, user touchpoints, data dependencies, and desired commercial outcome.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-7 rounded-3xl bg-white border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Scope
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We agree on exact deliverables, timeline, milestones, responsibilities, budget, and acceptance criteria before writing a line of code or configuration.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-7 rounded-3xl bg-white border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#18D2FA] text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Implement
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We configure, develop, or integrate the required systems in staging environments with regular sprint updates and progress demos.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-7 rounded-3xl bg-white border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Test
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We verify end-to-end workflows, check expected trigger outcomes, run edge-case payloads, and address any agreed discrepancies.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-7 rounded-3xl bg-white border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FE4775] text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                    05
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Document
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We document the architecture, schema maps, and workflow configurations, and provide agreed technical handover training.
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="p-7 rounded-3xl bg-white border border-[#3F4040]/10 shadow-xs hover:shadow-card transition flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-sm mb-4">
                    06
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1D1D] mb-2">
                    Support
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                    We provide post-deployment support, bug fixes, and continuous optimization according to the agreed service and maintenance terms.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 7: TURNKEY DIGITAL KITS (Preserved for fast operational deployment) */}
        <BusinessKitsShowcase 
          limit={3} 
          showSearch={false}
          compact={true}
          title="Turnkey Digital Business Kits"
          subtitle="Pre-configured operational stacks complete with custom web app, direct booking/POS, and payment integrations."
        />

        {/* SECTION 8: INTERACTIVE QUOTE & SPRINT CALCULATOR */}
        <QuoteCalculator />

        {/* SECTION 9: TRUST & VERIFIED CREDENTIALS */}
        <TrustSection />

        {/* SECTION 10: WHY CHOOSE US PILLARS */}
        <WhyChooseUs />

        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS */}
        <FaqSection />

        {/* SECTION 12: FINAL CALL TO ACTION (Strategic Closing from Redesign Plan) */}
        <section className="py-20 bg-gradient-to-b from-white to-surface-50 border-t border-[#3F4040]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18D2FA]/10 border border-[#18D2FA]/30 text-xs font-bold uppercase tracking-wider text-[#0EA5C6]">
              <Sparkles className="w-3.5 h-3.5 text-[#18D2FA]" />
              <span>Let's Discuss Your Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1D1D] tracking-tight max-w-3xl mx-auto">
              Have a CRM or Automation Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-[#3F4040]/90 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need to implement, automate, or integrate. We will review your requirements and discuss a practical next step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FE4775] hover:bg-[#e43864] shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <a
                href={discussProjectWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#3F4040] bg-white hover:bg-slate-50 border border-[#3F4040]/20 hover:border-[#18D2FA] shadow-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-[#18D2FA] shrink-0" />
                <span>Quick WhatsApp Chat</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-[#3F4040]/70 flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#0EA5C6]" />
              <span>Direct inquiries: <a href={`mailto:${CONTACT_INFO.emailOfficial}`} className="font-bold text-[#0EA5C6] hover:underline">{CONTACT_INFO.emailOfficial}</a></span>
            </div>

          </div>
        </section>

      </main>

      {/* Full Footer */}
      <Footer />

      {/* Floating WhatsApp Support Button (Desktop/Tablet) */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Conversion Bar (Smartphones) */}
      <MobileBottomBar />
    </div>
  );
}
