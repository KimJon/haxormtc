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

  const testimonials = [
    {
      company: 'Stem Hotel Nakuru',
      site: 'stemhotel.co.ke',
      sector: 'Hospitality',
      logo: '/clients/stem-hotel.png',
      quote: "Haxor built our direct room reservation engine with M-Pesa. Guests book directly from their phones without us paying heavy OTA commission fees. It paid for itself within weeks.",
      author: 'Operations Management',
      highlight: 'Direct WhatsApp & M-Pesa Room Bookings',
      rating: 5,
    },
    {
      company: 'Mihe Works Engineering',
      site: 'miheworks.co.ke',
      sector: 'Industrial Engineering',
      logo: '/clients/mihe-works.png',
      quote: "We needed a credible business portal, SSL, and official email addresses on tight turnaround for tender submissions. Haxor delivered in 5 days, and our bids were approved without delay.",
      author: 'Managing Principal',
      highlight: 'Turnkey Portal & Tender Documentation',
      rating: 5,
    },
    {
      company: 'Eco Septic Ventures',
      site: 'ecosepticventures.com',
      sector: 'Sanitation & Contracting',
      logo: '/clients/eco-septic-ventures.png',
      quote: "Setting up our Google Business Profile verification and local search ranking put us in the top 3 on Google Maps. We receive inbound inquiries from property developers every week.",
      author: 'Lead Consultant',
      highlight: 'Top 3 Google Maps Local Ranking',
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
            <span>Proven Track Record &amp; Client Trust</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-recoleta tracking-tight">
            Trusted by Established Businesses Across Kenya
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base font-sans leading-relaxed">
            From regional hotels and contracting firms to growing retail outlets, see how businesses run faster and eliminate recurring software fees with Haxor MTC.
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

        {/* Verified Client Testimonials */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-cyanDeep">
              Verified Client Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-recoleta mt-1">
              What Founders &amp; Operators Say
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Authentic feedback from real businesses deployed and operating on our custom systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Client Identity */}
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 p-2 flex items-center justify-center shrink-0">
                      <img 
                        src={item.logo} 
                        alt={item.company} 
                        className="max-h-full max-w-full object-contain" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm font-bold text-slate-900 truncate">
                        {item.company}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-500 block truncate">
                        {item.site}
                      </span>
                    </div>
                  </div>

                  {/* Highlight pill */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold mb-3">
                    <span>{item.highlight}</span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card Footer: Author & Stars */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">{item.author}</span>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
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
