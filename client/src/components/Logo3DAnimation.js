import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import './Logo3DAnimation.css';

// Swoosh Curve Component - The distinctive curved element
const SwooshCurve3D = ({ animationProgress }) => {
  const swooshRef = useRef();
  const [curveProgress, setCurveProgress] = useState(0);

  useEffect(() => {
    if (animationProgress >= 0.24 && animationProgress < 0.32) {
      setCurveProgress((animationProgress - 0.24) / 0.08);
    } else if (animationProgress >= 0.32) {
      setCurveProgress(1);
    }
  }, [animationProgress]);

  // Create the swoosh curve path matching logo
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-3.2, -1.4, 0),
    new THREE.Vector3(-2, -1.6, 0.1),
    new THREE.Vector3(-1, -1.7, 0.2),
    new THREE.Vector3(0, -1.75, 0.3),
    new THREE.Vector3(1, -1.7, 0.2),
    new THREE.Vector3(2, -1.5, 0.1),
    new THREE.Vector3(3, -1.2, 0),
    new THREE.Vector3(3.5, -0.9, -0.1),
  ]);

  if (curveProgress === 0) return null;

  return (
    <group ref={swooshRef}>
      <mesh castShadow>
        <tubeGeometry args={[curve, 64, 0.09, 12, false]} />
        <meshStandardMaterial 
          color="#1E3A5F" 
          metalness={0.6} 
          roughness={0.3}
          opacity={curveProgress}
          transparent
        />
      </mesh>
    </group>
  );
};

