import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import QuoteCalculator from '../components/QuoteCalculator';
import { createWhatsAppUrl } from '../data/servicesData';
import { 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  Percent, 
  Clock, 
  MessageSquare, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function CalculatorPage() {
  const customConsultUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I have a custom bundle or enterprise scope and would like to discuss personalized pricing."
  );

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Page Header */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-black" />
              <span>Interactive Transparent Pricing Tool</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Custom Quote &amp; Bundle Calculator
            </h1>

            <p className="clarity-text max-w-2xl mx-auto text-slate-600">
              Select any combination of services to configure your package. Select 3 or more services to automatically unlock an instant <strong>10% Bundle Discount</strong>.
            </p>

            {/* Value Guarantees Banner */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5">
                <Percent className="w-4 h-4 text-black" />
                <span>10% Off 3+ Bundles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-black" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-black" />
                <span>30% Start → 40% Design → 30% Launch</span>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Interactive Calculator */}
        <QuoteCalculator />

        {/* Payment Milestones & Pricing FAQ */}
        <section className="py-16 md:py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="clarity-h2 text-black">
                How Our Milestone Pricing Protects You
              </h2>
              <p className="clarity-text text-slate-600 mt-2">
                We believe in earning your trust step by step. You never pay 100% upfront for websites or custom software development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 clean-card-hover">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-black font-semibold flex items-center justify-center text-sm mb-3">
                  30%
                </div>
                <h3 className="clarity-h3 text-black mb-1">Deposit &amp; Kickoff</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Secures your domain registration, cloud hosting server provisioning, and kickoff discovery questionnaire.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 clean-card-hover">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-black font-semibold flex items-center justify-center text-sm mb-3">
                  40%
                </div>
                <h3 className="clarity-h3 text-black mb-1">Design Approval</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Payable once you review and approve the initial website staging link, layout design, and mobile responsiveness.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 clean-card-hover">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-black font-semibold flex items-center justify-center text-sm mb-3">
                  30%
                </div>
                <h3 className="clarity-h3 text-black mb-1">Final Handover &amp; Launch</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Payable only when your site is live on your public domain, indexed on Google Search Console, and business emails are connected.
                </p>
              </div>
            </div>

            {/* Custom Quote Help Banner */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4">
              <h3 className="clarity-h2 !text-2xl text-black">
                Need a Custom Quote or Enterprise Tender?
              </h3>
              <p className="clarity-text text-slate-600 max-w-xl mx-auto">
                If your project involves specialized hospital workflows, multi-warehouse ERP, or large-scale retail distribution, let's build a custom scope of work.
              </p>
              <div className="pt-2 flex justify-center">
                <a
                  href={customConsultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#111111] hover:bg-black transition shadow-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
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
