import React, { useEffect } from 'react';
import { X, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-8">
        {/* Modal Header with store interior banner */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
          <img
            src="/images/store/store-interior-lighting.jpg"
            alt="Interior of Maa Balasundri Grocery SuperMart"
            className="w-full h-full object-cover object-center brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-left">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#16834A] text-white">
              Official Store Profile
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] text-white mt-1">
              About Maa Balasundri Grocery SuperMart
            </h3>
            <p className="text-xs text-slate-300">Pundir Traders • NV Super Mart</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 text-left max-h-[60vh] overflow-y-auto">
          <div>
            <h4 className="text-base font-bold text-slate-900 font-['Poppins'] mb-2">
              Our Neighbourhood Promise
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maa Balasundri Grocery SuperMart was established with a simple, clear vision: to give local families a clean, modern, fully-stocked supermarket experience right in their neighbourhood. No need to travel far or compromise on freshness — we carry everything from daily milk and bread to fresh flour, branded cooking oils, packaged snacks, and personal care essentials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <div className="flex items-center gap-2 text-[#16834A] font-semibold text-sm mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Genuine Branded Goods</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All products are sourced directly from trusted FMCG distributors including Parle, Britannia, ITC, Nestlé, Hindustan Unilever, Fortune, and Dettol.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Clean & Well-Organized</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bright LED lighting, wide shopping walkways, and clearly sorted shelves make finding your grocery items effortless and comfortable.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-slate-900 font-['Poppins'] mb-2">
              Store Timings & Business Information
            </h4>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2 text-xs text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">Store Name:</span>
                <span className="font-semibold text-slate-900">Maa Balasundri Grocery SuperMart</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">Operated By:</span>
                <span className="font-semibold text-slate-900">Pundir Traders / NV Super Mart</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">GSTIN Registered:</span>
                <span className="font-mono font-semibold text-slate-900">05GPYPP0225P1Z3</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                <span className="font-medium text-slate-500">Weekly Schedule:</span>
                <span className="font-semibold text-[#16834A]">Open All 7 Days (8:00 AM – 10:00 PM)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-medium text-slate-500">Payment Modes:</span>
                <span className="font-semibold text-slate-900">Cash, UPI (PhonePe, Google Pay, Paytm)</span>
              </div>
            </div>
          </div>

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
