import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import FaqSection from '../components/FaqSection';
import { createWhatsAppUrl } from '../data/servicesData';
import { 
  ZohoLogo, 
  OdooLogo, 
  GoogleAdsLogo, 
  MetaPixelLogo, 
  StripeLogo,
  BrandBadge
} from '../components/OfficialLogos';
import { 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Zap, 
  Code2, 
  Check, 
  ArrowRight, 
  MessageSquare,
  Award,
  Users,
  Target,
  Layers,
  Database,
  Cpu,
  Lock,
  GitBranch,
  Terminal
} from 'lucide-react';

export default function AboutPage() {
  const whatsAppAboutUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am on your About page and would like to learn more about your technical team and delivery capabilities."
  );

  const stats = [
    { value: "50+", label: "Enterprise Integrations", detail: "CRM, ERP & automation pipelines deployed" },
    { value: "99.8%", label: "Uptime & SLA Compliance", detail: "Monitored production infrastructure" },
    { value: "24–48h", label: "Initial Sprint Turnaround", detail: "Fast scoping and technical mobilization" },
    { value: "100%", label: "IP & Code Ownership", detail: "Zero proprietary vendor lock-in" },
  ];

  const pillars = [
    {
      icon: <Terminal className="w-6 h-6 text-black" />,
      title: "Architectural Rigor First",
      desc: "We don't stitch fragile templates together. Every schema, API rate limit, error handler, and failover queue is mapped out before implementation begins.",
    },
    {
      icon: <Lock className="w-6 h-6 text-black" />,
      title: "White-Label NDA Protected",
      desc: "We operate seamlessly behind the scenes for digital agencies across the UK, Europe, and Australia. Your clients see flawless delivery directly from your brand.",
    },
    {
      icon: <Layers className="w-6 h-6 text-black" />,
      title: "CRM & Deep Systems Specialists",
      desc: "Certified implementation depth in Zoho, Odoo, HubSpot, and custom REST API microservices configured around your actual operational workflows.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      title: "Documented Technical Handover",
      desc: "Every project includes complete architecture documentation, data dictionary, Postman API collections, and video SOPs so you maintain full autonomy.",
    },
  ];

  const operationalModel = [
    {
      icon: <Clock className="w-5 h-5 text-black" />,
      title: "Timezone-Aligned Delivery",
      desc: "Our engineering schedules overlap with GMT, CET, and AEST business hours. Daily standups, asynchronous Slack updates, and live weekly demos keep you informed.",
    },
    {
      icon: <Users className="w-5 h-5 text-black" />,
      title: "Direct Engineer Access",
      desc: "You collaborate directly with senior systems architects and technical leads. No account manager telephone games or lost technical context.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-black" />,
      title: "Milestone-Driven Accountability",
      desc: "Projects are governed by strict milestone approvals (30% start → 40% design/staging approval → 30% live launch). Zero financial risk on unverified work.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* =========================================================================
            HERO: ABOUT HAXOR MTC
            ========================================================================= */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Our Story &amp; Philosophy • Systems Engineering</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              About Haxor MTC
            </h1>

            <p className="clarity-text max-w-3xl mx-auto text-slate-600">
              We are a specialized B2B software engineering and systems integration firm. We design, automate, and synchronize back-office architectures so growing enterprises and digital agencies can scale predictably without technical friction.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsAppAboutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#111111] hover:bg-black transition flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>Message on WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition flex items-center gap-2"
              >
                <span>Explore Technical Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Global Operational Coverage & Standards Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                🌐 Timezones: London (GMT) • Berlin (CET) • Sydney (AEST)
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                🛡️ 100% White-Label Protected
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                🔒 Strict Bilateral NDAs
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                📄 Zero Vendor Lock-In
              </span>
            </div>

            {/* Core Competencies Micro-Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Enterprise CRM Architectures
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                ERP Implementations (Odoo)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Event-Driven Webhook Pipelines
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Agency White-Label Retainers
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Custom Microservices &amp; APIs
              </span>
            </div>

            {/* Dedicated Showcase Image - Zero Duplication */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/about-engineering-team.jpg" 
                  alt="Haxor MTC senior engineering and systems architecture team" 
                  className="w-full h-auto max-h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Systems Engineering Hub
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Engineering Rigor
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Architectural Rigor Behind Every System We Deliver
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    From enterprise CRM/ERP workflows to bidirectional webhook synchronization, our senior engineers build systems engineered for longevity and scale.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            ORIGINS & MISSION: THE AGENCY GAP
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
                  <Target className="w-3.5 h-3.5 text-black" />
                  <span>The Origin Story</span>
                </div>
                
                <h2 className="clarity-h2 text-black">
                  Why We Founded Haxor MTC
                </h2>

                <p className="clarity-text text-slate-600">
                  Modern business systems are rarely single-platform solutions. Scaling companies require interconnected customer journeys, automated operations, and synchronized databases.
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mt-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                    The Problem We Solve:
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Digital agencies are world-class at design, creative, and branding, but often lack the deep back-office systems engineering required for complex ERP migrations and API webhooks. 
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">
                    Conversely, traditional IT repair vendors operate on rigid legacy paradigms and fail to understand modern conversion funnels. Haxor MTC was founded to bridge this exact gap.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-slate-700">
                <div className="space-y-4 text-base sm:text-[17px] leading-relaxed">
                  <p className="clarity-text text-slate-700">
                    We established Haxor MTC to serve as the dedicated technical execution arm for ambitious businesses and agency leaders across the UK, Europe, Australia, and North America.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    We completely immerse ourselves in how your business runs: your sales pipelines, quoting mechanics, customer support handoffs, and accounting reconciliations. Rather than delivering fragile point-to-point hacks or bloated vendor templates, we engineer resilient software architectures designed to perform under real-world load.
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Whether we are acting as your invisible white-label delivery squad or consulting directly with your executive leadership, we operate with total transparency, clear contractual SLAs, and zero proprietary lock-in.
                  </p>
                </div>

                {/* Key Impact Stats Grid */}
                <div className="pt-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
                  {stats.map((st, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="text-3xl sm:text-4xl font-light text-black tracking-tight font-work-sans">
                        {st.value}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">
                        {st.label}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 leading-tight">
                        {st.detail}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            CORE ENGINEERING PRINCIPLES
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-semibold uppercase px-3 py-1.5 rounded-full bg-slate-200 text-slate-800 inline-block">
                Our Standards
              </span>
              <h2 className="clarity-h2 text-black">
                Our Core Engineering Principles
              </h2>
              <p className="clarity-text text-slate-600">
                The technical benchmarks and delivery standards we uphold across every client deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 clean-card-hover transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
                      {pil.icon}
                    </div>
                    <h3 className="clarity-h3 text-black mb-3">
                      {pil.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            CERTIFIED TECHNOLOGY ECOSYSTEM
            ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-semibold uppercase px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 inline-block">
                Ecosystem &amp; Tech Stack
              </span>
              <h2 className="clarity-h2 text-black">
                Platforms We Deliver &amp; Integrate
              </h2>
              <p className="clarity-text text-slate-600">
                Enterprise systems and cloud technologies we architect, configure, and synchronize daily.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-center">
                <ZohoLogo className="h-6 w-auto" />
                <span className="text-xs font-semibold text-slate-800 mt-1">Zoho One / CRM</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-center">
                <OdooLogo className="h-6 w-auto" />
                <span className="text-xs font-semibold text-slate-800 mt-1">Odoo ERP</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-center">
                <GoogleAdsLogo className="h-6 w-6" />
                <span className="text-xs font-semibold text-slate-800 mt-1">Google Cloud</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-center">
                <MetaPixelLogo className="h-6 w-6" />
                <span className="text-xs font-semibold text-slate-800 mt-1">Meta API</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-center">
                <StripeLogo className="h-5 w-auto" />
                <span className="text-xs font-semibold text-slate-800 mt-1">Stripe Billing</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-center">
                <Database className="h-6 w-6 text-black" />
                <span className="text-xs font-semibold text-slate-800 mt-1">Node &amp; Python</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            OPERATIONAL COLLABORATION MODEL
            ========================================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Delivery Experience
              </span>
              <h2 className="clarity-h2 text-black mt-3">
                How We Collaborate With You
              </h2>
              <p className="clarity-text text-slate-600 mt-2">
                Built from the ground up for friction-free communication, clear visibility, and reliable sprint cadences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {operationalModel.map((item, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200 clean-card-hover">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="clarity-h3 text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            FAQS COMPONENT
            ========================================================================= */}
        <FaqSection />

        {/* =========================================================================
            BOTTOM CTA BANNER
            ========================================================================= */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-[#111111] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Ready to Collaborate?
                </span>
                <h3 className="clarity-h2 text-white !text-white tracking-tight">
                  Work With a Dedicated Engineering Partner
                </h3>
                <p className="clarity-text-dark text-slate-300">
                  Have an upcoming CRM implementation, automation pipeline, or agency white-label requirement? Let’s map out the architecture together.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsAppAboutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-black bg-white hover:bg-slate-100 transition shadow-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1F2937] hover:bg-slate-800 border border-slate-700 transition"
                >
                  Book Discovery Call
                </Link>
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
