import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import PortfolioSection, { PORTFOLIO_STATS, CLIENT_WEBSITES } from '../components/PortfolioSection';
import { createWhatsAppUrl } from '../data/servicesData';
import { 
  ArrowRight, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

export default function PortfolioPage() {
  const whatsAppPortfolioUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I reviewed your technical case studies and would like to discuss a project."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] font-work-sans antialiased flex flex-col selection:bg-slate-200 selection:text-black">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <span>Verified Delivery Proof</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-tight max-w-4xl mx-auto">
              Our Proven Work &amp; Technical Deployments
            </h1>

            <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
              From white-label agency delivery sprints to enterprise CRM architectures, custom webhook topologies, and automated operations engines.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition shadow-sm"
              >
                <span>Discuss Your Project Requirements</span>
                <span className="ml-1.5">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Core Proof Metrics Grid */}
        <section className="py-16 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PORTFOLIO_STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 border border-slate-200">
                          <Icon className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          Verified
                        </span>
                      </div>
                      
                      <div className="text-3xl sm:text-4xl font-black text-[#111111] font-mono tracking-tight">
                        {stat.number}
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mt-2">
                        {stat.label}
                      </h3>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Case Studies Section */}
        <PortfolioSection />

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
