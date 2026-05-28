"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wallet,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const panels = [
  {
    number: "01",
    icon: Wallet,
    title: "Un compte. Toutes vos devises.",
    description:
      "Gérez EUR, USD, CHF, GBP depuis une seule interface. Conversion au taux interbancaire, virements internationaux instantanés, carte World Elite Mastercard.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Gestion par les meilleurs.",
    description:
      "Notre desk d'investissement gère vos avoirs en architecture ouverte. Allocations actions, obligations, private equity. Performance nette +8,2% en 2025.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Sécurité institutionnelle.",
    description:
      "Agréé FINMA. Garantie FGDR 100 000 €. Chiffrement TLS 1.3. Authentification 3 facteurs biométrique. Vos données restent en Suisse.",
  },
];

export default function HorizontalPanels() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        desktop:
          "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      },
      () => {
        const distance = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
        return () => {
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-0 lg:h-screen lg:overflow-hidden"
    >
      <div className="lg:h-full lg:flex lg:items-center">
        <div
          ref={trackRef}
          className="lg:flex lg:flex-nowrap lg:will-change-transform"
        >
          {/* Intro panel */}
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 lg:w-screen lg:flex-shrink-0 lg:h-full lg:flex lg:flex-col lg:justify-center mb-16 lg:mb-0">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.35em] uppercase text-ink-2 mb-6 flex items-center gap-3"
              >
                <Sparkles size={13} className="text-navy" />
                Pourquoi NovaBanque
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.9] tracking-tighter font-bold"
              >
                Trois bonnes raisons
                <br />
                <span className="text-ink-2 font-normal italic-serif">d&apos;y penser.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-ink-2 text-base lg:text-lg mt-8 max-w-xl leading-relaxed"
              >
                Multi-devises, gestion par des pros, sécurité maximale. Voilà
                pourquoi 47 000 clients patrimoniaux nous confient leur argent.
                <span className="hidden lg:inline">
                  {" "}
                  Faites défiler horizontalement.
                </span>
              </motion.p>
            </motion.div>
          </div>

          {/* Panels */}
          {panels.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.number}
                className="max-w-[1440px] mx-auto lg:mx-0 px-6 lg:px-12 lg:w-screen lg:flex-shrink-0 lg:h-full lg:flex lg:items-center mb-16 lg:mb-0"
              >
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 w-full items-center">
                  <div className="lg:col-span-5">
                    <div
                      className="relative aspect-square rounded-3xl overflow-hidden hairline glow-violet"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(24,24,40,0.7) 0%, rgba(15,15,26,0.7) 100%)",
                      }}
                    >
                      {/* Glow center */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-navy/40 blur-3xl rounded-full animate-glow-pulse" />
                          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-navy to-navy-deep flex items-center justify-center">
                            <Icon
                              size={56}
                              strokeWidth={1.2}
                              className="text-white"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Number top-left */}
                      <p className="absolute top-6 left-6 font-display text-6xl font-bold text-ink-3">
                        {p.number}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-[11px] tracking-[0.3em] uppercase text-navy">
                      Pillar {p.number}
                    </p>
                    <h3 className="font-display text-4xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight font-bold">
                      {p.title}
                    </h3>
                    <p className="text-ink-2 text-base lg:text-xl leading-relaxed max-w-xl">
                      {p.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
