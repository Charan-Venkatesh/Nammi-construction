'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

// HACK: To make AnimatePresence work with Next.js App Router we ideally need a template.
// But since we are inside a persistent layout, we can wrap the children with a key based on pathname.

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pt-24 min-h-screen" // Add padding top for fixed navbar
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
