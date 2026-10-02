import { DIFFERENTIALS } from "@/data/content";

export function Differentials() {
  return (
    <section aria-label="Diferenciais do atendimento" className="border-y border-border bg-muted">
      <ul className="mx-auto grid max-w-6xl divide-y divide-border px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8">
        {DIFFERENTIALS.map((item, index) => (
          <li key={item.title} className="py-8 md:px-8 md:py-12 md:first:pl-0 md:last:pr-0">
            <span className="font-heading text-3xl text-gold">0{index + 1}</span>
            <h2 className="mt-2 text-2xl font-medium">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
