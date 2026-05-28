"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { stagger, fadeUp, easeEditorial } from "@/lib/motion";

export default function HeroCinematic() {
  return (
    <section className="relative h-screen min-h-[780px] w-full overflow-hidden flex items-center justify-center">
      {/* Radial glow background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 600px at 50% 55%, rgba(91, 71, 255, 0.35), transparent 70%)",
        }}
      />

      {/* Concentric sacred geometry rings behind the wordmark */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] opacity-50">
          <div className="absolute inset-0 rounded-full border border-navy/30 animate-sacred-rotate" />
          <div className="absolute inset-[8%] rounded-full border border-navy/25 animate-sacred-rotate-reverse" />
          <div className="absolute inset-[18%] rounded-full border border-navy/20 animate-sacred-rotate" />
          <div className="absolute inset-[28%] rounded-full border border-navy/15 animate-sacred-rotate-reverse" />
          <div className="absolute inset-[40%] rounded-full border border-navy/10 animate-sacred-rotate" />
        </div>
      </div>

      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.35em] uppercase text-ink-2 mb-6 flex items-center justify-center gap-3"
        >
          <Sparkles size={14} className="text-navy" />
          The fine-tech private banking app
          <Sparkles size={14} className="text-navy" />
        </motion.p>

        {/* Massive wordmark that assembles letter by letter */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.15, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: easeEditorial, delay: 0.2 }}
          className="font-display text-ink leading-[0.85] tracking-tighter font-bold"
          style={{ fontSize: "clamp(72px, 14vw, 220px)" }}
        >
          NovaBanque
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-ink-2 text-base lg:text-lg mt-8 max-w-md mx-auto leading-relaxed"
        >
          Banque privée, gestion d&apos;investissement et conseil immobilier.
          Trois métiers, une seule maison à Genève — depuis 1987.
        </motion.p>

        {/* Phone mockup with violet glow */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: easeEditorial, delay: 0.8 }}
          className="relative mt-14 mx-auto"
          style={{ width: 280, maxWidth: "80vw" }}
        >
          <div className="absolute -inset-12 bg-navy/30 rounded-full blur-3xl animate-glow-pulse" />
          <div
            className="relative aspect-[9/19] rounded-[40px] glow-violet overflow-hidden border border-white/10"
            style={{
              background:
                "linear-gradient(180deg, #12121A 0%, #1A1A28 50%, #0F0F1A 100%)",
            }}
          >
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 text-[10px] text-ink-2">
              <span>09:41</span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-navy/40" />
              </span>
            </div>
            {/* App content */}
            <div className="px-6 mt-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-3">
                Solde total
              </p>
              <p className="font-display text-2xl mt-1">€ 482 940,12</p>
              <div className="mt-6 space-y-3">
                <div className="hairline rounded-2xl p-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="text-ink-2">Compte courant</p>
                    <p className="text-ink-3 text-[10px]">FR76 1027 ···</p>
                  </div>
                  <span className="text-ink font-medium">12 480 €</span>
                </div>
                <div className="hairline rounded-2xl p-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="text-ink-2">Mandat 60/40</p>
                    <p className="text-ink-3 text-[10px]">+8,2% net 2025</p>
                  </div>
                  <span className="text-ink font-medium">320 100 €</span>
                </div>
                <div className="hairline rounded-2xl p-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="text-ink-2">Crédit lombard</p>
                    <p className="text-ink-3 text-[10px]">Disponible</p>
                  </div>
                  <span className="text-ink font-medium">150 360 €</span>
                </div>
              </div>
              {/* Center glow circle */}
              <div className="mt-6 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-navy/40 blur-xl animate-glow-pulse" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center text-white font-display text-xl">
                    ⌬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA below mockup */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="/services"
            data-cursor="hover"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Découvrir l&apos;app
            <span aria-hidden>→</span>
          </a>
          <a
            href="/rendez-vous"
            data-cursor="hover"
            className="inline-flex items-center gap-2 hairline hover:bg-paper-2 text-ink px-6 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Disponible printemps 2026
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
