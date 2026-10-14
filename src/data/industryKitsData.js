/**
 * HAXOR MTC - 40 DIGITAL BUSINESS KITS MASTER TAXONOMY
 * ====================================================
 * Clean, structured catalog of turnkey digital kits for 40 distinct industries.
 * Every kit is engineered around 4 core pillars:
 *   1. Digital Presence (Web, Google Search, Maps, WhatsApp, Social)
 *   2. Sales & Transactions (POS, E-Commerce, Bookings, Quotations, Invoicing)
 *   3. Operations & Management (PMS, ERP, Inventory, Staff, Specialized System)
 *   4. Growth & Marketing (Local SEO, Google Ads, Reviews, Automated Re-engagement)
 *
 * HUMAN EDITING INSTRUCTIONS:
 * - To adjust pricing: update `basePriceKES`. The currency context will automatically
 *   convert this into USD and EUR using the silent 2.1x international multiplier.
 * - To add a new kit: append an object with the same schema to `INDUSTRY_KITS_40`.
 * - To customize deliverables: modify `presence`, `sales`, `operations`, or `growth`.
 */

export const KIT_CATEGORIES = [
  { id: 'all', label: 'All 40 Kits' },
  { id: 'hospitality', label: 'Hotels & Food' },
  { id: 'retail', label: 'Retail & Commerce' },
  { id: 'education', label: 'Education & Training' },
  { id: 'healthcare', label: 'Healthcare & Medical' },
  { id: 'professional', label: 'Professional Services' },
  { id: 'construction', label: 'Building & Trades' },
  { id: 'financial', label: 'Finance & SACCOs' },
  { id: 'logistics', label: 'Transport & Logistics' },
  { id: 'automotive', label: 'Auto & Dealerships' },
  { id: 'lifestyle', label: 'Wellness, Beauty & Fitness' },
  { id: 'manufacturing', label: 'Manufacturing & Agribusiness' },
  { id: 'creative', label: 'Creative & Media' },
  { id: 'community', label: 'NGOs & Faith-Based' }
];

