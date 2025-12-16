'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';
import { useState } from 'react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? SITE_DATA.projects
    : SITE_DATA.projects.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
           <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight">
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
                className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all ${
                   filter === cat
                   ? 'bg-safety-orange text-white'
                   : 'bg-white/5 text-gray-400 hover:bg-white/10'
                }`}
              >
                 {cat}
              </button>
           ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
         {filteredProjects.map((project, index) => (
            <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               className="group cursor-pointer"
            >
               <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden relative mb-6">
                  {/* Placeholder for real image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-display text-9xl font-bold opacity-20 group-hover:scale-110 transition-transform duration-700">
                     {index + 1}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                     <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-mono uppercase tracking-widest">
                        {project.location}
                     </span>
                     <span className="text-white/50 font-display text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                        →
                     </span>
                  </div>
               </div>

               <div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-safety-orange transition-colors">
                     {project.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-500 mt-2 font-mono">
                     <span>{project.category}</span>
                     <span>/</span>
                     <span>{project.year}</span>
                  </div>
               </div>
            </motion.div>
         ))}
      </div>
    </div>
  );
}
