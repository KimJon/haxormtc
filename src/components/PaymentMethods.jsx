import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export default function PaymentMethods({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark';

  const methods = [
    { 
      name: 'M-Pesa', 
      tag: 'STK Push & Till', 
      logo: '/payments/mpesa.png',
      alt: 'Safaricom M-Pesa'
    },
    { 
      name: 'Visa', 
      tag: 'Debit & Credit', 
      logo: '/payments/visa.png',
      alt: 'Visa Card'
    },
    { 
      name: 'Mastercard', 
      tag: 'Global Cards', 
      logo: '/payments/mastercard.png',
      alt: 'Mastercard'
    },
    { 
      name: 'PayPal', 
      tag: 'Global Express', 
      logo: '/payments/paypal.png',
      alt: 'PayPal'
    },
    { 
      name: 'Binance Pay', 
      tag: 'USDT & Crypto', 
      logo: '/payments/binance.png',
      alt: 'Binance Pay USDT'
    },
  ];

  return (
    <div className={`space-y-3 ${className}`}>
      <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${
        isDark ? 'text-slate-400' : 'text-slate-600'
      }`}>
        <ShieldCheck className="w-4 h-4 text-brand-green" />
        <span>Accepted Payment Methods</span>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {methods.map((m, idx) => (
          <div
            key={idx}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 border shadow-2xs transition hover:scale-105 ${
              isDark
                ? 'bg-slate-800/90 text-white border-slate-700 hover:border-slate-500'
                : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="h-5 flex items-center justify-center bg-white rounded px-1.5 py-0.5 border border-slate-100 shadow-2xs">
              <img
                src={m.logo}
                alt={m.alt}
                className="h-3.5 w-auto object-contain max-w-[40px]"
                loading="lazy"
              />
            </div>
            <span className="font-sans font-bold tracking-tight">{m.name}</span>
            <span className={`text-[10px] font-normal hidden sm:inline ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              • {m.tag}
            </span>
          </div>
        ))}
      </div>

      <div className={`text-[11px] flex items-center gap-1.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        <Lock className="w-3 h-3 text-brand-green shrink-0" />
        <span>Secure multi-currency settlement with 30/40/30 milestone invoicing and receipts.</span>
      </div>
    </div>
  );
}
