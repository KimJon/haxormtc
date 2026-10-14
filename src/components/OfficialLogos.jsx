import React from 'react';

// Official Odoo Vector Logo
export function OdooLogo({ className = "h-5 w-auto", monochrome = false }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 32C13.3726 32 8 26.6274 8 20C8 13.3726 13.3726 8 20 8C26.6274 8 32 13.3726 32 20C32 26.6274 26.6274 32 20 32ZM20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
        fill={monochrome ? "currentColor" : "#714B67"}
      />
      <path
        d="M48 32C41.3726 32 36 26.6274 36 20C36 13.3726 41.3726 8 48 8C52.4183 8 56.2485 10.3846 58.3072 13.916V5H65V32H58.3072V26.084C56.2485 29.6154 52.4183 32 48 32ZM50.5 25C53.2614 25 55.5 22.7614 55.5 20C55.5 17.2386 53.2614 15 50.5 15C47.7386 15 45.5 17.2386 45.5 20C45.5 22.7614 47.7386 25 50.5 25Z"
        fill={monochrome ? "currentColor" : "#714B67"}
      />
      <path
        d="M81 32C74.3726 32 69 26.6274 69 20C69 13.3726 74.3726 8 81 8C87.6274 8 93 13.3726 93 20C93 26.6274 87.6274 32 81 32ZM81 25C83.7614 25 86 22.7614 86 20C86 17.2386 83.7614 15 81 15C78.2386 15 76 17.2386 76 20C76 22.7614 78.2386 25 81 25Z"
        fill={monochrome ? "currentColor" : "#00A09D"}
      />
      <path
        d="M107 32C100.373 32 95 26.6274 95 20C95 13.3726 100.373 8 107 8C113.627 8 119 13.3726 119 20C119 26.6274 113.627 32 107 32ZM107 25C109.761 25 112 22.7614 112 20C112 17.2386 109.761 15 107 15C104.239 15 102 17.2386 102 20C102 22.7614 104.239 25 107 25Z"
        fill={monochrome ? "currentColor" : "#8F8F8F"}
      />
    </svg>
  );
}

// Official Zoho Vector Logo
export function ZohoLogo({ className = "h-5 w-auto", monochrome = false }) {
  return (
    <svg className={className} viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Z */}
      <rect x="2" y="4" width="22" height="24" rx="4" fill={monochrome ? "currentColor" : "#E42528"} />
      <path d="M7 10H19L10 22H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* O */}
      <rect x="28" y="4" width="22" height="24" rx="4" fill={monochrome ? "currentColor" : "#089949"} />
      <circle cx="39" cy="16" r="5" stroke="white" strokeWidth="2.5" />
      {/* H */}
      <rect x="54" y="4" width="22" height="24" rx="4" fill={monochrome ? "currentColor" : "#226CB5"} />
      <path d="M60 10V22M60 16H70M70 10V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* O */}
      <rect x="80" y="4" width="22" height="24" rx="4" fill={monochrome ? "currentColor" : "#F6921E"} />
      <circle cx="91" cy="16" r="5" stroke="white" strokeWidth="2.5" />
    </svg>
  );
}

// Official Google G Vector Logo
export function GoogleLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
    </svg>
  );
}

// Official Google Ads Vector Logo
export function GoogleAdsLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.3 15.3l5.8-10.1c.8-1.4 2.6-1.9 4-1.1l.1.1c1.4.8 1.9 2.6 1.1 4L9.5 18.3c-.8 1.4-2.6 1.9-4 1.1l-.1-.1c-1.4-.8-1.9-2.6-1.1-4.1z" fill="#FABB05"/>
      <path d="M14.6 4.2c1.4.8 1.9 2.6 1.1 4l-5.8 10.1c-.8 1.4-2.6 1.9-4 1.1l-.1-.1c-1.4-.8-1.9-2.6-1.1-4L10.5 5.2c.8-1.4 2.6-1.9 4-1.1l.1.1z" fill="#4285F4"/>
      <circle cx="6.5" cy="17.5" r="3.5" fill="#34A853"/>
    </svg>
  );
}

// Official Meta / Meta Pixel Vector Logo
export function MetaPixelLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.92 6C15.02 6 13.43 7.04 12 8.44C10.57 7.04 8.98 6 7.08 6C3.76 6 1 8.84 1 12.44C1 16.04 3.76 18.88 7.08 18.88C9.37 18.88 11.16 17.43 12 15.89C12.84 17.43 14.63 18.88 16.92 18.88C20.24 18.88 23 16.04 23 12.44C23 8.84 20.24 6 16.92 6ZM7.08 16.64C4.85 16.64 3.14 14.77 3.14 12.44C3.14 10.11 4.85 8.24 7.08 8.24C8.75 8.24 10.14 9.4 11.2 10.97C10.51 12.88 9.21 16.64 7.08 16.64ZM16.92 16.64C14.79 16.64 13.49 12.88 12.8 10.97C13.86 9.4 15.25 8.24 16.92 8.24C19.15 8.24 20.86 10.11 20.86 12.44C20.86 14.77 19.15 16.64 16.92 16.64Z"
        fill="#0081FB"
      />
    </svg>
  );
}

