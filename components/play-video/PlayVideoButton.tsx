"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const INSTITUTIONAL_VIDEO =
  "https://videos.pexels.com/video-files/17242140/17242140-hd_1920_1080_24fps.mp4";

export default function PlayVideoButton({
  label = "Découvrir NovaBanque · Film institutionnel · ",
  size = 220,
}: {
  label?: string;
  size?: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Lire le film institutionnel NovaBanque"
        data-cursor="hover"
        className="group relative inline-flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Rotating text around a circular path */}
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full animate-spin-slow text-charcoal"
        >
          <defs>
            <path
              id="circle-text-path"
              d="M 100, 100 m -82, 0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0"
              fill="none"
            />
          </defs>
          <text
            fill="currentColor"
            style={{
              fontFamily: "var(--font-sans), system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <textPath href="#circle-text-path">
              {label.repeat(2)}
            </textPath>
          </text>
        </svg>

        {/* Inner circle with play icon */}
        <span
          className="relative z-[1] flex items-center justify-center rounded-full bg-charcoal text-ivoire transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
          style={{ width: size * 0.55, height: size * 0.55 }}
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 ml-1"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-12"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={INSTITUTIONAL_VIDEO}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover bg-charcoal"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="absolute -top-12 right-0 text-ivoire text-sm tracking-[0.2em] uppercase hover:text-or-soft transition-colors flex items-center gap-3"
              >
                <span>Fermer</span>
                <span aria-hidden className="w-8 h-8 flex items-center justify-center border border-ivoire/30 rounded-full text-base">
                  ×
                </span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
