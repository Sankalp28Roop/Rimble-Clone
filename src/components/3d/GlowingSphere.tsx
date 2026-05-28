"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function GlowingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = 1.8 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
    if (glowRef.current) {
      glowRef.current.position.y = 1.8 + Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.05);
    }
  });

  return (
    <group>
      <mesh ref={sphereRef} position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhysicalMaterial
          color="#fff8e8"
          emissive="#ffe8b0"
          emissiveIntensity={1.2}
          metalness={0.0}
          roughness={0.1}
          transparent
          opacity={0.95}
        />
      </mesh>

      <mesh ref={glowRef} position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial
          color="#ffe8b0"
          transparent
          opacity={0.12}
          depthWrite={false}
        />
      </mesh>

      <pointLight
        position={[0, 1.8, 0]}
        intensity={15}
        distance={6}
        decay={2}
        color="#ffe8b0"
      />
    </group>
  );
}
