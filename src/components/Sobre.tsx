import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative h-[540px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/foto-4.jpg"
              alt="Sthefano Goes — formação em psicologia"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy">
            Sobre mim
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone leading-tight">
            Sthefano Ledesma<br />Carissimi de Goes
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            Sou psicólogo formado e pós-graduando em Terapia
            Cognitivo-Comportamental pela PUCRS — uma das abordagens com maior
            evidência científica na psicologia clínica atual.
          </p>
          <p className="font-sans text-muted leading-relaxed">
            Acredito que o processo terapêutico deve ser colaborativo, prático e
            orientado para mudanças reais. Meu trabalho é ajudar você a
            compreender seus padrões de pensamento e comportamento, e a construir
            ferramentas concretas para lidar com os desafios do cotidiano.
          </p>
          <p className="font-sans text-muted leading-relaxed">
            Além da clínica, atuo no contexto esportivo junto a uma equipe
            universitária de voleibol, onde aplico princípios da psicologia para
            apoiar o desenvolvimento e bem-estar de atletas.
          </p>
          <div className="pt-6 border-t border-beige space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block" />
              <p className="font-sans text-sm text-muted">
                Psicólogo —{" "}
                <span className="text-navy font-medium">CRP 07/44940</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block" />
              <p className="font-sans text-sm text-muted">
                Pós-graduação em TCC —{" "}
                <span className="text-navy font-medium">PUCRS</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-navy inline-block" />
              <p className="font-sans text-sm text-muted">
                Santa Maria, RS — Presencial e Online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
