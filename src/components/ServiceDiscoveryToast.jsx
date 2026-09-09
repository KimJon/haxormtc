import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  TrendingUp, 
  Globe, 
  Store, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

const DISCOVERY_SERVICES = [
  {
    id: 'whatsapp-commerce',
    badge: 'Trending High-ROI',
    title: 'WhatsApp Commerce & M-Pesa Ordering',
    desc: 'Turn WhatsApp into an automated sales channel with interactive catalogs, in-chat M-Pesa STK push & CRM sync.',
    priceLabel: 'From Ksh 15,000',
    link: '/services',
    icon: MessageSquare,
    color: 'emerald',
    whatsappMsg: 'Hello Haxor MTC, I saw your WhatsApp Commerce & M-Pesa ordering solution and would like full setup details.'
  },
  {
    id: 'social-media',
    badge: 'Monthly Growth',
    title: 'Social Media Video Management',
    desc: '20 to 30 viral short-form videos edited & posted to TikTok, Instagram & Facebook every month.',
    priceLabel: 'Only Ksh 4,500 / month',
    link: '/services/social-media',
    icon: TrendingUp,
    color: 'coral',
    whatsappMsg: 'Hello Haxor MTC, I want to enroll my business in your Social Media Video Posting package (Ksh 4,500/month).'
  },
  {
    id: 'single-landing',
    badge: 'Fast Turnaround',
    title: 'Single-Page Business Website',
    desc: 'High-converting mobile-first web presence inclusive of free custom domain, 1-year hosting & SSL certificate.',
    priceLabel: 'Ksh 7,000 (All Inclusive)',
    link: '/services/website-development',
    icon: Globe,
    color: 'cyan',
    whatsappMsg: 'Hello Haxor MTC, I would like to order the Single-Page Website package at Ksh 7,000 with free domain and hosting.'
  },
  {
    id: 'google-maps',
    badge: 'Local Discovery',
    title: 'Google Maps 3-Pack Rank Booster',
    desc: 'Get your shop, clinic, or restaurant ranked #1 when customers search for your trade or services nearby.',
    priceLabel: 'From Ksh 500',
    link: '/services/google-business',
    icon: Store,
    color: 'amber',
    whatsappMsg: 'Hello Haxor MTC, I want to optimize my Google Business Profile and rank in the Google Maps 3-Pack.'
  },
  {
    id: 'haxpos-demo',
    badge: 'Retail & Dining',
    title: 'HaxPos Universal Point of Sale',
    desc: 'Lightning-fast touchscreen POS with barcode scanning, automated M-Pesa STK push & thermal receipt printing.',
    priceLabel: 'Free Live Demo Available',
    link: '/software/haxpos',
    icon: Layers,
    color: 'purple',
    whatsappMsg: 'Hello Haxor MTC, I would like to schedule a free demonstration of the HaxPos Universal POS system.'
  },
  {
    id: 'family-link',
    badge: 'Child & Student Safety',
    title: 'Google Family Link Integration',
    desc: 'Turnkey parental control & school digital device management for tablets and smartphones across Kenya.',
    priceLabel: 'Ksh 1,000 / device',
    link: '/services/google-family-link',
    icon: ShieldCheck,
    color: 'blue',
    whatsappMsg: 'Hello Haxor MTC, I want to inquire about Google Family Link device integration for our students/children.'
  }
];

export default function ServiceDiscoveryToast() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(() => Math.floor(Math.random() * DISCOVERY_SERVICES.length));

  useEffect(() => {
    // Check if dismissed in this browser session
    try {
      if (sessionStorage.getItem('haxor_toast_dismissed') === 'true') {
        return;
      }
    } catch {
      // Ignore storage restrictions
    }

    const handleScroll = () => {
      if (dismissed) return;
      // Show when scrolled down past 450px
      if (window.scrollY > 450) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    try {
      sessionStorage.setItem('haxor_toast_dismissed', 'true');
    } catch {
      // Ignore
    }
  };

  const handleNext = () => {
    setServiceIndex((prev) => (prev + 1) % DISCOVERY_SERVICES.length);
  };

  if (!visible || dismissed) return null;

  const currentService = DISCOVERY_SERVICES[serviceIndex];
  const IconComponent = currentService.icon;
  const whatsappUrl = createWhatsAppUrl(currentService.whatsappMsg);

  return (
    <div 
      role="region" 
      aria-label="Featured Service Discovery" 
      className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 max-w-[340px] sm:max-w-md w-full animate-fade-in pointer-events-auto"
    >
      <div className="bg-white/98 backdrop-blur-xl rounded-2xl border border-slate-200/90 shadow-2xl p-4 sm:p-5 relative transition-all">
        
        {/* Header with badge and controls */}
        <div className="flex items-center justify-between mb-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-[11px] font-bold text-brand-cyanDeep uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>{currentService.badge}</span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleNext}
              className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 px-2 py-0.5 rounded-md hover:bg-slate-100 transition cursor-pointer"
              title="See another service"
            >
              Next
            </button>
            <button
              onClick={handleDismiss}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition cursor-pointer"
              title="Close recommendation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex items-start gap-3 mt-2">
          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-2xs">
            <IconComponent className="w-5 h-5 text-brand-cyanDeep" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-slate-900 leading-tight line-clamp-1">
              {currentService.title}
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
              {currentService.desc}
            </p>
            <div className="mt-2 text-[11px] font-bold text-emerald-700 font-mono">
              {currentService.priceLabel}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
          <Link
            to={currentService.link}
            onClick={() => setVisible(false)}
            className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold text-center flex items-center justify-center gap-1 transition"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-xl bg-brand-green hover:bg-[#20ba5a] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
