"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import Counter from "./Counter";

const kpis = [
  { label: "Encours sous gestion", value: 12, suffix: " Md€", decimals: 0 },
  { label: "Clients privés", value: 47000, suffix: "+", decimals: 0 },
  { label: "Satisfaction client", value: 9.4, suffix: "/10", decimals: 1 },
  { label: "Taux de rétention", value: 96, suffix: " %", decimals: 0 },
];

export default function StatsBand() {
  return (
    <section className="border-y border-charcoal/10 py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              variants={fadeUp}
              className={`${
                i > 0 ? "lg:border-l border-charcoal/10 lg:pl-8" : ""
              }`}
            >
              <p className="font-display text-5xl lg:text-7xl leading-none tracking-tight">
                <Counter
                  to={k.value}
                  decimals={k.decimals}
                  suffix={k.suffix}
                />
              </p>
              <p className="text-[11px] tracking-[0.25em] uppercase text-charcoal-2 mt-4">
                {k.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
