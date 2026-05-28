import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import MarqueeBand from "@/components/marquee/MarqueeBand";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";
import StatsBand from "@/components/stats/StatsBand";
import InventaireHorizontal from "@/components/inventaire/InventaireHorizontal";
import GiantTextSequence from "@/components/giant-text/GiantTextSequence";
import PropertiesHorizontal from "@/components/properties/PropertiesHorizontal";
import FeaturedVillaStyle from "@/components/featured/FeaturedVillaStyle";
import BankerPortrait from "@/components/banker/BankerPortrait";
import Distinctions from "@/components/distinctions/Distinctions";
import CtaFinal from "@/components/cta/CtaFinal";
import Footer from "@/components/footer/Footer";
import WaveDivider from "@/components/dividers/WaveDivider";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroCinematic />
        <MarqueeBand text="DRIFT — Crafted in Lisbon — Limited drops — Tannage végétal — Goodyear welt — Horween leather" />
        <ManifestoSplit />
        <StatsBand />
        <InventaireHorizontal />
        <WaveDivider from="ivoire" to="charcoal" height={140} />
        <GiantTextSequence
          phrases={["Crafted.", "Limited.", "Walk your way."]}
        />
        <PropertiesHorizontal />
        <WaveDivider from="charcoal" to="ivoire" height={140} flip />
        <FeaturedVillaStyle />
        <BankerPortrait />
        <MarqueeBand
          text="STAY ON THE LIST — NEXT DROP COMING — 300 PAIRS — NO PREORDER"
          dark
          speed={70}
        />
        <Distinctions />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
