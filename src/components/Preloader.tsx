'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => {
        onComplete();
      }, 500);
    }
  }, [count, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-void-navy"
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="w-64">
        <div className="flex justify-between text-xs font-mono text-safety-orange mb-2">
          <span>FOUNDATION</span>
          <span>{count}%</span>
        </div>
        <div className="h-[2px] w-full bg-void-navy/50 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-safety-orange"
            initial={{ width: '0%' }}
            animate={{ width: `${count}%` }}
            transition={{ ease: 'linear', duration: 0.02 }} // Match interval speed roughly or just set width directly
          />
        </div>
      </div>
    </motion.div>
  );
}
