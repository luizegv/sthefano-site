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
              A TCC volta-se à compreensão de si e ao desenvolvimento de habilidades. Parte do princípio de que não são os acontecimentos em si, mas o significado que atribuímos a eles, que molda o que sentimos e a maneira como agimos.
            </p>
          </div>

          {/* Coluna direita: dois itens com divisor */}
          <div className="divide-y divide-white/10">
            <div className="pb-10">
              <h3 className="font-serif text-2xl mb-3">
                Ferramentas práticas para lidar com desafios
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Pensamentos, emoções e comportamentos encontram-se intimamente ligados — transformar um desses pontos repercute sobre os demais. Ao longo do percurso terapêutico, reconhecemos os padrões que sustentam o sofrimento e cultivamos recursos concretos para enfrentar as dificuldades do cotidiano.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="font-serif text-2xl mb-3">
                Foco em objetivos e autonomia
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Psicólogo e paciente atuam em conjunto para flexibilizar crenças rígidas e construir uma perspectiva realista e funcional de si, do mundo e das relações. O propósito é ampliar a liberdade de escolher e de viver em coerência com os próprios valores.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
