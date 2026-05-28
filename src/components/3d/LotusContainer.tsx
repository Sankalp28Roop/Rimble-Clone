"use client";

import { useRef, ReactNode } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface LotusContainerProps {
  children: ReactNode;
}

export function LotusContainer({ children }: LotusContainerProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetRotX = state.pointer.y * 0.12;
    const targetRotY = state.pointer.x * 0.15;
    const targetPosY = 0.03 + Math.sin(state.clock.elapsedTime * 0.4) * 0.02;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.04
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.04
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetPosY,
      0.03
    );

    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.3) * 0.008;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(groupRef.current.scale.x, scale, 0.03)
    );
  });

  return <group ref={groupRef}>{children}</group>;
}
