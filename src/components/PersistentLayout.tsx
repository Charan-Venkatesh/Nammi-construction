'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Persistent3DBackground from './Persistent3DBackground';
import PageTransition from './PageTransition';
import { ReactLenis } from 'lenis/react';

export default function PersistentLayout({ children }: { children: ReactNode }) {
  // Smooth scroll configuration
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <Persistent3DBackground />
      <Navbar />
      <PageTransition>
        {children}
      </PageTransition>
    </ReactLenis>
  );
}
