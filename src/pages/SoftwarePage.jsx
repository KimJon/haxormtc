import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { SOFTWARE_PRODUCTS, createWhatsAppUrl } from '../data/servicesData';
import { 
  Store, 
  Truck, 
  Hotel, 
  Activity, 
  Database, 
  Cpu, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  QrCode,
  ShieldCheck,
  Clock,
  Layers,
  Lock,
  Zap
} from 'lucide-react';

export default function SoftwarePage() {
  const whatsAppSoftwareUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am looking for enterprise software solutions and would like to request a demo or architecture consultation."
  );

  const getIcon = (id) => {
    switch (id) {
      case 'haxpos': return <Store className="w-6 h-6 text-black" />;
      case 'elittego': return <Truck className="w-6 h-6 text-black" />;
      case 'haxone': return <Hotel className="w-6 h-6 text-black" />;
      case 'hospital-system': return <Activity className="w-6 h-6 text-black" />;
      case 'odoo-expert': return <Database className="w-6 h-6 text-black" />;
      case 'zoho-expert': return <Cpu className="w-6 h-6 text-black" />;
      default: return <Store className="w-6 h-6 text-black" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span>Enterprise &amp; SME Business Platforms</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Enterprise Business Software, Cloud POS &amp; Management Systems
            </h1>

            <p className="clarity-text max-w-2xl mx-auto text-slate-600">
              Engineered for high-traffic retail, hospitality, clinics, and multi-branch operations worldwide, with specialized localized regional platforms like ElitteGo.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsAppSoftwareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#111111] hover:bg-black transition flex items-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>Request Platform Demo</span>
              </a>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition flex items-center gap-2"
              >
                <span>Custom Architecture Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Reassurance Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-black" /> Offline-First POS Engine
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-black" /> Multi-Branch Inventory Sync
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-black" /> 100% Data &amp; Source Code Ownership
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-black" /> White-Label Reseller Rights
              </span>
            </div>

            {/* Platform Feature Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Cloud POS (HaxPOS)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Hospitality PMS (HaxOne)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Regional Logistics (ElitteGo)
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Hospital EHR System
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Odoo ERP Deployments
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                Zoho Creator Custom Apps
              </span>
            </div>

            {/* Humanized POS & Cloud Software Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/pos-system.jpg" 
                  alt="Modern touchscreen Cloud Point of Sale and Retail Management System" 
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Turnkey Enterprise Software
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Offline Sync &bull; Multi-Branch POS
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Cloud POS &amp; Operational Management Engines
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    Built for speed, inventory reconciliation, multi-store tax compliance, and automated branch reporting.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Software Showcase Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SOFTWARE_PRODUCTS.map((prod) => {
                const demoUrl = createWhatsAppUrl(prod.demoText);
                return (
                  <div
                    key={prod.id}
                    className="p-8 rounded-3xl bg-white border border-slate-200 clean-card-hover transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                          {prod.badge}
                        </span>
                        {getIcon(prod.id)}
                      </div>

                      <h2 className="clarity-h3 text-black mb-2">
                        {prod.name}
                      </h2>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {prod.tagline}
                      </p>

                      {/* QR Code Demo Banner for ElitteGo */}
                      {prod.qrCodeImage && (
                        <div className="my-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                          <img 
                            src={prod.qrCodeImage} 
                            alt="Scan QR Demo" 
                            className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-200 shrink-0 object-contain shadow-2xs"
                          />
                          <div>
                            <div className="text-xs font-semibold text-slate-900">Live Smartphone App Demo</div>
                            <div className="text-[11px] text-slate-500">Scan with phone camera to test rider app</div>
                          </div>
                        </div>
                      )}

                      {/* Sectors */}
                      <div className="my-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                          Target Sectors:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prod.sectors.slice(0, 4).map((sec, sIdx) => (
                            <span key={sIdx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="my-4 space-y-1.5 text-xs text-slate-700">
                        {prod.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 space-y-2.5">
                      <Link
                        to={`/software/${prod.id}`}
                        className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-center bg-[#111111] text-white hover:bg-black flex items-center justify-center gap-1.5 transition"
                      >
                        <span>View System Details & Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-center text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black flex items-center justify-center gap-1.5 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-[#111111] shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
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
