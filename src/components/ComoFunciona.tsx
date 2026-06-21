const etapas = [
  {
    numero: "01",
    titulo: "Primeiro contato",
    descricao:
      "Entre em contato pelo WhatsApp. Identificamos juntos o que você busca e esclarecemos qualquer dúvida sobre o processo terapêutico.",
  },
  {
    numero: "02",
    titulo: "Sessão de avaliação",
    descricao:
      "Na primeira sessão, construímos um espaço de escuta genuíno. Mapeamos sua história, seus objetivos e o que você espera da terapia.",
  },
  {
    numero: "03",
    titulo: "Processo terapêutico",
    descricao:
      "Com base em evidências científicas, trabalhamos de forma colaborativa — desenvolvendo ferramentas práticas e personalizadas para sua realidade.",
  },
  {
    numero: "04",
    titulo: "Autonomia e valores",
    descricao:
      "O objetivo central é que você desenvolva recursos próprios para viver com mais liberdade e alinhamento com o que verdadeiramente importa.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-navy mb-4">
            Processo
          </p>
          <h2 className="font-serif font-semibold text-4xl md:text-5xl text-stone">
            Como funciona
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {etapas.map((e) => (
            <div key={e.numero}>
              <p className="font-serif text-7xl text-navy/15 font-bold leading-none mb-4">
                {e.numero}
              </p>
              <h3 className="font-serif font-semibold text-xl text-stone mb-3">
                {e.titulo}
              </h3>
              <p className="font-sans text-muted leading-relaxed text-sm">
                {e.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
