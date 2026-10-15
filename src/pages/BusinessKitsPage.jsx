import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import BusinessKitsShowcase from '../components/BusinessKitsShowcase';
import PaymentMethods from '../components/PaymentMethods';
import { 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Globe, 
  CreditCard, 
  Settings, 
  TrendingUp, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  Search,
  Lock,
  Headphones
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

/**
 * MASTER DIGITAL BUSINESS KITS PAGE (/kits, /solutions/kits)
 * ==========================================================
 * Serves as the central catalog and marketing destination for all 40
 * Haxor Digital Business Kits.
 *
 * HUMAN EDITING INSTRUCTIONS:
 * - Kits data is maintained in `src/data/industryKitsData.js`.
 * - FAQs and value propositions can be tuned directly in this file.
 */
export default function BusinessKitsPage() {
  const { currency } = useCurrency();

  const generalWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am on your Digital Business Kits catalog and would like a consultation on the best turnkey setup for my business."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-black" />
              <span>40 Turnkey Industry Architectures • Global Deployment</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Haxor Digital Business Kits
            </h1>

            <p className="clarity-text max-w-3xl mx-auto text-slate-600">
              Stop piecing together disconnected web designers, POS vendors, and social media contractors. Every Haxor Business Kit delivers a synchronized 4-pillar operating system engineered specifically for your trade.
            </p>

            {/* 4 Pillars Highlight Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2 text-left">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 clean-card-hover transition">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-black flex items-center justify-center mb-2">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">1. Digital Presence</div>
                <p className="text-[11px] text-slate-500 mt-1">Web, Google Maps 3-Pack, Verified GMB &amp; WhatsApp routing.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 clean-card-hover transition">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-black flex items-center justify-center mb-2">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">2. Sales &amp; Checkout</div>
                <p className="text-[11px] text-slate-500 mt-1">POS, E-Commerce, 0% commission booking &amp; Stripe/Card gateways.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 clean-card-hover transition">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-black flex items-center justify-center mb-2">
                  <Settings className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">3. Operations</div>
                <p className="text-[11px] text-slate-500 mt-1">Industry-specific PMS, ERP, inventory, staff &amp; guest management.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 clean-card-hover transition">
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-black flex items-center justify-center mb-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-900">4. Growth Engine</div>
                <p className="text-[11px] text-slate-500 mt-1">Local SEO, Google Ads search intent, reviews &amp; re-engagement.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#business-kits"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-black hover:bg-neutral-800 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search All 40 Industry Kits</span>
              </a>

              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-black bg-white hover:bg-slate-50 border border-slate-300 transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-slate-800 shrink-0" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* The 40 Industry Kits Showcase with Live Search */}
        <BusinessKitsShowcase 
          fullPage={true} 
          title="Explore the 40 Industry Digital Business Kits"
          subtitle="Use the live search bar or sector categories below to locate the production-ready digital stack engineered for your specific business."
        />

        {/* Why Haxor Digital Business Kits Section */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>The Haxor Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-recoleta">
                Why Business Owners Choose Our Turnkey Kits
              </h2>
              <p className="text-slate-600 mt-4 text-base leading-relaxed">
                We eliminate the fragmentation of hiring multiple uncoordinated freelancers. Every kit is delivered turnkey with clean documentation, staff training, and full source code ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-brand-cyan/20 text-brand-cyanDeep flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  0% Commission Direct Channels
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Third-party booking and delivery aggregators charge 15% to 30% on every order. Our kits deploy your own direct booking and ordering engines so you keep 100% of customer revenue.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-brand-purple/20 text-brand-purple flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Enterprise Security & Ownership
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Zero vendor lock-in. You receive complete administrative credentials, domain ownership, source code access, automated daily cloud backups, and hardened security protection.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-green-50 border border-brand-green/20 text-brand-green flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  On-Site Training & 1-Year Guarantee
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We configure your hardware (tablets, barcode scanners, receipt printers), train your cashiers and managers on-site or via video conference, and provide 12 months of operational support.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Accepted Payment Methods */}
        <PaymentMethods />

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 font-recoleta">
                Frequently Asked Questions About Business Kits
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Have questions about deployment, hardware, or customization?
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-base font-bold text-slate-900">
                  How fast is a digital business kit deployed?
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Standard digital presence and booking/POS engines are delivered in 5 to 10 business days. For multi-branch or specialized hospital/hotel PMS setups, deployment typically takes 10 to 14 days including data migration and staff onboarding.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-base font-bold text-slate-900">
                  Do you provide deployment and setup internationally?
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Yes. Our cloud software and web platforms are deployed remotely to clients worldwide. Hardware peripherals (thermal printers, barcode scanners, touch terminals) are shipped with step-by-step remote video assistance and virtual onboarding sessions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-base font-bold text-slate-900">
                  Can I customize or swap components in a kit?
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Every kit can be customized. You can use our interactive Quote Calculator to adjust individual software modules, email inboxes, or marketing retainers to match your precise budget.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-xs">
                <h3 className="text-base font-bold text-slate-900">
                  Can I purchase specific parts of a kit at different times instead of paying full price upfront?
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Yes, absolutely. All 40 kits are engineered with a <strong>Pay-As-You-Grow modular architecture</strong>. You are never forced to pay for everything at once. Many clients start with <strong>Phase 1 (Digital Presence &amp; Google Maps 3-Pack)</strong> to start acquiring inquiries immediately, then activate <strong>Phase 2 (Online POS/Bookings)</strong>, <strong>Phase 3 (Inventory &amp; PMS Operations)</strong>, and <strong>Phase 4 (Local SEO/Ads)</strong> in planned milestones as their revenue expands. You only pay for what your business needs at that specific time.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-base font-bold text-slate-900">
                  What payment methods are supported?
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  We accept Bank Wire Transfer (USD, EUR, GBP), Visa, Mastercard, PayPal, Stripe, and cryptocurrency payments for international clients.
                </p>
              </div>
            </div>

            {/* Bottom Help CTA */}
            <div className="mt-12 text-center">
              <a
                href={generalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-brand-green hover:bg-[#20ba5a] text-white font-bold text-sm shadow-glow-whatsapp transition"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Speak with an Industry Kit Specialist on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
