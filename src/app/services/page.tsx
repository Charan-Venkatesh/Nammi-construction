'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SITE_DATA } from '@/lib/data';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

// Helper to dynamically render icon
const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  // @ts-expect-error - dynamic icon
  const Icon = LucideIcons[name];
  return Icon ? <Icon className={className} /> : null;
};

// 3D Tilt Card Component
function TiltCard({ children, className, href }: { children: React.ReactNode, className?: string, href: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Link href={href} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative h-full p-8 bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 rounded-2xl flex flex-col justify-between cursor-interactive"
      >
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
           {children}
        </div>
      </motion.div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-nammi-navy uppercase tracking-tight">
          Our Services
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
          Comprehensive construction solutions tailored to your vision.
          From blueprint to reality, we handle it all.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {SITE_DATA.services.map((service, index) => (
          <TiltCard
             key={service.id}
             href={`/services/${service.id}`}
             className={`${service.colSpan ? 'md:col-span-2 lg:col-span-3' : ''} perspective-1000`}
          >
              <div className="w-14 h-14 bg-nammi-navy/5 rounded-xl flex items-center justify-center text-nammi-navy mb-6 group-hover:bg-nammi-orange group-hover:text-white transition-colors duration-300">
                <IconComponent name={service.icon} className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-display font-bold text-nammi-navy mb-3 uppercase group-hover:text-nammi-orange transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>

              <div className="flex items-center gap-2 text-nammi-orange font-bold uppercase text-xs tracking-widest mt-auto">
                 <span>Explore Service</span>
                 <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
