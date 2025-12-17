'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Persistent3DBackground from './Persistent3DBackground';
import PageTransition from './PageTransition';
import { ReactLenis } from 'lenis/react';
import ParallaxFooter from './ParallaxFooter';

export default function PersistentLayout({ children }: { children: ReactNode }) {
  // Optimized Smooth scroll configuration
  // Reduced duration and increased lerp for snappier response (lower latency feel)
  const lenisOptions = {
    lerp: 0.1, // Slightly tighter control
    duration: 1.2, // Shorter duration for faster settle
    smoothWheel: true,
    wheelMultiplier: 1.2, // Faster scrolling
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <Persistent3DBackground />
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
      {/* Footer is outside page transition to remain stable or animate independently */}
      <div className="relative z-10 bg-white">
         <ParallaxFooter />
      </div>
    </ReactLenis>
  );
}
