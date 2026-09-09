import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  PORTFOLIO_STATS, 
  CLIENT_WEBSITES 
} from '../components/PortfolioSection';
import { createWhatsAppUrl } from '../data/servicesData';
import { 
  ExternalLink, 
  MapPin, 
  Store, 
  TrendingUp, 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck,
  Star,
  Check
} from 'lucide-react';

export default function PortfolioPage() {
  const whatsAppPortfolioUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I reviewed your client portfolio on haxormtc.com and would like to get a quote for a similar project."
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
              <span>Verified Client Results in Kenya</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#373656] font-heading tracking-tight leading-tight max-w-4xl mx-auto">
              Our Proven Work, Live Websites & Systems
            </h1>

            <p className="body-figtree max-w-2xl mx-auto text-slate-600 leading-relaxed">
              From hotel booking portals and engineering firm sites to retail touchscreen POS and Google Maps #1 rankings. Explore our work across Kenya.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsAppPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/calculator"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition flex items-center gap-2"
              >
                <span>Calculate Your Project Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Core Proof Metrics Grid */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PORTFOLIO_STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx}
                    className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-card transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} border`}>
                          <Icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-500 font-mono">
                          Verified
                        </span>
                      </div>
                      
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#373656] font-mono tracking-tight">
                        {stat.number}
                      </div>

                      <h3 className="text-base font-extrabold text-slate-900 mt-1">
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

        {/* Featured Live Client Websites */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-3 py-1 rounded-full border border-brand-cyan/20">
                Live Client Websites
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373656] font-heading mt-3">
                Commercial Websites Engineered for Conversions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Click any live link below to test real performance, mobile responsiveness, and direct WhatsApp / booking funnels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CLIENT_WEBSITES.map((client, idx) => (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-50 text-brand-cyanDeep border border-brand-cyan/20">
                        {client.badge}
                      </span>
                      <Globe className="w-5 h-5 text-slate-400 group-hover:text-brand-cyanDeep transition" />
                    </div>

                    <h3 className="text-2xl font-extrabold text-[#373656] font-heading">
                      {client.name}
                    </h3>

                    <div className="text-xs font-mono font-bold text-brand-cyanDeep mt-1">
                      {client.domain}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {client.tagline}
                    </p>

                    <div className="my-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {client.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 transition"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Systems & Google Case Studies Section */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-100 text-brand-cyanDeep inline-block mb-3">
                Beyond Websites
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373656] font-heading tracking-tight">
                POS Systems & Local Google Dominance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Real software installed in real shops, and local businesses capturing ready-to-buy customers on Google Maps every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* POS Case Study */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-brand-gold/30 flex items-center justify-center mb-5">
                  <Store className="w-6 h-6 text-brand-goldDeep" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-goldDeep">10+ Active Stores</span>
                <h3 className="text-2xl font-extrabold text-[#373656] font-heading mt-2">
                  Touchscreen Retail POS & M-Pesa Integration
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  We deploy complete point-of-sale hardware and software setups for retail stores, liquor shops, cafes, and supermarkets. Cashiers scan barcodes, trigger instant M-Pesa STK push prompts, and print thermal receipts with zero cashier theft.
                </p>
                <div className="mt-5 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Instant M-Pesa STK confirmation — no customer till forgery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Real-time stock depletion and automatic low-stock alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>KRA eTIMS invoice generation readiness</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to="/software/haxpos"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-cyanDeep hover:text-cyan-800 transition"
                  >
                    <span>View HaxPos Universal POS System</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Google Business Profile Case Study */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
                <div className="w-12 h-12 rounded-2xl bg-coral-50 border border-brand-coral/20 flex items-center justify-center mb-5">
                  <MapPin className="w-6 h-6 text-brand-coral" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-coral">200+ Businesses Verified</span>
                <h3 className="text-2xl font-extrabold text-[#373656] font-heading mt-2">
                  Google Maps Local 3-Pack Rankings
                </h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Over 200 Kenyan businesses have been verified, optimized, and ranked by Haxor MTC. When nearby customers search for plumbers, hotels, clinics, auto garages, or beauty salons, our clients appear right at the top with direct call buttons.
                </p>
                <div className="mt-5 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Instant Google verification bypassing postcard delays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>High-intent calls and WhatsApp inquiries from ready local buyers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    <span>Google review link generator to boost 5-star social proof</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to="/services/google-business"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-cyanDeep hover:text-cyan-800 transition"
                  >
                    <span>Explore Google Maps Setup (Ksh 2,500)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-[#373656] to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  Ready to Grow Your Business?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Let's Build Your Website or System Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Transparent milestone payments (30% start → 40% design → 30% launch). Zero risk, 24–48hr turnarounds.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsAppPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-2 transition transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/services"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
                >
                  View All Packages
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
