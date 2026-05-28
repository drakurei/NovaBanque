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
          className="text-[11px] tracking-[0.3em] uppercase text-ivoire/80 mb-6"
        >
          — Maison de patrimoine. Genève.
        </motion.p>

        <h1 className="font-display text-ivoire text-5xl sm:text-7xl lg:text-[110px] leading-[0.96] tracking-tight max-w-5xl overflow-hidden">
          <span className="block overflow-hidden">
            <LetterReveal text="Là où le patrimoine" delay={0.3} />
          </span>
          <span className="block overflow-hidden">
            <LetterReveal text="rencontre " delay={0.7} />
            <LetterReveal text="le Léman." delay={0.95} italic />
          </span>
        </h1>

        <motion.p
          variants={fadeUp}
          className="text-ivoire/85 text-lg lg:text-xl mt-8 max-w-xl leading-relaxed"
        >
          Banque privée, gestion d'investissement, conseil immobilier. Trois
          métiers réunis sous un même toit à Genève depuis 1987.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-10 mt-10">
          <EditorialLink href="/services" light size="lg" magnetic>
            Découvrir nos services privés
          </EditorialLink>
          <EditorialLink
            href="/rendez-vous"
            light
            size="lg"
            arrow={false}
            magnetic
          >
            Prendre rendez-vous
          </EditorialLink>
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
