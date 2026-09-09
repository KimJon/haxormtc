# Haxor MTC - Business Technology, AI Automation & Enterprise Software

Enterprise web application and digital presence platform for **Haxor MTC** ([haxormtc.com](https://haxormtc.com)).

## Features
- **40 Digital Business Kits**: Turnkey operational solutions across 14 industry sectors (Hotels, Restaurants, Clinics, Retail, Schools, Law, etc.).
- **Pay As You Grow (Modular Rollout)**: Flexible phased milestone delivery (Digital Presence &rarr; Sales & Bookings &rarr; Operations & PMS &rarr; Growth & SEO).
- **Interactive Quote Calculator**: Dynamic bundle estimator with automatic 10% multi-module savings and 1-click WhatsApp quote generator.
- **Dedicated Solution Hubs**:
  - Google Family Link School & Parental Safety Integration (`/services/google-family-link`)
  - Dedicated Service & Software landing pages (`/services/*`, `/software/*`)
- **Multi-Currency Engine**: Geo-aware currency switcher supporting KES, USD, and EUR.
- **Enterprise SEO & Apache Infrastructure**: Pre-rendered semantic HTML shell, 301 canonical redirects, and gzip compression.

## Tech Stack
- **Framework**: React 19 + React Router v7
- **Bundler**: Vite v8
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React (100% vector, zero emojis)
- **Quality**: Oxlint + Tailwind

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

### 4. Build & Package for cPanel Deployment
```bash
node package-cpanel.cjs
```
This script generates:
- `haxormtc-cpanel-upload.zip`
- `haxormtc-cpanel-upload.tar.gz`

Both packages are POSIX-compliant, contain Apache `.htaccess` rewrite rules, and extract directly into `public_html`.
