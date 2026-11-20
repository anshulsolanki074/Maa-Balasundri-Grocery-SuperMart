import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Compass, 
  Car, 
  Clock, 
  ShieldCheck
} from 'lucide-react';

interface StoreLocationProps {
  onCopyCoordinates?: () => void;
}

export const StoreLocation: React.FC<StoreLocationProps> = ({ onCopyCoordinates }) => {
  const [copied, setCopied] = useState(false);

  const coordinates = {
    lat: "30.448565",
    lng: "77.860410",
    display: "30.448565, 77.860410"
  };

  const googleMapsListingUrl = "https://www.google.com/maps/place/Maa+Balasundri+Grocery+SuperMart/@30.4482998,77.8588079,330m/data=!3m1!1e3!4m6!3m5!1s0x390f2d004beb9fcb:0x1562094cd885c25e!8m2!3d30.448565!4d77.86041";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
  const embedMapUrl = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=en&z=17&output=embed`;

  const handleCopy = () => {
    navigator.clipboard.writeText(coordinates.display);
    setCopied(true);
    if (onCopyCoordinates) onCopyCoordinates();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FDFBF7] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 text-[#16834A]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Location & Directions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Find Maa Balasundri Grocery SuperMart
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Conveniently situated along the main road with clear roadside visibility, ample parking for cars and two-wheelers, and smooth accessibility.
          </p>
        </div>

        {/* Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm text-left">
            <div className="space-y-6">
              
              {/* Store Title & Designation */}
              <div className="space-y-1 pb-5 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#16834A]">
                  Verified Shop Location
                </span>
                <h3 className="text-2xl font-bold font-['Poppins'] text-slate-900 leading-tight">
                  Maa Balasundri Grocery SuperMart
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Pundir Traders • NV Super Mart
                </p>
              </div>

              {/* Exact GPS Coordinates Pill */}
              <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold uppercase tracking-wider">Exact GPS Coordinates</span>
                  <span className="font-mono text-emerald-700">WGS84</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm sm:text-base font-bold text-slate-800">
                    {coordinates.display}
                  </span>
                  <button
                    onClick={handleCopy}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:border-emerald-500 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
                    title="Copy coordinates to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Key Features for Visitors */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#16834A] flex items-center justify-center shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Spacious Front Parking</h4>
                    <p className="text-xs text-slate-600">Hassle-free parking right in front of the supermarket entrance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Open 8:00 AM – 10:00 PM Daily</h4>
                    <p className="text-xs text-slate-600">Open non-stop all 7 days of the week, including Sundays.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#16834A] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">GSTIN Registered Business</h4>
                    <p className="text-xs font-mono text-slate-600">GSTIN: 05GPYPP0225P1Z3</p>
                  </div>
                </div>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="pt-4 space-y-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#16834A] to-[#126b3c] hover:from-[#137441] hover:to-[#0f5b33] text-white font-bold text-sm shadow-md shadow-emerald-700/25 active:scale-[0.98] transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-200" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70 ml-1" />
              </a>

              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold text-xs shadow-xs transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#16834A]" />
                <span>Open in Google Maps App / Web</span>
              </a>
            </div>

          </div>

          {/* Right Interactive Embedded Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white min-h-[420px] lg:min-h-[500px] flex flex-col relative group">
            
            {/* Embedded Iframe Map */}
            <iframe
              title="Maa Balasundri Grocery SuperMart Google Map Location"
              src={embedMapUrl}
              className="w-full flex-1 border-0 rounded-3xl"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Quick Map Floating Controls in Corner */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold shadow-md hover:bg-emerald-50 hover:text-[#16834A] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#16834A]" />
                <span>Directions</span>
              </a>
            </div>

            {/* Bottom Map Bar */}
            <div className="p-3 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 px-5">
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#16834A]" />
                <span>Latitude: {coordinates.lat} • Longitude: {coordinates.lng}</span>
              </span>
              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#16834A] font-semibold hover:underline flex items-center gap-1"
              >
                <span>View Full Google Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
