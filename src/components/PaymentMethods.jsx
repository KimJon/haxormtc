import React from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export default function PaymentMethods({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark';

  const methods = [
    { 
      name: 'Visa', 
      tag: 'Global Debit & Credit', 
      logo: '/payments/visa.png',
      alt: 'Visa Card'
    },
    { 
      name: 'Mastercard', 
      tag: 'Corporate Cards', 
      logo: '/payments/mastercard.png',
      alt: 'Mastercard'
    },
    { 
      name: 'Stripe & SWIFT', 
      tag: 'Wire & SEPA Transfer', 
      alt: 'Wire Transfer'
    },
    { 
      name: 'PayPal', 
      tag: 'Global Express', 
      logo: '/payments/paypal.png',
      alt: 'PayPal Business'
    },
  ];

  return (
    <div className={`space-y-3 ${className}`}>
      <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${
        isDark ? 'text-slate-400' : 'text-slate-600'
      }`}>
        <ShieldCheck className="w-4 h-4 text-slate-400" />
        <span>Enterprise Invoicing &amp; Global Payment Infrastructure</span>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {methods.map((m, idx) => (
          <div
            key={idx}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
              isDark
                ? 'bg-neutral-900 text-slate-300 border-neutral-800'
                : 'bg-white text-slate-800 border-slate-200'
            }`}
          >
            {m.logo ? (
              <div className="h-5 flex items-center justify-center bg-white rounded px-1.5 py-0.5 border border-slate-100 shadow-2xs">
                <img
                  src={m.logo}
                  alt={m.alt}
                  className="h-3.5 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ) : (
              <CreditCard className="w-4 h-4 text-slate-400" />
            )}
            <span>{m.name}</span>
            <span className="text-[10px] text-slate-500 hidden sm:inline">({m.tag})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
