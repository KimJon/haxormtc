import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Code2, 
  Clock, 
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-black" />,
      title: "Fast 24–48hr Turnaround",
      desc: "We prioritize swift execution. Your website, business emails, and ad campaigns launch on schedule so you can engage customers without delay.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black" />,
      title: "White-Label NDA Protected",
      desc: "We work behind the scenes for agencies under strict non-disclosure agreements, delivering CRM and automation projects your clients will never know were outsourced.",
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "CRM & Automation Specialists",
      desc: "Deep expertise in Zoho, Odoo, HubSpot, and custom workflow automation. We configure systems around your actual business processes, not generic templates.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-black" />,
      title: "Marketing + Deep Engineering",
      desc: "We bring together practical digital marketing and robust software engineering so your customer acquisition funnels connect directly to solid back-office systems.",
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-white border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider">
              Our Principles
            </div>
            
            <h2 className="clarity-h2 text-black">
              Engineered for Transparency &amp; Speed
            </h2>

            <p className="clarity-text text-slate-600">
              We founded Haxor MTC to provide dependable, transparent, and high-quality technology solutions. We focus on straightforward communication, clear project milestones, and delivering systems that directly support your operational efficiency and business growth.
            </p>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                Our Guarantee to You:
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 stroke-[3]" />
                  <span>Transparent upfront pricing with zero hidden add-on bills.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 stroke-[3]" />
                  <span>Transparent milestone structure: 30% start → 40% after design → 30% before launch.</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 stroke-[3]" />
                  <span>Direct dedicated support via WhatsApp &amp; official email ({CONTACT_INFO.emailOfficial}).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: 4 Key Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-black transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-4">
                  {pil.icon}
                </div>
                <h3 className="clarity-h3 text-black mb-2">
                  {pil.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
