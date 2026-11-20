import React, { useEffect } from 'react';
import { X, CheckCircle2, ShoppingBag, Sparkles, Navigation } from 'lucide-react';
import type { ProductCategory } from '../types';

interface CategoryDetailModalProps {
  category: ProductCategory | null;
  onClose: () => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-8">
        
        {/* Category Visual Header */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-left">
            {category.badge && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#16834A] text-white">
                {category.badge}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-white mt-1">
              {category.name} {category.hindiName && <span className="text-base font-normal text-emerald-200">({category.hindiName})</span>}
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">{category.itemCountDesc}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-5 text-left max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Category Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Popular Items List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-[#16834A]" />
              <span>Available in Store</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.popularItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 text-xs font-medium text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Brands */}
          {category.featuredBrands && category.featuredBrands.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Featured Brands Stocked</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.featuredBrands.map((brand, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#16834A] border border-emerald-200/60"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Availability Note */}
          <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
            <span className="font-semibold">In-store availability:</span> Stock replenished daily. Walk into Maa Balasundri Grocery SuperMart to explore all package sizes and varieties.
          </div>

          {/* Footer Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors"
            >
              Close
            </button>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#16834A] hover:bg-[#126b3c] text-white text-sm font-semibold shadow-md shadow-emerald-700/20 transition-colors"
            >
              <Navigation className="w-4 h-4 text-emerald-200" />
              <span>Get Directions to Store</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