// Official HubSpot Vector Logo
export function HubSpotLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.8 7.6V4.4c.9-.4 1.5-1.3 1.5-2.4 0-1.4-1.1-2.5-2.5-2.5S14.3.6 14.3 2c0 1.1.6 2 1.5 2.4v3.2c-1.1.4-2.1 1.1-2.8 2L7.3 6.4c.1-.4.2-.8.2-1.2 0-2.1-1.7-3.8-3.8-3.8S0 3.1 0 5.2s1.7 3.8 3.8 3.8c.6 0 1.2-.1 1.7-.4l5.6 3.1c-.2.7-.3 1.4-.3 2.1 0 .7.1 1.4.3 2.1l-5.6 3.1c-.5-.3-1.1-.4-1.7-.4-2.1 0-3.8 1.7-3.8 3.8S1.7 24 3.8 24s3.8-1.7 3.8-3.8c0-.4-.1-.8-.2-1.2l5.7-3.2c.7.9 1.7 1.6 2.8 2v3.2c-.9.4-1.5 1.3-1.5 2.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.1-.6-2-1.5-2.4v-3.2c2.1-.9 3.6-3 3.6-5.4 0-2.5-1.5-4.6-3.6-5.5zm-1 9.4c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
        fill="#FF7A59"
      />
    </svg>
  );
}

// Official Stripe Vector Logo
export function StripeLogo({ className = "h-5 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M59.64 14.28c0-4.48-2.18-8.02-6.52-8.02-4.36 0-7 3.54-7 8 0 5.26 3.14 7.94 7.6 7.94 2.18 0 3.82-.48 5.06-1.18v-3.5a11.37 11.37 0 01-4.4 1c-1.74 0-3.26-.64-3.5-2.52h8.72c0-.24.04-.52.04-.72zm-8.8-1.64c0-1.76 1.08-2.48 2.26-2.48 1.14 0 2.2.72 2.2 2.48zm-11.88-6.1c-1.62 0-2.66.76-3.22 1.3v-1.04h-4.36v19.42l4.62-1v-4.62c.56.46 1.48 1.14 3.02 1.14 3.08 0 5.92-2.46 5.92-7.58.02-5.06-2.92-7.62-5.98-7.62zm-1.06 11.4c-1.02 0-1.76-.36-2.26-.88v-6.22c.52-.56 1.28-.9 2.26-.9 1.74 0 2.94 1.48 2.94 4 0 2.5-1.2 4-2.94 4zm-14.8-11.4c-1.12 0-2.18.52-2.76 1.14l-.18-.94H16.1v15.14h4.62v-9.3c1.08-1.38 2.9-1.12 3.48-.94V6.78c-.54-.16-1.08-.24-1.6-.24zm-8.72 2.14V6.54h-4.6v15.14h4.6V10.28zm-2.32-6.58c-1.54 0-2.6.96-2.6 2.34 0 1.36 1.06 2.32 2.6 2.32 1.54 0 2.6-.96 2.6-2.32 0-1.38-1.06-2.34-2.6-2.34zM7.16 9.86C5.58 9.3 4.6 9 4.6 8.16c0-.72.66-1.16 1.78-1.16 1.94 0 3.96.64 5.34 1.46V4.4c-1.54-.6-3.32-.9-5.18-.9C2.7 3.5 0 5.48 0 8.7c0 3.52 2.3 4.68 5.76 5.56 1.84.48 2.48.96 2.48 1.68 0 .84-.76 1.34-2.12 1.34-2.28 0-4.66-.9-6.12-1.92v4.18c1.68.74 3.8 1.12 5.92 1.12 4.14 0 6.94-1.9 6.94-5.34 0-3.76-2.54-4.88-5.7-5.46z"
        fill="#635BFF"
      />
    </svg>
  );
}

// Inline brand badge pill for use next to text or bullets
export function BrandBadge({ brand, label, className = "" }) {
  const logos = {
    odoo: <OdooLogo className="h-3.5 w-auto" />,
    zoho: <ZohoLogo className="h-3.5 w-auto" />,
    google: <GoogleLogo className="h-3.5 w-3.5" />,
    googleAds: <GoogleAdsLogo className="h-3.5 w-3.5" />,
    pixel: <MetaPixelLogo className="h-3.5 w-3.5" />,
    hubspot: <HubSpotLogo className="h-3.5 w-3.5" />,
    stripe: <StripeLogo className="h-3.5 w-auto" />,
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-900 ${className}`}>
      {logos[brand]}
      {label && <span>{label}</span>}
    </span>
  );
}

// Official High-Contrast Logo Cloud for Hero & Sections
export function OfficialLogoCloud({ className = "" }) {
  return (
    <div className={`w-full py-6 border-y border-slate-200 bg-[#F4F5F7] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-5">
          Platforms &amp; Ecosystems We Deliver Behind The Scenes
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          <div className="flex items-center gap-2 group transition" title="Zoho One, CRM & Desk Architecture">
            <ZohoLogo className="h-6 w-auto" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Zoho One</span>
          </div>

          <div className="flex items-center gap-2 group transition" title="Odoo ERP v16–v18 Implementation">
            <OdooLogo className="h-6 w-auto" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Odoo ERP</span>
          </div>

          <div className="flex items-center gap-2 group transition" title="HubSpot CRM & Ops Hub Workflows">
            <HubSpotLogo className="h-6 w-6" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">HubSpot</span>
          </div>

          <div className="flex items-center gap-2 group transition" title="Stripe API & Webhook Integrations">
            <StripeLogo className="h-5 w-auto" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Stripe</span>
          </div>

          <div className="flex items-center gap-2 group transition" title="Google Cloud & Lead Ingestion">
            <GoogleLogo className="h-5 w-5" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Google Cloud</span>
          </div>

          <div className="flex items-center gap-2 group transition" title="Google Ads Webhook Pipelines">
            <GoogleAdsLogo className="h-5 w-5" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Google Ads</span>
          </div>

          <div className="flex items-center gap-2 group transition" title="Meta Pixel & Conversion API Routing">
            <MetaPixelLogo className="h-5 w-5" />
            <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Meta Pixel / CAPI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
