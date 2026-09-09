import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  MapPin, 
  Store, 
  TrendingUp, 
  Globe, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';

export const PORTFOLIO_STATS = [
  {
    number: '200+',
    label: 'Businesses Added on Google',
    desc: 'Google Business Profiles claimed, verified & ranked in Google Maps local 3-pack.',
    icon: MapPin,
    color: 'text-brand-coral',
    bg: 'bg-coral-50 border-brand-coral/20',
  },
  {
    number: '30+',
    label: 'Live Websites Built',
    desc: 'Custom, high-speed commercial websites launched for Kenyan hotels, SMEs & corporations.',
    icon: Globe,
    color: 'text-brand-cyanDeep',
    bg: 'bg-cyan-50 border-brand-cyan/20',
  },
  {
    number: '10+',
    label: 'Enterprise POS Installations',
    desc: 'HaxPos touchscreen & barcode checkout systems deployed in active stores & restaurants.',
    icon: Store,
    color: 'text-brand-goldDeep',
    bg: 'bg-amber-50 border-brand-gold/30',
  },
  {
    number: 'Ksh 100k+',
    label: 'Profitable Ad Spend Managed',
    desc: 'Targeted Meta (FB & IG) and Google Search ads generating direct WhatsApp sales for clients.',
    icon: TrendingUp,
    color: 'text-brand-green',
    bg: 'bg-emerald-50 border-brand-green/20',
  },
];

export const CLIENT_WEBSITES = [
  {
    name: 'The 818 Hotel',
    domain: 'the818hotel.com',
    url: 'https://the818hotel.com',
    category: 'Hospitality & Accommodation',
    tagline: 'Modern hotel rooms, restaurant dining, bar & event conference facilities.',
    tags: ['Direct Room Booking', 'Mobile-First Design', 'WhatsApp Reservation', 'Google Maps SEO'],
    badge: 'Hotel & Events',
  },
  {
    name: 'Stem Hotel',
    domain: 'stemhotel.co.ke',
    url: 'https://stemhotel.co.ke',
    category: 'Hotel & Conference Resort',
    tagline: 'Premier Kenyan accommodation, luxury dining, executive meeting halls & weddings.',
    tags: ['Multi-Page Web Architecture', 'Room Showcase', 'M-Pesa Inquiries', 'Speed Optimized'],
    badge: 'Hospitality',
  },
  {
    name: 'Mihe Works',
    domain: 'miheworks.co.ke',
    url: 'https://miheworks.co.ke',
    category: 'Industrial Engineering & Construction',
    tagline: 'Commercial fabrication, construction contracting, equipment maintenance & repairs.',
    tags: ['Enterprise Web Architecture', 'Project Portfolio', 'Quote Request Form', 'Business Email'],
    badge: 'Engineering',
  },
  {
    name: 'Eco Septic Ventures',
    domain: 'ecosepticventures.com',
    url: 'https://ecosepticventures.com',
    category: 'Environmental & Sanitation Engineering',
    tagline: 'Bio-digester septic installation, modern wastewater treatment & environmental services.',
    tags: ['Lead Capture Funnel', 'Service Showcase', 'On-Page SEO', 'Click-to-Call'],
    badge: 'Environmental',
  },
  {
    name: 'Prom Taani',
    domain: 'promtaani.com',
    url: 'https://promtaani.com',
    category: 'Community & Business Directory',
    tagline: 'Grassroots urban directory connecting neighborhood businesses with local buyers.',
    tags: ['Interactive Directory', 'Vendor Search', 'Social Media Links', 'Mobile Responsive'],
    badge: 'Directory',
  },
  {
    name: 'Nyiro Treasures',
    domain: 'nyirotreasures.com',
    url: 'https://nyirotreasures.com',
    category: 'Travel, Safari & Heritage',
    tagline: 'Northern Kenya cultural expeditions, wildlife eco-tours & indigenous arts.',
    tags: ['Safari Itineraries', 'High-Res Galleries', 'WhatsApp Tour Booking', 'Analytics'],
    badge: 'Tours & Safari',
  },
];

export default function PortfolioSection() {
  const whatsAppPortfolioUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I viewed your client portfolio on haxormtc.com and would like to discuss building our website and business system."
  );

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Track Record in Kenya</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#373656] tracking-tight font-heading leading-tight">
            Real Work. Real Businesses. Real Results.
          </h2>
          
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed font-sans">
            We do not just talk about technology — we deploy systems and launch websites that actively generate revenue for Kenyan enterprises.
          </p>
        </div>

        {/* 4 Large Proof Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Live Client Websites Showcase */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep">
                Featured Client Websites
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#373656] font-heading mt-1">
                Recent Websites Designed & Deployed
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Over 30+ custom websites engineered with 99.9% uptime, mobile responsiveness, and SEO optimization.
              </p>
            </div>

            <a
              href={whatsAppPortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-cyanDeep hover:text-cyan-800 transition"
            >
              <span>Build a website like these</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLIENT_WEBSITES.map((client, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-50 text-brand-cyanDeep border border-brand-cyan/20">
                      {client.badge}
                    </span>
                    <Globe className="w-4 h-4 text-slate-400 group-hover:text-brand-cyanDeep transition" />
                  </div>

                  <h4 className="text-xl font-extrabold text-[#373656] font-heading">
                    {client.name}
                  </h4>

                  <div className="text-xs font-mono font-bold text-brand-cyanDeep mt-0.5">
                    {client.domain}
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {client.tagline}
                  </p>

                  <div className="my-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {client.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
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
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200 hover:border-slate-900 flex items-center justify-center gap-1.5 transition duration-200"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio CTA Callout */}
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-slate-900 via-[#373656] to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Ready to Win More Clients?
            </span>
            <h4 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Launch Your High-Converting Website or POS System Today
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Join 30+ businesses and 200+ local brands who trust Haxor MTC for web engineering, local Google ranking, and business automation.
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
              to="/portfolio"
              className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
