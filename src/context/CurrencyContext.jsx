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

// Exchange rates against Kenyan Shilling (KES)
export const EXCHANGE_RATES = {
  KES: 1,
  USD: 130, // 1 USD ≈ 130 KES
  EUR: 142, // 1 EUR ≈ 142 KES
};

export const CURRENCY_SYMBOLS = {
  KES: 'KSh',
  USD: '$',
  EUR: '€',
};

const CurrencyContext = createContext(null);

export function CurrencyProvider({ children }) {
  // Region detection state
  const [countryCode, setCountryCode] = useState('KE');
  const [countryName, setCountryName] = useState('Kenya');
  const [continentCode, setContinentCode] = useState('AF');
  const [isAfrica, setIsAfrica] = useState(true);
  
  // Active currency ('KES', 'USD', 'EUR')
  const [currency, setCurrency] = useState('KES');
  const [isLoading, setIsLoading] = useState(true);
  const [manualOverride, setManualOverride] = useState(false);

  // Detect location on mount
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedPref = localStorage.getItem('haxor_currency_pref');
        if (savedPref) {
          const parsed = JSON.parse(savedPref);
          let prefCurrency = parsed.currency || (parsed.isAfrica ? 'KES' : 'USD');
          if (prefCurrency === 'GBP') prefCurrency = 'USD'; // Migrate legacy GBP to USD
          setCountryCode(parsed.countryCode || 'KE');
          setCountryName(parsed.countryName || 'Kenya');
          setIsAfrica(parsed.isAfrica !== undefined ? parsed.isAfrica : true);
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
          const code = (data.country_code || 'KE').toUpperCase();
          const continent = (data.continent_code || '').toUpperCase();
          const inAfrica = continent === 'AF' || AFRICAN_COUNTRY_CODES.has(code);
          
          setCountryCode(code);
          setCountryName(data.country_name || (inAfrica ? 'Africa Region' : 'International'));
          setContinentCode(continent);
          setIsAfrica(inAfrica);
          
          if (!inAfrica) {
            const europeanCodes = ['DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'IE', 'PT', 'FI', 'GR', 'SE', 'PL', 'CH', 'NO', 'DK', 'GB'];
            if (continent === 'EU' || europeanCodes.includes(code)) {
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

      // Default to Africa / KES
      setCountryCode('KE');
      setCountryName('Kenya');
      setIsAfrica(true);
      setCurrency('KES');
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
          countryCode: newIsAfrica ? 'KE' : 'US',
          countryName: newIsAfrica ? 'Kenya / Africa' : 'International'
        }));
        window.dispatchEvent(new Event('haxor_currency_change'));
      }
    } catch (e) {
      // Ignore storage write errors in private/incognito modes
    }
  };

  // Rule: Outside Africa, service amount multiplies by 2.1 to get international rates (silent)
  const multiplier = isAfrica ? 1 : 2.1;

  const convertPrice = (baseKshAmount) => {
    if (baseKshAmount === null || baseKshAmount === undefined) return 0;
    
    if (typeof baseKshAmount === 'string') {
      const lower = baseKshAmount.toLowerCase();
      if (lower.includes('custom') || lower.includes('free demo') || lower.includes('quotation')) {
        return 0;
      }
      // Robust extraction of numeric amount, handling "Ksh.", "Ksh", commas, and spaces
      const match = baseKshAmount.match(/[\d,]+(\.\d+)?/);
      if (!match) return 0;
      const parsed = parseFloat(match[0].replace(/,/g, ''));
      if (isNaN(parsed)) return 0;
      baseKshAmount = parsed;
    }
    
    if (!baseKshAmount || isNaN(baseKshAmount)) return 0;

    const effectiveKsh = baseKshAmount * multiplier;

    if (currency === 'KES') {
      return effectiveKsh;
    }

    const rate = EXCHANGE_RATES[currency] || EXCHANGE_RATES.USD;
    const rawVal = effectiveKsh / rate;

    if (rawVal < 20) {
      return Math.round(rawVal);
    }
    if (rawVal < 100) {
      return Math.round(rawVal / 5) * 5;
    }
    return Math.round(rawVal / 10) * 10;
  };

  const formatPrice = (baseKshAmount) => {
    if (baseKshAmount === null || baseKshAmount === undefined) {
      return 'Custom Scope';
    }

    if (typeof baseKshAmount === 'string') {
      const lower = baseKshAmount.toLowerCase();
      if (lower.includes('custom')) return 'Custom Scope';
      if (lower.includes('free demo')) return 'Free Demo';
      if (lower.includes('turnkey')) return 'Turnkey Solution';
      if (lower.includes('enterprise solution')) return 'Enterprise Solution';
      if (lower.includes('strategic retainer')) return 'Strategic Retainer';
      if (lower.includes('free')) return 'Free';
    }

    let prefix = '';
    let suffix = '';
    if (typeof baseKshAmount === 'string') {
      if (baseKshAmount.toLowerCase().includes('from')) prefix = 'From ';
      if (baseKshAmount.includes('/mo')) suffix = ' / mo';
      else if (baseKshAmount.includes('/month')) suffix = ' / mo';
      else if (baseKshAmount.includes('/hr')) suffix = ' / hr';
      else if (baseKshAmount.includes('/hour')) suffix = ' / hr';
      else if (baseKshAmount.toLowerCase().includes('/device')) suffix = ' / device';
      else if (baseKshAmount.toLowerCase().includes('per device')) suffix = ' / device';
      else if (baseKshAmount.toLowerCase().includes('per session')) suffix = ' / session';
    }

    const converted = convertPrice(baseKshAmount);
    if (!converted) {
      return typeof baseKshAmount === 'string' ? baseKshAmount : 'Custom Scope';
    }

    const symbol = CURRENCY_SYMBOLS[currency] || '$';
    const formattedNumber = converted.toLocaleString();

    if (currency === 'KES') {
      return `${prefix}${symbol} ${formattedNumber}${suffix}`;
    }
    return `${prefix}${symbol}${formattedNumber}${suffix}`;
  };

  const formatPriceWithNote = (baseKshAmount, originalNote = '') => {
    if (baseKshAmount === 'Custom') return 'Custom Quotation';
    const formatted = formatPrice(baseKshAmount);
    
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
