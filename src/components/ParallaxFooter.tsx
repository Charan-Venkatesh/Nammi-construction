'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ParallaxFooter() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // Curtain effect: The footer stays fixed at the bottom, and content scrolls up to reveal it
  // Actually, standard parallax footer usually means the footer is fixed z-index -1 and previous content has margin-bottom
  // But here we can use a clip-path reveal.

  return (
    <div ref={container} className="relative h-[80vh] w-full bg-nammi-navy text-white overflow-hidden" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
         <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 0]) }} className="flex flex-col items-center text-center px-4">
             <h2 className="text-[12vw] font-display font-bold leading-none text-white/10 select-none">NAMMI</h2>
             <h3 className="text-4xl md:text-6xl font-display font-bold -mt-4 md:-mt-10 mb-8 relative z-20">Build Your Legacy</h3>

             <Link href="/contact" className="group relative px-8 py-4 bg-nammi-orange rounded-full overflow-hidden cursor-interactive">
                <span className="relative z-10 font-bold uppercase tracking-widest text-white">Start a Project</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 z-10 font-bold uppercase tracking-widest text-nammi-navy flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">Start a Project</span>
             </Link>
         </motion.div>
      </div>

      <div className="absolute bottom-0 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-end border-t border-white/10 z-20 bg-nammi-navy">
         <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-widest text-nammi-orange">Headquarters</span>
            <p className="text-gray-400">123 Architecture Blvd,<br/>Zurich, Switzerland</p>
         </div>
         <div className="flex gap-8 mt-8 md:mt-0">
            <a href="#" className="hover:text-nammi-orange transition-colors cursor-interactive">LinkedIn</a>
            <a href="#" className="hover:text-nammi-orange transition-colors cursor-interactive">Instagram</a>
            <a href="#" className="hover:text-nammi-orange transition-colors cursor-interactive">Twitter</a>
         </div>
         <p className="text-xs text-gray-500 mt-8 md:mt-0">© 2024 Nammi Construction. All rights reserved.</p>
      </div>
    </div>
  );
}
