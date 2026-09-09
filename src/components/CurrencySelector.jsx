import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

export default function CurrencySelector({ compact = false }) {
  const { currency, isAfrica, updateCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    {
      id: 'ke-kes',
      label: 'Kenya & Regional (KSh)',
      sub: 'Standard Regional Rates',
      currency: 'KES',
      isAfrica: true,
      code: 'KES',
    },
    {
      id: 'us-usd',
      label: 'International (USD $)',
      sub: 'Global International Rate',
      currency: 'USD',
      isAfrica: false,
      code: 'USD',
    },
    {
      id: 'eu-eur',
      label: 'Europe & International (EUR €)',
      sub: 'Global International Rate',
      currency: 'EUR',
      isAfrica: false,
      code: 'EUR',
    },
  ];

  const currentOption = options.find(
    o => o.currency === currency && o.isAfrica === isAfrica
  ) || (isAfrica ? options[0] : options[1]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 rounded-lg font-semibold transition border ${
          compact
            ? 'px-2 py-1 text-[11px] bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700'
            : 'px-2.5 py-1.5 text-xs bg-slate-50 hover:bg-slate-100 text-[#373656] border-slate-200 shadow-xs'
        }`}
        title="Select currency"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        <span className="font-mono font-bold">{currency}</span>
        <ChevronDown className="w-3 h-3 text-slate-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-60 rounded-xl bg-white border border-slate-200 shadow-xl z-50 py-1 text-xs animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Select Currency
          </div>
          {options.map((opt) => {
            const isSelected = opt.currency === currency && opt.isAfrica === isAfrica;
            return (
              <button
                key={opt.id}
                onClick={() => {
                  updateCurrency(opt.currency, opt.isAfrica);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between hover:bg-slate-50 transition ${
                  isSelected ? 'bg-cyan-50/70 text-brand-cyanDeep font-bold' : 'text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono font-bold text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {opt.code}
                  </span>
                  <div>
                    <div className="font-bold text-xs">{opt.label}</div>
                    <div className="text-[10px] text-slate-500">{opt.sub}</div>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-brand-cyanDeep shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
