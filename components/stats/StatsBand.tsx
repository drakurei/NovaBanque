"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import Counter from "./Counter";

const kpis = [
  { label: "Pairs sold", value: 12000, suffix: "+", decimals: 0 },
  { label: "Drops shipped", value: 18, suffix: "", decimals: 0 },
  { label: "Pays livrés", value: 47, suffix: "", decimals: 0 },
  { label: "Atelier output", value: 300, suffix: "/drop", decimals: 0 },
];

export default function StatsBand() {
  return (
    <section className="border-y border-noir/15 py-16 lg:py-20 bg-cream">
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
                i > 0 ? "lg:border-l border-noir/15 lg:pl-8" : ""
              }`}
            >
              <p className="font-display uppercase text-6xl lg:text-8xl leading-none tracking-tighter text-noir">
                <Counter
                  to={k.value}
                  decimals={k.decimals}
                  suffix={k.suffix}
                />
              </p>
              <p className="text-[11px] tracking-[0.25em] uppercase text-noir-2 mt-4 font-bold">
                {k.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
