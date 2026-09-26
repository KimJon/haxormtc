import { CONTACT_INFO, createWhatsAppUrl } from './servicesData';

export const LANDING_PAGES = {
  // SERVICES
  'website-development': {
    slug: 'website-development',
    type: 'service',
    title: 'Professional Website Design & Development Packages in Kenya',
    badge: 'Helping Kenyan Businesses Win Clients Online',
    heroHeadline: 'High-Converting, Mobile-Friendly Websites Engineered to Generate More Enquiries & Sales.',
    heroSubheadline: 'Custom, top-notch websites designed specifically for Kenyan businesses, SMEs, and startups. Transparent pricing with free .co.ke domain, fast cloud hosting, business emails, and safe milestone payments.',
    priceDisplay: 'From Ksh. 7,000',
    pricingNote: '30% start → 40% after design → 30% before launch',
    whatsappMessage: 'Hello Haxor MTC, I am interested in your Professional Website Design packages. Please share more details!',
    milestonePayment: '30% start → 40% after design → 30% before launch',
    packages: [
      {
        id: 'single-landing',
        name: 'Single-Page Landing Page',
        price: '7,000',
        priceNote: 'One-Time • All Inclusive',
        bestFor: 'Small businesses & ad campaigns needing a fast, high-converting online sales funnel.',
        badge: 'Fast 48hr Turnaround',
        popular: false,
        features: [
          'Single conversion-focused landing page',
          'Free .com or .co.ke domain & 1 year hosting',
          'Free SSL certificate (HTTPS padlock)',
          'Click-to-WhatsApp order triggers & lead contact form',
          'Mobile-first responsive layout (< 1.5s load)',
          'Google Analytics & Meta Pixel integration',
          '12 months technical support & backup',
        ],
        ctaText: 'Order Landing Page',
        whatsappMessage: 'Hello Haxor MTC, I want to order the Single-Page Landing Page package at Ksh. 7,000 (with Free Domain & Hosting).',
      },
      {
        id: 'starter-website',
        name: 'Starter Website',
        price: '25,000',
        priceNote: '+ VAT',
        bestFor: 'Individuals, personal brands and early-stage startups establishing credibility online.',
        badge: 'Starter Package',
        popular: false,
        features: [
          'Up to 5 pages',
          'Mobile-friendly design',
          '2 business emails',
          'Free .co.ke domain & 5GB hosting for 1 year',
          'SSL & basic SEO',
          '30% start → 40% after design → 30% before launch',
        ],
        ctaText: 'Get Starter Recommendation',
        whatsappMessage: 'Hello Haxor MTC, I am interested in the Starter Website package (Up to 5 pages, KSh 25,000 + VAT). Please guide me on getting started.',
      },
      {
        id: 'business-website',
        name: 'Business Website',
        price: '45,000',
        priceNote: '+ VAT',
        bestFor: 'SMEs and established businesses that want stronger credibility and more enquiries.',
        badge: 'MOST POPULAR',
        popular: true,
        features: [
          'Up to 10 pages',
          '5 business emails',
          'Free domain & 5GB hosting',
          'SSL & Google Analytics',
          'SEO-ready structure',
          'Speed optimization',
          '30% start → 40% after design → 30% before launch',
        ],
        ctaText: 'Choose Business Package',
        whatsappMessage: 'Hello Haxor MTC, I want to choose the Business Website package (Up to 10 pages, KSh 45,000 + VAT). How do we begin?',
      },
      {
        id: 'premium-website',
        name: 'Premium Website',
        price: '85,000',
        priceNote: '+ VAT',
        bestFor: 'Growing businesses needing more pages, advanced SEO, stronger branding and room to scale.',
        badge: 'Premium Scale',
        popular: false,
        features: [
          'Up to 25 pages',
          '10 business emails',
          '10GB hosting + free domain & SSL',
          'SEO & analytics',
          '2 months support',
          'Custom functionality options',
          '30% start → 40% after design → 30% before launch',
        ],
        ctaText: 'Discuss Premium',
        whatsappMessage: 'Hello Haxor MTC, I would like to discuss the Premium Website package (Up to 25 pages, KSh 85,000 + VAT). Let\'s schedule a call.',
      },
    ],
    keyHighlights: [
      { title: 'Free Domain & Cloud Hosting', desc: 'We cover your custom .com or .co.ke domain name and provide fast SSD cloud hosting with 99.9% uptime.' },
      { title: 'Structured Milestone Payments', desc: 'Low-risk payment schedule: 30% to start → 40% after design mockup approval → 30% before final live launch.' },
      { title: 'High-Converting WhatsApp CTAs', desc: 'Mobile-first design with direct WhatsApp triggers that convert online traffic into paying customers.' },
      { title: 'SEO-Ready & Speed Optimized', desc: 'Pre-configured on-page SEO, Google Analytics, and lightning speed loading (< 2s) to rank on Google.' }
    ],
    deliverables: [
      'Custom .com or .co.ke domain registration included for 1 full year',
      'High-speed SSD cloud web hosting included for 1 full year',
      'Free SSL security certificate (green padlock HTTPS)',
      'Mobile-responsive layout optimized for Kenyan smartphone users',
      'Branded business emails (e.g. info@yourdomain.co.ke)',
      'Direct Click-to-WhatsApp order triggers & lead contact forms',
      'Google Maps location embed and business hours display',
      'Meta Pixel and Google Analytics tracking tags installed',
      'Google Search Console indexing and XML sitemap setup',
      'Post-launch support and backup assurance'
    ],
    faqs: [
      { q: 'How does the milestone payment work?', a: 'You pay 30% to commence project research and design, 40% only after reviewing and approving the design mockup, and the final 30% once your website is fully tested and ready to launch.' },
      { q: 'What happens after the first year of domain & hosting?', a: 'After 12 months, standard annual domain renewal and hosting fees apply at normal market rates. There are no hidden fees or locked contracts, and you 100% own your domain and website files.' },
      { q: 'Can I update the website content myself?', a: 'Yes! We build on modern, user-friendly CMS platforms or intuitive admin dashboards, and we provide staff walkthrough training so you can easily update text, photos, and prices.' },
      { q: 'Do you support M-Pesa integration?', a: 'Yes! We integrate M-Pesa Till / Paybill / STK push so customers can make payments directly through your website.' }
    ]
  },

  'social-media': {
    slug: 'social-media',
    type: 'service',
    title: 'Social Media Video Creation & Account Management',
    badge: 'Monthly Growth • Ksh. 4,500/mo',
    heroHeadline: '20 to 30 Short-Form Videos Created & Posted on TikTok, Instagram & Facebook Every Month.',
    heroSubheadline: 'Running a business leaves no time to edit TikToks, find trending sounds, and post consistently every day. We handle script hooks, professional video editing, captions, and publishing so your brand stays in front of buyers.',
    priceDisplay: 'Ksh. 4,500',
    pricingNote: 'Per Month • 20 to 30 Finished Videos • 3 Major Platforms',
    whatsappMessage: 'Hello Haxor MTC, I want to enroll my business for the Social Media Video Management package (20-30 videos/mo for Ksh. 4,500).',
    keyHighlights: [
      { title: 'Consistent Video Volume', desc: '20 to 30 edited Reels, TikToks, and Shorts posted across Facebook, Instagram, and TikTok every month.' },
      { title: 'Viral Hooks & Kinetic Captions', desc: 'Engaging text animations, trending audio curation, and clear call-to-actions that drive viewer inquiries.' },
      { title: 'Kenyan Peak-Hour Scheduling', desc: 'Videos are published during lunch breaks and evening hours when local audiences are most active.' },
      { title: 'Bio & WhatsApp Lead Routing', desc: 'We optimize your profile bios so interested viewers land directly in your WhatsApp chat.' }
    ],
    deliverables: [
      '20 to 30 edited vertical short-form videos per month (9:16 format)',
      'Synchronized posting on TikTok, Instagram Reels, and Facebook Reels',
      'Content ideation, scripting hooks, and niche trend adaptation',
      'Professional captions, subtitles, and branded color grading',
      'Local hashtag strategy targeting Kenyan buyers in your niche',
      'Profile bio overhaul with direct click-to-WhatsApp link',
      'Monthly engagement summary report'
    ],
    faqs: [
      { q: 'How do you get footage of my products or services?', a: 'You can send us quick smartphone clips or photos of your items, workplace, or customer results via Google Drive or WhatsApp, and our editing team transforms them into high-energy marketing videos.' },
      { q: 'Do you manage messages in the inbox?', a: 'We optimize every video with a clear call-to-action directing clients to your WhatsApp or phone line, so you receive and close warm leads directly.' }
    ]
  },

  'meta-ads': {
    slug: 'meta-ads',
    type: 'service',
    title: 'Meta Ads Placement (Facebook & Instagram)',
    badge: 'Paid Acquisition • From Ksh. 4,200/mo',
    heroHeadline: 'Targeted Facebook & Instagram Ads That Send Paying Customers Directly to Your WhatsApp.',
    heroSubheadline: 'Stop wasting money clicking "Boost Post" with zero sales to show for it. We build structured Meta Ad campaigns targeting exact locations, ages, and buyer interests with direct Click-to-WhatsApp funnels.',
    priceDisplay: 'Ksh. 4,200',
    pricingNote: 'Basic: Ksh. 4,200/mo • Growth: Ksh. 7,500/mo (Excludes ad spend paid to Meta)',
    whatsappMessage: 'Hello Haxor MTC, I need help running profitable Facebook & Instagram Ads for my business.',
    keyHighlights: [
      { title: 'Click-to-WhatsApp Conversion', desc: 'Shoppers click your ad and instantly open a WhatsApp chat with you with a pre-filled product inquiry.' },
      { title: 'Laser Kenyan Targeting', desc: 'Target by specific town, estate radius, gender, age, and verified purchasing interests in Kenya.' },
      { title: 'Compelling Ad Creatives', desc: 'Eye-catching graphic images and video reels designed to stop the scroll and trigger quick action.' },
      { title: 'Weekly Budget Optimization', desc: 'We monitor cost-per-message continuously, turning off non-performing ads and scaling winners.' }
    ],
    deliverables: [
      'Meta Business Suite & Ads Manager setup and verification',
      'Audience research (demographics, geographical radius, interests in Kenya)',
      'Click-to-WhatsApp conversation ad campaign architecture',
      'Compelling ad copywriting and visual banner/video creation',
      'Meta Pixel integration on your website for retargeting',
      'Weekly optimization to lower cost per lead/chat',
      'Clear bi-weekly ROI and lead generation reports'
    ],
    faqs: [
      { q: 'How much should I spend on ads with Meta?', a: 'You can start with as little as Ksh 500 to Ksh 1,000 per day in ad budget paid directly to Facebook via your debit card or M-Pesa virtual card. We manage and optimize the campaign.' },
      { q: 'What is the difference between Basic and Growth?', a: 'Basic (Ksh 4,200/mo) focuses on 1 primary objective and 2 ad variants. Growth (Ksh 7,500/mo) includes multi-ad creative testing, video ads, custom lookalike audiences, and website retargeting.' }
    ]
  },

  'google-ads': {
    slug: 'google-ads',
    type: 'service',
    title: 'Google Ads High-Intent Search Management',
    badge: 'Google Search • From Ksh. 2,500/mo',
    heroHeadline: 'Get Found at the Exact Second Customers Search for Your Services on Google.',
    heroSubheadline: 'When people need a product or emergency service, they search Google. We position your business at the very top of Google Search results with direct phone call and WhatsApp extensions.',
    priceDisplay: 'Ksh. 2,500',
    pricingNote: 'Basic: Ksh. 2,500/mo • Enterprise: Ksh. 30,000/mo',
    whatsappMessage: 'Hello Haxor MTC, I want to set up Google Search Ads to capture high-intent customer leads.',
    keyHighlights: [
      { title: 'High-Intent Searchers', desc: 'Capture people actively typing "buy salon equipment" or "hardware supplier near me".' },
      { title: 'Negative Keyword Filtering', desc: 'We block irrelevant searches so you never spend money on useless clicks.' },
      { title: 'Click-to-Call Extensions', desc: 'Mobile users can call your office phone number directly from Google results with one tap.' },
      { title: 'Measurable ROI', desc: 'Track exactly how many calls, form submissions, and inquiries each keyword produces.' }
    ],
    deliverables: [
      'Comprehensive keyword research for high-intent Kenyan search volume',
      'Negative keyword list creation to eliminate wasted ad budget',
      'Compelling text ad headlines and persuasive descriptions',
      'Call extensions, sitelink extensions, and location extensions',
      'Conversion tracking setup (phone calls, WhatsApp clicks, quote forms)',
      'Target CPA bidding adjustments for maximum qualified leads',
      'Transparent weekly performance reporting'
    ],
    faqs: [
      { q: 'How quickly do Google Ads start delivering leads?', a: 'Search campaigns typically start generating clicks and phone inquiries within 24 hours of going live.' }
    ]
  },

  'google-my-business': {
    slug: 'google-my-business',
    type: 'service',
    title: 'Google My Business & Map Rank Optimization',
    badge: 'Local SEO • From Ksh. 300',
    heroHeadline: 'Put Your Shop or Office on Google Maps & Get Local Customers Calling You.',
    heroSubheadline: 'When customers nearby search on Google or open Google Maps, does your business show up? We claim, verify, and fully optimize your Google Business Profile so you rank in the coveted Local 3-Pack.',
    priceDisplay: 'Ksh. 300',
    pricingNote: 'Basic: Ksh. 300 • SME: Ksh. 500 • Enterprise Rank Booster: Ksh. 3,000',
    whatsappMessage: 'Hello Haxor MTC, I want to set up and optimize my Google My Business profile.',
    keyHighlights: [
      { title: 'Google Maps Pin Verification', desc: 'Accurate GPS location so customers get driving and walking directions straight to your door.' },
      { title: 'Direct Call & WhatsApp Buttons', desc: 'Customers on mobile can call your phone or message your WhatsApp directly from Google.' },
      { title: 'Catalog & Photo Showcase', desc: 'Upload high-resolution photos of your shop, products, pricing, and operating hours.' },
      { title: '5-Star Review Funnel', desc: 'We provide you with a direct review link to gather 5-star customer feedback that ranks you higher.' }
    ],
    deliverables: [
      'Google Business Profile registration, claim, or pin recovery',
      'Precise GPS location pin verification on Google Maps',
      'Keyword-optimized business name, category, and bio',
      'Product and service menu integration with pricing',
      'Direct click-to-call and WhatsApp button configuration',
      'Operating hours, public holidays, and contact info setup',
      '5-Star review link generation for easy WhatsApp sharing'
    ],
    faqs: [
      { q: 'Which tier should I choose?', a: 'Basic (Ksh 300) is simple profile setup. SME (Ksh 500) adds full catalog, operating hours, and photo uploads. Enterprise (Ksh 3,000) includes local citation work, review booster, and Google Map 3-Pack rank optimization.' }
    ]
  },

  'email-management': {
    slug: 'email-management',
    type: 'service',
    title: 'Custom Domain Business Email Setup & Security',
    badge: 'Business Identity • From Ksh. 700',
    heroHeadline: 'Stop Using Free Gmail for Business. Establish Instant Credibility with name@yourcompany.com.',
    heroSubheadline: 'Sending quotations and tenders from free gmail.com addresses hurts trust. We configure professional branded mailboxes on Microsoft Outlook, webmail, or Google Workspace with full anti-spam protection.',
    priceDisplay: 'Ksh. 700',
    pricingNote: 'Webmail: Ksh. 700 • Outlook Pro: Ksh. 1,500 • Google Workspace: Custom',
    whatsappMessage: 'Hello Haxor MTC, I need professional business email setup for my company.',
    keyHighlights: [
      { title: 'Branded Company Email', desc: 'Create info@yourbusiness.com, sales@yourbusiness.com, and personal staff emails.' },
      { title: 'Sync on Mobile & PC', desc: 'Check and send email seamlessly on your iPhone, Android, Outlook desktop, or web browser.' },
      { title: 'Anti-Spam & DNS Security', desc: 'SPF, DKIM, and DMARC DNS authentication configured so your emails never land in client spam folders.' },
      { title: 'HTML Branded Signature', desc: 'Professional email signature with your logo, phone number, and WhatsApp link on every outgoing email.' }
    ],
    deliverables: [
      'Custom domain email account creation and password setup',
      'Mobile app configuration (Outlook app, Apple Mail, Gmail app)',
      'Desktop Outlook integration and calendar synchronization',
      'SPF, DKIM, and DMARC DNS security records configuration',
      'Anti-spam and incoming virus filtering rules',
      'Custom HTML branded email signature template'
    ],
    faqs: [
      { q: 'Can I keep my existing domain name?', a: 'Yes! We configure your email on your existing domain name with zero downtime to your website.' }
    ]
  },

  'seo': {
    slug: 'seo',
    type: 'service',
    title: 'Search Engine Optimization & Google Ranking',
    badge: 'Organic Traffic • From Ksh. 3,000',
    heroHeadline: 'Rank on Page 1 of Google and Get Free, Qualified Inbound Leads Every Month.',
    heroSubheadline: 'Paid ads stop delivering the moment you stop paying. SEO builds a permanent pipeline of organic Google searchers who find your website, trust your authority, and contact you directly.',
    priceDisplay: 'Ksh. 3,000',
    pricingNote: 'Basic: Ksh. 3,000 • Growth: Ksh. 5,000',
    whatsappMessage: 'Hello Haxor MTC, I want to improve my website Google rankings with SEO.',
    keyHighlights: [
      { title: 'Page 1 Keyword Strategy', desc: 'Target high-volume search phrases that Kenyan buyers use when looking for your services.' },
      { title: 'Core Web Vitals & Speed', desc: 'Speed up your website loading times so Google rewards you with higher rankings.' },
      { title: 'Local Citation Building', desc: 'Ensure your business name, address, and phone number match across all online directories.' },
      { title: 'Monthly Progress Tracking', desc: 'Transparent reports showing exactly which keywords are moving up the Google ranks.' }
    ],
    deliverables: [
      'Full technical SEO crawl & broken link audit',
      'Keyword research focused on Kenyan buyer intent',
      'Title tags, meta descriptions, and header structure optimization',
      'Google Search Console indexing and XML sitemap submission',
      'Mobile speed optimization and image compression',
      'Local directory citation creation',
      'Monthly keyword rank movement report'
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Local search improvements typically begin showing within 3 to 6 weeks, with compound organic traffic growth over 3 to 6 months.' }
    ]
  },

  'ict-consulting': {
    slug: 'ict-consulting',
    type: 'service',
    title: 'ICT Strategic Consulting & Systems Audit',
    badge: 'Expert Advisory • Ksh. 3,000/session',
    heroHeadline: 'Fix Slow Tech, Secure Your Business Data & Eliminate Wasted IT Subscriptions.',
    heroSubheadline: 'Technology should speed up your business, not frustrate your team. Book a 1-on-1 strategic IT audit to evaluate your network, hardware, software stack, and security protocols with clear, actionable recommendations.',
    priceDisplay: 'Ksh. 3,000',
    pricingNote: 'Per 1-on-1 Consulting Session • Written Technology Roadmap Included',
    whatsappMessage: 'Hello Haxor MTC, I would like to book an ICT Consulting session for our business.',
    keyHighlights: [
      { title: 'Office Infrastructure Review', desc: 'Audit of office Wi-Fi, routers, computers, printers, and network cabling.' },
      { title: 'Software Cost Reduction', desc: 'Identify duplicate software subscriptions and recommend affordable or free alternatives.' },
      { title: 'Data Backup & Security', desc: 'Prevent catastrophic data loss with automated cloud backup solutions and ransomware defense.' },
      { title: 'Hardware Procurement Advice', desc: 'Independent advice on what hardware to buy so you never overpay vendors.' }
    ],
    deliverables: [
      'Comprehensive audit of current business IT infrastructure',
      'Network stability, Wi-Fi coverage, and internet speed check',
      'Cybersecurity and data backup vulnerability assessment',
      'Software stack and subscription cost evaluation',
      'Actionable written IT roadmap with cost estimates',
      'Vendor procurement guidance and specifications'
    ],
    faqs: [
      { q: 'Is the session conducted online or on-site?', a: 'We offer both virtual sessions via Google Meet and on-site visits for businesses across key regional hubs.' }
    ]
  },

  'digital-literacy': {
    slug: 'digital-literacy',
    type: 'service',
    title: 'Professional & Executive Digital Literacy Training',
    badge: '10 Structured Sessions • Ksh. 7,500',
    heroHeadline: 'Train Your Team on Modern Cloud Tools, M-Pesa Systems & AI Productivity.',
    heroSubheadline: 'Boost office productivity and eliminate basic digital mistakes. Our structured 10-session curriculum teaches your staff how to use Google Workspace, Office 365, M-Pesa business reconciliations, and modern AI tools.',
    priceDisplay: 'Ksh. 750',
    pricingNote: 'Per Session • Minimum 10 Sessions (Total Ksh. 7,500) • Certificate Included',
    whatsappMessage: 'Hello Haxor MTC, I want to enroll for the Digital Literacy Training course.',
    keyHighlights: [
      { title: '10 Hands-On Sessions', desc: 'Practical, step-by-step learning focused on daily office tasks rather than boring theory.' },
      { title: 'Cloud & Office Tools', desc: 'Master Google Docs, Sheets, Drive, Microsoft Word, Excel, and Outlook email.' },
      { title: 'Digital Finance & M-Pesa', desc: 'Learn how to manage business tills, download statements, and reconcile payments.' },
      { title: 'Modern AI for Business', desc: 'Use ChatGPT and AI tools to draft emails, write reports, and summarize documents fast.' }
    ],
    deliverables: [
      '10 structured practical learning sessions',
      'Cloud productivity (Google Docs, Sheets, Drive, MS Office)',
      'Digital payment handling and M-Pesa business till reconciliation',
      'Essential cybersecurity hygiene (avoiding phishing, password security)',
      'AI productivity tools (ChatGPT for office writing & research)',
      'One-on-one question time and practical assignments',
      'Certificate of Completion issued upon conclusion'
    ],
    faqs: [
      { q: 'Who is this training suitable for?', a: 'Ideal for office administrators, retail attendants, business owners, and staff who need confidence using modern computers and internet tools.' }
    ]
  },

  // SOFTWARE SYSTEMS
  'haxpos': {
    slug: 'haxpos',
    type: 'software',
    title: 'HaxPos Universal Point of Sale',
    badge: 'Universal POS • M-Pesa Native',
    heroHeadline: 'The Fast, Reliable Point of Sale with M-Pesa STK Push Built for Kenyan Retail & Hospitality.',
    heroSubheadline: 'Stop losing stock and manual cash reconciliation headaches. HaxPos handles instant barcode checkout, direct M-Pesa prompt to customer phones, low-stock alerts, and daily cash drawer auditing for multi-branch businesses.',
    priceDisplay: 'Free Demo',
    pricingNote: 'Demo on Demand • Flexible Licensing • Hardware Packages Available',
    whatsappMessage: 'Hello Haxor MTC, I want to schedule a live demo of the HaxPos POS system for my business.',
    targetIndustries: [
      'Cafes, Coffee Shops & Bakeries',
      'Restaurants, Bars & Lounges',
      'Liquor & Spirit Stores',
      'General Retail & Supermarkets',
      'Hardware & Building Materials',
      'Beauty Shops, Salons & Barbershops',
      'Boutiques & Apparel Stores',
      'Pharmacies & Chemists'
    ],
    keyHighlights: [
      { title: 'Integrated M-Pesa STK Push', desc: 'Cashier taps M-Pesa, customer gets instant PIN prompt on their phone, receipt prints automatically upon payment.' },
      { title: 'Real-Time Inventory Alerts', desc: 'Track every single unit sold. Get automated warnings before you run out of fast-selling stock.' },
      { title: 'Cash Drawer & Shift Auditing', desc: 'Prevent cashier discrepancies with shift opening/closing counts and blind reconciliation.' },
      { title: 'KRA eTIMS Integration Ready', desc: 'Compliant invoice output and integration ready for Kenyan tax authorities.' }
    ],
    features: [
      'Lightning-fast barcode scanning and thermal receipt printing',
      'Integrated M-Pesa STK push with automated payment confirmation',
      'Real-time inventory deduction and supplier purchase order management',
      'Cashier shift management and daily cash drawer reconciliation',
      'Multi-branch stock transfer and centralized cloud sales dashboard',
      'Table management and Kitchen Order Tickets (KOT) for hospitality',
      'Works seamlessly on touchscreen POS terminals, laptops, and tablets',
      'Offline mode keeps billing even when internet is temporarily down'
    ],
    faqs: [
      { q: 'Does HaxPos work with my existing hardware?', a: 'Yes! HaxPos is compatible with standard USB/Bluetooth thermal receipt printers, barcode scanners, cash drawers, and Windows/Android devices.' },
      { q: 'What happens if my internet goes down?', a: 'HaxPos continues to ring up sales in offline mode. Once your connection restores, it automatically synchronizes with your cloud dashboard.' },
      { q: 'How do I see a live demo?', a: 'Click the Request Demo button or message us on WhatsApp. We can demonstrate the system live in your shop or online via screen share.' }
    ]
  },

  'elittego': {
    slug: 'elittego',
    type: 'software',
    title: 'ElitteGo On-Demand Delivery Platform (Localized Regional Service)',
    badge: 'Localized Regional Logistics • Kenya & East Africa',
    heroHeadline: 'Turnkey On-Demand Multi-Vendor Delivery Ecosystem for Regional Logistics.',
    heroSubheadline: 'A specialized, localized software ecosystem engineered specifically for regional restaurant, grocery, liquor, and pharmacy delivery fleets across Kenya and East Africa. Features integrated M-Pesa STK push, driver GPS navigation, and merchant vendor management.',
    priceDisplay: 'Turnkey Solution',
    pricingNote: 'Localized Regional Deployment • White-Label Ready • Full Platform Ownership',
    whatsappMessage: 'Hello Haxor MTC, I am interested in deploying the ElitteGo delivery software platform for our regional fleet.',
    qrCodeImage: '/elittego-qr.png',
    qrCodeTitle: 'Scan QR Code to Test Live App Demo',
    qrCodeDesc: 'Open your phone camera and scan the QR code to test the live ElitteGo customer and rider experience directly on your smartphone.',
    targetIndustries: [
      'Restaurant Food & Drinks Delivery',
      'Liquor & Beverage Express',
      'Medicine & Pharmacy Supplies',
      'Fresh Groceries & Supermarkets',
      'Local Courier & Errand Services'
    ],
    keyHighlights: [
      { title: 'Customer Ordering Web & App', desc: 'Sleek ordering experience with category menus, add-on options, and live GPS order tracking.' },
      { title: 'Merchant & Vendor Portal', desc: 'Shop owners manage their own catalog, pricing, stock availability, and incoming orders.' },
      { title: 'Driver App with Live GPS', desc: 'Riders receive orders, accept deliveries, get turn-by-turn Google Maps navigation, and view daily earnings.' },
      { title: 'Automated Dispatch Panel', desc: 'Admin panel automatically matches and assigns orders to the closest available rider.' }
    ],
    features: [
      'Customer web ordering and mobile progressive app with real-time tracking',
      'Vendor management dashboard for restaurants and retail stores',
      'Driver mobile app with automated order dispatch and GPS routing',
      'Dynamic delivery fee engine based on distance and delivery zones',
      'M-Pesa STK push and debit card gateway pre-integrated',
      'Admin financial reporting with automated commission split calculation',
      'Automated SMS and WhatsApp order status updates to customers',
      'Instant smartphone demo via live QR Code scanning'
    ],
    faqs: [
      { q: 'How do I test the app using the QR Code?', a: 'Simply point your smartphone camera at the ElitteGo QR code displayed on this page. Your phone will instantly prompt you to open the live interactive demo app.' },
      { q: 'Can we rebrand the platform under our own business name?', a: 'Yes! ElitteGo is 100% white-labeled with your business logo, brand colors, and custom domain.' },
      { q: 'Is M-Pesa already integrated for customer checkout?', a: 'Yes, both M-Pesa STK Push (where customer enters their PIN on phone prompt) and Paybill/Till integration are built-in.' }
    ]
  },

  'haxone': {
    slug: 'haxone',
    type: 'software',
    title: 'HaxOne Hospitality Suite',
    badge: 'Hotel & Resort PMS • All-in-One',
    heroHeadline: 'Complete Property Management, Direct Room Booking & Restaurant POS for Hotels & Resorts.',
    heroSubheadline: 'Eliminate double bookings, organize housekeeping, and capture zero-commission bookings. HaxOne connects your front desk, room reservations, restaurant billing, and channel managers into one seamless ecosystem.',
    priceDisplay: 'Custom Deployment',
    pricingNote: 'Implementation & Training Included • Modular Setup',
    whatsappMessage: 'Hello Haxor MTC, I would like to explore HaxOne Hospitality Suite for our hotel/resort.',
    targetIndustries: [
      'Hotels & Boutique Resorts',
      'Safari Lodges & Tented Camps',
      'Serviced Apartments & Airbnbs',
      'Fine Dining & Country Clubs'
    ],
    keyHighlights: [
      { title: 'Visual Room Booking Grid', desc: 'Color-coded reservation calendar showing occupied, reserved, and dirty rooms in real time.' },
      { title: 'Direct Commission-Free Bookings', desc: 'Embed a direct booking engine on your website so guests book without paying 15-20% OTA fees.' },
      { title: 'Restaurant POS & Kitchen Tickets', desc: 'Waiters send orders straight to the kitchen (KOT) and charge bills directly to the guest room folio.' },
      { title: 'Channel Manager Sync', desc: 'Automatically synchronize room availability with Booking.com, Airbnb, and Expedia.' }
    ],
    features: [
      'Complete Property Management System (PMS) with visual room calendar',
      'Guest check-in, check-out, identity scanning, and folio billing',
      'Housekeeping room status updates and maintenance logs',
      'Integrated restaurant POS with table layouts and Kitchen Order Tickets (KOT)',
      'Channel manager integration with Booking.com, Airbnb, and Expedia',
      'Guest history database and automated SMS/email booking confirmations',
      'Night audit reporting, daily revenue summaries, and tax compliance'
    ],
    faqs: [
      { q: 'Can waiters take orders on tablets?', a: 'Yes! Waiters can take orders at tables using any tablet or smartphone, and orders print instantly in the kitchen and bar.' }
    ]
  },

  'hospital-system': {
    slug: 'hospital-system',
    type: 'software',
    title: 'Hospital & Clinic Management System (HMS)',
    badge: 'Healthcare ERP • OPD & IPD',
    heroHeadline: 'Digital Health Infrastructure Streamlining Patient Records, Pharmacy, Lab & Billing.',
    heroSubheadline: 'Say goodbye to lost paper files and billing leakage. Our Hospital Management System gives Kenyan healthcare facilities secure Electronic Health Records (EHR), pharmacy stock control, and automated insurance claims.',
    priceDisplay: 'Enterprise Solution',
    pricingNote: 'Custom Clinic / Hospital Deployment • Role-Based Security',
    whatsappMessage: 'Hello Haxor MTC, We need a demonstration of your Hospital Management System for our clinic/hospital facility.',
    targetIndustries: [
      'Medical Clinics & Polyclinics',
      'Specialist Diagnostic & Imaging Centers',
      'Hospitals & Nursing Homes',
      'Hospital & Retail Pharmacies'
    ],
    keyHighlights: [
      { title: 'Paperless Patient Records (EHR)', desc: 'Instant access to doctor notes, clinical diagnosis, vitals, allergy alerts, and prescription history.' },
      { title: 'Pharmacy Inventory & Batch Control', desc: 'Dispense medications, monitor expiry dates, and prevent medicine shrinkage with audit logs.' },
      { title: 'Laboratory Workflows', desc: 'Doctors request lab tests digitally; lab technicians record results that update the patient file automatically.' },
      { title: 'Insurance & Cashier Billing', desc: 'Manage private insurance, NHIF/SHIF billing, cash, and M-Pesa payments with itemized invoices.' }
    ],
    features: [
      'Electronic Health Records (EHR) with secure doctor consultations',
      'Outpatient (OPD) triage queueing and Inpatient (IPD) ward bed tracking',
      'Pharmacy dispensary inventory, expiry alerts, and batch tracking',
      'Laboratory investigation orders, sample tracking, and digital result reports',
      'Insurance claims processing, co-pays, and private billing',
      'Doctor appointment scheduling with automated SMS patient reminders',
      'Role-based access permissions ensuring strict patient data privacy'
    ],
    faqs: [
      { q: 'Is the system compliant with medical data regulations?', a: 'Yes, role-based access control ensures doctors, nurses, lab technicians, and cashiers only view information necessary for their roles.' }
    ]
  },

  'odoo': {
    slug: 'odoo',
    type: 'software',
    title: 'Odoo ERP Implementation & Customization',
    badge: 'Certified Odoo Expertise',
    heroHeadline: 'Streamline Your Business Operations with Custom Odoo ERP Workflows in Kenya.',
    heroSubheadline: 'Eliminate chaotic spreadsheets and disconnected software. We implement, customize, and support Odoo Community and Enterprise ERP for manufacturing, distribution, retail, and service businesses.',
    priceDisplay: 'Custom Scope',
    pricingNote: 'Scope-Based Implementation • Data Migration • Staff Training Included',
    whatsappMessage: 'Hello Haxor MTC, I am looking for Odoo ERP experts for implementation and customization.',
    targetIndustries: [
      'Manufacturing & Production Plants',
      'Wholesale Distribution & FMCG',
      'Retail Chains & Multi-Store Supermarkets',
      'Construction & Engineering Firms',
      'Professional Service Agencies'
    ],
    keyHighlights: [
      { title: 'All-in-One Operations', desc: 'Unify sales, purchasing, inventory, manufacturing, accounting, and HR in a single dashboard.' },
      { title: 'KRA eTIMS & Local Tax Setup', desc: 'Generate eTIMS-compliant invoices with automated tax calculations and ledger sync.' },
      { title: 'Legacy Data Migration', desc: 'Seamlessly migrate your customer lists, vendor history, and inventory from QuickBooks, Excel, or Sage.' },
      { title: 'Local Training & SLA Support', desc: 'We train your accounting and operations teams in person and provide dependable technical support.' }
    ],
    features: [
      'Odoo Community and Enterprise version deployment on secure cloud servers',
      'Custom module programming and third-party API integration',
      'Full accounting, chart of accounts, and KRA eTIMS synchronization',
      'Multi-warehouse inventory tracking with automated reordering points',
      'CRM and sales pipeline management with automated quote-to-invoice flows',
      'Historical data migration from legacy accounting systems',
      'Staff onboarding, user manuals, and dedicated SLA maintenance contracts'
    ],
    faqs: [
      { q: 'Can Odoo integrate with our local bank and M-Pesa?', a: 'Yes! We configure M-Pesa statement reconciliation and bank feeds so your accounting books reconcile automatically.' }
    ]
  },

  'zoho': {
    slug: 'zoho',
    type: 'software',
    title: 'Certified Zoho Consulting Services & Implementation Partner',
    badge: 'Certified Zoho Partner • CRM & ERP Architecture',
    heroHeadline: 'Customized Zoho CRM, Zoho One & Books Implementation for Growing Businesses.',
    heroSubheadline: 'Certified Zoho implementation consultants. We architect and automate Zoho One, Zoho CRM sales pipelines, Zoho Books localized accounting, and Zoho Desk support to eliminate manual overhead and scale revenue.',
    priceDisplay: 'Custom Scope',
    pricingNote: 'Workflow Architecture • Deluge Custom Scripts • Admin Training',
    whatsappMessage: 'Hello Haxor MTC, I want to consult with your Zoho Experts to optimize our CRM and business workflows.',
    targetIndustries: [
      'SMEs & High-Growth Startups',
      'Professional Services & Legal Firms',
      'Real Estate & Property Agencies',
      'E-Commerce & Digital Businesses',
      'Consultancies & Marketing Agencies'
    ],
    keyHighlights: [
      { title: 'Zoho CRM Sales Pipelines', desc: 'Automate lead assignment, follow-up reminders, email templates, and deal stages.' },
      { title: 'Zoho Books Kenyan Accounting', desc: 'Manage localized VAT invoicing, expense tracking, and financial statements with ease.' },
      { title: 'Omnichannel Customer Desk', desc: 'Centralize support emails, WhatsApp inquiries, and tickets in Zoho Desk.' },
      { title: 'Custom Deluge Automation', desc: 'Custom code workflows, webhook triggers, and third-party API connections.' }
    ],
    features: [
      'Zoho One comprehensive setup and licensing advisory',
      'Zoho CRM blueprint configuration, lead scoring, and pipeline automation',
      'Zoho Books tax configuration, payment reconciliation, and automated invoicing',
      'Zoho Desk customer support ticketing system setup',
      'Custom Deluge script development for advanced business logic',
      'Interactive executive dashboards in Zoho Analytics',
      'Administrator training and ongoing monthly maintenance'
    ],
    faqs: [
      { q: 'How does Zoho compare to Odoo?', a: 'Zoho is exceptionally strong for sales, marketing, and CRM-driven service businesses, whereas Odoo excels in inventory-heavy, retail, and manufacturing setups. We help you choose the best fit.' }
    ]
  },

  'technology-consulting': {
    slug: 'technology-consulting',
    type: 'service',
    title: 'Technology Consulting Company & Digital Transformation Services',
    badge: 'Global IT Advisory & Digital Strategy',
    heroHeadline: 'Strategic Technology Consulting & Digital Transformation Services for Scaling Enterprises.',
    heroSubheadline: 'We guide modern enterprises and fast-growing businesses through complex digital transformation, cloud architecture migration, enterprise system integration, and IT cost optimization. Work with seasoned technology consultants delivering measurable operational ROI worldwide.',
    priceDisplay: 'Custom Advisory Scope',
    pricingNote: 'Strategic Discovery • System Architecture Blueprint • Remote & On-Site Global Delivery',
    whatsappMessage: 'Hello Haxor MTC, I would like to schedule a technology consulting & digital transformation advisory session for our organization.',
    keyHighlights: [
      { title: 'Digital Transformation Strategy', desc: 'End-to-end technology roadmaps that eliminate operational bottlenecks, modernize legacy systems, and accelerate market velocity.' },
      { title: 'Enterprise Cloud & IT Architecture', desc: 'Secure cloud infrastructure design (AWS, Google Cloud, Azure), Microsoft 365, and Google Workspace migrations.' },
      { title: 'Systems Integration & Automation', desc: 'Connect ERPs, CRMs, accounting, and bespoke tools through robust APIs and event-driven data pipelines.' },
      { title: 'Cybersecurity & Governance', desc: 'Comprehensive data security audits, role-based access management, and business continuity protocols.' }
    ],
    deliverables: [
      'Comprehensive enterprise technology infrastructure & software stack audit',
      'Actionable digital transformation roadmap with phased milestones and ROI targets',
      'Cloud architecture migration strategy and cost optimization blueprint',
      'Legacy software retirement and modern ERP/CRM migration planning',
      'API, middleware, and business systems integration framework',
      'Information security, data privacy, and disaster recovery assessment',
      'Vendor procurement analysis and technology stack evaluation',
      'Ongoing executive CIO/CTO advisory and managed IT strategy'
    ],
    faqs: [
      { q: 'Do you deliver technology consulting services globally?', a: 'Yes! Our technology consultants deliver remote consulting and digital strategy sessions to clients across North America, Europe, the Middle East, Africa, and Australia via Google Meet, Microsoft Teams, and dedicated collaboration channels.' },
      { q: 'What size companies do you work with?', a: 'We work with mid-market enterprises, growing SMEs, funded startups, and regional corporations looking to modernize their legacy operations and scale securely.' },
      { q: 'How is the engagement structured?', a: 'Engagements typically begin with a 2-4 week strategic IT audit and blueprint, followed by implementation oversight, system integration, or ongoing monthly advisory retainers.' }
    ]
  },

  'digital-transformation': {
    slug: 'digital-transformation',
    type: 'service',
    title: 'Digital Transformation Consulting & Enterprise Modernization',
    badge: 'Enterprise Modernization • Global Consulting',
    heroHeadline: 'Modernize Legacy Operations with Proven Digital Transformation Services.',
    heroSubheadline: 'Bridge the gap between business vision and technical execution. We restructure manual workflows, implement cloud ERP/CRM platforms, and deploy AI-driven automation that cuts costs and drives revenue.',
    priceDisplay: 'Strategic Retainer',
    pricingNote: 'End-to-End Enterprise Advisory • Agile Milestone Execution',
    whatsappMessage: 'Hello Haxor MTC, I want to discuss a Digital Transformation Consulting project for our business.',
    keyHighlights: [
      { title: 'Process Optimization', desc: 'Map and streamline complex cross-departmental operations to eliminate friction and redundancy.' },
      { title: 'Modern Tool Integration', desc: 'Replace disconnected spreadsheets with unified cloud platforms and automated sync.' },
      { title: 'Change Management & Training', desc: 'Structured staff onboarding to ensure high user adoption and zero operational downtime.' },
      { title: 'Global Delivery Standards', desc: 'Enterprise-grade architecture built to scale internationally.' }
    ],
    deliverables: [
      'Operational workflow mapping and friction analysis',
      'Digital maturity benchmarking and technology roadmap',
      'Cloud platform migration and modern ERP/CRM deployment',
      'Automated reporting dashboards for executive oversight',
      'Employee change management and interactive software training',
      'Dedicated digital transformation advisory support'
    ],
    faqs: [
      { q: 'How long does a digital transformation project take?', a: 'Core initial modernizations typically launch within 6 to 12 weeks through milestone iterations, preventing operational disruption.' }
    ]
  },

  'ai-automation': {
    slug: 'ai-automation',
    type: 'service',
    title: 'AI Automation Company & AI Business Solutions Agency',
    badge: 'AI Workflows • Intelligent Agents • Custom Chatbots',
    heroHeadline: 'Automate Repetitive Business Workflows with Custom AI Solutions & Intelligent Chatbots.',
    heroSubheadline: 'Empower your enterprise with autonomous AI agents, automated customer support chatbots, smart document parsing, and automated sales outreach. We engineer bespoke AI business automation that cuts operational expenses by up to 70%.',
    priceDisplay: 'Custom AI Solution',
    pricingNote: 'Tailored LLM Integration • Autonomous Workflows • Global Cloud Deployment',
    whatsappMessage: 'Hello Haxor MTC, I am interested in building AI automation and custom AI agents for our business.',
    keyHighlights: [
      { title: 'Autonomous Workflow Automation', desc: 'AI agents that read emails, extract invoice data, update CRMs, and trigger complex multi-step actions without manual human intervention.' },
      { title: 'Custom AI Chatbots & Customer Support', desc: 'Train LLMs on your exact product catalogs, knowledge bases, and FAQs to handle 80%+ of customer inquiries 24/7 in natural language.' },
      { title: 'Smart Document Processing', desc: 'Instantly parse PDFs, contracts, tender documents, receipts, and clinical records into structured database records.' },
      { title: 'Seamless Enterprise Integration', desc: 'Deploy AI agents integrated with Slack, WhatsApp, email, Zoho, Odoo, Salesforce, and custom REST APIs.' }
    ],
    deliverables: [
      'AI readiness assessment and high-ROI workflow identification',
      'Custom Retrieval-Augmented Generation (RAG) knowledge base development',
      'Intelligent AI chatbot deployment across Web, WhatsApp, Slack, and Zendesk',
      'Automated email response drafting and lead qualification workflows',
      'Document parsing and invoice data extraction pipelines',
      'Custom fine-tuned LLM model or OpenAI / Claude / Gemini API integration',
      'Strict data privacy guardrails ensuring your proprietary company data stays confidential',
      'Continuous monitoring, prompt engineering optimization, and monthly SLA support'
    ],
    faqs: [
      { q: 'Is our company data secure and confidential?', a: 'Yes! We implement strict enterprise security. Your proprietary data is never used to train public models, and all integrations run in secure private cloud environments with encryption in transit and at rest.' },
      { q: 'What AI models do you work with?', a: 'We work with industry-leading foundation models including OpenAI (GPT-4o), Anthropic (Claude 3.5), Google (Gemini 1.5), and open-source models (Llama 3, Mistral) hosted on private cloud VPCs.' },
      { q: 'Can the AI chatbot connect to our existing software?', a: 'Yes. We connect AI chatbots and agents directly to your CRM (Zoho, HubSpot, Salesforce), ERP (Odoo), calendar booking systems, and internal SQL databases.' }
    ]
  },

  'custom-software-development': {
    slug: 'custom-software-development',
    type: 'software',
    title: 'Custom Software Development Company & SaaS Engineering',
    badge: 'Enterprise Software • Web Apps • SaaS Development',
    heroHeadline: 'Custom Software, Web Applications & Scalable SaaS Platforms Built for Global Scale.',
    heroSubheadline: 'Off-the-shelf software cannot solve proprietary business problems. We architect, build, and deploy high-performance custom web applications, mobile apps, SaaS products, and secure APIs engineered for high concurrency and zero downtime.',
    priceDisplay: 'Custom Scope / SOW',
    pricingNote: 'Agile Milestones • Clean Code Architecture • Full Source Code Ownership',
    whatsappMessage: 'Hello Haxor MTC, I want to discuss custom software development for a new application/SaaS platform.',
    targetIndustries: [
      'Fintech & Digital Payments',
      'Healthcare & Telemedicine',
      'Logistics & Supply Chain Management',
      'E-Commerce & Multi-Vendor Marketplaces',
      'EdTech & Learning Management Systems',
      'B2B SaaS & Enterprise Portals'
    ],
    keyHighlights: [
      { title: 'Modern Full-Stack Architecture', desc: 'React, Next.js, Node.js, Python, PostgreSQL, Redis, Docker, and Kubernetes engineered for high velocity and security.' },
      { title: '100% Code & IP Ownership', desc: 'You retain complete copyright and ownership of all source code, databases, documentation, and cloud deployment pipelines.' },
      { title: 'Scalable Microservices & APIs', desc: 'RESTful and GraphQL API design with secure token authentication, rate limiting, and webhook dispatch.' },
      { title: 'International Payment Gateways', desc: 'Seamless integration with Stripe, PayPal, Lemon Squeezy, credit cards, and regional mobile money (M-Pesa STK).' }
    ],
    features: [
      'Full-stack custom web and mobile application engineering',
      'SaaS multi-tenant database architecture and subscription billing',
      'Custom API development, webhook integrations, and third-party connector pipelines',
      'Responsive React/Next.js frontend with mobile-first performance (<1s load)',
      'Automated CI/CD deployment pipelines on AWS, Google Cloud, or DigitalOcean',
      'Role-based access control (RBAC), multi-factor authentication, and data encryption',
      'Comprehensive technical documentation, API schemas, and code repository handover',
      'Dedicated post-launch SLA maintenance, security patches, and feature scaling'
    ],
    faqs: [
      { q: 'Do we own the software code after development?', a: 'Yes! Upon project completion, 100% of the intellectual property, source code repositories, cloud hosting configurations, and databases are transferred to your ownership.' },
      { q: 'Can you build both mobile apps and web platforms?', a: 'Yes. We engineer responsive web applications and cross-platform mobile apps for iOS and Android using React Native, allowing you to launch everywhere with a shared backend.' },
      { q: 'How do we manage communication and milestones?', a: 'We operate on agile 2-week sprints with transparent progress demos, GitHub/GitLab repositories, and direct Slack/WhatsApp channels with the lead software architects.' }
    ]
  },

  'enterprise-seo': {
    slug: 'enterprise-seo',
    type: 'service',
    title: 'SEO Consulting Company & Global Search Engine Optimization',
    badge: 'International SEO • Enterprise Search Growth',
    heroHeadline: 'Dominate Organic Search Rankings Globally with Data-Driven Technical & Enterprise SEO.',
    heroSubheadline: 'Drive high-intent, sustainable organic pipeline without burning budget on continuous PPC ads. We deliver comprehensive technical SEO audits, international multi-region search optimization, authority link architecture, and conversion-focused content strategy.',
    priceDisplay: 'From Ksh. 15,000 / $120',
    pricingNote: 'Monthly Growth Retainers • Technical Crawl Overhaul • Transparent Keyword Rank Tracking',
    whatsappMessage: 'Hello Haxor MTC, I want to explore Enterprise & Global SEO Consulting services for our business.',
    keyHighlights: [
      { title: 'Global & International SEO', desc: 'Hreflang architecture, geo-targeting, and multi-country keyword strategies that win top Google positions across US, UK, Europe, and Africa.' },
      { title: 'Deep Technical SEO Overhauls', desc: 'Fix Core Web Vitals, crawl budget leaks, JavaScript rendering issues, schema markup, and canonical indexing.' },
      { title: 'High-Intent Commercial Keywords', desc: 'Target keywords with clear transactional intent where searchers are ready to buy software, services, and products.' },
      { title: 'Conversion Rate Optimization (CRO)', desc: 'Organic rankings mean nothing without leads. We optimize pages to convert organic searchers into direct customer inquiries.' }
    ],
    deliverables: [
      'Comprehensive 100+ point technical SEO crawl and site architecture audit',
      'Competitor keyword gap analysis and global search opportunity mapping',
      'On-page title, meta, header, internal linking, and structured JSON-LD schema implementation',
      'Core Web Vitals acceleration for sub-second mobile page performance',
      'International SEO setup (hreflang, international sitemaps, geo-location routing)',
      'High-authority editorial backlink building and digital PR strategy',
      'Monthly keyword rank movement and organic conversion attribution reporting'
    ],
    faqs: [
      { q: 'What is the difference between local and international SEO?', a: 'Local SEO focuses on Google Maps 3-Pack and town-specific queries, while International/Enterprise SEO optimizes large multi-page websites to rank nationally and globally across multiple countries and currencies.' }
    ]
  },

  'cloud-pos-systems': {
    slug: 'cloud-pos-systems',
    type: 'software',
    title: 'Cloud POS Software Company & Multi-Store Inventory Management',
    badge: 'Cloud POS • Retail & Hospitality ERP',
    heroHeadline: 'Intelligent Cloud POS Software with Real-Time Multi-Store Stock Management.',
    heroSubheadline: 'Say goodbye to cash leakage, inventory discrepancies, and complicated checkout systems. Our Cloud POS software delivers real-time stock sync across multiple retail branches, fast thermal receipt printing, barcode scanning, and automated accounting sync.',
    priceDisplay: 'Free Demo Available',
    pricingNote: 'Cloud Subscription or One-Time Licensing • Touchscreen Hardware Compatible',
    whatsappMessage: 'Hello Haxor MTC, I would like to explore your Cloud POS and Inventory Management Software.',
    targetIndustries: [
      'Supermarkets & Retail Chains',
      'Restaurants, Bars, Nightclubs & Cafes',
      'Liquor Stores & Beverage Distributors',
      'Pharmacies & Healthcare Dispensaries',
      'Hardware & Building Material Wholesalers',
      'Apparel Boutiques & Fashion Stores'
    ],
    keyHighlights: [
      { title: 'Centralized Multi-Store Sync', desc: 'Manage inventory, sales, cashiers, and promotions across multiple branches from a single online cloud dashboard.' },
      { title: 'Advanced Stock & Procurement', desc: 'Automatic purchase orders, supplier management, low-stock notifications, and batch/expiry date tracking.' },
      { title: 'Fast Barcode Scanning & Checkout', desc: 'Sub-second barcode lookups, touchscreen quick-keys, split-bill capability, and thermal receipt printing.' },
      { title: 'Offline-First Reliability', desc: 'Keep ringing up sales even during internet outages; transactions sync automatically once reconnected.' }
    ],
    features: [
      'Cloud POS terminal software compatible with Windows, Android, Mac, and iOS',
      'Integrated payment gateways (Cards, Apple Pay, Google Pay, and localized M-Pesa STK)',
      'Multi-warehouse stock transfers and real-time inventory deduction',
      'Supplier purchase orders, goods received notes (GRN), and reorder triggers',
      'Cashier shift management, opening/closing blind float reconciliation, and audit logs',
      'Restaurant table layouts, Kitchen Order Tickets (KOT), and recipe ingredient tracking',
      'Comprehensive financial reporting: gross margins, COGS, tax summary, and staff performance',
      'Custom hardware packages: all-in-one touch terminals, barcode scanners, printers, and cash drawers'
    ],
    faqs: [
      { q: 'Can I monitor my stores remotely when traveling?', a: 'Yes! You can log in to your cloud dashboard from anywhere in the world on your smartphone or laptop to see real-time sales and stock levels.' }
    ]
  },

  'hotel-management-system': {
    slug: 'hotel-management-system',
    type: 'software',
    title: 'Hotel Management System (PMS) & Hospitality Software Solutions',
    badge: 'Hotel PMS • Direct Booking Engine • Channel Manager',
    heroHeadline: 'All-in-One Hotel Property Management System, Direct Booking Engine & Hospitality POS.',
    heroSubheadline: 'Streamline front desk check-in, eliminate double-bookings, automate room housekeeping, and capture commission-free direct reservations. Our Hotel PMS empowers boutique resorts, safari lodges, business hotels, and serviced apartments worldwide.',
    priceDisplay: 'Custom Hospitality Scope',
    pricingNote: 'Modular PMS Setup • Zero Commission Direct Booking • Staff Training Included',
    whatsappMessage: 'Hello Haxor MTC, I would like to schedule a demonstration of your Hotel Management System (PMS).',
    targetIndustries: [
      'Boutique Hotels & Luxury Resorts',
      'Safari Lodges & Eco-Camps',
      'Serviced Apartments & Vacation Rentals',
      'Business Hotels & Conference Centers',
      'Fine Dining Clubs & Country Estates'
    ],
    keyHighlights: [
      { title: 'Visual Room Booking Calendar', desc: 'Color-coded reservation grid with drag-and-drop room assignments, guest folios, and instant check-in/out.' },
      { title: 'Direct Zero-Commission Booking Engine', desc: 'Embed a direct booking engine on your website to capture reservations without paying 15-25% OTA commissions.' },
      { title: 'Channel Manager Synchronization', desc: 'Real-time two-way synchronization with Booking.com, Expedia, Airbnb, and Agoda to prevent overbooking.' },
      { title: 'Integrated Restaurant POS & Folio Billing', desc: 'Waiters post food and beverage tabs directly to the guest room invoice with one tap.' }
    ],
    features: [
      'Property Management System (PMS) with visual interactive room calendar',
      'Direct mobile-responsive hotel booking engine with instant payment confirmation',
      'Two-way Channel Manager integration (Booking.com, Expedia, Airbnb)',
      'Front desk guest folio billing, passport/ID scanning, and automated invoice generation',
      'Housekeeping management: clean, inspected, dirty, and maintenance room status',
      'Restaurant POS with table ordering, Kitchen Order Tickets (KOT), and room billing',
      'Night audit automation, occupancy rate analytics, and RevPAR revenue reports',
      'Automated guest pre-arrival and post-stay review collection emails and WhatsApp messages'
    ],
    faqs: [
      { q: 'Does the system prevent double-bookings from Booking.com and Airbnb?', a: 'Yes! The integrated channel manager automatically updates room inventory across all online booking channels within seconds of a reservation.' }
    ]
  },

  'erp-crm-consulting': {
    slug: 'erp-crm-consulting',
    type: 'software',
    title: 'ERP & CRM Consulting Company | Odoo, Zoho & Custom Enterprise Solutions',
    badge: 'Certified Odoo & Zoho Partner • Custom ERP',
    heroHeadline: 'Connect Your Sales, Supply Chain & Accounting with Enterprise ERP & CRM Implementation.',
    heroSubheadline: 'Stop relying on fragmented spreadsheets and disconnected point solutions. As certified Odoo and Zoho consulting partners, we implement, customize, and maintain robust ERP and CRM systems tailored to your unique business operations.',
    priceDisplay: 'Enterprise Scope',
    pricingNote: 'End-to-End Implementation • Data Migration • Custom API & Module Development',
    whatsappMessage: 'Hello Haxor MTC, I want to consult with your ERP & CRM implementation team.',
    targetIndustries: [
      'Manufacturing & Industrial Plants',
      'Wholesale & Distribution Companies',
      'E-Commerce & Retail Chains',
      'Construction & Engineering Contractors',
      'Professional Services & Financial Advisory'
    ],
    keyHighlights: [
      { title: 'Unified Business Operations', desc: 'Single source of truth for CRM, sales quotes, inventory, manufacturing, procurement, and accounting.' },
      { title: 'Odoo & Zoho Certified Expertise', desc: 'Certified consultants skilled in Odoo Community/Enterprise and the complete Zoho One suite.' },
      { title: 'Custom Module & API Programming', desc: 'We build custom Python/Odoo modules and Zoho Deluge scripts to adapt the software to your exact workflows.' },
      { title: 'Seamless Legacy Data Migration', desc: 'Safely migrate historical accounts, customers, vendors, and inventory from QuickBooks, Sage, or Excel.' }
    ],
    features: [
      'Comprehensive business process analysis and ERP requirements blueprinting',
      'Odoo ERP installation, database architecture, and custom module programming',
      'Zoho One, Zoho CRM, Zoho Books, and Zoho Desk workflow automation',
      'Multi-warehouse inventory management with automated reordering triggers',
      'Automated sales pipeline, deal stages, and quote-to-invoice automation',
      'Financial ledger, tax compliance, bank reconciliation, and automated P&L reporting',
      'Third-party system integrations (e-commerce, payment gateways, custom APIs)',
      'Staff user training, administrator documentation, and dedicated monthly SLA maintenance'
    ],
    faqs: [
      { q: 'How do we choose between Odoo and Zoho?', a: 'Zoho is optimal for sales, marketing, and client-facing service businesses. Odoo is unbeatable for inventory, manufacturing, supply chain, and complex accounting. In our initial discovery session, we evaluate your operations and recommend the best fit.' }
    ]
  },

  'virtual-assistance': {
    slug: 'virtual-assistance',
    type: 'service',
    title: 'Executive & Technical Virtual Assistance Services | Dedicated Remote Talent',
    badge: 'Pre-Vetted Remote Talent • From Ksh 25,000/mo',
    heroHeadline: 'High-Impact Executive, Administrative & Technical Virtual Assistants.',
    heroSubheadline: 'Free up 20+ hours every week. Our college-educated, English-fluent dedicated remote assistants handle customer service, inbox zero, calendar scheduling, CRM maintenance, order fulfillment, and daily business operations.',
    priceDisplay: 'From Ksh. 25,000',
    pricingNote: 'Part-Time (20 hrs/wk): Ksh 25k • Full-Time (40 hrs/wk): Ksh 45k • Hourly: Ksh 800/hr',
    whatsappMessage: 'Hello Haxor MTC, I am interested in hiring a Virtual Assistant for my business. Please share available candidate profiles.',
    milestonePayment: 'Monthly Rolling Retainer • Cancel Anytime with 14 Days Notice',
    packages: [
      {
        id: 'va-part-time',
        name: 'Part-Time Dedicated VA (20 hrs/wk)',
        price: '25,000',
        priceNote: '/ month',
        bestFor: 'Solo founders, executives and busy consultants needing 4 hours daily of admin and operational support.',
        badge: 'Most Popular for Founders',
        popular: true,
        features: [
          '20 hours per week (80 hours / month) dedicated remote staff',
          'Email triage, spam filtering & inbox zero management',
          'Executive calendar scheduling across timezones (Google/Outlook)',
          'Customer support via WhatsApp Business, Email & live chat',
          'CRM lead data entry (Zoho, HubSpot, Salesforce, Sheets)',
          'Weekly activity log & direct Slack / WhatsApp team sync'
        ],
        ctaText: 'Hire Part-Time VA',
        whatsappMessage: 'Hello Haxor MTC, I want to hire a Part-Time Virtual Assistant (20 hrs/wk at Ksh 25,000/mo).'
      },
      {
        id: 'va-full-time',
        name: 'Full-Time Dedicated VA (40 hrs/wk)',
        price: '45,000',
        priceNote: '/ month',
        bestFor: 'Growing SMEs, retail brands, and e-commerce stores requiring full 8-hour daily coverage.',
        badge: 'Complete Operations',
        popular: false,
        features: [
          '40 hours per week (160 hours / month) dedicated remote talent',
          'Full 8-hour daily customer helpdesk coverage (Zendesk, Freshdesk)',
          'E-commerce order fulfillment & supplier coordination (Shopify/Woo)',
          'Basic graphic design, Canva social posts & slide presentations',
          'Quote drafting, client invoicing & payment follow-up',
          'Rigorous 4-stage talent vetting & background verification',
          'Free replacement guarantee within 48 hours if fit is unsatisfactory'
        ],
        ctaText: 'Hire Full-Time VA',
        whatsappMessage: 'Hello Haxor MTC, I want to hire a Full-Time Virtual Assistant (40 hrs/wk at Ksh 45,000/mo).'
      },
      {
        id: 'va-hourly',
        name: 'On-Demand Hourly Retainer',
        price: '800',
        priceNote: '/ hour (Min 10 hrs)',
        bestFor: 'One-off projects, document formatting, slide decks, or temporary data cleanup.',
        badge: 'Flexible Retainer',
        popular: false,
        features: [
          'Prepaid block of 10 to 30 hours valid for 60 calendar days',
          'Executive PowerPoint & Keynote slide deck formatting',
          'Web research, lead list compilation & spreadsheet cleanup',
          'Audio transcription, PDF conversions & document proofing',
          'Itemized minute-by-minute Toggl time logs provided'
        ],
        ctaText: 'Book Hourly Support',
        whatsappMessage: 'Hello Haxor MTC, I need On-Demand Hourly Virtual Assistance (Ksh 800/hr).'
      }
    ],
    targetIndustries: [
      'Executives & Management Consultants',
      'E-Commerce & Online Retailers',
      'Real Estate Agencies & Property Managers',
      'Tech Startups & Software Companies',
      'Law Firms & Professional Services'
    ],
    keyHighlights: [
      { title: 'Rigorous 4-Stage Vetting', desc: 'We screen hundreds of applicants for native English fluency, software literacy, typing speed, and communication IQ.' },
      { title: 'Plug-and-Play Tool Proficiency', desc: 'Our assistants are certified across Google Workspace, MS Office, Slack, Notion, Asana, Trello, and modern AI tools.' },
      { title: 'Strict Data Security & NDAs', desc: 'All virtual assistants sign enforceable Non-Disclosure Agreements with strict access controls on client credentials.' },
      { title: '48-Hour Replacement Guarantee', desc: 'If for any reason your assigned assistant is not the ideal fit, we provide a replacement within 48 hours at zero extra fee.' }
    ],
    features: [
      'Dedicated college-educated virtual assistant assigned exclusively to your business',
      'Customer support handling across Email, WhatsApp Business, Zendesk, and live chat',
      'Executive scheduling, calendar management, and travel itinerary coordination',
      'Lead logging, CRM contact hygiene, and spreadsheet pipeline management',
      'Social media post scheduling, comment moderation, and audience inbox replies',
      'E-commerce order processing, customer refund inquiries, and shipping tracking updates',
      'Basic bookkeeping support: quote generation, invoice tracking, and expense categorization',
      'Daily/Weekly task summaries and transparent time tracking documentation'
    ],
    faqs: [
      { q: 'What timezones do your Virtual Assistants work in?', a: 'Our assistants can work aligned to your preferred business hours, whether that is East Africa Time (EAT), UK/GMT, Central European Time (CET), or US Eastern/Pacific hours.' },
      { q: 'How do I communicate with my assigned Virtual Assistant?', a: 'You communicate directly via your preferred channels—WhatsApp, Slack, Microsoft Teams, Email, or weekly Zoom/Google Meet video check-ins.' },
      { q: 'Can the VA use our internal software and CRMs?', a: 'Yes! Our assistants are tech-native and quickly adapt to your specific software, including Zoho, HubSpot, Shopify, WordPress, Zendesk, and Notion.' }
    ]
  },
  'google-family-link': {
    slug: 'google-family-link',
    type: 'service',
    title: 'Google Family Link Integration for Schools, Academies & Parents',
    badge: 'Child Cyber Safety & Educational Device Supervision',
    heroHeadline: 'Safe, Monitored & Distraction-Free Digital Learning for Children and Students.',
    heroSubheadline: 'Turnkey Google Family Link integration for educational institutions and parents across Kenya. Web SafeSearch filtering, automatic school & bedtime screen limits, app download controls, and live device GPS tracking from Ksh. 1,000 per device.',
    priceDisplay: 'From Ksh. 1,000 / Device',
    pricingNote: 'Custom institutional tiers • Minimum 10 devices',
    whatsappMessage: 'Hello Haxor MTC, I am interested in Google Family Link integration for our school / student devices (Ksh 1,000 / device). Please share details!',
    milestonePayment: '50% deposit upon scope signoff → 50% upon batch enrollment and PTA handover',
    packages: [
      {
        id: 'family-link-device',
        name: 'Pilot / Per-Device Setup',
        price: '1,000',
        priceNote: 'per device (Min 10 devices)',
        bestFor: 'Individual parents, PTA test batches, and small academy classes.',
        badge: 'Entry Tier',
        popular: false,
        features: [
          'Supervised child Google Account creation & parent linking',
          'SafeSearch enforcement & adult/gambling site filtering',
          'Play Store app download & purchase approval workflow',
          'Screen time schedules & automatic bedtime device lockdown',
          'Real-time GPS location tracking & battery monitoring',
          'Parent walkthrough guide & 30 days setup support',
        ],
        ctaText: 'Order Device Setup',
        whatsappMessage: 'Hello Haxor MTC, I want to order the Google Family Link Per-Device Setup (Ksh. 1,000 / device).',
      },
      {
        id: 'family-link-classroom',
        name: 'Classroom / Standard Rollout',
        price: '85,000',
        priceNote: 'up to 100 devices (~Ksh 850/device)',
        bestFor: 'Primary, Junior Secondary & High School grades rolling out digital learning devices.',
        badge: 'Most Popular for Schools',
        popular: true,
        features: [
          'Complete batch configuration for up to 100 student devices',
          'School-wide Web SafeSearch & YouTube Restricted Mode enforcement',
          'Classroom focus schedule (lock apps during school study hours)',
          '1 On-site or interactive virtual PTA/Parent Onboarding Workshop',
          'Printed quick-start parent guide for home management',
          'Direct administrative ICT coordinator handover & 90-day support',
        ],
        ctaText: 'Choose Classroom Package',
        whatsappMessage: 'Hello Haxor MTC, our school is interested in the Standard Google Family Link Rollout for up to 100 devices (Ksh 85,000).',
      },
      {
        id: 'family-link-institution',
        name: 'Whole-School Institution Rollout',
        price: '220,000',
        priceNote: 'up to 300+ devices (~Ksh 730/device)',
        bestFor: 'Full-campus deployments, international schools, boarding academies, and multi-stream institutions.',
        badge: 'Campus Scale',
        popular: false,
        features: [
          'Enterprise rollout across 300+ student tablets, Chromebooks & phones',
          'Custom multi-grade security policy architecture (Primary vs High School)',
          'Dedicated on-site engineering team for multi-day device enrollment',
          'Comprehensive Parent-Teacher Association (PTA) training sessions',
          'School Wi-Fi policy coordination & DNS content filtering sync',
          'Dedicated priority account manager with 12 months technical backup',
        ],
        ctaText: 'Discuss Campus Rollout',
        whatsappMessage: 'Hello Haxor MTC, I am a school principal / director interested in the Whole-School Google Family Link Campus Rollout (300+ devices).',
      },
    ],
    targetIndustries: [
      'Primary & Junior Secondary Schools',
      'High Schools & Boarding Academies',
      'International & Private Curriculums (CBC, IGCSE, British)',
      'Parent-Teacher Associations (PTA) & Homeschooling Collectives',
      'Families & Guardians Seeking Digital Child Protection',
    ],
    keyHighlights: [
      { title: 'SafeSearch & Web Content Filtering', desc: 'Blocks pornography, gambling, extreme violence, and malware sites automatically across Chrome and search engines.' },
      { title: 'App Approval Gate', desc: 'Children cannot install TikTok, betting apps, or games without immediate PIN or remote approval on the parent phone.' },
      { title: 'Curfew & Study Hours Lockout', desc: 'Devices automatically lock at bedtime and during school hours so students remain 100% focused on studies and sleep.' },
      { title: 'Live GPS Tracking & Lost Device Ringing', desc: 'Real-time student location tracking to verify safe arrival at school and home, plus remote alarm ringing and locking.' },
    ],
    features: [
      'Dedicated Google Supervised Accounts configured for every student or child',
      'Linking to parent smartphones (Android or iPhone) with full parental control dashboard',
      'Daily usage limits by individual app (e.g. 30 mins YouTube, 0 mins TikTok, unlimited Khan Academy)',
      'Classroom study focus mode locking non-educational apps during 8:00 AM - 4:00 PM school hours',
      'Automatic nighttime bedtime lockout (e.g. 9:00 PM - 6:00 AM) ensuring restorative sleep',
      'YouTube Restricted Mode and YouTube Kids experience enforcement',
      'Live GPS map showing student device location with battery level indicators',
      'Step-by-step interactive onboarding workshop for parents and school ICT administrators',
    ],
    faqs: [
      { q: 'What devices are supported by Google Family Link?', a: 'Google Family Link supports Android tablets, Android smartphones, and Chromebooks used by students. Parents can supervise their children from either an Android phone or an iPhone/iPad.' },
      { q: 'Can children bypass or uninstall Google Family Link?', a: 'No. When configured properly by our team, the child account cannot remove supervision, disable GPS, or uninstall the management profile without the parent account password or secret override code.' },
      { q: 'How does this benefit school principals and teachers?', a: 'It completely eliminates classroom distractions. Tablets brought to school can have games, social media, and camera apps locked during class periods, guaranteeing that devices are strictly educational tools.' },
      { q: 'How does the Ksh. 1,000 per device pricing work?', a: 'For smaller groups or individual parents, we configure each device for Ksh. 1,000 (minimum 10 devices). For whole classes (up to 100 devices) or whole schools (up to 300+ devices), we provide discounted package tiers that include on-site staff, PTA workshops, and ongoing support.' },
      { q: 'Do you conduct on-site PTA or school workshops?', a: 'Yes! For school and classroom rollouts, our certified engineers conduct interactive on-site or virtual sessions with parents and teachers to guide everyone through using the parent app and setting house rules.' },
    ],
  }
};
