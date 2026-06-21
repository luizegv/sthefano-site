import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Abordagem from "@/components/Abordagem";
import ComoFunciona from "@/components/ComoFunciona";
import Atendimento from "@/components/Atendimento";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Abordagem />
      <ComoFunciona />
      <Atendimento />
      <Contato />
      <Footer />
    </main>
  );
}
