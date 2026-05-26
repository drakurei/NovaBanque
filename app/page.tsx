import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";
import Inventaire from "@/components/inventaire/Inventaire";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroCinematic />
        <ManifestoSplit />
        <Inventaire />
      </main>
    </>
  );
}
