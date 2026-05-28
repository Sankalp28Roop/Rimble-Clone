"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "GDPR"],
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.04] px-4 pb-8 pt-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <a className="flex items-center gap-2.5 text-white" href="/">
              <div className="relative shrink-0 overflow-hidden size-7 rounded-full bg-white/95">
                <svg viewBox="0 0 28 28" fill="none" className="size-full">
                  <rect width="28" height="28" rx="14" fill="white" />
                  <path d="M8 20V8h3.5l3.5 7 3.5-7H22v12h-3V13l-3.5 7L12 13v7H8z" fill="#050508" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-[-0.025em] text-white">
                Rimble
              </span>
            </a>
            <p className="mt-3 text-xs leading-relaxed text-white/40">
              3D websites from a prompt.<br />
              No code. No designers. Just your vision.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-6 sm:flex-row"
        >
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Rimble. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "GitHub", "Discord", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-white/30 transition hover:text-white/60"
              >
                {social}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
