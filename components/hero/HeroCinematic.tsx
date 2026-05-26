"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { images } from "@/lib/images";
import { cities } from "@/lib/content";
import { fadeUp, stagger, easeEditorial } from "@/lib/motion";
import EditorialLink from "@/components/primitives/EditorialLink";

export default function HeroCinematic() {
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: easeEditorial }}
        className="absolute inset-0"
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={images.hero.blurDataURL}
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent"
      />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        animate="visible"
        className="relative h-full max-w-[1440px] mx-auto px-8 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.3em] uppercase text-ivoire/80 mb-6"
        >
          — Banque privée. Genève.
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-ivoire text-5xl sm:text-7xl lg:text-[110px] leading-[0.96] tracking-tight max-w-5xl"
        >
          Là où le patrimoine <br />
          rencontre <span className="italic">le Léman.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-ivoire/85 text-lg lg:text-xl mt-8 max-w-xl leading-relaxed"
        >
          Une maison fondée à Genève en 1987. Gestion privée, conseil patrimonial et
          conciergerie pour une clientèle internationale exigeante.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-10 mt-10">
          <EditorialLink href="/services" light size="lg">
            Découvrir nos services privés
          </EditorialLink>
          <EditorialLink href="/rendez-vous" light size="lg" arrow={false}>
            Prendre rendez-vous
          </EditorialLink>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeEditorial, delay: 1 }}
        className="absolute bottom-8 inset-x-0"
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 flex items-center gap-6 text-ivoire/70 text-[11px] tracking-[0.25em] uppercase">
          <span className="w-12 h-px bg-ivoire/40" />
          <ul className="flex gap-6 flex-wrap">
            {cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
