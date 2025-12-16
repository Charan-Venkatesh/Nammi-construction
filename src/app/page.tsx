'use client';

import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import MagneticFooter from '@/components/MagneticFooter';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Smooth scroll configuration
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, // smoothTouch is deprecated in v1? checking docs... usually smoothTouch: true for mobile
    smoothWheel: true,
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <ReactLenis root options={lenisOptions}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <main className="relative bg-concrete-white min-h-screen">
          <Navbar />
          <Hero />
          <Services />
          <Process />
          <About />
          <MagneticFooter />
        </main>
      )}
    </ReactLenis>
  );
}
