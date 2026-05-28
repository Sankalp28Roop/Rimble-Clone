import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";
import { writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "..", "public");

const scene = new THREE.Scene();

function addLayer(count, radius, yOffset, tilt, scale, color) {
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const petal = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 10, 8),
      new THREE.MeshStandardMaterial({
        color,
        metalness: 0.1,
        roughness: 0.3,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide,
      })
    );
    petal.position.set(Math.sin(angle) * radius, yOffset, Math.cos(angle) * radius);
    petal.rotation.set(tilt, angle, 0);
    petal.scale.set(scale, 0.035, scale * 0.55);
    petal.name = "petal";
    scene.add(petal);
  }
}

addLayer(8, 0.25, 0.02, 0.6, 0.9, 0xd4508a);
addLayer(6, 0.18, 0.05, 0.3, 0.7, 0xe8709a);
addLayer(5, 0.1, 0.08, 0.1, 0.5, 0xf498b4);

const core = new THREE.Mesh(
  new THREE.CylinderGeometry(0.06, 0.08, 0.18, 12),
  new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 0.3,
    roughness: 0.3,
    emissive: 0xffd700,
    emissiveIntensity: 0.3,
  })
);
core.position.y = 0.08;
core.name = "core";
scene.add(core);

const pad = new THREE.Mesh(
  new THREE.RingGeometry(0.12, 0.45, 28),
  new THREE.MeshStandardMaterial({
    color: 0x2a6a4a,
    metalness: 0.2,
    roughness: 0.6,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.5,
  })
);
pad.rotation.x = -Math.PI / 2;
pad.position.y = -0.02;
pad.name = "pad";
scene.add(pad);

const exporter = new GLTFExporter();
exporter.parse(
  scene,
  (buffer) => {
    const outPath = resolve(outDir, "lotus.glb");
    writeFileSync(outPath, Buffer.from(buffer));
    console.log("✓ lotus.glb generated at", outPath);
  },
  (err) => console.error("GLB export error:", err),
  { binary: true }
);
