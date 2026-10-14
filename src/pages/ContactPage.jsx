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

export default function ContactPage() {
  const directWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am on your contact page and would like to speak directly with your team about a project."
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
              <span>Direct Communication & Support</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1C1D1D] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
              Discuss Your Project or Agency Partnership
            </h1>

            <p className="body-figtree max-w-2xl mx-auto text-slate-600 leading-relaxed">
              Have a CRM implementation, workflow automation, or agency white-label technical delivery project in mind? Connect directly with our solutions architects and delivery leads.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto pt-6 text-left">
              
              {/* WhatsApp Card */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-emerald-50/70 border border-brand-green/30 hover:shadow-card transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-green text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-emerald-800 uppercase tracking-wider">Direct Channel</div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-brand-green transition">
                    WhatsApp
                  </div>
                  <div className="text-[11px] text-slate-500">Typical reply in &lt;15 mins</div>
                </div>
              </a>

              {/* Business Email Card */}
              <a
                href={`mailto:${CONTACT_INFO.emailPrimary}`}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-card transition flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">Official Email</div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-brand-cyanDeep transition truncate max-w-[220px]">
                    {CONTACT_INFO.emailOfficial}
                  </div>
                  <div className="text-[11px] text-slate-500">Quotes & Proposals</div>
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
