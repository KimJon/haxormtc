import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import SoftwarePage from './pages/SoftwarePage';
import PortfolioPage from './pages/PortfolioPage';
import CalculatorPage from './pages/CalculatorPage';
import WhyUsPage from './pages/WhyUsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GoogleFamilyLinkPage from './pages/GoogleFamilyLinkPage';
import BusinessKitsPage from './pages/BusinessKitsPage';
import AgencyPartnersPage from './pages/AgencyPartnersPage';
import CrmImplementationPage from './pages/CrmImplementationPage';
import BusinessAutomationPage from './pages/BusinessAutomationPage';
import IntegrationsPage from './pages/IntegrationsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import ServiceDiscoveryToast from './components/ServiceDiscoveryToast';

import { CurrencyProvider } from './context/CurrencyContext';

// Safe Error Boundary to prevent blank white screens if any subcomponent errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Haxor MTC Runtime Exception:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif', textAlign: 'center', backgroundColor: '#ffffff', color: '#0f172a' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Haxor MTC</h1>
          <p style={{ color: '#64748b', fontSize: '15px', maxWidth: '460px', marginBottom: '16px' }}>
            The application encountered a display issue. Details below:
          </p>
          <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '16px', maxWidth: '700px', width: '100%', textAlign: 'left', marginBottom: '20px', overflowX: 'auto' }}>
            <p style={{ color: '#b91c1c', fontWeight: 'bold', fontSize: '14px', margin: '0 0 8px 0' }}>
              {this.state.error?.name || 'Error'}: {this.state.error?.message || 'Unknown Exception'}
            </p>
            {this.state.error?.stack && (
              <pre style={{ fontSize: '11px', color: '#7f1d1d', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: 'monospace', maxHeight: '180px', overflowY: 'auto' }}>
                {this.state.error.stack}
              </pre>
            )}
          </div>
          <button
            onClick={() => window.location.reload()}
            style={{ backgroundColor: '#00cdfa', color: '#ffffff', fontWeight: 600, padding: '10px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
          >
            Reload Website
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Helper component that scrolls window to top upon route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <CurrencyProvider>
      <ScrollToTop />
      <ScrollToTopButton />
      <ServiceDiscoveryToast />
      <Routes>
        {/* Main Universal Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Strategic B2B & Agency Partner Pages */}
        <Route path="/agency-partners" element={<AgencyPartnersPage />} />
        <Route path="/services/crm-implementation" element={<CrmImplementationPage />} />
        <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
        <Route path="/services/integrations" element={<IntegrationsPage />} />

        {/* Dedicated Menu Destination Pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/software" element={<SoftwarePage />} />
        <Route path="/kits" element={<BusinessKitsPage />} />
        <Route path="/solutions/kits" element={<BusinessKitsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/work" element={<PortfolioPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Dedicated Ad-Conversion Landing Page for Google Family Link */}
        <Route path="/services/google-family-link" element={<GoogleFamilyLinkPage />} />
        <Route path="/education/family-link" element={<GoogleFamilyLinkPage />} />
        <Route path="/education/google-family-link" element={<GoogleFamilyLinkPage />} />

        {/* Dedicated Ad-Conversion Landing Pages for Services */}
        <Route path="/services/:slug" element={<LandingPage />} />

        {/* Dedicated Ad-Conversion Landing Pages for Software Products */}
        <Route path="/software/:slug" element={<LandingPage />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </CurrencyProvider>
    </ErrorBoundary>
  );
}

export default App;
