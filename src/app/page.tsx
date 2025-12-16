'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const words = ["PRECISION.", "IN EVERY.", "POUR."];

  return (
    <div className="relative h-screen w-full flex flex-col justify-center overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 z-10 flex flex-col items-start h-full justify-center">
        <div className="flex flex-col gap-2 md:gap-4 select-none mix-blend-difference mb-12">
          {words.map((word, index) => (
            <div key={index} className="overflow-hidden">
              <motion.h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tight leading-[0.85] text-white"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.2 + (index * 0.1)
                }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 0.8 }}
           className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full max-w-4xl"
        >
           <p className="text-lg md:text-xl text-gray-400 font-light max-w-md leading-relaxed">
              We build landmarks that stand the test of time.
              Swiss precision meeting architectural ambition.
           </p>

           <Link href="/projects" className="group flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-void-navy transition-all duration-300">
              <span className="font-bold uppercase tracking-widest text-sm">View Projects</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
           </Link>
        </motion.div>
      </div>

      {/* Featured Projects Teaser (Bottom Right) */}
      <motion.div
        className="absolute bottom-12 right-6 md:right-12 hidden md:block text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Latest Work</p>
        <div className="flex flex-col gap-1">
           <Link href="/projects" className="text-xl font-display font-bold text-white hover:text-safety-orange transition-colors">The Vertex Tower</Link>
           <Link href="/projects" className="text-xl font-display font-bold text-white hover:text-safety-orange transition-colors">Alpine Residence</Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono text-concrete-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLL</span>
        <div className="h-12 w-[1px] bg-concrete-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-safety-orange"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
