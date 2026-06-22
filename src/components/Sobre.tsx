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
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-stone leading-tight">
            Sthefano Ledesma<br />Carissimi de Goes
          </h2>
          <p className="font-sans text-muted leading-relaxed">
            Sou psicólogo, formado pela Universidade Franciscana (UFN), e atualmente realizo pós-graduação em Terapia Cognitivo-Comportamental pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS). Minha atuação é fundamentada em uma abordagem baseada em evidências científicas, reconhecida por sua eficácia no tratamento de diferentes demandas emocionais e comportamentais.
          </p>
          <p className="font-sans text-muted leading-relaxed">
            Acredito que a psicoterapia deve ser um processo colaborativo, acolhedor e voltado para mudanças significativas na vida das pessoas. Meu trabalho se fundamenta em auxiliar cada paciente a compreender seus padrões de pensamento, emoções e comportamentos, desenvolvendo estratégias práticas para enfrentar desafios, fortalecer recursos pessoais e construir uma vida mais alinhada aos seus objetivos e valores.
          </p>
          <p className="font-sans text-muted leading-relaxed">
            Além da atuação clínica, possuo experiência como psicólogo no contexto esportivo, com trabalhos desenvolvidos em equipes de futebol e voleibol, voltados ao desenvolvimento de recursos psicológicos relacionados à performance esportiva.
          </p>
        </div>
      </div>
    </section>
  );
}
