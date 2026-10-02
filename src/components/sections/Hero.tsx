import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HERO, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-12 pb-16 md:grid-cols-12 md:items-center md:gap-8 md:px-8 md:pt-20 md:pb-28">
        <div className="md:col-span-7">
          <p className="mb-6 text-xs font-bold tracking-[0.28em] text-gold-ink uppercase">
            {HERO.eyebrow}
          </p>
          <h1 className="text-[2.75rem] leading-[1.02] font-medium text-balance sm:text-6xl lg:text-7xl">
            {HERO.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {HERO.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Hero">
              {HERO.primaryCta}
            </WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex h-12 items-center justify-center gap-2 px-2 text-sm font-bold text-primary transition-all duration-200 hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
            >
              {HERO.secondaryCta}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-gold" aria-hidden="true" />
            Atendimento presencial em Anápolis-GO, de segunda a sexta
          </p>
        </div>

        <div className="relative md:col-span-5">
          <div
            aria-hidden="true"
            className="absolute -top-3 -right-3 h-full w-full rounded-t-[999px] border border-gold/60 md:-top-4 md:-right-4"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-muted">
            <Image
              src="/images/hero.webp"
              alt="Evelyn Rafaela, nutricionista, de jaleco branco, sorrindo e trabalhando no computador"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-[100%_30%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
