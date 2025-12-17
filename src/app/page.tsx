'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '@/lib/data';

export default function Home() {
  const words = ["Creating", "Landmarks,", "Earning", "Trust."];

  return (
    <div className="relative w-full flex flex-col justify-start pt-32 overflow-hidden">
       {/* Diagonal Background Elements (Flyer Style) */}
       <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-nammi-blue-light/30 -skew-x-12 translate-x-1/4 -z-10" />
       <div className="absolute top-20 right-0 w-[20vw] h-[80vh] bg-nammi-navy/5 -skew-x-12 translate-x-1/2 -z-10" />

      {/* Hero Section */}
      <div className="container mx-auto px-6 z-10 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.p
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="text-nammi-orange font-bold uppercase tracking-widest mb-4"
          >
             Foundations of Strength, Pillars of Trust
          </motion.p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
            {words.map((word, index) => (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-8xl font-display font-bold tracking-tight text-nammi-navy leading-none"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.33, 1, 0.68, 1],
                    delay: 0.1 + (index * 0.1)
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
             transition={{ delay: 0.6, duration: 0.8 }}
             className="flex flex-col gap-8 items-start w-full max-w-lg bg-white/80 backdrop-blur-sm p-6 rounded-xl border-l-4 border-nammi-orange shadow-lg"
          >
             <p className="text-lg text-gray-600 font-light leading-relaxed">
                We turn your vision into reality with Swiss precision and uncompromising quality.
                Experience the future of construction.
             </p>

             <div className="flex gap-4 w-full">
                <Link href="/contact" className="flex-1 bg-nammi-navy text-white text-center py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-nammi-orange transition-colors duration-300">
                   Start Project
                </Link>
                <Link href="/services" className="flex-1 border border-nammi-navy text-nammi-navy text-center py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-nammi-blue-light transition-colors duration-300">
                   Our Services
                </Link>
             </div>
          </motion.div>
        </div>
      </div>

       {/* Client Trust Marquee (New Feature) */}
      <div className="w-full bg-nammi-navy text-white py-6 overflow-hidden relative z-20">
         <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
         >
            <div className="flex gap-12 items-center px-6">
               <span className="text-xl font-display uppercase font-bold opacity-50">TRUSTED BY LEADERS</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">100+ SUCCESSFUL PROJECTS</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">ISO 9001 CERTIFIED</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">AWARD WINNING DESIGN</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">SWISS ENGINEERING</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
            </div>
             <div className="flex gap-12 items-center px-6">
               <span className="text-xl font-display uppercase font-bold opacity-50">TRUSTED BY LEADERS</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">100+ SUCCESSFUL PROJECTS</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">ISO 9001 CERTIFIED</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">AWARD WINNING DESIGN</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
               <span className="text-xl font-display uppercase font-bold opacity-50">SWISS ENGINEERING</span>
               <span className="w-2 h-2 rounded-full bg-nammi-orange"></span>
            </div>
         </motion.div>
      </div>

      {/* Services List (Matching Flyer) */}
      <div className="container mx-auto px-6 py-20 relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border-t-8 border-nammi-navy relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-64 h-64 bg-nammi-orange/10 rounded-bl-full -mr-16 -mt-16" />

            <div className="flex flex-col md:flex-row gap-12">
               <div className="md:w-1/3">
                  <div className="bg-nammi-navy text-white px-6 py-3 inline-block rounded-r-full -ml-8 mb-6 shadow-md">
                     <h2 className="text-2xl font-bold font-display uppercase tracking-wide">Our Services:</h2>
                  </div>
                  <p className="text-gray-500 mb-6">
                     From residential dreams to commercial landmarks, we deliver excellence in every square meter.
                  </p>
                  {/* Decorative "Contact" Circle from Flyer */}
                   <Link href="/contact">
                     <div className="relative w-full aspect-square max-w-[200px] rounded-full overflow-hidden border-4 border-white shadow-xl bg-nammi-navy flex items-center justify-center group cursor-pointer cursor-interactive">
                        <div className="absolute inset-0 bg-nammi-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10 font-bold text-white text-xl uppercase">Contact Us</span>
                     </div>
                   </Link>
               </div>

               <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SITE_DATA.services.map((service, i) => (
                     <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                     >
                        <CheckCircle2 className="text-nammi-orange w-6 h-6 flex-shrink-0 mt-1" />
                        <div>
                           <h3 className="font-bold text-lg text-nammi-navy">{service.title}</h3>
                           <p className="text-sm text-gray-400 leading-tight">{service.desc}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-10 left-10 flex flex-col items-center gap-2 text-xs font-mono text-nammi-navy/50 z-40 hidden lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>SCROLL</span>
        <div className="h-12 w-[1px] bg-nammi-navy/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-nammi-orange"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
