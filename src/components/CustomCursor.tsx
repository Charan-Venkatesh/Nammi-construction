'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }; // Snappy spring
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-nammi-orange z-[100] pointer-events-none hidden md:block mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 107, 0, 0.1)' : 'transparent',
        }}
      />
      {/* Center Point */}
      <motion.div
         className="fixed top-0 left-0 w-2 h-2 bg-nammi-orange rounded-full z-[101] pointer-events-none hidden md:block"
         style={{
            x: useSpring(cursorX, { damping: 40, stiffness: 1000 }), // Tighter follow
            y: useSpring(cursorY, { damping: 40, stiffness: 1000 }),
            translateX: 12, // Offset to center inside the larger circle (32/2 - 8/2 = 12? No. 32px w -> center is 16. 8px w -> center is 4. Delta 12.)
            translateY: 12
         }}
      />
    </>
  );
}
