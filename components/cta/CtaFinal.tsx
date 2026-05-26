"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { ctaFinal } from "@/lib/content";
import EditorialLink from "@/components/primitives/EditorialLink";

export default function CtaFinal() {
  return (
    <section id="rendezvous" className="py-40 lg:py-56">
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-[1100px] mx-auto px-8 lg:px-12 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-5xl sm:text-7xl lg:text-[110px] leading-[0.98] tracking-tight"
        >
          {ctaFinal.title[0]} <br />
          <span className="italic text-or-soft">{ctaFinal.title[1]}</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lg lg:text-xl text-charcoal-2 mt-10 max-w-xl mx-auto leading-relaxed"
        >
          {ctaFinal.body}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-12 inline-block">
          <EditorialLink href="/rendez-vous" size="lg">
            {ctaFinal.linkLabel}
          </EditorialLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
