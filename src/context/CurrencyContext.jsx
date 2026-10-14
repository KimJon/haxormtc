import React, { createContext, useContext, useState, useEffect } from 'react';

// List of ISO 3166-1 alpha-2 codes for African countries
const AFRICAN_COUNTRY_CODES = new Set([
  'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CV', 'CM', 'CF', 'TD',
  'KM', 'CD', 'CG', 'CI', 'DJ', 'EG', 'GQ', 'ER', 'SZ', 'ET',
  'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG',
  'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW',
  'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'TZ', 'TG',
  'TN', 'UG', 'ZM', 'ZW'
]);

// Multi-currency exchange rates
export const EXCHANGE_RATES = {
  KES: 1,
  USD: 130, // 1 USD ≈ 130 KES
  GBP: 168, // 1 GBP ≈ 168 KES (UK)
  EUR: 142, // 1 EUR ≈ 142 KES (Europe)
  AUD: 86,  // 1 AUD ≈ 86 KES (Australia)
};

export const CURRENCY_SYMBOLS = {
  KES: 'KSh',
  USD: '$',
  GBP: '£',
  EUR: '€',
  AUD: 'A$',
};

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  // Region detection state - default to International / USD
  const [countryCode, setCountryCode] = useState('US');
  const [countryName, setCountryName] = useState('International');
  const [continentCode, setContinentCode] = useState('NA');
  const [isAfrica, setIsAfrica] = useState(false);
  
  // Active currency ('USD', 'GBP', 'EUR', 'AUD', 'KES')
  const [currency, setCurrency] = useState('USD');
  const [isLoading, setIsLoading] = useState(true);
  const [manualOverride, setManualOverride] = useState(false);

  // Detect location on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedPref = localStorage.getItem('haxor_currency_pref');
        if (savedPref) {
          const parsed = JSON.parse(savedPref);
          let prefCurrency = parsed.currency || 'USD';
          setCountryCode(parsed.countryCode || 'US');
          setCountryName(parsed.countryName || 'International');
          setIsAfrica(parsed.isAfrica !== undefined ? parsed.isAfrica : false);
          setCurrency(prefCurrency);
          setManualOverride(true);
          setIsLoading(false);
          return;
        }
      }
    } catch (e) {
      // Ignore storage errors in private/incognito modes
    }

    let controller = new AbortController();
    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/', { 
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          const data = await res.json();
          const code = (data.country_code || 'US').toUpperCase();
          const continent = (data.continent_code || '').toUpperCase();
          const inAfrica = continent === 'AF' || AFRICAN_COUNTRY_CODES.has(code);
          
          setCountryCode(code);
          setCountryName(data.country_name || (inAfrica ? 'Africa Region' : 'International'));
          setContinentCode(continent);
          setIsAfrica(inAfrica);
          
          if (!inAfrica) {
            const eurozoneCodes = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'PT', 'FI', 'GR', 'SE', 'PL', 'CH', 'NO', 'DK'];
            const apacCodes = ['AU', 'NZ'];
            if (code === 'GB') {
              setCurrency('GBP');
            } else if (apacCodes.includes(code)) {
              setCurrency('AUD');
            } else if (continent === 'EU' || eurozoneCodes.includes(code)) {
              setCurrency('EUR');
            } else {
              setCurrency('USD');
            }
          } else {
            setCurrency('KES');
          }
          setIsLoading(false);
          return;
        }
      } catch (err) {
        // Fail silently
      }

      // Default to International / USD
      setCountryCode('US');
      setCountryName('International');
      setIsAfrica(false);
      setCurrency('USD');
      setIsLoading(false);
    };

    detectLocation();

    return () => controller.abort();
  }, []);

  const updateCurrency = (newCurrency, forceAfricaState = null) => {
    setCurrency(newCurrency);
    let newIsAfrica = isAfrica;
    if (forceAfricaState !== null) {
      newIsAfrica = forceAfricaState;
      setIsAfrica(forceAfricaState);
    } else {
      newIsAfrica = newCurrency === 'KES';
      setIsAfrica(newIsAfrica);
    }

    setManualOverride(true);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('haxor_currency_pref', JSON.stringify({
          currency: newCurrency,
          isAfrica: newIsAfrica,
          countryCode: newIsAfrica ? 'AF' : 'US',
          countryName: newIsAfrica ? 'Africa Region' : 'International'
        }));
        window.dispatchEvent(new Event('haxor_currency_change'));
      }
    } catch (e) {
      // Ignore storage write errors in private/incognito modes
    }
  };

  // Rule: Outside Africa, service amount multiplies by 2.1 to get international rates (silent)
  const multiplier = isAfrica ? 1 : 2.1;

  const convertPrice = (baseAmount) => {
    if (baseAmount === null || baseAmount === undefined) return 0;
    
    if (typeof baseAmount === 'string') {
      const lower = baseAmount.toLowerCase();
      if (lower.includes('custom') || lower.includes('free demo') || lower.includes('quotation')) {
        return 0;
      }
      // Robust extraction of numeric amount, handling currency symbols, commas, and spaces
      const match = baseAmount.match(/[\d,]+(\.\d+)?/);
      if (!match) return 0;
      const parsed = parseFloat(match[0].replace(/,/g, ''));
      if (isNaN(parsed)) return 0;
      baseAmount = parsed;
    }
    
    if (!baseAmount || isNaN(baseAmount)) return 0;

    const effectiveAmount = baseAmount * multiplier;

    if (currency === 'KES') {
      return effectiveAmount;
    }

    const rate = EXCHANGE_RATES[currency] || EXCHANGE_RATES.USD;
    const rawVal = effectiveAmount / rate;

    if (rawVal < 20) {
      return Math.round(rawVal);
    }
    if (rawVal < 100) {
      return Math.round(rawVal / 5) * 5;
    }
    return Math.round(rawVal / 10) * 10;
  };

  const formatPrice = (baseAmount) => {
    if (baseAmount === null || baseAmount === undefined) {
      return 'Custom Scope';
    }

    if (typeof baseAmount === 'string') {
      const lower = baseAmount.toLowerCase();
      if (lower.includes('custom')) return 'Custom Scope';
      if (lower.includes('free demo')) return 'Free Demo';
      if (lower.includes('turnkey')) return 'Turnkey Solution';
      if (lower.includes('enterprise solution')) return 'Enterprise Solution';
      if (lower.includes('strategic retainer')) return 'Strategic Retainer';
      if (lower.includes('free')) return 'Free';
    }

    let prefix = '';
    let suffix = '';
    if (typeof baseAmount === 'string') {
      if (baseAmount.toLowerCase().includes('from')) prefix = 'From ';
      if (baseAmount.includes('/mo')) suffix = ' / mo';
      else if (baseAmount.includes('/month')) suffix = ' / mo';
      else if (baseAmount.includes('/hr')) suffix = ' / hr';
      else if (baseAmount.includes('/hour')) suffix = ' / hr';
      else if (baseAmount.toLowerCase().includes('/device')) suffix = ' / device';
      else if (baseAmount.toLowerCase().includes('per device')) suffix = ' / device';
      else if (baseAmount.toLowerCase().includes('per session')) suffix = ' / session';
    }

    const converted = convertPrice(baseAmount);
    if (!converted) {
      return typeof baseAmount === 'string' ? baseAmount : 'Custom Scope';
    }

    const symbol = CURRENCY_SYMBOLS[currency] || '$';
    const formattedNumber = converted.toLocaleString();

    if (currency === 'KES') {
      return `${prefix}${symbol} ${formattedNumber}${suffix}`;
    }
    return `${prefix}${symbol}${formattedNumber}${suffix}`;
  };

  const formatPriceWithNote = (baseAmount, originalNote = '') => {
    if (baseAmount === 'Custom') return 'Custom Quotation';
    const formatted = formatPrice(baseAmount);
    
    if (isAfrica) {
      return `${formatted} ${originalNote}`.trim();
    }
    const taxNote = originalNote.includes('VAT') ? '+ Tax' : originalNote;
    return `${formatted} ${taxNote}`.trim();
  };

  return (
    <CurrencyContext.Provider value={{
      countryCode,
      countryName,
      continentCode,
      isAfrica,
      currency,
      currencySymbol: CURRENCY_SYMBOLS[currency] || '$',
      multiplier,
      isLoading,
      manualOverride,
      convertPrice,
      formatPrice,
      formatPriceWithNote,
      updateCurrency,
      setIsAfrica: (val) => updateCurrency(val ? 'KES' : 'USD', val),
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
