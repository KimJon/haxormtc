import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Smartphone, 
  Lock, 
  Clock, 
  Users, 
  Check, 
  MessageSquare, 
  HelpCircle, 
  Send, 
  ChevronDown, 
  Sliders, 
  MapPin, 
  School, 
  GraduationCap, 
  Eye, 
  Sparkles, 
  Phone, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import { CONTACT_INFO, createWhatsAppUrl } from '../data/servicesData';
import { useCurrency } from '../context/CurrencyContext';
import TopTicker from '../components/TopTicker';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import MobileBottomBar from '../components/MobileBottomBar';
import PaymentMethods from '../components/PaymentMethods';

export default function GoogleFamilyLinkPage() {
  const { formatPrice, convertPrice, currency, currencySymbol } = useCurrency();
  const [deviceCount, setDeviceCount] = useState(30);
  const [activeTab, setActiveTab] = useState('schools');
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    phone: '',
    email: '',
    deviceCount: '30',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Dynamic pricing calculation with volume tiers
  const getRatePerDevice = (count) => {
    if (count >= 250) return 730;
    if (count >= 100) return 850;
    if (count >= 50) return 900;
    return 1000;
  };

  const currentRate = getRatePerDevice(deviceCount);
  const rawSubtotal = deviceCount * currentRate;
  const convertedRate = convertPrice(currentRate);
  const convertedTotal = convertPrice(rawSubtotal);

  const fmt = (val) => currency === 'KES' ? `KSh ${val.toLocaleString()}` : `${currencySymbol}${val.toLocaleString()}`;

  const defaultWhatsAppMsg = `Hello Haxor MTC, I am interested in your Google Family Link integration service for student devices (starting at Ksh 1,000/device). Please share onboarding details for our institution.`;
  const defaultWhatsAppUrl = createWhatsAppUrl(defaultWhatsAppMsg);

  const calculatorWhatsAppMsg = `Hello Haxor MTC, I used your Device Cost Estimator on your website for Google Family Link integration. We have approximately ${deviceCount} student devices (Rate: ${fmt(convertedRate)}/device, Total: ${fmt(convertedTotal)}). Please guide us on kickoff and scheduling!`;
  const calculatorWhatsAppUrl = createWhatsAppUrl(calculatorWhatsAppMsg);

  const sanitize = (str, maxLen = 300) => {
    if (!str) return '';
    return String(str).replace(/[<>]/g, '').trim().slice(0, maxLen);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const cleanName = sanitize(formData.name, 100);
    const cleanSchool = sanitize(formData.school, 100);
    const cleanPhone = sanitize(formData.phone, 30);
    const cleanEmail = sanitize(formData.email, 100);
    const cleanCount = sanitize(formData.deviceCount || deviceCount, 20);
    const cleanNotes = sanitize(formData.notes, 500);

    const leadMsg = `Hello Haxor MTC, Institutional Quotation Request for Google Family Link:\n\nName: ${cleanName}\nSchool/Organization: ${cleanSchool || 'N/A'}\nPhone: ${cleanPhone}\nEmail: ${cleanEmail || 'N/A'}\nEstimated Devices: ${cleanCount}\nNotes: ${cleanNotes || 'None'}`;
    window.open(createWhatsAppUrl(leadMsg), '_blank');
    setSubmitted(true);
  };

  const safetyPillars = [
    {
      title: 'SafeSearch & Web Content Filtering',
      icon: ShieldCheck,
      desc: 'Enforce Google SafeSearch 24/7 across Google Chrome and search engines. Automatically blocks explicit adult content, gambling, violence, and malicious sites.'
    },
    {
      title: 'App Installation & Purchase Gate',
      icon: Lock,
      desc: 'Children and students cannot download apps from the Google Play Store without direct parent PIN approval or phone notification authorization.'
    },
    {
      title: 'Classroom Focus & Bedtime Curfew',
      icon: Clock,
      desc: 'Schedule focus mode during school hours (8:00 AM - 4:00 PM) to lock games and social apps. Automatic bedtime lockdown ensures restorative sleep.'
    },
    {
      title: 'Real-Time GPS Location Tracking',
      icon: MapPin,
      desc: 'Track student tablets and phones in real-time to confirm safe transit between school and home. Includes device battery level monitoring and remote ringing.'
    },
    {
      title: 'YouTube Restricted Mode & Tiers',
      icon: Eye,
      desc: 'Filter mature video content on YouTube automatically or lock devices to the curated YouTube Kids experience for younger primary students.'
    },
    {
      title: 'Supervised Student Google Accounts',
      icon: Users,
      desc: 'Provision official supervised child Google Accounts correctly mapped to parent administrator accounts, preventing unmonitored account switching.'
    }
  ];

  const packages = [
    {
      id: 'pilot',
      name: 'Pilot / Per-Device Setup',
      price: 1000,
      priceNote: 'per device (Min 10 devices)',
      bestFor: 'Individual families, homeschooling groups, and pilot classroom batches.',
      badge: 'Flexible Entry',
      popular: false,
      features: [
        'Supervised Google Child Account creation & linking',
        'SafeSearch enforcement & adult site filtering',
        'Play Store app download approval workflow',
        'Screen time schedules & bedtime device lockdown',
        'Real-time GPS location tracking & battery check',
        'Parent walkthrough guide & 30 days setup support'
      ]
    },
    {
      id: 'classroom',
      name: 'Classroom / Standard Rollout',
      price: 85000,
      priceNote: 'up to 100 devices (~Ksh 850/device)',
      bestFor: 'Primary, Junior Secondary & High School grades with digital learning devices.',
      badge: 'Most Popular for Schools',
      popular: true,
      features: [
        'Complete batch setup for up to 100 student devices',
        'School-wide Web SafeSearch & YouTube Restricted Mode',
        'Classroom focus mode (games locked during school hours)',
        '1 On-site or interactive virtual PTA Onboarding Workshop',
        'Printed quick-start parent guides for home oversight',
        'Direct administrative handover & 90-day technical support'
      ]
    },
    {
      id: 'campus',
      name: 'Whole-School Campus Rollout',
      price: 22000,
      priceNote: 'up to 300+ devices (~Ksh 730/device)',
      bestFor: 'Large campuses, international schools, boarding academies & multi-streams.',
      badge: 'Campus Scale',
      popular: false,
      features: [
        'Turnkey rollout across 300+ student tablets & Chromebooks',
        'Multi-grade security policy design (Primary vs High School)',
        'Dedicated on-site technical team for multi-day enrollment',
        'Comprehensive PTA & Teacher training sessions',
        'School Wi-Fi policy coordination & content filter sync',
        'Dedicated account engineer with 12 months priority support'
      ]
    }
  ];

  const faqs = [
    {
      q: 'What types of devices are supported by Google Family Link?',
      a: 'Google Family Link supports Android tablets, Android smartphones, and Chromebooks used by students. Parents can manage and supervise their children from either an Android phone or an iPhone/iPad.'
    },
    {
      q: 'Can students bypass or uninstall Google Family Link?',
      a: 'No. When configured properly by our technical team, the student account cannot remove supervision, alter GPS tracking, or uninstall management profiles without the parent master credentials or override code.'
    },
    {
      q: 'How does this benefit school principals and teachers?',
      a: 'It restores total classroom focus. Tablets brought into school can have non-educational games, social media, and camera apps locked during class periods, ensuring digital devices remain purely learning instruments.'
    },
    {
      q: 'How does the Ksh. 1,000 per device pricing work?',
      a: 'For individual parents or smaller groups, we charge Ksh. 1,000 per device (minimum 10 devices). For whole classes (up to 100 devices) or full schools (up to 300+ devices), we provide volume discount tiers starting from ~Ksh. 730 per device with on-site staff and workshops included.'
    },
    {
      q: 'Do you conduct on-site PTA or school workshops?',
      a: 'Yes! For school rollouts, our engineers conduct interactive on-site or virtual workshop sessions with parents and teachers, demonstrating how to use the parent supervision app, set screen curfews, and approve educational apps.'
    },
    {
      q: 'Can parents still supervise devices at home during holidays and weekends?',
      a: 'Absolutely. The setup provides 24/7 protection. Parents have complete authority at home to set weekend screen time bonuses, bedtime curfews, and review daily app usage summaries.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      <TopTicker />
      <Navbar />

      <main className="flex-grow">
        
        {/* Ad-Optimized Hero Section */}
        <section className="relative pt-12 pb-20 md:pt-18 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
              <Link to="/" className="hover:text-slate-900 transition">Home</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-slate-900 transition">Services</Link>
              <span>/</span>
              <span className="text-brand-cyanDeep font-semibold">Google Family Link Integration</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Value Proposition */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Educational Institution & Parent Child Safety</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#373656] font-heading tracking-tight leading-[1.12]">
                  Google Family Link Integration for <span className="text-brand-cyanDeep">Schools & Parents</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed body-figtree max-w-2xl">
                  Eliminate classroom distractions, block inappropriate internet content, enforce study & bedtime screen hours, and empower parents with complete digital child protection across Kenya.
                </p>

                {/* Key Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Per-Device Rate</div>
                    <div className="text-xl font-extrabold text-brand-cyanDeep font-mono mt-0.5">
                      {fmt(convertPrice(1000))}
                    </div>
                    <div className="text-[11px] text-slate-500">Custom volume discounts</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Safe Content</div>
                    <div className="text-xl font-extrabold text-emerald-700 font-mono mt-0.5">
                      100% SafeSearch
                    </div>
                    <div className="text-[11px] text-slate-500">Adult & betting sites blocked</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Deployment</div>
                    <div className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">
                      Nationwide
                    </div>
                    <div className="text-[11px] text-slate-500">Remote & on-site PTA sessions</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={defaultWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-2.5 transition transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 fill-white shrink-0" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="#calculator"
                    className="px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 transition shadow-2xs flex items-center gap-2 cursor-pointer"
                  >
                    <Sliders className="w-4 h-4 text-brand-cyanDeep" />
                    <span>Estimate School Cost</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-1">
                  <Check className="w-4 h-4 text-brand-green" />
                  <span>Google Supervised Accounts • PTA Onboarding Included • Official Milestone Invoicing</span>
                </div>

              </div>

              {/* Right Column: Interactive Quick Quote Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-card space-y-5 relative">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-brand-cyanDeep" />
                      <h3 className="font-extrabold text-slate-900 text-base">Instant School Inquiry</h3>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Fast 24-48hr Turnaround
                    </span>
                  </div>

                  {submitted ? (
                    <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                      <Check className="w-8 h-8 text-brand-green mx-auto" />
                      <h4 className="font-bold text-green-900 text-base">Inquiry Prepared</h4>
                      <p className="text-xs text-green-700 leading-relaxed">
                        Your WhatsApp discussion has been initiated. Our education coordinator will provide your institutional proposal shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Your Name & Role *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Mwangi (Principal / PTA Chair)"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          School or Institution Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. St. Austin Academy / Hillcrest Prep"
                          value={formData.school}
                          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="07XX XXX XXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Device Count
                          </label>
                          <input
                            type="number"
                            min="10"
                            placeholder="e.g. 50"
                            value={formData.deviceCount}
                            onChange={(e) => setFormData({ ...formData, deviceCount: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Specific Requirements (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Android tablets in Grade 4-6, need bedtime screen lock and YouTube filtering."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-2 transition cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4 fill-white shrink-0" />
                        <span>WhatsApp</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500">
                        Zero obligation. We provide a customized deployment proposal within 2 hours.
                      </p>
                    </form>
                  )}

                  {/* Payment Badges */}
                  <PaymentMethods variant="light" className="pt-3 border-t border-slate-100" />

                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Interactive Device Cost Calculator Section */}
        <section id="calculator" className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Institutional Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#373656] font-heading">
                Calculate Setup Cost for Your School
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Slide to select the number of student tablets, Chromebooks, or smartphones. Volume discounts apply automatically.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
              
              <div className="space-y-6">
                
                {/* Slider UI */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Select Number of Student Devices:
                    </span>
                    <span className="text-2xl font-extrabold text-brand-cyanDeep font-mono bg-white px-4 py-1 rounded-xl border border-slate-200 shadow-2xs">
                      {deviceCount} Devices
                    </span>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={deviceCount}
                    onChange={(e) => setDeviceCount(parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-cyanDeep"
                  />

                  <div className="flex justify-between text-[11px] font-semibold text-slate-500 mt-2 font-mono">
                    <span>10 Devices</span>
                    <span>100 Devices</span>
                    <span>250 Devices</span>
                    <span>500+ Devices</span>
                  </div>
                </div>

                {/* Live Cost Summary Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Effective Rate / Device
                    </span>
                    <span className="text-xl font-extrabold text-slate-900 font-mono mt-1 block">
                      {fmt(convertedRate)}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {deviceCount >= 250 ? '27% Campus discount applied' : deviceCount >= 100 ? '15% Volume discount applied' : deviceCount >= 50 ? '10% Tier discount applied' : 'Standard pilot rate'}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      Total Estimated Investment
                    </span>
                    <span className="text-3xl font-extrabold text-brand-cyanDeep font-mono mt-1 block">
                      {fmt(convertedTotal)}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      50% deposit • 50% on completion
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Included Services
                      </span>
                      <span className="text-xs font-semibold text-emerald-700 mt-1 block">
                        SafeSearch + App Gates + PTA Workshop
                      </span>
                    </div>

                    <a
                      href={calculatorWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center justify-center gap-1.5 transition cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Dual Perspectives: Who Benefits */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>Tailored for Stakeholders</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#373656] font-heading">
                Engineered for Both Schools & Parents
              </h2>
            </div>

            {/* Toggle Tabs */}
            <div className="flex justify-center mb-8">
              <div className="p-1.5 rounded-2xl bg-white border border-slate-200 inline-flex shadow-2xs">
                <button
                  onClick={() => setActiveTab('schools')}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
                    activeTab === 'schools'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <School className="w-4 h-4" />
                  <span>For Principals & ICT Teachers</span>
                </button>
                <button
                  onClick={() => setActiveTab('parents')}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 ${
                    activeTab === 'parents'
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>For Parents & Guardians</span>
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            {activeTab === 'schools' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-brand-cyanDeep flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Classroom Focus Schedule</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automatically lock entertainment, video games, and social media during class periods (8:00 AM – 4:00 PM). Student tablets become pure academic tools.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Institutional Child Protection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Protect your school reputation and satisfy educational safety mandates by blocking inappropriate websites, pornography, gambling, and violent content.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Turnkey PTA Workshops</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We conduct step-by-step onboarding sessions for your Parent-Teacher Association, teaching parents how to manage home screen time and reinforcing school rules.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-brand-cyanDeep flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Automatic Bedtime Curfew</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure children get healthy sleep. The device automatically locks at bedtime (e.g. 9:00 PM) and stays locked until morning, preventing late-night screen addiction.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Play Store Download Gate</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your child cannot install any game, social media app, or in-app purchase without a notification ping and explicit approval on your phone.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">Live Transit GPS Tracking</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Check your child's real-time physical location on Google Maps as they travel to school, sports activities, or home, with low battery warnings.
                  </p>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* 6 Core Cyber Safety Pillars */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Grade Security</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#373656] font-heading">
                The 6 Cyber Safety Pillars Built In
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyPillars.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-3 hover:shadow-card transition">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyanDeep text-white flex items-center justify-center">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Turnkey Deployment Packages */}
        <section id="packages" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Transparent Packages</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#373656] font-heading">
                Structured Institutional Packages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                    pkg.popular
                      ? 'bg-white border-2 border-brand-cyan shadow-card relative ring-2 ring-brand-cyan/20'
                      : 'bg-white border border-slate-200 shadow-2xs'
                  }`}
                >
                  <div>
                    {pkg.popular && (
                      <span className="inline-block text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-brand-cyanDeep text-white mb-3">
                        {pkg.badge}
                      </span>
                    )}
                    <h3 className="text-lg font-extrabold text-slate-900">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{pkg.bestFor}</p>

                    <div className="my-5 pb-4 border-b border-slate-100">
                      <div className="text-3xl font-extrabold font-mono text-slate-900">
                        {fmt(convertPrice(pkg.price))}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{pkg.priceNote}</div>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-700">
                      {pkg.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <a
                      href={createWhatsAppUrl(`Hello Haxor MTC, I am interested in the ${pkg.name} for Google Family Link.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition ${
                        pkg.popular
                          ? 'bg-brand-green hover:bg-[#20ba5a] text-white shadow-glow-whatsapp'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4-Step Deployment Process */}
        <section className="py-16 md:py-24 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>Turnkey Deployment</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#373656] font-heading">
                How We Onboard Your School
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-2xl font-mono font-extrabold text-brand-cyanDeep">01</span>
                <h3 className="font-bold text-slate-900 text-sm">Policy Discovery</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We align with school management on required study hours, forbidden app categories, and grade policies.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-2xl font-mono font-extrabold text-brand-cyanDeep">02</span>
                <h3 className="font-bold text-slate-900 text-sm">Batch Enrollment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our engineers provision Google Supervised accounts, link devices, and verify SafeSearch & Play Store gates.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-2xl font-mono font-extrabold text-brand-cyanDeep">03</span>
                <h3 className="font-bold text-slate-900 text-sm">PTA Workshop</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Interactive parent and teacher training demonstrating how to supervise devices, set curfews, and monitor safety.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-2xl font-mono font-extrabold text-brand-cyanDeep">04</span>
                <h3 className="font-bold text-slate-900 text-sm">Handover & Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Delivery of printed quick-guides, ICT administrator master handover, and ongoing technical backup.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-50 border border-brand-cyan/30 text-brand-cyanDeep text-xs font-bold uppercase">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#373656] font-heading">
                Common Questions from Schools & Parents
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-2xs transition"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-cyanDeep' : ''
                      }`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="space-y-2 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  Start Your Child Cyber Safety Onboarding
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Protect Your Students & Children Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Speak directly with an education cybersecurity specialist. Custom school rollouts starting at Ksh. 1,000 per device.
                </p>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={defaultWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-brand-green hover:bg-[#20ba5a] shadow-glow-whatsapp flex items-center gap-2 transition transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 fill-white shrink-0" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  to="/services"
                  className="px-6 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition cursor-pointer"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
