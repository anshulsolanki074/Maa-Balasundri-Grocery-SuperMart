import React from 'react';
import { Home, Grid, Image, Clock, Navigation } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410";

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-1.5 px-3 shadow-lg">
      <div className="grid grid-cols-5 gap-1 text-center items-center">
        
        <a
          href="#home"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-[#16834A] transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </a>

        <a
          href="#products"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-[#16834A] transition-colors"
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Products</span>
        </a>

        <a
          href="#gallery"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-[#16834A] transition-colors"
        >
          <Image className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Photos</span>
        </a>

        <a
          href="#opening-hours"
          className="flex flex-col items-center justify-center py-1 text-slate-600 hover:text-[#16834A] transition-colors"
        >
          <Clock className="w-5 h-5" />
          <span className="text-[10px] font-medium mt-0.5">Timings</span>
        </a>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#16834A] font-bold"
        >
          <div className="w-6 h-6 rounded-full bg-[#16834A] text-white flex items-center justify-center shadow-xs">
            <Navigation className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold mt-0.5">Directions</span>
        </a>

      </div>
    </div>
  );
};
