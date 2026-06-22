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
              A TCC parte de uma ideia simples: não são os acontecimentos que nos definem, mas o modo como os interpretamos. É sobre esse olhar — e sobre as habilidades para conduzir a própria vida — que o processo se constrói.
            </p>
          </div>

          {/* Coluna direita: dois itens com divisor */}
          <div className="divide-y divide-white/10">
            <div className="pb-10">
              <h3 className="font-serif text-2xl mb-3">
                Um trabalho colaborativo
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Juntos, reconhecemos os padrões de pensamento e comportamento que se repetem e abrimos caminhos novos para lidar com o cotidiano.
              </p>
            </div>
            <div className="pt-10">
              <h3 className="font-serif text-2xl mb-3">
                Flexibilidade e autonomia
              </h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                Mais do que eliminar dificuldades, a terapia amplia seus recursos para enfrentá-las — com liberdade para escolher o que realmente importa.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
