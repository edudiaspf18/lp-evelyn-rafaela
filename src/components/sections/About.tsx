import Image from "next/image";
import { Check } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ABOUT, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

export function About() {
  return (
    <section id="sobre" className="border-y border-border bg-muted py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-12 md:items-center md:gap-8 md:px-8">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-background">
            <Image
              src="/images/about.webp"
              alt="Retrato de Evelyn Rafaela, nutricionista, com a mão no queixo e um leve sorriso"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-[50%_20%]"
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.28em] text-muted-foreground uppercase">
            Evelyn Rafaela · Nutricionista
          </p>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="mb-4 text-xs font-bold tracking-[0.28em] text-gold-ink uppercase">
            {ABOUT.eyebrow}
          </p>
          <h2 className="text-4xl leading-[1.05] font-medium md:text-5xl">{ABOUT.title}</h2>

          <blockquote className="mt-8 border-l border-gold pl-6 font-heading text-2xl leading-snug text-primary italic md:text-3xl">
            {ABOUT.quote}
          </blockquote>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            {ABOUT.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {ABOUT.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm font-bold">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            origin="Sobre"
            className="mt-10"
          >
            Falar com a Evelyn
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
