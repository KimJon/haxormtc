import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  Lock, 
  Zap, 
  Workflow, 
  Cpu, 
  Layers, 
  Code2, 
  FileCheck2, 
  Clock, 
  Sparkles,
  Users,
  Compass,
  Check
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

export default function AgencyPartnersPage() {
  const { formatPrice } = useCurrency();

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run a digital agency / consultancy and would like to discuss a white-label CRM & automation technical delivery partnership."
  );

  return (
    <div className="min-h-screen bg-white text-[#3F4040] font-sans antialiased flex flex-col selection:bg-[#18D2FA]/30 selection:text-[#3F4040]">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section - Clarity Performance Aesthetic with Theme Colors & Glassmorphism */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-surface-50 to-white border-b border-[#3F4040]/10">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#18D2FA]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FE4775]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#18D2FA]/40 shadow-xs text-xs font-bold uppercase tracking-wider text-[#0EA5C6]">
              <Briefcase className="w-3.5 h-3.5 text-[#18D2FA]" />
              <span>Agency White-Label &amp; Technical Delivery Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1D1D] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Your Behind-the-Scenes <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D2FA] via-[#0EA5C6] to-[#FE4775]">
                CRM &amp; Automation
              </span> Team.
            </h1>

            {/* Subheadline */}
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#3F4040]/90 leading-relaxed font-sans font-normal">
              Your agency focuses on client relationships, strategy, and growth. Haxor MTC helps deliver the technical implementation behind the projects you sell. Partner with us for CRM configuration, workflow automation, software integrations, and implementation support when your team needs additional technical capacity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={partnerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#18D2FA] hover:bg-[#0EA5C6] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss an Agency Partnership</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-[#3F4040] bg-white/90 hover:bg-white border border-[#3F4040]/20 hover:border-[#FE4775] backdrop-blur-sm transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Submit a Project Brief</span>
                <ArrowRight className="w-4 h-4 text-[#FE4775]" />
              </Link>
            </div>

            {/* Trust Statement */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#3F4040]/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#18D2FA]" />
                100% White-Label &amp; NDA Protected
              </span>
              <span className="text-[#3F4040]/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                Zero Client Poaching Guarantee
              </span>
              <span className="text-[#3F4040]/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FED147]" />
                Fixed Wholesale Sprint Pricing
              </span>
            </div>

          </div>
        </section>

        {/* Who We Partner With - Clean High-Contrast Grid */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FE4775] bg-[#FE4775]/10 px-3 py-1 rounded-full">
                Partnership Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                Who We Partner With
              </h2>
              <p className="text-sm sm:text-base text-[#3F4040]/80 mt-2">
                We work with organizations across the UK, Europe, Australia, and worldwide that need dependable technical delivery support:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#18D2FA] shadow-xs hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#18D2FA]/10 text-[#0EA5C6] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1C1D1D]">Digital Marketing Agencies</h3>
                <p className="text-xs text-[#3F4040]/80 mt-2 leading-relaxed">
                  Turn your client ad campaigns into high-converting revenue engines by connecting paid traffic directly to lead-qualified CRM pipelines and automated WhatsApp follow-ups.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#FE4775] shadow-xs hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FE4775]/10 text-[#FE4775] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1C1D1D]">Web Development Studios</h3>
                <p className="text-xs text-[#3F4040]/80 mt-2 leading-relaxed">
                  Hand off complex backend webhook integrations, custom database scripts, payment push gateways, and CRM syncs without pulling your frontend designers away from billable work.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#FED147] shadow-xs hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FED147]/20 text-[#D8AB16] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1C1D1D]">CRM Implementation Consultants</h3>
                <p className="text-xs text-[#3F4040]/80 mt-2 leading-relaxed">
                  Offload implementation backlog during peak quarters. We execute configuration, Deluge scripts, custom modules, and data migrations to your exact client specification.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#18D2FA] shadow-xs hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#18D2FA]/10 text-[#0EA5C6] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1C1D1D]">Business Operations Consultants</h3>
                <p className="text-xs text-[#3F4040]/80 mt-2 leading-relaxed">
                  Translate your operational process blueprints into working automated reality. We implement the technical bridges between teams, departments, and software suites.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#FE4775] shadow-xs hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FE4775]/10 text-[#FE4775] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1C1D1D]">Automation Specialists</h3>
                <p className="text-xs text-[#3F4040]/80 mt-2 leading-relaxed">
                  Need custom API endpoints, webhook listeners, or multi-platform glue code that off-the-shelf connectors cannot handle? We build clean, documented middleware.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#FED147] shadow-xs hover:shadow-card transition-all group">
                <div className="w-10 h-10 rounded-xl bg-[#FED147]/20 text-[#D8AB16] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#1C1D1D]">IT &amp; Systems Consultancies</h3>
                <p className="text-xs text-[#3F4040]/80 mt-2 leading-relaxed">
                  Access specialist expertise in modern cloud platforms (Zoho One, Odoo, HubSpot) and cloud database synchronization with transparent milestone deliverables.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* What We Deliver - Split Panel Section (Clarity Performance Style) */}
        <section className="py-20 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3 py-1 rounded-full">
                Delivery Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                What We Deliver for Your Agency
              </h2>
              <p className="text-sm sm:text-base text-[#3F4040]/80 mt-2">
                Every project is delivered with thorough testing, clean technical documentation, and clear handover support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Pillar 1 */}
              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/10 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-[#18D2FA] mb-2 uppercase tracking-wider">
                    01 • System Architecture
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1D1D] mb-4">CRM Implementation</h3>
                  <ul className="space-y-2 text-xs text-[#3F4040]/90">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Custom CRM setup &amp; field design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Multi-stage sales pipeline setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Contact &amp; account data migration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Automated lead routing &amp; scoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Executive KPI &amp; pipeline reports</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/10 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-[#FE4775] mb-2 uppercase tracking-wider">
                    02 • Workflow Engineering
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1D1D] mb-4">Workflow Automation</h3>
                  <ul className="space-y-2 text-xs text-[#3F4040]/90">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0 mt-0.5" />
                      <span>End-to-end process mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0 mt-0.5" />
                      <span>Lead capture &amp; follow-up triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0 mt-0.5" />
                      <span>Internal staff alerts &amp; reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0 mt-0.5" />
                      <span>Multi-level approval workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FE4775] shrink-0 mt-0.5" />
                      <span>Automated recurring report dispatch</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/10 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-[#FED147] mb-2 uppercase tracking-wider">
                    03 • Connectivity
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1D1D] mb-4">Integrations &amp; APIs</h3>
                  <ul className="space-y-2 text-xs text-[#3F4040]/90">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0 mt-0.5" />
                      <span>Website form to CRM connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0 mt-0.5" />
                      <span>REST API &amp; custom webhook setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0 mt-0.5" />
                      <span>Two-way data mapping &amp; sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0 mt-0.5" />
                      <span>Payment gateway &amp; checkout webhooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#FED147] shrink-0 mt-0.5" />
                      <span>Integration error logging &amp; failover</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 rounded-2xl bg-white border border-[#3F4040]/10 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-[#1C1D1D] mb-2 uppercase tracking-wider">
                    04 • Documentation
                  </div>
                  <h3 className="text-xl font-bold text-[#1C1D1D] mb-4">Technical Handover</h3>
                  <ul className="space-y-2 text-xs text-[#3F4040]/90">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Agency-branded documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Visual workflow logic diagrams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Field mapping &amp; configuration notes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Verified test execution logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#18D2FA] shrink-0 mt-0.5" />
                      <span>Agreed staff walkthrough video/call</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Partnership Models - High-Contrast Dark Luxury Section */}
        <section className="py-20 bg-[#1C1D1D] text-white relative overflow-hidden border-b border-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(24,210,250,0.12),transparent_50%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(254,71,117,0.1),transparent_50%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#18D2FA] bg-[#18D2FA]/10 px-3 py-1 rounded-full border border-[#18D2FA]/30">
                Engagement Frameworks
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Flexible Partnership Models
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Structured to fit your agency workflow, project commitments, and client contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#18D2FA]/60 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fixed-Scope Projects</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Engage us for a clearly defined implementation with agreed deliverables, timelines, milestone staging, and acceptance criteria.
                  </p>
                  <div className="text-[11px] font-semibold text-[#18D2FA] py-1 px-2.5 rounded bg-[#18D2FA]/10 inline-block">
                    Ideal for specific CRM or webhook rollouts
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400">
                  30% Kickoff • 40% Staging • 30% Handover
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#FE4775]/60 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Technical Sprints</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Bring us in for a focused 1–2 week block of implementation work with defined priorities, sprint outputs, and rapid code deployment.
                  </p>
                  <div className="text-[11px] font-semibold text-[#FE4775] py-1 px-2.5 rounded bg-[#FE4775]/10 inline-block">
                    Ideal for clearing overflow client backlogs
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400">
                  Sprint Planning • Daily Updates • Handover
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-[#FED147]/60 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ongoing Delivery Support</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Arrange recurring monthly technical capacity for suitable projects, subject to agreed availability, scope, priorities, and commercial terms.
                  </p>
                  <div className="text-[11px] font-semibold text-[#FED147] py-1 px-2.5 rounded bg-[#FED147]/10 inline-block">
                    Dedicated hours bucket with SLA guarantees
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400">
                  Predictable monthly retainer capacity
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-emerald-400/60 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">White-Label &amp; Subcontract</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Where agreed, we work behind the scenes under your agency's client-facing arrangement. Confidentiality, intellectual property, and client ownership are honored under strict NDA.
                  </p>
                  <div className="text-[11px] font-semibold text-emerald-400 py-1 px-2.5 rounded bg-emerald-500/10 inline-block">
                    100% Non-Circumvention Protection
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10 text-xs text-slate-400">
                  Your brand on all code &amp; documentation
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 5-Step Delivery Process */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FE4775] bg-[#FE4775]/10 px-3 py-1 rounded-full">
                Structured Execution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                Our Agency Delivery Process
              </h2>
              <p className="text-sm text-[#3F4040]/80 mt-2">
                A predictable, disciplined 5-step collaboration cycle designed to protect your agency’s reputation.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-surface-50 border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#18D2FA] text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1D1D]">You Share Project Requirements</h4>
                  <p className="text-xs text-[#3F4040]/80 mt-0.5">Send us the client brief, software platforms involved, desired workflow outcomes, and target launch timeline.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FE4775] text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1D1D]">We Clarify Scope &amp; Technical Dependencies</h4>
                  <p className="text-xs text-[#3F4040]/80 mt-0.5">We analyze API rate limits, data schemas, webhook triggers, and third-party license prerequisites to eliminate surprises.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FED147] text-[#1C1D1D] font-extrabold font-mono flex items-center justify-center shrink-0">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1D1D]">We Agree on Deliverables, Timelines &amp; Fees</h4>
                  <p className="text-xs text-[#3F4040]/80 mt-0.5">A clear Statement of Work (SOW) with wholesale partner pricing, milestone acceptance criteria, and confidentiality terms.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5C6] text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  04
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1D1D]">We Implement &amp; Thoroughly Test the Solution</h4>
                  <p className="text-xs text-[#3F4040]/80 mt-0.5">We configure, write Deluge/API code, test edge cases, and provide an interactive staging link for your internal review.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-50 border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1C1D1D] text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  05
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1D1D]">We Provide Agreed Documentation &amp; Handover</h4>
                  <p className="text-xs text-[#3F4040]/80 mt-0.5">Delivery of clean architecture notes, configuration documentation under your agency brand, and launch assistance.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Agency Partnership Call to Action Banner */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-surface-50 via-white to-surface-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-white/90 backdrop-blur-md border border-[#3F4040]/15 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FE4775]">
                  Start an Agency Conversation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1C1D1D] tracking-tight">
                  Need Extra Technical Capacity for Your Next Project?
                </h3>
                <p className="text-xs sm:text-sm text-[#3F4040]/80 leading-relaxed">
                  Send us a brief overview of the project, the tools involved, and your expected timeline. We will assess the requirements and discuss whether we are a suitable delivery partner.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <a
                  href={partnerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#18D2FA] hover:bg-[#0EA5C6] shadow-md flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#1C1D1D] bg-surface-100 hover:bg-surface-200 border border-[#3F4040]/20 flex items-center justify-center gap-2 transition"
                >
                  <Mail className="w-4 h-4 text-[#FE4775]" />
                  <span>Submit Project Brief</span>
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
