import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  MapPin, 
  Globe, 
  Clock, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development (Ksh 7,000)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const sanitize = (str, maxLen = 300) => {
    if (!str) return '';
    return String(str).replace(/[<>]/g, '').trim().slice(0, maxLen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const cleanName = sanitize(formData.name, 100);
    const cleanPhone = sanitize(formData.phone, 30);
    const cleanEmail = sanitize(formData.email, 100);
    const cleanService = sanitize(formData.service, 100);
    const cleanMessage = sanitize(formData.message, 500);

    const msg = `*New Inquiry via haxormtc.com*\n\n` +
      `*Name:* ${cleanName}\n` +
      `*Phone/WhatsApp:* ${cleanPhone}\n` +
      `*Email:* ${cleanEmail || 'Not provided'}\n` +
      `*Interested In:* ${cleanService}\n` +
      `*Message:* ${cleanMessage || 'Please send more details.'}`;

    const url = createWhatsAppUrl(msg);
    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ready to Scale Your Business? <span className="text-brand-cyanDeep">Let's Talk Today</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Have a project in mind or need a live system demonstration? Connect with our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary WhatsApp Card */}
            <a
              href={createWhatsAppUrl("Hello Haxor MTC, I want to inquire about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-green-50/70 border-2 border-brand-green block hover:bg-green-50 transition-all duration-200 shadow-glow-whatsapp"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-brand-green">
                  Fastest Response (Instant WhatsApp)
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-11 h-11 rounded-xl bg-brand-green flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-600">Instant Direct Messenger</div>
                  <div className="text-base font-extrabold text-slate-900">
                    <span className="text-brand-green">WhatsApp</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Official Emails */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                <Mail className="w-4 h-4 text-brand-coral" />
                Official Email Addresses
              </div>
              <div className="space-y-1.5 text-sm">
                <a
                  href={`mailto:${CONTACT_INFO.emailOfficial}`}
                  className="block font-mono font-semibold text-slate-800 hover:text-brand-cyanDeep transition"
                >
                  {CONTACT_INFO.emailOfficial}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.emailPrimary}`}
                  className="block font-mono font-semibold text-slate-600 hover:text-brand-cyanDeep transition"
                >
                  {CONTACT_INFO.emailPrimary}
                </a>
              </div>
            </div>

            {/* Web, Timezones & Payment Methods */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-600 shadow-xs">
              <div className="flex items-center gap-3 font-semibold text-slate-800">
                <Globe className="w-4 h-4 text-brand-cyanDeep shrink-0" />
                <span>Domain: <strong>{CONTACT_INFO.domain}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-coral shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-start gap-3 pt-1 border-t border-slate-200">
                <Clock className="w-4 h-4 text-brand-goldDeep shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-slate-800">Active Working Hours Across Timezones:</div>
                  <div>EAT (UTC+3): Mon – Sat (8:00 AM – 7:00 PM)</div>
                  <div>GMT / UTC: Mon – Sat (5:00 AM – 4:00 PM)</div>
                  <div>EST (UTC-5): Mon – Sat (1:00 AM – 12:00 PM)</div>
                  <div className="text-[11px] text-brand-cyanDeep font-semibold pt-0.5">24/7 Client WhatsApp & Ticket Dispatch</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7 sm:p-9 shadow-card">
              
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                Send a Quick Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill out this quick form and we will immediately connect with you on WhatsApp with an itemized quote.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 border border-brand-green/30 text-green-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Inquiry prepared! Launching WhatsApp with your details...</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Brian Mwangi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 0712 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g., brian@mybusiness.co.ke"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Primary Service or System of Interest *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition shadow-xs"
                  >
                    <option value="Website Development (Ksh 7,000 with Free Domain & Hosting)">Website Development (Ksh 7,000 + Free Domain/Hosting)</option>
                    <option value="Social Media Posting (20-30 videos/mo - Ksh 4,000)">Social Media Posting (20-30 videos/mo - Ksh 4,000)</option>
                    <option value="HaxPos Universal Point of Sale Demo">HaxPos Universal POS (Cafes, Retail, Hardware, Spirits)</option>
                    <option value="ElitteGo On-Demand Delivery Platform">ElitteGo On-Demand Delivery Platform</option>
                    <option value="HaxOne Hospitality Suite (Hotels, Lodges, PMS)">HaxOne Hospitality Suite (Hotels, Lodges, PMS)</option>
                    <option value="Hospital & Clinic Management System (HMS)">Hospital & Clinic Management System (HMS)</option>
                    <option value="Meta Ads Placement (Ksh 4,200 / Ksh 7,500)">Meta Ads Placement (FB & IG)</option>
                    <option value="Google Ads PPC Management (Ksh 2,500 / Ksh 30,000)">Google Ads PPC Management</option>
                    <option value="Business Email Setup (Outlook / Webmail / Workspace)">Business Email Setup & Migration</option>
                    <option value="Google My Business Profile Setup">Google My Business & Map Rank</option>
                    <option value="Odoo ERP Implementation & Customization">Odoo ERP Consulting</option>
                    <option value="Zoho Suite Architecture & Automation">Zoho CRM & Books Automation</option>
                    <option value="ICT Consulting (Ksh 3,000)">ICT Strategic Consulting Session</option>
                    <option value="Digital Literacy Training (10 Sessions)">Digital Literacy Training</option>
                    <option value="Custom Multi-Service Bundle">Custom Multi-Service Bundle</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Briefly describe your requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business, current setup, or desired launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>WhatsApp</span>
                </button>

                <div className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                  <span>We respect your privacy. No spam. You will be connected directly with our technical team.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
