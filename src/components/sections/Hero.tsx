import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";

import { Apple, Sprig } from "@/components/ui/Botanical";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { HERO, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <Apple
        className="absolute bottom-10 left-[-1.5rem] hidden h-40 text-gold/40 md:block"
        strokeWidth={1}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-10 pb-20 md:grid-cols-12 md:gap-6 md:px-8 md:pt-16 md:pb-28">
        <div className="relative z-10 md:col-span-7 md:self-center">
          <p className="rise-in mb-7 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
            {HERO.eyebrow}
          </p>
          <h1 className="slide-in text-[2.9rem] leading-[0.98] font-light text-balance sm:text-6xl lg:text-[5.2rem]">
            {HERO.titleBefore}{" "}
            <em className="font-normal text-gold-ink italic">{HERO.titleEmphasis}</em>
          </h1>
          <p className="rise-in mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground [--rise-delay:260ms]">
            {HERO.subtitle}
          </p>

          <div className="rise-in mt-10 flex flex-col gap-4 [--rise-delay:380ms] sm:flex-row sm:items-center">
            <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} origin="Hero">
              {HERO.primaryCta}
            </WhatsAppButton>
            <a
              href="#servicos"
              className="group inline-flex min-h-11 items-center justify-center gap-2 px-2 text-sm font-medium tracking-wide text-primary transition-all duration-200 ease-in-out hover:text-gold-ink focus-visible:ring-2 focus-visible:ring-ring"
            >
              {HERO.secondaryCta}
              <ArrowDown
                className="size-4 transition-all duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          <p className="rise-in mt-12 flex items-center gap-2 text-sm text-muted-foreground [--rise-delay:500ms]">
            <MapPin className="size-4 text-gold" aria-hidden="true" />
            Atendimento presencial em Anápolis-GO, de segunda a sexta
          </p>
        </div>

        <figure className="relative md:col-span-5 md:col-start-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 bg-primary md:translate-x-5 md:translate-y-5"
          />
          <div className="unveil relative aspect-[4/5] overflow-hidden bg-primary">
            <Image
              src="/images/hero-evelyn.webp"
              alt="Evelyn Rafaela, nutricionista, sorrindo, em retrato de cintura para cima"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="settle object-cover object-[50%_30%]"
            />
          </div>
          <figcaption className="absolute bottom-0 left-0 z-10 -translate-x-3 translate-y-1/2 bg-background px-4 py-3 text-xs font-medium tracking-[0.28em] uppercase shadow-sm md:-translate-x-6">
            Evelyn Rafaela
            <span className="block text-[10px] tracking-[0.34em] text-gold-ink">Nutricionista</span>
          </figcaption>
          <Sprig className="absolute -top-12 -right-3 z-10 h-48 text-gold md:-top-14 md:-right-8 md:h-60" />
        </figure>
      </div>
    </section>
  );
}
