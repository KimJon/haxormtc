import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calculator, 
  Check, 
  MessageSquare, 
  RotateCcw, 
  ShieldCheck, 
  TrendingDown,
  Store,
  Hotel,
  Briefcase,
  Activity,
  Truck,
  Compass,
  GraduationCap,
  Layers,
  ChevronDown,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { CALCULATOR_ITEMS, INDUSTRY_KITS, createWhatsAppUrl } from '../data/servicesData';
import { INDUSTRY_KITS_40, KIT_CATEGORIES } from '../data/industryKitsData';
import { useCurrency } from '../context/CurrencyContext';
import PaymentMethods from './PaymentMethods';

/**
 * Maps icon names to Lucide icons for quick tabs
 */
const ICON_MAP = {
  Store,
  Hotel,
  Briefcase,
  Activity,
  Truck,
  Compass,
  GraduationCap,
  Layers
};

/**
 * Helper to compute recommended calculator item IDs for any of the 40 industry kits
 */
const getRecommendedItemIdsForKit = (kitId) => {
  // Check if it's one of the 7 predefined quick kits first
  const quickKit = INDUSTRY_KITS.find(k => k.id === kitId);
  if (quickKit) return quickKit.itemIds;

  // Otherwise check the full 40-kit taxonomy
  const kit40 = INDUSTRY_KITS_40.find(k => k.id === kitId);
  if (!kit40) return ['calc-gmb-sme', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-pos-system'];

  // Smart sector-based item mappings
  switch (kit40.category) {
    case 'hospitality':
      return ['calc-gmb-ent', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-booking-engine'];
    case 'retail':
      return ['calc-gmb-sme', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-pos-system'];
    case 'education':
      return ['calc-gmb-ent', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-family-link'];
    case 'healthcare':
      return ['calc-gmb-ent', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-health-records'];
    case 'professional':
    case 'financial':
      return ['calc-gmb-sme', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-lead-portal'];
    case 'construction':
    case 'manufacturing':
      return ['calc-gmb-ent', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-tender-portfolio'];
    case 'logistics':
    case 'automotive':
      return ['calc-gmb-ent', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-fleet-dispatch'];
    case 'lifestyle':
    case 'creative':
      return ['calc-gmb-sme', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-booking-engine'];
    case 'community':
      return ['calc-gmb-sme', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-lead-portal'];
    default:
      return ['calc-gmb-sme', 'calc-web-biz', 'calc-seo-growth', 'calc-email-outlook', 'calc-pos-system'];
  }
};

/**
 * QUOTE CALCULATOR & BUSINESS SETUP ESTIMATOR
 * ===========================================
 * Handles instant pricing calculation, 10% multi-module bundle discounts,
 * selection across all 40 industry business kits, and 1-click WhatsApp order generation.
 *
 * HUMAN EDITING INSTRUCTIONS:
 * - Module catalog is in `src/data/servicesData.js` (`CALCULATOR_ITEMS`).
 * - 40 industry kits catalog is in `src/data/industryKitsData.js` (`INDUSTRY_KITS_40`).
 */
export default function QuoteCalculator() {
  const [searchParams, setSearchParams] = useSearchParams();
  const kitParam = searchParams.get('kit');

  // Active industry selection
  const [activeIndustryId, setActiveIndustryId] = useState(() => {
    if (kitParam) {
      const match = INDUSTRY_KITS_40.find(k => k.id === kitParam) || INDUSTRY_KITS.find(k => k.id === kitParam);
      if (match) return match.id;
    }
    return INDUSTRY_KITS[0]?.id || 'retail-shop';
  });

  // Selected item IDs
  const [selectedItemIds, setSelectedItemIds] = useState(() => {
    const initialKitId = kitParam || INDUSTRY_KITS[0]?.id || 'retail-shop';
    return getRecommendedItemIdsForKit(initialKitId);
  });

  const { convertPrice, currency, currencySymbol, isAfrica } = useCurrency();

  // Watch for changes in ?kit= query parameter
  useEffect(() => {
    if (kitParam) {
      const match = INDUSTRY_KITS_40.find(k => k.id === kitParam) || INDUSTRY_KITS.find(k => k.id === kitParam);
      if (match && match.id !== activeIndustryId) {
        setActiveIndustryId(match.id);
        setSelectedItemIds(getRecommendedItemIdsForKit(match.id));
      }
    }
  }, [kitParam]);

  // Find active kit in 40 kits taxonomy or quick kits
  const activeKit40 = INDUSTRY_KITS_40.find(k => k.id === activeIndustryId);
  const activeQuickKit = INDUSTRY_KITS.find(k => k.id === activeIndustryId);
  
  const activeKitName = activeKit40?.name || activeQuickKit?.name || 'Business Setup';
  const activeKitTagline = activeKit40?.tagline || activeQuickKit?.sub || 'Tailored digital presence and operational stack.';
  const activeKitProducts = activeKit40?.haxorProducts || 'Custom Web + Google Profile + POS/Software + Business Email';

  // Toggle individual service item
  const toggleItem = (id) => {
    if (selectedItemIds.includes(id)) {
      setSelectedItemIds(selectedItemIds.filter(i => i !== id));
    } else {
      setSelectedItemIds([...selectedItemIds, id]);
    }
  };

  // Switch active industry kit
  const handleSelectKit = (kitId) => {
    setActiveIndustryId(kitId);
    setSelectedItemIds(getRecommendedItemIdsForKit(kitId));
    setSearchParams({ kit: kitId });
  };

  const selectedItems = CALCULATOR_ITEMS.filter(item => selectedItemIds.includes(item.id));
  
  const subtotal = selectedItems.reduce((acc, item) => acc + convertPrice(item.price), 0);

  // Bundle Discount: 10% off if 3 or more services selected
  const hasBundleDiscount = selectedItems.length >= 3;
  const discountAmount = hasBundleDiscount ? Math.round(subtotal * 0.10) : 0;
  const grandTotal = subtotal - discountAmount;

  // Format currency helper
  const fmt = (val) => currency === 'KES' ? `KSh ${val.toLocaleString()}` : `${currencySymbol}${val.toLocaleString()}`;

  // Generate WhatsApp message with itemized order
  const generateWhatsAppMessage = () => {
    const itemListString = selectedItems.map(item => `• ${item.name}: ${fmt(convertPrice(item.price))}`).join('\n');
    return `Hello Haxor MTC, I used your website Quote Calculator (${currency}) for the ${activeKitName} setup and would like to order the following package:\n\n${itemListString}\n\nSubtotal: ${fmt(subtotal)}\n${hasBundleDiscount ? `Bundle Savings (10%): -${fmt(discountAmount)}\n` : ''}Grand Total: ${fmt(grandTotal)}\n\nPlease confirm availability and kickoff timeline.`;
  };

  const whatsAppQuoteUrl = createWhatsAppUrl(generateWhatsAppMessage());

  // Check if recommended items for this kit are fully selected
  const recommendedIds = getRecommendedItemIdsForKit(activeIndustryId);
  const isKitFullySelected = recommendedIds.length > 0 && recommendedIds.every(id => selectedItemIds.includes(id));

  return (
    <section id="calculator" className="py-20 md:py-28 relative bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Calculator className="w-3.5 h-3.5" />
            <span>Turnkey Cost & Business Setup Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-recoleta">
            Configure Your <span className="text-brand-cyanDeep">Business Setup</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Choose from all 40 industry business kits or handpick individual modules. <strong>You do not have to pay for full bundles upfront—select only what your business requires right now</strong> and add more software, emails, or ads later. Selecting 3+ services unlocks <strong>10% Multi-Module Savings</strong>.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Pay As You Grow: Choose 1 or more modules today • Add more phases whenever you're ready</span>
          </div>
        </div>

        {/* Industry Selection Controls */}
        <div className="mb-10 max-w-6xl mx-auto space-y-4">
          
          {/* Header Row: All 40 Selector + Clear Button */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
            <div className="flex items-center gap-2 flex-grow max-w-lg">
              <label htmlFor="industry-40-select" className="text-xs font-bold uppercase tracking-wider text-slate-700 shrink-0 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-cyanDeep" />
                <span>Industry Kit:</span>
              </label>
              
              {/* Comprehensive 40-Kit Select Dropdown */}
              <div className="relative w-full">
                <select
                  id="industry-40-select"
                  value={activeIndustryId}
                  onChange={(e) => handleSelectKit(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 hover:border-brand-cyan text-slate-900 text-xs sm:text-sm font-semibold py-2.5 pl-3 pr-8 rounded-xl shadow-2xs focus:outline-none focus:ring-2 focus:ring-brand-cyan cursor-pointer transition"
                >
                  <option value="" disabled>-- Select from all 40 Industry Kits --</option>
                  {KIT_CATEGORIES.filter(c => c.id !== 'all').map(cat => {
                    const kitsInCat = INDUSTRY_KITS_40.filter(k => k.category === cat.id);
                    if (kitsInCat.length === 0) return null;
                    return (
                      <optgroup key={cat.id} label={`-- ${cat.label} --`}>
                        {kitsInCat.map(k => (
                          <option key={k.id} value={k.id}>
                            #{k.number}. {k.name} ({fmt(convertPrice(k.basePriceKES))})
                          </option>
                        ))}
                      </optgroup>
                    );
                  })}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <button
              onClick={() => setSelectedItemIds([])}
              className="text-xs font-semibold text-slate-500 hover:text-red-600 flex items-center gap-1 transition cursor-pointer self-end sm:self-auto"
              title="Reset selections"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Selection</span>
            </button>
          </div>

          {/* Quick-Pick Popular Industry Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {INDUSTRY_KITS.map((kit) => {
              const IconComponent = ICON_MAP[kit.iconName] || Briefcase;
              const isActive = kit.id === activeIndustryId;
              return (
                <button
                  key={kit.id}
                  onClick={() => handleSelectKit(kit.id)}
                  className={`p-2.5 sm:p-3 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-brand-cyan/40'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-brand-cyan/50 hover:bg-cyan-50/40 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-brand-cyanDeep text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                    )}
                  </div>
                  <div>
                    <div className={`text-[11px] sm:text-xs font-bold leading-tight line-clamp-2 ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}>
                      {kit.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Industry Kit Detail Banner */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-cyanDeep bg-cyan-50 px-2.5 py-0.5 rounded-full border border-brand-cyan/20">
                    Active Blueprint
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-900 font-bold">{activeKitName}</span>
                </div>
                <p className="text-xs text-slate-600 mt-1.5 max-w-2xl">
                  {activeKitTagline}
                </p>
                <div className="mt-2 text-[11px] text-slate-500">
                  <strong>Stack Suite:</strong> {activeKitProducts}
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  onClick={() => setSelectedItemIds(recommendedIds)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isKitFullySelected
                      ? 'bg-green-50 text-brand-green border border-green-200 cursor-default'
                      : 'bg-brand-cyanDeep hover:bg-brand-cyanDeep/90 text-white shadow-2xs cursor-pointer'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isKitFullySelected ? 'Kit Applied' : 'Apply Kit Stack'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Service Checkboxes List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-600 px-2">
              <span>All Available Setup Modules</span>
              <span className="text-brand-cyanDeep font-extrabold">{selectedItems.length} selected</span>
            </div>

            <div className="space-y-2.5">
              {CALCULATOR_ITEMS.map((item) => {
                const isChecked = selectedItemIds.includes(item.id);
                const isRecommendedForActiveKit = recommendedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between gap-4 transition-all duration-150 ${
                      isChecked
                        ? 'bg-cyan-50/70 border-brand-cyan shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition ${
                        isChecked 
                          ? 'bg-brand-cyanDeep border-brand-cyanDeep text-white' 
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 leading-snug flex items-center gap-2">
                          <span>{item.name}</span>
                          {isRecommendedForActiveKit && (
                            <span className="text-[10px] font-bold bg-cyan-100 text-brand-cyanDeep px-2 py-0.5 rounded-md shrink-0">
                              Kit Recommended
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono font-semibold uppercase">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono text-base font-extrabold text-slate-900">
                        {fmt(convertPrice(item.price))}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Quote Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-white border border-slate-200 p-7 space-y-6 shadow-card">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Turnkey Estimate</h3>
                  <p className="text-xs text-slate-500">Live configuration summary</p>
                </div>
                <span className="text-xs font-mono font-bold text-brand-green bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                  {currency}
                </span>
              </div>

              {/* Itemized summary */}
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {selectedItems.length === 0 ? (
                  <p className="text-xs text-slate-500 italic text-center py-6">
                    No modules selected yet. Choose an industry kit above or click any module to start building your quote.
                  </p>
                ) : (
                  selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                      <span className="text-slate-700 font-medium truncate max-w-[220px]">{item.name}</span>
                      <span className="font-mono font-bold text-slate-900 shrink-0">
                        {fmt(convertPrice(item.price))}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Subtotals & Discounts */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Subtotal:</span>
                  <span className="font-mono font-bold text-slate-800">{fmt(subtotal)}</span>
                </div>

                {hasBundleDiscount ? (
                  <div className="flex items-center justify-between text-xs text-brand-coral font-bold bg-coral-50 p-2.5 rounded-xl border border-brand-coral/20">
                    <span className="flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      <span>10% Multi-Module Bundle Savings:</span>
                    </span>
                    <span className="font-mono">-{fmt(discountAmount)}</span>
                  </div>
                ) : (
                  <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    Select at least 3 modules to unlock our 10% bundle savings.
                  </div>
                )}

                <div className="pt-3 flex items-baseline justify-between border-t border-slate-100">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 block">
                      Estimated Investment
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {isAfrica ? 'Settlement via M-Pesa or Card' : 'International wire or card invoice'}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold text-brand-cyanDeep font-mono tracking-tight">
                      {fmt(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Order Action */}
              <div className="pt-2 space-y-2">
                <a
                  href={selectedItems.length > 0 ? whatsAppQuoteUrl : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (selectedItems.length === 0) {
                      e.preventDefault();
                      alert("Please select at least one module to proceed.");
                    }
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition shadow-glow-whatsapp ${
                    selectedItems.length > 0
                      ? 'bg-brand-green hover:bg-[#20ba5a] text-white cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-slate-500">
                  Sends full itemized configuration directly to our engineering desk for rapid kickoff.
                </p>
              </div>

              {/* Payment Methods Section */}
              <PaymentMethods variant="light" className="pt-4 border-t border-slate-100" />

              <div className="pt-2 flex items-center justify-center gap-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>50% Deposit Milestones</span>
                </span>
                <span>•</span>
                <span>Invoice & ETR Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
