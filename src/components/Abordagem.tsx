const pilares = [
  {
    numero: "01",
    titulo: "Pensamentos",
    descricao:
      "Identificamos padrões de pensamento automáticos que influenciam como você sente e age — muitas vezes sem que você perceba.",
  },
  {
    numero: "02",
    titulo: "Emoções",
    descricao:
      "Aprendemos a reconhecer e nomear emoções com precisão, desenvolvendo estratégias saudáveis de regulação emocional.",
  },
  {
    numero: "03",
    titulo: "Comportamentos",
    descricao:
      "Trabalhamos mudanças graduais e sustentáveis no comportamento, alinhadas aos seus valores e objetivos de vida.",
  },
];

export default function Abordagem() {
  return (
    <section id="abordagem" className="py-24 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-blue-200 mb-4">
            Abordagem
          </p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Terapia Cognitivo-<br />Comportamental
          </h2>
          <p className="font-sans text-blue-100 leading-relaxed">
            A TCC é uma das abordagens psicológicas com maior base científica.
            Ela parte do princípio de que pensamentos, emoções e comportamentos
            estão interligados — e que é possível transformar esse ciclo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((p) => (
            <div
              key={p.titulo}
              className="bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <p className="font-serif text-5xl text-white/20 font-bold leading-none mb-6">
                {p.numero}
              </p>
              <h3 className="font-serif text-2xl mb-3">{p.titulo}</h3>
              <p className="font-sans text-blue-100 leading-relaxed text-sm">
                {p.descricao}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-16 text-center">
          <p className="font-serif text-xl italic text-blue-100 max-w-2xl mx-auto">
            "A TCC não é apenas uma técnica — é uma forma de aprender a se
            relacionar com você mesmo de forma mais compassiva e eficaz."
          </p>
        </div>
      </div>
    </section>
  );
}
