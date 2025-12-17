'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import ConstructionScene from './ConstructionScene';

export default function Persistent3DBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none bg-white">
      <Canvas camera={{ position: [5, 2, 8], fov: 40 }} shadows>
        {/* Lighting for Day Scene */}
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />

        {/* The 3D Construction Scene */}
        <group position={[2, -0.5, -2]}>
           <ConstructionScene />
        </group>

        {/* Shadows for grounding */}
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      </Canvas>

      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#002855 1px, transparent 1px), linear-gradient(90deg, #002855 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Gradient Fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none max-w-2xl"></div>
    </div>
  );
}
