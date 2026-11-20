import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, ArrowUpRight, Sparkles, X, Store } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/categoriesData';
import type { ProductCategory } from '../types';
import { CategoryDetailModal } from './CategoryDetailModal';

export const ProductCategories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return PRODUCT_CATEGORIES;
    const query = searchQuery.toLowerCase();
    return PRODUCT_CATEGORIES.filter(cat => 
      cat.name.toLowerCase().includes(query) ||
      (cat.hindiName && cat.hindiName.toLowerCase().includes(query)) ||
      cat.description.toLowerCase().includes(query) ||
      cat.itemCountDesc.toLowerCase().includes(query) ||
      cat.popularItems.some(item => item.toLowerCase().includes(query)) ||
      (cat.featuredBrands && cat.featuredBrands.some(brand => brand.toLowerCase().includes(query)))
    );
  }, [searchQuery]);

  return (
    <>
      <section id="products" className="py-16 sm:py-24 bg-[#FDFBF7] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 text-[#16834A]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full In-Store Range</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
              Product Categories
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our wide assortment of daily groceries, fresh produce, authentic staples, and trusted packaged essentials stocked for your household.
            </p>

            {/* Quick Filter / Search Input */}
            <div className="pt-2 max-w-md mx-auto">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search categories (e.g. Rice, Dal, Fruits, Dettol)..."
                  className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-slate-200 focus:border-[#16834A] focus:ring-2 focus:ring-emerald-500/20 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition-all outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-xs text-slate-500 mt-2 text-left px-1">
                  Found {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} matching "{searchQuery}"
                </p>
              )}
            </div>
          </div>

          {/* Categories Grid (12 Categories) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 cursor-pointer flex flex-col text-left hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCategory(category);
                  }
                }}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  {category.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 text-slate-800 backdrop-blur-xs shadow-xs">
                        {category.badge}
                      </span>
                    </div>
                  )}

                  {/* Top-Right Arrow Micro-interaction */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 group-hover:bg-[#16834A] text-slate-700 group-hover:text-white flex items-center justify-center shadow-xs transition-colors duration-200">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </div>

                  {/* Category Title overlay on bottom of image for punchy contrast */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-bold font-['Poppins'] text-white drop-shadow-sm leading-tight group-hover:text-emerald-200 transition-colors">
                      {category.name}
                    </h3>
                    {category.hindiName && (
                      <p className="text-xs text-emerald-100 font-medium opacity-90">
                        {category.hindiName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-[#16834A] group-hover:underline flex items-center gap-1">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>View Items & Brands</span>
                    </span>
                    <span className="text-[11px] text-slate-400">In Store</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty search state */}
          {filteredCategories.length === 0 && (
            <div className="py-12 px-4 text-center bg-white rounded-3xl border border-slate-200 max-w-md mx-auto">
              <Store className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">No categories matching "{searchQuery}"</h3>
              <p className="text-xs text-slate-500 mt-1">We likely have your item stocked in our store. Visit us or clear your search to explore all 12 categories.</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 rounded-xl bg-[#16834A] text-white text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Under-category Banner */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-[#126b3c] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left space-y-1">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Looking for a specific brand or item?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Poppins']">
                Visit Maa Balasundri Grocery SuperMart
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
                Our shelves are refreshed every single day with popular brands like Parle, ITC, Fortune, Amul, Nestlé, Surf Excel, and Dettol.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#16834A] font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Get Store Directions
            </a>
          </div>

        </div>
      </section>

      {/* Category Detail Modal */}
      <CategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </>
  );
};
