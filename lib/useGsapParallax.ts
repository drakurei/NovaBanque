"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Scroll-tied parallax: translate Y based on scroll progress within a section.
 * Respects prefers-reduced-motion via gsap.matchMedia().
 *
 * @param strength px to translate from start to end (positive = moves down slower than scroll)
 */
export function useGsapParallax<T extends HTMLElement>(strength = 120) {
  const sectionRef = useRef<T | null>(null);
  const targetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !targetRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { motion } = context.conditions as {
          motion: boolean;
          reduce: boolean;
        };
        if (!motion) return;

        const anim = gsap.fromTo(
          targetRef.current,
          { yPercent: -strength / 10 },
          {
            yPercent: strength / 10,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        return () => {
          anim.kill();
        };
      }
    );

    return () => mm.revert();
  }, [strength]);

  return { sectionRef, targetRef };
}
