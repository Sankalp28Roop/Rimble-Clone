"use client";

import { Canvas } from "@react-three/fiber";
import { CameraController } from "./CameraController";
import { WaterSurface } from "./WaterSurface";
import { LotusModel } from "./LotusModel";
import { LotusContainer } from "./LotusContainer";
import { LotusParticles } from "./LotusParticles";
import { GlowingSphere } from "./GlowingSphere";
import { Particles } from "./Particles";
import { FloatingPetals } from "./FloatingPetals";
import { Effects } from "./Effects";

interface SceneProps {
  scrollProgress: number;
}

function SceneContent({ scrollProgress }: SceneProps) {
  return (
    <>
      <CameraController scrollProgress={scrollProgress} />

      <ambientLight intensity={0.25} color="#405070" />
      <directionalLight position={[3, 6, 4]} intensity={0.9} color="#ffe4c0" />
      <directionalLight position={[-4, -2, 5]} intensity={0.35} color="#5090d0" />

      <WaterSurface scrollProgress={scrollProgress} />

      <LotusContainer>
        <LotusModel />
      </LotusContainer>

      <LotusParticles />
      <GlowingSphere />
      <Particles scrollProgress={scrollProgress} />
      <FloatingPetals scrollProgress={scrollProgress} />

      <Effects />

      <fog attach="fog" args={["#050510", 5, 14]} />
    </>
  );
}

export function Scene({ scrollProgress }: SceneProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{
          position: [0, 2.5, 5],
          fov: 55,
          near: 0.1,
          far: 20,
        }}
        gl={{
          antialias: true,
          alpha: false,
          outputColorSpace: "srgb",
          toneMapping: 3,
          toneMappingExposure: 1.0,
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#050510"]} />
        <SceneContent scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
