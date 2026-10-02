import { ServiceCard } from "@/components/ui/ServiceCard";
import { SERVICES } from "@/data/content";

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs font-bold tracking-[0.28em] text-gold-ink uppercase">
              Especialidades
            </p>
            <h2 className="text-4xl leading-[1.05] font-medium text-balance md:text-5xl">
              Cuidado nutricional para cada momento da sua vida
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:self-end">
            Do emagrecimento ao ganho de massa, passando pela reeducação
            alimentar: o plano é construído em cima do seu corpo e da sua rotina.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
