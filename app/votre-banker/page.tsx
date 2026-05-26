"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";
import PageHero from "@/components/page-hero/PageHero";
import EditorialLink from "@/components/primitives/EditorialLink";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { images } from "@/lib/images";

const bankers = [
  {
    name: "Claire Moreau",
    role: "Banker Privée Senior",
    location: "Genève",
    years: "14 ans",
    speciality: "Gestion patrimoniale internationale",
    quote:
      "Le temps que vous m'accordez vaut plus que vos avoirs. Et c'est mutuel.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=85&auto=format&fit=crop",
  },
  {
    name: "Henri Vacher",
    role: "Directeur Patrimoine",
    location: "Genève · Lausanne",
    years: "22 ans",
    speciality: "Mandat de gestion discrétionnaire",
    quote:
      "Vingt-deux ans à investir avec les mêmes principes. Les modes passent. La méthode reste.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=85&auto=format&fit=crop",
  },
  {
    name: "Aïssatou Diop",
    role: "Family Office Senior",
    location: "Genève · Singapour",
    years: "11 ans",
    speciality: "Transmission & gouvernance familiale",
    quote:
      "Un patrimoine, c'est trois générations. Mon métier consiste à protéger les deux suivantes.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1200&q=85&auto=format&fit=crop",
  },
  {
    name: "Marc Hauser",
    role: "Banker Privé",
    location: "Zurich",
    years: "7 ans",
    speciality: "Entrepreneurs & nouvelles fortunes",
    quote:
      "Mes clients ont construit leur entreprise. Mon rôle : les aider à construire leur patrimoine.",
    image:
      "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=1200&q=85&auto=format&fit=crop",
  },
];

export default function VotreBankerPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHero
          eyebrow="— Votre banker privé"
          title="Un visage,"
          italicWord="une parole."
          subtitle="Chaque client NovaBanque dispose d'un banker dédié, choisi pour ses compétences et son adéquation avec votre profil patrimonial. Pas de plateau, pas de file d'attente. Une relation."
          imageSrc={images.banker.src}
          imageAlt={images.banker.alt}
        />

        <section className="py-32 lg:py-48">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="max-w-3xl mb-20 lg:mb-28"
            >
              <motion.p
                variants={fadeUp}
                className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
              >
                — Notre équipe
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight"
              >
                Vingt-quatre bankers privés. <br />
                <span className="italic text-or-soft">
                  Une seule philosophie.
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger(0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-24 lg:gap-y-32"
            >
              {bankers.map((b) => (
                <motion.article
                  key={b.name}
                  variants={fadeUp}
                  className="group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-8">
                    <Image
                      src={b.image}
                      alt={`${b.name}, ${b.role} chez NovaBanque`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                  </div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-3">
                    {b.role} · {b.location}
                  </p>
                  <h3 className="font-display text-4xl lg:text-5xl leading-tight tracking-tight">
                    {b.name}
                  </h3>
                  <blockquote className="font-display italic text-xl lg:text-2xl text-charcoal-2 mt-6 leading-snug max-w-md">
                    « {b.quote} »
                  </blockquote>
                  <div className="mt-8 flex gap-8 text-sm text-charcoal-2">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-or-soft mb-1">
                        Ancienneté
                      </p>
                      <p>{b.years}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-or-soft mb-1">
                        Spécialité
                      </p>
                      <p>{b.speciality}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-ivoire-2 py-32 lg:py-48">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-[1000px] mx-auto px-8 lg:px-12 text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-6"
            >
              — Notre engagement
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl lg:text-6xl leading-[1.02] tracking-tight"
            >
              Une réponse en <br />
              <span className="italic text-or-soft">moins de 30 minutes.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-charcoal-2 mt-8 max-w-2xl mx-auto leading-relaxed"
            >
              Vous écrivez à votre banker à 22h un dimanche soir ? Il vous répond
              avant lundi 8h. C'est la promesse NovaBanque depuis 1987. Tenue à
              97,4 % en 2025.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 inline-block">
              <EditorialLink href="/rendez-vous" size="lg">
                Rencontrer votre banker
              </EditorialLink>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
