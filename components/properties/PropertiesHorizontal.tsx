"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { properties, locations } from "@/lib/content";
import { images } from "@/lib/images";
import EditorialLink from "@/components/primitives/EditorialLink";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PropertiesHorizontal() {
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

        const reveals = gsap.utils.toArray<HTMLElement>(".prop-reveal");
        reveals.forEach((el) => {
          const parent = el.closest(".prop-panel") as HTMLElement | null;
          if (!parent) return;
          gsap.from(el, {
            opacity: 0,
            y: 24,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: parent,
              start: "left 75%",
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
      data-theme="dark"
      className="bg-charcoal text-ivoire py-32 lg:py-0 lg:h-screen lg:overflow-hidden"
    >
      <div className="lg:h-full lg:flex lg:items-center">
        <div
          ref={trackRef}
          className="lg:flex lg:flex-nowrap lg:will-change-transform"
        >
          {/* Intro panel */}
          <div className="prop-panel max-w-[1440px] mx-auto px-8 lg:px-12 lg:w-screen lg:flex-shrink-0 lg:h-full lg:flex lg:flex-col lg:justify-center mb-20 lg:mb-0">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeUp}
                className="prop-reveal text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6"
              >
                — Propriétés en gestion
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="prop-reveal font-display text-5xl lg:text-7xl xl:text-8xl leading-[0.96] tracking-tight"
              >
                Un portefeuille <br />
                <span className="italic text-or-soft">privé.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="prop-reveal text-lg text-ivoire/70 mt-8 max-w-xl leading-relaxed"
              >
                Une sélection confidentielle de propriétés que nous accompagnons
                pour nos clients — acquisition, gestion, transmission. Toutes
                off-market.
                <span className="hidden lg:inline">
                  {" "}
                  Faites défiler horizontalement.
                </span>
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="prop-reveal mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivoire/60"
              >
                {locations.map((l) => (
                  <span key={l.name}>
                    {l.name}{" "}
                    <span className="text-or-soft/70">· {l.count}</span>
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Property panels */}
          {properties.map((p, i) => (
            <article
              key={p.title}
              className="prop-panel max-w-[1440px] mx-auto lg:mx-0 px-8 lg:px-12 lg:w-screen lg:flex-shrink-0 lg:h-full lg:flex lg:items-center mb-24 lg:mb-0"
            >
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 w-full items-center">
                <div className="lg:col-span-7">
                  <div className="relative aspect-[4/3] lg:aspect-[5/3.5] overflow-hidden">
                    <Image
                      src={images.properties[i].src}
                      alt={images.properties[i].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 lg:pl-4 space-y-5">
                  <p className="prop-reveal text-[11px] tracking-[0.3em] uppercase text-or-soft">
                    {p.label}
                  </p>
                  <h3 className="prop-reveal font-display text-4xl lg:text-5xl xl:text-6xl leading-[0.98] tracking-tight">
                    {p.title}
                  </h3>
                  <p className="prop-reveal text-base lg:text-lg text-ivoire/70 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="prop-reveal pt-2 flex items-baseline justify-between border-t border-ivoire/15 pt-6">
                    <span className="text-[11px] tracking-[0.3em] uppercase text-ivoire/50">
                      Prix
                    </span>
                    <span className="font-display text-2xl italic">
                      {p.priceLabel}
                    </span>
                  </div>
                  <div className="prop-reveal pt-4">
                    <EditorialLink href="/rendez-vous" light size="md">
                      Visite privée
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
