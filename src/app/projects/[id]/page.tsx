'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Calendar, User, ArrowUpRight } from 'lucide-react';

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const project = SITE_DATA.projects.find((p) => p.id === id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
       <Link href="/projects" className="inline-flex items-center gap-2 text-nammi-navy hover:text-nammi-orange transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to Projects</span>
       </Link>

       <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         className="w-full h-[50vh] md:h-[70vh] bg-gray-800 rounded-3xl overflow-hidden relative mb-12 shadow-2xl"
       >
          {/* Placeholder for real image */}
          <div className="absolute inset-0 bg-gradient-to-t from-nammi-navy via-transparent to-transparent opacity-80 z-10" />
          <div className="absolute inset-0 bg-nammi-navy/20 z-0" />

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 text-white">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div className="inline-block bg-nammi-orange text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                       {project.category}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-2">
                       {project.title}
                    </h1>
                    <div className="flex items-center gap-6 text-gray-300 font-mono text-sm">
                       <span className="flex items-center gap-2"><MapPin size={16} /> {project.location}</span>
                       <span className="flex items-center gap-2"><Calendar size={16} /> {project.year}</span>
                    </div>
                </div>

                <div className="hidden md:block">
                   <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                      <ArrowUpRight size={40} />
                   </div>
                </div>
             </div>
          </div>
       </motion.div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-1">
             <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">Project Data</h3>
             <ul className="space-y-6">
                <li className="flex justify-between items-center">
                   <span className="text-gray-500">Client</span>
                   <span className="font-bold text-nammi-navy">{project.client}</span>
                </li>
                <li className="flex justify-between items-center">
                   <span className="text-gray-500">Location</span>
                   <span className="font-bold text-nammi-navy">{project.location}</span>
                </li>
                <li className="flex justify-between items-center">
                   <span className="text-gray-500">Year</span>
                   <span className="font-bold text-nammi-navy">{project.year}</span>
                </li>
                <li className="flex justify-between items-center">
                   <span className="text-gray-500">Sector</span>
                   <span className="font-bold text-nammi-navy">{project.category}</span>
                </li>
             </ul>

             <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
                <h4 className="font-bold text-nammi-navy mb-2">Interested in a similar project?</h4>
                <p className="text-gray-500 text-sm mb-4">Contact our team to discuss your vision.</p>
                <Link href="/contact" className="text-nammi-orange font-bold uppercase text-xs tracking-widest border-b border-nammi-orange pb-1 hover:text-nammi-navy hover:border-nammi-navy transition-colors">
                   Get in touch
                </Link>
             </div>
          </div>

          <div className="lg:col-span-2 space-y-12">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-3xl font-display font-bold text-nammi-navy mb-4">The Challenge</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{project.challenge}</p>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-3xl font-display font-bold text-nammi-navy mb-4">Our Solution</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{project.solution}</p>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-nammi-navy text-white p-8 rounded-2xl"
             >
                <h2 className="text-3xl font-display font-bold text-nammi-orange mb-4">The Outcome</h2>
                <p className="text-gray-200 text-lg leading-relaxed">{project.outcome}</p>
             </motion.div>
          </div>
       </div>
    </div>
  );
}
