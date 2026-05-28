"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor : a small lerp-followed dot that grows on interactive elements.
 * Uses mix-blend-mode: difference so it stays readable on any background.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isTouch || prefersReducedMotion) return;

    setActive(true);

    const cursor = cursorRef.current;
    if (!cursor) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...mouse };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, label, [data-cursor='hover']"
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf = 0;
    const tick = () => {
      // Lerp toward mouse position
      pos.x += (mouse.x - pos.x) * 0.18;
      pos.y += (mouse.y - pos.y) * 0.18;
      cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Hide native cursor for interactive elements
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ willChange: "transform" }}
    >
      <div
        className={`rounded-full bg-ivoire transition-[width,height] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          hovering ? "w-12 h-12" : "w-2 h-2"
        }`}
      />
    </div>
  );
}
