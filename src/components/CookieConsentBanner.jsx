import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, X, ChevronDown, ChevronUp, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const COOKIE_STORAGE_KEY = 'haxor_cookie_consent_v1';

export default function CookieConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and cannot be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if consent has already been given
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        // Small delay so it transitions smoothly after initial render
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setPreferences(prev => ({ ...prev, ...parsed }));
        }
      }
    } catch {
      setIsOpen(true);
    }

    // Listen for custom event to re-open settings from the footer
    const handleReopen = () => {
      setIsOpen(true);
      setIsCustomizeOpen(true);
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => window.removeEventListener('open-cookie-preferences', handleReopen);
  }, []);

  const saveConsent = (updatedPrefs) => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify({
        ...updatedPrefs,
        necessary: true,
        timestamp: new Date().toISOString(),
      }));
    } catch {
      // Ignore localstorage quota/sandbox issues
    }
    setPreferences(updatedPrefs);
    setIsOpen(false);
    setIsCustomizeOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectNonEssential = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!isOpen) return null;

  return (
    <aside 
      aria-label="Cookie and Privacy Consent" 
      className="fixed bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto z-50 max-w-full sm:max-w-lg w-full p-4 sm:p-0 pointer-events-auto animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white text-[#111111] rounded-2xl sm:rounded-3xl border border-slate-300 shadow-2xl p-5 sm:p-6 font-work-sans">
        
        {/* Header Icon + Title */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-black" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-black tracking-tight leading-snug">
                EU Cookie &amp; Privacy Choices
              </h3>
              <span className="text-[11px] text-slate-500 font-medium">
                GDPR &amp; ePrivacy Compliant
              </span>
            </div>
          </div>

          <button
            onClick={handleRejectNonEssential}
            className="p-1 rounded-lg text-slate-400 hover:text-black hover:bg-slate-100 transition"
            title="Dismiss & Reject Non-Essential"
            aria-label="Dismiss cookie notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Informative Body Copy */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          We use strictly necessary cookies to ensure system security, maintain your active session, and remember your regional currency preference. We also use optional analytics cookies to measure and improve our technical delivery platform.
        </p>

        {/* Detailed Preference Drawer */}
        {isCustomizeOpen && (
          <div className="mb-4 pt-3 border-t border-slate-200 space-y-3 text-xs animate-in fade-in duration-200">
            
            {/* Essential Category */}
            <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="space-y-0.5">
                <div className="font-semibold text-black flex items-center gap-1.5">
                  <span>Strictly Necessary</span>
                  <span className="px-1.5 py-0.2 bg-black text-white text-[9px] rounded font-bold uppercase">Always Active</span>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Required for site navigation, security tokens, error boundary logging, and currency conversion caching.
                </p>
              </div>
            </div>

            {/* Analytics Category */}
            <label className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/70 transition">
              <div className="space-y-0.5 select-none pr-2">
                <div className="font-semibold text-black">Performance &amp; Analytics</div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Anonymous metrics on page load times and user journeys to help us optimize system responsiveness.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences(prev => ({ ...prev, analytics: e.target.checked }))}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-black focus:ring-black accent-black cursor-pointer"
              />
            </label>

            {/* Marketing Category */}
            <label className="flex items-start justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100/70 transition">
              <div className="space-y-0.5 select-none pr-2">
                <div className="font-semibold text-black">Campaign Referral &amp; Routing</div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Remembers referral parameters to properly attribute inquiries to the appropriate regional delivery squad.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences(prev => ({ ...prev, marketing: e.target.checked }))}
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-black focus:ring-black accent-black cursor-pointer"
              />
            </label>
          </div>
        )}

        {/* Buttons Action Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1">
          <button
            type="button"
            onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}
            className="text-xs font-semibold text-slate-700 hover:text-black underline underline-offset-2 flex items-center justify-center sm:justify-start gap-1 py-1"
          >
            <span>{isCustomizeOpen ? 'Hide Preferences' : 'Cookie Preferences'}</span>
            {isCustomizeOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <div className="flex items-center gap-2">
            {isCustomizeOpen ? (
              <button
                type="button"
                onClick={handleSavePreferences}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition shadow-sm"
              >
                Save Selected
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="w-full sm:w-auto px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-800 hover:text-black bg-slate-100 hover:bg-slate-200 border border-slate-200 transition"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-black hover:bg-neutral-800 transition shadow-sm"
                >
                  Accept All
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </aside>
  );
}
