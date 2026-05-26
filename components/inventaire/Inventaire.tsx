"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { inventaire } from "@/lib/content";
import { images } from "@/lib/images";
import InventaireCard from "./InventaireCard";

export default function Inventaire() {
  return (
    <section id="inventaire" className="py-32 lg:py-48 hairline-b">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20 lg:mb-28 max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
          >
            — Notre inventaire
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-5xl lg:text-7xl leading-[0.98] tracking-tight"
          >
            Quatre piliers <br />
            <span className="italic text-or-soft">patrimoniaux.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid lg:grid-cols-2 gap-x-12 gap-y-20 lg:gap-x-20 lg:gap-y-28"
        >
          {inventaire.map((item, i) => (
            <InventaireCard
              key={item.label}
              {...item}
              imageSrc={images.inventaire[i].src}
              imageAlt={images.inventaire[i].alt}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
