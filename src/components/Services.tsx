'use client';

import { motion } from 'framer-motion';
import { Ruler, Home, Hammer, Building2, PaintBucket, PenTool, ShieldCheck } from 'lucide-react';

const services = [
  { title: "Complete Solutions", icon: Building2, desc: "End-to-end construction management." },
  { title: "Housing & Business", icon: Home, desc: "Residential and commercial masterpieces." },
  { title: "Renovation", icon: Hammer, desc: "Revitalizing existing structures." },
  { title: "Developments", icon: Ruler, desc: "Large scale urban planning." },
  { title: "Interiors", icon: PaintBucket, desc: "Crafting inner spaces." },
  { title: "Design-Build", icon: PenTool, desc: "Integrated design and delivery." },
  { title: "Quality Assurance", icon: ShieldCheck, desc: "Uncompromising safety standards.", colSpan: true },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-concrete-white text-void-navy relative z-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">OUR SERVICES</h2>
          <div className="w-24 h-1 bg-safety-orange"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`group relative p-8 bg-white border border-gray-200 hover:border-safety-orange transition-colors duration-500 flex flex-col justify-between overflow-hidden ${service.colSpan ? 'md:col-span-2 lg:col-span-3' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
            >
              <div className="relative z-10">
                <service.icon className="w-8 h-8 text-safety-orange mb-4" />
                <h3 className="text-xl font-bold font-display uppercase tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600 max-w-xs">{service.desc}</p>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150 group-hover:bg-safety-orange/5"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
