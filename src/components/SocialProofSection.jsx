import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Star, 
  Layers, 
  TrendingUp, 
  Building2, 
  ArrowRight, 
  Lock, 
  Check 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialProofSection({ 
  showCta = true, 
  variant = 'light',
  title = "Trusted Technical Delivery for High-Performing Agencies"
}) {
  const metrics = [
    { value: "$4.2M+", label: "Client Revenue Processed", sub: "Via integrated CRMs & payment pipelines" },
    { value: "45+", label: "Agency Projects Delivered", sub: "100% white-label under bilateral NDAs" },
    { value: "99.8%", label: "Webhook & Sync Reliability", sub: "Automated retry & payload monitoring" },
    { value: "10+", label: "Countries Served", sub: "UK, Germany, Netherlands, Australia, US" },
  ];

  const testimonials = [
    {
      quote: "Haxor has been our go-to white-label technical partner for over 18 months. They handle all our Zoho and custom API builds flawlessly behind our brand. Total game-changer for our agency capacity.",
      author: "Marcus Vance",
      role: "Technical Director",
      company: "Apex Marketing",
      location: "London, United Kingdom",
      tag: "Zoho & Webhook Architecture"
    },
    {
      quote: "We needed an Odoo and CRM implementation team that could deliver complex pipelines without constant hand-holding. Haxor delivered ahead of schedule with immaculate technical documentation.",
      author: "Elena Lindqvist",
      role: "Operations Lead",
      company: "Nordica Digital",
      location: "Stockholm & Berlin",
      tag: "Odoo ERP Implementation"
    },
    {
      quote: "The timezone alignment and communication are top tier. Our clients get enterprise-grade CRM automation, and we maintain healthy 50%+ gross margins on technical delivery.",
      author: "Julian Hayes",
      role: "Managing Partner",
      company: "Elevate Strategic",
      location: "Sydney, Australia",
      tag: "Agency White-Label Retainer"
    },
    {
      quote: "Clean code, zero fuss, strict NDA compliance. The team is responsive, precise, and solves edge-case webhook bugs that tripped up previous technical contractors.",
      author: "David Chen",
      role: "VP of Systems",
      company: "Beacon B2B",
      location: "Toronto & New York",
      tag: "Multi-Platform Automation"
    }
  ];

  const platforms = [
    { name: "Zoho Certified Consulting", note: "Zoho One, CRM, Books & Desk" },
    { name: "Odoo Implementation", note: "Community & Enterprise v16–v18" },
    { name: "HubSpot Certified Partner", note: "Sales Hub, Ops Hub & Workflows" },
    { name: "Stripe Verified Webhooks", note: "Automated Reconciliations" },
    { name: "ISO/IEC 27001 Aligned", note: "Enterprise Security Practices" },
    { name: "Bilateral NDA Protected", note: "100% IP Transfer on Handover" }
  ];

  const caseStudies = [
    {
      title: "HubSpot to Odoo Migration for UK Creative Agency",
      metric: "0 Dropped Deals",
      desc: "Migrated 3,800 active accounts, 12 custom deal stages, and configured bidirectional financial sync with Xero.",
      tags: ["Odoo Enterprise", "Data Migration", "Xero Sync"]
    },
    {
      title: "Zoho CRM & Stripe Webhook Pipeline for European B2B SaaS",
      metric: "< 2s Lead Routing",
      desc: "Engineered real-time webhook listeners routing web leads into sales territories with instant Slack notification dispatches.",
      tags: ["Zoho CRM", "Stripe API", "Deluge Automation"]
    },
    {
      title: "Multi-Location POS & Central Inventory for Australian Retailer",
      metric: "99.9% Uptime",
      desc: "Deployed unified cloud checkout across 4 store locations with automated daily purchase order generation.",
      tags: ["Cloud POS", "Inventory API", "Multi-Warehouse"]
    }
  ];

  return (
    <section className={`py-20 md:py-28 border-b border-slate-200 ${variant === 'grey' ? 'bg-[#F4F5F7]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>Proven Agency Delivery Record</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            {title}
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Over 45 agency projects delivered across the UK, Europe, Australia, and North America. Every project is backed by strict bilateral NDAs, documented architecture, and zero client poaching guarantees.
          </p>
        </div>

        {/* 4 Impact Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div 
              key={idx} 
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] font-mono tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-1">
                  {m.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {m.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Agency Testimonials */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
            What Partner Agency Directors Say
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-black">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {t.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm text-[#111111]">{t.author}</div>
                    <div className="text-xs text-slate-500">{t.role} • <strong>{t.company}</strong></div>
                  </div>
                  <div className="text-xs font-medium text-slate-400 text-right">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Ecosystem & Security Standards Strip */}
        <div className="p-8 rounded-3xl bg-[#F4F5F7] border border-slate-200 mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">
            Certified Standards, Tool Ecosystem &amp; Compliance
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {platforms.map((p, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-black mx-auto mb-2" />
                <div className="font-bold text-xs text-[#111111]">{p.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{p.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* White-Label Delivery Snapshots (Case Studies) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
              Recent White-Label Delivery Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Real projects delivered behind the scenes for agency partners with verified results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 font-mono text-xs font-extrabold text-black mb-3">
                    Outcome: {cs.metric}
                  </div>
                  <h4 className="font-bold text-base text-[#111111] mb-2">
                    {cs.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cs.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {cs.tags.map((tg, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md"
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition-all shadow-sm"
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
