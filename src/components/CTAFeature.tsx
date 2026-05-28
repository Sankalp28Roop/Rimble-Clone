"use client";

import { motion } from "framer-motion";

export function CTAFeature() {
  return (
    <section className="relative z-10 px-4 pb-32 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#0a1020] via-[#0d0d14] to-[#050508] px-8 py-20 text-center sm:px-16"
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(72,118,200,0.15),transparent_70%)]" />
            <div className="absolute left-1/2 top-1/2 size-[min(30vw,12rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6eb5ff]/[0.08] blur-3xl" />
          </div>

          <div className="relative">
            <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
              Get started
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Your 3D website
              <br />
              is one prompt away
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50 sm:text-base">
              Join thousands of creators and businesses building stunning 3D websites with Rimble.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.5)] transition-shadow hover:shadow-[0_0_40px_-8px_rgba(110,181,255,0.3)] active:scale-[0.98]"
            >
              Start building free
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
