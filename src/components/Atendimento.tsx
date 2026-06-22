import Image from "next/image";

const publico = {
  titulo: "Adolescentes e adultos",
  descricao:
    "Acompanhamento para demandas como ansiedade, depressão, estresse, transições de vida, relacionamentos, identidade, autoestima e desenvolvimento pessoal.",
};

const modalidades = [
  {
    titulo: "Presencial",
    descricao: "Atendimento em consultório em Santa Maria, RS.",
  },
  {
    titulo: "Online",
    descricao:
      "São realizadas através de vídeo chamada, por plataforma segura.",
  },
];

export default function Atendimento() {
  return (
    <section id="atendimento" className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy">
            Atendimento
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-navy rounded-2xl p-8">
            <h3 className="font-serif text-2xl text-white mb-3">{publico.titulo}</h3>
            <p className="font-sans text-blue-200 leading-relaxed">{publico.descricao}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative h-[460px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/foto-2.jpg"
              alt="Sthefano Goes em atendimento psicológico"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy">
              Modalidades
            </p>
            {modalidades.map((m) => (
              <div key={m.titulo} className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-navy mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-2xl text-stone mb-2">{m.titulo}</h4>
                  <p className="font-sans text-muted text-base leading-relaxed">
                    {m.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
