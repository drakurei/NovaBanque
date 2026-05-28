"use client";

import { motion } from "motion/react";
import {
  Wallet,
  TrendingUp,
  Landmark,
  Home,
  Users,
  Check,
} from "lucide-react";
import Nav from "@/components/nav/Nav";
import FooterMassive from "@/components/footer-massive/FooterMassive";
import PageHeroDark from "@/components/page-hero/PageHeroDark";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const services = [
  {
    number: "01",
    icon: Wallet,
    title: "Compte Or",
    pitch: "Le compte courant des patrimoines exigeants.",
    description:
      "Pensé pour la clientèle internationale et multi-domiciliée, le Compte Or réunit en une seule offre carte World Elite Mastercard en métal, multi-devises sans frais cachés, conciergerie 24/7 et conseiller bancaire dédié.",
    features: [
      "Carte World Elite Mastercard en métal",
      "Multi-devises (EUR, USD, CHF, GBP) sans frais cachés",
      "Virements SEPA instantanés et SWIFT illimités",
      "Conciergerie patrimoniale 24h/24",
      "Conseiller bancaire dédié, joignable < 30 min",
    ],
    price: "12 €/mois",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Mandat de gestion",
    pitch: "L'expertise institutionnelle, à votre service.",
    description:
      "Confiez la gestion de vos avoirs à notre desk d'investissement. Gestion discrétionnaire ou conseillée selon votre préférence, allocation actions, obligations, immobilier coté, private equity et matières premières.",
    features: [
      "Gestion discrétionnaire ou conseillée",
      "Architecture ouverte : zéro produit maison",
      "Reporting consolidé mensuel et fiscal",
      "Accès fonds institutionnels (Goldman, BlackRock, Pictet, Pimco)",
      "Frais transparents : 0,80 %/an, dégressifs",
    ],
    price: "0,80 %/an",
  },
  {
    number: "03",
    icon: Landmark,
    title: "Crédit lombard",
    pitch: "Mobilisez votre portefeuille sans le vendre.",
    description:
      "Le crédit lombard vous permet de financer un projet (immobilier, acquisition d'entreprise, opportunité d'investissement) en gageant votre portefeuille existant. Vous évitez les frais de vente, l'impôt sur la plus-value et conservez votre exposition aux marchés.",
    features: [
      "Lignes de crédit dès 250 000 €",
      "Taux préférentiel : SARON + 0,90 % à 1,50 %",
      "Décaissement en 48 h après accord",
      "Gage sur portefeuille : actions, obligations, fonds",
      "Pas de remboursement obligatoire avant échéance",
    ],
    price: "SARON + 0,90 %",
  },
  {
    number: "04",
    icon: Home,
    title: "Conseil immobilier",
    pitch: "Acquérir, gérer, transmettre votre patrimoine immobilier.",
    description:
      "Notre département immobilier sélectionne des biens off-market pour notre clientèle privée. Léman, Alpes, Côte d'Azur. Due diligence, négociation, financement structuré, conciergerie de gestion.",
    features: [
      "Sourcing off-market sur 3 régions (Léman, Alpes, Côte d'Azur)",
      "Due diligence juridique et technique",
      "Négociation et structuration financière",
      "Conciergerie de gestion locative",
      "Conseil en transmission immobilière",
    ],
    price: "Sur devis",
  },
  {
    number: "05",
    icon: Users,
    title: "Family Office",
    pitch: "La gouvernance patrimoniale, sur mesure.",
    description:
      "Pour les patrimoines supérieurs à 10 millions d'euros, notre département Family Office structure votre transmission, vos investissements alternatifs, votre philanthropie et la formation de vos héritiers. Une équipe pluridisciplinaire : juristes, fiscalistes, ingénieurs patrimoniaux, conseillers en art.",
    features: [
      "Structuration patrimoniale internationale",
      "Conseil en transmission et succession",
      "Accès deals private equity et co-investissement",
      "Conseil en philanthropie et fondations",
      "Formation patrimoniale next-gen",
    ],
    price: "Sur mesure",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeroDark
          eyebrow="Nos métiers"
          title="Cinq services. Une seule maison."
          subtitle="Une offre complète conçue pour répondre à chaque étape de la vie d'un patrimoine — de la gestion courante à la transmission générationnelle."
        />

        {/* Services list — dark cards stacked */}
        <section className="pb-20 lg:pb-32">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-6 lg:space-y-8"
          >
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.number}
                  variants={fadeUp}
                  className="group relative rounded-3xl hairline overflow-hidden p-8 lg:p-12 transition-all duration-500 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(24,24,40,0.6) 0%, rgba(15,15,26,0.6) 100%)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 0%, rgba(91, 71, 255, 0.28), transparent 60%)",
                    }}
                  />

                  <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left : icon + number + title + price */}
                    <div className="lg:col-span-4 space-y-5">
                      <p className="text-[11px] tracking-[0.3em] uppercase text-navy font-bold">
                        {s.number}
                      </p>
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl hairline bg-paper-2 glow-violet-soft">
                        <Icon size={26} strokeWidth={1.5} className="text-navy" />
                      </span>
                      <h2 className="font-display text-3xl lg:text-5xl font-bold tracking-tight text-ink">
                        {s.title}
                      </h2>
                      <p className="italic-serif text-lg text-ink-2">
                        {s.pitch}
                      </p>
                      <div className="inline-block px-4 py-2 rounded-full bg-navy/15 text-navy text-sm font-medium">
                        {s.price}
                      </div>
                    </div>

                    {/* Right : description + features + CTA */}
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-ink-2 text-base lg:text-lg leading-relaxed">
                        {s.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {s.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-3 text-sm text-ink-2"
                          >
                            <Check
                              size={16}
                              className="text-navy mt-0.5 shrink-0"
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <a
                          href="/rendez-vous"
                          data-cursor="hover"
                          className="inline-flex items-center gap-2 text-sm text-ink hover:text-navy transition-colors group/link"
                        >
                          En parler avec un banker
                          <span
                            aria-hidden
                            className="transition-transform group-hover/link:translate-x-1"
                          >
                            →
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight font-bold">
              Une question sur nos services ?
            </h2>
            <p className="text-ink-2 mt-6 max-w-xl mx-auto">
              Un banker NovaBanque vous répond en moins de 24 heures.
              Confidentiel, sans engagement.
            </p>
            <a
              href="/contact"
              data-cursor="hover"
              className="inline-flex items-center gap-2 mt-10 bg-navy hover:bg-navy-deep text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              Contacter un banker
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </section>
      </main>
      <FooterMassive />
    </>
  );
}
