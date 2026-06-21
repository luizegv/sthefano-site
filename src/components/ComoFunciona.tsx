const etapas = [
  {
    numero: "01",
    titulo: "Primeiro contato",
    descricao:
      "Você entra em contato pelo WhatsApp. Agendamos uma conversa para conhecer sua demanda e tirar dúvidas sobre o processo.",
  },
  {
    numero: "02",
    titulo: "Sessão de avaliação",
    descricao:
      "Na primeira sessão, mapeamos juntos sua história e objetivos. Não há respostas certas — apenas um espaço de escuta sem julgamentos.",
  },
  {
    numero: "03",
    titulo: "Processo terapêutico",
    descricao:
      "Trabalhamos de forma colaborativa e estruturada, com técnicas baseadas em evidências adaptadas à sua realidade e ao seu ritmo.",
  },
  {
    numero: "04",
    titulo: "Autonomia e valores",
    descricao:
      "O objetivo final é que você desenvolva ferramentas próprias para viver com mais liberdade, alinhado aos seus valores.",
  },
];

export default function ComoFunciona() {
  return (
    <section className="py-24 bg-beige">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy mb-4">
            Processo
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone">
            Como funciona
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {etapas.map((e, i) => (
            <div key={e.numero} className="relative">
              {i < etapas.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-navy/20 -translate-x-5" />
              )}
              <p className="font-serif text-7xl text-navy/15 font-bold leading-none mb-4">
                {e.numero}
              </p>
              <h3 className="font-serif text-xl text-stone mb-3">{e.titulo}</h3>
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
