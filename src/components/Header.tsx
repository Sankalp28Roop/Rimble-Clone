"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="supports-[padding:max(0px)]:pt-[max(0px,env(safe-area-inset-top))] pointer-events-none fixed inset-x-0 top-0 z-30 px-[max(0.75rem,env(safe-area-inset-left))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 sm:pt-5 lg:px-10">
      <div className="flex w-full justify-between gap-2 pointer-events-auto mx-auto max-w-6xl items-center px-1 py-1 sm:px-2">
        <a className="flex min-w-0 items-center gap-2.5 py-0.5 text-white" href="/">
          <div className="relative shrink-0 overflow-hidden shadow-sm ring-1 size-7 rounded-full bg-white/95 ring-white/25">
            <svg viewBox="0 0 28 28" fill="none" className="size-full object-contain">
              <rect width="28" height="28" rx="14" fill="white" />
              <path
                d="M8 20V8h3.5l3.5 7 3.5-7H22v12h-3V13l-3.5 7L12 13v7H8z"
                fill="#050508"
              />
            </svg>
          </div>
          <span className="text-sm font-semibold leading-none tracking-[-0.025em] text-white drop-shadow-sm">
            Rimble
          </span>
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex" aria-label="Primary" />

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <a
            className="hidden rounded-full px-3 py-2 text-[12px] font-medium text-white/78 transition hover:text-white sm:inline-flex sm:px-4 sm:text-[13px]"
            href="/login"
          >
            Log in
          </a>
          <button
            type="button"
            className="hidden rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-neutral-900 shadow-[0_8px_28px_-14px_rgba(0,0,0,0.5)] transition hover:bg-white/92 sm:inline-flex sm:text-[13px]"
          >
            Get started
          </button>
          <button
            type="button"
            className="inline-flex h-9 min-h-9 items-center rounded-full bg-white px-3.5 text-[11px] font-semibold text-neutral-900 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.5)] transition hover:bg-white/92 active:scale-[0.98] touch-manipulation sm:hidden"
          >
            Start
          </button>
          <button
            type="button"
            className="inline-flex size-10 min-h-10 min-w-10 items-center justify-center rounded-full border border-white/18 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/16 active:scale-95 touch-manipulation md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="marketing-mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="marketing-mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0f]/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              <a href="/login" className="rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white">
                Log in
              </a>
              <button className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">
                Get started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
