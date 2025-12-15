import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import './Animations.css';

const MasterAnimation = () => {
  const svgRef = useRef(null);
  const craneArmRef = useRef(null);
  const craneTowerRef = useRef(null);
  const hookLineRef = useRef(null);
  const blockRef = useRef(null);
  const roofRef = useRef(null);
  const buildingRef = useRef(null);
  const blocksStackRef = useRef(null);
  const brickWallRef = useRef(null);
  const gearRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Crane arm drawing
    timeline.from(craneArmRef.current, {
      strokeDashoffset: 1000,
      strokeDasharray: 1000,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out'
    });

    // Crane tower
    timeline.from(craneTowerRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.9');

    // Hook line
    timeline.from(hookLineRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      opacity: 0,
      duration: 0.5,
      ease: 'power1.out'
    }, '-=0.2');

    // Concrete block lowering
    timeline.from(blockRef.current, {
      y: -30,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    }, '+=0.2');

    // Roof drawing
    timeline.from(roofRef.current, {
      strokeDashoffset: 500,
      strokeDasharray: 500,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '+=0.3');

    // Building base
    timeline.from(buildingRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.2');

    // Blocks stack
    timeline.from(blocksStackRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');

    // Brick wall
    timeline.from(brickWallRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');

    // Gear rotation
    timeline.from(gearRef.current, {
      rotation: -360,
      opacity: 0,
      transformOrigin: 'center',
      duration: 1,
      ease: 'power2.out'
    }, '-=0.4');

    return () => timeline.kill();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.8 + (i * 0.4),
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <div className="animation-container master-animation">
      <svg ref={svgRef} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        {/* Crane Arm */}
        <path
          ref={craneArmRef}
          d="M 50 120 L 180 120 L 180 90 L 190 90 L 190 120 L 220 120"
          stroke="#1E3A5F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Crane Tower */}
        <rect
          ref={craneTowerRef}
          x="177"
          y="90"
          width="6"
          height="80"
          fill="#1E3A5F"
        />

        {/* Hook Line */}
        <line
          ref={hookLineRef}
          x1="190"
          y1="120"
          x2="190"
          y2="150"
          stroke="#1E3A5F"
          strokeWidth="2"
          strokeDasharray="3,3"
        />

        {/* Concrete Block */}
        <g ref={blockRef}>
          <rect x="175" y="150" width="30" height="20" fill="#8B9DAF" stroke="#1E3A5F" strokeWidth="1" />
          <line x1="180" y1="150" x2="180" y2="170" stroke="#1E3A5F" strokeWidth="0.5" />
          <line x1="195" y1="150" x2="195" y2="170" stroke="#1E3A5F" strokeWidth="0.5" />
        </g>

        {/* House Roof */}
        <path
          ref={roofRef}
          d="M 140 190 L 200 150 L 260 190"
          stroke="#1E3A5F"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Building Base */}
        <g ref={buildingRef}>
          <rect x="150" y="190" width="100" height="80" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="2" />
          <rect x="165" y="205" width="20" height="20" fill="#1E3A5F" opacity="0.8" />
          <rect x="215" y="205" width="20" height="20" fill="#1E3A5F" opacity="0.8" />
          <rect x="185" y="235" width="30" height="35" fill="#1E3A5F" opacity="0.8" />
        </g>

        {/* Building Blocks Stack */}
        <g ref={blocksStackRef}>
          <rect x="265" y="210" width="35" height="15" fill="#D4D4D4" stroke="#8B9DAF" strokeWidth="1" />
          <rect x="268" y="225" width="35" height="15" fill="#E5E5E5" stroke="#8B9DAF" strokeWidth="1" />
          <rect x="265" y="240" width="35" height="15" fill="#D4D4D4" stroke="#8B9DAF" strokeWidth="1" />
          <rect x="268" y="255" width="35" height="15" fill="#E5E5E5" stroke="#8B9DAF" strokeWidth="1" />
        </g>

        {/* Brick Wall */}
        <g ref={brickWallRef}>
          <rect x="310" y="220" width="35" height="50" fill="#FFFFFF" stroke="#8B9DAF" strokeWidth="1" />
          <line x1="310" y1="230" x2="345" y2="230" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="310" y1="240" x2="345" y2="240" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="310" y1="250" x2="345" y2="250" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="310" y1="260" x2="345" y2="260" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="320" y1="220" x2="320" y2="230" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="330" y1="230" x2="330" y2="240" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="320" y1="240" x2="320" y2="250" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="330" y1="250" x2="330" y2="260" stroke="#8B9DAF" strokeWidth="0.5" />
          <line x1="320" y1="260" x2="320" y2="270" stroke="#8B9DAF" strokeWidth="0.5" />
        </g>

        {/* Gear Icon */}
        <g ref={gearRef}>
          <circle cx="305" cy="185" r="12" fill="#FFFFFF" stroke="#1E3A5F" strokeWidth="2" />
          <circle cx="305" cy="185" r="6" fill="#1E3A5F" />
          <rect x="303" y="168" width="4" height="5" fill="#1E3A5F" />
          <rect x="303" y="197" width="4" height="5" fill="#1E3A5F" />
          <rect x="288" y="183" width="5" height="4" fill="#1E3A5F" />
          <rect x="317" y="183" width="5" height="4" fill="#1E3A5F" />
        </g>
      </svg>

      {/* Animated Text */}
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

export default MasterAnimation;
