import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pitstopcanoas.com.br"),
  title: {
    default: "Pit Stop Centro Automotivo em Canoas",
    template: "%s | Pit Stop Centro Automotivo Canoas"
  },
  description: "Centro automotivo em Canoas/RS desde 1983. Mecânica geral, freios, suspensão, alinhamento, elétrica e troca de pneus para nacionais e importados. Orçamento sem compromisso pelo WhatsApp.",
  keywords: [
    "centro automotivo canoas",
    "oficina mecânica canoas",
    "alinhamento e balanceamento canoas",
    "troca de pneus canoas",
    "freios canoas",
    "suspensão canoas",
    "mecânica importados canoas",
    "auto center canoas rs"
  ],
  authors: [{ name: "Pit Stop Centro Automotivo" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pitstopcanoas.com.br",
    siteName: "Pit Stop Centro Automotivo",
    title: "Pit Stop Centro Automotivo em Canoas — Desde 1983",
    description: "Mecânica, freios, suspensão, alinhamento e pneus em Canoas/RS. Orçamento transparente, peças de confiança, atendimento humano.",
    images: [
      {
        url: "/graph-image.png",
        width: 1200,
        height: 630,
        alt: "Pit Stop Centro Automotivo Canoas"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pit Stop Centro Automotivo em Canoas",
    description: "Mecânica, freios, suspensão e pneus em Canoas desde 1983.",
    images: ["/graph-image.png"]
  },
  alternates: {
    canonical: "https://pitstopcanoas.com.br"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  },
    verification: {
    google: 'i6lqgXfI-yn1EEXf7ez2DpZtEHO34BKidZ0drddqGlo', 
  },
  manifest: "/manifest.json",
  icons: { icon: "/favicon.ico", apple: "/apple-icon.png" }
};


export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://pitstopcanoas.com.br/#business",
  "name": "Pit Stop Centro Automotivo",
  "image": "https://pitstopcanoas.com.br/graph-image.png",
  "url": "https://pitstopcanoas.com.br",
  "telephone": "+5551998087707",
  "email": "pitstopcentroautomotivocanoas@gmail.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Getúlio Vargas, 6600",
    "addressLocality": "Canoas",
    "addressRegion": "RS",
    "postalCode": "92010-011",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -29.9069015,
    "longitude": -51.1773291
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/pitstopcarservice",
    "https://www.google.com/maps/place/?q=place_id:ChIJNdJMNgBwGZURqlYhCGkHsAg"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "32"
  },
  "areaServed": [
    { "@type": "City", "name": "Canoas" },
    { "@type": "City", "name": "Esteio" },
    { "@type": "City", "name": "Cachoeirinha" },
    { "@type": "City", "name": "Sapucaia do Sul" },
    { "@type": "City", "name": "Porto Alegre" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços Automotivos",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mecânica de Suspensão" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sistema de Freios" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conserto de Pneus Cortados" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Troca de Correias" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alinhamento e Balanceamento" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elétrica Automotiva" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pintura Automotiva" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chapeação e Funilaria" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Troca de Pneus e Rodas" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revisão Preventiva" } }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}>
      <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
