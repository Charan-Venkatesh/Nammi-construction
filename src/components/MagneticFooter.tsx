'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useRef, MouseEvent, useState } from 'react';
import { X } from 'lucide-react';

export default function MagneticFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Apply magnetic effect strength
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <footer id="contact" className="relative h-screen bg-void-navy text-concrete-white flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] text-center pointer-events-none opacity-10">
         <span className="text-[20vw] font-display font-bold leading-none">CONTACT</span>
      </div>

      <div className="z-10 flex flex-col items-center gap-8">
        <p className="text-xl md:text-2xl font-light tracking-wide">Ready to build your vision?</p>

        <motion.div
          ref={ref}
          className="relative group cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsModalOpen(true)}
          style={{ x: springX, y: springY }}
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-safety-orange flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
             <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
             <span className="relative z-10 font-display font-bold text-lg md:text-2xl text-white flex flex-col items-center">
                START
                <span>PROJECT</span>
             </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 w-full px-10 flex flex-col md:flex-row justify-between items-end text-sm text-gray-500 font-mono">
         <div>
            <p className="text-white mb-2">NAMMI CONSTRUCTION</p>
            <p>123 Architecture Blvd.</p>
            <p>Zurich, Switzerland</p>
         </div>
         <div className="mt-8 md:mt-0 text-right">
            <p className="text-2xl md:text-4xl text-white font-display font-bold mb-2">Your Vision, Built on Trust.</p>
            <p>&copy; 2024 Nammi Construction. All rights reserved.</p>
         </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
           <motion.div
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="bg-white text-void-navy p-8 md:p-12 w-full max-w-lg relative"
           >
              <button
                onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-display font-bold mb-6">Let&apos;s Talk</h3>

              <form className="flex flex-col gap-4">
                 <div className="flex flex-col gap-1">
                    <label className="text-xs font-mono uppercase text-gray-500">Name</label>
                    <input type="text" className="border-b border-gray-300 py-2 focus:outline-none focus:border-safety-orange bg-transparent" placeholder="John Doe" />
                 </div>
                 <div className="flex flex-col gap-1">
                    <label className="text-xs font-mono uppercase text-gray-500">Email</label>
                    <input type="email" className="border-b border-gray-300 py-2 focus:outline-none focus:border-safety-orange bg-transparent" placeholder="john@example.com" />
                 </div>
                 <div className="flex flex-col gap-1">
                    <label className="text-xs font-mono uppercase text-gray-500">Project Details</label>
                    <textarea className="border-b border-gray-300 py-2 focus:outline-none focus:border-safety-orange bg-transparent min-h-[100px]" placeholder="Tell us about your vision..."></textarea>
                 </div>

                 <button type="button" className="mt-4 bg-void-navy text-white py-4 font-mono uppercase tracking-widest hover:bg-safety-orange transition-colors">
                    Send Request
                 </button>
              </form>
           </motion.div>
        </div>
      )}
    </footer>
  );
}
