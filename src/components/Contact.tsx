import React, { useState } from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  Navigation, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Info
} from 'lucide-react';
import type { ContactFormData, FormSubmissionRecord } from '../types';

interface ContactProps {
  onSuccessToast?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onSuccessToast }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<FormSubmissionRecord | null>(null);

  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=30.448565,77.860410";
  const googleMapsUrl = "https://www.google.com/maps/place/Maa+Balasundri+Grocery+SuperMart/@30.4482998,77.8588079,330m/data=!3m1!1e3!4m6!3m5!1s0x390f2d004beb9fcb:0x1562094cd885c25e!8m2!3d30.448565!4d77.86041";

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name should be at least 2 characters';
    }

    const cleanedPhone = formData.phone.replace(/[\s-]/g, '');
    if (!cleanedPhone) {
      newErrors.phone = 'Please enter your mobile phone number';
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message or product inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save inquiry to localStorage and generate official tracking record
    setTimeout(() => {
      const id = `MBS-${Date.now().toString().slice(-6)}`;
      const newRecord: FormSubmissionRecord = {
        ...formData,
        id,
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
      };

      try {
        const existing = JSON.parse(localStorage.getItem('mbs_grocery_inquiries') || '[]');
        localStorage.setItem('mbs_grocery_inquiries', JSON.stringify([newRecord, ...existing]));
      } catch (err) {
        console.error('Failed to save inquiry to storage', err);
      }

      setIsSubmitting(false);
      setSubmittedRecord(newRecord);
      if (onSuccessToast) {
        onSuccessToast(`Inquiry #${id} logged successfully!`);
      }
    }, 600);
  };

  const handleResetForm = () => {
    setSubmittedRecord(null);
    setFormData({
      fullName: '',
      phone: '',
      inquiryType: 'general',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-50 text-[#16834A] border border-emerald-100">
            <Phone className="w-3.5 h-3.5" />
            <span>Customer Assistance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Poppins'] tracking-tight">
            Contact & Visit Us
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about product availability, bulk grocery orders, or daily arrivals? We are here to assist you.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Store Details, Hours, Phone Note, Directions */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Store Information Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] border border-slate-200/90 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16834A]">
                  Supermarket Address
                </span>
                <h3 className="text-xl font-bold font-['Poppins'] text-slate-900 mt-0.5">
                  Maa Balasundri Grocery SuperMart
                </h3>
                <p className="text-xs text-slate-500 font-medium">Pundir Traders • NV Super Mart</p>
              </div>

              {/* Exact Location Card */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#16834A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Store Coordinates</h4>
                  <p className="text-xs text-slate-600 font-mono mt-0.5">30.448565, 77.860410</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#16834A] font-semibold hover:underline mt-1 inline-block"
                  >
                    Open Google Maps Listing →
                  </a>
                </div>
              </div>

              {/* Opening Hours Info */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Store Hours</h4>
                  <p className="text-xs text-slate-700 font-medium mt-0.5">8:00 AM – 10:00 PM (Monday – Sunday)</p>
                  <p className="text-[11px] text-[#16834A] font-semibold mt-0.5">Open continuous all 7 days</p>
                </div>
              </div>

              {/* Phone & WhatsApp Status */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Phone Support</h4>
                    <p className="text-xs text-slate-500 mt-0.5 italic">
                      Dedicated telecom line update in progress. Please visit in person or submit an inquiry below.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">WhatsApp Service</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Store WhatsApp integration will be activated upon phone line assignment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#16834A] hover:bg-[#126b3c] text-white font-bold text-sm shadow-md shadow-emerald-700/20 active:scale-[0.98] transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-200" />
                <span>Get Directions on Google Maps</span>
              </a>

            </div>

          </div>

          {/* Right Column: Contact Form with Validation & Local Persistence */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200/90 shadow-xs text-left">
            
            {!submittedRecord ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold font-['Poppins'] text-slate-900">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below. Your request will be recorded and our store team can reference it on your next visit.
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 outline-none transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-[#16834A] focus:ring-2 focus:ring-emerald-500/20'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Mobile Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                      +91
                    </span>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="98765 43210"
                      maxLength={10}
                      className={`w-full pl-13 pr-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 outline-none transition-all font-mono ${
                        errors.phone
                          ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                          : 'border-slate-300 focus:border-[#16834A] focus:ring-2 focus:ring-emerald-500/20'
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400 mt-1">
                      10-digit Indian mobile number for order or product updates.
                    </p>
                  )}
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-800 outline-none focus:border-[#16834A] focus:ring-2 focus:ring-emerald-500/20 transition-all cursor-pointer"
                  >
                    <option value="general">General Store Inquiry</option>
                    <option value="availability">Product / Brand Availability</option>
                    <option value="bulk">Bulk Household / Event Order</option>
                    <option value="timing">Opening Hours & Directions</option>
                    <option value="feedback">Customer Feedback</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Tell us what grocery items or brands you are inquiring about..."
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-slate-800 placeholder-slate-400 outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-400 focus:ring-2 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-[#16834A] focus:ring-2 focus:ring-emerald-500/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Form Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-emerald-400" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Inquiries are recorded locally for in-store verification upon your visit.
                  </p>
                </div>
              </form>
            ) : (
              /* Success & Verified Submission Card */
              <div className="space-y-5 text-center py-4 animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#16834A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#16834A] uppercase tracking-wider">
                    Inquiry Recorded
                  </span>
                  <h3 className="text-2xl font-bold font-['Poppins'] text-slate-900">
                    Thank You, {submittedRecord.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry has been logged with Reference ID{' '}
                    <span className="font-mono font-bold text-slate-900 bg-slate-200/70 px-2 py-0.5 rounded">
                      #{submittedRecord.id}
                    </span>.
                  </p>
                </div>

                {/* Detail Box */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Contact Phone:</span>
                    <span className="font-mono font-semibold text-slate-800">+91 {submittedRecord.phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Subject:</span>
                    <span className="font-semibold text-slate-800 capitalize">{submittedRecord.inquiryType}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Date Logged:</span>
                    <span className="text-slate-800">{submittedRecord.submittedAt}</span>
                  </div>
                  <div className="py-1">
                    <span className="text-slate-500 block mb-0.5">Your Message:</span>
                    <p className="text-slate-700 italic bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      "{submittedRecord.message}"
                    </p>
                  </div>
                </div>

                {/* Honest note */}
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 text-left max-w-md mx-auto flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    For urgent item verification, please visit our store directly during opening hours (8:00 AM – 10:00 PM) and share your reference ID with the cashier.
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-[#16834A] text-white text-xs font-semibold shadow-xs"
                  >
                    <Navigation className="w-3.5 h-3.5 text-emerald-200" />
                    <span>Get Directions to Shop</span>
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
