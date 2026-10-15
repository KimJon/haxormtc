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
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Global Technology Standards • Enterprise Delivery</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Why Businesses Choose Haxor MTC
            </h1>

            <p className="clarity-text max-w-2xl mx-auto text-slate-600">
              We focus on dependable software engineering, AI workflow automation, and certified Odoo/Zoho ERP implementations, delivered through clear milestones and dedicated technical support.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsAppWhyUsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#111111] hover:bg-black transition flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/services"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition flex items-center gap-2"
              >
                <span>Explore Services &amp; Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Value Pillars & Reassurance Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                ⚡ Fast 24–48h Turnaround
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                🛡️ 100% White-Label NDA Protected
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                🔒 Zero Vendor Lock-In
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                📄 40–60% Agency Margins
              </span>
            </div>

            {/* Delivery Reassurance Micro-Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Milestone-Driven Sprints
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Direct Lead Engineer Access
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Daily Async Standups
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Staging Server QA Approvals
              </span>
            </div>

            {/* Humanized Architecture & Dashboard Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/zoho-dashboard.jpg" 
                  alt="Enterprise analytics dashboard and CRM management architecture" 
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Executive Visibility
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Real-Time KPI Dashboards
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Built for Accountability, Speed &amp; Reliable Support
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    Every system deployment is backed by transparent milestone approvals, SLA guarantees, and full technical documentation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Why Choose Us Core Component */}
        <WhyChooseUs />

        {/* 6-Step Delivery Process */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-slate-200 text-slate-800 inline-block mb-3">
                Proven Methodology
              </span>
              <h2 className="clarity-h2 text-black">
                Our Transparent 6-Step Delivery Process
              </h2>
              <p className="clarity-text text-slate-600 mt-2">
                Every project runs on a clear roadmap with milestone approvals. You are in full control from kickoff to live launch.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-medium shadow-xs">
                <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                <span>Milestone Approval Gates • Comprehensive Staging &amp; QA Verification</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEVELOPMENT_PROCESS.map((proc, idx) => (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200 clean-card-hover transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black font-semibold flex items-center justify-center text-sm mb-4">
                      {proc.step}
                    </div>
                    <h3 className="clarity-h3 text-black mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                Global Delivery Standards
              </span>
              <h2 className="clarity-h2 text-black mt-3">
                Enterprise-Grade Implementation With Flexible Engagement
              </h2>
              <p className="clarity-text text-slate-600 mt-2">
                Our technical delivery is built for agencies and businesses operating across the UK, Europe, and Australia who need reliable implementation partners without the overhead of permanent hires.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 clean-card-hover">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-black" />
                </div>
                <h3 className="clarity-h3 text-black mb-2">
                  White-Label Agency Delivery
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We operate under your agency's brand and NDA. Your clients see seamless delivery from your team while we handle the technical implementation behind the scenes.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 clean-card-hover">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <h3 className="clarity-h3 text-black mb-2">
                  Timezone-Aligned Collaboration
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our working hours overlap with GMT, CET, and AEST business schedules. Daily standups, async Slack/Teams updates, and milestone reviews keep every project on track.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 clean-card-hover">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-black" />
                </div>
                <h3 className="clarity-h3 text-black mb-2">
                  Documented Technical Handover
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
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
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Ready to Modernize?
                </span>
                <h3 className="clarity-h2 text-white !text-white tracking-tight">
                  Work With a Technical Partner You Can Trust
                </h3>
                <p className="clarity-text-dark text-slate-300">
                  Book a free discovery call or message our technical team on WhatsApp for an immediate consultation.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsAppWhyUsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-black bg-white hover:bg-slate-100 transition shadow-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-black shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/services"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1F2937] hover:bg-slate-800 border border-slate-700 transition"
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
