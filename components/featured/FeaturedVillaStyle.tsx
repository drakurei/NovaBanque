"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { featured } from "@/lib/content";
import { images } from "@/lib/images";
import EditorialLink from "@/components/primitives/EditorialLink";

export default function FeaturedVillaStyle() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
          >
            {featured.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl lg:text-7xl leading-[0.98] tracking-tight"
          >
            {featured.title[0]} <br />
            <span className="italic text-or-soft">{featured.title[1]}</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8] overflow-hidden"
          >
            <Image
              src={images.featured.src}
              alt={images.featured.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-l from-charcoal/40 via-transparent to-charcoal/20"
            />
          </motion.div>

          {/* Cards : empilées en dessous sur mobile, en overlay flottant sur desktop */}
          <motion.div
            variants={stagger(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 mt-6
                       lg:mt-0 lg:gap-3 lg:block lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-8 lg:w-[88%] lg:max-w-[420px] lg:space-y-3"
          >
            {featured.cards.map((c) => (
              <motion.article
                key={c.title}
                variants={fadeUp}
                className="bg-ivoire-2 hairline px-6 py-5 lg:bg-ivoire/90 lg:backdrop-blur-md"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal-2">
                  {c.tag}
                </p>
                <h3 className="font-display text-xl lg:text-2xl mt-2 leading-tight">
                  {c.title}
                </h3>
                <p className="text-xs text-charcoal-2 mt-1">{c.meta}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex justify-end"
        >
          <EditorialLink href="/services" size="md">
            Voir tous nos services
          </EditorialLink>
        </motion.div>
      </div>
    </section>
  );
}
