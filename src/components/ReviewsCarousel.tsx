"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Rachel Kim",
    role: "Salon owner",
    text: "Our site finally looks high-end. Clients keep asking who designed it.",
  },
  {
    name: "James Ortiz",
    role: "Restaurant owner",
    text: "I built my whole site in one afternoon. Unbelievable.",
  },
  {
    name: "Priya Shah",
    role: "Photographer",
    text: "My portfolio site got 3x more inquiries since switching.",
  },
  {
    name: "Leo Martins",
    role: "Fitness coach",
    text: "It literally pays for itself. Best decision I've made for my brand.",
  },
  {
    name: "Emma Walsh",
    role: "Jewelry designer",
    text: "The 3D product viewer alone is worth it. Stunning results.",
  },
  {
    name: "David Park",
    role: "Architect",
    text: "I've referred four colleagues. They all thought I hired a pricey agency.",
  },
  {
    name: "Nina Brooks",
    role: "Spa owner",
    text: "Sophisticated, fast, and my clients are consistently impressed.",
  },
  {
    name: "Marcus Cole",
    role: "Barber shop owner",
    text: "Booking requests doubled. The site looks way better than my old one.",
  },
];

export function ReviewsCarousel() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[active];

  return (
    <div className="mx-auto w-full" aria-live="polite" aria-atomic="true">
      <p className="mb-1.5 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
        Loved by small businesses and creators
      </p>

      <div className="flex justify-center">
        {/* ProfileStack is rendered separately */}
      </div>

      <div className="mt-2 flex justify-center gap-1" role="tablist" aria-label="Reviews">
        {reviews.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Review by ${reviews[i].name}`}
            onClick={() => setActive(i)}
            className={`h-1 rounded-full transition-all duration-500 touch-manipulation ${
              i === active
                ? "w-4 bg-white/55"
                : "w-1 bg-white/30 opacity-50"
            }`}
          />
        ))}
      </div>

      <div className="relative mt-2 min-h-[3.25rem] overflow-hidden sm:min-h-[3.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-1 text-center sm:px-2"
          >
            <p className="text-balance text-[12px] leading-snug tracking-[-0.01em] text-white/80 sm:text-[13px] sm:leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="mt-1 text-[10px] text-white/48 sm:text-[11px]">
              <span className="font-medium text-white/65">{review.name}</span>
              <span className="text-white/32" aria-hidden="true"> &middot; </span>
              {review.role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
