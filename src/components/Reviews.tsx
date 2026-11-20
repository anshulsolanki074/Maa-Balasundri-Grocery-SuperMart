import React from 'react';
import { 
  Star, 
  MessageSquarePlus, 
  ExternalLink, 
  CheckCircle2, 
  Heart, 
  MapPin, 
  Sparkles, 
  ShieldCheck
} from 'lucide-react';

export const Reviews: React.FC = () => {
  const googleMapsListingUrl = "https://www.google.com/maps/place/Maa+Balasundri+Grocery+SuperMart/@30.4482998,77.8588079,330m/data=!3m1!1e3!4m6!3m5!1s0x390f2d004beb9fcb:0x1562094cd885c25e!8m2!3d30.448565!4d77.86041";

  const feedbackPillars = [
    {
      title: "Fresh & Authentic Products",
      desc: "Neighbours trust our wide selection of genuine FMCG brands, fresh spices, and clean dairy.",
      icon: ShieldCheck
    },
    {
      title: "Clean Aisles & Easy Shopping",
      desc: "Bright lighting, wide aisles, and tidy displays make everyday family shopping convenient.",
      icon: Sparkles
    },
    {
      title: "Warm & Helpful Service",
      desc: "Friendly neighbourhood staff ready to help you locate any grocery item with quick billing.",
      icon: Heart
    }
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-50 text-amber-800 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Community Trust & Transparency</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Customer Experience & Reviews
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe in 100% genuine feedback from our local community. Visit our official Google Maps listing to view customer opinions or leave your own review.
          </p>
        </div>

        {/* Share Your Experience Main Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#FDFBF7] via-white to-emerald-50/50 border-2 border-emerald-100 p-8 sm:p-12 shadow-xl shadow-emerald-950/5 text-center relative overflow-hidden">
          
          {/* 5-Star Visual Emblem */}
          <div className="flex justify-center items-center gap-1.5 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-7 h-7 sm:w-8 sm:h-8 fill-amber-400 text-amber-400 drop-shadow-xs"
              />
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold font-['Poppins'] text-slate-900 mb-3">
            Share Your Shopping Experience
          </h3>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
            Did you enjoy shopping at Maa Balasundri Grocery SuperMart? Your honest review helps your neighbours discover quality groceries and helps us serve our community even better!
          </p>

          {/* Action Buttons to Google Maps */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={googleMapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#16834A] hover:bg-[#126b3c] text-white text-base font-bold shadow-lg shadow-emerald-700/25 active:scale-95 transition-all"
            >
              <MessageSquarePlus className="w-5 h-5 text-emerald-200" />
              <span>Write a Review on Google Maps</span>
              <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
            </a>

            <a
              href={googleMapsListingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 text-sm font-semibold shadow-xs transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#16834A]" />
              <span>View Store Listing & Photos</span>
            </a>
          </div>

          {/* Transparent Trust Notice */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-center gap-2 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
            <span>We never display fake testimonials. All customer feedback is hosted directly on verified Google Maps.</span>
          </div>

        </div>

        {/* 3 Feedback Pillars Highlight */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {feedbackPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 text-left space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#16834A] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 3 Steps to Leave a Quick Review */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center mb-6">
            How to Leave a Genuine Review in 3 Easy Steps
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 space-y-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-[#16834A] font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h5 className="font-bold text-slate-900 text-sm">Open Store Listing</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Click the button above to go straight to Maa Balasundri Grocery SuperMart on Google Maps.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 space-y-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h5 className="font-bold text-slate-900 text-sm">Select Your Rating</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rate your visit and share your favorite groceries, snacks, or shopping highlights.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-slate-200/80 space-y-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-[#16834A] font-bold text-sm flex items-center justify-center">
                3
              </span>
              <h5 className="font-bold text-slate-900 text-sm">Submit & Support Local</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Post your review to help fellow neighbours discover quality grocery essentials.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
