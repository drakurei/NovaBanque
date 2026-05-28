"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { manifesto } from "@/lib/content";
import { images } from "@/lib/images";
import ImageReveal from "@/components/primitives/ImageReveal";
import EditorialLink from "@/components/primitives/EditorialLink";
import PlayVideoButton from "@/components/play-video/PlayVideoButton";

export default function ManifestoSplit() {
  return (
    <section id="approche" className="py-32 lg:py-48">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-6 relative">
          <ImageReveal
            src={images.manifesto.src}
            alt={images.manifesto.alt}
            sizes="(max-width: 1024px) 100vw, 50vw"
            aspect="aspect-[4/5]"
          />
          {/* Floating circular play button — SPYLT-inspired, opens institutional film */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10">
            <PlayVideoButton size={180} />
          </div>
        </div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-6 lg:pl-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-8"
          >
            {manifesto.eyebrow}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display uppercase text-6xl lg:text-8xl xl:text-9xl leading-[0.88] tracking-tighter"
          >
            {manifesto.title[0]} <br />
            {manifesto.title[1]} <br />
            <span className="text-or-soft">{manifesto.title[2]}</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg lg:text-xl text-charcoal-2 mt-10 leading-[1.7] max-w-xl"
          >
            {manifesto.body}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <EditorialLink href="/notre-approche" size="lg">
              {manifesto.linkLabel}
            </EditorialLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
