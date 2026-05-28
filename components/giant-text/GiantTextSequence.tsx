"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Lenis.dev-style "ENTER LENIS" section :
 * - The section is pinned for N viewports of vertical scroll.
 * - Inside, a sequence of phrases takes turns being GIGANTIC :
 *   each phrase scales from ~0.4 to ~1.4 then fades while the next one scales up.
 *
 * Default phrases match a banking/family-office tone.
 */
export default function GiantTextSequence({
  phrases = ["Discrétion.", "Indépendance.", "Long terme."],
  dark = true,
}: {
  phrases?: string[];
  dark?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const phrasesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
      },
      () => {
        const phraseEls = phrasesRef.current.filter(Boolean) as HTMLDivElement[];
        if (phraseEls.length === 0) return;

        // Set initial state : all hidden except first scaled small
        gsap.set(phraseEls, { opacity: 0, scale: 0.4 });
        gsap.set(phraseEls[0], { opacity: 1 });

        const totalPhrases = phraseEls.length;
        // Each phrase consumes 1 viewport of scroll
        const totalScroll = totalPhrases * 100;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}%`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        phraseEls.forEach((el, i) => {
          // Each phrase : scale up 0.4 → 1.4 during its slot, then fade out
          const slot = 1 / totalPhrases;
          const start = i * slot;
          const middle = start + slot * 0.5;
          const end = (i + 1) * slot;

          tl.fromTo(
            el,
            { scale: 0.45, opacity: i === 0 ? 1 : 0 },
            {
              scale: 1.0,
              opacity: 1,
              ease: "power2.out",
            },
            start
          );

          tl.to(
            el,
            {
              scale: 1.35,
              opacity: i === totalPhrases - 1 ? 1 : 0,
              ease: "power2.in",
            },
            middle
          );
        });

        return () => {
          tl.kill();
        };
      }
    );

    return () => mm.revert();
  }, [phrases]);

  return (
    <div
      ref={sectionRef}
      data-theme={dark ? "dark" : "light"}
      className={`relative h-screen w-full overflow-hidden ${
        dark ? "bg-charcoal text-ivoire" : "bg-ivoire text-charcoal"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {phrases.map((phrase, i) => (
          <div
            key={phrase}
            ref={(el) => {
              phrasesRef.current[i] = el;
            }}
            className="absolute inset-0 flex items-center justify-center will-change-transform"
            style={{ willChange: "transform, opacity" }}
          >
            <span
              className="font-display italic leading-[0.85] tracking-tighter text-center px-4"
              style={{ fontSize: "clamp(64px, 18vw, 240px)" }}
            >
              {phrase}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle scroll hint */}
      <div className="absolute bottom-8 inset-x-0 text-center text-[11px] tracking-[0.3em] uppercase opacity-50">
        Faites défiler
      </div>
    </div>
  );
}
