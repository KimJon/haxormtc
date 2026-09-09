import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PaymentMethods({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark';

  const methods = [
    { name: 'M-Pesa', tag: 'STK Push & Till' },
    { name: 'PayPal', tag: 'Global Express' },
    { name: 'Binance Pay', tag: 'USDT & Crypto' },
    { name: 'Visa', tag: 'Debit & Credit' },
    { name: 'Mastercard', tag: 'Global Cards' },
  ];

  return (
    <div className={`space-y-2.5 ${className}`}>
      <div className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${
        isDark ? 'text-slate-400' : 'text-slate-600'
      }`}>
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>Accepted Payment Methods</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {methods.map((m, idx) => (
          <div
            key={idx}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border shadow-2xs ${
              isDark
                ? 'bg-slate-800/80 text-white border-slate-700'
                : 'bg-white text-slate-800 border-slate-200'
            }`}
          >
            <span className="font-heading tracking-tight">{m.name}</span>
            <span className={`text-[10px] font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              • {m.tag}
            </span>
          </div>
        ))}
      </div>
      <div className={`text-[11px] leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
        Secure multi-currency settlement with official milestone invoicing and receipts.
      </div>
    </div>
  );
}
