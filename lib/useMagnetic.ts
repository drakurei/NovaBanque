"use client";

import { useRef } from "react";
import {
  useMotionValue,
  useSpring,
  type MotionValue,
} from "motion/react";

/**
 * useMagnetic — attire un élément interactif vers la souris au hover.
 * Désactivé en touch + prefers-reduced-motion par construction (les events ne se déclenchent pas sur touch).
 *
 * Usage :
 *   const m = useMagnetic(0.35);
 *   <motion.a ref={m.ref} onMouseMove={m.onMouseMove} onMouseLeave={m.onMouseLeave} style={{ x: m.x, y: m.y }}>
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.35
): {
  ref: React.RefObject<T | null>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  onMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
} {
  const ref = useRef<T | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
        return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: sx, y: sy, onMouseMove, onMouseLeave };
}
