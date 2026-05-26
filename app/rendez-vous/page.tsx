"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import { fadeUp, stagger, easeEditorial } from "@/lib/motion";
import { images } from "@/lib/images";

const patrimoine = [
  "Moins de 500 k€",
  "500 k€ – 2 M€",
  "2 M€ – 10 M€",
  "Plus de 10 M€",
];

const lieux = ["Genève", "Lausanne", "Zurich", "Monaco", "Paris", "Visio"];

const moments = [
  "Cette semaine",
  "Sous 15 jours",
  "Sous 30 jours",
  "Quand cela vous convient",
];

export default function RendezVousPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Nav solid />
      <main id="main" className="pt-32 lg:pt-40 pb-24">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: easeEditorial }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden sticky top-32">
              <Image
                src={images.banker.src}
                alt="Banker privé NovaBanque"
                fill
                priority
                sizes="42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-ivoire">
                <p className="text-[11px] tracking-[0.3em] uppercase text-ivoire/80 mb-3">
                  — Confidentiel
                </p>
                <p className="font-display italic text-2xl lg:text-3xl leading-snug">
                  « Une conversation. Pas un argumentaire. »
                </p>
                <p className="text-sm text-ivoire/70 mt-4">
                  Claire Moreau · Banker Privée Senior
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
            >
              — Prendre rendez-vous
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl lg:text-7xl leading-[1.02] tracking-tight"
            >
              Une rencontre, <br />
              <span className="italic text-or-soft">à votre rythme.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-charcoal-2 mt-8 max-w-xl leading-relaxed"
            >
              Confidentiel. Sans engagement. Sans argumentaire commercial.
              Une heure pour comprendre votre situation et voir si nous pouvons
              vous être utiles.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeEditorial }}
                className="mt-16 p-10 bg-ivoire-2"
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-4">
                  — Demande reçue
                </p>
                <h2 className="font-display text-3xl lg:text-4xl leading-tight">
                  Merci. Un banker vous contactera <br />
                  <span className="italic">sous 24 heures.</span>
                </h2>
                <p className="text-charcoal-2 mt-6">
                  Pour des raisons évidentes, c'est une démo : aucune donnée
                  n'est transmise et aucun rendez-vous réel n'est planifié.
                </p>
              </motion.div>
            ) : (
              <motion.form
                variants={fadeUp}
                className="mt-16 space-y-10"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <fieldset>
                  <legend className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6">
                    01 — Vos coordonnées
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-sm text-charcoal-2 mb-2"
                      >
                        Prénom
                      </label>
                      <input
                        id="prenom"
                        type="text"
                        required
                        className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-2 text-lg font-display"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm text-charcoal-2 mb-2"
                      >
                        Nom
                      </label>
                      <input
                        id="nom"
                        type="text"
                        required
                        className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-2 text-lg font-display"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm text-charcoal-2 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-2 text-lg font-display"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="tel"
                        className="block text-sm text-charcoal-2 mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        id="tel"
                        type="tel"
                        className="w-full bg-transparent border-0 border-b border-charcoal/30 focus:border-charcoal focus:outline-none py-2 text-lg font-display"
                      />
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6">
                    02 — Votre patrimoine (approximatif)
                  </legend>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {patrimoine.map((p) => (
                      <label
                        key={p}
                        className="relative cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="patrimoine"
                          value={p}
                          required
                          className="peer sr-only"
                        />
                        <span className="block text-center px-4 py-4 hairline text-sm peer-checked:bg-charcoal peer-checked:text-ivoire peer-checked:border-charcoal transition-colors hover:bg-ivoire-2">
                          {p}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6">
                    03 — Où souhaitez-vous nous rencontrer ?
                  </legend>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {lieux.map((l) => (
                      <label key={l} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="lieu"
                          value={l}
                          required
                          className="peer sr-only"
                        />
                        <span className="block text-center px-4 py-4 hairline text-sm peer-checked:bg-charcoal peer-checked:text-ivoire peer-checked:border-charcoal transition-colors hover:bg-ivoire-2">
                          {l}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6">
                    04 — Quand cela vous arrange-t-il ?
                  </legend>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {moments.map((m) => (
                      <label key={m} className="relative cursor-pointer">
                        <input
                          type="radio"
                          name="moment"
                          value={m}
                          required
                          className="peer sr-only"
                        />
                        <span className="block text-center px-4 py-4 hairline text-sm peer-checked:bg-charcoal peer-checked:text-ivoire peer-checked:border-charcoal transition-colors hover:bg-ivoire-2">
                          {m}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6">
                    05 — Le contexte (facultatif)
                  </legend>
                  <textarea
                    rows={5}
                    placeholder="Une vente d'entreprise prévue ? Un héritage ? Une insatisfaction avec votre banque actuelle ? Dites-nous ce qui motive votre démarche."
                    className="w-full bg-transparent border border-charcoal/20 focus:border-charcoal focus:outline-none p-4 text-base font-display"
                  />
                </fieldset>

                <div className="pt-4 flex flex-col gap-4 items-start">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-charcoal text-ivoire px-10 py-5 text-sm tracking-[0.2em] uppercase hover:bg-leman-deep transition-colors"
                  >
                    Demander un rendez-vous
                    <span aria-hidden>→</span>
                  </button>
                  <p className="text-xs text-charcoal-2/70 max-w-md leading-relaxed">
                    Vos informations sont strictement confidentielles et
                    couvertes par le secret bancaire suisse. Un seul banker
                    NovaBanque y aura accès.
                  </p>
                </div>
              </motion.form>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
