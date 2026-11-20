import React, { useState, useMemo } from 'react';
import { Camera, Eye, CheckCircle2, Maximize2 } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'storefront' | 'aisles' | 'products' | 'checkout'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'storefront', label: 'Storefront & Exterior' },
    { id: 'aisles', label: 'Inside Aisles' },
    { id: 'products', label: 'Products & Shelves' },
    { id: 'checkout', label: 'Billing Counter' },
  ];

  const filteredImages = useMemo(() => {
    if (activeTab === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter(img => img.category === activeTab);
  }, [activeTab]);

  const handleOpenLightbox = (imageIndexInFiltered: number) => {
    // Find index in master list
    const selectedImage = filteredImages[imageIndexInFiltered];
    const indexInMaster = GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id);
    setLightboxIndex(indexInMaster !== -1 ? indexInMaster : 0);
  };

  return (
    <>
      <section id="gallery" className="py-16 sm:py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 text-[#16834A] border border-emerald-100">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Store Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
              Store Photo Gallery
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Take a visual tour inside Maa Balasundri Grocery SuperMart. Bright walkways, well-stocked racks, hygienic floors, and a welcoming neighbourhood atmosphere.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  type="button"
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#16834A] text-white shadow-md shadow-emerald-700/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Real Photography Verification Banner */}
          <div className="mb-8 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs font-medium text-emerald-900">
            <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
            <span>All photos displayed are authentic pictures taken inside & outside our actual store location.</span>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xs hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-[4/3] flex flex-col justify-end text-left"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/10 group-hover:from-slate-950/90 transition-all duration-300" />

                {/* Top Badge: Actual Photo Tag */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-slate-800 shadow-xs backdrop-blur-xs flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#16834A]" />
                    <span>{image.categoryLabel}</span>
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/50 group-hover:bg-[#16834A] text-white flex items-center justify-center shadow-xs transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-5 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-base font-bold font-['Poppins'] text-white drop-shadow-sm leading-snug group-hover:text-emerald-200 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed opacity-90">
                    {image.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 pt-1">
                    <Eye className="w-3 h-3" />
                    <span>Click to expand</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        images={GALLERY_IMAGES}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </>
  );
};
