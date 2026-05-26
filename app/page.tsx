import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";
import Inventaire from "@/components/inventaire/Inventaire";
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
        <ManifestoSplit />
        <Inventaire />
        <FeaturedVillaStyle />
        <BankerPortrait />
        <Distinctions />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
