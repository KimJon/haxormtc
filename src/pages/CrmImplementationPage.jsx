import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import SocialProofSection from '../components/SocialProofSection';
import { 
  Cpu, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Database, 
  Check
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

export default function CrmImplementationPage() {
  const { formatPrice } = useCurrency();

  const crmWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I want to consult on configuring a CRM system (Zoho / Odoo / HubSpot) for our business / client."
  );

  const services = [
    {
      title: "CRM Setup & Architecture",
      desc: "Account structure, custom modules, role-based security permissions, and pipeline stage definition tailored to your exact sales process."
    },
    {
      title: "Sales Pipeline Design",
      desc: "Clear visual deal stages, probability weights, required fields per stage, and automated task assignments for sales reps."
    },
    {
      title: "Contact & Company Data Migration",
      desc: "Clean migration from spreadsheets, legacy databases, or prior CRMs with deduplication, field mapping, and historical activity logging."
    },
    {
      title: "Website & Inbound Lead Capture",
      desc: "Connect contact forms, booking widgets, and landing pages directly to your CRM with zero manual data entry."
    },
    {
      title: "Automated Follow-Ups & Routing",
      desc: "Round-robin lead assignment, instant email/WhatsApp notifications, and overdue task alerts to prevent dropped deals."
    },
    {
      title: "Reporting Dashboards & Handover",
      desc: "Executive KPI visibility, pipeline conversion rates, rep activity metrics, and recorded staff training documentation."
    }
  ];

  const steps = [
    { step: "01", title: "Understand Sales Process", desc: "We map your actual customer journey, discovery stages, qualification criteria, and quote workflows." },
    { step: "02", title: "Review Tools & Data", desc: "Audit existing spreadsheets, email accounts, and client databases to plan clean migration and field taxonomy." },
    { step: "03", title: "Configure the CRM", desc: "Build custom pipelines, layouts, user permissions, and custom fields in Zoho CRM, Odoo, or HubSpot." },
    { step: "04", title: "Set Up Automations", desc: "Implement automated lead routing, follow-up reminders, task creation, and WhatsApp/email triggers." },
    { step: "05", title: "Test the Workflows", desc: "Simulate test leads across all deal stages, verify data integrity, and address edge cases before launch." },
    { step: "06", title: "Document & Handover", desc: "Provide clear documentation, admin handover, and guided team walkthroughs for rapid adoption." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans antialiased flex flex-col selection:bg-black selection:text-white">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section - Clarity Monochrome Minimalist */}
        <section className="pt-20 pb-20 md:pt-28 md:pb-28 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-black" />
              <span>CRM Systems &amp; Pipeline Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              A CRM That Works Around <br className="hidden sm:inline" />
              Your Actual Business.
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed">
              A CRM should help your team manage relationships, follow up with leads, and understand its sales pipeline without unnecessary complexity. Haxor MTC helps configure Zoho CRM, Odoo, and HubSpot around your business processes and operational needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={crmWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss Your CRM Project</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition-all flex items-center justify-center gap-2"
              >
                <span>Request Project Scope</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>

            {/* Clean Monochrome Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Zoho One &amp; CRM Certified
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Odoo Community &amp; Enterprise
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> HubSpot Sales Hub
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Zero Data Loss Guarantee
              </span>
            </div>

          </div>
        </section>

        {/* Core Deliverables Grid - High-Contrast Clean Grid */}
        <section className="py-20 md:py-28 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight mt-3">
                CRM Implementation Deliverables
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                We handle the end-to-end technical configuration, custom module architecture, and data pipelines so your sales team can focus on closing deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6 font-mono font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-lg text-[#111111] mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6-Step Implementation Process */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Disciplined Rollout
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight mt-3">
                Our Implementation Process
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Structured steps to ensure clean data, reliable automations, and immediate team adoption.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((st, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-black text-white font-black font-mono flex items-center justify-center shrink-0 text-sm">
                    {st.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#111111]">{st.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Final CTA - Monochrome Dark Box */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-14 bg-[#111111] text-white border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ready for a Functional CRM?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Need a CRM Configured Properly?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Tell us about your business, existing CRM, and the problem you want to solve. We will review your requirements and discuss a practical next step.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-slate-100 transition shadow-sm text-center"
                >
                  Discuss Your CRM Project
                </Link>
                <a
                  href={crmWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#1F2937] hover:bg-slate-800 border border-slate-700 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
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
