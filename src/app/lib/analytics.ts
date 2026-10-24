// ID do Google Analytics 4 do Pit Stop (conta da Elunix)
export const GA_ID = "G-G4K5686841";

type EventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Envia um evento pro GA4. Se a tag não carregou (dev, bloqueador), não faz nada.
export function track(event: string, params: EventParams = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
