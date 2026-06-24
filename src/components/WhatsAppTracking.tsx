"use client";

import { useEffect } from "react";

// Dispara um evento de conversão no GA4 sempre que um link de WhatsApp é clicado,
// em qualquer ponto do site. Usa delegação de evento para não precisar tocar em
// cada botão individualmente.
export default function WhatsAppTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const isWhatsApp =
        href.includes("wa.me") || href.includes("api.whatsapp.com");
      if (!isWhatsApp) return;

      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
      };
      if (typeof w.gtag === "function") {
        w.gtag("event", "whatsapp_click", {
          link_url: href,
          link_text: (anchor.textContent || "").trim().slice(0, 80),
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
