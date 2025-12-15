import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './Animations.css';

const MinimalAnimation = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.fromTo(
      path,
      {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 0
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 3,
        ease: 'power1.inOut'
      }
    );
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 3 + (i * 0.3),
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <div className="animation-container minimal-animation">
      <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        {/* Single continuous line path */}
        <path
          ref={pathRef}
          d="M 80 140 L 180 140 L 180 110 L 185 110 L 185 140 L 200 140 L 200 160 L 200 170 L 180 175 L 150 200 L 150 250 L 240 250 L 240 200 L 270 180 L 285 180 L 285 250 L 320 250 L 320 230 L 320 210 L 305 200 L 310 185"
          stroke="#1E3A5F"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <motion.div className="brand-text-container">
        <motion.h1
          className="brand-name"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          NAMMI
        </motion.h1>
        <motion.p
          className="brand-subtitle"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          CONSTRUCTIONS
        </motion.p>
      </motion.div>
    </div>
  );
};

export default MinimalAnimation;
