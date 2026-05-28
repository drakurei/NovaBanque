"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { stagger, fadeUp, easeEditorial } from "@/lib/motion";

export default function HeroCinematic() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-28 pb-12 lg:pt-32 lg:pb-16">
      {/* Radial glow background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 600px at 50% 50%, rgba(91, 71, 255, 0.32), transparent 70%)",
        }}
      />

      {/* Concentric sacred rings */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] opacity-40">
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
          className="text-[11px] tracking-[0.35em] uppercase text-ink-2 mb-5 flex items-center justify-center gap-3"
        >
          <Sparkles size={14} className="text-navy" />
          La banque privée nouvelle génération
          <Sparkles size={14} className="text-navy" />
        </motion.p>

        {/* Wordmark — fits comfortably above mockup in viewport */}
        <motion.h1
          initial={{ opacity: 0, scale: 1.1, filter: "blur(16px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, ease: easeEditorial, delay: 0.2 }}
          className="font-display text-ink leading-[0.9] tracking-tighter font-bold"
          style={{ fontSize: "clamp(42px, 6.5vw, 96px)" }}
        >
          NovaBanque
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-ink-2 text-sm lg:text-base mt-4 max-w-md mx-auto leading-relaxed"
        >
          Banque privée, gestion d&apos;investissement et conseil immobilier.
          Trois métiers réunis à Genève depuis 1987.
        </motion.p>

        {/* Phone mockup — overlaps slightly with the wordmark above (negative margin) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: easeEditorial, delay: 0.7 }}
          className="relative mt-6 mx-auto"
          style={{ width: 200, maxWidth: "55vw" }}
        >
          <div className="absolute -inset-10 bg-navy/30 rounded-full blur-3xl animate-glow-pulse" />
          <div
            className="relative aspect-[9/19] rounded-[36px] glow-violet overflow-hidden border border-white/10"
            style={{
              background:
                "linear-gradient(180deg, #12121A 0%, #1A1A28 50%, #0F0F1A 100%)",
            }}
          >
            <div className="flex justify-between items-center px-5 pt-3 text-[9px] text-ink-2">
              <span>09:41</span>
              <span className="w-2.5 h-2.5 rounded-full bg-navy/50" />
            </div>
            <div className="px-5 mt-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-ink-3">
                Solde total
              </p>
              <p className="font-display text-xl mt-0.5 font-bold">
                € 482 940,12
              </p>
              <div className="mt-4 space-y-2">
                <div className="hairline rounded-xl p-2.5 flex items-center justify-between text-[10px]">
                  <div>
                    <p className="text-ink-2">Compte courant</p>
                    <p className="text-ink-3 text-[8px]">FR76 1027 ···</p>
                  </div>
                  <span className="text-ink font-medium">12 480 €</span>
                </div>
                <div className="hairline rounded-xl p-2.5 flex items-center justify-between text-[10px]">
                  <div>
                    <p className="text-ink-2">Mandat 60/40</p>
                    <p className="text-ink-3 text-[8px]">+8,2% net 2025</p>
                  </div>
                  <span className="text-ink font-medium">320 100 €</span>
                </div>
                <div className="hairline rounded-xl p-2.5 flex items-center justify-between text-[10px]">
                  <div>
                    <p className="text-ink-2">Crédit lombard</p>
                    <p className="text-ink-3 text-[8px]">Disponible</p>
                  </div>
                  <span className="text-ink font-medium">150 360 €</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-navy/40 blur-lg animate-glow-pulse" />
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center text-white font-display text-lg">
                    ⌬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-6 flex items-center justify-center gap-3 flex-wrap"
        >
          <a
            href="/services"
            data-cursor="hover"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Découvrir l&apos;application
            <span aria-hidden>→</span>
          </a>
          <a
            href="/rendez-vous"
            data-cursor="hover"
            className="inline-flex items-center gap-2 hairline hover:bg-paper-2 text-ink px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            Disponible au printemps 2026
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
