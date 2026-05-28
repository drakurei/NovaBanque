import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import SacredGeometry from "@/components/sacred/SacredGeometry";
import BentoDark from "@/components/bento-dark/BentoDark";
import FooterMassive from "@/components/footer-massive/FooterMassive";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroCinematic />
        <SacredGeometry />
        <BentoDark />
      </main>
      <FooterMassive />
    </>
  );
}
