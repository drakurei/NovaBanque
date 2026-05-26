"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/page-hero/PageHero";
import EditorialLink from "@/components/primitives/EditorialLink";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { images } from "@/lib/images";

const services = [
  {
    label: "01 — Compte Or",
    title: "Le compte courant des patrimoines exigeants.",
    body: "Pensé pour la clientèle internationale et multi-domiciliée, le Compte Or réunit en une seule offre carte World Elite Mastercard en métal, multi-devises sans frais cachés, conciergerie 24/7 et conseiller bancaire dédié. Le confort opérationnel d'un compte premium, la rigueur d'une banque privée suisse.",
    features: [
      "Carte World Elite Mastercard en métal",
      "Multi-devises (EUR, USD, CHF, GBP) sans frais cachés",
      "Virements SEPA instantanés et SWIFT illimités",
      "Conciergerie patrimoniale 24h/24",
      "Conseiller bancaire dédié, joignable < 30 min",
    ],
    image: images.inventaire[0],
  },
  {
    label: "02 — Mandat de gestion",
    title: "L'expertise institutionnelle, à votre service.",
    body: "Confiez la gestion de vos avoirs à notre desk d'investissement. Gestion discrétionnaire ou conseillée selon votre préférence, allocation actions, obligations, immobilier coté, private equity et matières premières. Nos profils de gestion vont de prudent (20% actions) à dynamique (90% actions).",
    features: [
      "Gestion discrétionnaire ou conseillée",
      "Architecture ouverte : zéro produit maison",
      "Reporting consolidé mensuel et fiscal",
      "Accès aux fonds institutionnels (Goldman, BlackRock, Pictet, Pimco)",
      "Frais transparents : 0,80% / an, dégressifs",
    ],
    image: images.inventaire[1],
  },
  {
    label: "03 — Crédit lombard",
    title: "Mobilisez votre portefeuille sans le vendre.",
    body: "Le crédit lombard vous permet de financer un projet (immobilier, acquisition d'entreprise, opportunité d'investissement) en gageant votre portefeuille existant. Vous évitez les frais de vente, l'impôt sur la plus-value, et conservez votre exposition aux marchés.",
    features: [
      "Lignes de crédit dès 250 000 €",
      "Taux préférentiel : SARON + 0,90% à 1,50%",
      "Décaissement en 48h après accord",
      "Gage sur portefeuille : actions, obligations, fonds",
      "Pas de remboursement obligatoire avant échéance",
    ],
    image: images.inventaire[2],
  },
  {
    label: "04 — Family Office",
    title: "La gouvernance patrimoniale, sur mesure.",
    body: "Pour les patrimoines supérieurs à 10 millions d'euros, notre département Family Office structure votre transmission, vos investissements alternatifs, votre philanthropie et la formation de vos héritiers. Une équipe pluridisciplinaire : juristes, fiscalistes, ingénieurs patrimoniaux, conseillers en art.",
    features: [
      "Structuration patrimoniale internationale",
      "Conseil en transmission et succession",
      "Accès deals private equity et co-investissement",
      "Conseil en philanthropie et fondations",
      "Formation patrimoniale next-gen",
    ],
    image: images.inventaire[3],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          eyebrow="— Notre inventaire"
          title="Quatre piliers"
          italicWord="patrimoniaux."
          subtitle="Une offre complète, conçue pour répondre à chaque étape de la vie d'un patrimoine — de la gestion courante à la transmission."
          imageSrc={images.featured.src}
          imageAlt={images.featured.alt}
        />

        <div className="divide-y divide-charcoal/10">
          {services.map((s, i) => (
            <section
              key={s.label}
              className="py-24 lg:py-40"
            >
              <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
                <motion.div
                  variants={stagger(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <motion.div
                    variants={fadeUp}
                    className="lg:col-span-6 lg:[direction:ltr]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="lg:col-span-6 lg:[direction:ltr]">
                    <motion.p
                      variants={fadeUp}
                      className="text-[11px] tracking-[0.3em] uppercase text-or-soft mb-6"
                    >
                      {s.label}
                    </motion.p>
                    <motion.h2
                      variants={fadeUp}
                      className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight"
                    >
                      {s.title}
                    </motion.h2>
                    <motion.p
                      variants={fadeUp}
                      className="text-lg text-charcoal-2 mt-8 leading-[1.7] max-w-xl"
                    >
                      {s.body}
                    </motion.p>
                    <motion.ul
                      variants={fadeUp}
                      className="mt-8 space-y-3 text-charcoal"
                    >
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-base"
                        >
                          <span className="mt-2 w-3 h-px bg-or-soft flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </motion.ul>
                    <motion.div variants={fadeUp} className="mt-10">
                      <EditorialLink href="/rendez-vous" size="lg">
                        En parler avec un banker
                      </EditorialLink>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
