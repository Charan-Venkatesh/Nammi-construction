import React from 'react';
import { motion } from 'framer-motion';
import './Animations.css';

const MicroAnimation = () => {
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      clipPath: 'circle(0% at 50% 50%)'
    },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'circle(100% at 50% 50%)',
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: 0.8 + (i * 0.3),
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <div className="animation-container micro-animation">
      <motion.svg
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        {/* Simplified icon */}
        <path
          d="M 140 180 L 200 140 L 260 180 L 260 250 L 140 250 Z"
          fill="#FFFFFF"
          stroke="#1E3A5F"
          strokeWidth="3"
        />
        <rect
          x="180"
          y="160"
          width="40"
          height="40"
          fill="#1E3A5F"
          opacity="0.3"
        />
        <circle
          cx="230"
          cy="165"
          r="15"
          fill="#FFFFFF"
          stroke="#1E3A5F"
          strokeWidth="2"
        />
        <circle cx="230" cy="165" r="8" fill="#1E3A5F" />
      </motion.svg>

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

export default MicroAnimation;
