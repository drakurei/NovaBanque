"use client";

import { motion } from "motion/react";
import {
  Wallet,
  TrendingUp,
  Landmark,
  Home,
  Users,
  ShieldCheck,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const features = [
  {
    icon: Wallet,
    title: "Compte Or",
    description:
      "Carte World Elite Mastercard métal. Multi-devises. Conciergerie 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Mandat de gestion",
    description:
      "Gestion discrétionnaire ou conseillée. Actions, obligations, private equity.",
  },
  {
    icon: Landmark,
    title: "Crédit lombard",
    description:
      "Mobilisez votre portefeuille sans le vendre. Taux préférentiel dès 250 k€.",
  },
  {
    icon: Home,
    title: "Conseil immobilier",
    description:
      "Sourcing off-market sur le Léman, les Alpes, la Côte d'Azur. Due diligence.",
  },
  {
    icon: Users,
    title: "Family Office",
    description:
      "Gouvernance patrimoniale, succession, philanthropie. Patrimoines > 10 M€.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité institutionnelle",
    description:
      "Agréé ACPR. FGDR 100 k€. ISO 27001. Authentification forte 3 facteurs.",
  },
];

export default function BentoDark() {
  return (
    <section className="relative py-32 lg:py-48">
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-[1440px] mx-auto px-6 lg:px-12"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-2 text-center mb-6"
        >
          — Nos six piliers
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display text-ink text-center text-4xl lg:text-7xl tracking-tight font-bold leading-[0.95] max-w-3xl mx-auto"
        >
          Une maison. <br />
          <span className="italic-serif font-normal text-ink-2">Six métiers.</span>
        </motion.h2>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                variants={fadeUp}
                className="group relative p-8 rounded-3xl hairline overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(24,24,40,0.6) 0%, rgba(15,15,26,0.6) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Violet glow on hover */}
                <div
                  aria-hidden
                  className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(91, 71, 255, 0.35), transparent 60%)",
                  }}
                />

                <div className="relative">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl hairline bg-paper-2 glow-violet-soft mb-6">
                    <Icon size={22} strokeWidth={1.5} className="text-navy" />
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="text-ink-2 text-sm mt-3 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
