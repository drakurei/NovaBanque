"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { fadeUp, stagger, easeEditorial } from "@/lib/motion";
import { images } from "@/lib/images";

export default function EspaceClientPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Nav solid />
      <main id="main" className="min-h-screen pt-32 lg:pt-40 pb-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: easeEditorial }}
            className="hidden lg:block lg:col-span-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.inventaire[3].src}
                alt="Vue Léman depuis NovaBanque"
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-ivoire">
                <p className="text-[11px] tracking-[0.3em] uppercase text-ivoire/80 mb-3">
                  — Sécurité de niveau institutionnel
                </p>
                <p className="font-display italic text-2xl lg:text-3xl leading-snug max-w-sm">
                  « Vos données et vos avoirs, protégés selon les standards
                  FINMA & ISO 27001. »
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 max-w-md mx-auto lg:mx-0 w-full"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
            >
              — Espace client
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl lg:text-6xl leading-[1.02] tracking-tight"
            >
              Bienvenue. <br />
              <span className="italic text-or-soft">Connectez-vous.</span>
            </motion.h1>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeEditorial }}
                className="mt-12 p-8 bg-ivoire-2"
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-3">
                  — Code envoyé
                </p>
                <p className="font-display text-2xl leading-tight">
                  Un code de validation a été envoyé sur votre application
                  NovaBanque.
                </p>
                <p className="text-charcoal-2 mt-4 text-sm">
                  Pour des raisons évidentes de confidentialité, c'est une
                  démo : aucune authentification réelle n'est traitée.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                className="mt-12 space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-3"
                  >
                    Identifiant
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-3 text-lg font-display"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-3"
                  >
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-3 pr-10 text-lg font-display tracking-widest"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword
                          ? "Masquer le mot de passe"
                          : "Afficher le mot de passe"
                      }
                      aria-pressed={showPassword}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-charcoal-2 hover:text-charcoal transition-colors"
                    >
                      {showPassword ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" y1="2" x2="22" y2="22" />
                        </svg>
                      ) : (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="token"
                    className="block text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-3"
                  >
                    Code de sécurité
                  </label>
                  <input
                    id="token"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={token}
                    onChange={(e) => setToken(e.target.value.replace(/\D/g, ""))}
                    className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-3 text-2xl font-mono tracking-[0.5em]"
                  />
                </div>

                <div className="pt-4 flex flex-col gap-5">
                  <button
                    type="submit"
                    className="w-full bg-charcoal text-ivoire py-4 text-sm tracking-[0.2em] uppercase hover:bg-leman-deep transition-colors"
                  >
                    Accéder à mes comptes
                  </button>
                  <div className="flex justify-between text-sm">
                    <Link
                      href="#"
                      className="text-charcoal-2 hover:text-or-soft transition-colors"
                    >
                      Mot de passe oublié ?
                    </Link>
                    <Link
                      href="/rendez-vous"
                      className="text-charcoal-2 hover:text-or-soft transition-colors"
                    >
                      Pas encore client ?
                    </Link>
                  </div>
                </div>
              </motion.form>
            )}

            <motion.p
              variants={fadeUp}
              className="text-xs text-charcoal-2/70 mt-12 leading-relaxed"
            >
              Sécurité NovaBanque · Authentification forte à trois facteurs ·
              Chiffrement TLS 1.3 · Session déconnectée automatiquement après
              10 min d'inactivité.
            </motion.p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
