import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import type { GalleryImage } from '../types';

interface LightboxModalProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNavigate
}) => {
  const currentImage = currentIndex !== null ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(nextIndex);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIndex);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, handleNext, handlePrev]);

  if (currentIndex === null || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all select-none animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#16834A] text-white flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Actual Store Photo</span>
          </span>
          <span className="text-xs text-slate-300 font-medium">
            Photo {currentIndex + 1} of {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-20 focus:outline-none focus:ring-2 focus:ring-white active:scale-95"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-20 focus:outline-none focus:ring-2 focus:ring-white active:scale-95"
        aria-label="Next photo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Main Image Viewport */}
      <div className="relative max-w-5xl max-h-[75vh] sm:max-h-[82vh] w-full px-4 sm:px-16 flex flex-col items-center justify-center">
        <img
          key={currentImage.id}
          src={currentImage.src}
          alt={currentImage.alt}
          className="max-h-[65vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
        />

        {/* Caption Card */}
        <div className="mt-4 max-w-2xl w-full bg-black/60 backdrop-blur-md p-4 rounded-2xl text-left border border-white/10">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-base sm:text-lg font-bold text-white font-['Poppins']">
              {currentImage.title}
            </h4>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-white/20 text-emerald-300">
              {currentImage.categoryLabel}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
            {currentImage.description}
          </p>
        </div>
      </div>

      {/* Bottom Thumbnail Strip on larger screens */}
      <div className="hidden md:flex absolute bottom-3 inset-x-0 justify-center gap-2 px-4 overflow-x-auto py-2">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => onNavigate(idx)}
            className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentIndex
                ? 'border-emerald-400 scale-110 shadow-md'
                : 'border-transparent opacity-50 hover:opacity-100'
            }`}
          >
            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

    </div>
  );
};
