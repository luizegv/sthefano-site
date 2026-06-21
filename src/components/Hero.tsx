import Image from "next/image";

const WA_URL =
  "https://wa.me/5555984545361?text=Ol%C3%A1%2C%20Sthefano!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Hero() {
  return (
    <section className="bg-navy text-white min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Texto — esquerda */}
      <div className="flex flex-col justify-center px-8 md:pl-16 lg:pl-28 pr-8 py-24 pt-32 md:pt-0 md:w-[52%] lg:w-[48%] flex-shrink-0">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-blue-200 mb-6">
          Psicólogo · CRP 07/44940
        </p>
        <h1 className="font-serif font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
          Psicólogo em<br />
          Santa Maria, RS
        </h1>
        <p className="font-serif italic text-2xl md:text-3xl text-blue-100 leading-relaxed mb-6">
          "Mais autonomia para viver<br className="hidden md:block" /> de acordo com seus valores."
        </p>
        <p className="font-sans text-blue-200 leading-relaxed mb-10 max-w-sm">
          Atendimento presencial em Santa Maria/RS e online para adolescentes e
          adultos, com base na Terapia Cognitivo-Comportamental.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-navy px-8 py-4 rounded-full font-sans font-medium hover:bg-blue-50 transition-colors text-center"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="#sobre"
            className="border border-white/30 text-white px-8 py-4 rounded-full font-sans font-medium hover:border-white/60 transition-colors text-center"
          >
            Saiba mais
          </a>
        </div>
      </div>

      {/* Foto — direita, full-bleed */}
      <div className="relative h-72 md:h-auto md:flex-1">
        <Image
          src="/images/foto-1.jpg"
          alt="Sthefano Goes — psicólogo em Santa Maria RS"
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 768px) 100vw, 52vw"
        />
        {/* gradiente de fusão com o fundo navy */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-navy to-transparent" />
      </div>
    </section>
  );
}
