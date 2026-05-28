import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import SacredGeometry from "@/components/sacred/SacredGeometry";
import HorizontalPanels from "@/components/horizontal-panels/HorizontalPanels";
import BentoDark from "@/components/bento-dark/BentoDark";
import GiantTextSequence from "@/components/giant-text/GiantTextSequence";
import FooterMassive from "@/components/footer-massive/FooterMassive";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroCinematic />
        <SacredGeometry />
        <HorizontalPanels />
        <BentoDark />
        <GiantTextSequence
          phrases={["Discrétion.", "Indépendance.", "Long terme."]}
          dark
        />
      </main>
      <FooterMassive />
    </>
  );
}
