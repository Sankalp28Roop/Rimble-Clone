"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraControllerProps {
  scrollProgress: number;
}

export function CameraController({ scrollProgress }: CameraControllerProps) {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3());

  useFrame((_state, delta) => {
    const targetY = 2.5 - scrollProgress * 5.5;
    const targetZ = 5 - scrollProgress * 1.5;

    camera.position.y += (targetY - camera.position.y) * Math.min(1, delta * 2);
    camera.position.z += (targetZ - camera.position.z) * Math.min(1, delta * 2);

    const lookTargetY = scrollProgress > 0.5 ? -1.2 : 0.3;
    targetRef.current.set(0, lookTargetY, 0);
    camera.lookAt(targetRef.current);
  });

  return null;
}
