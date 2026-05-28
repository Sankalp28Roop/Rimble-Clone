"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticlesProps {
  scrollProgress: number;
  count?: number;
}

export function Particles({ scrollProgress, count = 200 }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 4;
      pos[i * 3] = Math.cos(theta) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6 + 0.5;
      pos[i * 3 + 2] = Math.sin(theta) * r;
      vel[i] = 0.2 + Math.random() * 0.3;
    }
    return [pos, vel];
  }, [count]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    for (let i = 0; i < count; i++) s[i] = 0.01 + Math.random() * 0.025;
    return s;
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, sizes]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(state.clock.elapsedTime * velocities[i] + i) * 0.002;
      if (pos[i * 3 + 1] > 4) pos[i * 3 + 1] = -2;
      if (pos[i * 3 + 1] < -3) pos[i * 3 + 1] = 4;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    const opacity = Math.max(0.2, 0.6 - scrollProgress * 0.4);
    (pointsRef.current.material as THREE.PointsMaterial).opacity = opacity;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        color="#7abaff"
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
