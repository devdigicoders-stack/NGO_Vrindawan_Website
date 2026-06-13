import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';

function MovingSparkles() {
  const groupRef = useRef();

  // Slowly rotate the entire sparkles group to give a dynamic, flowing feel
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Golden Fireflies */}
      <Sparkles 
        count={150} 
        scale={20} 
        size={3} 
        speed={0.4} 
        opacity={0.8} 
        color="#FDD835" 
      />
      {/* White ambient dust */}
      <Sparkles 
        count={100} 
        scale={15} 
        size={2} 
        speed={0.2} 
        opacity={0.4} 
        color="#ffffff" 
      />
    </group>
  );
}

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <MovingSparkles />
      </Canvas>
    </div>
  );
}