// Crane Component - Builds first (Exact logo design with lattice tower)
const Crane3D = ({ animationProgress }) => {
  const craneRef = useRef();
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (animationProgress >= 0 && animationProgress < 0.12) {
      setScale(animationProgress / 0.12);
    } else if (animationProgress >= 0.12) {
      setScale(1);
    }
  }, [animationProgress]);

  return (
    <group ref={craneRef} position={[-3.5, 2.5, 0]} scale={[scale, scale, scale]}>
      {/* Crane Top Cabin/Head */}
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Long Horizontal Arm (extends right) */}
      <mesh position={[1.8, 0.1, 0]} castShadow>
        <boxGeometry args={[3.2, 0.08, 0.08]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Counter Weight Arm (extends left) */}
      <mesh position={[-0.8, 0.1, 0]} castShadow>
        <boxGeometry args={[1.2, 0.08, 0.08]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Lattice Tower Structure */}
      <mesh position={[0, -1.2, 0]} castShadow>
        <boxGeometry args={[0.12, 2.5, 0.12]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.3} />
      </mesh>
      
      {/* Lattice Cross Beams */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={`cross-${i}`} position={[0, -0.3 - i * 0.5, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
          <boxGeometry args={[0.25, 0.04, 0.04]} />
          <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
      
      {/* Hook Cable */}
      <mesh position={[2.8, -0.6, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 1.8, 8]} />
        <meshStandardMaterial color="#5A6B7D" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Hook */}
      <mesh position={[2.8, -1.6, 0]} castShadow>
        <coneGeometry args={[0.06, 0.15, 6]} />
        <meshStandardMaterial color="#8B9DAF" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

// Concrete Block - Lowers from crane to center position
const ConcreteBlock3D = ({ animationProgress }) => {
  const blockRef = useRef();
  const [position, setPosition] = useState([0.5, 3, 0]);

  useEffect(() => {
    if (animationProgress >= 0.12 && animationProgress < 0.24) {
      const progress = (animationProgress - 0.12) / 0.12;
      const y = 3 - progress * 2.2; // Lower from crane
      setPosition([0.5, y, 0]);
    } else if (animationProgress >= 0.24) {
      setPosition([0.5, 0.8, 0]);
    } else {
      setPosition([0.5, 3, 0]);
    }
  }, [animationProgress]);

  const opacity = animationProgress >= 0.12 ? 1 : 0;

  return (
    <mesh ref={blockRef} position={position} castShadow visible={opacity > 0}>
      <boxGeometry args={[0.5, 0.35, 0.35]} />
      <meshStandardMaterial 
        color="#9CA8B3" 
        metalness={0.2} 
        roughness={0.8}
        transparent
        opacity={opacity}
      />
    </mesh>
  );
};

// House Structure - Exact logo design with white walls and navy roof
const House3D = ({ animationProgress }) => {
  const houseRef = useRef();
  const [roofScale, setRoofScale] = useState(0);
  const [wallsScale, setWallsScale] = useState(0);

  useEffect(() => {
    // Roof appears
    if (animationProgress >= 0.3 && animationProgress < 0.38) {
      setRoofScale((animationProgress - 0.3) / 0.08);
    } else if (animationProgress >= 0.38) {
      setRoofScale(1);
    }

    // Walls appear
    if (animationProgress >= 0.38 && animationProgress < 0.46) {
      setWallsScale((animationProgress - 0.38) / 0.08);
    } else if (animationProgress >= 0.46) {
      setWallsScale(1);
    }
  }, [animationProgress]);

  return (
    <group ref={houseRef} position={[-0.8, -0.3, 0]}>
      {/* Triangular Roof - Navy Blue */}
      <mesh position={[0, 1.3, 0]} scale={[roofScale, roofScale, roofScale]} castShadow rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[1.1, 0.9, 4]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.3} roughness={0.6} />
      </mesh>
      
      {/* Main House Body - White */}
      <mesh position={[0, 0.5, 0]} scale={[wallsScale, wallsScale, wallsScale]} castShadow>
        <boxGeometry args={[1.8, 1.3, 1.3]} />
        <meshStandardMaterial color="#F5F5F5" metalness={0.05} roughness={0.9} />
      </mesh>
      
      {/* Left Window - Navy */}
      {wallsScale > 0.5 && (
        <mesh position={[-0.45, 0.65, 0.66]} castShadow>
          <boxGeometry args={[0.35, 0.35, 0.04]} />
          <meshStandardMaterial color="#1E3A5F" opacity={0.9} transparent />
        </mesh>
      )}
      
      {/* Right Window - Navy */}
      {wallsScale > 0.5 && (
        <mesh position={[0.45, 0.65, 0.66]} castShadow>
          <boxGeometry args={[0.35, 0.35, 0.04]} />
          <meshStandardMaterial color="#1E3A5F" opacity={0.9} transparent />
        </mesh>
      )}
      
      {/* Window Dividers */}
      {wallsScale > 0.6 && (
        <>
          <mesh position={[-0.45, 0.65, 0.68]}>
            <boxGeometry args={[0.35, 0.03, 0.02]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[-0.45, 0.65, 0.68]}>
            <boxGeometry args={[0.03, 0.35, 0.02]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0.45, 0.65, 0.68]}>
            <boxGeometry args={[0.35, 0.03, 0.02]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
          <mesh position={[0.45, 0.65, 0.68]}>
            <boxGeometry args={[0.03, 0.35, 0.02]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        </>
      )}
      
      {/* Door - Navy */}
      {wallsScale > 0.7 && (
        <mesh position={[0, -0.05, 0.66]} castShadow>
          <boxGeometry args={[0.45, 0.85, 0.04]} />
          <meshStandardMaterial color="#1E3A5F" />
        </mesh>
      )}
    </group>
  );
};

// Building Blocks Stack - Layered concrete blocks (exact logo style)
const BlocksStack3D = ({ animationProgress }) => {
  const stackRef = useRef();
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (animationProgress >= 0.46 && animationProgress < 0.54) {
      setScale((animationProgress - 0.46) / 0.08);
    } else if (animationProgress >= 0.54) {
      setScale(1);
    }
  }, [animationProgress]);

  return (
    <group ref={stackRef} position={[1.2, 0.2, 0]} scale={[scale, scale, scale]}>
      {/* Stack of cylindrical concrete blocks with horizontal lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <group key={i} position={[0, i * 0.28, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.25, 16]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#B8C1CA" : "#C8D0D8"} 
              metalness={0.15} 
              roughness={0.85}
            />
          </mesh>
          {/* Horizontal groove lines */}
          <mesh position={[0, 0.13, 0]}>
            <cylinderGeometry args={[0.36, 0.36, 0.02, 16]} />
            <meshStandardMaterial color="#8B9DAF" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

// Brick Wall - Detailed brick pattern (exact logo style)
const BrickWall3D = ({ animationProgress }) => {
  const wallRef = useRef();
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (animationProgress >= 0.54 && animationProgress < 0.62) {
      setScale((animationProgress - 0.54) / 0.08);
    } else if (animationProgress >= 0.62) {
      setScale(1);
    }
  }, [animationProgress]);

  return (
    <group ref={wallRef} position={[2.8, 0, 0]} scale={[scale, scale, scale]}>
      {/* Main wall structure */}
      <mesh castShadow>
        <boxGeometry args={[0.7, 1.6, 0.4]} />
        <meshStandardMaterial color="#E8EBED" metalness={0.05} roughness={0.95} />
      </mesh>
      
      {/* Horizontal brick lines */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <mesh key={`h-${i}`} position={[0, -0.7 + i * 0.24, 0.21]}>
          <boxGeometry args={[0.72, 0.015, 0.015]} />
          <meshStandardMaterial color="#8B9DAF" />
        </mesh>
      ))}
      
      {/* Vertical brick lines - staggered pattern */}
      {[0, 1, 2, 3, 4, 5].map((row) => {
        const cols = row % 2 === 0 ? [0, 1, 2] : [0.5, 1.5];
        return cols.map((col) => (
          <mesh key={`v-${row}-${col}`} position={[col * 0.24 - 0.36, -0.7 + row * 0.24, 0.21]}>
            <boxGeometry args={[0.015, 0.24, 0.015]} />
            <meshStandardMaterial color="#8B9DAF" />
          </mesh>
        ));
      })}
    </group>
  );
};

