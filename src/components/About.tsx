'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Counter({ from, to, label }: { from: number; to: number; label: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const node = nodeRef.current;
    if (!node) return;

    // Simple custom animation for the counter
    const duration = 2000;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // EaseOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const current = Math.floor(from + (to - from) * easedProgress);
      node.textContent = current.toString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [isInView, from, to]);

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-5xl md:text-7xl font-display font-bold text-void-navy mb-2">
        <span ref={nodeRef}>{from}</span>{label.includes('%') ? '%' : '+'}
      </div>
      <p className="text-sm font-mono uppercase tracking-widest text-gray-500">{label.replace('%', '')}</p>
    </div>
  );
}

export default function About() {
  return (
    <section className="py-32 bg-white text-void-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">FOUNDATIONS OF STRENGTH</h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light mb-8">
              At Nammi Construction, we don&apos;t just build structures; we forge relationships and skylines.
              Our commitment to quality is absolute, rooted in a tradition of precision engineering and
              Swiss-inspired architectural rigor.
            </p>
            <p className="text-lg leading-relaxed text-gray-500">
              Every project is a testament to our core philosophy: Stability in structure, integrity in practice.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 border-l border-gray-200 pl-8 md:pl-12">
             <Counter from={0} to={100} label="Projects" />
             <Counter from={0} to={100} label="Satisfaction%" />
             <Counter from={0} to={25} label="Years Experience" />
             <Counter from={0} to={15} label="Awards" />
          </div>
        </div>
      </div>
    </section>
  );
}
