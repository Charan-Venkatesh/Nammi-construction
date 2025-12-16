'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function ArchitecturalStructure() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} rotation={[0, 0, Math.PI / 4]}>
        {/* Abstract I-Beam / Architectural Shape */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 4, 1]} />
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            transmission={0.5}
            thickness={2}
            clearcoat={1}
          />
        </mesh>

        <mesh position={[0.8, 0, 0]} rotation={[0, 0, 0]}>
           <boxGeometry args={[0.2, 3.8, 0.8]} />
            <meshStandardMaterial color="#FF4D00" emissive="#FF4D00" emissiveIntensity={0.5} wireframe />
        </mesh>

         <mesh position={[-0.8, 0, 0]} rotation={[0, 0, 0]}>
           <boxGeometry args={[0.2, 3.8, 0.8]} />
            <meshStandardMaterial color="#0B2545" wireframe />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 md:opacity-100">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <ArchitecturalStructure />
      </Canvas>
    </div>
  );
}
