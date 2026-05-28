import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import MarqueeBand from "@/components/marquee/MarqueeBand";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";
import StatsBand from "@/components/stats/StatsBand";
import InventaireHorizontal from "@/components/inventaire/InventaireHorizontal";
import FeaturedVillaStyle from "@/components/featured/FeaturedVillaStyle";
import BankerPortrait from "@/components/banker/BankerPortrait";
import Distinctions from "@/components/distinctions/Distinctions";
import CtaFinal from "@/components/cta/CtaFinal";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroCinematic />
        <MarqueeBand text="NovaBanque — Banque privée du Léman — Genève — 1987" />
        <ManifestoSplit />
        <StatsBand />
        <InventaireHorizontal />
        <FeaturedVillaStyle />
        <BankerPortrait />
        <MarqueeBand
          text="Discrétion — Indépendance — Long terme"
          italic
          dark
          speed={80}
        />
        <Distinctions />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
