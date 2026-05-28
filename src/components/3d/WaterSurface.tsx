"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { waterVertexShader, waterFragmentShader } from "@/shaders/water";

interface WaterSurfaceProps {
  scrollProgress: number;
}

export function WaterSurface({ scrollProgress }: WaterSurfaceProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollProgress: { value: 0 },
      uWaveHeight: { value: 0.08 },
      uColorAbove: { value: new THREE.Color(0x1a7a9a) },
      uColorBelow: { value: new THREE.Color(0x030a1a) },
      uGlowColor: { value: new THREE.Color(0x4a9aca) },
    }),
    []
  );

  useFrame((_state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta * 0.8;
      materialRef.current.uniforms.uScrollProgress.value = scrollProgress;
    }
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <circleGeometry args={[8, 128]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={waterVertexShader}
        fragmentShader={waterFragmentShader}
        side={THREE.DoubleSide}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}
