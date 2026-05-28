"use client";

import { motion } from "motion/react";
import { Infinity as InfinityIcon, Compass, Triangle, Aperture, Hexagon } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/**
 * Sacred-geometry style text — words intercalated with glowing geometric icons.
 * Inspired by superconscious.io "Mind ⌬ Manifest 🜨 Your Reality".
 */
export default function SacredGeometry() {
  return (
    <section className="relative py-32 lg:py-48">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-[1440px] mx-auto px-6 lg:px-12"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-2 text-center mb-16"
        >
          — Notre approche
        </motion.p>

        {/* Cross / scattered layout like the video */}
        <div className="relative max-w-5xl mx-auto">
          {/* Top center */}
          <motion.div
            variants={fadeUp}
            className="text-center text-2xl sm:text-3xl lg:text-4xl text-ink-2 mb-6"
          >
            Votre
          </motion.div>

          {/* Middle row : Patrimoine ⌬ Rencontre */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center flex-wrap gap-x-6 gap-y-4 text-3xl sm:text-5xl lg:text-7xl"
          >
            <span className="font-display font-bold">Patrimoine</span>

            <span className="relative flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 hairline rounded-2xl glow-violet-soft">
              <InfinityIcon className="w-7 h-7 lg:w-12 lg:h-12 text-navy animate-sacred-pulse" strokeWidth={1.2} />
            </span>

            <span className="italic-serif text-ink-2">rencontre</span>
          </motion.div>

          {/* Bottom row : Le ⌑ Léman */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center flex-wrap gap-x-6 gap-y-4 text-3xl sm:text-5xl lg:text-7xl mt-6"
          >
            <span className="text-ink-2">le</span>

            <span className="relative flex items-center justify-center w-16 h-16 lg:w-24 lg:h-24 hairline rounded-2xl glow-violet-soft">
              <Compass className="w-7 h-7 lg:w-12 lg:h-12 text-navy animate-sacred-pulse" strokeWidth={1.2} />
            </span>

            <span className="italic-serif text-gold">Léman.</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-ink-2 text-base lg:text-lg mt-16 max-w-2xl mx-auto text-center leading-relaxed"
          >
            Banque privée, gestion d&apos;investissement et conseil en immobilier
            de prestige. Une maison fondée à Genève en 1987, qui réunit trois
            métiers sous le même toit pour une clientèle francophone exigeante.
          </motion.p>

          {/* Small icon constellation below */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-6 mt-12 text-navy/60"
          >
            <Triangle size={20} strokeWidth={1.2} className="animate-sacred-pulse" />
            <Aperture size={20} strokeWidth={1.2} className="animate-sacred-pulse" style={{ animationDelay: "0.5s" }} />
            <Hexagon size={20} strokeWidth={1.2} className="animate-sacred-pulse" style={{ animationDelay: "1s" }} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
