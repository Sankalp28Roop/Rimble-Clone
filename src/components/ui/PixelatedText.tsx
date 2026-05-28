"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface PixelatedTextProps {
  scrollYProgress: MotionValue<number>;
}

export function PixelatedText({ scrollYProgress }: PixelatedTextProps) {
  const topOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 0.5, 0]);
  const topY = useTransform(scrollYProgress, [0, 0.35], [0, -24]);
  const topFilter = useTransform(
    scrollYProgress,
    [0, 0.35],
    ["blur(0px)", "blur(4px)"]
  );

  const bottomOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.55, 0.75],
    [0, 0.5, 1]
  );
  const bottomY = useTransform(scrollYProgress, [0.4, 0.75], [24, 0]);
  const bottomFilter = useTransform(
    scrollYProgress,
    [0.4, 0.75],
    ["blur(4px)", "blur(0px)"]
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.h1
        style={{ opacity: topOpacity, y: topY, filter: topFilter }}
        className="absolute select-none text-center"
      >
        <span className="block text-[clamp(2.5rem,9vw,7rem)] font-black leading-none tracking-[0.2em] text-white"
          style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 60px rgba(255,255,255,0.10), 0 0 120px rgba(110,181,255,0.08)" }}
        >
          BUILT WITH
        </span>
        <span className="block text-[clamp(1.8rem,6.5vw,5rem)] font-bold leading-none tracking-[0.35em] text-white/70"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          RIMBLE.APP
        </span>
      </motion.h1>

      <motion.h1
        style={{ opacity: bottomOpacity, y: bottomY, filter: bottomFilter }}
        className="absolute select-none text-center"
      >
        <span className="block text-[clamp(2.5rem,9vw,7rem)] font-black leading-none tracking-[0.2em] text-white"
          style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 60px rgba(110,181,255,0.15), 0 0 120px rgba(110,181,255,0.08)" }}
        >
          SINCE
        </span>
        <span className="block text-[clamp(2rem,7vw,5.5rem)] font-bold leading-none tracking-[0.4em] text-white/70"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          2026
        </span>
      </motion.h1>
    </div>
  );
}
