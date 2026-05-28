"use client";

import { motion } from "framer-motion";
import { ProfileStack } from "./ProfileStack";
import { ReviewsCarousel } from "./ReviewsCarousel";

export function Hero() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden="true">
        <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black/45 to-transparent sm:h-[18%]" />
        <div className="absolute inset-x-0 bottom-0 h-[min(58%,32rem)] bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
      </div>

      <div className="relative z-[2] pointer-events-none" style={{ minHeight: "100dvh" }} aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none fixed inset-x-0 z-20 px-[max(0.75rem,env(safe-area-inset-left))] sm:px-6 lg:px-10 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-1 sm:pt-2 bottom-[max(5rem,calc(env(safe-area-inset-bottom)+3.5rem))] sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))]"
      >
        <div className="pointer-events-auto mx-auto w-full max-w-[min(34rem,calc(100vw-1.5rem))] sm:max-w-xl">
          <div className="overflow-hidden rounded-t-2xl border border-white/12 border-b-white/8 bg-black/50 shadow-[0_-16px_60px_-24px_rgba(0,0,0,0.85)] backdrop-blur-2xl supports-[backdrop-filter]:bg-black/40 sm:rounded-2xl sm:border-b">
            <div className="mx-auto mt-2 h-1 w-9 rounded-full bg-white/25 sm:hidden" aria-hidden="true" />

            <div className="px-3 pb-3 pt-2.5 sm:px-4 sm:pb-3.5 sm:pt-3">
              <div className="mx-auto w-full" aria-live="polite" aria-atomic="true">
                <p className="mb-1.5 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-white/40 sm:text-[10px] sm:tracking-[0.2em]">
                  Loved by small businesses and creators
                </p>

                <div className="flex justify-center">
                  <ProfileStack />
                </div>
              </div>

              <ReviewsCarousel />

              <form className="mt-2.5 overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] sm:mt-3 sm:rounded-2xl">
                <div className="p-2.5 sm:p-3.5">
                  <textarea
                    id="hero-brief"
                    placeholder="Describe your website&hellip;"
                    rows={2}
                    enterKeyHint="go"
                    className="min-h-[3.25rem] w-full resize-none border-0 bg-transparent text-base leading-snug text-white outline-none placeholder:text-white/35 sm:min-h-[3.5rem] sm:text-[15px] sm:leading-relaxed"
                  />
                  <div className="flex items-center justify-between gap-3 pt-0.5">
                    <button
                      type="button"
                      className="flex size-10 min-w-10 items-center justify-center rounded-full text-white/45 transition hover:bg-white/10 hover:text-white active:scale-95 touch-manipulation"
                      aria-label="Attach image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                        <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" />
                      </svg>
                    </button>
                    <button
                      type="submit"
                      className="flex h-10 min-h-10 items-center gap-1.5 rounded-full bg-white px-4 text-[12px] font-semibold text-neutral-900 transition hover:bg-white/92 active:scale-[0.98] touch-manipulation sm:px-5 sm:text-[13px]"
                    >
                      Build
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
