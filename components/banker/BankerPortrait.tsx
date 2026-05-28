"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { bankerQuote } from "@/lib/content";
import { images } from "@/lib/images";
import EditorialLink from "@/components/primitives/EditorialLink";

export default function BankerPortrait() {
  return (
    <section
      id="banker"
      data-theme="dark"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      <Image
        src={images.banker.src}
        alt={images.banker.alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ filter: "sepia(0.15) saturate(0.9)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/70 to-transparent"
      />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative h-full max-w-[1440px] mx-auto px-8 lg:px-12 flex flex-col justify-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.3em] uppercase text-ivoire/80 mb-8"
        >
          {bankerQuote.eyebrow}
        </motion.p>
        <motion.blockquote
          variants={fadeUp}
          className="font-display italic text-ivoire text-3xl sm:text-4xl lg:text-6xl leading-[1.1] tracking-tight max-w-4xl"
        >
          « {bankerQuote.quote} »
        </motion.blockquote>
        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center gap-4 text-ivoire"
        >
          <span className="w-10 h-px bg-or-soft" />
          <div>
            <p className="font-display text-xl italic">{bankerQuote.attribution}</p>
            <p className="text-sm text-ivoire/70 tracking-wide">{bankerQuote.role}</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-12">
          <EditorialLink href="/rendez-vous" light size="lg">
            Réserver un appel privé
          </EditorialLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
