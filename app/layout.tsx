import type { Metadata } from "next";
import { Anton, Inter_Tight, Fraunces } from "next/font/google";
import LenisProvider from "@/components/lenis/LenisProvider";
import CustomCursor from "@/components/cursor/CustomCursor";
import BackgroundScrub from "@/components/bg-scrub/BackgroundScrub";
import "./globals.css";

// SPYLT-style chunky display for big headlines
const anton = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  display: "swap",
});

// Editorial serif kept as secondary for quotes / italic accents
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drakurei.github.io/NovaBanque"),
  title: "NovaBanque — Banque privée du Léman",
  description:
    "Là où le patrimoine rencontre le Léman. Banque privée francophone. Genève, Lausanne, Zurich, Monaco, Singapour.",
  openGraph: {
    title: "NovaBanque — Banque privée du Léman",
    description: "Là où le patrimoine rencontre le Léman.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${anton.variable} ${fraunces.variable} ${interTight.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-charcoal focus:text-ivoire focus:px-3 focus:py-2"
        >
          Aller au contenu
        </a>
        <CustomCursor />
        <LenisProvider>
          <BackgroundScrub />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