// Gear3D component
const Gear3D = ({ animationProgress }) => {
  const gearRef = useRef();
  const [scale, setScale] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (animationProgress >= 0.62 && animationProgress < 0.72) {
      const progress = (animationProgress - 0.62) / 0.1;
      setScale(progress);
      setRotation(progress * Math.PI * 2);
    } else if (animationProgress >= 0.72) {
      setScale(1);
      setRotation(Math.PI * 2);
    }
  }, [animationProgress]);

  return (
    <group 
      ref={gearRef} 
      position={[0.8, -1.2, 0.3]} 
      scale={[scale, scale, scale]}
      rotation={[0, 0, rotation]}
    >
      {/* Main gear body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.18, 12]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Center hole */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.22, 12]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.5} roughness={0.4} />
      </mesh>
      
      {/* Gear teeth - 12 teeth for industrial look */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 0.46;
        const z = Math.sin(angle) * 0.46;
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]} castShadow>
            <boxGeometry args={[0.12, 0.18, 0.16]} />
            <meshStandardMaterial color="#1E3A5F" metalness={0.7} roughness={0.3} />
          </mesh>
        );
      })}
      
      {/* Inner gear detail */}
      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 12, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.19, 6]} />
        <meshStandardMaterial color="#1E3A5F" metalness={0.6} roughness={0.4} />
      </mesh>meshStandardMaterial color="#1E3A5F" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Center hole */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.25, 8]} />
        <meshStandardMaterial color="#8B9DAF" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Gear teeth */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 0.55;
        const z = Math.sin(angle) * 0.55;
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, angle, 0]} castShadow>
            <boxGeometry args={[0.15, 0.2, 0.2]} />
            <meshStandardMaterial color="#1E3A5F" metalness={0.7} roughness={0.3} />
          </mesh>
        );
      })}
    </group>
  );
};

// 3D Text Component
const BrandText3D = ({ animationProgress }) => {
  const textRef = useRef();
  const [scale, setScale] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (animationProgress >= 0.8 && animationProgress < 0.9) {
      const progress = (animationProgress - 0.8) / 0.1;
      setScale(progress);
      setOpacity(progress);
    } else if (animationProgress >= 0.9) {
      setScale(1);
      setOpacity(1);
    }
  }, [animationProgress]);

  return (
    <group ref={textRef} position={[0, -2.5, 0]} scale={[scale, scale, scale]}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          NAMMI
          <meshStandardMaterial 
            color="#1E3A5F" 
            metalness={0.5} 
            roughness={0.4}
            transparent
            opacity={opacity}
          />
        </Text3D>
      </Center>
      
      <Center position={[0, -0.8, 0]}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.25}
          height={0.1}
          curveSegments={8}
        >
          CONSTRUCTIONS
          <meshStandardMaterial 
            color="#1E3A5F" 
            metalness={0.3} 
            roughness={0.6}
            transparent
            opacity={opacity * 0.9}
          />
        </Text3D>
      </Center>
    </group>
  );
};

// Main Scene Component
const Scene = ({ animationProgress }) => {
  const cameraRef = useRef();

  // Camera movement
  useFrame(() => {
    if (cameraRef.current) {
      // Subtle camera rotation
      const rotation = animationProgress * Math.PI * 0.3;
      cameraRef.curren- In exact logo order */}
      <Crane3D animationProgress={animationProgress} />
      <ConcreteBlock3D animationProgress={animationProgress} />
      <SwooshCurve
  });

  return (
    <>
      <PerspectiveCamera 
        ref={cameraRef}
        makeDefault 
        position={[0, 2, 10]} 
        fov={50}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-10, 5, -5]} intensity={0.3} />
      <pointLight position={[0, 5, 0]} intensity={0.5} />
      
      {/* 3D Elements */}
      <Crane3D animationProgress={animationProgress} />
      <ConcreteBlock3D animationProgress={animationProgress} />
      <House3D animationProgress={animationProgress} />
      <BlocksStack3D animationProgress={animationProgress} />
      <BrickWall3D animationProgress={animationProgress} />
      <Gear3D animationProgress={animationProgress} />
      <BrandText3D animationProgress={animationProgress} />
      
      {/* Ground Plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.1} />
      </mesh>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
};

// Main Component
const Logo3DAnimation = () => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setAnimationProgress(progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <div className="canvas-container">
      <Canvas shadows>
        <Scene animationProgress={animationProgress} />
      </Canvas>
      
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${animationProgress * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Logo3DAnimation;
