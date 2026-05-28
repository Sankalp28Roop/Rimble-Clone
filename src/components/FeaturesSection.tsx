"use client";

import { motion } from "framer-motion";
import { InteractiveCard } from "./InteractiveCard";

const features = [
  {
    title: "AI-Powered 3D",
    description: "Describe your vision and watch as AI generates immersive 3D web experiences in seconds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Custom Branding",
    description: "Tailor every detail to match your brand — colors, typography, motion, and layout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    title: "One-Click Publish",
    description: "Go from prompt to live URL instantly with built-in hosting and custom domain support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: "Analytics Dashboard",
    description: "Track visitors, engagement, and conversions with a beautiful real-time dashboard.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
  },
  {
    title: "SEO Optimized",
    description: "Every site ships with semantic markup, fast loading, and perfect Lighthouse scores.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Mobile Responsive",
    description: "Pixel-perfect on every screen size from mobile to 4K displays.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
];

function MagneticButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-neutral-900 transition-shadow hover:shadow-[0_0_30px_-8px_rgba(110,181,255,0.4)] active:scale-[0.98]"
    >
      {children}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4"
        initial={{ x: 0 }}
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </motion.svg>
    </motion.button>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative z-10 px-4 pb-32 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
            Features
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              stand out online
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
            No coding required. No designers needed. Just your vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <InteractiveCard>
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white/70">
                  {feature.icon}
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </InteractiveCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-10 text-center"
        >
          <MagneticButton>
            Start building
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
