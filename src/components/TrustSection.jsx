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
import PaymentMethods from './PaymentMethods';

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

  const caseStudies = [
    {
      company: 'Stem Hotel Nakuru',
      site: 'stemhotel.co.ke',
      badge: 'Hospitality Management',
      logo: '/clients/stem-hotel.png',
      metric: '0% OTA Commissions',
      metricLabel: '100% Direct Guest Reservations',
      challenge: 'Relying on third-party portals taking 15–25% commission on every room reservation.',
      solution: 'Custom mobile-first hotel website with direct WhatsApp and M-Pesa room reservation engine.',
      quote: "We receive direct room reservations daily without paying middleman fees. The booking engine paid for itself within weeks.",
      author: 'Operations Director',
      rating: 5,
    },
    {
      company: 'Mihe Works Engineering',
      site: 'miheworks.co.ke',
      badge: 'Industrial Contracting',
      logo: '/clients/mihe-works.png',
      metric: '5-Day Delivery',
      metricLabel: 'Ready for Government Tender Bids',
      challenge: 'Urgent need for an authoritative business portal and professional emails for tender submission.',
      solution: 'Delivered turnkey responsive engineering portal, SSL certificates, project showcases, and 5 business emails in 5 days.',
      quote: "Haxor delivered the complete design, SSL, and custom business emails in 5 days. Our tender submissions were accepted without question.",
      author: 'Managing Principal',
      rating: 5,
    },
    {
      company: 'Eco Septic Ventures',
      site: 'ecosepticventures.com',
      badge: 'Environmental Sanitation',
      logo: '/clients/eco-septic-ventures.png',
      metric: '#1 Google Maps Rank',
      metricLabel: '+40% Weekly Commercial Inquiries',
      challenge: 'Zero local visibility on Google Maps when property owners and builders searched for septic solutions.',
      solution: 'Google Business Profile verification, local SEO 3-Pack rank, and high-converting click-to-call service pages.',
      quote: "Setting up our Google Business Profile and local SEO with Haxor put us on page 1 of Google Maps. Inquiries increased from week one.",
      author: 'Lead Consultant',
      rating: 5,
    },
    {
      company: 'The 818 Hotel',
      site: 'the818hotel.com',
      badge: 'Hotel & Conference',
      logo: '/clients/818-hotel.png',
      metric: '14-Day Deployment',
      metricLabel: 'Direct Dining & Event Bookings',
      challenge: 'Needed a modern digital face to showcase rooms, restaurant dining, and conference facilities to traveling guests.',
      solution: 'Full multi-page commercial website with automated WhatsApp inquiries, high-resolution galleries, and location SEO.',
      quote: "Our guests inspect room categories and reserve directly from their smartphones. Fast, elegant, and zero ongoing licensing overhead.",
      author: 'General Manager',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-brand-green/30 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>Verified Track Record &amp; Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-recoleta tracking-tight">
            Real Client Results Backed by Measurable Outcomes
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base font-sans leading-relaxed">
            We do not make empty claims. Inspect our verified client deployments, measurable growth metrics, and high delivery standards across retail, hospitality, healthcare, and engineering sectors.
          </p>
        </div>

        {/* Client Logos Strip */}
        <div className="mb-14">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by Verified Businesses Across Multiple Sectors
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-center max-w-5xl mx-auto">
            {[
              { src: '/clients/stem-hotel.png', alt: 'Stem Hotel', name: 'Stem Hotel', sector: 'Hospitality' },
              { src: '/clients/818-hotel.png', alt: '818 Hotel', name: '818 Hotel', sector: 'Hotels & Dining' },
              { src: '/clients/eco-septic-ventures.png', alt: 'Eco Septic Ventures', name: 'Eco Septic', sector: 'Sanitation' },
              { src: '/clients/mihe-works.png', alt: 'Mihe Works Engineering', name: 'Mihe Works', sector: 'Engineering' },
              { src: '/clients/ngiro-organic-treasures.png', alt: 'Ngiro Organic Treasures', name: 'Ngiro Organics', sector: 'Organic Products' },
              { src: '/clients/elitteride.png', alt: 'ElitteRide', name: 'ElitteRide', sector: 'Mobility & Taxi' },
            ].map((client) => (
              <div
                key={client.name}
                className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-sm hover:border-brand-cyan transition duration-200 flex flex-col items-center justify-center gap-2 group"
                title={`${client.name} (${client.sector})`}
              >
                <div className="h-14 w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-12 max-w-[120px] object-contain transition duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <span className="text-[11px] font-bold text-slate-800 block truncate">
                    {client.name}
                  </span>
                  <span className="text-[9px] text-slate-400 block font-medium">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
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
                <div className="font-mono font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
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

        {/* Scannable Case Studies with Measurable Outcomes Grid */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep">
              Documented Client Case Studies
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-recoleta mt-1">
              Measurable ROI &amp; Operational Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-cyan/60 transition duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Card Bar: Logo + Sector + Rating */}
                  <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-center shrink-0">
                        <img 
                          src={cs.logo} 
                          alt={cs.company} 
                          className="max-h-full max-w-full object-contain" 
                          loading="lazy" 
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-recoleta">
                          {cs.company}
                        </h4>
                        <span className="text-[11px] font-mono text-brand-cyanDeep block">
                          {cs.site}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-50 text-brand-cyanDeep border border-brand-cyan/20 shrink-0">
                      {cs.badge}
                    </span>
                  </div>

                  {/* Highlight ROI Metric Badge */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 mb-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                        Verified Outcome:
                      </span>
                      <span className="text-xl font-mono font-black text-emerald-950">
                        {cs.metric}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-800 text-right">
                      {cs.metricLabel}
                    </span>
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-2 text-xs text-slate-600 mb-4">
                    <div>
                      <strong className="text-slate-800">Challenge: </strong>
                      {cs.challenge}
                    </div>
                    <div>
                      <strong className="text-slate-800">Implemented: </strong>
                      {cs.solution}
                    </div>
                  </div>

                  {/* Executive Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-brand-cyan pl-3 py-1 bg-slate-50/60 rounded-r-lg">
                    "{cs.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">{cs.author}</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(cs.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestone Guarantee Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-cyanDeep/30 shadow-card flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-3 py-1 rounded-full">
              <Lock className="w-3.5 h-3.5" />
              <span>Zero-Risk Milestone Billing</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 font-recoleta">
              Our 30% → 40% → 30% Milestone Guarantee
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
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

        {/* Multi-Currency & Payment Methods */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-2xs">
          <PaymentMethods variant="light" />
        </div>

      </div>
    </section>
  );
}
