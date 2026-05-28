"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 120;

export function LotusParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities, phases, sizes } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT);
    const ph = new Float32Array(COUNT);
    const sz = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 0.6 + Math.random() * 1.6;
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = -0.1 + Math.random() * 1.2;
      pos[i * 3 + 2] = Math.sin(theta) * radius;
      vel[i] = 0.08 + Math.random() * 0.12;
      ph[i] = Math.random() * Math.PI * 2;
      sz[i] = 0.015 + Math.random() * 0.025;
    }

    return { positions: pos, velocities: vel, phases: ph, sizes: sz };
  }, []);

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

    for (let i = 0; i < COUNT; i++) {
      const drift = Math.sin(state.clock.elapsedTime * 0.5 + phases[i]) * 0.004;
      pos[i * 3] += drift;
      pos[i * 3 + 1] += velocities[i] * 0.008;
      pos[i * 3 + 2] += Math.cos(state.clock.elapsedTime * 0.5 + phases[i]) * 0.004;

      if (pos[i * 3 + 1] > 1.6) {
        pos[i * 3 + 1] = -0.2;
        const theta = Math.random() * Math.PI * 2;
        const radius = 0.6 + Math.random() * 1.6;
        pos[i * 3] = Math.cos(theta) * radius;
        pos[i * 3 + 2] = Math.sin(theta) * radius;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    const mat = pointsRef.current.material as THREE.PointsMaterial;
    mat.size = 0.025 + Math.sin(state.clock.elapsedTime * 0.6) * 0.008;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color="#ffa0d0"
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
