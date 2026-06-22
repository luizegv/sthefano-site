export default function Abordagem() {
  return (
    <section id="abordagem" className="py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Coluna esquerda: rótulo + título + intro */}
          <div>
            <p className="font-serif text-sm tracking-[0.2em] uppercase text-blue-200 mb-4">
              Abordagem
            </p>
            <h2 className="font-serif font-semibold text-4xl md:text-5xl leading-tight mb-8">
              Terapia Cognitivo-Comportamental (TCC)
            </h2>
            <p className="font-sans text-blue-100 leading-relaxed">
              A TCC é uma abordagem da psicoterapia que investiga a relação entre pensamentos, emoções e comportamentos, com foco na compreensão e transformação de padrões que geram sofrimento.
            </p>
          </div>

          {/* Coluna direita: dois itens com divisor */}
          <div className="divide-y divide-white/10">
            <div className="pb-10">
              <h3 className="font-serif text-2xl mb-3">
                Abordagem colaborativa
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                O processo terapêutico é construído de forma conjunta entre terapeuta e paciente, com participação ativa de ambos na compreensão das demandas e na construção de estratégias.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="font-serif text-2xl mb-3">
                Desenvolvimento de autonomia
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                O objetivo é promover maior autonomia, ajudando o paciente a desenvolver habilidades para lidar com suas dificuldades de forma mais consciente, flexível e funcional no dia a dia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
