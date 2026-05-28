"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { images } from "@/lib/images";
import { cities } from "@/lib/content";
import { fadeUp, stagger, easeEditorial } from "@/lib/motion";
import EditorialLink from "@/components/primitives/EditorialLink";
import LetterReveal from "@/components/primitives/LetterReveal";
import FloatingCoins from "@/components/floating/FloatingCoins";
import { useGsapParallax } from "@/lib/useGsapParallax";

// Disabled video for now — using static hero image so the sneaker lifestyle photo reads cleanly.
// To re-enable a streetwear video later, point these to a relevant Pexels clip.
const VIDEO_HD = "";
const VIDEO_SD = "";

export default function HeroCinematic() {
  const { sectionRef, targetRef } = useGsapParallax<HTMLElement>(140);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!VIDEO_HD) return;
    const v = videoRef.current;
    if (!v) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const onCanPlay = () => setVideoReady(true);
    v.addEventListener("canplay", onCanPlay);
    v.play().catch(() => {});
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[720px] w-full overflow-hidden"
    >
      <motion.div
        ref={(el) => {
          targetRef.current = el;
        }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 2.5, ease: easeEditorial }}
        className="absolute inset-[-10%]"
      >
        {/* Hero lifestyle image — sneakers urban shot */}
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {VIDEO_HD && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
          >
            <source media="(min-width: 1024px)" src={VIDEO_HD} type="video/mp4" />
            <source src={VIDEO_SD} type="video/mp4" />
          </video>
        )}
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent"
      />

      {/* SPYLT-inspired floating gold coins (decorative, low opacity) */}
      <FloatingCoins count={5} className="opacity-50" />

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        animate="visible"
        className="relative h-full max-w-[1440px] mx-auto px-8 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.3em] uppercase text-cream/80 mb-6"
        >
          — DRIFT studio · Lisbon · est. 2021
        </motion.p>

        <h1 className="font-display uppercase text-cream text-7xl sm:text-9xl lg:text-[180px] xl:text-[220px] leading-[0.85] tracking-tighter max-w-6xl overflow-hidden">
          <span className="block overflow-hidden">
            <LetterReveal text="WALK" delay={0.3} />
          </span>
          <span className="block overflow-hidden text-rust">
            <LetterReveal text="YOUR WAY." delay={0.55} />
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-cream/85 text-lg lg:text-xl mt-8 max-w-xl leading-relaxed font-medium"
        >
          Sneakers et workwear crafted at the Atelier Boavista, Lisbon.
          Drops limités à 300 paires. Tannage végétal, cuir Horween, montage
          Goodyear. Pas de pré-commande.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
          <a
            href="/services"
            data-cursor="hover"
            className="inline-flex items-center gap-3 bg-rust text-cream px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-rust transition-colors"
          >
            Shop the drop
            <span aria-hidden>→</span>
          </a>
          <a
            href="/rendez-vous"
            data-cursor="hover"
            className="inline-flex items-center gap-3 border border-cream text-cream px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] hover:bg-cream hover:text-noir transition-colors"
          >
            Next drop notify
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeEditorial, delay: 1 }}
        className="absolute bottom-8 inset-x-0"
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 flex items-center gap-6 text-cream/70 text-[11px] tracking-[0.25em] uppercase font-bold">
          <span className="w-12 h-px bg-cream/40" />
          <ul className="flex gap-6 flex-wrap">
            {cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
