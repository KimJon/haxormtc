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
  QrCode 
} from 'lucide-react';

export default function SoftwarePage() {
  const getIcon = (id) => {
    switch (id) {
      case 'haxpos': return <Store className="w-6 h-6 text-brand-cyanDeep" />;
      case 'elittego': return <Truck className="w-6 h-6 text-brand-coral" />;
      case 'haxone': return <Hotel className="w-6 h-6 text-brand-goldDeep" />;
      case 'hospital-system': return <Activity className="w-6 h-6 text-brand-green" />;
      case 'odoo-expert': return <Database className="w-6 h-6 text-purple-600" />;
      case 'zoho-expert': return <Cpu className="w-6 h-6 text-amber-600" />;
      default: return <Store className="w-6 h-6 text-brand-cyanDeep" />;
    }
  };

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
              <span>Enterprise & SME Business Platforms</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#373656] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
              Enterprise Business Software, Cloud POS & Management Systems
            </h1>

            <p className="body-figtree max-w-2xl mx-auto text-slate-600 leading-relaxed">
              Engineered for high-traffic retail, hospitality, clinics, and multi-branch operations worldwide, with specialized localized regional platforms like ElitteGo.
            </p>
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
                    className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                          {prod.badge}
                        </span>
                        {getIcon(prod.id)}
                      </div>

                      <h2 className="text-2xl font-extrabold text-[#373656] font-heading">
                        {prod.name}
                      </h2>

                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {prod.tagline}
                      </p>

                      {/* QR Code Demo Banner for ElitteGo */}
                      {prod.qrCodeImage && (
                        <div className="my-4 p-3 rounded-2xl bg-cyan-50 border border-brand-cyan/30 flex items-center gap-3">
                          <img 
                            src={prod.qrCodeImage} 
                            alt="Scan QR Demo" 
                            className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-200 shrink-0 object-contain shadow-2xs"
                          />
                          <div>
                            <div className="text-xs font-extrabold text-slate-900">Live Smartphone App Demo</div>
                            <div className="text-[11px] text-slate-600">Scan with phone camera to test rider app</div>
                          </div>
                        </div>
                      )}

                      {/* Sectors */}
                      <div className="my-4 pt-3 border-t border-slate-100">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                          Target Sectors:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {prod.sectors.slice(0, 4).map((sec, sIdx) => (
                            <span key={sIdx} className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                              {sec}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="my-4 space-y-1.5 text-xs text-slate-700">
                        {prod.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5 stroke-[3]" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-100 space-y-2.5">
                      <Link
                        to={`/software/${prod.id}`}
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                      >
                        <span>View System Details & Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-center text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-1.5 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
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
