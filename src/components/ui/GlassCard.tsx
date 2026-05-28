"use client";

import { motion } from "framer-motion";
import { AvatarStack } from "./AvatarStack";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { MagneticButton } from "./MagneticButton";

export function GlassCard() {
  return (
    <div className="absolute bottom-0 inset-x-0 flex items-end justify-center pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:pb-8">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        className="w-full max-w-lg px-4 pointer-events-auto"
      >
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a2a]/40 shadow-[0_-24px_64px_-24px_rgba(0,0,0,0.9),_0_0_48px_-16px_rgba(110,181,255,0.06)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#0a0a2a]/30">
          <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-white/20 sm:hidden" />

          <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
            <p className="mb-3 text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40 sm:text-[10px]">
              Loved by small businesses
            </p>

            <div className="mb-3 flex justify-center">
              <AvatarStack />
            </div>

            <TestimonialCarousel />

            <form className="mt-3 overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.03] pointer-events-auto">
              <div className="p-2.5 sm:p-3">
                <textarea
                  placeholder="Describe your website&hellip;"
                  rows={1}
                  className="min-h-[2.5rem] w-full resize-none border-0 bg-transparent text-sm leading-relaxed text-white/90 outline-none placeholder:text-white/25"
                />
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-full text-white/35 transition hover:bg-white/10 hover:text-white/70"
                    aria-label="Attach image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
                    </svg>
                  </button>
                  <MagneticButton
                    type="submit"
                    ariaLabel="Build website"
                    className="group flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-neutral-900 shadow-[0_4px_20px_-8px_rgba(255,255,255,0.15)] transition-shadow duration-300 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.25),_0_4px_20px_-8px_rgba(255,255,255,0.1)] active:scale-[0.97]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:rotate-12"
                    >
                      <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
                    </svg>
                    Build
                  </MagneticButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
