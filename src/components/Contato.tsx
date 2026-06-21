const WA_URL =
  "https://wa.me/5555984545361?text=Ol%C3%A1%2C%20Sthefano!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Contato() {
  return (
    <section id="contato" className="py-24 bg-beige">
      <div className="max-w-2xl mx-auto px-6 text-center space-y-8">
        <p className="font-serif text-sm tracking-[0.2em] uppercase text-navy">
          Contato
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone leading-tight">
          Pronto para dar<br />o primeiro passo?
        </h2>
        <p className="font-sans text-muted leading-relaxed">
          Entre em contato pelo WhatsApp para agendar sua consulta ou tirar
          dúvidas. O primeiro contato não tem custo e pode ser feito a qualquer
          momento.
        </p>
        <div className="pt-2">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-white px-10 py-5 rounded-full font-sans font-medium hover:bg-navy-dark transition-colors text-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
        <div className="pt-8 border-t border-stone/10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-muted">
          <a
            href="https://instagram.com/psi.sthefano"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy transition-colors"
          >
            @psi.sthefano
          </a>
          <span className="hidden sm:inline text-stone/20">|</span>
          <span>Santa Maria, RS</span>
          <span className="hidden sm:inline text-stone/20">|</span>
          <span>Presencial e Online</span>
        </div>
      </div>
    </section>
  );
}
