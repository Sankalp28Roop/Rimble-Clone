"use client";

import { useMemo } from "react";
import * as THREE from "three";

function Petal({
  angle,
  tilt,
  scale,
  color,
  index,
}: {
  angle: number;
  tilt: number;
  scale: number;
  color: string;
  index: number;
}) {
  const geometry = useMemo(
    () => new THREE.SphereGeometry(0.35, 12, 12),
    []
  );

  return (
    <mesh
      position={[
        Math.sin(angle) * scale * 0.35,
        0.15 + index * 0.04,
        Math.cos(angle) * scale * 0.35,
      ]}
      rotation={[tilt, angle, 0]}
      scale={[scale, 0.08 + scale * 0.04, scale * 0.55]}
    >
      <primitive object={geometry} />
      <meshPhysicalMaterial
        color={color}
        transparent
        opacity={0.92}
        metalness={0.1}
        roughness={0.35}
        side={THREE.DoubleSide}
        clearcoat={0.15}
      />
    </mesh>
  );
}

export function Lotus() {
  const outerPetals = useMemo(() => {
    const count = 8;
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2,
      tilt: 0.6,
      scale: 1,
      color: "#d4508a",
      index: 0,
    }));
  }, []);

  const midPetals = useMemo(() => {
    const count = 6;
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2 + Math.PI / 8,
      tilt: 0.3,
      scale: 0.75,
      color: "#e8709a",
      index: 1,
    }));
  }, []);

  const innerPetals = useMemo(() => {
    const count = 5;
    return Array.from({ length: count }, (_, i) => ({
      angle: (i / count) * Math.PI * 2 + Math.PI / 5,
      tilt: 0.1,
      scale: 0.5,
      color: "#f498b4",
      index: 2,
    }));
  }, []);

  return (
    <group position={[0, -0.05, 0]}>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.15, 12]} />
        <meshPhysicalMaterial
          color="#ffd700"
          metalness={0.3}
          roughness={0.4}
          emissive="#ffd700"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh position={[0, -0.02, 0]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.15, 0.5, 24]} />
        <meshPhysicalMaterial
          color="#3a7a5a"
          metalness={0.2}
          roughness={0.6}
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {outerPetals.map((p, i) => (
        <Petal key={`outer-${i}`} {...p} index={0} />
      ))}
      {midPetals.map((p, i) => (
        <Petal key={`mid-${i}`} {...p} index={1} />
      ))}
      {innerPetals.map((p, i) => (
        <Petal key={`inner-${i}`} {...p} index={2} />
      ))}
    </group>
  );
}
