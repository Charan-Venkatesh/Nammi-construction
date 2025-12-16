'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white uppercase tracking-tight">
            About Us
          </h1>
          <p className="text-2xl text-white font-light mb-8 leading-relaxed">
            {SITE_DATA.company.description}
          </p>
          <div className="space-y-6 text-gray-400">
             <p>
                Founded on the principles of Swiss engineering and architectural excellence,
                Nammi Construction has evolved into a premier partner for complex developments.
             </p>
             <p>
                We believe that every structure tells a story. Our mission is to ensure that story
                is one of strength, sustainability, and timeless beauty.
             </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
             {SITE_DATA.stats.map((stat, i) => (
               <div key={i} className="border-l-2 border-safety-orange pl-6">
                  <div className="text-4xl font-display font-bold text-white">
                     {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">
                     {stat.label}
                  </div>
               </div>
             ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 border border-white/10 p-8 rounded-2xl"
        >
           <h2 className="text-3xl font-display font-bold text-white mb-8">LEADERSHIP</h2>
           <div className="space-y-8">
              {SITE_DATA.team.map((member, i) => (
                 <div key={i} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 text-xl font-bold border border-white/10 group-hover:border-safety-orange transition-colors">
                       {member.name.charAt(0)}
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-white">{member.name}</h3>
                       <p className="text-safety-orange text-sm font-mono uppercase tracking-widest">{member.role}</p>
                    </div>
                 </div>
              ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
}
