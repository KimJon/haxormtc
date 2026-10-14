import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import SocialProofSection from '../components/SocialProofSection';
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
  Clock, 
  Check
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import { 
  OfficialLogoCloud, 
  BrandBadge, 
  OdooLogo, 
  ZohoLogo, 
  HubSpotLogo, 
  StripeLogo, 
  GoogleAdsLogo, 
  MetaPixelLogo 
} from '../components/OfficialLogos';

export default function AgencyPartnersPage() {
  const { formatPrice } = useCurrency();

  const partnerWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I run a digital agency / consultancy and would like to discuss a white-label CRM & automation technical delivery partnership."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] font-work-sans antialiased flex flex-col selection:bg-slate-200 selection:text-black">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* =========================================================================
            HERO SECTION (Clarity Performance Clean Monochrome)
            ========================================================================= */}
        <section className="relative pt-20 pb-20 md:pt-28 md:pb-32 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Minimalist Monochrome Category Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-black" />
              <span>Agency White-Label &amp; Technical Delivery Partner</span>
            </div>

            {/* Solid Bold Headline in Work Sans - User Specified 52px 300 Weight Style */}
            <h1 className="clarity-h1 text-4xl sm:text-5xl lg:text-[52px] font-light text-black tracking-[-1.82px] leading-[1.08] max-w-4xl mx-auto">
              Your Behind-the-Scenes <br className="hidden sm:inline" />
              CRM &amp; Automation Team.
            </h1>

            {/* Focused Subheadline - 18px 400 Weight */}
            <p className="clarity-text max-w-3xl mx-auto text-base sm:text-[18px] text-slate-600 leading-[27px] font-normal">
              Your agency focuses on client relationships, strategy, and creative growth. Haxor MTC handles the technical implementation behind the projects you sell. Partner with us for CRM configuration, workflow automation, and custom API integrations under your brand and strict NDA.
            </p>

            {/* Dual Clarity Button Layout: Solid Black + Clean Outlined Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={partnerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-black hover:bg-neutral-800 transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss an Agency Partnership</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition-all flex items-center justify-center gap-2"
              >
                <span>Submit a Project Brief</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>

            {/* Clean Monochrome Trust Indicators */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> 100% White-Label &amp; NDA Protected
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Zero Client Poaching Guarantee
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Fixed Wholesale Sprint Rates
              </span>
            </div>

            {/* Humanized Agency Partnership Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/agency-partnership.jpg" 
                  alt="Agency Executive aligning on deliverables with Haxor MTC Technical Partner" 
                  className="w-full h-auto max-h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Executive Partnership Briefing
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 100% Under Your Agency Brand
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">
                    Technical Capacity On Demand Without Adding Headcount
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl hidden sm:block font-normal leading-relaxed">
                    We act as your behind-the-scenes senior delivery team. You sell higher-value retainer contracts; we build the pipelines, databases, and automations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Official Ecosystem & Tools Strip */}
        <OfficialLogoCloud />

        {/* =========================================================================
            WHO WE PARTNER WITH - High-Contrast Clean Grid
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                Partnership Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight mt-3">
                Who We Partner With
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We work behind the scenes for digital organizations across the UK, Europe, Australia, and North America that require dependable technical execution without expanding permanent headcount.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] mb-2">Digital Marketing Agencies</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Turn paid traffic campaigns into qualified revenue engines by connecting ad forms directly to automated CRM deal stages, SMS/WhatsApp alerts, and email nurture workflows.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] mb-2">Web Design &amp; Dev Studios</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Hand off backend webhook listeners, complex database schemas, CRM connections, and payment integrations without pulling your creative frontend team away from billable work.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] mb-2">CRM Consultants</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Clear implementation backlog during busy quarters. We execute Deluge scripts, custom layouts, data migrations, and automated pipelines according to your exact architecture.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Workflow className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] mb-2">Operations Consultancies</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Translate your operational blueprints into functional software reality. We build reliable automation bridges connecting departments, tools, and accounting platforms.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] mb-2">Automation Agencies</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Need custom API endpoints, authenticated webhook listeners, or multi-platform middleware that off-the-shelf tools cannot handle? We build clean, documented glue code.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#111111] mb-2">IT &amp; Systems Integrators</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Access specialist engineering in Zoho One, Odoo ERP, and cloud database synchronization with transparent milestone deliverables and zero customer poaching risk.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            WHAT WE DELIVER - 4 Core Technical Capabilities
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Delivery Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
                What We Deliver for Your Agency
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Every project is delivered with thorough testing, clean technical documentation, and clear handover support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Pillar 1 */}
              <div className="p-7 rounded-3xl bg-[#F4F5F7] border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-slate-400 mb-2 uppercase tracking-wider">
                    01 • System Architecture
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-4">CRM Implementation</h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Custom CRM setup &amp; field design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Multi-stage sales pipeline design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Contact &amp; account data migration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Automated lead routing &amp; scoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Executive KPI &amp; conversion reports</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-7 rounded-3xl bg-[#F4F5F7] border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-slate-400 mb-2 uppercase tracking-wider">
                    02 • Process Automation
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-4">Workflow Automation</h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>End-to-end process mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Lead capture &amp; follow-up triggers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Internal staff alerts &amp; reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Multi-level approval workflows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Automated recurring report dispatch</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-7 rounded-3xl bg-[#F4F5F7] border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-slate-400 mb-2 uppercase tracking-wider">
                    03 • Connectivity
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-4">Integrations &amp; APIs</h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Website form to CRM connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>REST API &amp; webhook setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Two-way data mapping &amp; sync</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Stripe &amp; checkout webhooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Integration error monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-7 rounded-3xl bg-[#F4F5F7] border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-extrabold text-slate-400 mb-2 uppercase tracking-wider">
                    04 • Documentation
                  </div>
                  <h3 className="text-xl font-bold text-[#111111] mb-4">Technical Handover</h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Agency-branded documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Visual workflow logic diagrams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Field mapping &amp; config notes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Verified test execution logs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <span>Team walkthrough recording</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            BEHIND-THE-SCENES TECHNICAL DELIVERY ARCHITECTURE (Humanized Showcase)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Real Senior Architects Photo with Floating Badges */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                  <img
                    src="/images/hero-collaboration.jpg"
                    alt="Haxor MTC Senior Systems Architects and Technical Delivery Team"
                    className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                        Senior Engineering Squad
                      </span>
                    </div>
                    <div className="font-bold text-lg sm:text-xl text-white">
                      Direct Communication With Technical Architects
                    </div>
                    <div className="text-xs text-slate-300 mt-1 font-normal">
                      No junior handoffs • Async Slack/Teams channels • Daily progress git logs
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Clarity Narrative & Badges */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                    Behind-The-Scenes Delivery
                  </span>
                  <h2 className="clarity-h1 text-3xl sm:text-4xl lg:text-[46px] font-light text-black tracking-[-1.82px] leading-[1.12] mt-3">
                    Architectural Rigor for Every Agency Client
                  </h2>
                </div>

                <p className="clarity-text text-base sm:text-[18px] text-slate-700 leading-[27px] font-normal">
                  When you introduce Haxor MTC as your white-label technical partner, you gain an experienced senior engineering squad without overhead or payroll liabilities. We handle the heavy technical lifting while your account directors focus on relationship management and upselling.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-sm text-black">100% Bilateral Non-Disclosure &amp; Non-Compete</div>
                      <div className="text-xs text-slate-600 mt-0.5">We never solicit, market to, or contact your clients directly. All IP is transferred upon handover.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="font-bold text-sm text-black">Timezone-Aligned Delivery Standups</div>
                      <div className="text-xs text-slate-600 mt-0.5">Daily asynchronous Loom video walkthroughs, shared linear sprints, and real-time Slack/Teams updates.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <BrandBadge brand="zoho" label="Zoho One" />
                  <BrandBadge brand="odoo" label="Odoo ERP" />
                  <BrandBadge brand="hubspot" label="HubSpot" />
                  <BrandBadge brand="stripe" label="Stripe APIs" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SOCIAL PROOF (Agency Testimonials & Metrics)
            ========================================================================= */}
        <SocialProofSection 
          variant="light" 
          showCta={false} 
          title="Proven Technical Delivery for Growth-Minded Agencies"
        />

        {/* =========================================================================
            PARTNERSHIP MODELS (Clarity Dark Monochromatic Block)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#111111] text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">
                Engagement Frameworks
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Flexible Partnership Models
              </h2>
              <p className="text-sm sm:text-base text-slate-400">
                Structured to fit your agency workflow, project commitments, and client margins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="p-7 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-slate-600 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fixed-Scope Sprints</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Engage us for a clearly defined implementation with agreed deliverables, timelines, milestone staging, and acceptance criteria.
                  </p>
                  <div className="text-[11px] font-semibold text-white py-1 px-2.5 rounded bg-neutral-800 inline-block">
                    Typical turnaround: 1–3 weeks
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-800 text-xs text-slate-500">
                  30% Kickoff • 40% Staging • 30% Handover
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-slate-600 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Technical Sprints</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Bring us in for a focused 1–2 week block of implementation work with defined priorities, sprint outputs, and rapid code deployment.
                  </p>
                  <div className="text-[11px] font-semibold text-white py-1 px-2.5 rounded bg-neutral-800 inline-block">
                    Ideal for clearing client backlog
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-800 text-xs text-slate-500">
                  Sprint Planning • Daily Updates • Handover
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-slate-600 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Delivery Retainers</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    Arrange recurring monthly technical capacity for multiple projects, subject to agreed availability, scope priorities, and SLA terms.
                  </p>
                  <div className="text-[11px] font-semibold text-white py-1 px-2.5 rounded bg-neutral-800 inline-block">
                    Reserved engineering hours bucket
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-800 text-xs text-slate-500">
                  Predictable monthly capacity at wholesale rates
                </div>
              </div>

              <div className="p-7 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between hover:border-slate-600 transition">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">White-Label Delivery</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    We work completely behind the scenes under your agency's client-facing arrangement. Confidentiality, intellectual property, and client relationships are protected under NDA.
                  </p>
                  <div className="text-[11px] font-semibold text-white py-1 px-2.5 rounded bg-neutral-800 inline-block">
                    Zero Client Poaching Guarantee
                  </div>
                </div>
                <div className="pt-6 mt-6 border-t border-neutral-800 text-xs text-slate-500">
                  Your brand on all code &amp; documentation
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            DELIVERY PROCESS (5 Disciplined Steps)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Structured Execution
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
                Our Agency Delivery Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                A predictable, disciplined 5-step collaboration cycle designed to protect your agency’s reputation.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-black text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111111]">You Share Project Requirements</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Send us the client brief, software platforms involved, desired workflow outcomes, and target launch timeline.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-black text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111111]">We Clarify Scope &amp; Technical Dependencies</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">We analyze API rate limits, data schemas, webhook triggers, and third-party license prerequisites to eliminate surprises.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-black text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  03
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111111]">We Agree on Deliverables, Timelines &amp; Fees</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">A clear Statement of Work (SOW) with wholesale partner pricing, milestone acceptance criteria, and mutual confidentiality terms.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-black text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  04
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111111]">We Implement &amp; Thoroughly Test the Solution</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">We configure, write Deluge/API code, test edge cases, and provide an interactive staging link for your internal review.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-black text-white font-extrabold font-mono flex items-center justify-center shrink-0">
                  05
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#111111]">We Provide Agreed Documentation &amp; Handover</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Delivery of clean architecture notes, configuration documentation under your agency brand, and launch assistance.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            CLOSING CTA (Clarity Monochrome Closing Block)
            ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F4F5F7] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
              Start an Agency Conversation
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              Need Extra Technical Capacity for Your Next Project?
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Send us a brief overview of the project, the tools involved, and your expected timeline. We will assess the requirements and discuss whether we are a suitable delivery partner.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={partnerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss on WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>Submit Project Brief</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
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
