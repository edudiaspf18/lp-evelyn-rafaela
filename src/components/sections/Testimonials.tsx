import { Quote } from "lucide-react";

import { TESTIMONIALS, TESTIMONIALS_ARE_DEMO } from "@/data/content";

export function Testimonials() {
  // Sem depoimentos reais, a seção some (nunca publicar depoimento inventado)
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold tracking-[0.28em] text-gold-ink uppercase">
            Prova social
          </p>
          <h2 className="text-4xl leading-[1.05] font-medium text-balance md:text-5xl">
            Quem cuidou da alimentação com a Evelyn
          </h2>
          {TESTIMONIALS_ARE_DEMO && (
            <p className="mt-6 border border-dashed border-gold bg-gold/10 px-4 py-3 text-sm text-gold-ink">
              Conteúdo de exemplo para apresentação do layout. Aqui entram os
              depoimentos reais dos pacientes, com autorização.
            </p>
          )}
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li key={`${item.name}-${item.context}`} className="flex flex-col border-t border-primary pt-6">
              <Quote className="size-6 text-gold" strokeWidth={1.25} aria-hidden="true" />
              <blockquote className="mt-4 font-heading text-2xl leading-snug">
                “{item.text}”
              </blockquote>
              <p className="mt-6 text-sm font-bold">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.context}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
