import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import QuoteCalculator from '../components/QuoteCalculator';
import WhyChooseUs from '../components/WhyChooseUs';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  Check,
  ArrowRight, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  TrendingUp, 
  Store, 
  Truck, 
  Hotel, 
  Activity, 
  Database, 
  Cpu, 
  Mail, 
  MapPin, 
  Search, 
  BookOpen, 
  ShieldCheck,
  Zap,
  Monitor,
  Calculator,
  Clock
} from 'lucide-react';
import { createWhatsAppUrl, DEVELOPMENT_PROCESS } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import TrustSection from '../components/TrustSection';
import BusinessKitsShowcase from '../components/BusinessKitsShowcase';

export default function Home() {
  const { formatPrice } = useCurrency();
  const demoWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I would like to schedule a 15-minute technical demo and consultation for my business software and ERP requirements."
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* High-Impact Hero Section */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Category Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-brand-cyanDeep" />
              <span>Certified Zoho &amp; Odoo Partner</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-bold">Custom Software, POS &amp; ERP</span>
            </div>

            {/* Client-Centric & Action-Driven Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto font-recoleta">
              Software, Websites &amp; POS Systems Built for Growing Businesses.
            </h1>

            {/* Concise, Scannable Subhead */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
              Certified Zoho consulting, touchscreen cloud POS, and custom commercial software with instant M-Pesa integration, 100% source code ownership, and zero upfront risk.
            </p>

            {/* Dual Clear-Contrast CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href="#calculator"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-black text-white bg-slate-900 hover:bg-slate-800 shadow-md flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5 group cursor-pointer border border-slate-900"
              >
                <Calculator className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={demoWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-slate-400 shadow-2xs flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-slate-700 shrink-0" />
                <span>Book 15-Min Walkthrough</span>
              </a>
            </div>

            {/* One-Line Trust Bar */}
            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5 text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-slate-600 shrink-0" />
                  <strong>100% Source Code &amp; IP Ownership</strong>
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Clock className="w-4 h-4 text-slate-600 shrink-0" />
                  <strong>Zero-Risk 30/40/30 Milestones</strong>
                </span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                  <strong>12-Month Dedicated SLA</strong>
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Verified Business Trust & Authenticity Section */}
        <TrustSection />

        {/* Curated Digital Business Kits Spotlight (Hospitality, Retail, Contracting) */}
        <BusinessKitsShowcase 
          limit={3} 
          showSearch={false}
          compact={true}
          title="Turnkey Digital Business Kits"
          subtitle="Pre-configured operational stacks complete with custom web app, direct booking/POS, and M-Pesa integration."
        />

        {/* HUB 1: Digital Marketing & Web Presence */}
        <section id="services" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-3 py-1 rounded-full border border-brand-cyan/20">
                  Growth & Web Hub
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-recoleta tracking-tight mt-3">
                  Digital Marketing &amp; Web Packages
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1 font-sans leading-relaxed">
                  Transparent packages engineered for growing businesses with verified deliverables and direct WhatsApp booking.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl transition shadow-xs shrink-0"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/calculator"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition shrink-0"
                >
                  <span>Calculate Bundle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 4 Flagship Digital Solutions for Fast Scanning */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Flagship 1: Custom Website Development */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800">
                      Turnkey Web
                    </span>
                    <Monitor className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-sans">
                    Custom Websites
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Fast, secure commercial web apps with direct WhatsApp &amp; M-Pesa checkout.
                  </p>

                  <div className="my-4 py-2 border-y border-slate-200/60">
                    <div className="font-mono font-black text-xl text-slate-900">
                      From {formatPrice(7000)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      1 Year Free Domain &amp; Cloud Hosting
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Mobile-first responsive design</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>WhatsApp room/order bookings</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>100% full source code ownership</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/services/website-development"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <span>Explore 4 Tiers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Flagship 2: Google Maps & Local SEO */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800">
                      Local 3-Pack
                    </span>
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-sans">
                    Google Business &amp; Maps
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Dominate local search walk-ins and phone calls across all 47 counties.
                  </p>

                  <div className="my-4 py-2 border-y border-slate-200/60">
                    <div className="font-mono font-black text-xl text-slate-900">
                      From {formatPrice(300)}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      One-time setup &amp; optimization
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Verified Google Maps GPS pin</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Product catalog &amp; photo showcase</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>5-Star customer review generation</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/services/google-my-business"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <span>View GMB Tiers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Flagship 3: High-Intent Paid Ads */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800">
                      Targeted Traffic
                    </span>
                    <Zap className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-sans">
                    Google &amp; Meta Ads
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Route active ready buyers directly into your WhatsApp sales funnel.
                  </p>

                  <div className="my-4 py-2 border-y border-slate-200/60">
                    <div className="font-mono font-black text-xl text-slate-900">
                      From {formatPrice(2500)} <span className="text-xs font-sans font-normal text-slate-500">/ mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Campaign setup &amp; weekly optimization
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Direct-to-WhatsApp click ads</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Google search intent targeting</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Transparent weekly ROI reporting</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/services/google-ads"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <span>View Ad Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Flagship 4: Social Video & Content Posting */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-800">
                      20–30 Videos/mo
                    </span>
                    <TrendingUp className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-sans">
                    Social Video Posting
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Consistent TikTok, Instagram &amp; Facebook presence for brand trust.
                  </p>

                  <div className="my-4 py-2 border-y border-slate-200/60">
                    <div className="font-mono font-black text-xl text-slate-900">
                      {formatPrice(4500)} <span className="text-xs font-sans font-normal text-slate-500">/ mo</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Scripted, edited &amp; posted monthly
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700 mb-6">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>20–30 short-form reels/videos</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Captions, hashtags &amp; scheduling</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero staff time required</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/services/social-media"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <span>View Video Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Dedicated Remote Virtual Assistance Spotlight */}
            <div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-[#1d273b] via-[#1b2234] to-[#252b42] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-700/50">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-extrabold uppercase tracking-wider border border-cyan-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Remote Operations & Staffing</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  Executive & Technical Virtual Assistants
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Free up 20+ hours every week. Pre-vetted, English-fluent dedicated assistants for customer service, inbox zero, calendar scheduling, CRM maintenance, and e-commerce order fulfillment.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-cyan-200">
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" /> 20 hrs/wk from {formatPrice(25000)}/mo</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" /> 40 hrs/wk full-time from {formatPrice(45000)}/mo</span>
                  <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-brand-cyan shrink-0" /> 48-hr replacement guarantee</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
                <Link
                  to="/services/virtual-assistance"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Explore VA Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={createWhatsAppUrl("Hello Haxor MTC, I want to hire a dedicated Virtual Assistant for our business operations.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Bottom CTA for Services Page */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#373656] font-heading">
                  Need a full breakdown of all services and transparent packages?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Explore full deliverables, custom tier options, and direct WhatsApp order funnels in our catalog.
                </p>
              </div>
              <Link
                to="/services"
                className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition flex items-center gap-2 shadow-xs"
              >
                <span>View Full Service Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* DEDICATED ZOHO PLATFORM SHOWCASE (MAXIMIZING GOOGLE SEARCH CONSOLE TOP QUERIES) */}
        <section className="py-20 bg-gradient-to-b from-slate-900 via-[#182032] to-[#121927] text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: High-Intent Zoho Pitch */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-extrabold uppercase tracking-wider border border-cyan-500/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Certified Zoho Consulting &amp; Implementation Partner</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                  Automate Sales, Accounts &amp; Operations with Zoho One.
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Eliminate disconnected spreadsheets and manual data entry. As certified Zoho implementation consultants, we architect, customize, and integrate the full Zoho ecosystem for growing businesses across Kenya and international markets.
                </p>

                {/* 4 Core Zoho Solution Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-sm text-cyan-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      Zoho CRM Pipelines
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Lead scoring, automated assignment, deal stages, and WhatsApp chat triggers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-sm text-cyan-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      Zoho Books Accounting
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      KRA eTIMS compliant invoicing, localized VAT, and automated bank reconciliation.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-sm text-cyan-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      Zoho Desk Support
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Omnichannel ticketing across email, WhatsApp, and phone with automated SLAs.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <h4 className="font-bold text-sm text-cyan-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      Deluge Custom Code
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Bespoke webhooks, multi-app sync, and executive dashboards in Zoho Analytics.
                    </p>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <Link
                    to="/services/zoho"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Explore Zoho Consulting</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={createWhatsAppUrl("Hello Haxor MTC, I want to consult with your Zoho Experts regarding Zoho One and CRM implementation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Schedule Zoho Consultation</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Dashboard Preview */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-cyan-300 border border-cyan-500/30">
                      Live Dashboard Architecture
                    </span>
                  </div>
                  <img
                    src="/images/zoho-dashboard.jpg"
                    alt="Zoho CRM and Zoho One Executive Dashboard Interface"
                    className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-102"
                    loading="lazy"
                  />
                  <div className="p-4 bg-slate-900/90 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                    <span>Executive KPI Analytics &amp; Pipeline Visualization</span>
                    <span className="text-cyan-400 font-semibold">100% Data Ownership</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* HUB 2: Software Solutions & Systems */}
        <section id="software" className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-coral bg-coral-50 px-3 py-1 rounded-full border border-brand-coral/20">
                  Enterprise Platforms
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-recoleta tracking-tight mt-3">
                  Software Solutions &amp; Management Systems
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1 font-sans leading-relaxed">
                  Production-grade cloud POS, hotel PMS, and clinic EMR software with M-Pesa STK push and eTIMS compliance.
                </p>
              </div>

              <Link
                to="/software"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-brand-cyanDeep hover:bg-cyan-700 px-4 py-2 rounded-xl transition shadow-xs shrink-0 self-start md:self-auto"
              >
                <span>Explore All Software & Demos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3 Core Production Systems for Fast Scanning */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* 1. HaxPos Point of Sale */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-2xs group-hover:border-slate-300 transition">
                    <img
                      src="/images/pos-system.jpg"
                      alt="HaxPos Point of Sale Touchscreen Interface"
                      className="w-full h-44 object-cover object-top transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                        Touchscreen POS
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-sans">
                    HaxPos Point of Sale
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Barcode checkout, M-Pesa STK push prompt, receipt printing, and stock alerts for retail shops, cafes, and supermarkets.
                  </p>
                  
                  <ul className="my-5 space-y-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Instant M-Pesa STK push prompt</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Stock alerts &amp; cashier shift reconciliation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Works offline when internet is down</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/software/haxpos"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Explore POS &amp; Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 2. HaxOne Hospitality Suite */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-2xs group-hover:border-slate-300 transition">
                    <img
                      src="/images/hotel-booking.jpg"
                      alt="HaxOne Hospitality Suite Room Booking Engine"
                      className="w-full h-44 object-cover object-top transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                        Hotel &amp; Lodges
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-sans">
                    HaxOne Hospitality Suite
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Complete Property Management System. Visual room reservation calendar, front desk check-in, and Restaurant KOT ticketing.
                  </p>

                  <ul className="my-5 space-y-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Visual room booking calendar &amp; folios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Direct 0% commission guest reservations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Restaurant POS with kitchen ticket printers</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/software/haxone"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Explore Hotel Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3. Odoo & Zoho ERP Consulting */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-card transition flex flex-col justify-between group">
                <div>
                  <div className="relative rounded-2xl overflow-hidden mb-5 border border-slate-200 shadow-2xs group-hover:border-slate-300 transition">
                    <img
                      src="/images/zoho-dashboard.jpg"
                      alt="Zoho One and CRM Executive Dashboard"
                      className="w-full h-44 object-cover object-top transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/20">
                        Zoho &amp; Odoo ERP
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 font-sans">
                    Custom ERP Implementation
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Certified implementation and automation for Odoo &amp; Zoho. Connect warehouse inventory, accounting, and multi-branch sales.
                  </p>

                  <ul className="my-5 space-y-2 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>KRA eTIMS automated invoice integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Multi-warehouse inventory &amp; logistics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Legacy data migration from Excel/QuickBooks</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/software/odoo"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition shadow-xs"
                >
                  <span>Explore ERP Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Bottom CTA for Software Page */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#373656] font-heading">
                  Looking for custom POS hardware setups, ERP, or hospitality software?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  We deploy turnkey systems with M-Pesa STK push, eTIMS compliance, and staff training.
                </p>
              </div>
              <Link
                to="/software"
                className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-cyanDeep hover:bg-cyan-700 transition flex items-center gap-2 shadow-xs"
              >
                <span>Explore All 6 Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* 6-Step Web & Tech Delivery Process (Inspired by Ace Solution Africa) */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-100 text-brand-cyanDeep inline-block mb-3">
                Proven Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our 6-Step Delivery Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Predictable, milestone-driven execution designed to launch your website or software on time and within budget.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-bold shadow-xs">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Transparent Milestone Schedule: 30% Start → 40% Design → 30% Launch</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEVELOPMENT_PROCESS.map((proc, idx) => (
                <div 
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-card transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-2xs text-brand-cyanDeep font-extrabold font-mono flex items-center justify-center text-sm mb-4">
                      {proc.step}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                      {proc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/why-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition"
              >
                <span>Learn More About Our Methodology & Guarantees</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Custom Quote & Bundle Calculator */}
        <QuoteCalculator />

        {/* Why Choose Haxor MTC Trust Pillars */}
        <WhyChooseUs />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Direct Contact Section */}
        <ContactSection />

      </main>

      {/* Full Footer */}
      <Footer />

      {/* Floating WhatsApp Support Button (Desktop/Tablet) */}
      <FloatingWhatsApp />

      {/* Sticky Mobile Conversion Bar (Smartphones) */}
      <MobileBottomBar />
    </div>
  );
}
