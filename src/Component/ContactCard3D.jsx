import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Box } from '@react-three/drei';

function AnimatedShape({ shape, isHovered }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * (isHovered ? 4 : 0.5);
      meshRef.current.rotation.y += delta * (isHovered ? 4 : 0.5);
      
      // Scale animation
      const targetScale = isHovered ? 1.4 : 1;
      meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.15;
      meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.15;
      meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef}>
      {shape === 'address' && <Torus args={[1.2, 0.4, 16, 32]} />}
      {shape === 'contact' && <Box args={[1.8, 1.8, 1.8]} />}
      {shape === 'hours' && <Sphere args={[1.3, 32, 32]} />}
      
      <meshStandardMaterial 
        color={isHovered ? "#2E7D32" : "#FDD835"} 
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function ContactCard3D({ shape, isHovered }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedShape shape={shape} isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  );
}
