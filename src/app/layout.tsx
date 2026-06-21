import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sthefanogoes.com.br"),
  title: "Sthefano Goes | Psicólogo em Santa Maria RS",
  description:
    "Psicólogo em Santa Maria/RS especializado em Terapia Cognitivo-Comportamental (TCC). Atendimento presencial e online para adolescentes e adultos. CRP 07/44940.",
  keywords: [
    "psicólogo Santa Maria RS",
    "TCC Santa Maria",
    "terapia cognitivo comportamental Santa Maria",
    "psicólogo online Santa Maria",
    "psicólogo adolescentes Santa Maria RS",
    "Sthefano Goes psicólogo",
  ],
  openGraph: {
    title: "Sthefano Goes | Psicólogo em Santa Maria RS",
    description:
      "Mais autonomia para viver de acordo com seus valores. Terapia Cognitivo-Comportamental presencial e online.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/foto-3.jpg", width: 1200, height: 630, alt: "Sthefano Goes - Psicólogo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sthefano Goes | Psicólogo em Santa Maria RS",
    description: "Mais autonomia para viver de acordo com seus valores.",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Sthefano Ledesma Carissimi de Goes",
      jobTitle: "Psicólogo",
      description:
        "Psicólogo CRP 07/44940 especializado em Terapia Cognitivo-Comportamental em Santa Maria/RS",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Maria",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      telephone: "+5555984545361",
      sameAs: ["https://www.instagram.com/psi.sthefano"],
      knowsAbout: [
        "Terapia Cognitivo-Comportamental",
        "Psicologia Clínica",
        "Psicologia do Esporte",
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "Sthefano Goes — Psicólogo",
      description:
        "Atendimento psicológico presencial e online em Terapia Cognitivo-Comportamental",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santa Maria",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      telephone: "+5555984545361",
      priceRange: "$$",
      areaServed: ["Santa Maria", "Rio Grande do Sul", "Brasil"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
