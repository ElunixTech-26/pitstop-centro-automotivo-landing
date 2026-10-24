"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, track } from "../../lib/analytics";

// Carrega o GA4 e rastreia automaticamente qualquer link de WhatsApp ou telefone do site.
// "local" vem do data-track do link (ex: "hero", "botao_flutuante").
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const local =
        link.dataset.track ??
        link.closest("section[id]")?.id ??
        link.closest("header, footer, section")?.tagName.toLowerCase() ??
        "pagina";

      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("clique_whatsapp", { local });
      } else if (href.startsWith("tel:")) {
        track("clique_telefone", { local });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Só carrega em produção, pra testes locais não sujarem os relatórios
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
