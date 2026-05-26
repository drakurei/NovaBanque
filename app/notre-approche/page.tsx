"use client";

import { motion } from "motion/react";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/page-hero/PageHero";
import EditorialLink from "@/components/primitives/EditorialLink";
import ImageReveal from "@/components/primitives/ImageReveal";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { images } from "@/lib/images";

const valeurs = [
  {
    label: "01 — Discrétion",
    title: "Le secret bancaire, conjugué au présent.",
    body: "Conformes aux standards internationaux les plus exigeants, nous gardons une confidentialité absolue sur l'identité, les avoirs et les opérations de nos clients. La discrétion n'est pas un argument marketing chez nous. C'est une condition d'existence.",
  },
  {
    label: "02 — Indépendance",
    title: "Aucun produit maison. Aucun conflit d'intérêt.",
    body: "Nous ne distribuons jamais nos propres produits financiers. Nos conseils sont construits sur une architecture ouverte, en sélectionnant le meilleur de l'univers institutionnel pour chaque client. Vos intérêts d'abord. Toujours.",
  },
  {
    label: "03 — Long terme",
    title: "Une banque pour plusieurs générations.",
    body: "Nos clients restent en moyenne 23 ans chez nous. Nous bâtissons des relations qui dépassent les cycles de marché, les modes financières et les changements de génération. La banque privée se mesure en décennies, pas en trimestres.",
  },
  {
    label: "04 — Suisse",
    title: "Une maison genevoise, ancrée dans son territoire.",
    body: "Fondée en 1987 sur les bords du Léman, NovaBanque incarne la tradition de la banque privée suisse — rigueur, stabilité, discrétion — tout en cultivant une vision contemporaine du conseil patrimonial. Genève reste notre adresse, notre histoire et notre culture.",
  },
];

export default function NotreApprochePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          eyebrow="— Notre approche"
          title="Une banque privée,"
          italicWord="à l'ancienne."
          subtitle="Quatre principes intemporels qui structurent notre conseil et notre relation avec chaque client."
          imageSrc={images.manifesto.src}
          imageAlt={images.manifesto.alt}
        />

        <section className="py-32 lg:py-48">
          <div className="max-w-[1200px] mx-auto px-8 lg:px-12 space-y-32 lg:space-y-40">
            {valeurs.map((v, i) => (
              <motion.article
                key={v.label}
                variants={stagger(0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:col-span-4">
                  <motion.p
                    variants={fadeUp}
                    className="text-[11px] tracking-[0.3em] uppercase text-or-soft sticky top-32"
                  >
                    {v.label}
                  </motion.p>
                </div>
                <div className="lg:col-span-8">
                  <motion.h2
                    variants={fadeUp}
                    className="font-display text-4xl lg:text-6xl leading-[1.05] tracking-tight"
                  >
                    {v.title}
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="text-lg text-charcoal-2 mt-8 leading-[1.7] max-w-2xl"
                  >
                    {v.body}
                  </motion.p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="py-32 hairline-b border-t border-charcoal/10">
          <div className="max-w-[1200px] mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ImageReveal
              src={images.inventaire[2].src}
              alt="Histoire de NovaBanque"
              sizes="(max-width: 1024px) 100vw, 50vw"
              aspect="aspect-[4/5]"
            />
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
              >
                — Notre histoire
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight"
              >
                Trente-neuf années <br />
                <span className="italic text-or-soft">à servir le patrimoine.</span>
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="space-y-5 mt-10 text-lg text-charcoal-2 leading-[1.7]"
              >
                <p>
                  Fondée en 1987 par trois associés de la place de Genève, NovaBanque
                  a traversé quatre crises financières, deux mutations réglementaires
                  majeures et l'ère du numérique sans changer de doctrine.
                </p>
                <p>
                  Aujourd'hui dirigée par la deuxième génération de bankers privés,
                  notre maison gère 12 milliards d'euros pour 47 000 clients
                  patrimoniaux à travers le monde.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10">
                <EditorialLink href="/rendez-vous" size="lg">
                  Rencontrer un banker
                </EditorialLink>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
