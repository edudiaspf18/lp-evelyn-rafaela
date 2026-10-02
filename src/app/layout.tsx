import type { Metadata, Viewport } from "next";
import { Fraunces, Jost } from "next/font/google";

import { CookieConsent } from "@/components/CookieConsent";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TrackingScripts } from "@/components/TrackingScripts";
import { CLINIC } from "@/data/content";
import { INSTAGRAM_URL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/env";
import "./globals.css";

// Fraunces: serifa "soft" com eixo óptico, calorosa e humana. Jost: sans geométrica fina, parente do wordmark da logo.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const DESCRIPTION =
  "A Nutrição é mais que estética, é poder viver de novo! Agende sua consulta com a nutricionista Evelyn Rafaela em Anápolis-GO e transforme sua relação com a comida.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Evelyn Rafaela | Nutricionista em Anápolis-GO",
    template: "%s | Evelyn Rafaela",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Evelyn Rafaela - Nutricionista",
    description: "Atendimento nutricional personalizado. Agende sua consulta.",
    url: SITE_URL,
    siteName: "Evelyn Rafaela Nutrição",
    images: [
      {
        url: "/images/og-image-evelyn.jpg",
        width: 1200,
        height: 630,
        alt: "Evelyn Rafaela, nutricionista",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Evelyn Rafaela Nutricionista",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image-evelyn.jpg`,
  description: DESCRIPTION,
  telephone: `+${WHATSAPP_NUMBER}`,
  sameAs: [INSTAGRAM_URL],
  founder: { "@type": "Person", name: "Evelyn Rafaela", jobTitle: "Nutricionista" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. João Florentino, Quadra 09, Lote 20, Residencial Portal do Cerrado",
    addressLocality: "Anápolis",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  location: { "@type": "Place", name: CLINIC.name },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${jost.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/* Banner antes do conteúdo no DOM: teclado/leitor de tela chegam nele primeiro (visual é fixed) */}
        <CookieConsent />
        {children}
        <FloatingWhatsApp />
        <TrackingScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
