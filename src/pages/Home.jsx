import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  Check, 
  ChevronDown, 
  Workflow, 
  Cpu, 
  Layers, 
  Clock, 
  Zap, 
  BarChart3, 
  Database, 
  FileText, 
  ShieldCheck,
  Code2
} from 'lucide-react';
import { createWhatsAppUrl, CONTACT_INFO } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import SocialProofSection from '../components/SocialProofSection';

export default function Home() {
  const { formatPrice } = useCurrency();
  const [activeFaq, setActiveFaq] = useState(0);

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run an agency / consultancy and would like to discuss a white-label CRM & automation technical delivery partnership."
  );

  const discussProjectWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I have a CRM / workflow automation project in mind and would like to review requirements and scoping."
  );

  const faqs = [
    {
      q: "What is a white-label technical delivery partner?",
      a: "A white-label technical delivery partner works behind the scenes for digital marketing agencies, web design firms, and management consultancies. We handle the technical implementation of CRM systems, workflow automation, and custom API integrations under your agency's brand, allowing you to expand your service offering without hiring full-time senior engineers."
    },
    {
      q: "How do agency partnerships work in practice?",
      a: "We operate under strict bilateral Non-Disclosure (NDA) and non-compete agreements. We can work completely invisibly (reporting only to your project managers) or act as your agency's technical implementation specialists on client calls using your company email domain."
    },
    {
      q: "Which CRM platforms and automation tools do you specialize in?",
      a: "Our core platforms include Zoho CRM & Zoho One, Odoo Community & Enterprise, and HubSpot. For automation and integrations, we build custom REST API connectors, webhook listeners, and automated workflows to synchronize web forms, sales pipelines, accounting, and billing systems."
    },
    {
      q: "How do you protect client confidentiality and data security?",
      a: "Every engagement begins with a mutual Non-Disclosure Agreement and clear intellectual property transfer terms. Your agency and your clients retain 100% ownership of all configurations, source code, data schemas, and documentation upon project handover."
    },
    {
      q: "What are your engagement models and delivery timelines?",
      a: "We offer two flexible agency models: Fixed-Scope Technical Sprints (typically delivered in 1 to 3 weeks with defined milestone acceptance criteria) and Dedicated Monthly Retainers (reserved monthly engineering blocks at wholesale partner rates). Rates are structured so agencies preserve healthy 40% to 60% gross margins."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-work-sans antialiased flex flex-col selection:bg-slate-200 selection:text-black">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* =========================================================================
            SECTION 1: HERO BANNER (Clarity Performance Clean Mono Style)
            ========================================================================= */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Minimalist Monochrome Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <span>White-Label Technical Delivery Partner</span>
            </div>

            {/* Solid Bold Headline in Work Sans - No Rainbow Gradients */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111111] tracking-tight leading-[1.08] max-w-4xl mx-auto">
              Build Better Business Systems. <br className="hidden sm:inline" />
              Deliver More for Your Clients.
            </h1>

            {/* Focused Sub-headline */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
              We’re the white-label technical delivery partner specialising in CRM implementation, workflow automation, and software integrations — delivering scalable results for digital agencies, consultancies, and growing businesses across the UK, Europe, Australia, and worldwide.
            </p>

            {/* Dual Clarity Button Layout: Solid Black + Clean Ghost Button with Arrow */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/agency-partners"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Partner With Haxor</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition-all flex items-center justify-center gap-2"
              >
                <span>Our Services</span>
                <span>→</span>
              </Link>
            </div>

            {/* Clean Monochrome Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Practical implementation
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Clear communication
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Documented delivery
              </span>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 2: LOGO PANEL (Clarity logo-panel--grey-lt)
            ========================================================================= */}
        <section className="py-8 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              Enterprise Platforms &amp; Architecture Standards
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-700 font-semibold text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>Zoho Certified Consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>Odoo ERP Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>HubSpot Solutions Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>REST API &amp; Webhook Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
                <span>Stripe &amp; Global Gateways</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SPLIT PANEL 1 (Clarity panel-split--left Focused on Results)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Crisp Monochromatic System Graphic */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-[#111111] text-white shadow-lg border border-neutral-800 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                      Technical Delivery Operations
                    </span>
                    <span className="text-[10px] bg-white/10 text-white font-mono px-2 py-0.5 rounded">
                      Production
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Lead Capture &amp; Validation</div>
                        <div className="text-[10px] text-slate-400">Zero data entry • 180ms webhook</div>
                      </div>
                      <span className="font-mono text-white font-bold">100%</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Pipeline Cadence Automation</div>
                        <div className="text-[10px] text-slate-400">Overdue tasks &amp; stale deal alerts</div>
                      </div>
                      <span className="font-mono text-white font-bold">48h SLA</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">Agency Margin Preservation</div>
                        <div className="text-[10px] text-slate-400">Wholesale fixed sprint rates</div>
                      </div>
                      <span className="font-mono text-white font-bold">40–60%</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>100% White-Label &amp; NDA Backed</span>
                    <span className="font-mono text-slate-300">v3.2 Sync</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Copy & Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
                  Focused on Automation, Pipeline &amp; Revenue
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  With deep in-house systems architecture experience, a passion for technology, and a steadfast focus on quality over quantity: our understanding of the B2B buyer journey and sales operations sets us apart.
                </p>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Most providers are interested in vanity metrics or generic IT support. We’re more interested in capturing qualified <em>leads</em>, accelerating <em>sales pipeline velocity</em>, and saving hundreds of hours of manual administrative overhead: <strong>real results</strong>.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:underline pb-1"
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
        <section className="py-24 bg-[#111111] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Our approach to B2B Systems &amp; Automation
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We combine best practice systems architecture with our experience of B2B sales cycles and agency delivery workflows.
              </p>
            </div>

            {/* 3-Column Centered Cards with Monochromatic Styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Deep Immersion */}
              <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 text-white flex items-center justify-center mb-6 text-xl">
                  ⤢
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Deep Immersion
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Passionate about technology, we completely immerse ourselves in what your business or agency client does, and are comfortable working with complex technical logic and multi-tier workflows.
                </p>
              </div>

              {/* Card 2: Quality Architecture */}
              <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 text-white flex items-center justify-center mb-6 text-xl">
                  💎
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quality Architecture
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Quality results require quality systems. We design clean data schemas, robust error-handled webhooks, and documented field mappings that don't fail when transaction volume scales.
                </p>
              </div>

              {/* Card 3: AI & Technology */}
              <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 text-white flex items-center justify-center mb-6 text-xl">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  AI &amp; Automation
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our work is always guided by modern automation frameworks, real-time webhooks, and AI-assisted workflows. Repetitive manual data entry is systematically replaced by smart triggers.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: OPTIMISED FOR THE B2B SYSTEM JOURNEY (Clarity Workflow Section)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight pl-4 border-l-4 border-black">
                Optimised for the B2B System Journey
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-4">
                We have a deep understanding and first-hand experience of the B2B buyer journey for our technology clients. Often revolving around high value deals and long buying cycles, we build digital strategies and CRM architectures that align with the reality of the buying process.
              </p>
            </div>

            {/* Minimalist 4-Stage Workflow Architecture Map */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F5F7] border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">STAGE 01</div>
                  <h4 className="font-bold text-slate-900 mb-1">Inbound Capture</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lead submits web form, quote tool, or booking request. Input sanitized &amp; parsed.
                  </p>
                  <div className="mt-4 text-[10px] font-mono bg-slate-100 text-slate-700 p-2 rounded">
                    Webhook &lt; 200ms
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">STAGE 02</div>
                  <h4 className="font-bold text-slate-900 mb-1">CRM Deal Routing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Account matched, deal created with custom stage probability and rep assignment.
                  </p>
                  <div className="mt-4 text-[10px] font-mono bg-slate-100 text-slate-700 p-2 rounded">
                    Zoho / Odoo Deal #Mapped
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">STAGE 03</div>
                  <h4 className="font-bold text-slate-900 mb-1">Follow-Up Cadence</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated email / WhatsApp confirmation sent + 48-hour aging alarm set for sales.
                  </p>
                  <div className="mt-4 text-[10px] font-mono bg-slate-100 text-slate-700 p-2 rounded">
                    Task: Immediate Call
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200">
                  <div className="text-xs font-mono font-bold text-slate-400 mb-1">STAGE 04</div>
                  <h4 className="font-bold text-slate-900 mb-1">Closed-Won &amp; Invoicing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Deal marks won; triggers automated contract, invoice dispatch, and onboarding board.
                  </p>
                  <div className="mt-4 text-[10px] font-mono bg-slate-100 text-slate-700 p-2 rounded">
                    Revenue Logged
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
                <div>
                  <strong>Outcome:</strong> Eliminates lost enquiries, holds sales teams accountable, and gives leadership 100% real-time pipeline visibility.
                </div>
                <Link to="/services/crm-implementation" className="font-bold text-black hover:underline flex items-center gap-1">
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
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              <div className="lg:col-span-4">
                <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight pl-4 border-l-4 border-black">
                  About Haxor MTC
                </h2>
              </div>

              <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Modern business systems are complicated. Journeys can be lengthy, considered, and complex. CRM implementation, business automation, and data synchronization need to be approached with architectural rigor.
                </p>
                <p>
                  We established Haxor MTC because digital agencies and growing businesses were tired of generic IT repair shops that didn’t understand the B2B sales cycle, were focused on the wrong metrics, and struggled to produce reliable technical work, often because they couldn’t get their head around complex webhook integrations and multi-tier workflows.
                </p>
                <div className="pt-2">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:underline pb-1"
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
        <section id="services" className="py-24 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
                Our Technical Delivery Services
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our core specialism is in creating connected operational systems using CRM, workflow automation, and custom software integrations to scale client capacity predictably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Box 1: CRM Implementation */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition flex flex-col justify-between text-center group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 text-xl flex items-center justify-center mx-auto mb-6">
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
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center bg-[#111111] hover:bg-black text-white flex items-center justify-center gap-2 transition"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Box 2: Business Automation */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition flex flex-col justify-between text-center group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 text-xl flex items-center justify-center mx-auto mb-6">
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
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center bg-[#111111] hover:bg-black text-white flex items-center justify-center gap-2 transition"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Box 3: Software Integrations */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition flex flex-col justify-between text-center group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-900 text-xl flex items-center justify-center mx-auto mb-6">
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
                  className="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-center bg-[#111111] hover:bg-black text-white flex items-center justify-center gap-2 transition"
                >
                  <span>Learn More</span>
                  <span>→</span>
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SOCIAL PROOF & VERIFIED AGENCY TESTIMONIALS (Clarity Social Proof Engine)
            ========================================================================= */}
        <SocialProofSection />

        {/* =========================================================================
            SECTION 8: BRIEFING TEMPLATE DOWNLOAD (Clarity download-panel panel--black)
            ========================================================================= */}
        <section className="py-20 bg-[#111111] text-white border-y border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Graphic Preview */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 border-b border-neutral-800 pb-3">
                    <span>📄 Agency Briefing Template.pdf</span>
                    <span>v3.4</span>
                  </div>
                  <div className="text-xs text-slate-400 space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Client Sales Funnel &amp; Pipeline Stages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Data Migration &amp; Field Mapping Schema</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Automation Triggers, Rules &amp; SLA Alarms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      <span>Wholesale Margin &amp; Retainer Costing Model</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content & CTA */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <span>Resource for Digital Agencies</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Briefing Template &amp; Scoping Playbook
                </h2>

                <p className="text-base text-slate-300 leading-relaxed">
                  If you’re unsure about the type of technical information you’ll need to provide an implementation partner like ourselves to deliver successful CRM &amp; automation projects, we’ve produced a comprehensive briefing template you can use as a starting point.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-slate-200 transition"
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
        <section className="py-20 bg-neutral-900 text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 space-y-1">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                  All in on
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
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
            SECTION 10: FAQ ACCORDION (Clarity panel--grey-lt accordion)
            ========================================================================= */}
        <section className="py-24 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14 space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
                FAQ
              </h2>
              <p className="text-base text-slate-600">
                Some frequent B2B technical delivery and agency partnership questions and answers:
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      className="w-full p-6 text-left font-bold text-base sm:text-lg text-[#111111] flex items-center justify-between gap-4 hover:text-black transition cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className={`text-xl transition-transform ${isOpen ? 'rotate-180' : 'text-slate-400'}`}>
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
            SECTION 11: FINAL CALL TO ACTION (Clarity Closing Block)
            ========================================================================= */}
        <section className="py-24 bg-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-800">
              <span>Let's Discuss Your Roadmap</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              Have a CRM or Automation Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need to implement, automate, or integrate. We will review your requirements and discuss a practical next step.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition-all flex items-center justify-center gap-2"
              >
                <span>Discuss Your Project</span>
                <span>→</span>
              </Link>

              <a
                href={discussProjectWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Technical Desk</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-slate-500 flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Direct inquiries: <a href={`mailto:${CONTACT_INFO.emailOfficial}`} className="font-bold text-black hover:underline">{CONTACT_INFO.emailOfficial}</a></span>
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
