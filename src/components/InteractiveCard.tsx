"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useMousePosition";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function InteractiveCard({
  children,
  className = "",
  glowColor = "rgba(110,181,255,0.12)",
}: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const tilt = useTilt(ref, 8);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-shadow duration-500 hover:border-white/20 hover:shadow-[0_0_40px_-8px_rgba(110,181,255,0.15)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}, transparent 60%)`,
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
          e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
        }}
      />
      {children}
    </motion.div>
  );
}
