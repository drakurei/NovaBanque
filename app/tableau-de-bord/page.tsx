"use client";

import { motion } from "motion/react";
import {
  TrendingUp,
  Wallet,
  Send,
  PieChart,
  Bell,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import Nav from "@/components/nav/Nav";
import FooterMassive from "@/components/footer-massive/FooterMassive";
import PageHeroDark from "@/components/page-hero/PageHeroDark";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const features = [
  {
    icon: Wallet,
    title: "Vue d'ensemble",
    description: "Solde global multi-devises, comptes consolidés, allocation patrimoine en un coup d'œil.",
  },
  {
    icon: TrendingUp,
    title: "Performance",
    description: "Graphiques en temps réel de votre mandat, comparaison vs benchmark, attribution par classe d'actifs.",
  },
  {
    icon: Send,
    title: "Virements instantanés",
    description: "SEPA, SWIFT, FX. Plafonds jusqu'à 1 M€ par opération avec validation 2FA biométrique.",
  },
  {
    icon: PieChart,
    title: "Reporting fiscal",
    description: "IFU, formulaires 2042, déclaration des comptes à l'étranger générés automatiquement.",
  },
  {
    icon: Bell,
    title: "Alertes intelligentes",
    description: "Mouvements suspects, opportunités d'investissement, échéances fiscales : on vous prévient.",
  },
  {
    icon: Eye,
    title: "Coffre numérique",
    description: "Stockage chiffré de vos documents patrimoniaux. Accès partagé sécurisé avec votre notaire.",
  },
];

const transactions = [
  { label: "Virement Pictet Asset Mgmt", date: "Hier · 14:32", amount: "+ 25 000,00", currency: "€", positive: true },
  { label: "Dividende Apple Inc.", date: "Lun · 09:15", amount: "+ 1 247,80", currency: "$", positive: true },
  { label: "Conciergerie Genève", date: "Dim · 18:42", amount: "− 320,00", currency: "€", positive: false },
  { label: "Mandat équilibré · Souscription", date: "Sam · 11:08", amount: "+ 100 000,00", currency: "€", positive: true },
  { label: "Frais de tenue · Trimestre", date: "Ven · 23:59", amount: "− 180,00", currency: "€", positive: false },
];

export default function TableauDeBordPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <PageHeroDark
          eyebrow="L'application"
          title="Votre patrimoine, en un écran."
          subtitle="L'app NovaBanque consolide vos comptes, vos investissements et vos crédits — partout, en temps réel. Conçue avec des bankers, codée par des ingénieurs."
        />

        {/* Mockup showcase : large phone with feature list around */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left : feature list (top 3) */}
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-4 space-y-10"
            >
              {features.slice(0, 3).map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} variants={fadeUp}>
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl hairline bg-paper-2 glow-violet-soft mb-4">
                      <Icon size={20} strokeWidth={1.5} className="text-navy" />
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-ink-2 text-sm mt-2 leading-relaxed">
                      {f.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Middle : phone mockup with rich content */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 relative mx-auto"
              style={{ width: 280, maxWidth: "70vw" }}
            >
              <div className="absolute -inset-16 bg-navy/30 rounded-full blur-3xl animate-glow-pulse" />
              <div
                className="relative aspect-[9/19.5] rounded-[44px] glow-violet overflow-hidden border border-white/10"
                style={{
                  background:
                    "linear-gradient(180deg, #12121A 0%, #1A1A28 50%, #0F0F1A 100%)",
                }}
              >
                <div className="flex justify-between items-center px-6 pt-5 text-[10px] text-ink-2">
                  <span>09:41</span>
                  <span className="w-3 h-3 rounded-full bg-navy/50" />
                </div>
                <div className="px-6 mt-4">
                  {/* Avatar + greeting */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy to-navy-deep" />
                    <p className="text-xs text-ink-2">Bonjour, <span className="text-ink">Jean</span></p>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-ink-3 mt-5">
                    Patrimoine total
                  </p>
                  <p className="font-display text-3xl mt-1 font-bold">€ 1 482 940</p>
                  <p className="text-[10px] text-emerald-400 mt-0.5">+ 8,2 % YTD</p>

                  {/* Mini chart */}
                  <svg viewBox="0 0 240 60" className="w-full h-12 mt-4">
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#5B47FF" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#5B47FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,50 C20,45 40,30 60,32 C80,33 100,20 120,18 C140,16 160,28 180,22 C200,16 220,8 240,5 L240,60 L0,60 Z"
                      fill="url(#g)"
                    />
                    <path
                      d="M0,50 C20,45 40,30 60,32 C80,33 100,20 120,18 C140,16 160,28 180,22 C200,16 220,8 240,5"
                      stroke="#5B47FF"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>

                  {/* Action buttons */}
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    {[
                      { icon: Send, label: "Virer" },
                      { icon: Plus, label: "Ajouter" },
                      { icon: TrendingUp, label: "Investir" },
                    ].map((a) => {
                      const I = a.icon;
                      return (
                        <button
                          key={a.label}
                          className="flex flex-col items-center gap-1 py-2 hairline rounded-xl bg-paper-2/40"
                        >
                          <I size={14} className="text-navy" />
                          <span className="text-[9px] text-ink-2">{a.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Transactions list */}
                  <p className="text-[9px] uppercase tracking-[0.2em] text-ink-3 mt-5 mb-2">
                    Dernières opérations
                  </p>
                  <div className="space-y-2">
                    {transactions.slice(0, 3).map((t) => (
                      <div key={t.label} className="flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              t.positive ? "bg-emerald-500/15 text-emerald-400" : "bg-rose-500/15 text-rose-400"
                            }`}
                          >
                            {t.positive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                          </span>
                          <div>
                            <p className="text-ink leading-tight">{t.label}</p>
                            <p className="text-ink-3 text-[8px]">{t.date}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] font-medium ${t.positive ? "text-emerald-400" : "text-rose-400"}`}>
                          {t.amount} {t.currency}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right : feature list (bottom 3) */}
            <motion.div
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-4 space-y-10"
            >
              {features.slice(3).map((f) => {
                const Icon = f.icon;
                return (
                  <motion.div key={f.title} variants={fadeUp} className="lg:text-right">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl hairline bg-paper-2 glow-violet-soft mb-4">
                      <Icon size={20} strokeWidth={1.5} className="text-navy" />
                    </span>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="text-ink-2 text-sm mt-2 leading-relaxed lg:max-w-xs lg:ml-auto">
                      {f.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Stats stripe */}
        <section className="relative py-20 lg:py-28 border-y border-white/8">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { value: "12 Md€", label: "Encours géré" },
              { value: "47k", label: "Comptes ouverts" },
              { value: "9,4/10", label: "Note App Store" },
              { value: "256-bit", label: "Chiffrement TLS" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="font-display text-5xl lg:text-7xl font-bold tracking-tight text-ink">
                  {s.value}
                </p>
                <p className="text-[11px] tracking-[0.25em] uppercase text-ink-2 mt-3">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-36 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-6"
          >
            <h2 className="font-display text-4xl lg:text-6xl tracking-tight font-bold">
              Prêt à essayer ?
            </h2>
            <p className="text-ink-2 mt-6 max-w-xl mx-auto">
              Disponible sur iOS et Android au printemps 2026. Rejoignez la liste
              d&apos;attente privée et recevez un accès anticipé.
            </p>
            <a
              href="/rendez-vous"
              data-cursor="hover"
              className="inline-flex items-center gap-2 mt-10 bg-navy hover:bg-navy-deep text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              Demander un accès anticipé
              <span aria-hidden>→</span>
            </a>
          </motion.div>
        </section>
      </main>
      <FooterMassive />
    </>
  );
}
