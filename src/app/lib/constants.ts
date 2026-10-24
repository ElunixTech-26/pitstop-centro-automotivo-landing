export const SITE_CONFIG = {
  name: "Pit Stop Centro Automotivo",
  shortName: "PIT STOP",
  description:
    "Suspensão, freios, motor e alinhamento em Canoas. Atendimento especializado para veículos nacionais e importados.",
  location: "Canoas, RS",
  address: "Av. Getúlio Vargas, 6600, Centro, Canoas/RS, 92010-011",
  since: "Desde 1983",
  phone: "(51) 9828-8971",
  whatsappNumber: "+555198288971",
  whatsappMessage: "Olá, vim pelo site! Gostaria de agendar um serviço.",
  email: "pitstopcentroautomotivocanoas@gmail.com",
  hours: "Seg–Sex 8h às 18h · Sáb 8h às 13h",
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
  SITE_CONFIG.whatsappMessage
)}`;
