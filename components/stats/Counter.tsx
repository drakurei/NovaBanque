"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Counter({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { motion } = context.conditions as { motion: boolean };

        if (!motion) {
          // Reduced motion : show final value immediately
          el.textContent =
            prefix +
            (decimals > 0
              ? to.toFixed(decimals).replace(".", ",")
              : Math.round(to).toLocaleString("fr-FR")) +
            suffix;
          return;
        }

        const counter = { value: 0 };
        const tween = gsap.to(counter, {
          value: to,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
          onUpdate: () => {
            const v = counter.value;
            el.textContent =
              prefix +
              (decimals > 0
                ? v.toFixed(decimals).replace(".", ",")
                : Math.round(v).toLocaleString("fr-FR")) +
              suffix;
          },
        });

        return () => {
          tween.kill();
        };
      }
    );

    return () => mm.revert();
  }, [to, decimals, prefix, suffix, duration]);

  // Show 0 (or 0,0) initial value so layout is stable before tween starts
  const initial =
    prefix +
    (decimals > 0 ? (0).toFixed(decimals).replace(".", ",") : "0") +
    suffix;

  return <span ref={ref}>{initial}</span>;
}
