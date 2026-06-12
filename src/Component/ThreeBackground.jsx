import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function ParticleField({ currentSlide }) {
  const pointsRef = useRef();
  const groupRef = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 2.0 }));
  
  const targetRotations = [
    [0, 0, 0],
    [Math.PI / 6, Math.PI / 4, 0],
    [-Math.PI / 8, -Math.PI / 6, Math.PI / 8]
  ];

  useFrame((state, delta) => {
    // 1. Continuous slow rotation of the particles themselves
    if (pointsRef.current) {
      pointsRef.current.rotation.x -= delta / 25;
      pointsRef.current.rotation.y -= delta / 35;
    }

    // 2. Smoothly rotate the wrapper group based on slide
    if (groupRef.current) {
      const target = targetRotations[currentSlide % targetRotations.length];
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, target[0], 0.02);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, target[1], 0.02);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, target[2], 0.02);
    }
  });

  return (
    <group ref={groupRef}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#FDD835"
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground({ currentSlide = 0 }) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 1.2] }}>
        <fog attach="fog" args={['#0a231a', 1, 2.5]} />
        <ParticleField currentSlide={currentSlide} />
      </Canvas>
      {/* Subtle overlay gradient to blend with the background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a231a]/30 to-[#0a231a] z-1" />
    </div>
  );
}
