import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  Smartphone, 
  CreditCard, 
  Store,
  Building2,
  Utensils,
  Activity
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export default function Hero() {
  const heroWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I want to discuss scaling my business with your digital marketing and software systems."
  );

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-xs font-bold text-slate-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-coral animate-pulse" />
            <span>Kenyan SME & Enterprise Growth Suite</span>
            <span className="text-slate-300">•</span>
            <span className="text-brand-cyanDeep font-extrabold">Turnkey Tech & Marketing</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Stop Losing Customers. <br />
            Scale Every Sale with <span className="text-brand-cyanDeep">High-ROI Marketing</span> & <span className="text-brand-coral">Smart Tech</span>.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            From <strong>20–30 viral videos/month</strong> and <strong>Ksh. 7,000 websites</strong> (inclusive of 1-year free domain & hosting) to our flagship <strong>HaxPos</strong>, <strong>ElitteGo Delivery</strong>, and <strong>ERP systems</strong>.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-extrabold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Order via WhatsApp (0729 915 459)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-bold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <span>Build Custom Bundle</span>
              <span className="text-xs bg-brand-coral/10 text-brand-coral px-2 py-0.5 rounded font-mono font-bold">
                10% Off
              </span>
            </a>
          </div>

          {/* Trust Proof Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              100% Upfront Transparent Pricing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-cyanDeep" />
              24–48hr Website Turnaround
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-coral" />
              M-Pesa STK & eTIMS Integration
            </span>
          </div>
        </div>

        {/* Clean, High-End Revenue Engine Architecture */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-card">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-coral inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan inline-block" />
                  <span className="text-xs font-mono font-semibold text-slate-500 ml-2">haxormtc.com • Conversion Architecture</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                  The End-to-End Haxor Revenue Architecture
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono bg-cyan-50 px-3 py-1 rounded-lg border border-brand-cyan/20 text-brand-cyanDeep font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                Live SME Ecosystem
              </div>
            </div>

            {/* 4 Pipeline Stages */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-cyan transition group">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono text-[10px] uppercase text-brand-cyanDeep font-bold">01. Traffic</span>
                  <TrendingUp className="w-4 h-4 text-brand-cyanDeep" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Targeted Leads</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  20–30 videos/mo (FB, TikTok, IG) + Google & Meta Ads targeting ready buyers.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Socials</span>
                  <span className="text-brand-cyanDeep font-bold">Ksh. 4,000/mo</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-coral transition group">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono text-[10px] uppercase text-brand-coral font-bold">02. Presence</span>
                  <Smartphone className="w-4 h-4 text-brand-coral" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">High-Speed Web</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fast landing page with 1-year free domain, cloud hosting & WhatsApp triggers.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Turnkey</span>
                  <span className="text-brand-coral font-bold">Ksh. 7,000</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-goldDeep transition group">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono text-[10px] uppercase text-brand-goldDeep font-bold">03. Checkout</span>
                  <CreditCard className="w-4 h-4 text-brand-goldDeep" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">HaxPos Point of Sale</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Universal POS for retail, bars, cafes & hardware with instant M-Pesa STK push.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Payments</span>
                  <span className="text-brand-goldDeep font-bold">M-Pesa STK</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-green transition group">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-mono text-[10px] uppercase text-brand-green font-bold">04. Logistics</span>
                  <Zap className="w-4 h-4 text-brand-green" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Delivery & ERP</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ElitteGo delivery, HaxOne hospitality, and certified Odoo & Zoho workflow automation.
                </p>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500">Operations</span>
                  <span className="text-brand-green font-bold">100% Automated</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Sectors Served Trust Ribbon */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-4">
            Powering Businesses & Enterprises Across Kenya
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 text-xs text-slate-700 font-medium">
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <Utensils className="w-3.5 h-3.5 text-brand-cyanDeep" />
              Cafes & Restaurants
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <Store className="w-3.5 h-3.5 text-brand-coral" />
              Retail & Hardware Stores
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-brand-goldDeep" />
              Hotels & Lodges (HaxOne)
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-brand-coral" />
              Hospitals & Clinics
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-brand-green" />
              Delivery & Logistics (ElitteGo)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
