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
              A TCC investe na compreensão de si e na construção de novas habilidades. Seu ponto de partida é que aquilo que vivemos não nos afeta de forma direta — é a maneira como interpretamos cada experiência, a partir das nossas crenças, que define o que sentimos e como respondemos.
            </p>
          </div>

          {/* Coluna direita: dois itens com divisor */}
          <div className="divide-y divide-white/10">
            <div className="pb-10">
              <h3 className="font-serif text-2xl mb-3">
                Um trabalho colaborativo
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Ao longo da terapia, examinamos juntos os padrões de pensamento e de comportamento que se repetem e muitas vezes passam despercebidos. Dessa observação nascem caminhos concretos para enfrentar as demandas do cotidiano de outro modo.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="font-serif text-2xl mb-3">
                Flexibilidade e autonomia
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                O objetivo não é suprimir as dificuldades, mas ampliar os recursos para atravessá-las. Com mais flexibilidade diante de si mesmo, abre-se espaço para escolher e conduzir a própria vida em direção ao que realmente importa.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
