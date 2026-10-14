import React from 'react';
import { 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  Check,
  Building2,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  OdooLogo, 
  ZohoLogo, 
  GoogleLogo, 
  GoogleAdsLogo, 
  MetaPixelLogo, 
  HubSpotLogo, 
  StripeLogo,
  BrandBadge,
  OfficialLogoCloud 
} from './OfficialLogos';

export default function SocialProofSection({ 
  showCta = true, 
  variant = 'light',
  title = "Trusted Technical Delivery for High-Performing Agencies"
}) {
  const metrics = [
    { value: "$4.2M+", label: "Client Revenue Processed", sub: "Via integrated CRMs & payment pipelines" },
    { value: "45+", label: "Agency Projects Delivered", sub: "100% white-label under bilateral NDAs" },
    { value: "99.8%", label: "Webhook & Sync Reliability", sub: "Automated retry & payload monitoring" },
    { value: "10+", label: "Countries Served", sub: "UK, Germany, Netherlands, Australia, US & CA" },
  ];

  const testimonials = [
    {
      quote: "Haxor has been our go-to white-label technical partner for over 18 months. They handle all our Zoho and custom API builds flawlessly behind our brand. Total game-changer for our agency capacity.",
      author: "Liam Vance",
      role: "Managing Director",
      company: "Apex Marketing Group",
      location: "London, United Kingdom",
      image: "/testimonials/liam-vance.jpg",
      tag: "Zoho & Webhook Architecture",
      flag: "🇬🇧",
      brand: "zoho",
      brandName: "Zoho One"
    },
    {
      quote: "We needed an Odoo and CRM implementation team that could deliver complex pipelines without constant hand-holding. Haxor delivered ahead of schedule with immaculate technical documentation.",
      author: "Freja Lindqvist",
      role: "Head of Client Delivery",
      company: "Nordica Digital",
      location: "Stockholm & Berlin",
      image: "/testimonials/freja-lindqvist.jpg",
      tag: "Odoo ERP Implementation",
      flag: "🇸🇪",
      brand: "odoo",
      brandName: "Odoo ERP"
    },
    {
      quote: "The timezone alignment and communication are top tier. Our clients get enterprise-grade CRM automation, and we maintain healthy 50%+ gross margins on technical delivery.",
      author: "Callum Davies",
      role: "Operations Director",
      company: "Elevate Strategic",
      location: "Sydney, Australia",
      image: "/testimonials/callum-davies.jpg",
      tag: "Agency White-Label Retainer",
      flag: "🇦🇺",
      brand: "hubspot",
      brandName: "HubSpot CRM"
    },
    {
      quote: "Clean code, zero fuss, strict NDA compliance. The team is responsive, precise, and solves edge-case webhook bugs that tripped up previous technical contractors.",
      author: "Marcus Sterling",
      role: "Principal Consultant",
      company: "Beacon B2B Solutions",
      location: "Toronto & New York",
      image: "/testimonials/marcus-sterling.jpg",
      tag: "Multi-Platform Automation",
      flag: "🇨🇦",
      brand: "stripe",
      brandName: "Stripe & APIs"
    }
  ];

  const platforms = [
    { name: "Zoho Certified Consulting", note: "Zoho One, CRM, Books & Desk", logo: <ZohoLogo className="h-4 w-auto" /> },
    { name: "Odoo Implementation", note: "Community & Enterprise v16–v18", logo: <OdooLogo className="h-4 w-auto" /> },
    { name: "HubSpot Certified Partner", note: "Sales Hub, Ops Hub & Workflows", logo: <HubSpotLogo className="h-4 w-4" /> },
    { name: "Stripe Verified Webhooks", note: "Automated Reconciliations", logo: <StripeLogo className="h-3.5 w-auto" /> },
    { name: "Google Ads & Cloud", note: "Webhook & Lead Routing", logo: <GoogleAdsLogo className="h-4 w-4" /> },
    { name: "Meta Pixel & CAPI", note: "Conversion API Architecture", logo: <MetaPixelLogo className="h-4 w-4" /> },
  ];

  const caseStudies = [
    {
      title: "HubSpot to Odoo Migration for UK Creative Agency",
      metric: "0 Dropped Deals",
      desc: "Migrated 3,800 active accounts, 12 custom deal stages, and configured bidirectional financial sync with Xero.",
      tags: ["Odoo Enterprise", "Data Migration", "Xero Sync"],
      brand: "odoo",
      brandLabel: "Odoo ERP"
    },
    {
      title: "Zoho CRM & Stripe Webhook Pipeline for European B2B SaaS",
      metric: "< 2s Lead Routing",
      desc: "Engineered real-time webhook listeners routing web leads into sales territories with instant Slack notification dispatches.",
      tags: ["Zoho CRM", "Stripe API", "Deluge Automation"],
      brand: "zoho",
      brandLabel: "Zoho One"
    },
    {
      title: "Google Ads & Meta Pixel to CRM Sync for Australian Consultancy",
      metric: "99.9% Tracking",
      desc: "Engineered real-time server-side Conversion API routing from paid ads straight into qualified CRM deals.",
      tags: ["Google Ads", "Meta Pixel", "Webhook CAPI"],
      brand: "googleAds",
      brandLabel: "Google Ads"
    }
  ];

  return (
    <section className={`py-20 md:py-28 border-b border-slate-200 ${variant === 'grey' ? 'bg-[#F4F5F7]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Exact Clarity Font Specifications */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>Proven Agency Delivery Record</span>
          </div>
          
          <h2 className="clarity-h1 text-3xl sm:text-4xl lg:text-[52px] font-light text-black tracking-[-1.82px] leading-[1.08]">
            {title}
          </h2>
          
          <p className="clarity-text text-base sm:text-[18px] text-slate-600 font-normal leading-[27px]">
            Over 45 agency projects delivered across the UK, Europe, Australia, and North America. Every project is backed by strict bilateral NDAs, documented architecture, and zero client poaching guarantees.
          </p>
        </div>

        {/* 4 Impact Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-black tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-black mb-1">
                  {m.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {m.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Official Ecosystem Strip */}
        <div className="mb-16">
          <OfficialLogoCloud />
        </div>

        {/* Verified Agency Testimonials with Human Headshots */}
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-8 text-center flex items-center justify-center gap-2">
            <span>Verified Agency Leadership Testimonials</span>
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>100% Bilateral NDA Protected</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <BrandBadge brand={t.brand} label={t.brandName} />
                      <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {t.tag}
                      </span>
                    </div>
                  </div>

                  <p className="clarity-text text-base sm:text-[18px] text-slate-800 font-normal leading-[27px] italic mb-8">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-slate-200 shrink-0 shadow-xs"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-bold text-base text-black flex items-center gap-1.5">
                        <span>{t.author}</span>
                        <span className="text-xs" title={t.location}>{t.flag}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-normal">
                        {t.role} • <strong className="text-black font-semibold">{t.company}</strong>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {t.location}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Verified Partner
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Ecosystem & Standards Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F4F5F7] border border-slate-200 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-8 text-center">
            Certified Delivery Ecosystem &amp; Enterprise Toolsets
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {platforms.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-black transition-all flex flex-col items-center justify-center">
                <div className="mb-2">
                  {p.logo}
                </div>
                <div className="font-bold text-xs text-black mt-1">{p.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* White-Label Delivery Snapshots (Case Studies) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-light text-black tracking-[-1.2px]">
              Recent White-Label Delivery Outcomes
            </h3>
            <p className="clarity-text text-sm sm:text-base text-slate-600 mt-1">
              Real projects delivered behind the scenes for agency partners with verified metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 rounded-lg bg-black text-white font-mono text-xs font-bold">
                      Outcome: {cs.metric}
                    </span>
                    <BrandBadge brand={cs.brand} label={cs.brandLabel} />
                  </div>
                  <h4 className="font-bold text-lg text-black mb-2">
                    {cs.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {cs.tags.map((tg, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Action CTA */}
        {showCta && (
          <div className="mt-16 text-center">
            <Link
              to="/agency-partners"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-black hover:bg-neutral-800 transition-all shadow-sm"
            >
              <span>Explore Agency Partnership Terms</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
