"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Scene } from "@/components/3d/Scene";
import { PixelatedText } from "@/components/ui/PixelatedText";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <>
      <div
        ref={containerRef}
        className="relative z-[1] pointer-events-auto"
        style={{ height: "300vh" }}
      />

      <Scene scrollProgress={progress} />

      {/* ---- UI OVERLAY (non-interactive by default) ---- */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <PixelatedText scrollYProgress={scrollYProgress} />
        <GlassCard />
      </div>
    </>
  );
}
