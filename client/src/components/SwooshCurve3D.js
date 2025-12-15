import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Swoosh Curve - The distinctive curved element from the logo
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

  // Create the swoosh curve path
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-3, -1.5, 0),
    new THREE.Vector3(-2, -1.7, 0),
    new THREE.Vector3(-1, -1.8, 0.2),
    new THREE.Vector3(0, -1.85, 0.3),
    new THREE.Vector3(1, -1.8, 0.2),
    new THREE.Vector3(2, -1.6, 0),
    new THREE.Vector3(3, -1.3, 0),
    new THREE.Vector3(3.5, -1, 0),
  ]);

  const points = curve.getPoints(100);
  const visiblePoints = points.slice(0, Math.floor(points.length * curveProgress));

  if (visiblePoints.length < 2) return null;

  const geometry = new THREE.BufferGeometry().setFromPoints(visiblePoints);

  return (
    <group ref={swooshRef}>
      <line geometry={geometry}>
        <lineBasicMaterial color="#1E3A5F" linewidth={3} />
      </line>
      
      {/* Tube version for better 3D appearance */}
      {curveProgress > 0 && (
        <mesh castShadow>
          <tubeGeometry args={[curve, 64, 0.08, 8, false]} />
          <meshStandardMaterial 
            color="#1E3A5F" 
            metalness={0.6} 
            roughness={0.3}
            opacity={curveProgress}
            transparent
          />
        </mesh>
      )}
    </group>
  );
};

export default SwooshCurve3D;
