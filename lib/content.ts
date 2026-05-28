export const navLinks = [
  { href: "/notre-approche", label: "Notre approche" },
  { href: "/services", label: "Métiers" },
  { href: "/votre-banker", label: "Vos conseillers" },
  { href: "/reconnaissance", label: "Reconnaissance" },
] as const;

export const cities = ["Genève", "Lausanne", "Zurich", "Monaco", "Singapour"];

export const manifesto = {
  eyebrow: "— Notre approche",
  title: ["Une maison,", "trois métiers,", "un patrimoine."],
  body: `Fondée à Genève en 1987, NovaBanque est une maison de patrimoine privée qui réunit sous un même toit la banque, la gestion d'investissement et le conseil en immobilier de prestige. Une approche complète, héritée de la tradition suisse — pensée pour une clientèle francophone qui ne veut plus jongler entre trois interlocuteurs.`,
  linkLabel: "Notre histoire",
};

export const inventaire = [
  {
    label: "01 — Banque privée",
    title: "Compte courant, carte métal, conciergerie.",
    description:
      "Compte Or multi-devises, carte World Elite Mastercard, banker dédié.",
    href: "#",
  },
  {
    label: "02 — Mandat de gestion",
    title: "L'expertise institutionnelle, à votre service.",
    description:
      "Gestion discrétionnaire ou conseillée. Actions, obligations, private equity.",
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
    label: "04 — Conseil immobilier",
    title: "Acquérir, gérer, transmettre votre patrimoine immobilier.",
    description:
      "Sourcing off-market, due diligence, négociation, conciergerie. Léman, Alpes, Côte d'Azur.",
    href: "#",
  },
  {
    label: "05 — Family Office",
    title: "La gouvernance patrimoniale, de génération en génération.",
    description:
      "Structuration, succession, philanthropie. Pour les patrimoines >10 M€.",
    href: "#",
  },
];

export const properties = [
  {
    label: "— Cologny, Genève",
    title: "Villa contemporaine sur le Léman.",
    description: "1 200 m² · 6 chambres · accès direct au lac",
    priceLabel: "Sur estimation",
  },
  {
    label: "— Crans-Montana, Valais",
    title: "Chalet d'altitude, vue sur les Alpes.",
    description: "450 m² · 5 chambres · ski-in/ski-out",
    priceLabel: "CHF 12 M",
  },
  {
    label: "— Lutry, Vaud",
    title: "Maison de maître en pierre, vignobles.",
    description: "680 m² · 7 chambres · 2 ha de vignes Lavaux",
    priceLabel: "Sur estimation",
  },
  {
    label: "— Coppet, Vaud",
    title: "Demeure XVIIIᵉ, restaurée.",
    description: "920 m² · 9 chambres · parc classé",
    priceLabel: "CHF 18 M",
  },
  {
    label: "— Genève, vieille ville",
    title: "Appartement de réception, Saint-Pierre.",
    description: "320 m² · 4 chambres · 3 terrasses sur les toits",
    priceLabel: "CHF 9,5 M",
  },
];

export const locations = [
  { name: "Vaud", count: "32 propriétés" },
  { name: "Genève", count: "47 propriétés" },
  { name: "Lutry", count: "8 propriétés" },
  { name: "Cologny", count: "14 propriétés" },
  { name: "Coppet", count: "6 propriétés" },
  { name: "Valais", count: "19 propriétés" },
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
  eyebrow: "— Votre conseillère patrimoniale",
  quote:
    "Le temps que vous m'accordez vaut plus que vos avoirs. Et c'est mutuel.",
  attribution: "Claire Moreau",
  role: "Conseillère Patrimoniale Senior · Genève",
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
