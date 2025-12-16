'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { id: "01", title: "Consultation", desc: "Understanding your vision and requirements." },
  { id: "02", title: "Blueprint", desc: "Architectural planning and structural design." },
  { id: "03", title: "Excavation", desc: "Preparing the ground for a solid foundation." },
  { id: "04", title: "Construction", desc: "Executing the build with precision." },
  { id: "05", title: "Handover", desc: "Delivering your project on time, perfect." },
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id="process" className="relative h-[300vh] bg-void-navy text-concrete-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-24">
           {/* Intro Card */}
           <div className="min-w-[400px] md:min-w-[600px] h-[60vh] flex flex-col justify-center">
              <h2 className="text-6xl md:text-8xl font-display font-bold leading-none">
                THE<br/>PROCESS
              </h2>
              <p className="mt-8 text-xl font-light max-w-md text-gray-400">
                A methodical approach to construction. From the first sketch to the final polish, we ensure perfection at every step.
              </p>
           </div>

           {/* Steps Cards */}
          {steps.map((step) => (
            <div key={step.id} className="relative h-[60vh] w-[80vw] md:w-[40vw] min-w-[300px] md:min-w-[500px] flex flex-col justify-between border-l border-white/20 p-8 md:p-12 bg-white/5 backdrop-blur-sm">
              <div className="text-9xl font-display font-bold text-white/5 absolute top-0 right-0 -mt-10 -mr-10 select-none">
                {step.id}
              </div>

              <div className="relative z-10">
                <span className="text-safety-orange font-mono text-sm tracking-widest mb-2 block">STEP {step.id}</span>
                <h3 className="text-4xl md:text-5xl font-display uppercase font-bold">{step.title}</h3>
              </div>

              <div className="relative z-10 border-t border-white/10 pt-8">
                 <p className="text-lg md:text-xl text-gray-300 font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
