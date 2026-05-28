"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Lock,
  Fingerprint,
  KeyRound,
  Server,
  Eye,
  AlertTriangle,
  Award,
} from "lucide-react";
import Nav from "@/components/nav/Nav";
import FooterMassive from "@/components/footer-massive/FooterMassive";
import PageHeroDark from "@/components/page-hero/PageHeroDark";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Agrément FINMA",
    description:
      "NovaBanque est supervisée par l'Autorité Fédérale de Surveillance des Marchés Financiers suisse. Tous nos process sont audités annuellement.",
  },
  {
    icon: Award,
    title: "Garantie FGDR 100 k€",
    description:
      "Vos dépôts sont protégés à hauteur de 100 000 € par le Fonds de Garantie des Dépôts et de Résolution, sur tout produit éligible.",
  },
  {
    icon: Lock,
    title: "Chiffrement TLS 1.3",
    description:
      "Toutes les communications entre votre app et nos serveurs sont chiffrées en TLS 1.3 avec rotation automatique des clés.",
  },
  {
    icon: Fingerprint,
    title: "Authentification 3 facteurs",
    description:
      "Mot de passe + biométrie Face ID/Touch ID + code TOTP par TOTP authenticator. Aucun SMS, jamais.",
  },
  {
    icon: Server,
    title: "ISO 27001",
    description:
      "Nos data centers à Zurich et Genève sont certifiés ISO 27001. Hébergement souverain suisse, redondance triple, RTO < 15 min.",
  },
  {
    icon: KeyRound,
    title: "Clés cryptographiques",
    description:
      "Toutes les clés privées sont stockées en HSM (Hardware Security Module) certifié FIPS 140-2 Level 4. Aucun humain n'y a accès.",
  },
  {
    icon: Eye,
    title: "Détection de fraude",
    description:
      "Notre moteur ML surveille en temps réel 100% des transactions. Plus de 99% des tentatives de fraude bloquées avant exécution.",
  },
  {
    icon: AlertTriangle,
    title: "Cellule de crise 24/7",
    description:
      "En cas d'incident, notre équipe sécurité réagit en moins de 10 minutes. Notification proactive de tous les clients impactés.",
  },
];

export default function SecuritePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeroDark
          eyebrow="Sécurité institutionnelle"
          title="Votre patrimoine, blindé."
          subtitle="Vous nous confiez vos avoirs. Nous traitons cette responsabilité comme un État traite ses réserves stratégiques. Voici comment."
        />

        {/* 8 pillars in a bento dark grid */}
        <section className="py-20 lg:py-28">
          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-[1440px] mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  variants={fadeUp}
                  className="group relative p-7 rounded-3xl hairline overflow-hidden transition-all duration-500 hover:-translate-y-1"
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
                        "radial-gradient(circle at 50% 0%, rgba(91, 71, 255, 0.32), transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl hairline bg-paper-2 glow-violet-soft mb-5">
                      <Icon size={20} strokeWidth={1.5} className="text-navy" />
                    </span>
                    <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-ink-2 text-sm mt-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        {/* Audit & certifs band */}
        <section className="py-20 lg:py-28 border-y border-white/8 bg-paper-2/30">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <p className="text-[11px] tracking-[0.3em] uppercase text-ink-2 text-center mb-10">
              Audits et certifications
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 items-center">
              {["FINMA", "ISO 27001", "PCI-DSS L1", "SOC 2 Type II", "RGPD"].map((c) => (
                <div
                  key={c}
                  className="text-center font-display text-xl lg:text-2xl font-bold text-ink-2 hover:text-ink transition-colors"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bug bounty CTA */}
        <section className="py-24 lg:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-navy mb-6">
              Bug bounty
            </p>
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight font-bold">
              Vous trouvez une faille ?
            </h2>
            <p className="text-ink-2 mt-6 max-w-xl mx-auto">
              Notre programme de bug bounty récompense les chercheurs en sécurité.
              Jusqu&apos;à 50 000 € par vulnérabilité critique remontée de manière
              responsable.
            </p>
            <a
              href="mailto:security@novabanque.ch"
              data-cursor="hover"
              className="inline-flex items-center gap-2 mt-10 bg-navy hover:bg-navy-deep text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              security@novabanque.ch
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </section>
      </main>
      <FooterMassive />
    </>
  );
}
