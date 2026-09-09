import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  X, 
  ExternalLink, 
  Calculator, 
  Layers, 
  Globe, 
  CreditCard, 
  Settings, 
  TrendingUp, 
  Sparkles,
  Hotel,
  Utensils,
  Store,
  Package,
  GraduationCap,
  BookOpen,
  Activity,
  Heart,
  Building,
  Truck,
  Wrench,
  Briefcase,
  FileText,
  ShieldCheck,
  Users,
  Compass,
  Car,
  Scissors,
  Zap,
  Cpu,
  Sun,
  ShoppingBag,
  Smartphone,
  Camera,
  Printer,
  Shield,
  UserCheck
} from 'lucide-react';
import { INDUSTRY_KITS_40, KIT_CATEGORIES } from '../data/industryKitsData';
import { createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';

/**
 * Dynamic Icon resolver for industry kits.
 * Strictly using Lucide vector icons — 0 emojis.
 */
const ICON_MAP = {
  Hotel,
  Utensils,
  Store,
  Package,
  GraduationCap,
  BookOpen,
  Activity,
  Heart,
  Building,
  Truck,
  Wrench,
  Briefcase,
  FileText,
  ShieldCheck,
  CreditCard,
  Globe,
  Users,
  Compass,
  Car,
  Scissors,
  Zap,
  Cpu,
  Sun,
  ShoppingBag,
  Layers,
  Smartphone,
  Sparkles,
  Camera,
  Printer,
  Shield,
  UserCheck
};

/**
 * BUSINESS KITS SHOWCASE COMPONENT
 * ================================
 * Enables visitors on both Home and dedicated /kits pages to:
 * 1. Search in real-time across 40 distinct industries, trades, and services.
 * 2. Filter by sector categories (Hospitality, Retail, Health, Education, Trades, etc.).
 * 3. Inspect the 4 core pillars for each industry (Presence, Sales, Operations, Growth).
 * 4. Open an in-depth modal blueprint with full deliverables checklist.
 * 5. One-click configure in Quote Calculator or connect via WhatsApp.
 *
 * HUMAN EDITING INSTRUCTIONS:
 * - To modify the industry data, edit `src/data/industryKitsData.js`.
 * - To adjust layout or cards per row, modify Tailwind grid classes below.
 */
export default function BusinessKitsShowcase({ 
  limit = null, 
  title = "Turnkey Digital Business Kits for 40+ Industries",
  subtitle = "Complete, production-ready operational stacks engineered for businesses across all 47 counties and international markets. Search your sector below.",
  showSearch = true,
  fullPage = false
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedKitModal, setSelectedKitModal] = useState(null);

  const { convertPrice, currency, currencySymbol } = useCurrency();

  // Price formatting helper based on active currency
  const fmt = (val) => {
    return currency === 'KES' 
      ? `KSh ${val.toLocaleString()}` 
      : `${currencySymbol}${val.toLocaleString()}`;
  };

  // Filter kits based on search input and active category
  const filteredKits = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    
    return INDUSTRY_KITS_40.filter((kit) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || kit.category === activeCategory;
      if (!matchesCategory) return false;

      // Search query filter (matches name, tagline, category, or pillar items)
      if (!query) return true;

      const inName = kit.name.toLowerCase().includes(query);
      const inTagline = kit.tagline.toLowerCase().includes(query);
      const inProducts = kit.haxorProducts.toLowerCase().includes(query);
      const inBadge = kit.badge.toLowerCase().includes(query);
      const inPresence = kit.presence.some(p => p.toLowerCase().includes(query));
      const inSales = kit.sales.some(s => s.toLowerCase().includes(query));
      const inOperations = kit.operations.some(o => o.toLowerCase().includes(query));
      const inGrowth = kit.growth.some(g => g.toLowerCase().includes(query));

      return inName || inTagline || inProducts || inBadge || inPresence || inSales || inOperations || inGrowth;
    });
  }, [searchQuery, activeCategory]);

  const displayedKits = limit ? filteredKits.slice(0, limit) : filteredKits;

  // Build WhatsApp URL with kit prefilled
  const getKitWhatsAppUrl = (kit, phased = false) => {
    const priceDisplay = fmt(convertPrice(kit.basePriceKES));
    const msg = phased
      ? `Hello Haxor MTC, I am interested in the ${kit.name} Digital Business Kit. I would like to start with specific phases first (pay only for what I need now) and activate the rest later. Please share phased rollout rates.`
      : `Hello Haxor MTC, I am interested in the ${kit.name} Digital Business Kit (${priceDisplay}, ${currency}) featured on your website. I would like to get full deployment details for my business.`;
    return createWhatsAppUrl(msg);
  };

  return (
    <section id="business-kits" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Turnkey Industry Architectures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-recoleta">
            {title}
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed font-sans">
            {subtitle}
          </p>

          {/* Phased Milestone Delivery Highlight Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm block">
                  Pay As You Grow — Phased Milestone Delivery
                </span>
                <p className="text-xs text-slate-600 mt-0.5">
                  You do not need to pay for the complete kit upfront. You can unlock individual phases at separate times (e.g. launch your website and Google profile first, then add the booking engine or inventory system later). You only pay for the service needed at that time.
                </p>
              </div>
            </div>
            <Link
              to="/calculator"
              className="shrink-0 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Customize Phases</span>
            </Link>
          </div>
        </div>

        {/* Real-time Search & Sector Filter Controls */}
        {showSearch && (
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            
            {/* Interactive Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your industry, trade, or service (e.g., Hotel, Clinic, School, Salon, Law, Garage, Hardware)..."
                className="w-full pl-12 pr-10 py-4 bg-white border border-slate-300 rounded-2xl text-slate-900 text-sm sm:text-base placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-brand-cyan transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Sector Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
              {KIT_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition cursor-pointer ${
                      isActive
                        ? 'bg-slate-900 text-white font-bold shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Match Counter & Reset */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                Showing <strong>{displayedKits.length}</strong> of <strong>40</strong> Industry Kits across all 47 counties & regional markets
              </span>
              {(searchQuery || activeCategory !== 'all') && (
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="text-brand-cyanDeep font-bold hover:underline cursor-pointer"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        )}

        {/* 40 Kits Grid */}
        {displayedKits.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">No matching industry kit found</h3>
            <p className="text-sm text-slate-600 mb-6">
              We engineer custom digital solutions for any unique industry or trade not listed here.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition cursor-pointer"
              >
                Clear Search
              </button>
              <a
                href={createWhatsAppUrl("Hello Haxor MTC, I have a custom industry requirement not found in the search.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold bg-brand-green text-white rounded-xl hover:bg-[#20ba5a] transition flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Custom Request</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedKits.map((kit) => {
              const IconComp = ICON_MAP[kit.iconName] || Briefcase;
              const convertedPrice = convertPrice(kit.basePriceKES);
              const formattedPrice = fmt(convertedPrice);

              return (
                <div 
                  key={kit.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-cyan/60 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-brand-cyan/20 text-brand-cyanDeep flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-700 border border-slate-200">
                          {kit.badge}
                        </span>
                        <div className="text-[11px] text-slate-400 font-mono mt-1">Kit #{kit.number}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-cyanDeep transition font-recoleta">
                      {kit.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                      {kit.tagline}
                    </p>
                  </div>

                  {/* 4 Core Pillars Summary */}
                  <div className="p-6 bg-slate-50/40 space-y-3 flex-grow text-xs">
                    <div className="font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-2">
                      4 Turnkey Kit Pillars:
                    </div>

                    {/* Pillar 1: Digital Presence */}
                    <div className="flex items-start gap-2">
                      <Globe className="w-3.5 h-3.5 text-brand-cyanDeep shrink-0 mt-0.5" />
                      <span className="text-slate-700 line-clamp-1">
                        <strong>Presence:</strong> {kit.presence[0]}
                      </span>
                    </div>

                    {/* Pillar 2: Sales & Transactions */}
                    <div className="flex items-start gap-2">
                      <CreditCard className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span className="text-slate-700 line-clamp-1">
                        <strong>Sales:</strong> {kit.sales[0]}
                      </span>
                    </div>

                    {/* Pillar 3: Operations */}
                    <div className="flex items-start gap-2">
                      <Settings className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                      <span className="text-slate-700 line-clamp-1">
                        <strong>Operations:</strong> {kit.operations[0]}
                      </span>
                    </div>

                    {/* Pillar 4: Growth */}
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                      <span className="text-slate-700 line-clamp-1">
                        <strong>Growth:</strong> {kit.growth[0]}
                      </span>
                    </div>

                    {/* Software products included */}
                    <div className="pt-2 mt-2 border-t border-slate-200/60">
                      <span className="text-[11px] text-slate-500 font-medium line-clamp-1">
                        <strong>Engineered Stack:</strong> {kit.haxorProducts}
                      </span>
                    </div>
                  </div>

                  {/* Card Pricing & CTA Footer */}
                  <div className="p-6 bg-white border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide block">
                          Turnkey Investment
                        </span>
                        <span className="text-xl font-extrabold text-slate-900">
                          {formattedPrice}
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-brand-green bg-green-50 px-2 py-0.5 rounded-md border border-green-200">
                        Nationwide Delivery
                      </span>
                    </div>

                    <div className="mb-4 py-1.5 px-2.5 rounded-xl bg-cyan-50/70 border border-cyan-200/70 text-[11px] text-slate-700 flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Modular Rollout:</span>
                      <span className="font-bold text-brand-cyanDeep">Pay only for what you need</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedKitModal(kit)}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition text-center cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>View Blueprint</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <a
                        href={getKitWhatsAppUrl(kit)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-brand-green hover:bg-[#20ba5a] transition text-center flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-white" />
                        <span>WhatsApp</span>
                      </a>
                    </div>

                    <div className="mt-2 text-center">
                      <Link
                        to={`/calculator?kit=${kit.id}`}
                        className="text-[11px] font-bold text-brand-cyanDeep hover:underline inline-flex items-center gap-1"
                      >
                        <Calculator className="w-3 h-3" />
                        <span>Customize & Calculate Quote</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Explore All 40 Button if limited on Home */}
        {limit && filteredKits.length > limit && (
          <div className="mt-12 text-center">
            <Link
              to="/kits"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5"
            >
              <span>Explore All 40 Industry Digital Business Kits</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-xs text-slate-500 mt-2">
              Includes full software configurations, inventory systems, and local search rankings.
            </p>
          </div>
        )}

      </div>

      {/* FULL KIT BLUEPRINT DETAIL MODAL */}
      {selectedKitModal && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedKitModal(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase bg-cyan-50 text-brand-cyanDeep border border-brand-cyan/20">
                    {selectedKitModal.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Kit #{selectedKitModal.number}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-recoleta">
                  {selectedKitModal.name} Digital Business Kit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {selectedKitModal.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedKitModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body: 4 Pillars Deliverables */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Phased Milestone Delivery Guarantee */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-emerald-950 block text-sm mb-0.5">
                    Pay As You Grow — Modular Phased Activation Available:
                  </span>
                  <p className="text-emerald-900 leading-relaxed">
                    You do <strong>not have to pay for the complete kit all at once</strong>. You can unlock individual phases at separate times (e.g., launch your website and Google Maps presence in Phase 1 first, then add the online POS, booking engine, or inventory system later). <strong>You only pay for what your business needs at that specific time.</strong>
                  </p>
                </div>
              </div>

              {/* Product Stack Banner */}
              <div className="p-4 rounded-2xl bg-cyan-50/60 border border-brand-cyan/30 text-xs flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-cyanDeep shrink-0" />
                <div>
                  <span className="font-bold text-slate-900 block">Core Engineered Software Suite:</span>
                  <span className="text-slate-700">{selectedKitModal.haxorProducts}</span>
                </div>
              </div>

              {/* Pillar 1: Digital Presence */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-white">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-50 text-brand-cyanDeep flex items-center justify-center">
                      <Globe className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Phase 1: Digital Presence &amp; Brand Visibility
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-cyan-50 text-brand-cyanDeep border border-cyan-200">
                    Starter Module
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedKitModal.presence.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyanDeep shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 2: Sales & Transactions */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-white">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-green-50 text-brand-green flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Phase 2: Sales, Bookings &amp; Payment Gateway
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    When Ready to Transact
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedKitModal.sales.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 3: Operations & Management */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-white">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-brand-purple flex items-center justify-center">
                      <Settings className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Phase 3: Operations, Inventory &amp; Staff Management
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200">
                    When Scaling Operations
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedKitModal.operations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 4: Growth & Marketing */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-white">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-coral-50 text-brand-coral flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Phase 4: Growth, Local SEO &amp; Marketing Automation
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 border border-orange-200">
                    When Scaling Reach
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedKitModal.growth.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-coral shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer with Actions */}
            <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">
                  Turnkey Package Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900">
                    {fmt(convertPrice(selectedKitModal.basePriceKES))}
                  </span>
                  <span className="text-xs text-slate-500">
                    (Full 4-Phase Turnkey Bundle)
                  </span>
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>Or pay in milestones: Unlock Phase 1 from {fmt(convertPrice(7000))}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/calculator?kit=${selectedKitModal.id}`}
                  onClick={() => setSelectedKitModal(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition text-center flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Customize Phased Quote</span>
                </Link>

                <a
                  href={getKitWhatsAppUrl(selectedKitModal, true)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-brand-green hover:bg-[#20ba5a] transition text-center flex items-center justify-center gap-2 shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Phased Quote</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
