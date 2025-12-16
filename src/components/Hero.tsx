'use client';

import { motion } from 'framer-motion';
import Hero3D from './Hero3D';

export default function Hero() {
  const words = ["PRECISION.", "IN EVERY.", "POUR."];

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void-navy text-concrete-white">
      {/* 3D Background */}
      <Hero3D />

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between h-full pt-20">
        {/* Text Content */}
        <div className="flex flex-col gap-2 md:gap-4 select-none mix-blend-difference">
          {words.map((word, index) => (
            <div key={index} className="overflow-hidden">
              <motion.h1
                className="text-5xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9]"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 1.2 + (index * 0.1)
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.8, duration: 0.8 }}
             className="mt-8 flex items-center gap-4"
          >
             <p className="text-sm font-mono tracking-widest text-concrete-white/60">
                NAMMI CONSTRUCTION
             </p>
             <div className="h-[1px] w-20 bg-safety-orange"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 right-10 flex items-center gap-2 text-xs font-mono text-concrete-white/50 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-10 bg-concrete-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-safety-orange"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
