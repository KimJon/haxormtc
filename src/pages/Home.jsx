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
  ExternalLink,
  Monitor
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl, DEVELOPMENT_PROCESS } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import BrandLogo from '../components/BrandLogo';
import CurrencySelector from '../components/CurrencySelector';
import TrustSection from '../components/TrustSection';
import BusinessKitsShowcase from '../components/BusinessKitsShowcase';

export default function Home() {
  const { formatPrice, currency, isAfrica } = useCurrency();
  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am on haxormtc.com and would like to speak with a specialist."
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Human-Centric Hero Section */}
        <section className="relative pt-12 pb-12 md:pt-16 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-xs font-bold text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-cyanDeep" />
              <span>Technology Partner, AI Automation & Software Engineering</span>
              <span className="text-slate-300">•</span>
              <span className="text-brand-cyanDeep font-extrabold">Milestone Delivery</span>
            </div>

            <h1 className="hero-recoleta tracking-tight">
              We Build Scalable Software, Deploy AI Automation & Deliver Enterprise Technology Consulting.
            </h1>

            <p className="body-figtree max-w-2xl mx-auto leading-relaxed text-slate-600">
              From bespoke software development, AI workflow automation, and certified Odoo/Zoho ERP implementations, to high-converting websites and industry management systems.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                <span>WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs flex items-center justify-center gap-2 transition"
              >
                <span>Explore Solutions & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Proof points */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                Enterprise-Grade & Regional Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanDeep" />
                100% Transparent Milestone Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-cyanDeep" />
                Odoo & Zoho Certified • AI Native
              </span>
            </div>

          </div>
        </section>

        {/* Verified Business Trust & Authenticity Section */}
        <TrustSection />

        {/* Turnkey Digital Business Kits for 40+ Industries with Real-time Search */}
        <BusinessKitsShowcase 
          limit={6} 
          showSearch={true}
          title="Turnkey Digital Business Kits for 40+ Industries"
          subtitle="Search your trade or sector below to explore the complete 4-pillar digital stack (Presence, Sales, Operations, Growth) engineered for businesses across all 47 counties and international markets."
        />

        {/* HUB 1: Digital Marketing & Web Presence */}
        <section id="services" className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-3 py-1 rounded-full border border-brand-cyan/20">
                  Growth & Web Hub
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  Digital Marketing & Web Packages
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  Each service has a dedicated landing page with complete deliverables, transparent rates, and direct WhatsApp booking.
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

            {/* 8 Curated Marketing & Web Cards with dedicated links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Website Development */}
              <div className="p-6 rounded-2xl bg-slate-50 border-2 border-brand-cyan/40 flex flex-col justify-between shadow-xs hover:shadow-card transition group relative">
                <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-brand-cyanDeep text-white text-[10px] font-extrabold tracking-wider uppercase shadow-2xs">
                  Most Requested
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-cyan-100 text-brand-cyanDeep">
                      Turnkey Web
                    </span>
                    <Monitor className="w-5 h-5 text-brand-cyanDeep" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Custom Website Development</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Custom websites for Kenyan businesses. <strong>Starter ({formatPrice(25000)})</strong>, <strong>Business ({formatPrice(45000)})</strong>, <strong>Premium ({formatPrice(85000)})</strong> & <strong>Landing Page ({formatPrice(7000)})</strong>.
                  </p>
                  <div className="my-3 py-2 border-y border-slate-100">
                    <div className="font-mono font-extrabold text-xl text-slate-900">
                      From {formatPrice(7000)} <span className="text-xs font-sans font-normal text-slate-500">to {formatPrice(85000)}</span>
                    </div>
                    <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>30% Start → 40% Design → 30% Launch</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/services/website-development"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-brand-cyanDeep text-white hover:bg-cyan-700 flex items-center justify-center gap-1.5 transition shadow-xs"
                >
                  <span>Explore All 4 Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 2: Social Media */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-cyan-100 text-brand-cyanDeep">
                      20–30 Videos/mo
                    </span>
                    <TrendingUp className="w-5 h-5 text-brand-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Social Video Posting</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Scripted, edited, and scheduled short-form videos posted across TikTok, Instagram, and Facebook.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(4000)} <span className="text-xs font-sans font-normal text-slate-500">/ month</span>
                  </div>
                </div>
                <Link
                  to="/services/social-media"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Package & Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 3: Meta Ads */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-green-100 text-green-800">
                      WhatsApp Ads
                    </span>
                    <Zap className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Meta Ads Placement</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Targeted Facebook & Instagram ads that route ready Kenyan buyers directly into your WhatsApp.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(4200)} <span className="text-xs font-sans font-normal text-slate-500">/ month</span>
                  </div>
                </div>
                <Link
                  to="/services/meta-ads"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Package & Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 4: Google Ads */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      High Intent
                    </span>
                    <Search className="w-5 h-5 text-brand-goldDeep" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Google Ads PPC</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Target customers actively typing search queries to buy your product or emergency service right now.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(2500)} <span className="text-xs font-sans font-normal text-slate-500">/ month</span>
                  </div>
                </div>
                <Link
                  to="/services/google-ads"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Package & Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 5: GMB */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      Local 3-Pack
                    </span>
                    <MapPin className="w-5 h-5 text-brand-coral" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Google Business Profile</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Google Maps GPS pin, opening hours, product catalog, and 5-star review setup for local walk-ins.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(300)} <span className="text-xs font-sans font-normal text-slate-500">starting</span>
                  </div>
                </div>
                <Link
                  to="/services/google-my-business"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Tiers & Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 6: Business Email */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      Outlook & Workspace
                    </span>
                    <Mail className="w-5 h-5 text-brand-cyanDeep" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Business Email Setup</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Custom domain email (name@yourcompany.com) with SPF/DKIM DNS anti-spam protection.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(700)} <span className="text-xs font-sans font-normal text-slate-500">starting</span>
                  </div>
                </div>
                <Link
                  to="/services/email-management"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 7: Local SEO */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      Organic Rank
                    </span>
                    <Search className="w-5 h-5 text-brand-green" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Search Engine Optimization</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Rank higher on Google organically for Kenyan search terms and get free monthly customer leads.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(3000)} <span className="text-xs font-sans font-normal text-slate-500">starting</span>
                  </div>
                </div>
                <Link
                  to="/services/seo"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Packages</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Card 8: ICT & Training */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-card transition group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                      Advisory
                    </span>
                    <BookOpen className="w-5 h-5 text-brand-goldDeep" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">ICT Consulting & Training</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    1-on-1 strategic infrastructure audits and practical 10-session digital literacy staff training.
                  </p>
                  <div className="my-4 font-mono font-extrabold text-2xl text-slate-900">
                    {formatPrice(3000)} <span className="text-xs font-sans font-normal text-slate-500">/ session</span>
                  </div>
                </div>
                <Link
                  to="/services/ict-consulting"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-1.5 transition"
                >
                  <span>View Consulting</span>
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

        {/* HUB 2: Software Solutions & Systems */}
        <section id="software" className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="max-w-3xl">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-coral bg-coral-50 px-3 py-1 rounded-full border border-brand-coral/20">
                  Enterprise Platforms
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                  Software Solutions & Management Systems
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-1">
                  Robust, M-Pesa STK push enabled, and eTIMS ready software systems built for real operations in Kenya.
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

            {/* 6 Software Cards linking to dedicated landing pages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* 1. HaxPos */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-100 text-brand-cyanDeep">
                      Universal POS
                    </span>
                    <Store className="w-6 h-6 text-brand-cyanDeep" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">HaxPos Point of Sale</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Barcode checkout, M-Pesa STK push prompt, receipt printing, and stock alerts for Cafes, Restaurants, Liquor Stores, Hardware, and Retail Shops.
                  </p>
                  
                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Direct M-Pesa STK push to customer phone</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Real-time stock alerts & shift cash reconciliation</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Works offline when internet is temporarily down</div>
                  </div>
                </div>

                <Link
                  to="/software/haxpos"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-brand-cyanDeep text-white hover:bg-cyan-700 flex items-center justify-center gap-2 transition"
                >
                  <span>View System & Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 2. ElitteGo */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-coral-50 text-brand-coral border border-brand-coral/20">
                      Localized Regional Service • Kenya & East Africa
                    </span>
                    <Truck className="w-6 h-6 text-brand-coral" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">ElitteGo Delivery Platform</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Specialized turnkey multi-vendor ordering and delivery software ecosystem for regional logistics fleets in Kenya & East Africa. Customer app, merchant portal, and driver live GPS dispatch for Food, Drinks, Medicine, and Groceries.
                  </p>

                  {/* QR Code Demo Banner */}
                  <div className="my-4 p-3 rounded-2xl bg-cyan-50 border border-brand-cyan/30 flex items-center gap-3">
                    <img 
                      src="/elittego-qr.png" 
                      alt="Scan ElitteGo QR Demo" 
                      className="w-12 h-12 rounded-lg bg-white p-1 border border-slate-200 shrink-0 object-contain shadow-2xs"
                    />
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">Live Smartphone App Demo</div>
                      <div className="text-[11px] text-slate-600">Scan QR code to test rider & customer flow</div>
                    </div>
                  </div>

                  <div className="mb-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Customer web/mobile ordering app</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Merchant catalog & driver GPS dispatch app</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Automated M-Pesa payments & commission splits</div>
                  </div>
                </div>

                <Link
                  to="/software/elittego"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition"
                >
                  <span>View Platform & Scan QR Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 3. HaxOne */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-50 text-brand-goldDeep">
                      Hospitality PMS
                    </span>
                    <Hotel className="w-6 h-6 text-brand-goldDeep" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">HaxOne Hospitality Suite</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Complete Property Management System for Hotels, Lodges, and Resorts. Visual room calendar, front desk check-in, and Kitchen Order Ticket (KOT) POS.
                  </p>

                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Visual room booking calendar & guest folios</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Restaurant POS with KOT kitchen ticket printers</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Channel Manager sync (Booking.com & Airbnb)</div>
                  </div>
                </div>

                <Link
                  to="/software/haxone"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition"
                >
                  <span>View Hospitality Suite</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 4. HMS */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-100 text-brand-cyanDeep">
                      Healthcare ERP
                    </span>
                    <Activity className="w-6 h-6 text-brand-cyanDeep" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Hospital Management System</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Digital health infrastructure. Electronic Health Records (EHR), OPD triage, IPD bed tracking, pharmacy dispensary, lab orders, and insurance claims.
                  </p>

                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Paperless patient doctor consultation notes</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Pharmacy batch stock & lab test results</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Insurance, NHIF/SHIF, and M-Pesa billing</div>
                  </div>
                </div>

                <Link
                  to="/software/hospital-system"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition"
                >
                  <span>View Hospital System</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 5. Odoo Expert */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-purple-50 text-purple-700">
                      Odoo ERP Partner
                    </span>
                    <Database className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Odoo ERP Consulting</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Implementation, migration, and custom module programming for Odoo Community and Enterprise. Connect your sales, warehouse inventory, and accounting.
                  </p>

                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> KRA eTIMS invoice synchronization</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Multi-warehouse inventory and logistics</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Legacy data migration (Excel, QuickBooks, Sage)</div>
                  </div>
                </div>

                <Link
                  to="/software/odoo"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition"
                >
                  <span>View Odoo Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 6. Zoho Expert */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-amber-50 text-brand-goldDeep">
                      Zoho Automation
                    </span>
                    <Cpu className="w-6 h-6 text-brand-goldDeep" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">Zoho Suite Consulting</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Setup and Deluge workflow automation for Zoho CRM, Zoho Books, Zoho Desk, and Zoho One. Eliminate repetitive data entry and automate sales pipelines.
                  </p>

                  <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Zoho CRM sales blueprints and lead scoring</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Zoho Books localized VAT accounting</div>
                    <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-brand-green shrink-0" /> Custom Deluge scripts and webhook integration</div>
                  </div>
                </div>

                <Link
                  to="/software/zoho"
                  className="w-full py-3 px-5 rounded-xl text-xs sm:text-sm font-bold text-center bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2 transition"
                >
                  <span>View Zoho Services</span>
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
