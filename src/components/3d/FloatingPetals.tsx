"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingPetalsProps {
  scrollProgress: number;
}

export function FloatingPetals({ scrollProgress }: FloatingPetalsProps) {
  const groupRef = useRef<THREE.Group>(null);

  const petalData = useMemo(() => {
    const data: {
      x: number;
      y: number;
      z: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      speed: number;
      scale: number;
    }[] = [];
    for (let i = 0; i < 12; i++) {
      data.push({
        x: (Math.random() - 0.5) * 5,
        y: -1.5 - Math.random() * 3,
        z: (Math.random() - 0.5) * 5,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.4,
        scale: 0.08 + Math.random() * 0.12,
      });
    }
    return data;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      if (i < petalData.length) {
        const d = petalData[i];
        child.rotation.x += Math.sin(state.clock.elapsedTime * d.speed * 0.5) * 0.005;
        child.rotation.y += d.speed * 0.008;
        child.position.y = d.y + Math.sin(state.clock.elapsedTime * d.speed + i) * 0.2;
      }
    });

    const opacity = Math.min(1, Math.max(0, (scrollProgress - 0.3) * 2.5));
    groupRef.current.children.forEach((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.material) {
        (mesh.material as THREE.MeshPhysicalMaterial).opacity = opacity * 0.7;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {petalData.map((d, i) => (
        <mesh
          key={i}
          position={[d.x, d.y, d.z]}
          rotation={[d.rotX, d.rotY, d.rotZ]}
          scale={[d.scale, d.scale * 0.1, d.scale * 0.6]}
        >
          <sphereGeometry args={[0.5, 8, 8]} />
          <meshPhysicalMaterial
            color="#d4508a"
            transparent
            opacity={0}
            metalness={0.1}
            roughness={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
