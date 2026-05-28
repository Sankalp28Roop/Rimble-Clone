"use client";

import { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { LotusFallback } from "./LotusFallback";

const GLOW_PINK = new THREE.Color(0xff69b4);
const GLOW_GOLD = new THREE.Color(0xffd700);
const GLOW_CYAN = new THREE.Color(0x4ac0ff);

function applyMaterials(scene: THREE.Group) {
  scene.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;

    const name = child.name.toLowerCase();
    const orig = child.material as THREE.MeshStandardMaterial | undefined;
    if (!orig) return;

    let mat: THREE.MeshStandardMaterial;

    if (name.includes("petal") || name.includes("flower") || name.includes("lotus")) {
      mat = orig.clone();
      mat.emissive = GLOW_PINK;
      mat.emissiveIntensity = 1.8;
      mat.metalness = 0.1;
      mat.roughness = 0.25;
      child.material = mat;
    } else if (name.includes("core") || name.includes("center") || name.includes("stamen")) {
      mat = orig.clone();
      mat.emissive = GLOW_GOLD;
      mat.emissiveIntensity = 2.5;
      mat.metalness = 0.3;
      mat.roughness = 0.2;
      child.material = mat;
    } else if (name.includes("leaf") || name.includes("pad") || name.includes("base")) {
      mat = orig.clone();
      mat.emissive = GLOW_CYAN;
      mat.emissiveIntensity = 0.4;
      mat.metalness = 0.2;
      mat.roughness = 0.6;
      child.material = mat;
    }
  });
}

export function LotusModel() {
  const [scene, setScene] = useState<THREE.Group | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/lotus.glb",
      (gltf) => {
        const clone = gltf.scene.clone(true);
        applyMaterials(clone);
        setScene(clone);
      },
      undefined,
      () => setFailed(true)
    );
  }, []);

  if (failed) return <LotusFallback />;
  if (!scene) return <LotusFallback />;

  return <primitive object={scene} />;
}
