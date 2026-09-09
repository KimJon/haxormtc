import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * SCROLL TO TOP / GO UP BUTTON COMPONENT
 * =====================================
 * Appears smoothly when the user scrolls down 300px on any page.
 * Thumb-friendly, positioned to avoid overlapping with MobileBottomBar
 * and Desktop FloatingWhatsApp buttons.
 */
export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed z-40 p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-xl hover:shadow-cyan-500/20 border border-slate-700/80 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-cyan bottom-20 right-4 sm:bottom-24 sm:right-7"
    >
      <ArrowUp className="w-4 h-4 text-brand-cyan group-hover:text-white transition-colors" />
    </button>
  );
}
