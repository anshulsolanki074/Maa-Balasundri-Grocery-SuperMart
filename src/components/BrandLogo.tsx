import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'dark',
  showSubtitle = true,
  className = '',
}) => {
  const isLight = variant === 'light';

  // Icon sizing
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const titleSizes = {
    sm: 'text-sm font-bold',
    md: 'text-base sm:text-lg font-bold',
    lg: 'text-xl sm:text-2xl font-bold',
  };

  const subSizes = {
    sm: 'text-[9px] tracking-wider',
    md: 'text-[10px] sm:text-[11px] tracking-wider',
    lg: 'text-xs tracking-widest',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Custom Premium Supermarket Emblem */}
      <div
        className={`${iconSizes[size]} relative shrink-0 rounded-2xl bg-gradient-to-br from-[#16834A] via-[#126b3c] to-[#0a4827] p-2 flex items-center justify-center shadow-md shadow-emerald-950/20 ring-2 ring-emerald-500/20 group-hover:scale-105 transition-transform duration-200`}
      >
        {/* Modern Custom Shopping Cart & Grocery Leaf Emblem SVG */}
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Grocery item shapes inside cart */}
          <path
            d="M17 11C17 9.34315 18.3431 8 20 8C21.6569 8 23 9.34315 23 11V16H17V11Z"
            fill="#F59E0B"
          />
          {/* Fresh Organic Leaf Accent */}
          <path
            d="M24 9C27 9 29 11 29 14C26 14 24 12 24 9Z"
            fill="#86EFAC"
          />
          <path
            d="M16 11C13.5 11 12 12.5 12 15C14.5 15 16 13.5 16 11Z"
            fill="#4ADE80"
          />
          {/* Shopping Cart Body */}
          <path
            d="M9 14H31L28.5 24H12.5L9 14Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Cart Grid Lines */}
          <line
            x1="15"
            y1="16"
            x2="15"
            y2="22"
            stroke="#16834A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="20"
            y1="16"
            x2="20"
            y2="22"
            stroke="#16834A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <line
            x1="25"
            y1="16"
            x2="25"
            y2="22"
            stroke="#16834A"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Handle */}
          <path
            d="M6 10H8.5L9.2 13"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cart Wheels with Gold Hubs */}
          <circle cx="14" cy="28" r="2.8" fill="white" />
          <circle cx="14" cy="28" r="1.3" fill="#F59E0B" />
          <circle cx="27" cy="28" r="2.8" fill="white" />
          <circle cx="27" cy="28" r="1.3" fill="#F59E0B" />
        </svg>

        {/* Golden corner sparkle indicator */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`${titleSizes[size]} font-['Poppins'] tracking-tight ${
              isLight ? 'text-white' : 'text-slate-900'
            }`}
          >
            Maa Balasundri
          </span>
          <span
            className={`hidden xs:inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide border ${
              isLight
                ? 'bg-emerald-900/60 text-emerald-300 border-emerald-700/50'
                : 'bg-emerald-100/80 text-[#16834A] border-emerald-200'
            }`}
          >
            SuperMart
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1 mt-1">
            <span
              className={`${subSizes[size]} font-bold uppercase ${
                isLight ? 'text-emerald-400' : 'text-[#16834A]'
              }`}
            >
              Grocery SuperMart
            </span>
            <span
              className={`text-[9px] hidden sm:inline ${
                isLight ? 'text-slate-400' : 'text-slate-400'
              }`}
            >
              • Pundir Traders
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
