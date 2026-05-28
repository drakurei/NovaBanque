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
      className="fixed top-4 inset-x-0 z-50 transition-all duration-500"
    >
      <nav className="max-w-fit mx-auto flex items-center gap-2 px-2 py-2 rounded-full hairline backdrop-blur-xl"
        style={{ background: "rgba(8, 8, 16, 0.7)" }}
      >
        <Link
          href="/"
          aria-label="NovaBanque — Retour à l'accueil"
          className="font-display text-base tracking-tight font-bold px-4 py-1.5 text-ink hover:text-navy transition-colors"
        >
          NovaBanque
        </Link>

        <Link
          href="/tableau-de-bord"
          className="hidden lg:inline-block text-[13px] text-ink-2 hover:text-ink px-4 py-1.5 rounded-full hover:bg-paper-2 transition-colors"
        >
          App
        </Link>
        <Link
          href="/services"
          className="hidden lg:inline-block text-[13px] text-ink-2 hover:text-ink px-4 py-1.5 rounded-full hover:bg-paper-2 transition-colors"
        >
          Services
        </Link>
        <Link
          href="/securite"
          className="hidden lg:inline-block text-[13px] text-ink-2 hover:text-ink px-4 py-1.5 rounded-full hover:bg-paper-2 transition-colors"
        >
          Sécurité
        </Link>
        <Link
          href="/contact"
          className="hidden lg:inline-block text-[13px] text-ink-2 hover:text-ink px-4 py-1.5 rounded-full hover:bg-paper-2 transition-colors"
        >
          Contact
        </Link>
        <Link
          href="/rendez-vous"
          className="hidden lg:inline-block text-[13px] text-white bg-navy hover:bg-navy-deep px-4 py-1.5 rounded-full transition-colors"
        >
          Être recontacté
        </Link>

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
