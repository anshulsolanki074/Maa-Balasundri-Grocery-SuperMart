export interface ProductCategory {
  id: string;
  name: string;
  hindiName?: string;
  description: string;
  image: string;
  itemCountDesc: string;
  popularItems: string[];
  featuredBrands?: string[];
  badge?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'all' | 'storefront' | 'aisles' | 'products' | 'checkout';
  categoryLabel: string;
  src: string;
  alt: string;
  description: string;
  isRealPhoto: boolean;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  open: string;
  close: string;
  isOpenToday: boolean;
  isToday: boolean;
}

export interface StoreStatus {
  isOpen: boolean;
  statusText: string;
  statusSubtext: string;
  currentTimeIST: string;
  closingTimeIST: string;
  nextOpenTimeIST: string;
  currentDayName: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  inquiryType: 'general' | 'availability' | 'bulk' | 'timing' | 'feedback';
  message: string;
}

export interface FormSubmissionRecord extends ContactFormData {
  id: string;
  submittedAt: string;
}
