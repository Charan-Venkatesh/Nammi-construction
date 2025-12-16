'use client';

import { motion } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
           >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white uppercase tracking-tight">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-md">
                 Ready to start your project? Contact us for a consultation or quote.
              </p>

              <div className="space-y-8">
                 <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-safety-orange mb-2">Address</h3>
                    <p className="text-xl text-white">{SITE_DATA.company.contact.address}</p>
                 </div>
                 <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-safety-orange mb-2">Phone</h3>
                    <p className="text-xl text-white">{SITE_DATA.company.contact.phone}</p>
                 </div>
                 <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-safety-orange mb-2">Email</h3>
                    <p className="text-xl text-white">{SITE_DATA.company.contact.email}</p>
                 </div>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl text-void-navy relative overflow-hidden"
           >
              <div className="relative z-10">
                 <h2 className="text-3xl font-display font-bold mb-8">SEND A MESSAGE</h2>
                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                          <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-safety-orange transition-colors bg-transparent" placeholder="John Doe" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                          <input type="email" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-safety-orange transition-colors bg-transparent" placeholder="john@example.com" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Service Interest</label>
                       <select className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-safety-orange transition-colors bg-transparent">
                          <option>General Inquiry</option>
                          <option>Residential Construction</option>
                          <option>Commercial Development</option>
                          <option>Renovation</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                       <textarea className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-safety-orange transition-colors bg-transparent min-h-[120px]" placeholder="Tell us about your project..."></textarea>
                    </div>

                    <button className="bg-void-navy text-white px-8 py-4 w-full md:w-auto font-bold uppercase tracking-widest hover:bg-safety-orange transition-colors duration-300">
                       Submit Request
                    </button>
                 </form>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
