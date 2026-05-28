"use client";

import { motion } from "motion/react";
import { EyeOff, Compass, Hourglass, Mountain } from "lucide-react";
import Nav from "@/components/nav/Nav";
import FooterMassive from "@/components/footer-massive/FooterMassive";
import PageHeroDark from "@/components/page-hero/PageHeroDark";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const valeurs = [
  {
    number: "01",
    icon: EyeOff,
    title: "Discrétion",
    pitch: "Le secret bancaire, conjugué au présent.",
    body: "Conformes aux standards internationaux les plus exigeants, nous gardons une confidentialité absolue sur l'identité, les avoirs et les opérations de nos clients. La discrétion n'est pas un argument marketing chez nous. C'est une condition d'existence.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Indépendance",
    pitch: "Aucun produit maison. Aucun conflit d'intérêt.",
    body: "Nous ne distribuons jamais nos propres produits financiers. Nos conseils sont construits sur une architecture ouverte, en sélectionnant le meilleur de l'univers institutionnel pour chaque client. Vos intérêts d'abord. Toujours.",
  },
  {
    number: "03",
    icon: Hourglass,
    title: "Long terme",
    pitch: "Une banque pour plusieurs générations.",
    body: "Nos clients restent en moyenne 23 ans chez nous. Nous bâtissons des relations qui dépassent les cycles de marché, les modes financières et les changements de génération. La banque privée se mesure en décennies, pas en trimestres.",
  },
  {
    number: "04",
    icon: Mountain,
    title: "Suisse",
    pitch: "Une maison genevoise, ancrée dans son territoire.",
    body: "Fondée en 1987 sur les bords du Léman, NovaBanque incarne la tradition de la banque privée suisse — rigueur, stabilité, discrétion — tout en cultivant une vision contemporaine du conseil patrimonial. Genève reste notre adresse, notre histoire et notre culture.",
  },
];

export default function NotreApprochePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeroDark
          eyebrow="Notre approche"
          title="Une banque privée, à l'ancienne."
          subtitle="Quatre principes intemporels qui structurent notre conseil et notre relation avec chaque client."
        />

        {/* 4 valeurs en grille 2x2 */}
        <section className="pb-20 lg:pb-32">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-[1440px] mx-auto px-6 lg:px-12 grid sm:grid-cols-2 gap-6"
          >
            {valeurs.map((v) => {
              const Icon = v.icon;
              return (
                <motion.article
                  key={v.number}
                  variants={fadeUp}
                  className="group relative rounded-3xl hairline overflow-hidden p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1"
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
                        "radial-gradient(circle at 50% 0%, rgba(91, 71, 255, 0.28), transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl hairline bg-paper-2 glow-violet-soft">
                        <Icon size={26} strokeWidth={1.5} className="text-navy" />
                      </span>
                      <p className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-ink-3">
                        {v.number}
                      </p>
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-ink">
                      {v.title}
                    </h2>
                    <p className="italic-serif text-lg text-ink-2 mt-3">
                      {v.pitch}
                    </p>
                    <p className="text-ink-2 text-sm lg:text-base mt-5 leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Histoire */}
        <section className="py-20 lg:py-32 border-t border-white/8">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto px-6 lg:px-12 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] tracking-[0.3em] uppercase text-navy mb-6"
            >
              Notre histoire
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl lg:text-6xl tracking-tight font-bold leading-[0.95]"
            >
              Trente-neuf années <br />
              <span className="italic-serif text-ink-2 font-normal">
                à servir le patrimoine.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-ink-2 mt-8 leading-relaxed"
            >
              Fondée en 1987 par trois associés de la place de Genève,
              NovaBanque a traversé quatre crises financières, deux mutations
              réglementaires majeures et l&apos;ère du numérique sans changer
              de doctrine.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-ink-2 mt-6 leading-relaxed"
            >
              Aujourd&apos;hui dirigée par la deuxième génération de bankers
              privés, notre maison gère <strong className="text-ink">12 milliards d&apos;euros</strong> pour <strong className="text-ink">47 000 clients</strong> patrimoniaux à travers le monde.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10">
              <a
                href="/rendez-vous"
                data-cursor="hover"
                className="inline-flex items-center gap-2 bg-navy hover:bg-navy-deep text-white px-7 py-3 rounded-full text-sm font-medium transition-colors"
              >
                Rencontrer un banker
                <span aria-hidden>→</span>
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <FooterMassive />
    </>
  );
}
