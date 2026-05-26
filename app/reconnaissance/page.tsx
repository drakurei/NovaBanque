"use client";

import { motion } from "motion/react";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/page-hero/PageHero";
import EditorialLink from "@/components/primitives/EditorialLink";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { images } from "@/lib/images";

const presse = [
  {
    logo: "/press/les-echos.svg",
    name: "Les Échos",
    date: "Octobre 2025",
    title: "Une nouvelle référence sur la place de Genève",
    excerpt:
      "Avec 12 milliards d'euros sous gestion et une croissance de 18 % sur les douze derniers mois, NovaBanque s'impose comme la maison de référence pour les patrimoines francophones cherchant la rigueur suisse sans la lourdeur des établissements centenaires.",
  },
  {
    logo: "/press/bilan.svg",
    name: "Bilan",
    date: "Juin 2025",
    title: "L'élégance discrète d'une vraie maison de patrimoine",
    excerpt:
      "Là où d'autres misent sur le marketing, NovaBanque cultive le silence. Pas de campagne d'affichage à Genève. Pas de stand au WEF de Davos. Juste un taux de rétention de 96 % sur dix ans — qui parle plus fort que n'importe quel slogan.",
  },
  {
    logo: "/press/le-figaro.svg",
    name: "Le Figaro Patrimoine",
    date: "Mars 2025",
    title: "La banque privée que la nouvelle fortune attendait",
    excerpt:
      "Les entrepreneurs tech qui ont vendu leur startup arrivent par dizaines. NovaBanque a su construire une offre adaptée à ces patrimoines récents mais sophistiqués, sans tomber dans le piège de la nouveauté pour la nouveauté.",
  },
  {
    logo: "/press/forbes.svg",
    name: "Forbes",
    date: "January 2025",
    title: "Swiss banking, reinvented for the next generation",
    excerpt:
      "NovaBanque has cracked a code that few European private banks have managed: blending Swiss discretion with a banking experience that feels native to clients born after the fall of the Berlin Wall. The result is a private bank that finally speaks the language of its 35-to-55-year-old clientele.",
  },
  {
    logo: "/press/ft-wealth.svg",
    name: "FT Wealth",
    date: "November 2024",
    title: "A house that feels older than it is — in the best way",
    excerpt:
      "Founded in 1987, NovaBanque carries the gravity of a century-old institution. The wood-paneled meeting rooms on Quai du Mont-Blanc, the deliberate pace of every conversation, the absence of touch screens in the lobby — all of it signals a bank that takes the long view seriously.",
  },
];

const distinctions = [
  {
    year: "2025",
    award: "Best Private Bank — Switzerland",
    body: "Euromoney Private Banking Awards · 3ᵉ année consécutive",
  },
  {
    year: "2024",
    award: "Wealth Manager of the Year",
    body: "Citywealth Magic Circle Awards · Catégorie 1–5 Md€",
  },
  {
    year: "2024",
    award: "Top 10 Family Offices",
    body: "Bloomberg HNW Survey · Europe continentale",
  },
  {
    year: "2023",
    award: "Innovation Patrimoniale",
    body: "Les Échos Family Office Awards · Mention spéciale Suisse",
  },
];

export default function ReconnaissancePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          eyebrow="— Reconnaissance"
          title="Ce qu'ils écrivent"
          italicWord="de nous."
          subtitle="La presse économique et patrimoniale, les jurys indépendants, les classements internationaux. Voici ce qui est dit de NovaBanque — sans que nous l'ayons écrit nous-mêmes."
          imageSrc={images.inventaire[2].src}
          imageAlt="Reconnaissance NovaBanque"
        />

        <section className="py-32 lg:py-48">
          <div className="max-w-[1100px] mx-auto px-8 lg:px-12">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-20"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
              >
                — Presse
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight"
              >
                Cinq publications. <br />
                <span className="italic text-or-soft">Une seule lecture.</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-16 lg:space-y-20"
            >
              {presse.map((p) => (
                <motion.article
                  key={p.name}
                  variants={fadeUp}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 pb-16 lg:pb-20 border-b border-charcoal/10 last:border-b-0"
                >
                  <div className="lg:col-span-3">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-7 lg:h-8 opacity-70 text-charcoal"
                    />
                    <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mt-3">
                      {p.date}
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-display text-2xl lg:text-4xl leading-[1.15] tracking-tight">
                      « {p.title} »
                    </h3>
                    <p className="text-lg text-charcoal-2 mt-6 leading-[1.7] max-w-3xl">
                      {p.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-ivoire-2 py-32 lg:py-48">
          <div className="max-w-[1100px] mx-auto px-8 lg:px-12">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
              >
                — Distinctions
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight"
              >
                Récompensé par <br />
                <span className="italic text-or-soft">nos pairs.</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="divide-y divide-charcoal/10"
            >
              {distinctions.map((d) => (
                <motion.div
                  key={`${d.year}-${d.award}`}
                  variants={fadeUp}
                  className="grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-center"
                >
                  <p className="font-display text-3xl lg:text-5xl text-or-soft lg:col-span-2">
                    {d.year}
                  </p>
                  <h3 className="font-display text-2xl lg:text-3xl tracking-tight lg:col-span-6">
                    {d.award}
                  </h3>
                  <p className="text-base text-charcoal-2 lg:col-span-4">
                    {d.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-20 text-center"
            >
              <EditorialLink href="/rendez-vous" size="lg">
                Découvrir notre maison
              </EditorialLink>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
