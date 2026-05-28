"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function LenisGsapSync() {
  // Sync Lenis with GSAP ScrollTrigger so scroll-tied animations stay in step
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    // Refresh ScrollTrigger after layout settles
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    return () => window.clearTimeout(id);
  }, []);

  return null;
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Respect prefers-reduced-motion: skip smooth scrolling for accessibility
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        // touchMultiplier: 2 by default — feels natural on mobile without overriding
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
