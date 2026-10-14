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

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#373656] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
              Get in Touch With Our Engineering Team
            </h1>

            <p className="body-figtree max-w-2xl mx-auto text-slate-600 leading-relaxed">
              Have a question about website design, our POS software, or digital marketing packages? Connect directly with our engineers and strategists today.
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

        {/* Location & Coverage */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-brand-cyan/20 text-brand-cyanDeep text-xs font-bold uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Nationwide Operations</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#373656] font-heading">
                  Nationwide Technology Delivery Across All 47 Counties
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
                  We conduct remote website and software delivery nationwide and on-site hardware/POS integrations across Mombasa, Nakuru, Eldoret, Kisumu, Thika, and throughout the region.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp</span>
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
