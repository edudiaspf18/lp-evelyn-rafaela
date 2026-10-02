import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";

import { CookieConsent } from "@/components/CookieConsent";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { TrackingScripts } from "@/components/TrackingScripts";
import { CLINIC } from "@/data/content";
import { INSTAGRAM_URL, SITE_URL, WHATSAPP_NUMBER } from "@/lib/env";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    <html lang="pt-BR" className={`${cormorant.variable} ${lato.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {children}
        <FloatingWhatsApp />
        <CookieConsent />
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
