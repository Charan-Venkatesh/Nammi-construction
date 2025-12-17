'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

function Crane({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      // Gentle floating/rotation
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const navy = "#002855";
  const orange = "#FF6B00";
  const steel = "#A0A0A0";

  return (
    <group ref={group} position={new THREE.Vector3(...position)} scale={0.8}>
      {/* Base */}
      <Box args={[1, 0.2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color={navy} />
      </Box>

      {/* Tower */}
      <Box args={[0.2, 5, 0.2]} position={[0, 2.5, 0]}>
         <meshStandardMaterial color={orange} />
      </Box>

      {/* Cab */}
      <Box args={[0.6, 0.5, 0.6]} position={[0, 4.8, 0]}>
         <meshStandardMaterial color={navy} />
      </Box>

      {/* Jib (Arm) */}
      <Box args={[4, 0.15, 0.15]} position={[1.5, 5, 0]}>
         <meshStandardMaterial color={orange} />
      </Box>

      {/* Counter Jib */}
      <Box args={[1.5, 0.15, 0.15]} position={[-0.75, 5, 0]}>
         <meshStandardMaterial color={navy} />
      </Box>

      {/* Counterweight */}
      <Box args={[0.5, 0.4, 0.3]} position={[-1.2, 4.8, 0]}>
         <meshStandardMaterial color={steel} />
      </Box>

      {/* Cable & Hook */}
      <group position={[2.5, 4.9, 0]}>
         <Cylinder args={[0.01, 0.01, 2]} position={[0, -1, 0]}>
            <meshStandardMaterial color="black" />
         </Cylinder>
         <Box args={[0.3, 0.1, 0.3]} position={[0, -2, 0]}>
            <meshStandardMaterial color={orange} />
         </Box>
      </group>
    </group>
  );
}

function BuildingFrame({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
   return (
      <group position={new THREE.Vector3(...position)}>
         {/* Main Structure Wireframe */}
         <Box args={[3, 5, 3]} position={[0, 2.5, 0]}>
            <meshStandardMaterial color="#002855" wireframe opacity={0.3} transparent />
         </Box>

         {/* Floors */}
         {[0, 1, 2, 3, 4, 5].map(i => (
            <Box key={i} args={[3.1, 0.1, 3.1]} position={[0, i, 0]}>
               <meshStandardMaterial color="#E0E0E0" />
            </Box>
         ))}

         {/* Concrete Core */}
         <Box args={[1, 5, 1]} position={[0, 2.5, 0]}>
            <meshStandardMaterial color="#F0F0F0" />
         </Box>
      </group>
   );
}

export default function ConstructionScene() {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
      <group rotation={[0, -Math.PI / 6, 0]}>
        <BuildingFrame position={[0, -2, 0]} />
        <Crane position={[1.5, -2, 1.5]} />

        {/* Abstract shapes floating */}
        <Box args={[0.5, 0.5, 0.5]} position={[-2, 1, 2]} rotation={[0.5, 0.5, 0]}>
           <meshStandardMaterial color="#FF6B00" />
        </Box>
         <Box args={[0.3, 0.3, 0.3]} position={[2, 3, -1]} rotation={[0.2, 0.1, 0]}>
           <meshStandardMaterial color="#002855" />
        </Box>
      </group>
    </Float>
  );
}
