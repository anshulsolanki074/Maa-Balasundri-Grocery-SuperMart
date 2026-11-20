import React, { useState, useEffect } from 'react';
import { ShoppingBasket, Menu, X, MapPin, Sparkles, Navigation } from 'lucide-react';
import { getStoreStatus } from '../utils/storeHours';
import type { StoreStatus } from '../types';

interface HeaderProps {
  onVisitStoreClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onVisitStoreClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 30000); // update status every 30s
    return () => clearInterval(timer);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-bar showing store status & quick timing */}
      <div className="bg-[#0f4f2c] text-white text-xs py-1.5 px-4 sm:px-6 relative z-50 border-b border-emerald-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="hidden xs:inline">{status.isOpen ? 'Open Today:' : 'Store Hours:'}</span>
              <span className="text-emerald-100">8:00 AM – 10:00 PM (All 7 Days)</span>
            </span>
            <span className="hidden md:inline text-emerald-300/40">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-emerald-200/90 text-[11px]">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Pundir Traders • NV Super Mart
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors font-medium"
            >
              <Navigation className="w-3 h-3 text-emerald-300" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-emerald-950/5 py-2.5 sm:py-3 border-b border-emerald-900/10'
            : 'bg-white/90 backdrop-blur-sm py-3.5 sm:py-4 border-b border-emerald-900/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Brand Title */}
            <a
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16834A] rounded-xl p-1"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#16834A] to-[#0e5c33] flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform duration-200">
                <ShoppingBasket className="w-6 h-6 text-white stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg lg:text-xl font-bold font-['Poppins'] tracking-tight text-slate-900 leading-tight">
                    Maa Balasundri
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-[#16834A] border border-emerald-200">
                    SuperMart
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#16834A]">
                    Grocery SuperMart
                  </span>
                  <span className="text-[10px] text-slate-400 hidden xs:inline">• Pundir Traders</span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-[#16834A] hover:bg-emerald-50/80 transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action & Live Status Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#opening-hours"
                className={`hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  status.isOpen
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100'
                    : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
                }`}
                title={status.statusSubtext}
              >
                <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-amber-500'}`} />
                <span>{status.isOpen ? 'Open Now' : 'Closed Now'}</span>
              </a>

              <button
                onClick={onVisitStoreClick}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#16834A] to-[#126b3c] hover:from-[#137441] hover:to-[#0f5b33] text-white text-sm font-semibold shadow-md shadow-emerald-700/25 hover:shadow-lg hover:shadow-emerald-700/35 active:scale-[0.98] transition-all duration-150 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-emerald-200" />
                <span>Visit Our Store</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2.5 rounded-xl text-slate-700 hover:text-[#16834A] hover:bg-emerald-50 border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#16834A]"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div className="p-5">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#16834A] flex items-center justify-center text-white shadow-sm">
                    <ShoppingBasket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm font-['Poppins']">Maa Balasundri</h3>
                    <p className="text-[10px] font-semibold text-[#16834A] tracking-wider uppercase">Grocery SuperMart</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Banner in Mobile Menu */}
              <div
                className={`mt-4 p-3 rounded-xl border flex items-center gap-3 ${
                  status.isOpen ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}
              >
                <div className="relative shrink-0">
                  <div className={`w-3 h-3 rounded-full ${status.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  {status.isOpen && <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />}
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">{status.statusText}</p>
                  <p className="text-[11px] opacity-80 mt-0.5">8:00 AM – 10:00 PM • All 7 Days</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="mt-5 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-medium text-slate-800 hover:text-[#16834A] hover:bg-emerald-50 transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-300 text-sm">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/80 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onVisitStoreClick();
                }}
                className="w-full py-3 rounded-xl bg-[#16834A] hover:bg-[#126b3c] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20"
              >
                <MapPin className="w-4 h-4 text-emerald-200" />
                <span>Visit Our Store</span>
              </button>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 text-slate-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#16834A]" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-slate-500 font-medium">GSTIN: 05GPYPP0225P1Z3</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Pundir Traders • NV Super Mart</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
