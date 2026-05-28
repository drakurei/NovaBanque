"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * BackgroundScrub : transitions the body background between ivoire and charcoal
 * based on which themed section is in view.
 *
 * Sections declare themselves with `data-theme="dark"` or `data-theme="light"` (default).
 */
export default function BackgroundScrub() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
      },
      () => {
        const darkSections =
          document.querySelectorAll<HTMLElement>('[data-theme="dark"]');

        const triggers: ScrollTrigger[] = [];

        darkSections.forEach((section) => {
          const enter = ScrollTrigger.create({
            trigger: section,
            start: "top 40%",
            end: "bottom 40%",
            onEnter: () => {
              gsap.to(document.body, {
                backgroundColor: "#0F1112",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
            onLeave: () => {
              gsap.to(document.body, {
                backgroundColor: "#F5F0E8",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
            onEnterBack: () => {
              gsap.to(document.body, {
                backgroundColor: "#0F1112",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
            onLeaveBack: () => {
              gsap.to(document.body, {
                backgroundColor: "#F5F0E8",
                duration: 0.8,
                ease: "power2.inOut",
              });
            },
          });
          triggers.push(enter);
        });

        return () => {
          triggers.forEach((t) => t.kill());
        };
      }
    );

    return () => mm.revert();
  }, []);

  return null;
}
