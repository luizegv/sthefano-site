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
              A Terapia Cognitivo-Comportamental é uma psicoterapia estruturada e respaldada por evidências científicas. Parte do princípio de que não são os acontecimentos em si, mas o significado que atribuímos a eles, que molda o que sentimos e a forma como agimos.
            </p>
          </div>

          {/* Coluna direita: dois itens com divisor */}
          <div className="divide-y divide-white/10">
            <div className="pb-10">
              <h3 className="font-serif text-2xl mb-3">
                Ferramentas práticas para o dia a dia
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Pensamentos, emoções e comportamentos encontram-se profundamente conectados — transformar um deles repercute sobre os demais. Ao longo do percurso terapêutico, reconhecemos os padrões que sustentam o sofrimento e cultivamos recursos concretos para enfrentar as dificuldades com firmeza e serenidade.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="font-serif text-2xl mb-3">
                Novas perspectivas e autonomia
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Psicólogo e paciente caminham lado a lado para flexibilizar crenças rígidas e construir uma visão realista e funcional de si, do outro e do mundo. O propósito é fortalecer a liberdade de escolher e de viver em coerência com os próprios valores.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
