import {
  CalendarCheck,
  ClipboardList,
  Dumbbell,
  HeartPulse,
  Salad,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Mensagem base do WhatsApp (UTM é acrescentado em runtime) */
  message: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  context: string;
  text: string;
}

export const WHATSAPP_GENERIC_MESSAGE =
  "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta.";

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const HERO = {
  eyebrow: "Nutricionista · Anápolis-GO",
  title: "A Nutrição é mais que estética, é poder viver de novo!",
  subtitle:
    "Atendimento nutricional personalizado, feito para a sua rotina. Sem terrorismo, sem dieta da moda: só um plano que cabe na sua vida.",
  primaryCta: "Agendar Minha Consulta",
  secondaryCta: "Conhecer os serviços",
} as const;

export const DIFFERENTIALS = [
  {
    title: "Avaliação completa",
    description: "Medidas, composição corporal e histórico antes de qualquer plano.",
  },
  {
    title: "Plano personalizado",
    description: "Alimentação planejada para a sua fase de vida e a sua rotina.",
  },
  {
    title: "Acompanhamento próximo",
    description: "Retornos em datas definidas para acompanhar a sua evolução.",
  },
] as const;

export const SERVICES: readonly Service[] = [
  {
    id: "emagrecimento",
    title: "Emagrecimento",
    description:
      "Orientação para perda de peso de forma leve e sustentável, respeitando o contexto da sua vida.",
    icon: Scale,
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Emagrecimento.",
  },
  {
    id: "reeducacao-alimentar",
    title: "Reeducação Alimentar",
    description:
      "Educação alimentar e nutricional: boas escolhas e métodos para melhorar a sua relação com a comida.",
    icon: Salad,
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Reeducação Alimentar.",
  },
  {
    id: "hipertrofia",
    title: "Hipertrofia",
    description:
      "Ganho de massa muscular com plano alimentar alinhado ao seu treino e aos seus objetivos.",
    icon: Dumbbell,
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Hipertrofia.",
  },
  {
    id: "avaliacao-nutricional",
    title: "Avaliação Nutricional",
    description:
      "Medidas corporais, percentual de gordura e riscos à saúde: entender o seu corpo é o primeiro passo.",
    icon: ClipboardList,
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma Avaliação Nutricional.",
  },
  {
    id: "acompanhamento",
    title: "Acompanhamento e Monitoramento",
    description:
      "Retornos em datas definidas para acompanhar desempenho e evolução, com ajustes sempre que preciso.",
    icon: CalendarCheck,
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de saber mais sobre o Acompanhamento e Monitoramento.",
  },
  {
    id: "saude-bem-estar",
    title: "Saúde e Bem-estar",
    description:
      "Corrigir deficiências nutricionais e prevenir doenças por meio de uma boa alimentação.",
    icon: HeartPulse,
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Saúde e Bem-estar.",
  },
];

export const ABOUT = {
  eyebrow: "Sobre mim",
  title: "Oi, eu sou a Evelyn.",
  quote: "Acredito que Nutrição e Equilíbrio andam juntos.",
  paragraphs: [
    "Sou apaixonada em como a alimentação pode transformar gerações. Para mim, cuidar da alimentação não é restrição: é ter liberdade para viver com mais saúde, energia e qualidade de vida.",
    "Cada pessoa é única, então cada plano também é. Escuto a sua história, avalio o seu corpo e construo junto com você hábitos que fazem sentido no seu dia a dia.",
    "A minha maior felicidade é ver os meus pacientes progredindo.",
  ],
  highlights: ["Atendimento humanizado", "Plano individual", "Acompanhamento de perto"],
} as const;

/**
 * DEMO: depoimentos fictícios apenas para apresentação do layout à cliente.
 * Substituir por depoimentos reais (com autorização) ou esvaziar o array antes de publicar.
 */
export const TESTIMONIALS_ARE_DEMO = true;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "Paciente A.",
    context: "Emagrecimento",
    text: "Pela primeira vez um plano que cabe na minha rotina. Perdi peso sem passar fome e sem culpa.",
  },
  {
    name: "Paciente B.",
    context: "Hipertrofia",
    text: "Ajustou a minha alimentação ao treino e a evolução veio. Os retornos me mantiveram no foco.",
  },
  {
    name: "Paciente C.",
    context: "Reeducação alimentar",
    text: "Aprendi a escolher melhor sem abrir mão do que eu gosto. Atendimento muito atencioso.",
  },
];

export const FAQ: readonly FaqItem[] = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Começamos com uma conversa sobre a sua rotina, histórico e objetivos, seguida da avaliação nutricional com as suas medidas. Ao final, você já sai sabendo os próximos passos.",
  },
  {
    question: "Preciso querer emagrecer para ir à nutricionista?",
    answer:
      "Não. A consulta também serve para ganho de massa, melhora da alimentação, saúde e bem-estar, ou para entender melhor o seu corpo.",
  },
  {
    question: "Tem acompanhamento depois da consulta?",
    answer:
      "Sim. O acompanhamento e monitoramento em datas definidas ajudam a ajustar o plano conforme a sua evolução.",
  },
  {
    question: "O plano alimentar é igual para todo mundo?",
    answer:
      "Nunca. O planejamento é personalizado, seguindo as fases de vida, a rotina e os objetivos de cada paciente.",
  },
  {
    question: "Onde é o atendimento?",
    answer:
      "Presencial na Clínica Popular Recanto, em Anápolis-GO, de segunda a sexta. Chame no WhatsApp para confirmar horários.",
  },
  {
    question: "Como agendo a minha consulta?",
    answer:
      "Clique em qualquer botão de WhatsApp desta página: a mensagem já vai pronta e a Evelyn responde para combinar o melhor horário.",
  },
];

export const CLINIC = {
  name: "Clínica Popular Recanto",
  addressLines: [
    "Av. João Florentino, Quadra 09, Lote 20",
    "Residencial Portal do Cerrado",
    "Anápolis - GO",
  ],
  hours: "Segunda a sexta, com horário agendado",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Popular+Recanto+Av.+Jo%C3%A3o+Florentino+Quadra+09+Lote+20+Residencial+Portal+do+Cerrado+An%C3%A1polis+GO",
} as const;
