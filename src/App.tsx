import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductCategories } from './components/ProductCategories';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { OpeningHours } from './components/OpeningHours';
import { StoreLocation } from './components/StoreLocation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Toast } from './components/Toast';
import type { ToastMessage } from './components/Toast';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (type: 'success' | 'info' | 'warning', title: string, message?: string) => {
    const newToast: ToastMessage = {
      id: Math.random().toString(36).substring(2, 9),
      type,
      title,
      message,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-slate-800 relative selection:bg-[#16834A] selection:text-white">
      {/* Top sticky header */}
      <Header onVisitStoreClick={scrollToLocation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={scrollToProducts}
          onOpenGallery={scrollToGallery}
        />

        {/* 2. About Our Store */}
        <About onOpenGallery={scrollToGallery} />

        {/* 3. Product Categories */}
        <ProductCategories />

        {/* 4. Store Photo Gallery */}
        <Gallery />

        {/* 5. Customer Reviews & Testimonials */}
        <Reviews />

        {/* 6. Opening Hours */}
        <OpeningHours />

        {/* 7. Store Location & Google Maps */}
        <StoreLocation
          onCopyCoordinates={() =>
            addToast('success', 'Coordinates Copied!', '30.448565, 77.860410 copied to your clipboard.')
          }
        />

        {/* 8. Contact Us & Inquiries */}
        <Contact
          onSuccessToast={(msg) => addToast('success', 'Inquiry Saved', msg)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileBottomNav />

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          type="button"
          className="hidden sm:flex fixed bottom-6 left-6 z-40 p-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-xl hover:shadow-2xl transition-all active:scale-95 cursor-pointer backdrop-blur-sm border border-slate-700"
          aria-label="Scroll back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive Toast Notifications */}
      <Toast toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default App;
