'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';
import * as LucideIcons from 'lucide-react';

// Helper to dynamically render icon
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  // @ts-expect-error - LucideIcons is a module of components, indexing by string is safe enough here for MVP but Typescript doesn't like it without strict typing
  const Icon = LucideIcons[name];
  return Icon ? <Icon className={className} /> : null;
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white uppercase tracking-tight">
          Our Services
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
          Comprehensive construction solutions tailored to your vision.
          From blueprint to reality, we handle it all.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {SITE_DATA.services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-safety-orange/50 transition-colors duration-500 overflow-hidden flex flex-col justify-between rounded-xl ${service.colSpan ? 'md:col-span-2 lg:col-span-3' : ''}`}
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-safety-orange/0 to-safety-orange/0 group-hover:from-safety-orange/10 group-hover:to-transparent transition-all duration-700" />

            <div className="relative z-10">
              <div className="w-12 h-12 bg-safety-orange/10 rounded-lg flex items-center justify-center text-safety-orange mb-6 group-hover:bg-safety-orange group-hover:text-white transition-colors duration-300">
                <IconComponent name={service.icon} className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
            </div>

            <div className="relative z-10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
               <p className="text-xs text-white/80 border-t border-white/10 pt-4">
                  {service.details}
               </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
