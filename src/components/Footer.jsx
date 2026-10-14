import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

import BrandLogo from './BrandLogo';
import CurrencySelector from './CurrencySelector';
import PaymentMethods from './PaymentMethods';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs relative z-10 pt-16 pb-28 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering enterprises, retail brands, and fast-growing businesses with high-impact digital marketing, conversion-focused websites, and intelligent management software.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-coral" />
                <a href={`mailto:${CONTACT_INFO.emailOfficial}`} className="hover:text-white font-mono transition">
                  {CONTACT_INFO.emailOfficial}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links: Marketing & Web */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Services &amp; Growth</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/agency-partners" className="hover:text-white transition text-[#FE4775] font-bold flex items-center gap-1.5">
                  <span>Agency White-Label Hub</span>
                  <span className="text-[9px] bg-[#FE4775] text-white px-1.5 py-0.2 rounded uppercase">Partner</span>
                </Link>
              </li>
              <li>
                <Link to="/services/crm-implementation" className="hover:text-white transition text-[#18D2FA] font-medium">
                  CRM Implementation (Zoho, Odoo)
                </Link>
              </li>
              <li>
                <Link to="/services/business-automation" className="hover:text-white transition text-[#18D2FA] font-medium">
                  Business Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services/integrations" className="hover:text-white transition text-[#18D2FA] font-medium">
                  Software &amp; API Integrations
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition text-slate-300 font-semibold">
                  All Services &amp; Pricing Catalog →
                </Link>
              </li>
              <li>
                <Link to="/services/website-development" className="hover:text-white transition">
                  Website Dev (4 Packages: Ksh 7k - 85k)
                </Link>
              </li>
              <li>
                <Link to="/services/social-media" className="hover:text-white transition">
                  Social Media Video Management (Ksh 4,500/mo)
                </Link>
              </li>
              <li>
                <Link to="/services/meta-ads" className="hover:text-white transition">
                  Meta Ads Placement (FB & IG)
                </Link>
              </li>
              <li>
                <Link to="/services/google-business" className="hover:text-white transition">
                  Google Search & Maps (GMB) Setup
                </Link>
              </li>
              <li>
                <Link to="/services/email-management" className="hover:text-white transition">
                  Business Email (Outlook & Workspace)
                </Link>
              </li>
              <li>
                <Link to="/services/seo-rank" className="hover:text-white transition">
                  Local SEO & Rank Booster
                </Link>
              </li>
              <li>
                <Link to="/services/google-family-link" className="hover:text-white transition text-brand-gold font-medium">
                  Google Family Link (Schools & Parents)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Software Systems */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Software & Systems</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/software" className="hover:text-white transition text-brand-cyan font-semibold">
                  All Software Platforms →
                </Link>
              </li>
              <li>
                <Link to="/software/haxpos" className="hover:text-white transition">
                  HaxPos Universal Point-of-Sale
                </Link>
              </li>
              <li>
                <Link to="/software/elittego" className="hover:text-white transition">
                  ElitteGo On-Demand Delivery Platform
                </Link>
              </li>
              <li>
                <Link to="/software/haxone" className="hover:text-white transition">
                  HaxOne Hospitality Suite (PMS & KOT)
                </Link>
              </li>
              <li>
                <Link to="/software/hospital-system" className="hover:text-white transition">
                  Hospital & Clinic Management System
                </Link>
              </li>
              <li>
                <Link to="/software/odoo" className="hover:text-white transition">
                  Odoo ERP Implementation
                </Link>
              </li>
              <li>
                <Link to="/software/zoho" className="hover:text-white transition">
                  Zoho CRM & Books Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Action Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm">Company & Tools</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link to="/services" className="hover:text-white transition">
                  All Services & Packages
                </Link>
              </li>
              <li>
                <Link to="/kits" className="hover:text-white transition text-brand-cyan font-bold">
                  Digital Business Kits (40 Industries)
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="hover:text-white transition">
                  Quote Calculator (10% Off)
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition text-brand-cyan">
                  Case Studies &amp; Clients
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-white transition">
                  Why Choose Haxor
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact &amp; Support
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Hello Haxor MTC, I need assistance with a project inquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-green text-white font-bold text-xs shadow-glow-whatsapp hover:bg-[#20ba5a] transition"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                WhatsApp
              </a>
            </div>

            <div className="pt-2">
              <CurrencySelector compact={true} />
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition pt-1 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Back to Top
              </button>
            </div>
          </div>

        </div>

        {/* Payment Methods */}
        <div className="py-8 border-b border-slate-800">
          <PaymentMethods variant="dark" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>Haxor MTC</strong> ({CONTACT_INFO.domain}). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-medium">{CONTACT_INFO.domain}</span>
            <span>•</span>
            <span className="text-slate-400">Business Technology Partner, AI Automation & Enterprise Software Solutions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
