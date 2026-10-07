export interface Service {
  id: string;
  title: string;
  description: string;
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
  { href: "#avaliacao-fisica", label: "Avaliação física" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export const HERO = {
  eyebrow: "Nutricionista · Anápolis-GO",
  titleBefore: "A Nutrição é mais que estética, é poder",
  titleEmphasis: "viver de novo!",
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
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Emagrecimento.",
  },
  {
    id: "reeducacao-alimentar",
    title: "Reeducação Alimentar",
    description:
      "Educação alimentar e nutricional: boas escolhas e métodos para melhorar a sua relação com a comida.",
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Reeducação Alimentar.",
  },
  {
    id: "hipertrofia",
    title: "Hipertrofia",
    description:
      "Ganho de massa muscular com plano alimentar alinhado ao seu treino e aos seus objetivos.",
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Hipertrofia.",
  },
  {
    id: "avaliacao-fisica",
    title: "Avaliação Física",
    description:
      "Medição do percentual de gordura por bioimpedância: entender o seu corpo é o primeiro passo.",
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma Avaliação Física.",
  },
  {
    id: "acompanhamento",
    title: "Acompanhamento e Monitoramento",
    description:
      "Retornos em datas definidas para acompanhar desempenho e evolução, com ajustes sempre que preciso.",
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de saber mais sobre o Acompanhamento e Monitoramento.",
  },
  {
    id: "saude-bem-estar",
    title: "Saúde e Bem-estar",
    description:
      "Corrigir deficiências nutricionais e prevenir doenças por meio de uma boa alimentação.",
    message:
      "Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em Saúde e Bem-estar.",
  },
];

export const MARQUEE = [
  "Emagrecimento",
  "Reeducação alimentar",
  "Hipertrofia",
  "Avaliação física",
  "Acompanhamento",
  "Saúde e bem-estar",
] as const;

export const STATEMENT = {
  eyebrow: "Meu jeito de cuidar",
  before: "Cuidar da alimentação não é sobre restrição.",
  emphasis: "É ter liberdade",
  after: "para viver com saúde, energia e qualidade de vida.",
} as const;

export const PHYSICAL_ASSESSMENT = {
  eyebrow: "Avaliação física",
  title: "Conheça a sua composição corporal",
  intro:
    "Medição do percentual de gordura com equipamento de bioimpedância. É feita à parte da consulta, para quem quer acompanhar de perto a própria evolução.",
  priceLabel: "Consultas a partir de",
  price: "R$ 170",
  priceNote: "A avaliação física é cobrada à parte. Valores completos pelo WhatsApp.",
  steps: [
    {
      title: "Bioimpedância",
      description: "Equipamento que mede o percentual de gordura corporal, de forma simples e sem dor.",
    },
    {
      title: "Sem preparo para levar",
      description: "Você não precisa levar nada. É só comparecer ao horário agendado.",
    },
    {
      title: "Anamnese",
      description: "Uma conversa sobre o seu histórico, a sua rotina e os seus objetivos.",
    },
    {
      title: "Exames, se necessário",
      description: "Quando fizer sentido, a Evelyn pede exames para complementar a avaliação.",
    },
  ],
  message: "Olá Evelyn, vim pelo seu site e gostaria de agendar uma Avaliação Física.",
} as const;

export interface ProcessStep {
  title: string;
  description: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Conversa e histórico",
    description: "Entendo a sua rotina, os seus hábitos e o que você quer conquistar.",
  },
  {
    title: "Avaliação física",
    description: "Quando faz sentido, medição de gordura por bioimpedância para conhecer o seu ponto de partida.",
  },
  {
    title: "Plano personalizado",
    description: "Alimentação planejada para a sua fase de vida, sem fórmulas prontas.",
  },
  {
    title: "Acompanhamento",
    description: "Retornos em datas definidas para acompanhar a sua evolução e ajustar o que for preciso.",
  },
];

export const ABOUT = {
  eyebrow: "Um pouco mais de mim",
  title: "Oi, eu sou a Evelyn.",
  quote: "Acredito que Nutrição e Equilíbrio andam juntos.",
  paragraphs: [
    "Sou natural de Recife-PE e moro em Anápolis-GO, onde fiz a minha graduação. Sou cristã, amo a Deus e sou muito grata por cada oportunidade.",
    "Amo a minha família e os meus amigos. Sou apaixonada em como a alimentação pode transformar gerações, e a minha maior felicidade é ver os meus pacientes progredindo.",
  ],
  facts: [
    { label: "De onde vim", value: "Recife-PE" },
    { label: "Onde cuido de você", value: "Anápolis-GO" },
    { label: "O que me move", value: "Fé, família e ver você evoluir" },
  ],
} as const;

/**
 * Seção oculta enquanto vazio. Preencher com depoimentos reais (com autorização) para reativar.
 */
export const TESTIMONIALS_ARE_DEMO = false;

export const TESTIMONIALS: readonly Testimonial[] = [];

/** Preencher com o número do registro (ex.: "CRN-1 12345") para exibir na faixa de credenciais */
export const CRN = "CRN-1 | 26364/P";

export const FAQ: readonly FaqItem[] = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Começamos com uma conversa sobre a sua rotina, histórico e objetivos, e, se você quiser, a avaliação física por bioimpedância, que é feita à parte. Ao final, você já sai sabendo os próximos passos.",
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
