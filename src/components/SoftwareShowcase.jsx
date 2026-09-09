import React, { useState } from 'react';
import { 
  Check, 
  MessageSquare, 
  ArrowRight, 
  Server, 
  Store, 
  Truck, 
  Hotel, 
  Activity, 
  Cpu, 
  Database,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SOFTWARE_PRODUCTS, createWhatsAppUrl } from '../data/servicesData';

export default function SoftwareShowcase() {
  const [selectedId, setSelectedId] = useState(SOFTWARE_PRODUCTS[0].id);

  const selectedProduct = SOFTWARE_PRODUCTS.find(p => p.id === selectedId) || SOFTWARE_PRODUCTS[0];

  const getSystemIcon = (id) => {
    switch (id) {
      case 'haxpos': return <Store className="w-5 h-5 text-brand-cyanDeep" />;
      case 'elittego': return <Truck className="w-5 h-5 text-brand-coral" />;
      case 'haxone': return <Hotel className="w-5 h-5 text-brand-goldDeep" />;
      case 'hospital-system': return <Activity className="w-5 h-5 text-brand-coral" />;
      case 'odoo-expert': return <Database className="w-5 h-5 text-brand-cyanDeep" />;
      case 'zoho-expert': return <Cpu className="w-5 h-5 text-brand-goldDeep" />;
      default: return <Server className="w-5 h-5 text-brand-cyanDeep" />;
    }
  };

  const demoWhatsAppUrl = createWhatsAppUrl(selectedProduct.demoText);

  return (
    <section id="software" className="py-20 md:py-28 relative bg-white border-t border-b border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Server className="w-3.5 h-3.5" />
            Enterprise Software & Management Systems
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Flagship Platforms <span className="text-brand-cyanDeep">Built for Real Operations</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            From local retail and hospitality to full-scale on-demand delivery and clinical operations, our systems are built robust, M-Pesa enabled, and ready for Kenyan compliance.
          </p>
        </div>

        {/* System Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {SOFTWARE_PRODUCTS.map((prod) => {
            const isSelected = prod.id === selectedId;
            return (
              <button
                key={prod.id}
                onClick={() => setSelectedId(prod.id)}
                className={`p-4 rounded-2xl flex flex-col items-center text-center gap-2 transition-all duration-200 ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md transform -translate-y-1'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/10' : 'bg-white shadow-xs'}`}>
                  {getSystemIcon(prod.id)}
                </div>
                <div className="text-xs font-bold leading-snug">
                  {prod.name.split(' ')[0]}
                  <span className={`block text-[10px] font-medium mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {prod.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Showcase Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 shadow-card">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-brand-coral text-white shadow-xs">
                    {selectedProduct.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Enterprise Grade • Localized 24/7 Support
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {selectedProduct.name}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  {selectedProduct.tagline}
                </p>
              </div>

              {/* Pricing / Terms */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-extrabold text-slate-500 block">
                    Investment Model:
                  </span>
                  <span className="text-lg sm:text-xl font-mono font-extrabold text-slate-900">
                    {selectedProduct.pricing}
                  </span>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-50 text-brand-cyanDeep border border-brand-cyan/20 font-bold">
                  Free Demo On Demand
                </span>
              </div>

              {/* Target Sectors */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                  <Store className="w-4 h-4 text-brand-cyanDeep" />
                  Built Specifically for These Sectors:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.sectors.map((sec, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-800 border border-slate-200 shadow-2xs flex items-center gap-1.5"
                    >
                      <Check className="w-3 h-3 text-brand-green shrink-0" />
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={demoWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs flex items-center justify-center gap-2 transition"
                >
                  <span>Request System Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Column: Key Feature Matrix */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-7 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-cyanDeep" />
                  Core Capabilities
                </span>
                <span className="text-xs font-bold text-brand-green bg-green-50 px-2 py-0.5 rounded">
                  v4.8 Ready
                </span>
              </div>

              <ul className="space-y-3.5">
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-snug">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 border border-brand-cyan/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-cyanDeep stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Compliance & Hardware badges */}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-700 font-bold">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-green" />
                  <span>M-Pesa STK Push</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-coral" />
                  <span>KRA eTIMS Ready</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Database className="w-4 h-4 text-brand-cyanDeep" />
                  <span>Cloud + Offline Sync</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2">
                  <Server className="w-4 h-4 text-brand-goldDeep" />
                  <span>24/7 Priority Support</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
