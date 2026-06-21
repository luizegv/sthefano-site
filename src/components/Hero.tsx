import Image from "next/image";

const WA_URL =
  "https://wa.me/5555984545361?text=Ol%C3%A1%2C%20Sthefano!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Hero() {
  return (
    <section className="bg-navy text-white min-h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-screen">

        {/* Coluna de texto — ocupa a tela inteira no mobile (foto fica atrás) */}
        <div className="relative flex flex-col justify-end md:justify-center
                        px-8 md:pl-16 lg:pl-28 pr-8
                        pb-14 pt-0 md:py-24
                        w-full md:w-[52%] lg:w-[48%] md:flex-shrink-0
                        min-h-screen md:min-h-0">

          {/* Foto como fundo no mobile */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/images/foto-1.jpg"
              alt="Sthefano Goes — psicólogo em Santa Maria RS"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
            {/* Gradiente: transparente no topo → navy sólido na base */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/20" />
          </div>

          {/* Texto */}
          <div className="relative z-10 space-y-6 max-w-lg">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-blue-200">
              Psicólogo · CRP 07/44940
            </p>
            <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
              Psicólogo em Santa Maria/RS<br />
              <span className="text-blue-200">Atendimento Online para Todo o Brasil</span>
            </h1>
            <p className="font-serif italic text-2xl text-blue-100 leading-relaxed">
              Mais autonomia para viver de acordo com seus valores.
            </p>
            <p className="font-sans text-blue-200 leading-relaxed">
              Atendimento presencial em Santa Maria/RS e online para adolescentes
              e adultos, com base na Terapia Cognitivo-Comportamental.
            </p>
            <div className="flex flex-col gap-4 pt-2 max-w-xs">
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
              <a
                href="https://instagram.com/psi.sthefano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @psi.sthefano"
                className="flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-4 rounded-full font-sans font-medium hover:border-white/60 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                psi.sthefano
              </a>
            </div>
          </div>
        </div>

        {/* Foto lateral — apenas desktop */}
        <div className="hidden md:block relative flex-1">
          <Image
            src="/images/foto-1.jpg"
            alt="Sthefano Goes — psicólogo em Santa Maria RS"
            fill
            className="object-cover object-top"
            priority
            sizes="52vw"
          />
          {/* Gradiente de fusão com o fundo navy */}
          <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-navy to-transparent" />
        </div>

      </div>
    </section>
  );
}
