'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

// Helper to dynamically render icon
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  // @ts-expect-error - Icon name dynamic
  const Icon = LucideIcons[name];
  return Icon ? <Icon className={className} /> : null;
};

export default function ServiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const service = SITE_DATA.services.find((s) => s.id === id);

  if (!service) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
       <Link href="/services" className="inline-flex items-center gap-2 text-nammi-navy hover:text-nammi-orange transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Services</span>
       </Link>

       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
       >
         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Column: Title & Main Info */}
            <div className="lg:w-1/2">
                <div className="w-20 h-20 bg-nammi-orange text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                   <IconComponent name={service.icon} className="w-10 h-10" />
                </div>

                <h1 className="text-4xl md:text-6xl font-display font-bold text-nammi-navy mb-6 leading-tight">
                   {service.title}
                </h1>
                <p className="text-xl md:text-2xl text-nammi-orange font-light mb-8">
                   {service.desc}
                </p>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Service Overview</h3>
                   <p className="text-gray-600 leading-relaxed text-lg">
                      {service.longDescription}
                   </p>
                </div>
            </div>

            {/* Right Column: Features List */}
            <div className="lg:w-1/2 bg-nammi-navy text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>

                <h2 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                   KEY FEATURES
                   <div className="h-[2px] bg-nammi-orange flex-grow"></div>
                </h2>

                <ul className="space-y-6">
                   {service.features?.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex items-start gap-4"
                      >
                         <div className="mt-1 p-1 bg-nammi-orange rounded-full">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                         </div>
                         <span className="text-lg text-gray-200">{feature}</span>
                      </motion.li>
                   ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-white/10">
                   <p className="text-gray-400 mb-4 text-sm">Need this service for your next project?</p>
                   <Link href="/contact" className="inline-block bg-white text-nammi-navy px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-nammi-orange hover:text-white transition-all duration-300">
                      Request Consultation
                   </Link>
                </div>
            </div>
         </div>
       </motion.div>
    </div>
  );
}
