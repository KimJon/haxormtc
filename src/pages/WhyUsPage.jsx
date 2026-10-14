import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';
import { DEVELOPMENT_PROCESS, createWhatsAppUrl } from '../data/servicesData';
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
  Target
} from 'lucide-react';

export default function WhyUsPage() {
  const whatsAppWhyUsUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I want to learn more about how your team can help modernize our business systems and marketing."
  );

  return (
    <div className="min-h-screen bg-white text-primaryText font-sans antialiased flex flex-col">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-12 pb-14 md:pt-18 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Global Technology Standards • Regional Execution</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#373656] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
              Why Businesses Choose Haxor MTC
            </h1>

            <p className="body-figtree max-w-2xl mx-auto text-slate-600 leading-relaxed">
              We focus on dependable software engineering, AI workflow automation, and certified Odoo/Zoho ERP implementations, delivered through clear milestones and dedicated technical support.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsAppWhyUsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition flex items-center gap-2"
              >
                <span>Explore Services & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Core Component */}
        <WhyChooseUs />

        {/* 6-Step Delivery Process */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-100 text-brand-cyanDeep inline-block mb-3">
                Proven Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373656] font-heading tracking-tight">
                Our Transparent 6-Step Delivery Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Every project runs on a clear roadmap with milestone approvals. You are in full control from kickoff to live launch.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Zero Risk: 30% Start → 40% Design Approval → 30% Final Launch</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEVELOPMENT_PROCESS.map((proc, idx) => (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-card transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep font-extrabold font-mono flex items-center justify-center text-sm mb-4">
                      {proc.step}
                    </div>
                    <h3 className="text-lg font-extrabold text-[#373656] font-heading mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International Delivery Advantage */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-3 py-1 rounded-full border border-brand-cyan/20">
                Global Delivery Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373656] font-heading mt-3">
                Enterprise-Grade Implementation With Flexible Engagement
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Our technical delivery is built for agencies and businesses operating across the UK, Europe, and Australia who need reliable implementation partners without the overhead of permanent hires.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-brand-green/30 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-brand-green" />
                </div>
                <h3 className="text-xl font-extrabold text-[#373656] font-heading">
                  White-Label Agency Delivery
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  We operate under your agency's brand and NDA. Your clients see seamless delivery from your team while we handle the technical implementation behind the scenes.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-coral-50 border border-brand-coral/30 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-coral" />
                </div>
                <h3 className="text-xl font-extrabold text-[#373656] font-heading">
                  Timezone-Aligned Collaboration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Our working hours overlap with GMT, CET, and AEST business schedules. Daily standups, async Slack/Teams updates, and milestone reviews keep every project on track.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-brand-gold/30 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-brand-goldDeep" />
                </div>
                <h3 className="text-xl font-extrabold text-[#373656] font-heading">
                  Documented Technical Handover
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Every project includes complete setup documentation, workflow explanations, admin credentials, and training materials so your team can maintain and extend the solution independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FaqSection />

        {/* Bottom CTA Banner */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-[#111111] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ready to Modernize?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Work With a Technical Partner You Can Trust
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Book a free discovery call or message our technical team on WhatsApp for an immediate consultation.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsAppWhyUsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-white hover:bg-slate-100 transition shadow-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1F2937] hover:bg-slate-800 border border-slate-700 transition"
                >
                  View Packages
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
