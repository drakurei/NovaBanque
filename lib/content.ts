export const navLinks = [
  { href: "/notre-approche", label: "Manifesto" },
  { href: "/services", label: "Drops" },
  { href: "/votre-banker", label: "Studio" },
  { href: "/reconnaissance", label: "Press" },
] as const;

export const cities = ["Lisbon", "Paris", "Tokyo", "Seoul", "Los Angeles"];

export const manifesto = {
  eyebrow: "— Manifesto",
  title: ["Crafted.", "Not", "mass-produced."],
  body: `DRIFT est né à Lisbonne en 2021. Pas une marque. Un atelier. Chaque drop est limité à 300 paires. Cuir tanné au chêne en Italie, semelles Vibram, montage cousu Goodyear. Pas de saison, pas de pré-commande, pas de remise. Quand c'est fini, c'est fini.`,
  linkLabel: "Notre histoire",
};

export const inventaire = [
  {
    label: "01 — Performance",
    title: "Sneakers de course, repensées.",
    description:
      "Coupe basse, mesh respirant, semelle Vibram traction. 285g.",
    href: "#",
  },
  {
    label: "02 — Lifestyle",
    title: "Le quotidien, élevé.",
    description:
      "Cuir pleine fleur, doublure cuir, semelle gomme. Patine garantie.",
    href: "#",
  },
  {
    label: "03 — Workwear",
    title: "Vêtements pensés pour durer.",
    description:
      "Denim japonais 14oz, surchemises en moleskine, t-shirts coton bio 240g.",
    href: "#",
  },
  {
    label: "04 — Accessoires",
    title: "Le détail qui change tout.",
    description:
      "Casquettes 6-panel, chaussettes ribbed, ceintures cuir Horween.",
    href: "#",
  },
  {
    label: "05 — Limited",
    title: "Collaborations one-shot.",
    description:
      "3 drops par an. 100 pièces chacun. Sourcing artisan, archives, vintage.",
    href: "#",
  },
];

export const properties = [
  {
    label: "— Drop 01 · Lisbon",
    title: "DRIFT 01 — Smoke",
    description: "Sneaker low · cuir gris fumé · 300 paires",
    priceLabel: "240 €",
  },
  {
    label: "— Drop 02 · Tokyo",
    title: "DRIFT 02 — Sand",
    description: "Sneaker mid · suède beige · 250 paires",
    priceLabel: "280 €",
  },
  {
    label: "— Drop 03 · Paris",
    title: "DRIFT 03 — Noir",
    description: "Sneaker low · cuir noir mat · 300 paires",
    priceLabel: "260 €",
  },
  {
    label: "— Drop 04 · Seoul",
    title: "DRIFT 04 — Rust",
    description: "Sneaker high · cuir patiné rouille · 200 paires",
    priceLabel: "320 €",
  },
  {
    label: "— Drop 05 · LA",
    title: "DRIFT 05 — Bone",
    description: "Sneaker low · cuir ivoire · 350 paires",
    priceLabel: "240 €",
  },
];

export const locations = [
  { name: "Lisbon", count: "Atelier principal" },
  { name: "Paris", count: "Showroom Marais" },
  { name: "Tokyo", count: "Pop-up Daikanyama" },
  { name: "Seoul", count: "Concept store" },
  { name: "Los Angeles", count: "Showroom Arts District" },
  { name: "Berlin", count: "Pop-up Mitte" },
];

export const featured = {
  eyebrow: "— En avant",
  title: ["Trois pièces", "à porter"],
  cards: [
    {
      tag: "Sneaker",
      title: "DRIFT 03 — Noir",
      meta: "260 € · 300 paires",
    },
    {
      tag: "Workwear",
      title: "Chore jacket — Indigo",
      meta: "320 € · denim 14oz",
    },
    {
      tag: "Accessory",
      title: "Casquette 6-panel",
      meta: "85 € · twill non lavé",
    },
  ],
};

export const bankerQuote = {
  eyebrow: "— Studio",
  quote:
    "On fait des objets qui s'améliorent avec le temps. Pas qui finissent au placard après deux saisons.",
  attribution: "Léo Martins",
  role: "Fondateur · Lisbon",
};

export const distinctions = [
  {
    name: "Highsnobiety",
    wordmarkClass: "font-display text-2xl tracking-tight",
    quote: "« One of the most exciting small studios coming out of Lisbon. »",
  },
  {
    name: "HYPEBEAST",
    wordmarkClass: "font-sans font-extrabold text-2xl tracking-[0.15em]",
    quote: "« Restraint that actually means something. »",
  },
  {
    name: "GQ",
    wordmarkClass: "font-display text-3xl tracking-tight",
    quote: "« The sneakers your wardrobe was missing. »",
  },
  {
    name: "Complex",
    wordmarkClass: "font-sans font-bold text-2xl tracking-tight",
    quote: "« Quality you can feel in your hand. »",
  },
  {
    name: "Dazed",
    wordmarkClass: "font-display italic text-2xl tracking-tight",
    quote: "« Slow fashion, done right. »",
  },
];

export const ctaFinal = {
  title: ["Subscribe", "to next drop."],
  body: "300 paires. Pas de pré-commande. Quand le prochain drop sort, tu reçois un email 24h avant le grand public.",
  linkLabel: "Get the early access",
};

export const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "Sneakers", href: "/services" },
      { label: "Workwear", href: "/services" },
      { label: "Accessoires", href: "/services" },
      { label: "Archives", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Manifesto", href: "/notre-approche" },
      { label: "Atelier Lisbon", href: "/votre-banker" },
      { label: "Press", href: "/reconnaissance" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Size guide", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Care", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "hello@drift.studio", href: "mailto:hello@drift.studio" },
      { label: "Rua da Boavista 12, Lisbon", href: "#" },
      { label: "Instagram @drift.studio", href: "#" },
      { label: "Newsletter", href: "/rendez-vous" },
    ],
  },
];

export const footerMention =
  "DRIFT Studio — Lisbon, depuis 2021. Tannage végétal certifié. Cuir Horween, montage Goodyear, fabrication artisanale.";
