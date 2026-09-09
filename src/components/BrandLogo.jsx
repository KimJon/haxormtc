import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'; // for dark backgrounds like footer

  return (
    <Link to="/" className={`inline-flex items-center shrink-0 group ${className}`}>
      {isLight ? (
        <div className="bg-white px-3 py-1.5 rounded-xl shadow-xs inline-flex items-center transition group-hover:opacity-95">
          <img 
            src="/logo.png" 
            alt="Haxor MTC" 
            className="h-8 sm:h-9 w-auto object-contain" 
          />
        </div>
      ) : (
        <img 
          src="/logo.png" 
          alt="Haxor MTC" 
          className="h-9 sm:h-10 w-auto object-contain transition group-hover:opacity-90" 
        />
      )}
    </Link>
  );
}
