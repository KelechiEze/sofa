/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ImageLeft from './components/ImageLeft';
import MediaLeft from './components/MediaLeft';
import InfiniteSlider from './components/InfiniteSlider';
import StickyScrollSection from './components/StickyScrollSection';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnsPolicy from './pages/ReturnsPolicy';
import CareGuide from './pages/CareGuide';
import FAQs from './pages/FAQs';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#F0F2F5] font-sans selection:bg-purple-200 selection:text-purple-900">
        <Preloader isLoaded={isLoaded} />
        
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <InfiniteSlider />
              <ImageLeft />

              <Featured />

              <StickyScrollSection />
              <MediaLeft />
              
              
              <Benefits />
              <InfiniteSlider />

              <Testimonials />
              <Newsletter />
            </main>
          } />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/returns-policy" element={<ReturnsPolicy />} />
          <Route path="/care-guide" element={<CareGuide />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        
        <ScrollToTop />

        {/* Global Background Decorative Text */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black text-black/[0.01] pointer-events-none select-none uppercase z-0">
          Storehouse
        </div>
      </div>
    </Router>
  );
}
