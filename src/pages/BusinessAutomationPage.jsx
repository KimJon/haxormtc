import React from 'react';
import { Link } from 'react-router-dom';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import SocialProofSection from '../components/SocialProofSection';
import { 
  Workflow, 
  ArrowRight, 
  MessageSquare, 
  Check, 
  Zap, 
  Clock, 
  ShieldCheck 
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
      desc: "Instantly capture web leads, validate inputs, route to the right sales specialist, and fire immediate acknowledgment messages without manual re-entry."
    },
    {
      title: "CRM Follow-Up Workflows",
      desc: "Automate deal cadence, schedule follow-up tasks, notify account owners, and escalate stale opportunities before revenue slips away."
    },
    {
      title: "Task Assignment & Routing",
      desc: "Distribute incoming client requests, project tickets, or orders based on territory, workload, or round-robin availability rules."
    },
    {
      title: "Customer & Internal Notifications",
      desc: "Automated SMS, WhatsApp, and email updates on order progress, status changes, invoice dispatches, or contract renewals."
    },
    {
      title: "Multi-Tier Approval Workflows",
      desc: "Automate discount approvals, contract signing sign-offs, and procurement handovers with clear audit trails and timestamped logs."
    },
    {
      title: "Automated Reporting & Metrics",
      desc: "Schedule automated daily/weekly KPI snapshots delivered straight to executive Slack, Teams, or email inboxes."
    }
  ];

  const approach = [
    { step: "01", title: "Identify the Trigger", desc: "Define precisely what event starts the automation (form submission, payment received, deal stage change)." },
    { step: "02", title: "Map Conditions & Logic", desc: "Specify rules, filters, branch paths, and exception criteria to handle real-world operational variations." },
    { step: "03", title: "Execute the Actions", desc: "Build the automated steps: database updates, webhook dispatches, CRM record updates, and client alerts." },
    { step: "04", title: "Error Handling & Logging", desc: "Implement failover alerts so no workflow fails silently if a third-party API or server encounters downtime." },
    { step: "05", title: "Test & Handover", desc: "Rigorous testing with realistic test cases, followed by complete operational documentation and team handover." }
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
              <Workflow className="w-3.5 h-3.5 text-black" />
              <span>Business Process &amp; Workflow Automation</span>
            </div>

            <h1 className="clarity-h1 max-w-4xl mx-auto">
              Spend Less Time Repeating Tasks. <br className="hidden sm:inline" />
              Build Better Workflows.
            </h1>

            <p className="clarity-text max-w-3xl mx-auto text-slate-600">
              Repetitive tasks consume team hours and create opportunities for costly human error. We help identify suitable processes for automation and implement robust workflows that make operations consistent, predictable, and scalable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={automationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-[#111111] hover:bg-black transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Discuss an Automation Project</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-[#111111] bg-white hover:bg-slate-50 border border-slate-300 hover:border-black transition-all flex items-center justify-center gap-2"
              >
                <span>Request Workflow Audit</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>

            {/* Clean Monochrome Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Webhooks &amp; Deluge Scripts
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Automated Lead Routing
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Multi-Tier Approval Workflows
              </span>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-black font-bold">✓</span> Zero Silent Failures Guarantee
              </span>
            </div>

            {/* Humanized Workflow Automation Showcase Image */}
            <div className="pt-10 max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                <img 
                  src="/images/workflow-automation.jpg" 
                  alt="Automation engineer analyzing real-time workflow logic nodes and integration pipelines" 
                  className="w-full h-auto max-h-[480px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-10 text-left">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                      Event-Driven Automation
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Webhooks • Cron • APIs
                    </span>
                  </div>
                  <h3 className="clarity-h3 !text-2xl !text-white text-white">
                    Self-Healing Operations &amp; Zero Silent Failures
                  </h3>
                  <p className="clarity-text-dark text-slate-300 mt-1 max-w-2xl hidden sm:block">
                    Automations with comprehensive retry budgets, dead-letter queues, and instant Slack/Teams error alerts.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* High-Impact Automations Grid */}
        <section className="py-20 md:py-28 bg-[#F4F5F7] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
                Workflows
              </span>
              <h2 className="clarity-h2 text-black mt-3">
                High-Impact Business Automations
              </h2>
              <p className="clarity-text text-slate-600 mt-3">
                Proven workflows engineered to eliminate repetitive data re-entry, shorten sales cycles, and keep operations running reliably.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-black shadow-xs transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-slate-100 text-black flex items-center justify-center mb-6 font-semibold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="clarity-h3 text-black mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Engineering Methodology Section */}
        <section className="py-20 md:py-28 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Engineering Methodology
              </span>
              <h2 className="clarity-h2 text-black mt-3">
                Our Automation Approach
              </h2>
              <p className="clarity-text text-slate-600 mt-2">
                We design with failure modes in mind so workflows remain dependable under heavy operational loads.
              </p>
            </div>

            <div className="space-y-4">
              {approach.map((ap, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F4F5F7] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xs">
                  <div className="w-12 h-12 rounded-xl bg-black text-white font-black font-mono flex items-center justify-center shrink-0 text-sm">
                    {ap.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-[#111111]">{ap.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">{ap.desc}</p>
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
                  Automate Repetitive Work
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Which Process Would You Like to Automate?
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Describe the process, the software applications you currently use, and the desired outcome. We will assess technical feasibility and discuss next steps.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-black bg-white hover:bg-slate-100 transition shadow-sm text-center"
                >
                  Discuss an Automation Project
                </Link>
                <a
                  href={automationWhatsAppUrl}
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
