import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MessageSquare, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  Briefcase, 
  ChevronDown, 
  Workflow, 
  Cpu, 
  Layers,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import BrandLogo from './BrandLogo';
import CurrencySelector from './CurrencySelector';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am visiting haxormtc.com and would like to discuss a project / agency partnership."
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-[#3F4040]/10 shadow-sm' 
        : 'bg-white/90 backdrop-blur-md border-b border-[#3F4040]/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Brand Logo */}
          <BrandLogo />

          {/* Clarity-Style B2B Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#3F4040] font-sans">
            <Link 
              to="/" 
              className={`transition-colors py-1 ${
                location.pathname === '/'
                  ? 'text-[#18D2FA] font-bold border-b-2 border-[#18D2FA]'
                  : 'hover:text-[#18D2FA]'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 transition-colors py-1 ${
                  isServicesActive
                    ? 'text-[#18D2FA] font-bold border-b-2 border-[#18D2FA]'
                    : 'hover:text-[#18D2FA]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#18D2FA]' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200/90 shadow-xl p-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1">
                    Core Technical Delivery
                  </div>
                  <Link
                    to="/services/crm-implementation"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                  >
                    <div className="p-2 rounded-lg bg-[#18D2FA]/10 text-[#0EA5C6] group-hover:bg-[#18D2FA] group-hover:text-white transition">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#0EA5C6]">
                        CRM Implementation
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        Zoho, Odoo &amp; pipeline architecture
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/services/business-automation"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                  >
                    <div className="p-2 rounded-lg bg-[#FE4775]/10 text-[#FE4775] group-hover:bg-[#FE4775] group-hover:text-white transition">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-[#FE4775]">
                        Business Automation
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        Workflows, notifications &amp; triggers
                      </div>
                    </div>
                  </Link>

                  <Link
                    to="/services/integrations"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                  >
                    <div className="p-2 rounded-lg bg-[#FED147]/20 text-amber-700 group-hover:bg-[#FED147] group-hover:text-slate-900 transition">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 group-hover:text-amber-800">
                        Software Integrations
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        APIs, webhooks &amp; data sync
                      </div>
                    </div>
                  </Link>

                  <div className="my-1.5 border-t border-slate-100" />

                  <Link
                    to="/services"
                    className="flex items-center justify-between px-3 py-2 text-xs font-bold text-[#0EA5C6] hover:bg-cyan-50/50 rounded-xl transition"
                  >
                    <span>View All Services &amp; Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Agency Partners - Highlighted Prominently */}
            <Link 
              to="/agency-partners" 
              className={`transition-all py-1.5 px-3 rounded-full flex items-center gap-1.5 ${
                location.pathname === '/agency-partners'
                  ? 'bg-[#18D2FA]/15 text-[#0EA5C6] font-bold border border-[#18D2FA]/40 shadow-xs'
                  : 'hover:bg-[#18D2FA]/10 text-[#3F4040] hover:text-[#0EA5C6] border border-transparent'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 text-[#18D2FA]" />
              <span>Agency Partners</span>
              <span className="px-1.5 py-0.2 text-[9px] font-black uppercase tracking-wider bg-[#FE4775] text-white rounded-full">
                White-Label
              </span>
            </Link>

            <Link 
              to="/work" 
              className={`transition-colors py-1 ${
                location.pathname === '/work' || location.pathname === '/portfolio'
                  ? 'text-[#18D2FA] font-bold border-b-2 border-[#18D2FA]'
                  : 'hover:text-[#18D2FA]'
              }`}
            >
              Our Work
            </Link>

            <Link 
              to="/about" 
              className={`transition-colors py-1 ${
                location.pathname === '/about' || location.pathname === '/why-us'
                  ? 'text-[#18D2FA] font-bold border-b-2 border-[#18D2FA]'
                  : 'hover:text-[#18D2FA]'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <CurrencySelector />

            <a
              href={`mailto:${CONTACT_INFO.emailOfficial}`}
              className="px-3 py-2 text-xs font-bold text-[#3F4040] hover:text-[#0EA5C6] flex items-center gap-1.5 rounded-xl hover:bg-slate-50 transition border border-[#3F4040]/15"
              title="Email Technical Desk Directly"
            >
              <Mail className="w-3.5 h-3.5 text-[#18D2FA]" />
              <span className="hidden xl:inline">haxorconsults@gmail.com</span>
              <span className="xl:hidden">Email</span>
            </a>

            <Link
              to="/contact"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FE4775] hover:bg-[#e43864] shadow-md hover:shadow-lg flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>

          {/* Mobile Currency & Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <CurrencySelector compact={true} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet Menu Button (sm to lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 hidden sm:block lg:hidden transition border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/90 bg-white/98 backdrop-blur-xl px-5 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-1.5 text-sm font-semibold text-[#3F4040]">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/'
                  ? 'bg-[#18D2FA]/10 text-[#0EA5C6] font-bold'
                  : 'hover:text-[#0EA5C6] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/agency-partners"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2.5 px-3 rounded-xl transition flex items-center justify-between ${
                location.pathname === '/agency-partners'
                  ? 'bg-[#18D2FA]/15 text-[#0EA5C6] font-bold border border-[#18D2FA]/30'
                  : 'hover:text-[#0EA5C6] hover:bg-slate-50 bg-[#18D2FA]/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#18D2FA]" />
                <span className="font-bold text-[#1C1D1D]">Agency Partners</span>
              </div>
              <span className="text-[10px] uppercase font-black bg-[#FE4775] text-white px-2 py-0.5 rounded-full">
                White-Label
              </span>
            </Link>

            {/* Core Services Sub-links */}
            <div className="pl-3 py-1 space-y-1 border-l-2 border-[#18D2FA]/30 my-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider pl-2">
                Services
              </div>
              <Link
                to="/services/crm-implementation"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 px-2 rounded-lg text-xs text-slate-700 hover:text-[#0EA5C6] hover:bg-slate-50"
              >
                CRM Implementation
              </Link>
              <Link
                to="/services/business-automation"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 px-2 rounded-lg text-xs text-slate-700 hover:text-[#0EA5C6] hover:bg-slate-50"
              >
                Business Automation
              </Link>
              <Link
                to="/services/integrations"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 px-2 rounded-lg text-xs text-slate-700 hover:text-[#0EA5C6] hover:bg-slate-50"
              >
                Software Integrations
              </Link>
              <Link
                to="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 px-2 rounded-lg text-xs font-bold text-[#0EA5C6] hover:bg-cyan-50/50"
              >
                All Services &amp; Packages &rarr;
              </Link>
            </div>

            <Link
              to="/work"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/work' || location.pathname === '/portfolio'
                  ? 'bg-[#18D2FA]/10 text-[#0EA5C6] font-bold'
                  : 'hover:text-[#0EA5C6] hover:bg-slate-50'
              }`}
            >
              Our Work &amp; Case Studies
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/about' || location.pathname === '/why-us'
                  ? 'bg-[#18D2FA]/10 text-[#0EA5C6] font-bold'
                  : 'hover:text-[#0EA5C6] hover:bg-slate-50'
              }`}
            >
              About Haxor
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/contact'
                  ? 'bg-[#18D2FA]/10 text-[#0EA5C6] font-bold'
                  : 'hover:text-[#0EA5C6] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-200/90 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-3 py-1.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600">Currency:</span>
              <CurrencySelector />
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl text-xs font-bold text-white bg-[#FE4775] hover:bg-[#e43864] flex items-center justify-center gap-2 shadow-md"
            >
              <span>Discuss a Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-xl text-xs font-bold text-white bg-brand-green flex items-center justify-center gap-2 shadow-glow-whatsapp"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
