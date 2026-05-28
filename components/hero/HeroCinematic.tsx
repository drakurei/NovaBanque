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

const VIDEO_HD =
  "https://videos.pexels.com/video-files/17242172/17242172-hd_1920_1080_24fps.mp4";
const VIDEO_SD =
  "https://videos.pexels.com/video-files/17242172/17242172-hd_1280_720_24fps.mp4";

export default function HeroCinematic() {
  const { sectionRef, targetRef } = useGsapParallax<HTMLElement>(140);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const onCanPlay = () => setVideoReady(true);
    v.addEventListener("canplay", onCanPlay);
    // iOS Safari sometimes needs an explicit play() after mount
    v.play().catch(() => {
      // Autoplay blocked — keep the poster image visible
    });
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
        {/* Poster image — always rendered, fades out when video is ready */}
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={images.hero.blurDataURL}
          className={`object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Video background — Jet d'Eau Genève aerial */}
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
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent"
      />

      {/* Floating coins removed — too kitsch for the SPYLT-energy banking direction */}

      <motion.div
        variants={stagger(0.15)}
        initial="hidden"
        animate="visible"
        className="relative h-full max-w-[1440px] mx-auto px-8 lg:px-12 flex flex-col justify-end pb-24 lg:pb-32"
      >
        <motion.p
          variants={fadeUp}
          className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6 font-bold"
        >
          — Maison de patrimoine privée · Genève · 1987
        </motion.p>

        <h1 className="font-display uppercase text-ivoire text-7xl sm:text-9xl lg:text-[180px] xl:text-[220px] leading-[0.85] tracking-tighter max-w-6xl overflow-hidden">
          <span className="block overflow-hidden">
            <LetterReveal text="Banque." delay={0.25} />
          </span>
          <span className="block overflow-hidden">
            <LetterReveal text="Investissement." delay={0.45} />
          </span>
          <span className="block overflow-hidden text-or-soft">
            <LetterReveal text="Immobilier." delay={0.7} />
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-ivoire/85 text-base lg:text-lg mt-10 max-w-xl leading-relaxed font-medium"
        >
          Trois métiers, une seule maison. Réunis sous le même toit, sur les
          rives du Léman, depuis 1987.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
          <a
            href="/services"
            data-cursor="hover"
            className="inline-flex items-center gap-3 bg-or-soft text-charcoal px-8 py-4 text-sm font-extrabold uppercase tracking-[0.2em] hover:bg-ivoire transition-colors"
          >
            Découvrir nos métiers
            <span aria-hidden>→</span>
          </a>
          <a
            href="/rendez-vous"
            data-cursor="hover"
            className="inline-flex items-center gap-3 border border-ivoire/40 text-ivoire px-8 py-4 text-sm font-extrabold uppercase tracking-[0.2em] hover:bg-ivoire hover:text-charcoal transition-colors"
          >
            Prendre rendez-vous
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: easeEditorial, delay: 1 }}
        className="absolute bottom-8 inset-x-0"
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 flex items-center gap-6 text-ivoire/70 text-[11px] tracking-[0.25em] uppercase">
          <span className="w-12 h-px bg-ivoire/40" />
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
