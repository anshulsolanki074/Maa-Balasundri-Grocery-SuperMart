import React from 'react';
import { 
  ShoppingBasket, 
  MapPin, 
  Clock, 
  Navigation
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/categoriesData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsListingUrl = "https://www.google.com/maps/place/Maa+Balasundri+Grocery+SuperMart/@30.4482998,77.8588079,330m/data=!3m1!1e3!4m6!3m5!1s0x390f2d004beb9fcb:0x1562094cd885c25e!8m2!3d30.448565!4d77.86041";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410";

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Our Store', href: '#about' },
    { label: 'Product Categories', href: '#products' },
    { label: 'Store Photo Gallery', href: '#gallery' },
    { label: 'Customer Reviews', href: '#reviews' },
    { label: 'Opening Hours', href: '#opening-hours' },
    { label: 'Store Location', href: '#location' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-12 border-t border-slate-900 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & About (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#16834A] to-[#0d552e] flex items-center justify-center text-white shadow-lg shadow-emerald-950/30">
                <ShoppingBasket className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-['Poppins'] text-white tracking-tight leading-tight">
                  Maa Balasundri
                </h3>
                <p className="text-xs font-bold text-[#4ade80] tracking-wider uppercase">
                  Grocery SuperMart
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted neighbourhood grocery destination. Bringing everyday essentials, genuine FMCG brands, and fresh household grocery products together to make family shopping convenient and enjoyable.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>Enterprise:</span>
                <span className="font-semibold text-slate-200">Pundir Traders / NV Super Mart</span>
              </div>
              <div className="flex items-center justify-between text-slate-400">
                <span>GSTIN:</span>
                <span className="font-mono font-semibold text-emerald-400">05GPYPP0225P1Z3</span>
              </div>
            </div>

            {/* Social profiles note per prompt requirement */}
            <div className="pt-1">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Official Social Profiles
              </span>
              <p className="text-xs text-slate-400 italic">
                Official social media profiles will be linked as soon as our verified pages launch.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-['Poppins'] text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-['Poppins'] text-white uppercase tracking-wider">
              Top Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCT_CATEGORIES.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    className="hover:text-emerald-400 transition-colors inline-block py-0.5 text-slate-400"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#products" className="text-emerald-400 font-semibold hover:underline">
                  + All 12 Categories →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Store Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold font-['Poppins'] text-white uppercase tracking-wider">
              Store Timings & Map
            </h4>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>Open All 7 Days</span>
              </div>
              <p className="text-slate-300 font-medium">Monday – Sunday</p>
              <p className="text-amber-400 font-mono text-sm font-bold">8:00 AM – 10:00 PM</p>
              <p className="text-[11px] text-slate-400">Non-stop everyday service</p>
            </div>

            <div className="space-y-2">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#16834A] hover:bg-[#126b3c] text-white font-semibold text-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-200" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={googleMapsListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Pin */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Maa Balasundri Grocery SuperMart. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="font-mono">Lat: 30.448565 • Long: 77.860410</span>
            <span>•</span>
            <span className="text-slate-400">Crafted for local excellence</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
