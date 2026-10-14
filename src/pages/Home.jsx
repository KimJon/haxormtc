import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import QuoteCalculator from '../components/QuoteCalculator';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Briefcase, 
  Workflow, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Zap, 
  BarChart3, 
  Database, 
  FileText, 
  FileCode2, 
  TrendingUp, 
  Download, 
  ExternalLink 
} from 'lucide-react';
import { createWhatsAppUrl, CONTACT_INFO } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

export default function Home() {
  const { formatPrice } = useCurrency();
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('agencies');

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run an agency / consultancy and would like to discuss a white-label CRM & automation delivery partnership."
  );

  const discussProjectWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I have a CRM / workflow automation project in mind and would like to review requirements and scoping."
  );

  const faqs = [
    {
      q: "What is a white-label technical delivery partner?",
      a: "A white-label technical delivery partner works behind the scenes for digital agencies, marketing consultancies, and web development studios. We deliver CRM configuration, custom workflow automations, and API integrations under your agency's branding, allowing you to offer advanced technical capabilities without hiring full-time senior engineers."
    },
    {
      q: "How do agency partnerships work behind the scenes?",
      a: "We operate under strict bilateral Non-Disclosure (NDA) and non-compete agreements. We can either operate completely invisibly (submitting deliverables directly to your project managers) or act as your agency's dedicated technical implementation specialists on client calls using your company email domain."
    },
    {
      q: "Which CRM platforms and automation tools do you specialize in?",
      a: "Our core platforms include Zoho CRM & Zoho One, Odoo Community & Enterprise, and HubSpot. For automation and integrations, we build custom REST API connectors, webhook listeners, Make/Integromat scenarios, and serverless scripts to synchronize your web forms, billing, and databases."
    },
    {
      q: "How do you protect client confidentiality and data security?",
      a: "Every project begins with a binding Non-Disclosure Agreement and clear intellectual property transfer terms. Your agency and your clients retain 100% ownership of all configurations, source code, data schemas, and documentation upon project milestone handover."
    },
    {
      q: "What are your wholesale pricing models and delivery timelines?",
      a: "We offer two flexible agency models: Fixed-Scope Sprints (delivered within 1 to 3 weeks with defined deliverables) and Monthly Retainer Blocks (reserved monthly engineering hours at wholesale partner rates). Rates are structured so agencies preserve 40% to 60% gross margins."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#3F4040] font-sans antialiased flex flex-col selection:bg-[#18D2FA]/30 selection:text-[#3F4040]">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* =========================================================================
            SECTION 1: HERO BANNER (Clarity Performance Banner Layout & Gradients)
            ========================================================================= */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-[#1C1D1D] via-[#2A2B2B] to-[#1C1D1D] text-white">
          {/* Subtle Ambient Radial Gradients with Exact Brand Colors */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#18D2FA]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#FE4775]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FED147]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#18D2FA]/30 text-xs font-semibold uppercase tracking-wider text-[#18D2FA] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#18D2FA] animate-pulse" />
              <span>⚡ White-Label Technical Delivery Partner for Agencies</span>
            </div>

            {/* Hero Title in Work Sans */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-5xl mx-auto font-work-sans">
              Build Better Business Systems. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D2FA] via-[#FE4775] to-[#FED147]">
                Deliver More for Your Clients.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
              We’re the white-label technical delivery partner specialising in CRM implementation, workflow automation, and software integrations — delivering scalable results for digital agencies, consultancies, and growing businesses across the UK, Europe, Australia &amp; worldwide.
            </p>

            {/* Dual Clarity Button Layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/agency-partners"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#18D2FA] hover:bg-[#0EA5C6] transition-all shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Partner With Haxor</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-transparent hover:bg-white/10 border-2 border-[#FE4775] text-[#FE4775] hover:text-white transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Get in Touch</span>
                <span className="text-[#FE4775]">→</span>
              </Link>
            </div>

            {/* Supporting Trust Bar */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="text-[#18D2FA]">✓</span> Practical implementation
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#18D2FA]">✓</span> Clear communication
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#18D2FA]">✓</span> Documented delivery
              </span>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LOGO PANEL (Clarity logo-panel--grey-lt)
            ========================================================================= */}
        <section className="py-8 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-5">
              Enterprise Ecosystems &amp; Certified Implementations
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#18D2FA]" />
                <span>Zoho Certified Consulting</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FE4775]" />
                <span>Odoo ERP Implementation</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FED147]" />
                <span>HubSpot Solutions Architecture</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#18D2FA]" />
                <span>REST API &amp; Webhook Sync</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700 text-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                <span>M-Pesa &amp; Stripe Gateways</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SPLIT PANEL 1 (Clarity panel-split--left Focused on Results)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: System Diagram & Metric Visual */}
              <div className="lg:col-span-5 relative">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-[#1C1D1D] to-[#2A2B2B] text-white shadow-xl relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#18D2FA]/20 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <span className="text-xs font-bold font-mono text-[#18D2FA] uppercase tracking-wider">
                      Live Operations Engine
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded">
                      ● Active Sync
                    </span>
                  </div>

                  <div className="space-y-4 text-xs">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">⚡</span>
                        <div>
                          <div className="font-bold text-white">Lead Capture &amp; Validation</div>
                          <div className="text-[10px] text-slate-400">Zero data entry • 180ms execution</div>
                        </div>
                      </div>
                      <span className="text-[#18D2FA] font-mono font-bold">100%</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">📊</span>
                        <div>
                          <div className="font-bold text-white">Pipeline Cadence Automation</div>
                          <div className="text-[10px] text-slate-400">Overdue tasks &amp; stale deal alerts</div>
                        </div>
                      </div>
                      <span className="text-[#FE4775] font-mono font-bold">48h SLA</span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">💎</span>
                        <div>
                          <div className="font-bold text-white">Agency Margin Preservation</div>
                          <div className="text-[10px] text-slate-400">Fixed wholesale sprint rates</div>
                        </div>
                      </div>
                      <span className="text-[#FED147] font-mono font-bold">40–60%</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>100% White-Label &amp; NDA Backed</span>
                    <span className="font-mono text-slate-300">v2.4 Production</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Copy & Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-black uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3.5 py-1 rounded-full border border-[#18D2FA]/20">
                  Performance Over Fluff
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1D1D] tracking-tight font-work-sans">
                  Focused on Automation, Pipeline &amp; Real Revenue
                </h2>

                <p className="text-base sm:text-lg text-[#3F4040]/90 leading-relaxed">
                  With hands-on software engineering experience, a passion for technology, and a steadfast focus on quality over quantity: our deep understanding of complex B2B buyer journeys and sales operations sets us apart.
                </p>

                <p className="text-base text-[#3F4040]/80 leading-relaxed">
                  Most agencies and providers are interested in traffic, vanity clicks, or selling generic retail IT support. We’re more interested in capturing qualified <em>leads</em>, accelerating <em>sales pipeline velocity</em>, and eliminating hundreds of hours of manual administrative overhead: <strong>real results</strong>.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1C1D1D] hover:text-[#0EA5C6] transition border-b-2 border-[#1C1D1D] pb-1"
                  >
                    <span>Our Services</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: DARK PANEL: OUR APPROACH (Clarity panel--black content-box-grid)
            ========================================================================= */}
        <section className="py-24 bg-[#1C1D1D] text-white relative overflow-hidden">
          {/* Subtle Radial Glows */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#18D2FA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FE4775]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-work-sans">
                Our approach to B2B Systems &amp; Automation
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We combine best practice systems architecture, agile sprint execution, and deep experience of the B2B tech buyer journey to eliminate operational friction.
              </p>
            </div>

            {/* 3-Column Centered Cards with Symbols */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Deep Immersion */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#18D2FA]/40 transition text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#18D2FA]/15 text-[#18D2FA] text-2xl flex items-center justify-center mb-6">
                  ⤢
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Deep Immersion
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Passionate about technology, we completely immerse ourselves in what your business or agency client does, and are comfortable working with complex technical logic and multi-tier workflows.
                </p>
              </div>

              {/* Card 2: Quality Architecture */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FE4775]/40 transition text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FE4775]/15 text-[#FE4775] text-2xl flex items-center justify-center mb-6">
                  💎
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quality Delivery
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Quality results require quality systems. We design clean data schemas, robust error-handled webhooks, and documented field mappings that don't fail when transaction volume scales.
                </p>
              </div>

              {/* Card 3: AI & Technology */}
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FED147]/40 transition text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-[#FED147]/15 text-[#FED147] text-2xl flex items-center justify-center mb-6">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI &amp; Automation
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Our work is always guided by modern automation frameworks, real-time webhooks, and AI-assisted workflows. Repetitive manual data entry is systematically replaced by smart triggers.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: OPTIMISED FOR THE B2B BUYER JOURNEY (Clarity Workflow Section)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1D1D] tracking-tight pl-4 border-l-4 border-[#18D2FA] font-work-sans">
                Optimised for the B2B System Journey
              </h2>
              <p className="text-base sm:text-lg text-[#3F4040]/90 leading-relaxed mt-4">
                We have a deep understanding and first-hand experience of the B2B buyer journey for our technology clients. Often revolving around high value deals and long buying cycles, we build digital strategies and CRM architectures that align with the reality of the buying process.
              </p>
            </div>

            {/* Visual Workflow Journey Map */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-50 border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-mono font-bold text-[#0EA5C6] mb-1">STAGE 01</div>
                  <h4 className="font-bold text-slate-900 mb-1">Inbound Capture</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lead submits web form, quote tool, or booking request. Input sanitized &amp; parsed.
                  </p>
                  <div className="mt-3 text-[10px] font-mono bg-cyan-50 text-[#0EA5C6] p-1.5 rounded">
                    Webhook &lt; 200ms
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-mono font-bold text-[#FE4775] mb-1">STAGE 02</div>
                  <h4 className="font-bold text-slate-900 mb-1">CRM Deal Routing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Account matched, deal created with custom stage probability and rep assignment.
                  </p>
                  <div className="mt-3 text-[10px] font-mono bg-pink-50 text-[#FE4775] p-1.5 rounded">
                    Zoho / Odoo Deal #Mapped
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-mono font-bold text-amber-600 mb-1">STAGE 03</div>
                  <h4 className="font-bold text-slate-900 mb-1">Follow-Up Cadence</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated email / WhatsApp confirmation sent + 48-hour aging alarm set for sales.
                  </p>
                  <div className="mt-3 text-[10px] font-mono bg-amber-50 text-amber-700 p-1.5 rounded">
                    Task: Immediate Call
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="text-xs font-mono font-bold text-emerald-600 mb-1">STAGE 04</div>
                  <h4 className="font-bold text-slate-900 mb-1">Closed-Won &amp; Invoicing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deal marks won; triggers automated contract, invoice dispatch, and onboarding board.
                  </p>
                  <div className="mt-3 text-[10px] font-mono bg-emerald-50 text-emerald-700 p-1.5 rounded">
                    Revenue Logged
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                <div>
                  <strong>Outcome:</strong> Eliminates lost enquiries, holds sales teams accountable, and gives leadership 100% real-time pipeline visibility.
                </div>
                <Link to="/services/crm-implementation" className="font-bold text-[#0EA5C6] hover:underline flex items-center gap-1">
                  <span>Explore CRM Implementation</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: ABOUT US / THE AGENCY GAP (Clarity Two-Column Split)
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl font-black text-[#1C1D1D] tracking-tight pl-4 border-l-4 border-[#FE4775] font-work-sans">
                  About Haxor MTC
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#3F4040]/90 leading-relaxed">
                <p>
                  Modern business systems are complicated. Journeys can be lengthy, considered, and complex. CRM implementation, business automation, and data synchronization need to be approached with deep engineering rigor rather than superficial templates.
                </p>
                <p>
                  We established Haxor MTC because digital agencies and growing businesses were tired of generic IT repair shops that didn’t understand the B2B sales cycle, were focused on the wrong metrics, and struggled to produce reliable technical work, often because they couldn’t get their head around complex webhook integrations and multi-tier workflows.
                </p>
                <div className="pt-2">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1C1D1D] hover:text-[#FE4775] transition border-b-2 border-[#1C1D1D] pb-1"
                  >
                    <span>About Us</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: SERVICES GRID (Clarity panel--light-grey content-box-grid)
            ========================================================================= */}
        <section id="services" className="py-24 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1D1D] tracking-tight font-work-sans">
                Our Technical Delivery Services
              </h2>
              <p className="text-base sm:text-lg text-[#3F4040]/80 leading-relaxed">
                Our core specialism is in creating connected operational systems using CRM, workflow automation, and custom software integrations to scale client capacity predictably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Box 1: CRM Implementation */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-card transition flex flex-col justify-between text-center group">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#18D2FA]/15 text-[#18D2FA] text-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    📊
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    CRM Implementation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Custom built CRM architectures (Zoho, Odoo, HubSpot) shaped by your sales process, data migration, and executive dashboards.
                  </p>
                </div>
                <Link
                  to="/services/crm-implementation"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-[#1C1D1D] hover:bg-[#18D2FA] text-white flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Box 2: Business Automation */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-card transition flex flex-col justify-between text-center group">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#FE4775]/15 text-[#FE4775] text-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Business Automation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Reduce repetitive work by connecting the steps, tools, and people involved in your business processes with automated triggers.
                  </p>
                </div>
                <Link
                  to="/services/business-automation"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-[#1C1D1D] hover:bg-[#FE4775] text-white flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Box 3: Software Integrations */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-card transition flex flex-col justify-between text-center group">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#FED147]/25 text-amber-700 text-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    🔗
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Software Integrations
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    Connect business applications reliably via custom REST APIs, event-driven webhooks, and bidirectional database synchronization.
                  </p>
                </div>
                <Link
                  to="/services/integrations"
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-center bg-[#1C1D1D] hover:bg-amber-600 text-white flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 8: BRIEFING TEMPLATE DOWNLOAD (Clarity download-panel panel--black)
            ========================================================================= */}
        <section className="py-20 bg-[#1C1D1D] text-white border-y border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#18D2FA]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Graphic Preview */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-[#FED147] border-b border-white/10 pb-3">
                    <span>📄 Agency Briefing Template.pdf</span>
                    <span>v3.1</span>
                  </div>
                  <div className="text-xs text-slate-300 space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#18D2FA]">✓</span>
                      <span>Client Sales Funnel &amp; Pipeline Stages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#18D2FA]">✓</span>
                      <span>Data Migration &amp; Field Mapping Schema</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#18D2FA]">✓</span>
                      <span>Automation Triggers, Rules &amp; SLA Alarms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#18D2FA]">✓</span>
                      <span>Wholesale Margin &amp; Retainer Costing Model</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content & CTA */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#FED147]">
                  <span>Free Resource for Digital Agencies</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-work-sans">
                  Briefing Template &amp; Scoping Playbook
                </h2>

                <p className="text-base text-slate-300 leading-relaxed">
                  If you’re unsure about the type of technical information you’ll need to provide an implementation partner like ourselves to deliver successful CRM &amp; automation projects, we’ve produced a comprehensive briefing template in Google Docs you can use as a starting point.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#FE4775] hover:bg-[#e43864] transition shadow-md"
                  >
                    <span>Get a Copy &amp; Discuss Project</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: THREE-COLUMN SPLIT STATEMENT (Clarity three-column-split--black)
            ========================================================================= */}
        <section className="py-20 bg-gradient-to-r from-[#1C1D1D] via-[#242525] to-[#1C1D1D] text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 space-y-1">
                <div className="text-xs uppercase tracking-widest text-[#18D2FA] font-bold">
                  All in on
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white font-work-sans">
                  B2B Systems
                </h3>
              </div>

              <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Our services, including CRM implementation, workflow automation, and custom API integrations, are widely used capabilities that we weave together for our clients to build a comprehensive operations engine that supports sustainable and predictable growth.
                </p>
                <p>
                  We use our combined software engineering and agency delivery experience of working in and for B2B technology companies with often long, considered &amp; complex sales cycles to deliver results for marketers and business operators like you.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: INTERACTIVE QUOTE & SPRINT CALCULATOR
            ========================================================================= */}
        <QuoteCalculator />

        {/* =========================================================================
            SECTION 11: FAQ ACCORDION (Clarity panel--grey-lt accordion)
            ========================================================================= */}
        <section className="py-24 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1D1D] tracking-tight font-work-sans">
                FAQ
              </h2>
              <p className="text-base text-[#3F4040]/80">
                Some frequent B2B technical delivery and agency partnership questions and answers:
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs transition"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      className="w-full p-6 text-left font-bold text-base sm:text-lg text-[#1C1D1D] flex items-center justify-between gap-4 hover:text-[#0EA5C6] transition"
                    >
                      <span>{faq.q}</span>
                      <span className={`text-xl transition-transform ${isOpen ? 'rotate-180 text-[#0EA5C6]' : 'text-slate-400'}`}>
                        ⌄
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 12: FINAL CALL TO ACTION (Clarity Closing Block)
            ========================================================================= */}
        <section className="py-24 bg-gradient-to-b from-white via-surface-50 to-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18D2FA]/10 border border-[#18D2FA]/30 text-xs font-bold uppercase tracking-wider text-[#0EA5C6]">
              <span>Let's Discuss Your Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1D1D] tracking-tight font-work-sans">
              Have a CRM or Automation Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-[#3F4040]/80 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need to implement, automate, or integrate. We will review your requirements and discuss a practical next step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FE4775] hover:bg-[#e43864] shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Discuss Your Project</span>
                <span>→</span>
              </Link>

              <a
                href={discussProjectWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#3F4040] bg-white hover:bg-slate-50 border border-[#3F4040]/20 hover:border-[#18D2FA] shadow-xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-[#18D2FA]" />
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

      {/* Floating WhatsApp Support Button */}
      <FloatingWhatsApp />

      {/* Mobile Bottom Conversion Bar */}
      <MobileBottomBar />
    </div>
  );
}
