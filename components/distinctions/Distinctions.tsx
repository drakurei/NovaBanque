"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { distinctions } from "@/lib/content";

export default function Distinctions() {
  return (
    <section id="distinctions" className="py-32 lg:py-48 hairline-b">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 text-center mb-20"
        >
          — Reconnu par
        </motion.p>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {distinctions.map((d) => (
            <motion.figure
              key={d.name}
              variants={fadeUp}
              className="text-center text-charcoal-2"
            >
              <img
                src={d.logo}
                alt={d.name}
                className="h-7 lg:h-8 mx-auto opacity-70"
              />
              <blockquote className="font-display italic text-base lg:text-lg leading-snug mt-6 text-charcoal max-w-[200px] mx-auto">
                {d.quote}
              </blockquote>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
