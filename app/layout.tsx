import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import LenisProvider from "@/components/lenis/LenisProvider";
import CustomCursor from "@/components/cursor/CustomCursor";
import BackgroundScrub from "@/components/bg-scrub/BackgroundScrub";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
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
