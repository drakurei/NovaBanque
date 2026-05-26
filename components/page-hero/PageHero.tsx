"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, stagger, easeEditorial } from "@/lib/motion";

export default function PageHero({
  eyebrow,
  title,
  italicWord,
  subtitle,
  imageSrc,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: easeEditorial }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60"
      />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        animate="visible"
        className="relative h-full max-w-[1440px] mx-auto px-8 lg:px-12 flex flex-col justify-end pb-20 lg:pb-24"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.3em] uppercase text-ivoire/80 mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display text-ivoire text-5xl sm:text-7xl lg:text-[96px] leading-[0.98] tracking-tight max-w-4xl"
        >
          {title}
          {italicWord && (
            <>
              {" "}
              <span className="italic">{italicWord}</span>
            </>
          )}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="text-ivoire/85 text-lg lg:text-xl mt-6 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
