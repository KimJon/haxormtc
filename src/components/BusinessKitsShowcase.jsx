import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  X, 
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
import { createWhatsAppUrl, PRICING_LEVELS } from '../data/servicesData';
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
  subtitle = "Production-ready operational stacks serving all 47 counties and international clients. Select your sector or search below.",
  showSearch = true,
  fullPage = false,
  compact = false
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedKitModal, setSelectedKitModal] = useState(null);
  const [modalTier, setModalTier] = useState('starter');

  const { convertPrice, currency, currencySymbol } = useCurrency();

  const openKitModal = (kit, defaultTier = 'starter') => {
    setSelectedKitModal(kit);
    setModalTier(defaultTier);
  };

  // Price formatting helper based on active currency
  const fmt = useCallback((val) => {
    return currency === 'KES' 
      ? `KSh ${val.toLocaleString()}` 
      : `${currencySymbol}${val.toLocaleString()}`;
  }, [currency, currencySymbol]);

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

  // Calculate tier pricing and deliverables for active modal
  const tierConfigs = useMemo(() => {
    if (!selectedKitModal) return null;
    return {
      starter: {
        id: 'starter',
        name: 'Starter Level',
        badge: 'Low Entry Fixed Price',
        price: `From ${fmt(convertPrice(7000))}`,
        billing: 'One-Time Low Fixed Price',
        headline: 'Essential Digital Foundation for Local Small Businesses',
        description: `Ideal for small businesses testing Haxor or setting up essential digital presence (e.g. salons, barbershops, local shops, auto garages, tutors). You pay only for what you need now, with zero unnecessary software bloat.`,
        deliverables: [
          'Verified Google Business Profile & Google Maps 3-Pack local ranking',
          'WhatsApp Business catalog, quick replies, and automated customer routing',
          'Single-page high-converting mobile landing page (Free custom domain & 1-year hosting)',
          'Direct M-Pesa STK push or verified Paybill / Till number integration',
          'Official Google Search indexing & QR code generation for walk-in clients'
        ],
        recurringOption: `Optional: Social media video posting (20–30 videos/mo) @ ${fmt(convertPrice(4500))}/month`,
        waMessage: `Hello Haxor MTC, I would like to start with the Starter package for the ${selectedKitModal.name} Kit (${fmt(convertPrice(7000))}). I need basic essentials: Google Maps ranking, WhatsApp Business catalog, and single-page mobile presence.`
      },
      growth: {
        id: 'growth',
        name: 'Growth Level',
        badge: 'Most Popular',
        price: `From ${fmt(convertPrice(22000))}`,
        billing: 'Milestone SOW + Monthly Retainer',
        headline: 'Active Customer Acquisition & WhatsApp Commerce Automation',
        description: `For established single-location businesses actively expanding their customer base, driving inquiries, and automating online orders without hiring full-time staff.`,
        deliverables: [
          'Full 5-page responsive website with custom domain & 5 professional emails',
          'Interactive WhatsApp Commerce Bot & automated catalog ordering',
          'Local SEO dominance & Google Search indexing across your county',
          `Social media video management (20–30 videos/mo @ ${fmt(convertPrice(4500))}/mo)`,
          'Customer review automation & Google 5-star rating booster'
        ],
        recurringOption: `Social Media Posting @ ${fmt(convertPrice(4500))}/mo + monthly maintenance`,
        waMessage: `Hello Haxor MTC, I am interested in the Growth package for the ${selectedKitModal.name} Kit (${fmt(convertPrice(22000))}) including WhatsApp commerce bot, 5-page site, and social media posting.`
      },
      professional: {
        id: 'professional',
        name: 'Professional Level',
        badge: 'Established Operations',
        price: fmt(convertPrice(selectedKitModal.basePriceKES)),
        billing: '30/40/30 Milestone Delivery',
        headline: 'Complete Turnkey Software & Operational Management Suite',
        description: `Full 4-phase turnkey stack for established businesses requiring daily operational software, inventory audit controls, and multi-user access.`,
        deliverables: [
          `Dedicated software suite: ${selectedKitModal.haxorProducts}`,
          `Phase 1 Presence: ${selectedKitModal.presence.join(', ')}`,
          `Phase 2 Sales: ${selectedKitModal.sales.join(', ')}`,
          `Phase 3 Operations: ${selectedKitModal.operations.join(', ')}`,
          `Phase 4 Growth: ${selectedKitModal.growth.join(', ')}`,
          '12 months dedicated technical support SLA & staff onboarding included'
        ],
        recurringOption: 'Cloud Server Hosting, automated backups & SLA support',
        waMessage: `Hello Haxor MTC, I am interested in deploying the full Professional Stack for the ${selectedKitModal.name} Kit (${fmt(convertPrice(selectedKitModal.basePriceKES))}).`
      },
      enterprise: {
        id: 'enterprise',
        name: 'Enterprise Level',
        badge: 'Custom Architecture',
        price: 'Custom Quote',
        billing: 'Enterprise SOW & Milestone Billing',
        headline: 'Multi-Branch & Custom ERP Architecture',
        description: `Engineered for multi-branch organizations, franchises, distribution chains, and complex operations requiring certified Odoo or Zoho ERP, multi-tenant databases, custom APIs, and dedicated engineering.`,
        deliverables: [
          'Certified Odoo or Zoho ERP implementation, customization & migration',
          'Multi-branch inventory sync, centralized reporting & role-based access',
          'Custom API integrations with legacy accounting, banking & logistics systems',
          'Dedicated technical account manager, 99.9% uptime SLA & priority support',
          'On-site staff certification and executive analytics dashboards'
        ],
        recurringOption: 'Dedicated Private Cloud & Enterprise SLA',
        waMessage: `Hello Haxor MTC, I would like an Enterprise Custom Quote for the ${selectedKitModal.name} Kit with custom multi-branch or ERP requirements.`
      }
    };
  }, [selectedKitModal, convertPrice, fmt]);

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

          {/* Phased Milestone Delivery & Pricing Levels (Full View Only) */}
          {!compact && (
            <>
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
                      You do not need to pay for the complete kit upfront. You can unlock individual phases at separate times. You only pay for the service needed at that time.
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

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {PRICING_LEVELS.map((lvl) => (
                  <div 
                    key={lvl.id}
                    className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-2xs hover:border-brand-cyan transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                          {lvl.level}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {lvl.badge}
                        </span>
                      </div>
                      <div className="text-sm sm:text-base font-extrabold text-brand-cyanDeep mb-1 font-mono">
                        {lvl.priceRangeKES}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                        {lvl.purpose}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-600">
                      <span className="font-semibold block text-slate-800 mb-0.5">Ideal For:</span>
                      <span className="line-clamp-2">{lvl.idealFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
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
                    <div className="grid grid-cols-2 gap-2 mb-3 p-3 rounded-2xl bg-slate-50/90 border border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
                          Starter Level
                        </span>
                        <span className="text-sm font-black text-brand-cyanDeep block">
                          From {fmt(convertPrice(7000))}
                        </span>
                        <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                          Maps + WhatsApp
                        </span>
                      </div>
                      <div className="border-l border-slate-200 pl-2.5">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
                          Full Professional
                        </span>
                        <span className="text-sm font-black text-slate-900 block">
                          {formattedPrice}
                        </span>
                        <span className="text-[10px] text-slate-500 block leading-tight mt-0.5">
                          Complete Stack
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => openKitModal(kit, 'starter')}
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition text-center cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>View Blueprint</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <a
                        href={createWhatsAppUrl(`Hello Haxor MTC, I am inquiring about the ${kit.name} Kit (Starter from ${fmt(convertPrice(7000))} / Full Professional ${formattedPrice}). Please advise on getting started.`)}
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

            {/* Modal Body: 4 Pricing Levels Architecture */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* 4 Pricing Levels Selector Tabs */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
                  Select Deployment Level for Your Business:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'starter', label: 'Starter', price: `From ${fmt(convertPrice(7000))}`, tag: 'Low Entry' },
                    { id: 'growth', label: 'Growth', price: `From ${fmt(convertPrice(22000))}`, tag: 'Most Popular' },
                    { id: 'professional', label: 'Professional', price: fmt(convertPrice(selectedKitModal.basePriceKES)), tag: 'Full Stack' },
                    { id: 'enterprise', label: 'Enterprise', price: 'Custom Quote', tag: 'Multi-Branch' }
                  ].map((tier) => {
                    const isSelected = modalTier === tier.id;
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => setModalTier(tier.id)}
                        className={`p-3 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-brand-cyan'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-extrabold text-xs">{tier.label}</span>
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-white/20 text-cyan-200' : 'bg-slate-200 text-slate-600'
                          }`}>
                            {tier.tag}
                          </span>
                        </div>
                        <div className={`text-xs font-black font-mono ${isSelected ? 'text-cyan-300' : 'text-slate-900'}`}>
                          {tier.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Tier Overview Banner */}
              {tierConfigs && tierConfigs[modalTier] && (
                <div className="p-5 rounded-2xl bg-cyan-50/70 border border-brand-cyan/30 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-brand-cyanDeep text-white">
                        {tierConfigs[modalTier].badge}
                      </span>
                      <h4 className="text-sm font-extrabold text-slate-900">
                        {tierConfigs[modalTier].headline}
                      </h4>
                    </div>
                    <span className="font-mono font-extrabold text-brand-cyanDeep text-sm">
                      {tierConfigs[modalTier].price}
                    </span>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-3">
                    {tierConfigs[modalTier].description}
                  </p>
                  <div className="bg-white/90 p-3 rounded-xl border border-cyan-200/60 flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-700">Billing Model:</span>
                    <span className="font-bold text-slate-900">{tierConfigs[modalTier].billing}</span>
                  </div>
                </div>
              )}

              {/* Deliverables for Active Tier */}
              {tierConfigs && tierConfigs[modalTier] && (
                <div className="border border-slate-200 rounded-2xl p-5 bg-white">
                  <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyanDeep" />
                    <span>Included in {tierConfigs[modalTier].name}:</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {tierConfigs[modalTier].deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {tierConfigs[modalTier].recurringOption && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Recurring Growth Option:</span>
                      <span className="font-bold text-brand-cyanDeep">{tierConfigs[modalTier].recurringOption}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Full 4-Phase Architecture Breakdown (Highlighted for Professional or expandable) */}
              <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-50 text-brand-cyanDeep flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Complete Turnkey 4-Phase Blueprint
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {selectedKitModal.haxorProducts}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                    Full Stack
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {/* Phase 1 Presence */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1.5">
                      <Globe className="w-3.5 h-3.5 text-brand-cyanDeep" />
                      <span>Phase 1: Digital Presence</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {selectedKitModal.presence.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-brand-cyanDeep shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 2 Sales */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1.5">
                      <CreditCard className="w-3.5 h-3.5 text-brand-green" />
                      <span>Phase 2: Sales &amp; Bookings</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {selectedKitModal.sales.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-brand-green shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 3 Operations */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1.5">
                      <Settings className="w-3.5 h-3.5 text-brand-purple" />
                      <span>Phase 3: Operations &amp; Inventory</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {selectedKitModal.operations.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-brand-purple shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phase 4 Growth */}
                  <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-coral" />
                      <span>Phase 4: Growth &amp; Local SEO</span>
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {selectedKitModal.growth.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-brand-coral shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer with Dynamic Tier Actions */}
            <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">
                  {tierConfigs ? tierConfigs[modalTier].name : 'Investment'} Quote
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-slate-900 font-mono">
                    {tierConfigs ? tierConfigs[modalTier].price : fmt(convertPrice(selectedKitModal.basePriceKES))}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({tierConfigs ? tierConfigs[modalTier].billing : 'Turnkey'})
                  </span>
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span>
                    {modalTier === 'starter' 
                      ? 'Pay only for basic presence: Google Maps & WhatsApp' 
                      : 'Milestone rollouts & transparent pricing across all 47 counties'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <Link
                  to={`/calculator?kit=${selectedKitModal.id}&tier=${modalTier}`}
                  onClick={() => setSelectedKitModal(null)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition text-center flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Customize Quote</span>
                </Link>

                <a
                  href={createWhatsAppUrl(tierConfigs ? tierConfigs[modalTier].waMessage : `Hello Haxor MTC, I am interested in ${selectedKitModal.name} Kit.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-brand-green hover:bg-[#20ba5a] transition text-center flex items-center justify-center gap-2 shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
