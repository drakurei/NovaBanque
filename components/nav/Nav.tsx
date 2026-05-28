"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export default function Nav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivoire/95 backdrop-blur-sm hairline-b"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto flex items-center justify-between px-8 lg:px-12 py-6">
        <Link
          href="/"
          aria-label="DRIFT — Retour à l'accueil"
          className={`font-display uppercase text-2xl tracking-[0.05em] transition-colors ${
            scrolled ? "text-noir hover:text-rust" : "text-cream hover:text-rust"
          }`}
        >
          DRIFT
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  scrolled
                    ? "text-charcoal-2 hover:text-charcoal"
                    : "text-ivoire/80 hover:text-ivoire"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/espace-client"
            className={`text-[12px] uppercase tracking-[0.15em] font-bold transition-colors ${
              scrolled
                ? "text-noir-2 hover:text-rust"
                : "text-cream/80 hover:text-cream"
            }`}
          >
            Account
          </Link>
          <Link
            href="/rendez-vous"
            className={`text-[12px] uppercase tracking-[0.15em] font-bold px-5 py-2.5 transition-colors ${
              scrolled
                ? "bg-noir text-cream hover:bg-rust"
                : "bg-rust text-cream hover:bg-cream hover:text-rust"
            }`}
          >
            Get notified
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span
            className={`w-5 h-px transition-all ${
              scrolled || open ? "bg-charcoal" : "bg-ivoire"
            } ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`w-5 h-px transition-all ${
              scrolled || open ? "bg-charcoal" : "bg-ivoire"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-px transition-all ${
              scrolled || open ? "bg-charcoal" : "bg-ivoire"
            } ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ivoire hairline-b">
          <ul className="flex flex-col px-8 py-6 gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-charcoal-2"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/espace-client"
                onClick={() => setOpen(false)}
                className="block py-2 text-charcoal-2"
              >
                Espace client
              </Link>
            </li>
            <li className="pt-4">
              <Link
                href="/rendez-vous"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-5 py-3 bg-charcoal text-ivoire text-sm"
              >
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
