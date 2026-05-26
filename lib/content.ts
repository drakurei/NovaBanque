export const navLinks = [
  { href: "/notre-approche", label: "Notre approche" },
  { href: "/services", label: "Services" },
  { href: "/votre-banker", label: "Votre banker" },
  { href: "/reconnaissance", label: "Reconnaissance" },
] as const;

export const cities = ["Genève", "Lausanne", "Zurich", "Monaco", "Singapour"];

export const manifesto = {
  eyebrow: "— Notre approche",
  title: ["Une banque privée,", "repensée pour le", "XXIᵉ siècle."],
  body: `Fondée à Genève en 1987, NovaBanque allie la tradition de la banque privée suisse à l'exigence de la finance contemporaine. Nous accompagnons une clientèle internationale exigeante dans la gestion, la transmission et l'amplification de son patrimoine — avec une discrétion absolue et un conseil sur mesure.`,
  linkLabel: "Notre histoire",
};

export const inventaire = [
  {
    label: "01 — Compte Or",
    title: "Le compte courant des patrimoines exigeants.",
    description:
      "Carte World Elite Mastercard en métal, multi-devises, conciergerie 24/7.",
    href: "#",
  },
  {
    label: "02 — Mandat de gestion",
    title: "L'expertise institutionnelle, à votre service.",
    description:
      "Gestion discrétionnaire ou conseillée. Allocation actions, obligations, private equity.",
    href: "#",
  },
  {
    label: "03 — Crédit lombard",
    title: "Mobilisez votre portefeuille sans le vendre.",
    description:
      "Lignes de crédit garanties par vos actifs, taux préférentiel, dès 250 k€.",
    href: "#",
  },
  {
    label: "04 — Family Office",
    title: "La gouvernance patrimoniale de la prochaine génération.",
    description:
      "Structuration, succession, philanthropie. Pour les patrimoines >10 M€.",
    href: "#",
  },
];

export const featured = {
  eyebrow: "— Services en avant",
  title: ["Trois piliers", "à découvrir"],
  cards: [
    {
      tag: "Mandat",
      title: "Mandat équilibré 60/40",
      meta: "Performance +8,2% net · 2025",
    },
    {
      tag: "Crédit",
      title: "Crédit lombard premium",
      meta: "Taux dès SARON +0,9%",
    },
    {
      tag: "Conciergerie",
      title: "Concierge patrimonial",
      meta: "Disponible 24h/24, partout",
    },
  ],
};

export const bankerQuote = {
  eyebrow: "— Votre banker privé",
  quote:
    "Le temps que vous m'accordez vaut plus que vos avoirs. Et c'est mutuel.",
  attribution: "Claire Moreau",
  role: "Banker Privée Senior · Genève",
};

export const distinctions = [
  {
    name: "Les Échos",
    wordmarkClass: "font-display font-bold text-2xl tracking-tight",
    quote: "« Une nouvelle référence sur la place de Genève. »",
  },
  {
    name: "BILAN",
    wordmarkClass: "font-sans font-extrabold text-2xl tracking-[0.15em]",
    quote: "« L'élégance discrète d'une vraie maison de patrimoine. »",
  },
  {
    name: "Le Figaro Patrimoine",
    wordmarkClass: "font-display italic text-xl tracking-tight",
    quote: "« La banque privée que la nouvelle fortune attendait. »",
  },
  {
    name: "Forbes",
    wordmarkClass: "font-display font-bold text-2xl tracking-tight",
    quote: "« Swiss banking, reinvented for the next generation. »",
  },
  {
    name: "FT Wealth",
    wordmarkClass: "font-display font-semibold text-xl tracking-tight",
    quote: "« A house that feels older than it is — in the best way. »",
  },
];

export const ctaFinal = {
  title: ["Prenez un", "rendez-vous privé."],
  body: "Une conversation confidentielle, sans engagement. À Genève, à Paris, ou en visio.",
  linkLabel: "Réserver — c'est confidentiel",
};

export const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Compte Or", href: "/services" },
      { label: "Mandat de gestion", href: "/services" },
      { label: "Crédit lombard", href: "/services" },
      { label: "Family Office", href: "/services" },
    ],
  },
  {
    title: "Maison",
    links: [
      { label: "Notre approche", href: "/notre-approche" },
      { label: "Nos bankers", href: "/votre-banker" },
      { label: "Reconnaissance", href: "/reconnaissance" },
      { label: "Espace client", href: "/espace-client" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Confidentialité", href: "#" },
      { label: "Conduite des affaires", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+41 22 555 00 00", href: "tel:+41225550000" },
      { label: "private@novabanque.ch", href: "mailto:private@novabanque.ch" },
      { label: "Quai du Mont-Blanc 12, Genève", href: "#" },
    ],
  },
];

export const footerMention =
  "Maison fondée en 1987 — Genève. Membre de la Convention de diligence des banques suisses (CDB 20). Soumise à la surveillance de la FINMA.";
