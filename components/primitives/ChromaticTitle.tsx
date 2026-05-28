"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

/**
 * ChromaticTitle — aberration chromatique RGB qui réagit à la vélocité du scroll.
 * Le titre se sépare en 3 calques R/G/B décalés ; l'écart grandit avec la vitesse.
 * Au repos : décalage subtil (~0.5px). Lors d'un scroll rapide : jusqu'à 10px.
 */
export default function ChromaticTitle({
  children,
  as: As = "span",
  className = "",
  baseOffset = 0.5,
  maxOffset = 10,
}: {
  children: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  baseOffset?: number;
  maxOffset?: number;
}) {
  const [offset, setOffset] = useState(baseOffset);
  const targetRef = useRef(baseOffset);
  const currentRef = useRef(baseOffset);
  const rafRef = useRef(0);

  useLenis(({ velocity }: { velocity: number }) => {
    const v = Math.abs(velocity);
    // Map velocity (typically 0-100) to offset (baseOffset to maxOffset)
    const mapped = Math.min(maxOffset, baseOffset + v * 0.6);
    targetRef.current = mapped;
  });

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tick = () => {
      // Smooth lerp from current to target
      currentRef.current += (targetRef.current - currentRef.current) * 0.12;
      // Slowly relax back to baseOffset
      targetRef.current += (baseOffset - targetRef.current) * 0.04;
      setOffset(Math.round(currentRef.current * 10) / 10);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [baseOffset]);

  // CSS text-shadow simulates RGB split — cheaper than 3 stacked elements
  const Tag = As as keyof React.JSX.IntrinsicElements;
  const Component = Tag as React.ElementType;

  return (
    <Component
      className={className}
      style={{
        textShadow: `${offset}px 0 0 rgba(255,0,80,0.65), ${-offset}px 0 0 rgba(0,200,255,0.65)`,
        willChange: "text-shadow",
      }}
    >
      {children}
    </Component>
  );
}
