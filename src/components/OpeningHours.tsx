import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Navigation, Calendar } from 'lucide-react';
import { getStoreStatus, getWeeklySchedule } from '../utils/storeHours';
import type { StoreStatus, DaySchedule } from '../types';

export const OpeningHours: React.FC = () => {
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());
  const [schedule, setSchedule] = useState<DaySchedule[]>(getWeeklySchedule());

  useEffect(() => {
    const updateTimes = () => {
      setStatus(getStoreStatus());
      setSchedule(getWeeklySchedule());
    };

    updateTimes();
    const interval = setInterval(updateTimes, 15000); // 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="opening-hours" className="py-16 sm:py-24 bg-[#FDFBF7] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 text-[#16834A]">
            <Clock className="w-3.5 h-3.5" />
            <span>Store Timings & Availability</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Store Opening Hours
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are dedicated to serving your family every single day of the week with convenient morning and evening hours.
          </p>
        </div>

        {/* Dynamic Status Highlight Card */}
        <div className="max-w-3xl mx-auto mb-10">
          <div
            className={`p-6 sm:p-8 rounded-3xl border shadow-lg transition-all text-left relative overflow-hidden ${
              status.isOpen
                ? 'bg-gradient-to-br from-emerald-900 via-[#16834A] to-[#0e5c33] text-white border-emerald-500/40 shadow-emerald-950/15'
                : 'bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white border-amber-500/30 shadow-slate-950/20'
            }`}
          >
            {/* Ambient background glow */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    status.isOpen
                      ? 'bg-emerald-400/20 text-emerald-100 border border-emerald-400/40'
                      : 'bg-amber-400/20 text-amber-200 border border-amber-400/40'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-300 animate-pulse' : 'bg-amber-400'}`} />
                    <span>Live Indian Standard Time (IST)</span>
                  </span>
                  <span className="text-xs text-white/70 font-mono">
                    Current: {status.currentTimeIST}
                  </span>
                </div>

                {/* Status Announcement from prompt */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Poppins'] tracking-tight">
                  {status.statusText}
                </h3>

                <p className="text-sm sm:text-base text-emerald-100 font-medium">
                  {status.statusSubtext}
                </p>

                <p className="text-xs text-white/80 pt-1">
                  Today is <span className="font-bold underline decoration-amber-400">{status.currentDayName}</span> • Store is open from 8:00 AM to 10:00 PM
                </p>
              </div>

              {/* Action Button */}
              <div className="shrink-0 flex flex-col gap-2.5">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-900 font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <Navigation className="w-4 h-4 text-[#16834A]" />
                  <span>Get Directions</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* All 7 Days Timings Grid & Table */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm text-left">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#16834A] flex items-center justify-center">
                <Calendar className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-['Poppins']">
                  Weekly Schedule
                </h3>
                <p className="text-xs text-slate-500">Maa Balasundri Grocery SuperMart is open 7 days a week</p>
              </div>
            </div>

            <span className="hidden xs:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#16834A] border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Open All 7 Days</span>
            </span>
          </div>

          {/* Schedule List */}
          <div className="mt-4 divide-y divide-slate-100">
            {schedule.map((item) => (
              <div
                key={item.day}
                className={`py-3.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                  item.isToday
                    ? 'bg-emerald-50/90 font-semibold text-slate-900 border border-emerald-200/80 shadow-xs'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.isToday ? 'bg-[#16834A] animate-ping' : 'bg-slate-300'}`} />
                  <span className="text-sm font-medium">{item.day}</span>
                  {item.isToday && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#16834A] text-white">
                      Today
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold font-mono text-slate-900">
                    {item.open} – {item.close}
                  </span>
                  <span className="text-[11px] font-medium text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">
                    Open
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Notice */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
            <span>Special festival timings may apply on Diwali & Holi.</span>
            <span className="font-semibold text-[#16834A]">No lunch break • Continuous 8 AM to 10 PM</span>
          </div>

        </div>

      </div>
    </section>
  );
};