export const INDUSTRY_KITS_40 = [
  // 1. Hotels & Hospitality
  {
    id: 'hotels-hospitality',
    number: 1,
    name: 'Hotels & Hospitality',
    category: 'hospitality',
    iconName: 'Hotel',
    tagline: 'Turnkey Property Management, 0% commission direct room booking engine, and restaurant/bar POS.',
    haxorProducts: 'HaxOne Hospitality Suite + Website + Google Maps 3-Pack + Booking Engine',
    basePriceKES: 65000,
    badge: 'Flagship Hospitality',
    presence: [
      'Responsive hotel website with luxury room showcase',
      'Direct online room booking engine (0% commission)',
      'Google Business Profile & Google Maps #1 rank optimization',
      'Online photo and HD video gallery of suites & amenities',
      'Direct WhatsApp booking concierge integration',
      'Social media profile branding and visual layout'
    ],
    sales: [
      'Direct guest reservation & room availability calendar',
      'Instant Stripe, Card & Wire payment gateways',
      'Automated SMS & email booking confirmations',
      'Channel Manager sync (Booking.com, Airbnb, Expedia)',
      'Customer CRM database with stay history',
      'Seasonal promotional packages & coupon engine'
    ],
    operations: [
      'Full Hotel PMS: Front desk check-in, check-out & night audit',
      'Housekeeping room status & maintenance ticket management',
      'Restaurant POS with Kitchen Order Ticket (KOT) printers',
      'Bar & Lounge beverage inventory & recipe costing',
      'Central procurement, supplier accounts & stock reconciliation',
      'Staff shift management and user permission roles'
    ],
    growth: [
      'Local SEO ranking for domestic & international travelers',
      'Google Search Ads tailored to tourist holiday keywords',
      'Automated TripAdvisor & Google 5-star review collection',
      'WhatsApp & Email guest re-engagement campaigns',
      'Executive analytics dashboards (RevPAR, ADR, Occupancy Rate)'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-gmb-ent', 'calc-booking-engine', 'calc-seo-growth', 'calc-email-outlook']
  },

  // 2. Restaurants, Cafes & Bars
  {
    id: 'restaurants-cafes-bars',
    number: 2,
    name: 'Restaurants, Cafes & Bars',
    category: 'hospitality',
    iconName: 'Utensils',
    tagline: 'Digital touch POS, KOT kitchen displays, QR table menus, online delivery, and localized Google Maps ranking.',
    haxorProducts: 'HaxPos Restaurant Edition + QR Digital Menu + Google Business Profile',
    basePriceKES: 45000,
    badge: 'Food & Dining',
    presence: [
      'Mobile-first restaurant website with interactive visual menu',
      'Verified Google Business Profile with food menu catalog',
      'Instagram & TikTok food showcase integration',
      'WhatsApp Business catalog for takeout and takeaway orders'
    ],
    sales: [
      'Direct online ordering for delivery and pickup',
      'Table reservation booking calendar',
      'Contactless QR code digital table menus',
      'Stripe and credit card payment settlement',
      'Customer loyalty points & return diner discounts'
    ],
    operations: [
      'Restaurant touchscreen POS with table layout management',
      'Kitchen Display System (KDS) & KOT order ticket printers',
      'Ingredient-level stock inventory & recipe portion costing',
      'Supplier procurement and ingredient purchase orders',
      'Daily shift cash register reconciliation and sales reports'
    ],
    growth: [
      'Google Maps local dining ranking booster',
      'Viral short-form food reel video strategy',
      'Google Local Ads targeting nearby hungry diners',
      'Automated SMS & WhatsApp promotional broadcasts'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-pos-system', 'calc-gmb-ent', 'calc-social', 'calc-email-basic']
  },

  // 3. Retail Shops & Supermarkets
  {
    id: 'retail-supermarkets',
    number: 3,
    name: 'Retail Shops & Supermarkets',
    category: 'retail',
    iconName: 'Store',
    tagline: 'High-speed barcode checkout, Stripe checkout, real-time stock alerts, e-commerce sync, and multi-branch management.',
    haxorProducts: 'HaxPos Retail Suite + E-Commerce Web + Google Shopping',
    basePriceKES: 55000,
    badge: 'High-Volume Retail',
    presence: [
      'Modern retail business and e-commerce shopping website',
      'Full digital product catalog with categorization & filters',
      'Google Business Profile optimized for retail shoppers',
      'WhatsApp Business catalog with click-to-buy links'
    ],
    sales: [
      'Touchscreen POS with thermal receipt and barcode scanning',
      'Online e-commerce checkout with Stripe & Card integration',
      'In-store customer loyalty reward points system',
      'Customer purchase accounts and digital receipts'
    ],
    operations: [
      'Barcode inventory management with low-stock SMS alerts',
      'Supplier purchase orders and stock goods-received notes',
      'Multi-branch and warehouse stock transfer tracking',
      'Employee cashier shifts and theft-prevention audit logs'
    ],
    growth: [
      'Google Shopping catalog indexing & Local SEO rank',
      'WhatsApp flash sale broadcast automation',
      'Social commerce integration (Facebook & Instagram Shop)',
      'Customer retention analytics and repeat buyer tracking'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-pos-system', 'calc-gmb-sme', 'calc-seo-growth', 'calc-email-outlook']
  },

  // 4. Wholesalers & Distributors
  {
    id: 'wholesalers-distributors',
    number: 4,
    name: 'Wholesalers & Distributors',
    category: 'retail',
    iconName: 'Package',
    tagline: 'B2B ordering portals, multi-warehouse stock management, credit limits, sales reps tracking, and automated invoicing.',
    haxorProducts: 'Odoo / Zoho ERP Wholesale Distribution + B2B Ordering Portal',
    basePriceKES: 85000,
    badge: 'B2B Commerce',
    presence: [
      'Executive B2B distribution website and product catalog',
      'Verified Google Business Profile for commercial trade buyers',
      'Private B2B dealer/retailer login portal'
    ],
    sales: [
      'Online B2B bulk order placement with tiered volume pricing',
      'Automated formal quotation and proforma invoice generator',
      'Customer credit terms, payment limits & statement tracking',
      'Field sales representative mobile ordering tool'
    ],
    operations: [
      'Multi-warehouse inventory with bin locations and batch tracking',
      'Procurement workflows and supplier container shipment tracking',
      'Fleet delivery dispatch, route planning & proof-of-delivery',
      'Centralized accounting with automated multi-currency invoice synchronization'
    ],
    growth: [
      'B2B Google Search Ads targeting wholesale purchasing managers',
      'Direct email marketing to commercial procurement desks',
      'Executive business intelligence and gross margin dashboards'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-ent', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 5. Schools & Educational Institutions
  {
    id: 'schools-education',
    number: 5,
    name: 'Schools & Educational Institutions',
    category: 'education',
    iconName: 'GraduationCap',
    tagline: 'Student admissions portal, parent fee balance statements, SMS alerts, and Google Family Link student device safety.',
    haxorProducts: 'School Management Portal + Google Family Link + School Website',
    basePriceKES: 65000,
    badge: 'Education & Safety',
    presence: [
      'Comprehensive school website with student admissions portal',
      'Admissions campaign landing pages for intake seasons',
      'Google Business Profile optimized for parents seeking schools',
      'School social media branding and event photo galleries'
    ],
    sales: [
      'Digital student application and enrollment system',
      'Online fee statement portal with automated card and wire integration',
      'Instant fee clearance receipts and financial ledger sync'
    ],
    operations: [
      'Student Information System (SIS): class registers & attendance',
      'Exam grading, digital report card generation and ranking',
      'Parent SMS & WhatsApp broadcast notification engine',
      'Google Family Link device supervision ( / device)'
    ],
    growth: [
      'Google Ads admissions campaigns targeting enrolling parents',
      'Local SEO ranking for top private & international schools',
      'Alumni and parent review management on Google Search'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-gmb-ent', 'calc-family-link', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 6. Colleges, TVETs & Training Centres
  {
    id: 'colleges-tvet-training',
    number: 6,
    name: 'Colleges, TVETs & Training Centres',
    category: 'education',
    iconName: 'BookOpen',
    tagline: 'Online application funnel, LMS course portal, student fees management, and TVET admissions marketing.',
    haxorProducts: 'Custom LMS / Student Portal + College Website + Admissions Ads',
    basePriceKES: 75000,
    badge: 'Higher Education',
    presence: [
      'Institutional college website with searchable course catalog',
      'Course syllabus pages and career outcome roadmaps',
      'Google Business Profile for college campus discovery'
    ],
    sales: [
      'Online student application and document upload portal',
      'Multi-currency and automated online semester fee payment integration',
      'Admissions CRM to follow up with inquiring prospective students'
    ],
    operations: [
      'Learning Management System (LMS) for course materials & notes',
      'Attendance tracking and digital examination marks recording',
      'Automated certificate generation upon course completion',
      'Instructor scheduling and classroom timetable builder'
    ],
    growth: [
      'High-converting intake campaigns on Google Search & Meta',
      'Student lead capture automation and WhatsApp follow-up bots',
      'SEO for vocational, professional, and diploma search terms'
    ],
    recommendedItemIds: ['calc-web-prem', 'calc-lead-portal', 'calc-google-ads', 'calc-meta-growth', 'calc-email-outlook']
  },

  // 7. Hospitals, Clinics & Medical Centres
  {
    id: 'hospitals-clinics-medical',
    number: 7,
    name: 'Hospitals, Clinics & Medical Centres',
    category: 'healthcare',
    iconName: 'Activity',
    tagline: 'Electronic Health Records (EHR), online doctor appointments, queue triage, pharmacy stock, and automated health insurance billing.',
    haxorProducts: 'Hospital Management System (HMS) + Healthcare Web + Google Maps Emergency Rank',
    basePriceKES: 85000,
    badge: 'Healthcare Infrastructure',
    presence: [
      'Healthcare provider website with doctor credentials and specialties',
      'Dedicated medical service departments showcase',
      'Google Business Profile with emergency call button & clinic hours',
      'Direct patient WhatsApp consultation and inquiry hotline'
    ],
    sales: [
      'Online appointment booking calendar with doctor selection',
      'Cashless outpatient billing (Credit Card, Stripe & Insurance)',
      'Automated appointment reminder SMS to eliminate no-shows'
    ],
    operations: [
      'Electronic Health Records (EHR) & paperless doctor consultation notes',
      'Outpatient (OPD) queue triage and Inpatient (IPD) bed management',
      'Pharmacy dispensary inventory with expiry date tracking',
      'Laboratory test ordering, specimen tracking & result PDF generation',
      'Insurance claims reconciliation and automated third-party billing'
    ],
    growth: [
      'Local healthcare SEO for nearby clinic and specialist searches',
      'Google Search Ads targeting high-urgency medical queries',
      'Reputation and patient review management'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-health-records', 'calc-gmb-ent', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 8. Pharmacies & Chemists
  {
    id: 'pharmacies-chemists',
    number: 8,
    name: 'Pharmacies & Chemists',
    category: 'healthcare',
    iconName: 'Heart',
    tagline: 'Prescription intake, drug batch expiry tracking, barcode POS, contactless checkout, and WhatsApp medicine delivery.',
    haxorProducts: 'HaxPos Pharmacy Edition + WhatsApp Medicine Order Funnel',
    basePriceKES: 45000,
    badge: 'Pharmacy & Drugstore',
    presence: [
      'Pharmacy business website with OTC medicine catalog',
      'Google Business Profile optimized for chemist searches nearby',
      'Direct WhatsApp prescription upload and inquiry channel'
    ],
    sales: [
      'Touchscreen POS with barcode scanning and receipt printing',
      'Online order and prescription request portal',
      'Stripe & digital payment integration for delivery & pickup'
    ],
    operations: [
      'Drug inventory batch management with automated expiry alerts',
      'Supplier procurement orders and medicine delivery verification',
      'Customer prescription refill reminder database',
      'Daily shift cash reconciliation and sales audit trails'
    ],
    growth: [
      'Google Maps 3-Pack rank for local emergency chemist searches',
      'WhatsApp broadcast for chronic medication refill reminders',
      'Local review booster for neighborhood trust and reliability'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-pos-system', 'calc-gmb-sme', 'calc-email-basic', 'calc-seo-growth']
  },

  // 9. Real Estate Companies & Property Managers
  {
    id: 'real-estate-property',
    number: 9,
    name: 'Real Estate & Property Management',
    category: 'professional',
    iconName: 'Building',
    tagline: 'Searchable property listings, virtual tours, tenant rent collection portal, maintenance tracking, and buyer CRM.',
    haxorProducts: 'Property Management Portal + Real Estate Web + CRM Integration',
    basePriceKES: 75000,
    badge: 'Property & Land',
    presence: [
      'High-end real estate website with MLS-style searchable listings',
      'Property filter engine (location, bedrooms, price, for sale/rent)',
      'Google Business Profile optimized for property seekers',
      'Virtual video tour and photography showcase'
    ],
    sales: [
      'Lead capture forms on every property detail page',
      'Viewing schedule calendar integrated with agent WhatsApp',
      'Real estate CRM with automated buyer follow-up workflows'
    ],
    operations: [
      'Tenant management portal: digital lease agreements and records',
      'Automated rent invoicing, direct debit & bank reconciliation',
      'Tenant maintenance request ticketing and contractor assignment',
      'Property owner financial statements and expense reports'
    ],
    growth: [
      'Google Search Ads targeting high-value land and property buyers',
      'Targeted Meta Ads (Facebook & Instagram) showcasing properties',
      'Local SEO ranking for commercial and residential real estate terms'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-ent', 'calc-meta-growth', 'calc-email-outlook']
  },

  // 10. Construction Companies
  {
    id: 'construction-companies',
    number: 10,
    name: 'Construction Companies',
    category: 'construction',
    iconName: 'Truck',
    tagline: 'Tender-ready engineering showcase, machinery fleet catalog, commercial RFP quotation funnels, and site project tracking.',
    haxorProducts: 'Engineering Web Architecture + Tender Showcase + Odoo Project ERP',
    basePriceKES: 65000,
    badge: 'Civil & Engineering',
    presence: [
      'Executive engineering website showcasing major completed works',
      'Interactive project portfolio categorized by sector (civil, commercial, residential)',
      'Google Business Profile verification for commercial contractor searches',
      'Safety and regulatory compliance certification display'
    ],
    sales: [
      'Tender-ready specification showcase and credentials download portal',
      'Structured Request for Quotation (RFQ) inquiry forms',
      'Client relationship CRM to track multi-million commercial bids'
    ],
    operations: [
      'Project milestone tracking, contractor task assignments and Gantt charts',
      'Site procurement, supplier purchase orders and materials inventory',
      'Equipment and machinery fleet maintenance scheduling',
      'Labor timesheet recording and site expense management'
    ],
    growth: [
      'SEO optimization for engineering, civil works, and commercial tenders',
      'LinkedIn executive positioning strategy for enterprise tenders',
      'Professional project case study photography and documentation'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-tender-portfolio', 'calc-gmb-sme', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 11. Contractors & Skilled Trades (Electricians, Plumbers, Mechanics, etc.)
  {
    id: 'contractors-skilled-trades',
    number: 11,
    name: 'Contractors & Skilled Trades',
    category: 'construction',
    iconName: 'Wrench',
    tagline: 'Emergency click-to-call mobile site, instant quote calculator, WhatsApp job booking, and Google Maps local dominance.',
    haxorProducts: 'Trade Booking Web + Google Maps 3-Pack + Invoicing Tool',
    basePriceKES: 35000,
    badge: 'Trade Services',
    presence: [
      'Fast mobile-friendly trade website with click-to-call buttons',
      'Clear service tier pricing and service area coverage map',
      'Google Business Profile optimized for urgent trade searches'
    ],
    sales: [
      'Instant service quotation request and emergency call-out form',
      'WhatsApp direct photo/video diagnostic consultation channel',
      'On-site mobile invoicing and contactless payment collection'
    ],
    operations: [
      'Technician job scheduling and dispatch calendar',
      'Customer job history database with past repair records',
      'Digital receipt and work guarantee certificates'
    ],
    growth: [
      'Google Maps 3-Pack ranking for nearby emergency repairs',
      'Google Local Call-Only Ads to capture immediate high-intent buyers',
      'Automated SMS review requests after job completion'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-gmb-ent', 'calc-email-basic', 'calc-seo-growth', 'calc-google-ads']
  },

  // 12. Law Firms & Advocates
  {
    id: 'law-firms',
    number: 12,
    name: 'Law Firms & Legal Advocates',
    category: 'professional',
    iconName: 'Briefcase',
    tagline: 'High-credibility legal practice website, lawyer profiles, confidential consultation booking, and legal CRM.',
    haxorProducts: 'Legal Practice Web + Consultation Booking + Zoho Legal CRM',
    basePriceKES: 55000,
    badge: 'Legal Practice',
    presence: [
      'Authoritative law firm website with practice-area specializations',
      'Detailed advocate and partner credential profiles',
      'Google Business Profile verified for commercial and individual legal searches'
    ],
    sales: [
      'Confidential consultation request and preliminary intake forms',
      'Calendar booking system for paid partner legal strategy sessions',
      'Retainer agreement digital delivery and invoice payment portal'
    ],
    operations: [
      'Secure client case management and confidential document vault',
      'Court date reminders and litigation calendar tracking',
      'Billable hours time tracker and professional invoice generator'
    ],
    growth: [
      'Search engine dominance for high-value legal representation keywords',
      'Legal publication and advisory article publishing pipeline',
      'Reputation and enterprise client reference management'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-sme', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 13. Accounting & Auditing Firms
  {
    id: 'accounting-auditing',
    number: 13,
    name: 'Accounting & Auditing Firms',
    category: 'professional',
    iconName: 'FileText',
    tagline: 'Client tax intake, business tax compliance consulting, secure document portal, automated bookkeeping CRM, and advisory funnels.',
    haxorProducts: 'Accounting Firm Portal + Zoho / Odoo Practice Tools',
    basePriceKES: 55000,
    badge: 'Financial Advisory',
    presence: [
      'Professional accounting firm website with service scope breakdown',
      'Tax season and regulatory compliance advisory pages',
      'Google Business Profile optimized for business bookkeeping queries'
    ],
    sales: [
      'Automated client audit and bookkeeping quotation intake form',
      'Consultation booking calendar for executive tax reviews',
      'Digital fee agreement signing and milestone invoice gateway'
    ],
    operations: [
      'Secure client document upload portal for tax returns and receipts',
      'Client engagement workflow tracking from draft to signed audit report',
      'Integrated invoicing and monthly retainer automated billing'
    ],
    growth: [
      'Targeted B2B Google Ads during annual tax and audit filing deadlines',
      'SEO ranking for VAT audit, payroll, and bookkeeping keywords',
      'Monthly business accounting newsletter automation'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-sme', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 14. Insurance Companies & Agencies
  {
    id: 'insurance-agencies',
    number: 14,
    name: 'Insurance Companies & Agencies',
    category: 'financial',
    iconName: 'ShieldCheck',
    tagline: 'Instant policy premium calculators, lead generation funnels, policyholder CRM, claims workflow, and renewal reminders.',
    haxorProducts: 'Insurance Portal + Premium Calculator + Zoho Insurance CRM',
    basePriceKES: 65000,
    badge: 'Risk & Insurance',
    presence: [
      'Trust-inspiring insurance website detailing motor, medical & life coverage',
      'Interactive premium calculation tool for instant quote estimates',
      'Google Business Profile optimized for local insurance agent searches'
    ],
    sales: [
      'Online policy inquiry forms with vehicle/medical detail capture',
      'Instant WhatsApp quote generation and policy advisor routing',
      'Online premium payment gateway with Stripe and card support'
    ],
    operations: [
      'Policyholder CRM tracking coverage dates and policy schedules',
      'Automated renewal notification engine (SMS, Email, WhatsApp)',
      'Digital claims submission portal with photo/document upload'
    ],
    growth: [
      'High-intent Google Search Ads capturing active insurance buyers',
      'Retargeting ads for visitors who calculated premiums without purchasing',
      'SEO for competitive insurance comparison and underwriting keywords'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-ent', 'calc-email-outlook', 'calc-google-ads']
  },

  // 15. SACCOs & Microfinance Institutions
  {
    id: 'saccos-microfinance',
    number: 15,
    name: 'SACCOs & Microfinance',
    category: 'financial',
    iconName: 'CreditCard',
    tagline: 'Member registration, online loan application, dividend calculator, savings statements, and online card/wire payment integration.',
    haxorProducts: 'SACCO Member Portal + Loan Management + Financial Web Architecture',
    basePriceKES: 95000,
    badge: 'Financial Services',
    presence: [
      'Institutional financial portal detailing loan products & membership rules',
      'Interactive loan repayment and savings dividend calculators',
      'Verified Google Business Profile for branch and head-office discovery'
    ],
    sales: [
      'Online member application and KYC document submission portal',
      'Digital loan application with guarantor verification workflows',
      'Instant share capital and contribution payment via secure card/wire'
    ],
    operations: [
      'Secure member self-service portal for savings statements and balances',
      'Loan appraisal tracking, repayment schedule calculation and arrears alerts',
      'Full accounting ledger integration with core banking software',
      'Bank-grade SSL encryption and security compliance protocols'
    ],
    growth: [
      'Google Search campaigns targeting specialized professional SACCO membership',
      'Automated SMS updates for savings growth and AGM announcements',
      'SEO for low-interest development and asset financing queries'
    ],
    recommendedItemIds: ['calc-web-prem', 'calc-lead-portal', 'calc-gmb-ent', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 16. NGOs & Nonprofits
  {
    id: 'ngos-nonprofits',
    number: 16,
    name: 'NGOs & Non-Profits',
    category: 'community',
    iconName: 'Globe',
    tagline: 'Donor presentation website, global online donation system, project impact showcases, and volunteer CRM.',
    haxorProducts: 'Non-Profit Web Portal + Multi-Currency Donation Engine + Donor CRM',
    basePriceKES: 55000,
    badge: 'Humanitarian & NGO',
    presence: [
      'High-credibility organization website highlighting mission & verified impact',
      'Interactive project gallery with field photos and community stories',
      'Downloadable annual reports and financial audit disclosures'
    ],
    sales: [
      'Multi-currency online donation engine (PayPal, Stripe, Cards)',
      'Recurring monthly donor subscription sponsorship program',
      'Volunteer and institutional partnership application funnels'
    ],
    operations: [
      'Donor database CRM tracking contributions and grant history',
      'Automated tax-exempt donation receipts and personalized thank-you emails',
      'Field project milestone tracking and impact metric dashboards'
    ],
    growth: [
      'Google for Nonprofits ($10,000/mo Google Ad Grant setup assistance)',
      'Social media storytelling campaigns and newsletter broadcasts',
      'International SEO for global philanthropy and foundation visibility'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-email-outlook', 'calc-social', 'calc-seo-growth']
  },

  // 17. Churches & Religious Organizations
  {
    id: 'churches-religious',
    number: 17,
    name: 'Churches & Religious Organizations',
    category: 'community',
    iconName: 'Users',
    tagline: 'Online sermon streaming, digital tithe/offering giving, event registrations, ministry portals, and SMS communication.',
    haxorProducts: 'Church Media Portal + Online Tithe Gateway + Member CRM',
    basePriceKES: 45000,
    badge: 'Faith & Community',
    presence: [
      'Engaging church website with service times, ministry groups and location map',
      'Sermon video and podcast archive with categorized teachings',
      'Google Business Profile for worship location and driving directions'
    ],
    sales: [
      'Secure digital tithe, offering and building fund giving (Stripe, Card, PayPal)',
      'Event and conference registration with digital pass generation'
    ],
    operations: [
      'Member database tracking families, cell groups and ministries',
      'SMS and WhatsApp prayer request intake and pastoral broadcasts',
      'Volunteer scheduling and ministry roster management'
    ],
    growth: [
      'YouTube and Facebook live-stream integration for global congregants',
      'Social media community quote cards and sermon highlights',
      'Local search ranking for churches in the surrounding area'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-gmb-sme', 'calc-email-basic', 'calc-social', 'calc-seo-growth']
  },

  // 18. Tours & Travel Companies
  {
    id: 'tours-travel',
    number: 18,
    name: 'Tours & Safari Travel',
    category: 'hospitality',
    iconName: 'Compass',
    tagline: 'Safari package showcases, multi-currency itinerary booking, WhatsApp concierge, and international Google search ranking.',
    haxorProducts: 'Safari Booking Portal + Travel CRM + Multi-Currency Gateway',
    basePriceKES: 65000,
    badge: 'Tours & Safaris',
    presence: [
      'Visually captivating tour website with safari itineraries and day-by-day plans',
      'Multi-currency package display (USD, EUR, KES)',
      'Google Business Profile optimized for international safari travelers',
      'WhatsApp instant safari customization concierge'
    ],
    sales: [
      'Direct itinerary booking engine with deposit milestone payments',
      'Instant PayPal, Visa/Mastercard and Stripe payment integration',
      'Tailored private safari quotation inquiry request funnels'
    ],
    operations: [
      'Traveler CRM tracking customer nationality, dietary needs and preferences',
      'Safari vehicle allocation and tour guide dispatch schedule',
      'Hotel and lodge reservation voucher generation'
    ],
    growth: [
      'International SEO ranking for competitive safari and beach holiday keywords',
      'TripAdvisor and SafariBookings review integration and reputation management',
      'Google Search Ads targeted to Europe, North America, and domestic explorers'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-fleet-dispatch', 'calc-gmb-ent', 'calc-seo-growth', 'calc-email-outlook']
  },

  // 19. Transport & Logistics Fleets
  {
    id: 'transport-logistics',
    number: 19,
    name: 'Transport & Logistics Fleets',
    category: 'logistics',
    iconName: 'Truck',
    tagline: 'Freight rate calculator, cargo dispatch system, real-time GPS tracking, proof of delivery, and automated B2B invoicing.',
    haxorProducts: 'ElitteGo Logistics Platform / Dispatch Portal + Fleet Website',
    basePriceKES: 75000,
    badge: 'Cargo & Logistics',
    presence: [
      'Executive logistics website detailing routes, fleet types, and warehousing',
      'Instant freight shipping rate estimator and quotation calculator',
      'Google Business Profile for regional cargo and transport searches'
    ],
    sales: [
      'Online cargo booking and consignment pickup request portal',
      'Automated waybill generation and digital commercial invoicing',
      'Stripe checkout and commercial credit terms payment integration'
    ],
    operations: [
      'Driver live GPS dispatch, route scheduling and vehicle assignment',
      'Digital Proof of Delivery (POD) with recipient e-signature and photo upload',
      'Fleet maintenance tracking, fuel logs and inspection schedules'
    ],
    growth: [
      'B2B Google Ads targeting commercial manufacturers and importers',
      'Local SEO ranking for freight forwarding, haulage and parcel delivery',
      'Commercial client account dashboards and monthly shipping volume analytics'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-fleet-dispatch', 'calc-gmb-ent', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 20. Car Dealerships & Showrooms
  {
    id: 'car-dealerships',
    number: 20,
    name: 'Car Dealerships & Showrooms',
    category: 'automotive',
    iconName: 'Car',
    tagline: 'Searchable vehicle inventory catalog, test-drive booking, financing inquiry funnels, and car buyer CRM.',
    haxorProducts: 'Automotive Showroom Web + Inventory System + Lead CRM',
    basePriceKES: 65000,
    badge: 'Automotive Sales',
    presence: [
      'Sleek automotive showroom website with searchable vehicle inventory',
      'Vehicle detail pages with full specs, mileage, year, and photo galleries',
      'Google Business Profile optimized for car buyers in the region',
      'Direct WhatsApp inquiry buttons on every vehicle listing'
    ],
    sales: [
      'Online test-drive reservation calendar',
      'Asset finance and bank loan inquiry pre-qualification forms',
      'Trade-in vehicle valuation request submission funnel'
    ],
    operations: [
      'Vehicle inventory manager with status tracking (Available, Reserved, Sold)',
      'Sales rep assignment and prospective car buyer follow-up CRM',
      'Automated vehicle import document and logbook handover checklist'
    ],
    growth: [
      'High-impact social media inventory video showcases (TikTok, Instagram, YouTube)',
      'Google Search Ads targeting specific vehicle models (Prado, Axio, Demio, CX-5)',
      'Local automotive SEO ranking for trusted car dealers'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-ent', 'calc-meta-growth', 'calc-email-outlook']
  },

  // 21. Auto Garages & Mechanics
  {
    id: 'auto-garages-mechanics',
    number: 21,
    name: 'Auto Garages & Mechanics',
    category: 'automotive',
    iconName: 'Wrench',
    tagline: 'Digital job cards, vehicle service history, parts inventory, SMS service reminders, and Google Maps emergency rank.',
    haxorProducts: 'Garage Management System + Garage Website + Google Maps 3-Pack',
    basePriceKES: 45000,
    badge: 'Auto Repair',
    presence: [
      'Modern auto garage website detailing diagnostic and repair capabilities',
      'Clear service package pricing (Minor service, major service, overhaul)',
      'Google Business Profile optimized for breakdown and mechanic searches'
    ],
    sales: [
      'Online vehicle service appointment booking calendar',
      'Emergency roadside assistance click-to-WhatsApp trigger',
      'Digital repair quote approvals and online payment integration'
    ],
    operations: [
      'Digital job card creation with vehicle VIN, plate number and reported faults',
      'Mechanic technician task assignment and labor hour logging',
      'Auto spare parts inventory with stock consumption tracking',
      'Customer service history database with automated next-service SMS alerts'
    ],
    growth: [
      'Google Maps #1 ranking for mechanic and car repair near me',
      'Automated review request system building 5-star social proof',
      'Loyalty discounts for fleet maintenance and enterprise accounts'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-pos-system', 'calc-gmb-ent', 'calc-email-basic', 'calc-seo-growth']
  },

  // 22. Beauty Salons & Barbershops
  {
    id: 'beauty-salons-barbershops',
    number: 22,
    name: 'Beauty Salons & Barbershops',
    category: 'lifestyle',
    iconName: 'Scissors',
    tagline: 'Online stylist booking, service menu, walk-in touchscreen POS, staff commission tracking, and client retention SMS.',
    haxorProducts: 'Salon POS & Booking Engine + Salon Website + Google Maps',
    basePriceKES: 35000,
    badge: 'Salon & Grooming',
    presence: [
      'Aesthetic beauty salon or barbershop website with lookbook and hairstyles',
      'Clear service menu with pricing and treatment duration',
      'Google Business Profile optimized for beauty and haircut searches nearby',
      'Instagram visual gallery sync displaying latest client transformations'
    ],
    sales: [
      'Online 24/7 appointment scheduling with stylist selection',
      'Walk-in touchscreen POS with contactless card & digital checkout',
      'VIP prepaid packages and gift voucher sales'
    ],
    operations: [
      'Stylist appointment calendar preventing double bookings',
      'Staff commission calculation based on daily services performed',
      'Salon beauty product inventory and retail stock tracking',
      'Customer database with preferred styles and color formula notes'
    ],
    growth: [
      'Google Maps 3-Pack rank for top salons and barbers nearby',
      'Automated SMS reminders 3 weeks after visit for repeat appointments',
      'Instagram reel strategy to attract walk-ins from the surrounding area'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-booking-engine', 'calc-gmb-ent', 'calc-social', 'calc-email-basic']
  },

  // 23. Gyms & Fitness Centres
  {
    id: 'gyms-fitness-centres',
    number: 23,
    name: 'Gyms & Fitness Centres',
    category: 'lifestyle',
    iconName: 'Activity',
    tagline: 'Membership recurring payments, class scheduling, trainer management, member check-in, and fitness lead funnels.',
    haxorProducts: 'Fitness Portal + Member Management + Lead Funnel',
    basePriceKES: 45000,
    badge: 'Fitness & Health',
    presence: [
      'Dynamic fitness center website with facility virtual tour and equipment showcase',
      'Class timetable schedule (Aerobics, Zumba, Spin, Crossfit)',
      'Trainer profiles with fitness certifications and specialties',
      'Google Business Profile optimized for gym and workout searches'
    ],
    sales: [
      'Online membership registration and recurring Stripe subscription payments',
      'Day pass and personal training package checkout',
      'Lead capture form offering free trial day pass for local prospects'
    ],
    operations: [
      'Member check-in attendance tracking and active status validation',
      'Personal trainer session allocation and booking calendar',
      'Juice bar and supplement inventory POS system',
      'Automated membership expiry and renewal SMS alerts'
    ],
    growth: [
      'High-converting New Year and seasonal fitness Google / Meta Ads',
      'Local SEO ranking for top gym and personal trainer searches',
      'Member referral reward program automation'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-booking-engine', 'calc-gmb-ent', 'calc-meta-basic', 'calc-email-outlook']
  },

  // 24. Professional Consultants (ICT, HR, Management, Business)
  {
    id: 'professional-consultants',
    number: 24,
    name: 'Professional Consultants',
    category: 'professional',
    iconName: 'Briefcase',
    tagline: 'High-authority personal branding site, consultation booking, proposal generation, client portal, and retainer invoicing.',
    haxorProducts: 'Consultant Practice Web + Appointment Engine + Zoho CRM',
    basePriceKES: 45000,
    badge: 'Executive Advisory',
    presence: [
      'Executive consultancy website showcasing expertise, frameworks & client results',
      'Downloadable whitepapers, advisory frameworks and thought-leadership articles',
      'Google Business Profile verified for management and strategy advisory searches'
    ],
    sales: [
      'Paid consultation booking calendar integrated with Zoom / Google Meet',
      'High-converting advisory proposal and quotation request funnels',
      'Milestone invoicing and digital agreement signing'
    ],
    operations: [
      'Client engagement CRM tracking project milestones and deliverables',
      'Secure client document exchange portal',
      'Time tracking for hourly and retainer client billing'
    ],
    growth: [
      'LinkedIn thought-leadership positioning and executive content strategy',
      'SEO for niche commercial consulting terms',
      'Automated email newsletter distribution to C-suite subscribers'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-sme', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 25. Digital Marketing Agencies
  {
    id: 'digital-marketing-agencies',
    number: 25,
    name: 'Digital Marketing Agencies',
    category: 'creative',
    iconName: 'Zap',
    tagline: 'Agency case studies showcase, client proposal generator, client reporting portal, retainer billing, and lead capture.',
    haxorProducts: 'Agency Portfolio Web + Client Reporting Portal + Retainer System',
    basePriceKES: 55000,
    badge: 'Marketing & Media',
    presence: [
      'High-converting agency website showcasing verified client ROAS and growth results',
      'Interactive case studies breakdown (PPC, SEO, Social, Web)',
      'Service package tiers and monthly retainer scope details'
    ],
    sales: [
      'Interactive project scope and quote calculator funnel',
      'Direct audit request form (Free Website & SEO audit)',
      'Digital client onboarding agreement and monthly retainer checkout'
    ],
    operations: [
      'Project management board for creative assets and campaign deadlines',
      'Client reporting dashboards tracking traffic, conversions and ad spend',
      'Automated monthly recurring retainer invoicing'
    ],
    growth: [
      'Omnichannel inbound lead generation on Google Search and LinkedIn',
      'Case study video reels and social proof advertising',
      'B2B SEO ranking for digital agency and performance marketing terms'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-seo-growth', 'calc-email-outlook', 'calc-google-ads']
  },

  // 26. Manufacturing Companies
  {
    id: 'manufacturing-companies',
    number: 26,
    name: 'Manufacturing & Industrial Plants',
    category: 'manufacturing',
    iconName: 'Cpu',
    tagline: 'B2B industrial catalog, production ERP, bill of materials (BOM), multi-warehouse raw material tracking, and distributor portal.',
    haxorProducts: 'Odoo / Zoho Manufacturing ERP + B2B Industrial Web + Distributor Portal',
    basePriceKES: 95000,
    badge: 'Industrial Scale',
    presence: [
      'Industrial manufacturing website highlighting plant capacity and machinery',
      'Comprehensive product catalog with engineering specs and certifications',
      'Verified Google Business Profile for commercial factory inquiries'
    ],
    sales: [
      'B2B bulk distributor order portal with minimum order quantity (MOQ) rules',
      'Formal quotation and commercial proforma invoice generation',
      'Distributor credit accounts and tiered price list management'
    ],
    operations: [
      'Manufacturing ERP: Bill of Materials (BOM) and production work orders',
      'Raw material inventory tracking with automated purchase alerts',
      'Quality control (QC) inspection checkpoints and batch traceability',
      'Equipment maintenance scheduling and plant downtime tracking',
      'Comprehensive accounting with automated multi-currency invoice synchronization'
    ],
    growth: [
      'Targeted B2B Google Search Ads capturing commercial procurement officers',
      'Export market visibility and trade directory indexing',
      'Executive dashboard tracking factory output, scrap rates and unit margins'
    ],
    recommendedItemIds: ['calc-web-prem', 'calc-lead-portal', 'calc-gmb-ent', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 27. Agriculture & Agribusiness
  {
    id: 'agriculture-agribusiness',
    number: 27,
    name: 'Agriculture & Agribusiness',
    category: 'manufacturing',
    iconName: 'Sun',
    tagline: 'Farm produce catalog, B2B wholesale ordering, outgrower farmer management, harvest inventory, and cold-chain dispatch.',
    haxorProducts: 'Agribusiness Web + Supply Chain ERP + WhatsApp Farm Orders',
    basePriceKES: 65000,
    badge: 'Agri & Food',
    presence: [
      'Agribusiness website showcasing farm produce, certifications (GlobalGAP), and exports',
      'Produce availability schedule by harvest season',
      'Google Business Profile for farm depot and wholesale collection points'
    ],
    sales: [
      'Wholesale farm produce ordering portal for supermarkets and exporters',
      'Direct WhatsApp bulk ordering for restaurants and grocers',
      'Stripe, card, and wire transfer payment reconciliation'
    ],
    operations: [
      'Harvest inventory tracking with cold room storage and shelf-life monitoring',
      'Outgrower farmer registration, collection weight logging and payout ledger',
      'Agricultural inputs procurement (fertilizer, seeds, chemicals)',
      'Cold-chain transport dispatch and route delivery management'
    ],
    growth: [
      'B2B export buyer lead generation campaigns',
      'Local SEO for bulk farm supply and food processing inquiries',
      'SMS alerts to contracted farmers regarding collection dates and market prices'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-fleet-dispatch', 'calc-gmb-sme', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 28. Veterinary Businesses & Agrovet
  {
    id: 'veterinary-agrovet',
    number: 28,
    name: 'Veterinary Clinics & Agrovet',
    category: 'healthcare',
    iconName: 'Heart',
    tagline: 'Animal patient records, farm visit booking, agrovet inventory with expiry tracking, POS, and farmer advisory.',
    haxorProducts: 'Agrovet POS + Vet Clinic Records + WhatsApp Consultation',
    basePriceKES: 45000,
    badge: 'Vet & Agrovet',
    presence: [
      'Veterinary clinic and agrovet website detailing pet and livestock services',
      'Product catalog of farm feeds, animal medicines, and veterinary equipment',
      'Google Business Profile optimized for vet care and agrovet supplies'
    ],
    sales: [
      'Touchscreen POS for over-the-counter agrovet sales with receipt printing',
      'Online appointment booking for clinic visits and mobile farm callouts',
      'Contactless and card checkout for supplies and treatments'
    ],
    operations: [
      'Animal patient medical records (vaccination history, deworming dates)',
      'Agrovet pharmacy inventory with batch expiry and stock reorder alerts',
      'Automated vaccination reminder SMS sent to pet and livestock owners'
    ],
    growth: [
      'Google Maps 3-Pack rank for emergency vet and trusted agrovet nearby',
      'Farmer advisory WhatsApp group management for seasonal disease alerts',
      'Local customer loyalty discounts for bulk feed purchasers'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-pos-system', 'calc-gmb-sme', 'calc-email-basic', 'calc-seo-growth']
  },

  // 29. Fashion & Clothing Businesses
  {
    id: 'fashion-clothing',
    number: 29,
    name: 'Fashion & Clothing Boutiques',
    category: 'retail',
    iconName: 'ShoppingBag',
    tagline: 'E-commerce boutique, size/color variant matrix, WhatsApp catalog shopping, Instagram shop sync, and in-store POS.',
    haxorProducts: 'Fashion E-Commerce + In-Store POS + Instagram Shop Sync',
    basePriceKES: 55000,
    badge: 'Fashion & Apparel',
    presence: [
      'High-fashion e-commerce website with lookbooks and seasonal collections',
      'Instagram and TikTok shop catalog synchronization',
      'Google Business Profile for fashion boutique store visits',
      'Direct WhatsApp catalog shopping integration'
    ],
    sales: [
      'Online clothing store with size, color and style variant selectors',
      'Stripe and international card payments checkout',
      'Physical boutique touchscreen POS synchronized with online inventory'
    ],
    operations: [
      'Unified stock inventory preventing out-of-stock orders online and in-store',
      'Courier delivery dispatch integration with order tracking links',
      'Customer order history and return/exchange management'
    ],
    growth: [
      'Meta Ads (Facebook & Instagram) showcasing trending outfits and reels',
      'Influencer campaign tracking and affiliate discount codes',
      'Automated abandoned cart WhatsApp recovery messages'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-pos-system', 'calc-gmb-sme', 'calc-meta-basic', 'calc-email-outlook']
  },

  // 30. Furniture Businesses
  {
    id: 'furniture-businesses',
    number: 30,
    name: 'Furniture Showrooms & Workshops',
    category: 'retail',
    iconName: 'Layers',
    tagline: 'Custom furniture showcase, dimension configurator, custom order quote requests, delivery tracking, and showroom POS.',
    haxorProducts: 'Furniture Showroom Web + Custom Quote Portal + POS',
    basePriceKES: 55000,
    badge: 'Home & Furniture',
    presence: [
      'Elegant furniture website displaying living, office, bedroom & dining collections',
      'Full product spec sheets (dimensions, wood type, fabric options, warranty)',
      'Google Business Profile optimized for furniture showroom discovery'
    ],
    sales: [
      'Custom bespoke furniture quote request and fabric customization form',
      'Online e-commerce purchasing with deposit and balance milestone payments',
      'Showroom touchscreen POS for in-store purchases'
    ],
    operations: [
      'Custom workshop production order tracking (Woodwork, Upholstery, Finishing)',
      'Finished goods inventory and showroom display stock tracking',
      'Home delivery and assembly scheduling with customer signature'
    ],
    growth: [
      'High-conversion Meta Ads targeting new homeowners and office setups',
      'Google Search Ads for office furniture, sofa sets, and dining tables',
      'Local showroom foot-traffic Google Maps booster'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-sme', 'calc-meta-basic', 'calc-email-outlook']
  },

  // 31. Electronics & Phone Shops
  {
    id: 'electronics-phone-shops',
    number: 31,
    name: 'Electronics & Phone Shops',
    category: 'retail',
    iconName: 'Smartphone',
    tagline: 'Barcode inventory, IMEI/serial number warranty tracking, phone repair ticketing, e-commerce store, and modern retail POS.',
    haxorProducts: 'Electronics E-Commerce + IMEI POS + Repair Ticketing',
    basePriceKES: 55000,
    badge: 'Tech & Gadgets',
    presence: [
      'Tech e-commerce website with specifications and side-by-side comparison',
      'Brand showcase (Apple, Samsung, HP, Dell, Lenovo, Xiaomi)',
      'Google Business Profile optimized for electronics and phone repair searches'
    ],
    sales: [
      'High-speed POS with barcode scanner and IMEI serial number capture',
      'Online checkout with doorstep delivery and Stripe integration',
      'Trade-in smartphone valuation request funnels'
    ],
    operations: [
      'IMEI serial number warranty tracking preventing fraudulent returns',
      'Phone and laptop repair job ticketing with status update SMS to customers',
      'Supplier procurement and accessory inventory management'
    ],
    growth: [
      'Google Shopping and Local SEO for smartphone and gadget searches',
      'TikTok and Instagram unboxing video content strategy',
      'WhatsApp broadcast updates for new smartphone arrivals and sales'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-pos-system', 'calc-gmb-sme', 'calc-seo-growth', 'calc-email-outlook']
  },

  // 32. Event Planners & Wedding Businesses
  {
    id: 'event-planners-weddings',
    number: 32,
    name: 'Event Planners & Wedding Decor',
    category: 'creative',
    iconName: 'Sparkles',
    tagline: 'Event portfolio gallery, package quote calculator, vendor coordinator CRM, contract e-signing, and booking calendar.',
    haxorProducts: 'Events Portfolio Web + Event Quote Calculator + Client CRM',
    basePriceKES: 55000,
    badge: 'Events & Weddings',
    presence: [
      'High-glamour event website showcasing past weddings, galas & business functions',
      'Theme galleries categorized by event style, lighting and decor',
      'Google Business Profile verified for event and wedding planning searches'
    ],
    sales: [
      'Interactive event budget and guest-count quote estimator calculator',
      'Consultation booking calendar for wedding couples and executive event leads',
      'Digital contract signing and deposit payment milestone gateway'
    ],
    operations: [
      'Event timeline task management and vendor contact directory',
      'Decor and equipment hire inventory tracking (Tents, Chairs, Lighting, PA)',
      'Client budget tracking and vendor payment reconciliation'
    ],
    growth: [
      'Instagram and Pinterest bridal inspiration advertising',
      'SEO for wedding planners, business gala decor, and party rentals',
      'Review collection on Google Search from satisfied brides and clients'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-gmb-sme', 'calc-meta-growth', 'calc-email-outlook']
  },

  // 33. Photographers & Videographers
  {
    id: 'photographers-videographers',
    number: 33,
    name: 'Photographers & Videographers',
    category: 'creative',
    iconName: 'Camera',
    tagline: 'High-resolution visual portfolio, package booking, digital contract signing, client photo delivery proofing, and payments.',
    haxorProducts: 'Photography Portfolio Web + Client Gallery Proofing + Booking Engine',
    basePriceKES: 45000,
    badge: 'Photo & Video',
    presence: [
      'Clean, fast-loading visual portfolio website with full-screen galleries',
      'Category portfolios (Weddings, Portraits, Commercial, Real Estate, Events)',
      'Google Business Profile optimized for studio and event photography'
    ],
    sales: [
      'Photography package selector and date availability calendar',
      'Digital client service agreement with online deposit payments',
      'Direct WhatsApp booking trigger with date check'
    ],
    operations: [
      'Private password-protected client gallery for photo proofing and selection',
      'High-resolution file delivery portal with cloud download links',
      'Shoot equipment checklist and shooting schedule calendar'
    ],
    growth: [
      'Instagram visual storytelling and behind-the-scenes video reels',
      'SEO for wedding photographer, executive portraits, and commercial studio',
      'Google 5-star review collection from private and business clients'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-booking-engine', 'calc-gmb-sme', 'calc-social', 'calc-email-basic']
  },

  // 34. Printing & Branding Companies
  {
    id: 'printing-branding',
    number: 34,
    name: 'Printing & Branding Companies',
    category: 'creative',
    iconName: 'Printer',
    tagline: 'Print-on-demand catalog, artwork file upload portal, instant quantity quote calculator, job ticket tracking, and POS.',
    haxorProducts: 'Print Portal Web + Artwork Upload System + Print POS',
    basePriceKES: 55000,
    badge: 'Print & Branding',
    presence: [
      'Comprehensive printing website detailing paper, banner, apparel & gift branding',
      'Product specifications (GSM paper weights, banner vinyl, embroidery vs print)',
      'Google Business Profile optimized for commercial printing searches'
    ],
    sales: [
      'Instant print quote calculator by quantity, finish, and material',
      'Online artwork file upload portal (PDF, AI, PSD, High-res images)',
      'POS checkout for walk-in print orders with contactless payment integration'
    ],
    operations: [
      'Print job ticket workflow: Pre-press proofing → Print → Lamination → Dispatch',
      'Paper, vinyl, ink and garment blank inventory tracking',
      'Client proof approval confirmation system before production begins'
    ],
    growth: [
      'Google Search Ads targeting commercial merchandise, flyers and business cards',
      'B2B email outreach to enterprise event managers and schools',
      'SEO for business branding, banner printing, and custom t-shirts'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-pos-system', 'calc-gmb-sme', 'calc-email-outlook']
  },

  // 35. Cleaning & Fumigation Companies
  {
    id: 'cleaning-companies',
    number: 35,
    name: 'Cleaning & Fumigation Services',
    category: 'services',
    iconName: 'ShieldCheck',
    tagline: 'Online cleaning quote calculator, recurring service subscriptions, staff dispatch scheduling, and Google Maps local rank.',
    haxorProducts: 'Cleaning Service Web + Booking Calculator + Dispatch System',
    basePriceKES: 45000,
    badge: 'Cleaning & Hygiene',
    presence: [
      'Fresh, trust-inspiring cleaning website detailing residential & commercial services',
      'Clear transparent pricing per square foot, bedroom count, or office size',
      'Google Business Profile optimized for cleaning and fumigation searches'
    ],
    sales: [
      'Interactive cleaning quote calculator with instant price estimation',
      'Online booking calendar for one-off deep cleans or recurring schedules',
      'Stripe and credit card payment integration'
    ],
    operations: [
      'Cleaning crew dispatch calendar and job address management',
      'Chemical and equipment inventory tracking (detergents, vacuums, sprayers)',
      'Recurring service automated reminder engine (weekly, bi-weekly, monthly)'
    ],
    growth: [
      'Google Local Search Ads targeting moving-in and deep cleaning queries',
      'Automated review requests after job completion to build social proof',
      'B2B commercial office contract proposal funnels'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-lead-portal', 'calc-gmb-ent', 'calc-email-basic', 'calc-google-ads']
  },

  // 36. Security & Guard Companies
  {
    id: 'security-companies',
    number: 36,
    name: 'Security & Guarding Companies',
    category: 'services',
    iconName: 'Shield',
    tagline: 'Commercial security proposals, guard patrol tracking, incident reporting portal, staff scheduling, and payroll integration.',
    haxorProducts: 'Security Firm Web + Guard Management Portal + Tender Showcase',
    basePriceKES: 65000,
    badge: 'Security & Safety',
    presence: [
      'Authoritative security company website detailing manned guarding, CCTV & alarm response',
      'Regulatory licenses and compliance certifications showcase',
      'Google Business Profile verified for commercial security tenders'
    ],
    sales: [
      'Commercial security quotation request and site assessment booking form',
      'Tender-ready company profile and credentials download center',
      'Monthly security service contract invoicing portal'
    ],
    operations: [
      'Guard post deployment scheduling and attendance shift roster',
      'Digital incident reporting log with photo upload and client notifications',
      'Security personnel payroll and equipment issue records (radios, uniforms)'
    ],
    growth: [
      'B2B Google Ads targeting property managers, embassies, and industrial parks',
      'SEO for commercial guarding, alarm response, and access control',
      'Client trust testimonials from enterprise estates and factories'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-tender-portfolio', 'calc-gmb-sme', 'calc-email-outlook', 'calc-seo-growth']
  },

  // 37. Recruitment & HR Agencies
  {
    id: 'recruitment-hr',
    number: 37,
    name: 'Recruitment & HR Agencies',
    category: 'professional',
    iconName: 'Users',
    tagline: 'Online job board, CV upload database, applicant tracking system (ATS), employer portal, and recruitment CRM.',
    haxorProducts: 'Recruitment Portal + Job Board + Applicant Tracking System',
    basePriceKES: 65000,
    badge: 'Talent & HR',
    presence: [
      'Modern recruitment agency website with searchable online job board',
      'Employer services breakdown (executive search, headhunting, payroll outsourcing)',
      'Google Business Profile optimized for job seekers and hiring employers'
    ],
    sales: [
      'Employer talent request submission form with job description upload',
      'Recruitment fee proposal generator and service agreement portal',
      'WhatsApp direct hiring consultation hotline'
    ],
    operations: [
      'Applicant Tracking System (ATS) parsing candidate CVs and applications',
      'Pre-screened candidate database searchable by skill, experience and salary',
      'Interview scheduling calendar coordinating employers and candidates'
    ],
    growth: [
      'LinkedIn B2B executive outreach strategy for HR directors',
      'SEO ranking for executive recruitment and specialized talent search terms',
      'Automated candidate job alert email newsletters'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-email-outlook', 'calc-seo-growth', 'calc-social']
  },

  // 38. Real Estate Individual Agents
  {
    id: 'real-estate-agents',
    number: 38,
    name: 'Real Estate Agents & Realtors',
    category: 'professional',
    iconName: 'UserCheck',
    tagline: 'Personal realtor brand site, featured property listings, instant WhatsApp viewing triggers, and buyer lead follow-up CRM.',
    haxorProducts: 'Realtor Brand Web + Property Listings + WhatsApp Funnel',
    basePriceKES: 35000,
    badge: 'Realtor Brand',
    presence: [
      'Sleek personal realtor website establishing authority and trust',
      'Curated portfolio of active houses, apartments and plots for sale/rent',
      'Google Business Profile optimized for real estate agent in the area'
    ],
    sales: [
      'Direct WhatsApp viewing booking button on every property listing',
      'Lead capture form offering property market updates and price drops',
      'Buyer qualification questionnaire'
    ],
    operations: [
      'Mobile CRM logging buyer requirements, budget and viewing feedback',
      'Automated property recommendation alerts to matching clients'
    ],
    growth: [
      'Meta Ads (Facebook & Instagram) hyper-targeted to specific neighborhoods',
      'Short-form property walkthrough video reels',
      'Client closing reviews and testimonial showcase'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-lead-portal', 'calc-gmb-sme', 'calc-meta-basic', 'calc-email-basic']
  },

  // 39. Salons, Spas & Wellness Centres
  {
    id: 'salons-spas-wellness',
    number: 39,
    name: 'Spas & Wellness Centres',
    category: 'lifestyle',
    iconName: 'Sparkles',
    tagline: 'Luxury spa treatment menu, massage booking calendar, membership packages, therapist scheduling, and gift vouchers.',
    haxorProducts: 'Spa Booking Web + Treatment POS + Wellness Membership',
    basePriceKES: 45000,
    badge: 'Luxury Wellness',
    presence: [
      'Serene, luxury wellness website showcasing massage, facial and body treatments',
      'Detailed spa treatment menu with durations, oils, and health benefits',
      'Google Business Profile with 5-star relaxation reviews and photos'
    ],
    sales: [
      'Online appointment scheduling for singles and couples treatments',
      'Digital gift card purchase and instant recipient voucher delivery',
      'Monthly wellness membership and prepaid package checkout'
    ],
    operations: [
      'Therapist room and schedule management preventing overlapping appointments',
      'Essential oils, skincare and spa product retail inventory POS',
      'Client health intake questionnaires and allergy preference records'
    ],
    growth: [
      'Romantic holiday and couples massage promotions on Instagram & Meta',
      'Google Maps 3-Pack rank for top massage, day spa, and sauna nearby',
      'Automated birthday and anniversary special offer SMS messages'
    ],
    recommendedItemIds: ['calc-web-starter', 'calc-booking-engine', 'calc-gmb-ent', 'calc-social', 'calc-email-basic']
  },

  // 40. NGOs / Community Projects / Development Organizations
  {
    id: 'community-development-orgs',
    number: 40,
    name: 'Community & Development Projects',
    category: 'community',
    iconName: 'Users',
    tagline: 'Community beneficiary portal, grant reporting dashboards, field project tracking, donor verification, and volunteer intake.',
    haxorProducts: 'Community Development Web + Beneficiary Portal + Grant Reporting',
    basePriceKES: 55000,
    badge: 'Community Impact',
    presence: [
      'Impact-driven community website detailing active programs, water, health & education projects',
      'Interactive county impact map showing completed community initiatives',
      'Transparent financial allocation and donor audit reports'
    ],
    sales: [
      'International grant donor contribution portal with multi-currency support',
      'Grassroots volunteer and community mobilizer registration',
      'Partner organization collaboration intake forms'
    ],
    operations: [
      'Beneficiary database tracking community members served by program',
      'Field officer project progress reporting with GPS geotagged photo uploads',
      'Grant expenditure budget tracking and donor milestone reports'
    ],
    growth: [
      'Google Ad Grant setup for $10,000/month free search advertising',
      'Documentary video and social media community story distribution',
      'International development sector SEO for donor and foundation discovery'
    ],
    recommendedItemIds: ['calc-web-biz', 'calc-lead-portal', 'calc-email-outlook', 'calc-social', 'calc-seo-growth']
  }
];
