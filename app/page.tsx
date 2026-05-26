import Nav from "@/components/nav/Nav";
import HeroCinematic from "@/components/hero/HeroCinematic";
import ManifestoSplit from "@/components/manifesto/ManifestoSplit";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <HeroCinematic />
        <ManifestoSplit />
      </main>
    </>
  );
}
