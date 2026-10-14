import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  Workflow, 
  Database, 
  Layers, 
  Clock, 
  Sparkles,
  BarChart3,
  Users2,
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
      desc: "Account structure, custom modules, role-based security permissions, and pipeline stage definition tailored to your sales process."
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
    { step: "02", title: "Review Tools & Data", desc: "Audit existing spreadsheets, email accounts, and client databases to plan clean migration and fields." },
    { step: "03", title: "Configure the CRM", desc: "Build custom pipelines, layouts, user permissions, and custom fields in Zoho CRM, Odoo, or HubSpot." },
    { step: "04", title: "Set Up Automations", desc: "Implement automated lead routing, follow-up reminders, task creation, and WhatsApp/email triggers." },
    { step: "05", title: "Test the Workflows", desc: "Simulate test leads across all deal stages, verify data integrity, and address edge cases before launch." },
    { step: "06", title: "Document & Handover", desc: "Provide clear documentation, admin handover, and guided team walkthroughs for rapid adoption." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#3F4040] font-sans antialiased flex flex-col selection:bg-[#18D2FA]/30 selection:text-[#3F4040]">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-surface-50 to-white border-b border-[#3F4040]/10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#18D2FA]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#18D2FA]/40 shadow-xs text-xs font-bold uppercase tracking-wider text-[#0EA5C6]">
              <Cpu className="w-3.5 h-3.5 text-[#18D2FA]" />
              <span>CRM Systems &amp; Pipeline Architecture</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1D1D] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              A CRM That Works Around <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18D2FA] via-[#0EA5C6] to-[#FE4775]">
                Your Actual Business.
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#3F4040]/90 leading-relaxed">
              A CRM should help your team manage relationships, follow up with leads, and understand its sales pipeline without unnecessary complexity. Haxor MTC helps configure Zoho CRM, Odoo, and HubSpot around your business processes and operational needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={crmWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#18D2FA] hover:bg-[#0EA5C6] transition shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss Your CRM Project</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-[#3F4040] bg-white/90 hover:bg-white border border-[#3F4040]/20 hover:border-[#FE4775] transition shadow-xs flex items-center justify-center gap-2"
              >
                <span>Request Project Scope</span>
                <ArrowRight className="w-4 h-4 text-[#FE4775]" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#3F4040]/70">
              <span>Zoho One &amp; CRM</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>Odoo Community &amp; Enterprise</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>HubSpot Sales Hub</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>Clean Data Migration</span>
            </div>

          </div>
        </section>

        {/* Core Deliverables Grid */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#18D2FA] bg-[#18D2FA]/10 px-3 py-1 rounded-full">
                Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                CRM Implementation Deliverables
              </h2>
              <p className="text-sm sm:text-base text-[#3F4040]/80 mt-2">
                We handle the end-to-end technical setup so your team can focus on closing deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#18D2FA] shadow-xs hover:shadow-card transition group">
                  <div className="w-9 h-9 rounded-xl bg-surface-100 text-[#0EA5C6] flex items-center justify-center mb-4 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#1C1D1D] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#3F4040]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6-Step Implementation Process */}
        <section className="py-20 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FE4775] bg-[#FE4775]/10 px-3 py-1 rounded-full">
                Disciplined Rollout
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                Our Implementation Process
              </h2>
              <p className="text-sm text-[#3F4040]/80 mt-2">
                Structured steps to ensure clean data, reliable automations, and immediate team adoption.
              </p>
            </div>

            <div className="space-y-4">
              {steps.map((st, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1D1D] text-[#18D2FA] font-extrabold font-mono flex items-center justify-center shrink-0">
                    {st.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1C1D1D]">{st.title}</h4>
                    <p className="text-xs text-[#3F4040]/80 mt-0.5">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1C1D1D] to-[#3F4040] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18D2FA]">
                  Ready for a Functional CRM?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Need a CRM Configured Properly?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Tell us about your business, existing CRM, and the problem you want to solve. We will review your requirements and discuss a practical next step.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#1C1D1D] bg-white hover:bg-slate-100 transition shadow-md"
                >
                  Discuss Your CRM Project
                </Link>
                <a
                  href={crmWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] transition shadow-glow-whatsapp"
                >
                  WhatsApp Consultation
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
