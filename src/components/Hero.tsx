import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Navigation, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Store
} from 'lucide-react';
import { getStoreStatus } from '../utils/storeHours';
import type { StoreStatus } from '../types';

interface HeroProps {
  onExploreClick: () => void;
  onOpenGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenGallery }) => {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative pt-6 pb-16 sm:pb-24 lg:pt-12 lg:pb-28 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-emerald-100/40 via-emerald-50/20 to-transparent -z-10 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-60 -left-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Trust Badges & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Store Status Pill & Neighbourhood Tag */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-white/90 border border-emerald-200/80 shadow-sm backdrop-blur-sm">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                status.isOpen
                  ? 'bg-emerald-600 text-white'
                  : 'bg-amber-600 text-white'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {status.isOpen ? 'Open Now' : 'Closed Now'}
              </span>
              <span className="text-xs font-medium text-slate-700">
                {status.isOpen ? '8:00 AM – 10:00 PM • Visit Us Today!' : 'Opens 8:00 AM • Open All 7 Days'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#16834A] block">
                Maa Balasundri Grocery SuperMart
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight leading-[1.12]">
                Your Everyday <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16834A] to-[#0d6937]">Grocery Needs</span>, All in One Place!
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              Freshness, Quality and Everyday Essentials – Everything Your Family Needs Under One Roof.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#16834A] to-[#126b3c] hover:from-[#137441] hover:to-[#0f5b33] text-white text-base font-semibold shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-700/35 active:scale-[0.98] transition-all duration-150 cursor-pointer group"
              >
                <span>Explore Our Store</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50/50 border-2 border-emerald-600/30 hover:border-emerald-600 text-slate-800 hover:text-[#16834A] text-base font-semibold shadow-sm transition-all duration-150 active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#16834A]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* 3 Small Trust Indicators */}
            <div className="pt-4 border-t border-slate-200/80">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Why Neighbours Choose Us
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* 1. Quality Products */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#16834A] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Quality Products</h4>
                    <p className="text-xs text-slate-500">100% genuine brands</p>
                  </div>
                </div>

                {/* 2. Everyday Essentials */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Everyday Essentials</h4>
                    <p className="text-xs text-slate-500">All 12+ categories</p>
                  </div>
                </div>

                {/* 3. Friendly Service */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-slate-200/70 shadow-xs hover:border-emerald-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#16834A] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">Friendly Service</h4>
                    <p className="text-xs text-slate-500">Warm neighbourhood care</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Photography Card & Real Store Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Supermarket Photography Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/15 border-4 border-white bg-slate-900 aspect-[4/5] group">
                <img
                  src="/images/store/storefront-entrance.jpg"
                  alt="Maa Balasundri Grocery SuperMart illuminated entrance and shopfront"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/10" />

                {/* Top Badge: Actual Photo Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16834A]" />
                  <span>Real Store Photography</span>
                </div>

                {/* Top Right: Full screen preview pill */}
                <button
                  onClick={onOpenGallery}
                  type="button"
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-md transition-colors"
                  title="View full gallery"
                >
                  <Store className="w-4 h-4" />
                </button>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white text-left space-y-2">
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-[#16834A] text-white">
                    Pundir Traders • NV Super Mart
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] leading-tight text-white drop-shadow-sm">
                    Maa Balasundri Grocery Store
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                    Modern supermarket aisles with clean floors, full variety of food & household goods, and dedicated parking.
                  </p>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-300 font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 8:00 AM – 10:00 PM Daily
                    </span>
                    <button
                      onClick={onOpenGallery}
                      className="text-xs text-white font-semibold underline underline-offset-4 hover:text-emerald-300 flex items-center gap-0.5"
                    >
                      <span>15 Shop Photos</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Bottom Card: Secondary real photo thumbnail */}
              <div 
                onClick={onOpenGallery}
                className="cursor-pointer absolute -bottom-6 -left-6 sm:-left-8 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs hover:scale-105 transition-transform duration-200"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                  <img
                    src="/images/store/store-aisles-center.jpg"
                    alt="Inside aisle of Maa Balasundri SuperMart"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left pr-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#16834A]">Inside View</p>
                  <p className="text-xs font-bold text-slate-800 leading-tight">Organized Aisles</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Click to view 15+ shop photos</p>
                </div>
              </div>

              {/* Floating Top-Right Mini Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900 px-3.5 py-2 rounded-2xl shadow-lg font-bold text-xs items-center gap-1.5 border-2 border-white">
                <Sparkles className="w-4 h-4 text-slate-900" />
                <span>Open 7 Days a Week</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
