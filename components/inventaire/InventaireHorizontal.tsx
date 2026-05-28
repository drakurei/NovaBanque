"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { inventaire } from "@/lib/content";
import { images } from "@/lib/images";
import EditorialLink from "@/components/primitives/EditorialLink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InventaireHorizontal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();

    // Only pin on desktop ; mobile stays as a vertical stack (handled by CSS)
    mm.add(
      {
        desktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      },
      () => {
        const panels = gsap.utils.toArray<HTMLElement>(".pillar-panel");
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

        // Subtle fade-in for each panel as it enters the viewport
        panels.forEach((panel) => {
          gsap.from(panel.querySelectorAll(".pillar-reveal"), {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "left 70%",
              containerAnimation: tween,
            },
          });
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
      id="inventaire"
      className="py-32 lg:py-0 lg:h-screen lg:overflow-hidden bg-ivoire"
    >
      <div className="lg:h-full lg:flex lg:items-center">
        <div
          ref={trackRef}
          className="lg:flex lg:flex-nowrap lg:will-change-transform"
        >
          {/* Intro panel (always full-width slot) */}
          <div className="pillar-panel max-w-[1440px] mx-auto px-8 lg:px-12 lg:w-screen lg:flex-shrink-0 lg:h-full lg:flex lg:flex-col lg:justify-center mb-20 lg:mb-0">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-3xl lg:pillar-reveal"
            >
              <motion.p
                variants={fadeUp}
                className="pillar-reveal text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
              >
                — Notre inventaire
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="pillar-reveal font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.96] tracking-tight"
              >
                Quatre piliers <br />
                <span className="italic text-or-soft">patrimoniaux.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="pillar-reveal text-lg text-charcoal-2 mt-8 max-w-xl leading-relaxed"
              >
                Une offre complète, conçue pour répondre à chaque étape de la
                vie d'un patrimoine — de la gestion courante à la transmission.
                <span className="hidden lg:inline">
                  {" "}
                  Faites défiler horizontalement.
                </span>
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="pillar-reveal mt-8 hidden lg:flex items-center gap-3 text-charcoal-2 text-sm tracking-wide"
              >
                <span>→</span>
                <span className="uppercase tracking-[0.25em] text-[11px]">
                  Scroll
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* 4 pillar panels */}
          {inventaire.map((p, i) => (
            <article
              key={p.label}
              className="pillar-panel max-w-[1440px] mx-auto lg:mx-0 px-8 lg:px-12 lg:w-screen lg:flex-shrink-0 lg:h-full lg:flex lg:items-center mb-24 lg:mb-0"
            >
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 w-full items-center">
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={images.inventaire[i].src}
                      alt={images.inventaire[i].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover grayscale-[0.15]"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 lg:pl-8 space-y-6">
                  <p className="pillar-reveal text-[11px] tracking-[0.3em] uppercase text-charcoal-2">
                    {p.label}
                  </p>
                  <h3 className="pillar-reveal font-display text-4xl lg:text-6xl xl:text-7xl leading-[0.98] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="pillar-reveal text-lg lg:text-xl text-charcoal-2 leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                  <div className="pillar-reveal pt-2">
                    <EditorialLink href="/services" size="lg">
                      En savoir plus
                    </EditorialLink>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
