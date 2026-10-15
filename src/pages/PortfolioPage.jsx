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

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Our Proven Work &amp; Technical Deployments
            </h1>

            <p className="clarity-text max-w-2xl mx-auto text-slate-600">
              From white-label agency delivery sprints to enterprise CRM architectures, custom webhook topologies, and automated operations engines.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#111111] hover:bg-black transition shadow-sm flex items-center gap-2"
              >
                <span>Discuss Your Project Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsAppPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-800 shrink-0" />
                <span>WhatsApp Scoping Desk</span>
              </a>
            </div>

            {/* Quick Proof Metrics Strip */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> 45+ CRM Deployments
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> 120+ Active Workflows
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> 99.9% Integration Reliability
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> 100% White-Label Protected
              </span>
            </div>

            {/* Technical Scope Tags */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Zoho CRM &amp; Creator
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Odoo ERP Workflows
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Custom Webhooks &amp; APIs
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Multi-Tenant SaaS Backends
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                White-Label Agency Delivery
              </span>
            </div>

            {/* Humanized Live Deployed Proof Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/hotel-booking.jpg" 
                  alt="Custom web application and multi-tenant booking engine deployment" 
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Live Production Architecture
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> 100% Milestone Completion
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Mission-Critical Systems Running 24/7 in Production
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    Full-stack portals, custom webhook processors, and enterprise CRM implementations handling daily transactions.
                  </p>
                </div>
              </div>
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
