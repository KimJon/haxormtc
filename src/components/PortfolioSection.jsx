import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Workflow, 
  Cpu, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';

export const PORTFOLIO_STATS = [
  {
    number: '45+',
    label: 'CRM Architectures Deployed',
    desc: 'Zoho CRM, Odoo ERP, and HubSpot pipelines tailored to sales cycles and executive reporting.',
    icon: Cpu,
    color: 'text-black',
    bg: 'bg-slate-100 border-slate-200',
  },
  {
    number: '120+',
    label: 'Automated Workflows Active',
    desc: 'Event-driven webhooks, lead scoring, approval hierarchies, and task routing triggers.',
    icon: Workflow,
    color: 'text-black',
    bg: 'bg-slate-100 border-slate-200',
  },
  {
    number: '100%',
    label: 'White-Label & NDA Protected',
    desc: 'Delivered behind the scenes for digital agencies preserving client trust and wholesale margins.',
    icon: ShieldCheck,
    color: 'text-black',
    bg: 'bg-slate-100 border-slate-200',
  },
  {
    number: '99.9%',
    label: 'Integration Reliability',
    desc: 'Robust error handling, payload logging, and automated retry mechanisms on all API connectors.',
    icon: Layers,
    color: 'text-black',
    bg: 'bg-slate-100 border-slate-200',
  },
];

export const CLIENT_WEBSITES = [
  {
    name: 'B2B SaaS Lead Capture & CRM Pipeline',
    domain: 'Enterprise Cloud Stack',
    category: 'SaaS & Marketing Agency',
    tagline: 'Automated website enquiry capture, real-time email sanitization, and instant Zoho CRM deal routing.',
    tags: ['Zoho CRM', 'REST Webhook', 'Lead Scoring', 'Sub-200ms Latency'],
    badge: 'CRM Architecture',
    metrics: 'Lead response dropped from 14h to <2m',
  },
  {
    name: 'Multi-Region Inventory & ERP Synchronization',
    domain: 'Retail & Distribution Hub',
    category: 'Operations Consultancy',
    tagline: 'Bidirectional stock synchronization, automated PO generation, and accounting ledger mapping.',
    tags: ['Odoo Enterprise', 'Custom API', 'PostgreSQL', 'Automated Reorder'],
    badge: 'ERP & Inventory',
    metrics: 'Zero stock drift across 4 regional hubs',
  },
  {
    name: 'Agency White-Label Technical Delivery Sprint',
    domain: 'UK Digital Agency Partner',
    category: 'Agency Partnership',
    tagline: 'Turnkey technical implementation of client sales pipeline, webhook connectors, and team training.',
    tags: ['White-Label', 'HubSpot CRM', 'Make / Integromat', 'NDA Delivery'],
    badge: 'White-Label Sprint',
    metrics: '10-day sprint delivery • 55% agency margin',
  },
  {
    name: 'Automated Follow-Up Cadence & Slack Digest',
    domain: 'Professional Services Firm',
    category: 'Business Automation',
    tagline: 'Automated multi-channel follow-up sequences with 48-hour aging alarms and executive KPI digests.',
    tags: ['Workflow Automation', 'Slack Webhook', 'Cadence Engine', 'KPI Dashboard'],
    badge: 'Process Automation',
    metrics: '38% reduction in stale abandoned proposals',
  },
];

export default function PortfolioSection() {
  const whatsAppPortfolioUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I reviewed your technical case studies and would like to get a scoping consultation for a project."
  );

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200 font-work-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Verified System Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Our Work &amp; Technical Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            From white-label agency delivery sprints to multi-system enterprise integrations, review how we engineer connected business operations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLIENT_WEBSITES.map((study, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-[#F4F5F7] border border-slate-200 hover:border-black transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black text-white">
                    {study.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {study.domain}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {study.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {study.tagline}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-800 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-900">
                  Impact: <span className="text-slate-600 font-normal">{study.metrics}</span>
                </span>
                <Link
                  to="/contact"
                  className="font-bold text-black hover:underline flex items-center gap-1"
                >
                  <span>Scope Similar</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black transition shadow-sm"
          >
            <span>Discuss Your Project Requirements</span>
            <span>&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
