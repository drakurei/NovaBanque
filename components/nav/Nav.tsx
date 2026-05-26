"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          href="#"
          className={`font-display text-2xl tracking-tight transition-colors ${
            scrolled ? "text-charcoal" : "text-ivoire"
          }`}
        >
          Nova<span className="italic">Banque</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  scrolled
                    ? "text-charcoal-2 hover:text-charcoal"
                    : "text-ivoire/80 hover:text-ivoire"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#client"
            className={`text-[13px] transition-colors ${
              scrolled
                ? "text-charcoal-2 hover:text-charcoal"
                : "text-ivoire/80 hover:text-ivoire"
            }`}
          >
            Espace client
          </a>
          <a
            href="#rendezvous"
            className={`text-[13px] tracking-wide px-5 py-2.5 transition-colors ${
              scrolled
                ? "bg-charcoal text-ivoire hover:bg-leman-deep"
                : "bg-ivoire text-charcoal hover:bg-ivoire/90"
            }`}
          >
            Prendre rendez-vous
          </a>
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
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-charcoal-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#rendezvous"
                className="block w-full text-center px-5 py-3 bg-charcoal text-ivoire text-sm"
              >
                Prendre rendez-vous
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
