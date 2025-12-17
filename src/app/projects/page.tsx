'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 pt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
           <h1 className="text-5xl md:text-7xl font-display font-bold text-nammi-navy uppercase tracking-tight">
             Selected Works
           </h1>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
           {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                   filter === cat
                   ? 'bg-nammi-orange text-white shadow-lg shadow-nammi-orange/30'
                   : 'bg-white border border-gray-200 text-gray-500 hover:border-nammi-orange hover:text-nammi-orange'
                }`}
              >
                 {cat}
              </button>
           ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
         {filteredProjects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <motion.div
                 initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1 }}
                 className="group cursor-pointer"
              >
                 <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden relative mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                    {/* Placeholder for real image */}
                    <div className="absolute inset-0 bg-nammi-navy/10 group-hover:bg-nammi-navy/0 transition-colors duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-display text-9xl font-bold opacity-20 group-hover:scale-110 transition-transform duration-700">
                       {index + 1}
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                       <span className="bg-white/90 backdrop-blur-md text-nammi-navy px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest shadow-sm">
                          {project.location}
                       </span>
                       <span className="bg-nammi-orange text-white w-10 h-10 rounded-full flex items-center justify-center transform translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                          →
                       </span>
                    </div>
                 </div>

                 <div>
                    <h3 className="text-3xl font-display font-bold text-nammi-navy group-hover:text-nammi-orange transition-colors">
                       {project.title}
                    </h3>
                    <div className="flex gap-4 text-sm text-gray-400 mt-2 font-mono uppercase tracking-widest">
                       <span>{project.category}</span>
                       <span className="text-gray-300">/</span>
                       <span>{project.year}</span>
                    </div>
                 </div>
              </motion.div>
            </Link>
         ))}
      </div>
    </div>
  );
}
