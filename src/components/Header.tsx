"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

const WA_URL =
  "https://wa.me/5555984545361?text=Ol%C3%A1%2C%20Sthefano!%20Gostaria%20de%20agendar%20uma%20consulta.";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-stone hover:text-navy"
    : "text-white/90 hover:text-white";

  const btnClass = scrolled
    ? "bg-navy text-white hover:bg-navy-dark"
    : "border border-white/50 text-white hover:bg-white/10";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="Início">
          <Image
            src="/images/logo.png"
            alt="Sthefano Goes Psicólogo"
            width={120}
            height={48}
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-sans font-medium transition-colors ${linkClass}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full text-sm font-sans font-medium transition-colors ${btnClass}`}
          >
            Agendar
          </a>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              scrolled ? "bg-navy" : "bg-white"
            } ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-beige px-6 py-6 space-y-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-stone font-sans font-medium hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-navy text-white px-5 py-3 rounded-full text-center font-sans font-medium hover:bg-navy-dark transition-colors"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
