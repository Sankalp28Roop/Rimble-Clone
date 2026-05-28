"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function BackgroundEffects() {
  const mouse = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="relative overflow-hidden bg-[#050508] size-full" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_38%,rgba(72,118,200,0.28),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_92%,rgba(18,42,95,0.55),transparent_58%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1020]/80 via-transparent to-[#050508]/90" />
        <div
          className="absolute left-1/2 top-[42%] size-[min(42vw,14rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${(mouse.x - 0.5) * 20}px), calc(-50% + ${(mouse.y - 0.5) * 20}px))`,
          }}
        />
        <div
          className="absolute left-1/2 top-[48%] size-[min(28vw,9rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6eb5ff]/[0.12] blur-2xl"
          style={{
            transform: `translate(calc(-50% + ${(mouse.x - 0.5) * -30}px), calc(-50% + ${(mouse.y - 0.5) * -30}px))`,
          }}
        />
      </div>
    </div>
  );
}

export function SpotlightEffect({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative group ${className}`}>
      <div className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(110,181,255,0.15),transparent_60%)]"
          onMouseMove={(e) => {
            const rect = e.currentTarget.parentElement?.getBoundingClientRect();
            if (rect) {
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
              e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
            }
          }}
        />
      </div>
      {children}
    </div>
  );
}
