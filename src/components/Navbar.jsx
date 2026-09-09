import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, Mail, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import BrandLogo from './BrandLogo';
import CurrencySelector from './CurrencySelector';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const defaultWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I am visiting haxormtc.com and would like to inquire about your services."
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg border-b border-slate-200/90 shadow-md' 
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-200 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          
          {/* Logo with Link to Home */}
          <BrandLogo />

          {/* Clean, Conversion-Focused Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-800 font-sans">
            <Link 
              to="/services" 
              className={`transition-colors py-1 ${
                location.pathname === '/services'
                  ? 'text-brand-cyanDeep font-extrabold border-b-2 border-brand-cyanDeep'
                  : 'hover:text-brand-cyanDeep'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/kits" 
              className={`transition-colors py-1 flex items-center gap-1.5 ${
                location.pathname === '/kits' || location.pathname === '/solutions/kits'
                  ? 'text-brand-cyanDeep font-extrabold border-b-2 border-brand-cyanDeep'
                  : 'hover:text-brand-cyanDeep'
              }`}
            >
              <span>Business Kits</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-cyan-50 text-brand-cyanDeep border border-brand-cyan/20 rounded">
                40 Kits
              </span>
            </Link>
            <Link 
              to="/software" 
              className={`transition-colors py-1 ${
                location.pathname === '/software'
                  ? 'text-brand-cyanDeep font-extrabold border-b-2 border-brand-cyanDeep'
                  : 'hover:text-brand-cyanDeep'
              }`}
            >
              Software
            </Link>
            <Link 
              to="/calculator" 
              className={`transition-colors py-1 flex items-center gap-1.5 ${
                location.pathname === '/calculator'
                  ? 'text-brand-cyanDeep font-extrabold border-b-2 border-brand-cyanDeep'
                  : 'hover:text-brand-cyanDeep'
              }`}
            >
              <span>Calculator</span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 rounded">
                Quote
              </span>
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-colors py-1 ${
                location.pathname === '/portfolio'
                  ? 'text-brand-cyanDeep font-extrabold border-b-2 border-brand-cyanDeep'
                  : 'hover:text-brand-cyanDeep'
              }`}
            >
              Case Studies
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors py-1 ${
                location.pathname === '/contact'
                  ? 'text-brand-cyanDeep font-extrabold border-b-2 border-brand-cyanDeep'
                  : 'hover:text-brand-cyanDeep'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Conversion Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <CurrencySelector />

            <a
              href={`mailto:${CONTACT_INFO.emailOfficial}`}
              className="px-3 py-2 text-xs font-bold text-[#373656] hover:text-brand-cyanDeep flex items-center gap-1.5 rounded-lg hover:bg-slate-50 transition border border-slate-200"
              title="Email Us Directly"
            >
              <Mail className="w-3.5 h-3.5 text-brand-cyanDeep" />
              <span>Email Us</span>
            </a>

            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-1.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 lg:hidden transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/services'
                  ? 'bg-cyan-50 text-brand-cyanDeep font-extrabold'
                  : 'hover:text-brand-cyanDeep hover:bg-slate-50'
              }`}
            >
              Services
            </Link>
            <Link
              to="/kits"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition flex items-center justify-between ${
                location.pathname === '/kits' || location.pathname === '/solutions/kits'
                  ? 'bg-cyan-50 text-brand-cyanDeep font-extrabold'
                  : 'hover:text-brand-cyanDeep hover:bg-slate-50'
              }`}
            >
              <span>Business Kits</span>
              <span className="text-xs bg-cyan-100 text-brand-cyanDeep font-bold px-2 py-0.5 rounded">40 Kits</span>
            </Link>
            <Link
              to="/software"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/software'
                  ? 'bg-cyan-50 text-brand-cyanDeep font-extrabold'
                  : 'hover:text-brand-cyanDeep hover:bg-slate-50'
              }`}
            >
              Software
            </Link>
            <Link
              to="/calculator"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition flex items-center justify-between ${
                location.pathname === '/calculator'
                  ? 'bg-cyan-50 text-brand-cyanDeep font-extrabold'
                  : 'hover:text-brand-cyanDeep hover:bg-slate-50'
              }`}
            >
              <span>Calculator</span>
              <span className="text-xs bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">Quote</span>
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/portfolio'
                  ? 'bg-cyan-50 text-brand-cyanDeep font-extrabold'
                  : 'hover:text-brand-cyanDeep hover:bg-slate-50'
              }`}
            >
              Case Studies &amp; Clients
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-3 rounded-xl transition ${
                location.pathname === '/contact'
                  ? 'bg-cyan-50 text-brand-cyanDeep font-extrabold'
                  : 'hover:text-brand-cyanDeep hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 py-1 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600">Currency:</span>
              <CurrencySelector />
            </div>

            <a
              href={`mailto:${CONTACT_INFO.emailOfficial}`}
              className="w-full py-2.5 text-center rounded-xl text-sm font-bold text-[#373656] border border-slate-200 bg-slate-50 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-brand-cyanDeep" />
              Email Us
            </a>
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-xl text-sm font-bold text-white bg-brand-green flex items-center justify-center gap-2 shadow-glow-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
