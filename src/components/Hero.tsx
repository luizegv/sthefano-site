import Image from "next/image";

const WA_URL =
  "https://wa.me/5555984545361?text=Ol%C3%A1%2C%20Sthefano!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Hero() {
  return (
    <section className="min-h-screen bg-beige flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8 order-2 md:order-1">
          <p className="text-navy font-serif text-sm tracking-[0.2em] uppercase">
            Psicólogo · CRP 07/44940
          </p>
          <h1 className="font-serif text-5xl md:text-6xl leading-tight text-stone">
            Psicólogo em<br />
            <span className="text-navy">Santa Maria</span>, RS
          </h1>
          <p className="text-2xl font-serif italic text-stone/80 leading-relaxed">
            "Mais autonomia para viver de acordo com seus valores."
          </p>
          <p className="font-sans text-muted leading-relaxed">
            Atendimento presencial em Santa Maria/RS e online para adolescentes
            e adultos, com base na Terapia Cognitivo-Comportamental.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-8 py-4 rounded-full font-sans font-medium hover:bg-navy-dark transition-colors text-center"
            >
              Agendar pelo WhatsApp
            </a>
            <a
              href="#sobre"
              className="border border-navy/40 text-navy px-8 py-4 rounded-full font-sans font-medium hover:border-navy hover:bg-navy hover:text-white transition-all text-center"
            >
              Saiba mais
            </a>
          </div>
        </div>

        <div className="relative order-1 md:order-2">
          <div className="relative h-[520px] md:h-[620px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/foto-3.jpg"
              alt="Sthefano Goes — psicólogo em Santa Maria RS"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg px-6 py-4">
            <p className="font-serif text-navy text-xl font-semibold">TCC</p>
            <p className="font-sans text-muted text-xs mt-0.5">
              Terapia Cognitivo-Comportamental
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
