import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS, createWhatsAppUrl } from '../data/servicesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqWhatsAppUrl = createWhatsAppUrl(
    "Hello Haxor MTC, I have a quick question regarding your services."
  );

  return (
    <section id="faq" className="py-20 md:py-28 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-brand-cyanDeep">Questions</span>
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Everything you need to know about working with Haxor MTC.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-brand-cyan shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 bg-cyan-50 text-brand-cyanDeep' : 'text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">Have a specific question or custom requirement?</h4>
            <p className="text-xs text-slate-500 mt-1">Our technical team is available on WhatsApp to assist you in real time.</p>
          </div>
          <a
            href={faqWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-[#20ba5a] text-white font-bold text-xs flex items-center gap-2 shadow-glow-whatsapp shrink-0 transition"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
