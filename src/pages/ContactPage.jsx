import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import ContactSection from '../components/ContactSection';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { 
  Sparkles, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { FacebookLogo, XLogo, SlackLogo } from '../components/OfficialLogos';

export default function ContactPage() {
  const directWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am on your contact page and would like to speak directly with your team about a project."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-slate-200 selection:text-black">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Solutions Architects Online • GMT, CET &amp; AEST Overlap</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Discuss Your Project or Agency Partnership
            </h1>

            <p className="clarity-text max-w-2xl mx-auto text-slate-600">
              Have a CRM implementation, workflow automation, or agency white-label technical delivery project in mind? Connect directly with our solutions architects and delivery leads.
            </p>

            {/* Reassurance Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                ⚡ Typical reply under 15 minutes
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                🛡️ Strict bilateral NDA guaranteed
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                📄 Free initial technical scoping
              </span>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6 text-left">
              
              {/* WhatsApp Card */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 clean-card-hover transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Direct Channel</div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-black transition">
                    WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-500">Typical reply in &lt;15 mins</div>
                </div>
              </a>

              {/* Business Email Card */}
              <a
                href={`mailto:${CONTACT_INFO.emailPrimary}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 clean-card-hover transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-black flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Official Email</div>
                  <div className="text-xs font-semibold text-slate-900 group-hover:text-black transition truncate max-w-[220px]">
                    {CONTACT_INFO.emailOfficial}
                  </div>
                  <div className="text-[11px] text-slate-500">Quotes &amp; Proposals</div>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/haxorconsults/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 clean-card-hover transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-black flex items-center justify-center shrink-0 shadow-sm">
                  <FacebookLogo className="w-5 h-5 fill-black" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Facebook</div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-black transition">
                    haxorconsults
                  </div>
                  <div className="text-[11px] text-slate-500">Official Channel</div>
                </div>
              </a>

              {/* X (Twitter) Card */}
              <a
                href="https://x.com/haxorconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white border border-slate-200 clean-card-hover transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-black flex items-center justify-center shrink-0 shadow-sm">
                  <XLogo className="w-4 h-4 fill-black" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">X (Twitter)</div>
                  <div className="text-sm font-semibold text-slate-900 group-hover:text-black transition">
                    @haxorconsults
                  </div>
                  <div className="text-[11px] text-slate-500">Official Handle</div>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Embedded Contact Section with Interactive Form */}
        <ContactSection />

        {/* International Delivery & Global Operations */}
        <section className="py-16 bg-[#F4F5F7] border-t border-slate-200 font-work-sans">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  <span>Global Technical Delivery</span>
                </div>
                <h3 className="text-2xl font-black text-[#111111] tracking-tight">
                  Serving Digital Agencies &amp; Consultancies Worldwide
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  We conduct remote technical sprints, CRM configurations, and custom workflow automations for agencies and businesses across the United Kingdom, Europe, Australia, North America, and worldwide.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#111111] hover:bg-black flex items-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp Technical Desk</span>
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
