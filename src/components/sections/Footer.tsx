import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, MessageCircle } from "lucide-react";

import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ManageCookiesButton } from "@/components/ManageCookiesButton";
import { CLINIC, CRN } from "@/data/content";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/env";
import { generateWhatsAppLink } from "@/lib/utils";

const LINK_CLASSES =
  "inline-flex min-h-11 items-center gap-2 transition-all duration-200 hover:text-gold-light focus-visible:ring-2 focus-visible:ring-ring";

const HEADING_CLASSES =
  "font-sans text-xs font-medium tracking-[0.32em] text-gold-light uppercase";

const ROW_CLASSES =
  "group flex min-h-14 items-center justify-between gap-3 py-4 transition-all duration-200 hover:text-gold-light focus-visible:ring-2 focus-visible:ring-ring";

// (62) 9 9381-8529 a partir do número com DDI
function formatPhone(number: string): string {
  const match = number.match(/^55(\d{2})(\d)(\d{4})(\d{4})$/);
  return match ? `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}` : number;
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-12 md:gap-x-8 md:gap-y-0 md:px-8 md:py-28">
        <div className="md:col-span-4">
          <Image
            src="/images/monograma-claro.png"
            alt="Monograma ER de Evelyn Rafaela"
            width={240}
            height={212}
            className="h-16 w-auto"
          />
          <p className="mt-8 font-heading text-2xl tracking-[0.28em] uppercase">Evelyn Rafaela</p>
          <p className="mt-1 text-xs tracking-[0.4em] text-gold-light uppercase">Nutricionista</p>
          <p className="mt-8 max-w-xs font-heading text-xl leading-snug text-primary-foreground/80 italic">
            A Nutrição é mais que estética, é poder viver de novo!
          </p>
        </div>

        <div className="text-sm md:col-span-3 md:col-start-6">
          <h2 className={HEADING_CLASSES}>Contato</h2>
          <ul className="mt-8 border-t border-primary-foreground/15">
            <li className="border-b border-primary-foreground/15">
              <a
                href={generateWhatsAppLink(WHATSAPP_NUMBER, "Olá Evelyn, vim pelo seu site.")}
                target="_blank"
                rel="noopener noreferrer"
                className={ROW_CLASSES}
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="size-4 shrink-0 text-gold-light" aria-hidden="true" />
                  {formatPhone(WHATSAPP_NUMBER)}
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 opacity-50 transition-all duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="border-b border-primary-foreground/15">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={ROW_CLASSES}>
                <span className="flex items-center gap-2">
                  <InstagramIcon className="size-4 shrink-0 text-gold-light" />
                  @{INSTAGRAM_HANDLE}
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 opacity-50 transition-all duration-200 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm md:col-span-4 md:col-start-9">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className={HEADING_CLASSES}>Atendimento</h2>
            <span className="leading-4 text-primary-foreground/70">{CLINIC.name}</span>
          </div>
          <ul className="mt-8 grid grid-cols-1 border-t border-primary-foreground/15 sm:grid-cols-2 sm:gap-x-8">
            {CLINIC.units.map((unit) => (
              <li key={unit.name} className="border-b border-primary-foreground/15">
                <a
                  href={unit.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ROW_CLASSES}`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="size-4 shrink-0 text-gold-light" aria-hidden="true" />
                    {unit.name}
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 opacity-50 transition-all duration-200 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
            <li className="flex min-h-14 items-center gap-2 border-b border-primary-foreground/15 py-4 text-primary-foreground/70 sm:col-span-2">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              {CLINIC.hours}
            </li>
          </ul>

        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-8 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8">
          <p className="leading-relaxed">
            © {new Date().getFullYear()} Evelyn Rafaela, Nutricionista · {CRN}. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 md:justify-end">
            <li>
              <Link href="/privacidade" className={LINK_CLASSES}>
                Política de privacidade
              </Link>
            </li>
            <li>
              <ManageCookiesButton className={LINK_CLASSES} />
            </li>
            <li className="inline-flex min-h-11 items-center gap-1">
              Desenvolvido por
              <a
                href="https://www.instagram.com/dudu_diaspf/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 transition-all duration-200 hover:text-gold-light focus-visible:ring-2 focus-visible:ring-ring"
              >
                Winner Tech
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
