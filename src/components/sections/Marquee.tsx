import { MARQUEE } from "@/data/content";

/** Faixa contínua de especialidades. Decorativa: o conteúdo real está na seção de serviços. */
export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <div aria-hidden="true" className="overflow-hidden bg-primary py-5 text-primary-foreground">
      <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none hover:[animation-play-state:paused]">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex shrink-0 items-center gap-10 pr-10">
            <span className="font-heading text-2xl font-light italic md:text-3xl">{item}</span>
            <span className="size-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
