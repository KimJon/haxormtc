import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, MessageSquare } from 'lucide-react';
import { FacebookLogo, XLogo } from './OfficialLogos';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import BrandLogo from './BrandLogo';
import CurrencySelector from './CurrencySelector';
import PaymentMethods from './PaymentMethods';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-slate-400 text-xs relative z-10 pt-16 pb-28 sm:pb-12 border-t border-neutral-800 font-work-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" />

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              White-label CRM implementation, workflow automation, and custom software integrations for digital agencies, consultancies, and growing businesses worldwide.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${CONTACT_INFO.emailOfficial}`} className="hover:text-white transition font-mono">
                  {CONTACT_INFO.emailOfficial}
                </a>
              </div>
              <div className="text-[11px] text-slate-500">
                UK • Europe • Australia • Worldwide Remote Delivery
              </div>
            </div>
          </div>

          {/* Quick Links: Core Technical Delivery */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Technical Delivery</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/agency-partners" className="hover:text-white transition text-white font-bold flex items-center gap-1.5">
                  <span>Agency White-Label Hub</span>
                  <span className="text-[9px] bg-white/20 text-white px-1.5 py-0.2 rounded uppercase">Partner</span>
                </Link>
              </li>
              <li>
                <Link to="/services/crm-implementation" className="hover:text-white transition">
                  CRM Implementation (Zoho, Odoo, HubSpot)
                </Link>
              </li>
              <li>
                <Link to="/services/business-automation" className="hover:text-white transition">
                  Business Workflow Automation
                </Link>
              </li>
              <li>
                <Link to="/services/integrations" className="hover:text-white transition">
                  Software &amp; API Integrations
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition text-slate-300 font-semibold">
                  All Capabilities Catalog &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links: Enterprise Platforms */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm">Platforms &amp; Systems</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/software/zoho" className="hover:text-white transition">
                  Zoho CRM &amp; Books Consulting
                </Link>
              </li>
              <li>
                <Link to="/software/odoo" className="hover:text-white transition">
                  Odoo ERP Implementation
                </Link>
              </li>
              <li>
                <Link to="/software/haxpos" className="hover:text-white transition">
                  Cloud POS &amp; Inventory Systems
                </Link>
              </li>
              <li>
                <Link to="/software/haxone" className="hover:text-white transition">
                  Hospitality PMS &amp; Booking Engines
                </Link>
              </li>
              <li>
                <Link to="/software" className="hover:text-white transition text-slate-300 font-semibold">
                  All Software Platforms &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Action Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm">Company</h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <Link to="/work" className="hover:text-white transition">
                  Work &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Haxor MTC
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact &amp; Scoping
                </Link>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Hello Haxor MTC, I need assistance with a white-label project inquiry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-slate-200 transition"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-black" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            <div className="pt-1">
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

            {/* Social Channels */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://www.facebook.com/haxorconsults/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white transition"
                aria-label="Haxor MTC on Facebook"
              >
                <FacebookLogo className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://x.com/haxorconsults"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white transition"
                aria-label="Haxor MTC on X"
              >
                <XLogo className="w-3.5 h-3.5 fill-current" />
              </a>
              <span className="text-[11px] text-slate-500 ml-1">Slack: @haxorconsults</span>
            </div>
          </div>

        </div>

        {/* Global Invoicing & Payment Methods */}
        <div className="py-8 border-b border-neutral-800">
          <PaymentMethods variant="dark" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2018 - {new Date().getFullYear()} <strong>Haxor MTC</strong>. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
              className="text-slate-400 hover:text-white transition underline cursor-pointer"
            >
              Cookie Preferences
            </button>
            <span>•</span>
            <a
              href="https://www.facebook.com/haxorconsults/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              Facebook
            </a>
            <span>•</span>
            <a
              href="https://x.com/haxorconsults"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition"
            >
              X
            </a>
            <span>•</span>
            <span className="text-slate-400 font-medium">{CONTACT_INFO.domain}</span>
            <span>•</span>
            <span className="text-slate-400">White-Label Technical Delivery Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
