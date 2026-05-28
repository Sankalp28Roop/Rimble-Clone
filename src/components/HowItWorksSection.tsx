"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Describe your vision",
    description: "Tell Rimble what kind of website you need in plain English. The more detail, the better.",
  },
  {
    number: "02",
    title: "AI builds your site",
    description: "Our engine generates a fully immersive 3D website with your branding, content, and style.",
  },
  {
    number: "03",
    title: "Customize & publish",
    description: "Fine-tune every detail, connect your domain, and go live with one click.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative z-10 border-t border-white/[0.04] px-4 py-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50">
            How it works
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Three steps to your
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
              new website
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.12 }}
              className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
            >
              <span className="mb-4 block text-[40px] font-bold leading-none tracking-tight text-white/10">
                {step.number}
              </span>
              <h3 className="mb-2 text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
