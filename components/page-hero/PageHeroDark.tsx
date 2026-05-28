"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { fadeUp, stagger, easeEditorial } from "@/lib/motion";

export default function PageHeroDark({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 500px at 50% 0%, rgba(91, 71, 255, 0.28), transparent 70%)",
        }}
      />

      {/* Concentric sacred rings */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 flex items-center justify-center pointer-events-none opacity-30"
      >
        <div className="relative w-[700px] h-[700px] -translate-y-1/3">
          <div className="absolute inset-0 rounded-full border border-navy/30 animate-sacred-rotate" />
          <div className="absolute inset-[10%] rounded-full border border-navy/25 animate-sacred-rotate-reverse" />
          <div className="absolute inset-[22%] rounded-full border border-navy/20 animate-sacred-rotate" />
        </div>
      </div>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-2 mb-6 flex items-center justify-center gap-3"
        >
          <Sparkles size={13} className="text-navy" />
          {eyebrow}
          <Sparkles size={13} className="text-navy" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: easeEditorial, delay: 0.2 }}
          className="font-display text-ink leading-[0.9] tracking-tighter font-bold"
          style={{ fontSize: "clamp(48px, 7vw, 110px)" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="text-ink-2 text-base lg:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
