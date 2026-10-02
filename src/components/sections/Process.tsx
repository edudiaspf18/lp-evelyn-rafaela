import Image from "next/image";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PROCESS_STEPS, WHATSAPP_GENERIC_MESSAGE } from "@/data/content";

/** Sequência real do atendimento: a ordem importa, por isso os números. */
export function Process() {
  return (
    <section id="consulta" className="border-y border-border bg-muted py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <figure className="reveal md:sticky md:top-24 md:col-span-5 md:self-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-primary">
            <Image
              src="/images/consulta-evelyn.webp"
              alt="Evelyn Rafaela, de jaleco branco, atendendo no computador"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-[88%_30%] transition-all duration-700 ease-in-out hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-4 text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Atendimento presencial · Anápolis-GO
          </figcaption>
        </figure>

        <div className="md:col-span-6 md:col-start-7">
          <p className="reveal mb-5 text-xs font-medium tracking-[0.32em] text-gold-ink uppercase">
            Como é a consulta
          </p>
          <h2 className="reveal text-4xl leading-[1.04] font-light text-balance md:text-6xl">
            Do primeiro papo ao acompanhamento
          </h2>

          <ol className="mt-12 border-l border-primary/25">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="reveal relative pb-10 pl-8 last:pb-0 md:pl-10">
                <span
                  aria-hidden="true"
                  className="absolute top-1 -left-[0.45rem] size-3.5 rounded-full border border-gold bg-muted"
                />
                <span className="font-heading text-sm tracking-[0.2em] text-gold-ink">
                  Passo {index + 1}
                </span>
                <h3 className="mt-1 text-2xl font-normal md:text-3xl">{step.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            origin="Como é a consulta"
            className="mt-12"
          >
            Agendar Minha Consulta
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
