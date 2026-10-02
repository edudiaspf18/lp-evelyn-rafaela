import { ArrowRight } from "lucide-react";

import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Service } from "@/data/content";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex flex-col bg-card p-8 transition-all duration-200 ease-in-out hover:bg-background">
      <div className="flex items-start justify-between">
        <Icon className="size-8 text-primary" strokeWidth={1.25} aria-hidden="true" />
        <span className="font-heading text-xl text-gold">0{index + 1}</span>
      </div>
      <h3 className="mt-8 text-2xl leading-tight font-medium">{service.title}</h3>
      <p className="mt-3 mb-8 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <WhatsAppButton
        message={service.message}
        origin={`Card Serviço - ${service.title}`}
        variant="link"
        className="mt-auto self-start"
      >
        Agendar este atendimento
        <ArrowRight
          className="size-4 transition-all duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </WhatsAppButton>
    </article>
  );
}
