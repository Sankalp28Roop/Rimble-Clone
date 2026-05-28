"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Sofia Chen",
    role: "Creative Director",
    text: "Exactly the wow factor we needed for our brand launch.",
  },
  {
    name: "Marcus Webb",
    role: "Founder",
    text: "Our conversion rate jumped 40% after switching to Rimble.",
  },
  {
    name: "Aria Patel",
    role: "Design Lead",
    text: "I have never seen clients this excited about a website.",
  },
  {
    name: "Liam O'Brien",
    role: "Studio Owner",
    text: "Finally, a tool that understands modern web design.",
  },
];

export function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[active];

  return (
    <div className="w-full pointer-events-auto">
      <div className="relative h-10 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-balance text-xs leading-relaxed text-white/70"
          >
            &ldquo;{t.text}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === active ? "w-5 bg-white/60" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[10px] leading-none text-white/40">
          {t.name}
          <span className="mx-1 text-white/20">&middot;</span>
          {t.role}
        </span>
      </div>
    </div>
  );
}
