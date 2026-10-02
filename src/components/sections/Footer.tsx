import Image from "next/image";
import Link from "next/link";
import { AtSign, Clock, MapPin, MessageCircle } from "lucide-react";

import { CLINIC } from "@/data/content";
import { INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/env";
import { generateWhatsAppLink } from "@/lib/utils";

const LINK_CLASSES =
  "inline-flex items-center gap-2 transition-all duration-200 hover:text-gold focus-visible:ring-2 focus-visible:ring-ring";

// (62) 9 9381-8529 a partir do número com DDI
function formatPhone(number: string): string {
  const match = number.match(/^55(\d{2})(\d)(\d{4})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}` : number;
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-5">
          <Image
            src="/images/monograma-claro.png"
            alt="Monograma ER de Evelyn Rafaela"
            width={299}
            height={260}
            className="h-16 w-auto"
          />
          <p className="mt-6 font-heading text-2xl tracking-[0.28em] uppercase">Evelyn Rafaela</p>
          <p className="mt-1 text-xs tracking-[0.4em] text-gold uppercase">Nutricionista</p>
          <p className="mt-6 max-w-sm font-heading text-xl text-primary-foreground/80 italic">
            A Nutrição é mais que estética, é poder viver de novo!
          </p>
        </div>

        <div className="space-y-4 text-sm md:col-span-3 md:col-start-7">
          <h2 className="font-sans text-xs font-bold tracking-[0.28em] text-gold uppercase">Contato</h2>
          <a
            href={generateWhatsAppLink(WHATSAPP_NUMBER, "Olá Evelyn, vim pelo seu site.")}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK_CLASSES}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {formatPhone(WHATSAPP_NUMBER)}
          </a>
          <br />
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={LINK_CLASSES}>
            <AtSign className="size-4" aria-hidden="true" />
            evelynrafaelanutrii
          </a>
        </div>

        <div className="space-y-4 text-sm md:col-span-3">
          <h2 className="font-sans text-xs font-bold tracking-[0.28em] text-gold uppercase">Atendimento</h2>
          <address className="flex gap-2 not-italic">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              {CLINIC.name}
              {CLINIC.addressLines.map((line) => (
                <span key={line} className="block text-primary-foreground/80">
                  {line}
                </span>
              ))}
            </span>
          </address>
          <p className="flex gap-2 text-primary-foreground/80">
            <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {CLINIC.hours}
          </p>
          <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className={`${LINK_CLASSES} font-bold underline underline-offset-4`}>
            Ver no Google Maps
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Evelyn Rafaela Nutricionista. Todos os direitos reservados.</p>
          <Link href="/privacidade" className={LINK_CLASSES}>
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
