"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

/**
 * Lenis-style marquee : massive Cormorant text scrolling horizontally.
 * Base speed runs continuously. Lenis scroll velocity boosts/reverses the speed.
 */
export default function MarqueeBand({
  text,
  italic = false,
  dark = false,
  speed = 60,
}: {
  text: string;
  italic?: boolean;
  dark?: boolean;
  /** Seconds for one loop at rest. Higher = slower. */
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef(0);
  const velocityRef = useRef(0);

  // Capture Lenis velocity at every tick
  useLenis(({ velocity }: { velocity: number }) => {
    velocityRef.current = velocity;
  });

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const tick = (now: number) => {
      const dt = (now - last) / 1000; // seconds
      last = now;

      const track = trackRef.current;
      if (track) {
        // Base velocity in %/second. Negative = leftward.
        const base = -50 / speed;
        // Lenis velocity boost (already in px/s — scale down for %)
        const boost = velocityRef.current * 0.4;
        positionRef.current += (base + boost) * dt;
        // Loop : the track is duplicated, wrap between -50 and 0
        if (positionRef.current <= -50) positionRef.current += 50;
        if (positionRef.current > 0) positionRef.current -= 50;
        track.style.transform = `translate3d(${positionRef.current}%, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const separator = " · ";
  const segment = `${text}${separator}`;

  return (
    <section
      aria-hidden
      className={`relative w-full overflow-hidden py-10 lg:py-16 hairline-b border-t border-charcoal/10 ${
        dark ? "bg-charcoal text-ivoire" : "bg-transparent text-charcoal/85"
      }`}
    >
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <span
          className={`font-display ${
            italic ? "italic" : ""
          } text-[16vw] sm:text-[12vw] lg:text-[10vw] leading-[0.95] tracking-tight inline-block pr-8`}
        >
          {segment.repeat(3)}
        </span>
        <span
          aria-hidden
          className={`font-display ${
            italic ? "italic" : ""
          } text-[16vw] sm:text-[12vw] lg:text-[10vw] leading-[0.95] tracking-tight inline-block pr-8`}
        >
          {segment.repeat(3)}
        </span>
      </div>
    </section>
  );
}
