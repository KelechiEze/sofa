/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import InfiniteSlider from './components/InfiniteSlider';
import StickyScrollSection from './components/StickyScrollSection';
import Preloader from './components/Preloader';
import ImageLeft from './components/ImageLeft';
import MediaLeft from './components/MediaLeft';
import ScrollToTop from './components/ScrollToTop';

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
    <div className="min-h-screen bg-[#F0F2F5] font-sans selection:bg-purple-200 selection:text-purple-900">
      <Preloader isLoaded={isLoaded} />
      
      <Navbar />
      
      <main>
        <Hero />
        <InfiniteSlider />
        <ImageLeft />
        
        <Featured />
        <InfiniteSlider />

        <StickyScrollSection />
        
        <Benefits />
        <InfiniteSlider />
        <MediaLeft />

        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
      
      <ScrollToTop />

      {/* Global Background Decorative Text */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-[20vw] font-black text-black/[0.01] pointer-events-none select-none uppercase z-0">
        Storehouse
      </div>
    </div>
  );
}
