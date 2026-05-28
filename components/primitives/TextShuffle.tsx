"use client";

import { useEffect, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789·*!#@$%";

/**
 * TextShuffle — decoder/scramble cinétique typographique.
 * Affiche d'abord des caractères aléatoires, puis révèle progressivement
 * le texte cible de gauche à droite. Inspiré des animations type lenis.dev / superconscious.
 *
 * @example
 *   <TextShuffle text="La banque privée nouvelle génération" />
 */
export default function TextShuffle({
  text,
  duration = 1.4,
  delay = 0,
  trigger = "mount",
  className = "",
}: {
  text: string;
  /** Total scramble duration in seconds */
  duration?: number;
  /** Start delay in seconds */
  delay?: number;
  /** "mount" runs on first render; "inview" runs when entering viewport */
  trigger?: "mount" | "inview";
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(text);
      return;
    }

    const run = () => {
      if (hasRun.current) return;
      hasRun.current = true;

      const totalMs = duration * 1000;
      const start = performance.now() + delay * 1000;
      const len = text.length;

      let raf = 0;
      const tick = (now: number) => {
        if (now < start) {
          // Show all random chars while waiting
          let scrambled = "";
          for (let i = 0; i < len; i++) {
            const c = text[i];
            scrambled += c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          setDisplay(scrambled);
          raf = requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min(1, (now - start) / totalMs);
        const revealCount = Math.floor(progress * len);

        let out = "";
        for (let i = 0; i < len; i++) {
          if (i < revealCount) {
            out += text[i];
          } else if (text[i] === " ") {
            out += " ";
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        setDisplay(out);

        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      };
      raf = requestAnimationFrame(tick);

      return () => cancelAnimationFrame(raf);
    };

    if (trigger === "mount") {
      const cleanup = run();
      return cleanup;
    }

    // trigger === "inview"
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            run();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, duration, delay, trigger]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        // Keep width stable while scrambling
        fontVariantNumeric: "tabular-nums",
      }}
      aria-label={text}
    >
      {display}
    </span>
  );
}
