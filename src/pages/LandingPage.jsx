import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  MessageSquare, 
  Phone, 
  Check, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Send, 
  HelpCircle, 
  Sparkles,
  Store,
  ChevronDown,
  QrCode,
  Smartphone,
  CreditCard,
  Zap,
  ArrowRight
} from 'lucide-react';
import { LANDING_PAGES } from '../data/landingPagesData';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';
import BrandLogo from '../components/BrandLogo';

export default function LandingPage() {
  const { slug } = useParams();
  const page = LANDING_PAGES[slug];
  const { formatPrice, isAfrica, currency } = useCurrency();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!page) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Package Not Found</h1>
        <p className="text-slate-600 mb-6">The requested service or software package does not exist.</p>
        <Link 
          to="/" 
          className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const primaryWhatsAppUrl = createWhatsAppUrl(page.whatsappMessage);

  const sanitize = (str, maxLen = 300) => {
    if (!str) return '';
    return String(str).replace(/[<>]/g, '').trim().slice(0, maxLen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cleanName = sanitize(formData.name, 100);
    const cleanPhone = sanitize(formData.phone, 30);
    const cleanNotes = sanitize(formData.notes, 500);

    const msg = `*New Ad Inquiry for ${page.title}*\n\n` +
      `*Name:* ${cleanName}\n` +
      `*Phone/WhatsApp:* ${cleanPhone}\n` +
      `*Package:* ${page.title} (${page.priceDisplay})\n` +
      `*Details:* ${cleanNotes || 'Interested in ordering/demo'}`;

    const url = createWhatsAppUrl(msg);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-primaryText font-sans antialiased">
      
      {/* Top Banner & Universal Navbar (Available across all pages) */}
      <TopTicker />
      <Navbar />

      {/* Clean Breadcrumb Navigation */}
      <div className="bg-slate-50 border-b border-slate-200 py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500 font-sans">
          <Link to="/" className="hover:text-brand-cyanDeep font-medium">Home</Link>
          <span>/</span>
          <Link to={page.type === 'service' ? '/#services' : '/#software'} className="hover:text-brand-cyanDeep font-medium">
            {page.type === 'service' ? 'Services' : 'Software'}
          </Link>
          <span>/</span>
          <span className="text-[#373656] font-bold truncate">{page.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-10 pb-14 md:pt-16 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-xs font-extrabold text-brand-cyanDeep shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{page.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            {page.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {page.heroSubheadline}
          </p>

          {/* Pricing Highlight Box (When single package or overview) */}
          {!page.packages && (
            <div className="max-w-md mx-auto p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-card">
              <span className="text-xs uppercase font-extrabold text-slate-500 block mb-1">
                Upfront Package Rate
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 font-mono tracking-tight text-brand-cyanDeep">
                {(() => {
                  const match = page.priceDisplay?.match(/[\d,]+/);
                  if (match) {
                    const dynamicAmount = formatPrice(match[0]);
                    return page.priceDisplay.includes('From') ? `From ${dynamicAmount}` : dynamicAmount;
                  }
                  return page.priceDisplay;
                })()}
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">
                {page.pricingNote}
              </p>

              <div className="mt-6 space-y-2.5">
                <a
                  href={primaryWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Order via <strong className="font-extrabold underline decoration-white/40">WhatsApp</strong></span>
                </a>

                <a
                  href="#lead-form"
                  className="w-full py-2 text-center block text-xs font-bold text-slate-600 hover:text-slate-900"
                >
                  Or submit inquiry form below ↓
                </a>
              </div>
            </div>
          )}

          {/* Milestone Payment Assurance Banner if applicable */}
          {page.milestonePayment && (
            <div className="max-w-2xl mx-auto p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-emerald-900 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
              <span>Risk-Free Milestone Payments: <strong>{page.milestonePayment}</strong></span>
            </div>
          )}

          {/* Trust points */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-green" />
              Stripe, PayPal & Bank Transfer
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-cyanDeep" />
              Transparent Milestone Billing
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-coral" />
              Global Remote Delivery
            </span>
          </div>

        </div>
      </section>

      {/* SPECIAL SECTION: Website Design Packages (Multi-Tier) */}
      {page.packages && (
        <section className="py-14 md:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-cyan-100 text-brand-cyanDeep inline-block mb-2">
                Flexible Investment Tiers
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                Choose the Right Website Package
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                All packages include domain, cloud hosting, SSL padlock, and transparent milestone payments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.packages.map((pkg) => {
                const pkgWhatsAppUrl = createWhatsAppUrl(pkg.whatsappMessage);
                return (
                  <div
                    key={pkg.id}
                    className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                      pkg.popular
                        ? 'bg-white border-2 border-brand-cyan shadow-xl ring-2 ring-brand-cyan/20 relative'
                        : 'bg-white border border-slate-200 shadow-card hover:shadow-card-hover'
                    }`}
                  >
                    <div>
                      {pkg.popular && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-black uppercase bg-brand-cyanDeep text-white shadow-sm tracking-wider">
                          MOST POPULAR
                        </span>
                      )}

                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full ${
                          pkg.popular ? 'bg-cyan-50 text-brand-cyanDeep' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {pkg.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-slate-900">
                        {pkg.name}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1.5 min-h-[34px] leading-relaxed">
                        <strong className="text-slate-700">Best for:</strong> {pkg.bestFor}
                      </p>

                      <div className="my-5 pt-4 border-t border-slate-100">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl font-extrabold font-mono text-slate-900">
                            {formatPrice(pkg.price)}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {isAfrica ? pkg.priceNote : (pkg.priceNote?.includes('VAT') ? '+ Tax' : pkg.priceNote)}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5 stroke-[3]" />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={pkgWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition shadow-sm ${
                        pkg.popular
                          ? 'bg-brand-green text-white hover:bg-[#20ba5a] shadow-glow-whatsapp'
                          : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span>{pkg.ctaText} via <strong className="font-extrabold underline decoration-white/40">WhatsApp</strong></span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SPECIAL SECTION: ElitteGo QR Code Interactive Showcase */}
      {page.qrCodeImage && (
        <section className="py-14 md:py-20 bg-gradient-to-b from-cyan-50/50 to-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-brand-cyan/40 shadow-xl flex flex-col md:flex-row items-center gap-8">
              
              {/* QR Code Frame */}
              <div className="shrink-0 text-center space-y-3">
                <div className="p-3 bg-white rounded-2xl border-2 border-slate-200 shadow-md inline-block">
                  <img 
                    src={page.qrCodeImage} 
                    alt="ElitteGo Demo QR Code" 
                    className="w-48 h-48 sm:w-56 sm:h-56 object-contain rounded-xl"
                  />
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600">
                  <QrCode className="w-3.5 h-3.5 text-brand-cyanDeep" />
                  <span>Interactive Live Demo</span>
                </div>
              </div>

              {/* Instructions & Instant Action */}
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                  <span>Instant Smartphone Testing</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {page.qrCodeTitle || 'Scan QR Code to Test Live App Demo'}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {page.qrCodeDesc || 'Test the live ElitteGo on-demand delivery ecosystem right from your smartphone camera.'}
                </p>

                <div className="space-y-2 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 text-brand-cyanDeep flex items-center justify-center font-bold text-[11px]">1</span>
                    <span>Open your iPhone or Android default Camera app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 text-brand-cyanDeep flex items-center justify-center font-bold text-[11px]">2</span>
                    <span>Point the camera directly at the QR Code on this screen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-100 text-brand-cyanDeep flex items-center justify-center font-bold text-[11px]">3</span>
                    <span>Tap the banner link to test the customer and rider workflow live!</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={primaryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                    <span>Request Custom Walkthrough on <strong className="font-extrabold underline decoration-white/40">WhatsApp</strong></span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Key Highlights Grid */}
      <section className="py-14 md:py-18 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Businesses Choose This Solution
            </h2>
            <p className="text-sm text-slate-600 mt-1.5">
              Engineered specifically to solve real commercial challenges without technical delays.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.keyHighlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-100 text-brand-cyanDeep flex items-center justify-center font-extrabold text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries (if software) */}
      {page.targetIndustries && (
        <section className="py-12 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold uppercase text-slate-500">
                Sectors & Vertical Applications
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Built For High Performance In:
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {page.targetIndustries.map((ind, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <Store className="w-3.5 h-3.5 text-brand-cyanDeep" />
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables / Feature Checklist */}
      <section className="py-14 md:py-18 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {page.type === 'service' ? 'Deliverables & Capabilities Checklist' : 'Core Platform Capabilities'}
            </h2>
            <p className="text-sm text-slate-600 mt-1.5">
              Full transparency on what you receive. Zero hidden catches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {(page.deliverables || page.features || []).map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-brand-green stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form & Direct Contact */}
      <section id="lead-form" className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-card">
            <div className="text-center max-w-md mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyanDeep block mb-1">
                Direct Communication
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Book or Inquire About This Package
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your details below and our team will connect with you on WhatsApp right away.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                <span>Inquiry prepared! Launching WhatsApp with your order details...</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., James Wilson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-brand-cyan focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., +44 7700 900123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-brand-cyan focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Any specific requirements or timeline?
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your business or when you'd like to get started..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-brand-cyan focus:bg-white transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl text-sm font-semibold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry via <strong className="font-extrabold underline decoration-white/40">WhatsApp</strong></span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <a 
                href={`mailto:${CONTACT_INFO.emailOfficial}`} 
                className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-brand-cyanDeep transition"
              >
                <span>Official Email:</span>
                <span className="underline font-mono">{CONTACT_INFO.emailOfficial}</span>
              </a>
              <span>Business Tech Partner • Remote & Regional Delivery</span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQs */}
      {page.faqs && page.faqs.length > 0 && (
        <section className="py-14 md:py-18 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-extrabold text-slate-900 text-center mb-8">
              Frequently Asked Questions About This Solution
            </h3>

            <div className="space-y-3">
              {page.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="rounded-2xl border border-slate-200 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base bg-slate-50/50"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Unified Comprehensive Footer */}
      <Footer />

      {/* Sticky Mobile Conversion Bar (Smartphones) */}
      <MobileBottomBar />
    </div>
  );
}
