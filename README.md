# LP Evelyn Rafaela · Nutricionista

Landing page de conversão da nutricionista **Evelyn Rafaela** (Anápolis-GO). O objetivo é gerar autoridade e levar o visitante a agendar a consulta pelo WhatsApp.

> Slogan (H1): **"A Nutrição é mais que estética, é poder viver de novo!"**

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (base-nova) + lucide-react
- Fontes `next/font`: Fraunces (títulos) e Jost (texto e rótulos)
- Deploy self-hosted: VPS Ubuntu + PM2 + Nginx + Certbot + GitHub Actions

## Rodando localmente

```bash
npm install
cp .env.example .env   # ajuste as variáveis se necessário
npm run dev            # http://localhost:3000
```

Outros scripts:

| Comando | O que faz |
|---|---|
| `npm run build` | build de produção |
| `npm run start` | serve o build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | checagem de tipos |
| `python3 scripts/atualizar-canvas.py` | regenera `progresso.canvas` a partir do `planner.md` |

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, OG, sitemap) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp com DDI, só dígitos (ex.: `5562993818529`) |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Link do Instagram |
| `NEXT_PUBLIC_GA_ID` | ID do GA4. Vazio = desligado |
| `NEXT_PUBLIC_META_PIXEL_ID` | ID do Meta Pixel. Vazio = desligado |

## Estrutura

```
src/
├── app/                 layout, página, privacidade, sitemap, robots, ícones
├── components/
│   ├── sections/        Header, Hero, Marquee, Statement, Services, Process, About, Testimonials, FAQ, FinalCta, Footer
│   ├── ui/              shadcn (button, accordion, sheet) + ServiceRow + Botanical (SVG)
│   ├── WhatsAppButton   link wa.me com mensagem dinâmica, UTM e tracking
│   ├── FloatingWhatsApp botão fixo
│   ├── CookieConsent    banner LGPD
│   └── TrackingScripts  GA4 + Meta Pixel (só após aceite)
├── data/content.ts      textos, serviços, FAQ, clínica
├── lib/                 env, utils (WhatsApp), consent, tracking
└── types/global.d.ts    tipos de window.gtag / window.fbq
```

## Como funciona

- **WhatsApp com mensagem pronta:** cada botão monta `https://wa.me/<número>?text=...`. Os cards de serviço levam o nome do serviço na mensagem.
- **UTM:** `?utm_source=instagram&utm_medium=stories&utm_campaign=agenda_aberta` é lido no cliente. A origem entra na mensagem ("Vim pelo seu Instagram!") e nos eventos de lead.
- **LGPD:** GA4 e Meta Pixel só carregam depois do "Aceitar" no banner. A escolha fica no `localStorage`. Sem consentimento, o evento de clique não dispara.
- **Animações:** só CSS (`@utility` no `globals.css`): entrada no hero, revelação ao rolar com `animation-timeline: view()` (sem suporte = sem animação, conteúdo visível), marquee e traço desenhado. `prefers-reduced-motion` desliga tudo.
- **SEO:** metadata + Open Graph, JSON-LD (`MedicalBusiness`), `sitemap.xml`, `robots.txt`, HTML semântico com um único `h1`.

## Conteúdo pendente antes de publicar

- **Depoimentos:** hoje são **exemplos fictícios** (`TESTIMONIALS_ARE_DEMO = true` em `src/data/content.ts`), com aviso visível na página. Trocar por depoimentos reais autorizados, ou esvaziar `TESTIMONIALS` (a seção some sozinha).
- Confirmar horário próprio de atendimento da Evelyn e se atende online.
- Informar IDs do GA4 e do Meta Pixel.

## Deploy (VPS)

1. Ubuntu com Node LTS, PM2, Nginx e Certbot.
2. `pm2 start npm --name "landing-evelyn" -- start`
3. Nginx como proxy reverso 80/443 → `localhost:3000`, certificado via Certbot.
4. GitHub Actions: a cada push em `main`, SSH no servidor → `git pull` → `npm ci && npm run build` → `pm2 reload landing-evelyn`.

## Documentação do projeto

- [`planner.md`](planner.md): regras, decisões técnicas, tarefas por fase e pendências.
- [`progresso.canvas`](progresso.canvas): painel visual de progresso (abrir no Obsidian).

Fotos e prints originais ficam fora do repositório (`assets/` e `design de referencia/`).
