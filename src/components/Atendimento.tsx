import Image from "next/image";

const publicos = [
  {
    titulo: "Adolescentes",
    descricao:
      "Suporte especializado nas questões da adolescência: identidade, relacionamentos, desempenho escolar, ansiedade e autoestima.",
  },
  {
    titulo: "Adultos",
    descricao:
      "Acompanhamento para demandas como ansiedade, depressão, estresse, transições de vida, relacionamentos e desenvolvimento pessoal.",
  },
];

const modalidades = [
  {
    titulo: "Presencial",
    descricao: "Atendimento em consultório em Santa Maria, RS.",
  },
  {
    titulo: "Online",
    descricao:
      "Sessões por videoconferência para todo o Brasil, com a mesma qualidade e cuidado do atendimento presencial.",
  },
];

export default function Atendimento() {
  return (
    <section id="atendimento" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy mb-4">
            Atendimento
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone">
            Para quem é
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {publicos.map((p) => (
            <div key={p.titulo} className="bg-beige rounded-2xl p-8">
              <h3 className="font-serif text-2xl text-navy mb-3">{p.titulo}</h3>
              <p className="font-sans text-muted leading-relaxed">{p.descricao}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy">
              Modalidades
            </p>
            {modalidades.map((m) => (
              <div key={m.titulo} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-navy mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-lg text-stone mb-1">{m.titulo}</h4>
                  <p className="font-sans text-muted text-sm leading-relaxed">
                    {m.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/foto-2.jpg"
              alt="Sthefano Goes em atendimento psicológico"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="bg-navy rounded-2xl p-8 text-white h-full flex flex-col justify-center">
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-blue-200 mb-4">
              Contexto esportivo
            </p>
            <h3 className="font-serif text-2xl mb-4">
              Psicologia no esporte
            </h3>
            <p className="font-sans text-blue-100 leading-relaxed text-sm">
              Além da clínica, atuo como psicólogo junto a uma equipe
              universitária de voleibol, apoiando o bem-estar, foco e
              desenvolvimento de atletas através de princípios da psicologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
