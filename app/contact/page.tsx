"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Nav from "@/components/nav/Nav";
import FooterMassive from "@/components/footer-massive/FooterMassive";
import PageHeroDark from "@/components/page-hero/PageHeroDark";
import { fadeUp, stagger, viewportOnce, easeEditorial } from "@/lib/motion";

const offices = [
  {
    city: "Genève",
    address: "Quai du Mont-Blanc 12, 1201 Genève",
    phone: "+41 22 555 00 00",
    hours: "Lun–Ven · 08:30 – 18:30",
    primary: true,
  },
  {
    city: "Paris",
    address: "8 Avenue Hoche, 75008 Paris",
    phone: "+33 1 89 27 00 00",
    hours: "Lun–Ven · 09:00 – 19:00",
  },
  {
    city: "Lausanne",
    address: "Place Saint-François 8, 1003 Lausanne",
    phone: "+41 21 555 00 00",
    hours: "Lun–Ven · 08:30 – 18:30",
  },
];

const subjects = [
  "Ouverture de compte",
  "Mandat de gestion",
  "Crédit lombard",
  "Conseil immobilier",
  "Family Office",
  "Autre",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Nav />
      <main id="main">
        <PageHeroDark
          eyebrow="Nous parler"
          title="Une conversation, sans engagement."
          subtitle="Confidentielle. Sans argumentaire commercial. Une heure pour comprendre votre situation et voir si nous pouvons vous être utiles."
        />

        {/* Form + offices grid */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form */}
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-7"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: easeEditorial }}
                  className="p-10 hairline rounded-3xl bg-paper-2/30"
                >
                  <p className="text-[11px] tracking-[0.3em] uppercase text-navy mb-3">
                    — Message reçu
                  </p>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
                    Merci. Un banker vous contactera <br />
                    sous 24 heures.
                  </h2>
                  <p className="text-ink-2 mt-6">
                    Pour des raisons évidentes, c&apos;est une démo : aucune donnée
                    n&apos;est transmise. Aucun rendez-vous réel n&apos;est planifié.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-3"
                      >
                        Prénom
                      </label>
                      <input
                        id="prenom"
                        type="text"
                        required
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-navy focus:outline-none py-3 text-lg text-ink"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-3"
                      >
                        Nom
                      </label>
                      <input
                        id="nom"
                        type="text"
                        required
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-navy focus:outline-none py-3 text-lg text-ink"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-3"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-navy focus:outline-none py-3 text-lg text-ink"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="tel"
                        className="block text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-3"
                      >
                        Téléphone
                      </label>
                      <input
                        id="tel"
                        type="tel"
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-navy focus:outline-none py-3 text-lg text-ink"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-4">
                      Sujet
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {subjects.map((s) => (
                        <label key={s} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="subject"
                            value={s}
                            required
                            className="peer sr-only"
                          />
                          <span className="block text-center px-3 py-3 hairline rounded-xl text-sm text-ink-2 peer-checked:bg-navy peer-checked:text-white peer-checked:border-navy transition-colors hover:bg-paper-2/40">
                            {s}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-3"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-transparent border border-white/15 focus:border-navy focus:outline-none rounded-2xl p-4 text-base text-ink"
                    />
                  </div>

                  <div className="flex items-start gap-4">
                    <button
                      type="submit"
                      data-cursor="hover"
                      className="bg-navy hover:bg-navy-deep text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2"
                    >
                      Envoyer le message
                      <span aria-hidden>→</span>
                    </button>
                    <p className="text-xs text-ink-3 max-w-xs leading-relaxed">
                      Vos informations restent confidentielles. Un seul banker
                      NovaBanque y aura accès.
                    </p>
                  </div>
                </motion.form>
              )}
            </motion.div>

            {/* Offices */}
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-5 space-y-8"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.3em] uppercase text-ink-2"
              >
                Nos bureaux
              </motion.p>

              {offices.map((o) => (
                <motion.div
                  key={o.city}
                  variants={fadeUp}
                  className={`relative p-6 rounded-2xl hairline ${
                    o.primary ? "bg-paper-2/50 glow-violet-soft" : "bg-paper-2/20"
                  }`}
                >
                  <h3 className="font-display text-2xl font-bold tracking-tight flex items-center gap-3">
                    {o.city}
                    {o.primary && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-navy bg-navy/15 px-2 py-0.5 rounded-full">
                        Siège
                      </span>
                    )}
                  </h3>
                  <div className="mt-4 space-y-2 text-sm text-ink-2">
                    <p className="flex items-start gap-3">
                      <MapPin size={15} className="text-navy mt-0.5 shrink-0" />
                      {o.address}
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={15} className="text-navy shrink-0" />
                      <a
                        href={`tel:${o.phone.replace(/\s/g, "")}`}
                        data-cursor="hover"
                        className="hover:text-ink"
                      >
                        {o.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-3">
                      <Clock size={15} className="text-navy shrink-0" />
                      {o.hours}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Direct email */}
              <motion.a
                variants={fadeUp}
                href="mailto:private@novabanque.ch"
                data-cursor="hover"
                className="block p-6 rounded-2xl hairline bg-navy/10 hover:bg-navy/15 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-navy text-white">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-[11px] tracking-[0.3em] uppercase text-ink-2 mb-1">
                      Écrivez directement
                    </p>
                    <p className="font-display text-lg font-bold tracking-tight">
                      private@novabanque.ch
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterMassive />
    </>
  );
}
