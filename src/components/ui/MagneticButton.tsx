"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  type = "submit",
  onClick,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 120;
    const strength = Math.max(0, 1 - dist / maxDist);
    setOffset({ x: dx * 0.25 * strength, y: dy * 0.25 * strength });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Tag
        href={href}
        type={as === "button" ? type : undefined}
        onClick={onClick}
        aria-label={ariaLabel}
        animate={{ x: offset.x, y: offset.y }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          mass: 0.15,
        }}
        className={className}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
