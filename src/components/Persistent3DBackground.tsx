'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function BackgroundStructure() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Slower, more subtle rotation for background
      meshRef.current.rotation.y += 0.0005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
      <group ref={meshRef} rotation={[0, 0, Math.PI / 6]} position={[2, 0, -5]}>
        {/* Large Wireframe Structure */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[15, 15, 15]} />
          <meshBasicMaterial
            color="#1a2c42"
            wireframe
            transparent
            opacity={0.05}
          />
        </mesh>

        {/* Accents */}
        <mesh position={[4, -4, 2]}>
           <boxGeometry args={[2, 8, 2]} />
           <meshStandardMaterial color="#FF4D00" wireframe transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Persistent3DBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-void-navy">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <fog attach="fog" args={['#050A14', 5, 20]} />
        <ambientLight intensity={0.2} />
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <BackgroundStructure />
      </Canvas>
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-navy/80 via-void-navy/50 to-void-navy pointer-events-none"></div>
    </div>
  );
}
