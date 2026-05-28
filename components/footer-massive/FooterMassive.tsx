"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import Link from "next/link";

export default function FooterMassive() {
  return (
    <footer className="relative pt-32 pb-8 overflow-hidden bg-paper">
      {/* Radial glow at top */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 50% 100%, rgba(91, 71, 255, 0.25), transparent 70%)",
        }}
      />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
      >
        {/* Left : contact */}
        <motion.div variants={fadeUp} className="lg:col-span-6">
          <p className="text-[11px] tracking-[0.35em] uppercase text-ink-2 mb-4">
            Link contact
          </p>
          <a
            href="mailto:private@novabanque.ch"
            data-cursor="hover"
            className="font-display text-2xl lg:text-4xl tracking-tight hover:text-navy transition-colors"
          >
            private@novabanque.ch
          </a>

          {/* Social row */}
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-ink-2">
            <a href="#" data-cursor="hover" className="hover:text-ink transition-colors">
              Instagram
            </a>
            <a href="#" data-cursor="hover" className="hover:text-ink transition-colors">
              LinkedIn
            </a>
            <a href="#" data-cursor="hover" className="hover:text-ink transition-colors">
              X (Twitter)
            </a>
            <a href="#" data-cursor="hover" className="hover:text-ink transition-colors">
              YouTube
            </a>
          </div>
        </motion.div>

        {/* Right : signup */}
        <motion.div variants={fadeUp} className="lg:col-span-6 lg:pl-8">
          <p className="text-[11px] tracking-[0.35em] uppercase text-ink-2 mb-4">
            Upgrade your wealth
          </p>
          <p className="text-ink-2 max-w-md mb-6">
            Rejoignez la liste privée. Vous recevrez nos analyses patrimoniales
            mensuelles + l&apos;accès anticipé à nos opportunités d&apos;investissement.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              required
              placeholder="vous@maison.com"
              className="flex-1 bg-paper-2 hairline rounded-full px-5 py-3 text-sm focus:outline-none focus:border-navy text-ink placeholder:text-ink-3"
            />
            <button
              type="submit"
              data-cursor="hover"
              className="bg-navy hover:bg-navy-deep text-white px-6 py-3 rounded-full text-sm font-medium transition-colors"
            >
              Rejoindre
            </button>
          </form>
        </motion.div>

        {/* Bottom : mentions + columns of links */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-12 pt-12 mt-8 border-t border-white/8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-ink-2"
        >
          <div>
            <p className="text-ink text-xs uppercase tracking-[0.2em] mb-3">Services</p>
            <ul className="space-y-2">
              <li><Link href="/services">Compte Or</Link></li>
              <li><Link href="/services">Mandat de gestion</Link></li>
              <li><Link href="/services">Crédit lombard</Link></li>
              <li><Link href="/services">Family Office</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-ink text-xs uppercase tracking-[0.2em] mb-3">Maison</p>
            <ul className="space-y-2">
              <li><Link href="/notre-approche">Notre approche</Link></li>
              <li><Link href="/votre-banker">Vos conseillers</Link></li>
              <li><Link href="/reconnaissance">Reconnaissance</Link></li>
              <li><Link href="/securite">Sécurité</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-ink text-xs uppercase tracking-[0.2em] mb-3">Légal</p>
            <ul className="space-y-2">
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Confidentialité</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
          <div>
            <p className="text-ink text-xs uppercase tracking-[0.2em] mb-3">Contact</p>
            <ul className="space-y-2">
              <li><a href="tel:+41225550000">+41 22 555 00 00</a></li>
              <li>Quai du Mont-Blanc 12</li>
              <li>1201 Genève · Suisse</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* MASSIVE WORDMARK */}
      <div className="relative mt-24 lg:mt-32 px-2 lg:px-6 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-center leading-[0.85] tracking-tighter w-full"
          style={{
            fontSize: "clamp(80px, 21vw, 380px)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 60%, rgba(91,71,255,0.3) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          NOVABANQUE
        </motion.h2>
      </div>

      <p className="text-center text-xs text-ink-3 mt-8">
        © 2026 NovaBanque SA · Genève · Membre CDB 20 · Surveillé par FINMA
      </p>
    </footer>
  );
}
