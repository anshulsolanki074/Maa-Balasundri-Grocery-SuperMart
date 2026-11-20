import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Store
} from 'lucide-react';
import { AboutModal } from './AboutModal';

interface AboutProps {
  onOpenGallery: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenGallery }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const highlights = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Branded Stock',
      description: 'Sourced strictly through authorized FMCG distributor networks ensuring genuine product freshness and valid expiry dates.'
    },
    {
      icon: Sparkles,
      title: 'Hygienic & Organised Aisles',
      description: 'Clean tiled floors, bright ceiling illumination, and logically arranged shelving for quick, hassle-free basket shopping.'
    },
    {
      icon: Store,
      title: 'Everything Under One Roof',
      description: 'From daily milk and dairy to pantry grains, packaged snacks, beverages, cleaning items, and personal care essentials.'
    },
    {
      icon: HeartHandshake,
      title: 'Friendly Neighbourhood Assistance',
      description: 'Personalized local hospitality, polite staff, and swift billing counter service with transparent digital UPI options.'
    }
  ];

  return (
    <>
      <section id="about" className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Visual Store Interior Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                {/* Main Real Store Interior Photography */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[4/5] bg-slate-900 group">
                  <img
                    src="/images/store/store-interior-lighting.jpg"
                    alt="Interior of Maa Balasundri Grocery SuperMart with bright lighting and yellow racks"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                  {/* Real Photo Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-slate-800 text-xs font-semibold shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16834A]" />
                    <span>Real Store Interior</span>
                  </div>

                  {/* Bottom Store Card Badge */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md text-left shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#16834A] uppercase tracking-wider">
                        Store Facility
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">GSTIN: 05GPYPP0225P1Z3</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">Spacious Aisles & Yellow Display Racks</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Designed for effortless family shopping with full visibility.</p>
                  </div>
                </div>

                {/* Decorative Offset Image Card */}
                <div 
                  onClick={onOpenGallery}
                  className="cursor-pointer hidden sm:flex absolute -bottom-6 -right-6 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 max-w-xs hover:scale-105 transition-transform"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                    <img
                      src="/images/store/store-checkout-billing.jpg"
                      alt="Checkout billing counter at Maa Balasundri Grocery SuperMart"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-left pr-2">
                    <p className="text-xs font-bold text-slate-800">Billing Counter</p>
                    <p className="text-[11px] text-[#16834A] font-medium flex items-center gap-1">
                      <span>View Gallery</span>
                      <ArrowRight className="w-3 h-3" />
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: About Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 text-left space-y-6">
              
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 text-[#16834A] border border-emerald-100">
                  About Our Store
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight leading-tight">
                  Welcome to Maa Balasundri Grocery SuperMart
                </h2>
              </div>

              {/* Exact Description from prompt */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Your trusted neighbourhood grocery destination. We bring everyday essentials and quality grocery products together to make your shopping convenient and enjoyable.
              </p>

              {/* Short Introduction Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operated with genuine care under Pundir Traders, Maa Balasundri Grocery SuperMart provides a clean, modern supermarket alternative to cramped corner shops. Here, families can walk through spacious, well-lit aisles, compare trusted brands side by side, and check off their complete monthly and daily household grocery lists in a single, relaxed trip.
              </p>

              {/* Quality and Customer Satisfaction Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-[#FDFBF7] border border-slate-200/70 hover:border-emerald-200 hover:shadow-xs transition-all"
                    >
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#16834A] flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Read More Button & Quick Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold shadow-md active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </button>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-600">
                  <Clock className="w-4 h-4 text-[#16834A]" />
                  <span>Open 8:00 AM – 10:00 PM Every Day</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Interactive Read More Modal */}
      <AboutModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
