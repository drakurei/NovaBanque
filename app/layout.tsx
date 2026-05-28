import type { Metadata } from "next";
import { Geist, Inter_Tight, Fraunces } from "next/font/google";
import LenisProvider from "@/components/lenis/LenisProvider";
import CustomCursor from "@/components/cursor/CustomCursor";
import BackgroundScrub from "@/components/bg-scrub/BackgroundScrub";
import "./globals.css";

// Display sans — modern fintech (Mercury / Vercel)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Body sans
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Italic serif accents (sacred-geometry intercalations)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drakurei.github.io/NovaBanque"),
  title: "NovaBanque — Maison de patrimoine privée · Genève",
  description:
    "Banque privée, gestion d'investissement et conseil en immobilier de prestige. Réunis sous un même toit à Genève depuis 1987.",
  openGraph: {
    title: "NovaBanque — Maison de patrimoine privée",
    description: "Banque, investissement, immobilier. Une seule maison à Genève.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${geist.variable} ${interTight.variable} ${fraunces.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2"
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
