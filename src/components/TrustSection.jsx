import React from 'react';
import { 
  ShieldCheck, 
  Star, 
  Store, 
  TrendingUp, 
  Monitor, 
  MapPin,
  Lock
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export default function TrustSection() {
  const { isAfrica } = useCurrency();

  const verifiableMetrics = [
    {
      number: '200+',
      label: 'Google Business Profiles',
      sub: 'Mapped and optimized for Local 3-Pack rank',
      icon: <MapPin className="w-5 h-5 text-brand-coral" />,
    },
    {
      number: '30+',
      label: 'Custom Websites Built',
      sub: 'Fast, secure, mobile-first commercial web apps',
      icon: <Store className="w-5 h-5 text-brand-cyanDeep" />,
    },
    {
      number: '10+',
      label: 'POS Systems Deployed',
      sub: 'M-Pesa STK, barcode scanners & receipt printers',
      icon: <Monitor className="w-5 h-5 text-purple-600" />,
    },
    {
      number: isAfrica ? 'Ksh 100k+' : '$2,500+',
      label: 'Paid Ads Budget Managed',
      sub: 'High-ROI Meta & Google Search PPC campaigns',
      icon: <TrendingUp className="w-5 h-5 text-brand-green" />,
    },
  ];

  const testimonials = [
    {
      quote: "Haxor MTC built our hotel website and integrated room reservations seamlessly. We receive direct guest bookings on WhatsApp daily with zero middleman commissions.",
      author: 'Operations Director',
      company: 'Stem Hotel Nakuru',
      site: 'stemhotel.co.ke',
      rating: 5,
    },
    {
      quote: "Our engineering firm needed a high-credibility business website for government tenders. Haxor delivered the complete design, SSL, and custom business emails within 5 days.",
      author: 'Managing Principal',
      company: 'Mihe Works Engineering',
      site: 'miheworks.co.ke',
      rating: 5,
    },
    {
      quote: "Setting up our Google Business Profile and local SEO with Haxor put our environmental services on page 1 of Google Maps. Inquiries increased from week one.",
      author: 'Lead Consultant',
      company: 'Eco Septic Ventures',
      site: 'ecosepticventures.com',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-brand-green/30 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Verified Track Record & Client Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#373656] font-heading tracking-tight">
            Proven Results Backed by Real Client Implementations
          </h2>
          <p className="body-figtree text-slate-600 mt-3 text-sm sm:text-base">
            We do not make empty claims. Inspect our verified client deployments, measurable growth metrics, and high delivery standards across retail, hospitality, healthcare, and engineering sectors.
          </p>
        </div>

        {/* 4 Big Verifiable Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {verifiableMetrics.map((stat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-card transition flex flex-col justify-between"
            >
              <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#373656] tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials & Verifiable Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-xs font-extrabold text-slate-900">
                  {t.author}
                </div>
                <div className="text-[11px] text-slate-600 font-medium">
                  {t.company} • <span className="font-mono text-brand-cyanDeep">{t.site}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Guarantee Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-cyanDeep/30 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-3 py-1 rounded-full">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero-Risk Milestone Billing</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#373656] font-heading">
              Our 30% → 40% → 30% Milestone Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We never demand full upfront payments. You pay 30% upon discovery and project kickoff, 40% only after approving the interactive design prototype, and the final 30% only when your system is tested and ready to launch live.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <div className="flex flex-col items-center px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-lg font-mono font-extrabold text-brand-cyanDeep">30%</span>
              <span className="text-[10px] font-bold text-slate-600 uppercase">Kickoff</span>
            </div>
            <div className="text-slate-300 font-bold hidden sm:inline">→</div>
            <div className="flex flex-col items-center px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-lg font-mono font-extrabold text-brand-coral">40%</span>
              <span className="text-[10px] font-bold text-slate-600 uppercase">Prototype</span>
            </div>
            <div className="text-slate-300 font-bold hidden sm:inline">→</div>
            <div className="flex flex-col items-center px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-lg font-mono font-extrabold text-brand-green">30%</span>
              <span className="text-[10px] font-bold text-slate-600 uppercase">Live Launch</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
