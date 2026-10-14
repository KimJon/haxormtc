import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import { 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Layers, 
  Clock, 
  Sparkles,
  GitBranch,
  BellRing,
  Check
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

export default function BusinessAutomationPage() {
  const { formatPrice } = useCurrency();

  const automationWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I want to discuss automating our repetitive business processes and workflow triggers."
  );

  const services = [
    {
      title: "Website Enquiry Automation",
      desc: "Instantly capture web leads, validate inputs, route to the right sales specialist, and fire immediate acknowledgment messages."
    },
    {
      title: "CRM Follow-Up Workflows",
      desc: "Automate deal cadence, schedule follow-up tasks, notify account owners, and escalate stale opportunities."
    },
    {
      title: "Task Assignment & Routing",
      desc: "Distribute incoming client requests, project tickets, or orders based on territory, workload, or availability rules."
    },
    {
      title: "Customer & Internal Notifications",
      desc: "Automated SMS, WhatsApp, and email updates on order progress, status changes, invoice dispatches, or renewals."
    },
    {
      title: "Multi-Tier Approval Workflows",
      desc: "Automate discount approvals, contract signing sign-offs, and procurement handovers with clear audit trails."
    },
    {
      title: "Automated Reporting & Metrics",
      desc: "Schedule automated daily/weekly KPI snapshots delivered straight to executive Slack, Teams, or email inboxes."
    }
  ];

  const approach = [
    { title: "Identify the Trigger", desc: "Define precisely what event starts the automation (form submission, payment received, deal stage change)." },
    { title: "Map the Conditions & Logic", desc: "Specify rules, filters, branch paths, and exception criteria to handle real-world variations." },
    { title: "Execute the Actions", desc: "Build the automated steps: database updates, webhook dispatches, CRM record updates, and client alerts." },
    { title: "Error Handling & Logging", desc: "Implement failover alerts so no workflow fails silently if a third-party API or server encounters downtime." },
    { title: "Test & Handover", desc: "Rigorous testing with realistic test cases, followed by complete operational documentation and team handover." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#3F4040] font-sans antialiased flex flex-col selection:bg-[#FE4775]/20 selection:text-[#3F4040]">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-surface-50 to-white border-b border-[#3F4040]/10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FE4775]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#FE4775]/40 shadow-xs text-xs font-bold uppercase tracking-wider text-[#FE4775]">
              <Workflow className="w-3.5 h-3.5 text-[#FE4775]" />
              <span>Business Process &amp; Workflow Automation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1C1D1D] tracking-tight leading-[1.12] max-w-4xl mx-auto">
              Spend Less Time Repeating Tasks. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE4775] via-[#E0335E] to-[#18D2FA]">
                Build Better Workflows.
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#3F4040]/90 leading-relaxed">
              Repetitive tasks consume team hours and create opportunities for costly human error. We help identify suitable processes for automation and implement robust workflows that make operations consistent, predictable, and scalable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={automationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#FE4775] hover:bg-[#E0335E] transition shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss an Automation Project</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-[#3F4040] bg-white/90 hover:bg-white border border-[#3F4040]/20 hover:border-[#18D2FA] transition shadow-xs flex items-center justify-center gap-2"
              >
                <span>Request Workflow Audit</span>
                <ArrowRight className="w-4 h-4 text-[#18D2FA]" />
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#3F4040]/70">
              <span>Webhooks &amp; Deluge</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>CRM Lead Automations</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>WhatsApp Bot Routing</span>
              <span className="text-[#3F4040]/30">•</span>
              <span>Automated Invoice Triggers</span>
            </div>

          </div>
        </section>

        {/* Automation Capabilities Grid */}
        <section className="py-20 bg-white border-b border-[#3F4040]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#FE4775] bg-[#FE4775]/10 px-3 py-1 rounded-full">
                Workflows
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                High-Impact Business Automations
              </h2>
              <p className="text-sm sm:text-base text-[#3F4040]/80 mt-2">
                Proven workflows engineered to eliminate repetitive data re-entry and keep client pipelines moving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-[#3F4040]/15 hover:border-[#FE4775] shadow-xs hover:shadow-card transition group">
                  <div className="w-9 h-9 rounded-xl bg-surface-100 text-[#FE4775] flex items-center justify-center mb-4 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-lg text-[#1C1D1D] mb-2">{item.title}</h3>
                  <p className="text-xs text-[#3F4040]/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-surface-50 border-b border-[#3F4040]/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0EA5C6] bg-[#18D2FA]/10 px-3 py-1 rounded-full">
                Engineering Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1D1D] tracking-tight mt-3">
                Our Automation Approach
              </h2>
              <p className="text-sm text-[#3F4040]/80 mt-2">
                We design with failure modes in mind so workflows remain dependable under heavy operational loads.
              </p>
            </div>

            <div className="space-y-4">
              {approach.map((ap, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-[#3F4040]/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#1C1D1D] text-[#FE4775] font-extrabold font-mono flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#1C1D1D]">{ap.title}</h4>
                    <p className="text-xs text-[#3F4040]/80 mt-0.5">{ap.desc}</p>
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#FE4775]">
                  Automate Repetitive Work
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Which Process Would You Like to Automate?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Describe the process, the software applications you currently use, and the desired outcome. We will assess technical feasibility and discuss next steps.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#1C1D1D] bg-white hover:bg-slate-100 transition shadow-md"
                >
                  Discuss an Automation Project
                </Link>
                <a
                  href={automationWhatsAppUrl}
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
