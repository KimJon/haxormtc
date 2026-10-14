import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MessageSquare, 
  Mail, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Workflow, 
  Cpu, 
  Layers,
  Globe
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import BrandLogo from './BrandLogo';
import CurrencySelector from './CurrencySelector';
import TopTicker from './TopTicker';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I would like to discuss a white-label CRM & automation technical delivery project."
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced mouse enter/leave so the dropdown NEVER flickers or closes unexpectedly
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <div className="sticky top-0 z-50 w-full">
      <TopTicker standalone={true} />
      <header className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs' 
          : 'bg-white border-b border-slate-200'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Brand Logo */}
          <BrandLogo />

          {/* Clarity Performance Style Monochromatic Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#111111] font-work-sans">
            <Link 
              to="/" 
              className={`transition-colors py-1 ${
                location.pathname === '/'
                  ? 'text-black font-bold border-b-2 border-black'
                  : 'hover:text-black text-slate-700'
              }`}
            >
              Home
            </Link>

            {/* Seamless Services Dropdown with zero deadzone gap */}
            <div 
              className="relative py-2" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 transition-colors py-1 cursor-pointer ${
                  isServicesActive
                    ? 'text-black font-bold border-b-2 border-black'
                    : 'hover:text-black text-slate-700'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-black' : 'text-slate-400'}`} />
              </button>

              {/* Zero-gap dropdown container with internal padding bridge */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-80 z-50 animate-in fade-in zoom-in-95 duration-100"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-3">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100">
                      Technical Delivery Services
                    </div>
                    
                    <div className="pt-1 space-y-1">
                      <Link
                        to="/services/crm-implementation"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-black group-hover:text-white transition">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-black">
                            CRM Implementation
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            Zoho, Odoo &amp; pipeline architecture
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/services/business-automation"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-black group-hover:text-white transition">
                          <Workflow className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-black">
                            Business Automation
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            Workflows, triggers &amp; task logic
                          </div>
                        </div>
                      </Link>

                      <Link
                        to="/services/integrations"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:bg-black group-hover:text-white transition">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 group-hover:text-black">
                            Software Integrations
                          </div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                            REST APIs, webhooks &amp; data sync
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="my-1.5 border-t border-slate-100" />

                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-900 hover:bg-slate-50 rounded-xl transition"
                    >
                      <span>Explore All Capabilities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Agency Partners */}
            <Link 
              to="/agency-partners" 
              className={`transition-colors py-1 flex items-center gap-1.5 ${
                location.pathname === '/agency-partners'
                  ? 'text-black font-bold border-b-2 border-black'
                  : 'hover:text-black text-slate-700'
              }`}
            >
              <span>Agency Partners</span>
              <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-800 rounded border border-slate-200">
                White-Label
              </span>
            </Link>

            <Link 
              to="/work" 
              className={`transition-colors py-1 ${
                location.pathname === '/work' || location.pathname === '/portfolio'
                  ? 'text-black font-bold border-b-2 border-black'
                  : 'hover:text-black text-slate-700'
              }`}
            >
              Work
            </Link>

            <Link 
              to="/about" 
              className={`transition-colors py-1 ${
                location.pathname === '/about' || location.pathname === '/about-us' || location.pathname === '/why-us'
                  ? 'text-black font-bold border-b-2 border-black'
                  : 'hover:text-black text-slate-700'
              }`}
            >
              About
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 font-work-sans">
            <CurrencySelector />

            <a
              href={`mailto:${CONTACT_INFO.emailOfficial}`}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-black flex items-center gap-1.5 rounded-xl hover:bg-slate-50 transition border border-slate-200"
              title="Direct Inquiries"
            >
              <Mail className="w-3.5 h-3.5 text-slate-600" />
              <span>Email Us</span>
            </a>

            {/* Clarity Solid Black Button */}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#111111] hover:bg-black transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Discuss a Project</span>
              <span className="text-white">→</span>
            </Link>
          </div>

          {/* Mobile Currency & Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <CurrencySelector compact={true} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-900 bg-slate-50 hover:bg-slate-100 transition border border-slate-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet Menu Trigger (sm to lg) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-900 bg-slate-50 hover:bg-slate-100 hidden sm:block lg:hidden transition border border-slate-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          OPTIMIZED MOBILE DRAWER (Full screen smooth slide-over, touch friendly)
          ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative bg-white border-t border-slate-200 w-full max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6 space-y-6 shadow-2xl font-work-sans">
            <nav className="flex flex-col space-y-2 text-base font-semibold text-[#111111]">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-xl transition ${
                  location.pathname === '/'
                    ? 'bg-slate-100 text-black font-bold'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full py-3 px-3 flex items-center justify-between font-bold text-slate-900 hover:bg-slate-100 transition"
                >
                  <span className="text-base">Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="px-3 pb-3 space-y-1 bg-white border-t border-slate-100 pt-2 text-sm">
                    <Link
                      to="/services/crm-implementation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      CRM Implementation (Zoho, Odoo)
                    </Link>
                    <Link
                      to="/services/business-automation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      Business Automation
                    </Link>
                    <Link
                      to="/services/integrations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-2.5 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                    >
                      Software &amp; API Integrations
                    </Link>
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 px-2.5 rounded-lg text-black font-bold hover:bg-slate-50 text-xs border-t border-slate-100 mt-1"
                    >
                      All Services &rarr;
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/agency-partners"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-xl transition flex items-center justify-between ${
                  location.pathname === '/agency-partners'
                    ? 'bg-slate-100 text-black font-bold'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                <span>Agency Partners</span>
                <span className="text-[10px] uppercase font-bold bg-black text-white px-2 py-0.5 rounded">
                  White-Label
                </span>
              </Link>

              <Link
                to="/work"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-xl transition ${
                  location.pathname === '/work' || location.pathname === '/portfolio'
                    ? 'bg-slate-100 text-black font-bold'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                Work &amp; Case Studies
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-xl transition ${
                  location.pathname === '/about' || location.pathname === '/about-us' || location.pathname === '/why-us'
                    ? 'bg-slate-100 text-black font-bold'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                About Haxor MTC
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-3 rounded-xl transition ${
                  location.pathname === '/contact'
                    ? 'bg-slate-100 text-black font-bold'
                    : 'hover:bg-slate-50 text-slate-800'
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-600">Currency:</span>
                <CurrencySelector />
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center rounded-xl text-sm font-bold text-white bg-[#111111] hover:bg-black flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Discuss a Project</span>
                <span>→</span>
              </Link>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Technical Desk</span>
              </a>

              <div className="text-center text-xs text-slate-500 pt-1">
                {CONTACT_INFO.emailOfficial}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </div>
  );
}
