# planner.md — LP Evelyn Rafaela (Nutricionista)

Fonte da verdade do projeto. Ler ANTES de codar. Atualizar DEPOIS de cada tarefa.
Visual: `progresso.canvas` (abrir no Obsidian). Mesmo status. Sempre sincronizar os dois.

---

## 0. Regras de trabalho (obrigatórias)

### Comunicação
- Caveman full. Zero filler. Sem saudação, sem "aqui está o código".
- Entregar só código completo e funcional. Avisos: comentário inline.
- Exceção: code review = modo Tech Lead (findings + perguntas socráticas, sem código até pedido).
- Commits, PRs, docs de repo: prosa normal.

### Stack
- Next.js App Router + React + TypeScript strict + Tailwind + Shadcn (`@/components/ui/*`, `cn()`).
- Server Component por padrão. `'use client'` SÓ com hook de estado ou evento de navegador.
- Evitar `useEffect`. Sem `any`. `unknown` + validação. Early return.
- Ícones só `lucide-react`. Sem CSS puro, sem `.module.css`.
- Toda interação: `hover:`, `focus-visible:` (nunca `focus:`), `transition-all duration-200 ease-in-out`.
- Sem banco de dados. Sem Docker. (Regra Postgres/pgAdmin não se aplica: LP estática.)

### Design
- Editorial/minimalista. Sem gradiente roxo/azul, sem glassmorphism, sem sombra pesada.
- Base monocromática creme + verde oliva. UMA cor de destaque (dourado). Ver tokens abaixo.
- Bordas 1px sutis. Sombra: `shadow-sm` ou flat.
- Títulos grandes `tracking-tight`, corpo `leading-relaxed`, secundário com cor muted.
- Whitespace generoso (`gap-8`, `py-16 md:py-24`). Layout assimétrico. Nada apertado.
- Animação sutil. Nada bouncy/springy.
- Mobile-first estrito. Testar 375px primeiro.

### Processo por tarefa (Definition of Done)
1. Ler tarefa em §7. Marcar `[~]` (em andamento) no planner + canvas.
2. Implementar. Seguir regras acima.
3. `npm run lint` + `npx tsc --noEmit` limpos. Sem warning novo.
4. Conferir no navegador mobile 375px + desktop 1280px.
5. Marcar `[x]` no planner. Atualizar cor do nó no `progresso.canvas`. Atualizar §9 Log.
6. Só então próxima tarefa.

### Git e GitHub
- Commits em **português**. Prefixo Conventional Commits mantido (`feat`, `fix`, `chore`, `docs`, `style`, `refactor`).
- Formato: `feat: adiciona seção Hero com CTA de WhatsApp`. Imperativo/presente, ≤ 72 chars, sem ponto final.
- Um commit por tarefa (ou grupo coeso). Mensagem referencia o id: `feat(T5.2): adiciona seção Hero`.
- Rodapé de todo commit: `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- Branch: trabalho direto em `main` até o 1º deploy. Depois do CI/CD ativo (F9): `feat/<fase>` + merge em `main` (deploy dispara em `main`).
- Repo GitHub: `lp-evelyn-rafaela` (privado), criado via `gh`.
- Commit do `planner.md` + `progresso.canvas` junto com a tarefa que mudou o status.

### README
- Ao fechar F5 (página pronta) criar `README.md` em português: visão, stack, como rodar (`npm i`, `.env`, `npm run dev`), estrutura de pastas, variáveis de ambiente, scripts, tracking/LGPD, deploy. Tarefa T8.9.

**Depoimentos DEMO:** `TESTIMONIALS_ARE_DEMO = true` em `src/data/content.ts` mostra aviso "Conteúdo de exemplo" na seção. Só para vender o layout à cliente. Trocar por reais (ou esvaziar o array) ANTES do go-live: T9.0.

Não inventar (exceto o DEMO acima, sempre sinalizado): depoimentos, números de pacientes, formação, certificados, CRN. Faltou dado = placeholder marcado `TODO(evelyn)` + item em §8.

---

## 1. Visão

- Cliente: Evelyn Rafaela, nutricionista. Instagram `@evelynrafaelanutrii` (bio: Alimentação · Qualidade de vida · Hábitos saudáveis).
- Objetivo: gerar autoridade + converter visitante em paciente via WhatsApp.
- Tráfego: majoritariamente Instagram mobile. Link da bio hoje = linktr.ee/NutriEvelynn (LP substitui).
- H1 fixo: **"A Nutrição é mais que estética, é poder viver de novo!"**
- Atendimento presencial: Clínica Popular Recanto, Anápolis-GO, segunda a sexta. (Confirmar endereço/horário — §8.)

## 2. Insumos (pasta do projeto)

| Pasta | Conteúdo | Uso |
|---|---|---|
| `assets/logo .png` | Logo ER + ramo, creme/verde | Header, footer, favicon, OG |
| `assets/…15.30.59.png` | Foto jaleco + laptop | **Hero** (tratada: contraste/cor/nitidez) |
| `assets/…15.30.39.png` | "Oi, eu sou a Evelyn" com textos sobrepostos | **Sobre** (overlays removidos por inpainting + recorte busto). Original sem overlay melhora a qualidade (§8) |
| `assets/…15.29.03.png` / `…15.29.19.png` / `…15.29.40.png` | Prints do perfil/feed e post "Quando sei que devo ir" | SÓ referência de copy/tom. NÃO publicar (têm UI do Instagram) |
| `design de referencia/*.png` | 5 prints de LPs de nutri | SÓ referência. NÃO publicar |

Referências mais úteis: Nourish (verde oliva, serifa, cards limpos, bloco Instagram), Gabriela Hollman (verde escuro + bege), Viviane (serifa com destaque verde, cards brancos).
Padrão repetido: Hero → faixa de diferenciais → serviços em cards → sobre → depoimentos → CTA final → footer escuro.

## 3. Identidade visual (tokens)

| Token | Valor | Uso |
|---|---|---|
| `--background` | `#FDFBF7` | fundo principal creme |
| `--foreground` | `#2C4027` | texto/títulos verde oliva escuro |
| `--primary` | `#2C4027` | botão CTA, footer |
| `--primary-foreground` | `#FDFBF7` | texto sobre primary |
| `--accent` | `#A8895B` | DESTAQUE ÚNICO dourado: detalhes, sublinhado, números. Nunca fundo grande |
| `--muted` | `#F3EFE6` | seções alternadas |
| `--muted-foreground` | `#6B7566` | texto secundário (conferir contraste ≥ 4.5:1) |
| `--border` | `#2C4027` a 12% | bordas 1px |

- Títulos: **Fraunces** (serifa "soft" com eixo óptico, peso 300–400, itálico para ênfase). Corpo e rótulos: **Jost** (sans geométrica fina, parente do wordmark da logo, rótulos em caixa alta com tracking largo). Via `next/font/google` (self-host em build). Trocado de Cormorant+Lato (combinação comum em sites de nutri). Eixo SOFT do Fraunces removido (−90 KB, LCP mobile).
- Escala: h1 `text-4xl md:text-6xl lg:text-7xl tracking-tight`; h2 `text-3xl md:text-5xl tracking-tight`; corpo `text-base md:text-lg leading-relaxed`.
- Raio: `rounded-md`/`rounded-lg` (evitar `rounded-2xl` do doc original). Botão CTA `rounded-full` permitido (logo é delicada).
- Ajustar tokens finais ao Tailwind em uso (v4: `@theme` no `globals.css`; v3: `tailwind.config.ts`). Verificar versão no scaffold.
- WhatsApp NÃO usa verde-WhatsApp. Botão segue paleta da marca.

## 4. Arquitetura

```
/
├── public/images/            # hero.webp, about.webp, logo.png, og-image-evelyn.jpg
├── public/favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx        # fontes, metadata, <CookieConsent/>, <FloatingWhatsApp/>
│   │   ├── page.tsx          # compõe seções (Server Component)
│   │   ├── globals.css       # tokens
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── ui/               # shadcn: button, accordion, card + ServiceCard
│   │   ├── sections/         # Header, Hero, Diferenciais, About, Services, Testimonials, FAQ, FinalCta, Footer
│   │   ├── WhatsAppButton.tsx    # client: href com UTM + click tracking
│   │   ├── FloatingWhatsApp.tsx  # client
│   │   ├── CookieConsent.tsx     # client
│   │   └── TrackingScripts.tsx   # client: next/script GA4 + Pixel só com consent
│   ├── lib/
│   │   ├── utils.ts          # cn() + generateWhatsAppLink()
│   │   ├── tracking.ts       # trackWhatsAppClick() tipado
│   │   ├── consent.ts        # store de consentimento (useSyncExternalStore)
│   │   └── env.ts            # leitura/validação de env
│   ├── types/global.d.ts     # Window.gtag, Window.fbq tipados
│   └── data/content.ts       # textos, serviços, FAQ, links
├── .env.example
├── planner.md
└── progresso.canvas
```

Composição de `page.tsx`: tudo Server Component. Só ilhas client: `WhatsAppButton`, `FloatingWhatsApp`, `CookieConsent`, `TrackingScripts`, `Header` (menu mobile, se tiver estado).

## 5. Decisões técnicas (resolvem conflitos doc × regras)

| Tema | Doc original | Decisão |
|---|---|---|
| Hook UTM | `useEffect` + `useState` | `useSearchParams()` direto, sem `useEffect`. Componente client dentro de `<Suspense>`. Derivar `utm` no render |
| Tipo `any` | `window as any`, `utm?: any` | `declare global { interface Window { gtag?: …; fbq?: … } }`. `interface UtmParams` |
| Consent localStorage | `useEffect` | `useSyncExternalStore` com `getServerSnapshot` = `'unknown'` (evita hydration mismatch) |
| Scripts GA4/Pixel | disparo no clique | `next/script` `afterInteractive` SÓ quando consent = `granted`. `trackWhatsAppClick` no-op sem consent |
| Número WhatsApp | hardcoded no card | `NEXT_PUBLIC_WHATSAPP_NUMBER` em env. Fonte única em `lib/env.ts` |
| Card de serviço | hex fixo, `rounded-2xl`, `shadow-lg` | tokens Tailwind, borda 1px, `shadow-sm`, `cn()` |
| `ServiceCard` com hook | hook dentro do card | Card é Server Component; botão é `WhatsAppButton` (client) recebendo `message` |
| Mensagem UTM | trecho solto | `buildMessage(base, utm)` puro em `lib/utils.ts` |
| Ícone WhatsApp | — | lucide não tem logo WhatsApp. Usar `MessageCircle` |
| Deploy | PM2 ou Docker | **PM2** (sem Docker) |

### Contratos TypeScript

```ts
// types/global.d.ts
export {};
declare global {
  interface Window {
    gtag?: (command: 'event' | 'config' | 'js' | 'consent', ...args: unknown[]) => void;
    fbq?: (command: 'track' | 'init' | 'trackCustom', ...args: unknown[]) => void;
  }
}

// lib/tracking.ts
export interface UtmParams {
  source: string | null;
  medium: string | null;
  campaign: string | null;
}
export function trackWhatsAppClick(origin: string, utm: UtmParams): void;

// lib/utils.ts
export function generateWhatsAppLink(phone: string, text: string): string;
export function buildMessage(base: string, utm: UtmParams): string;

// data/content.ts
export interface Service { id: string; title: string; description: string; icon: LucideIcon; message: string }
export interface FaqItem { question: string; answer: string }
export interface Testimonial { name: string; text: string }   // vazio até haver reais
```

Eventos: GA4 `generate_lead` {method:'WhatsApp', origin_section, campaign_source, campaign_medium, campaign_name}; Meta Pixel `Lead` {content_name: origin}. Fallback UTM: `organico` / `direto` / `nenhuma`.

### Env (`.env.example`)
```
NEXT_PUBLIC_SITE_URL=https://www.evelynrafaelanutri.com.br
NEXT_PUBLIC_WHATSAPP_NUMBER=55XXXXXXXXXXX   # TODO(evelyn) confirmar
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/evelynrafaelanutrii/
NEXT_PUBLIC_GA_ID=                          # vazio = GA desligado
NEXT_PUBLIC_META_PIXEL_ID=                  # vazio = Pixel desligado
```
`.env` nunca em commit.

## 6. Conteúdo (rascunho — base: Instagram e doc)

**Hero**
- H1: A Nutrição é mais que estética, é poder viver de novo!
- Sub: Atendimento nutricional personalizado em Anápolis. Plano feito para a sua rotina, sem terrorismo e sem dieta da moda.
- CTA principal: "Agendar Minha Consulta". Secundário: link âncora "Conhecer os serviços".

**Diferenciais (faixa 3 itens)**: Avaliação completa · Plano personalizado · Acompanhamento próximo.

**Serviços (6 cards)** — textos do post "Quando sei que devo ir na nutri":
1. Emagrecimento — orientação para perda de peso conforme contexto de vida.
2. Reeducação Alimentar — educação alimentar e nutricional, boas escolhas e métodos.
3. Hipertrofia — ganho de massa muscular com plano alimentar alinhado ao treino.
4. Avaliação Nutricional — medidas corporais, percentual de gordura corporal, riscos.
5. Acompanhamento e Monitoramento — retornos em datas definidas, evolução.
6. Saúde e Bem-estar — corrigir deficiências, prevenir doenças pela alimentação.

Mensagem WhatsApp por card (RF03): `Olá Evelyn, vim pelo seu site e gostaria de agendar uma consulta com foco em {título}.`

**Sobre**: "Oi, eu sou a Evelyn." Frases dela: "Apaixonada em como a alimentação pode transformar gerações" · "Acredito que Nutrição e Equilíbrio andam juntos" · "Minha maior felicidade é ver meus pacientes progredindo". Formação/CRN: `TODO(evelyn)`.

**Depoimentos**: seção só renderiza se `testimonials.length > 0`. Sem fake.

**FAQ (6)**: Como funciona a primeira consulta? · Preciso ter objetivo de emagrecer? · Atende online ou só presencial? · Quanto tempo dura o acompanhamento? · Tem retorno incluso? · Como agendar? Respostas = `TODO(evelyn)` onde dependem dela.

**CTA final**: "Pronta para viver de novo?" + botão WhatsApp.

**Footer**: logo, Instagram, WhatsApp, endereço Clínica Recanto (link Google Maps), horário, aviso de privacidade, ©.

---

## 7. Tarefas por fase

Legenda: `[ ]` a fazer · `[~]` em andamento · `[x]` feito · `[!]` bloqueado

### F0 — Planejamento
- [x] T0.1 Ler doc, assets, referências
- [x] T0.2 Escrever `planner.md`
- [x] T0.3 Criar `progresso.canvas`

### F1 — Setup
- [x] T1.1 `git init` + `.gitignore` (inclui `.env*`, exceto `.env.example`)
- [x] T1.2 Scaffold Next.js: TS, Tailwind, App Router, `src/`, ESLint, alias `@/*`. Nome do pacote `lp-evelyn` (pasta tem espaço/maiúscula: criar em subpasta temp e mover, ou ajustar `package.json`). NÃO sobrescrever `assets/`, `design de referencia/`, `planner.md`, `progresso.canvas`
- [x] T1.3 `tsconfig` strict (já vem no scaffold; `noUncheckedIndexedAccess` não adotado)
- [x] T1.4 `shadcn init` + adicionar `button`, `accordion`, `card`
- [x] T1.5 Tokens de cor em `globals.css` (§3)
- [x] T1.6 Fontes Cormorant Garamond + Lato via `next/font`
- [x] T1.7 `.env.example` + `lib/env.ts`
- [x] T1.8 `types/global.d.ts`

### F2 — Assets
- [x] T2.1 Copiar logo → `public/images/logo.png`; gerar favicon do monograma ER
- [x] T2.2 Recortar foto jaleco (15.30.39) → `public/images/hero.webp` (mobile e desktop, foco no rosto)
- [x] T2.3 Foto Sobre: conseguir original sem overlay (§8). Provisório: placeholder neutro
- [x] T2.4 `og-image-evelyn.jpg` 1200×630 (logo centralizada em creme)
- [x] T2.5 Alt text descritivo em todas as imagens. `next/image` com `sizes` e `priority` só no hero

### F3 — Dados e lib
- [x] T3.1 `data/content.ts` (§6) com tipos estritos
- [x] T3.2 `lib/utils.ts`: `cn`, `generateWhatsAppLink`, `buildMessage`
- [x] T3.3 `lib/consent.ts` (store + `useSyncExternalStore`)
- [x] T3.4 `lib/tracking.ts` tipado, no-op sem consent

### F4 — UI base
- [x] T4.1 `WhatsAppButton` (client, Suspense-safe, UTM, tracking, `target=_blank rel="noopener noreferrer"`, `aria-label`)
- [x] T4.2 `ServiceCard` (RSC)
- [x] T4.3 FAQ com Accordion shadcn
- [x] T4.4 Variantes de botão da marca (primary, outline)

### F5 — Seções
- [x] T5.11 Redesign editorial: manifesto tipográfico, serviços em linhas de índice, seção "Como é a consulta" (passos), Sobre com texto dela, faixa marquee, ilustrações botânicas em traço, fotos novas tratadas (001/002/jaleco), ícone da marca (monograma em quadrado verde)
- [x] T5.12 Animações CSS (sem JS): entrada no hero, máscara na foto, revelação ao rolar (scroll-driven, com fallback), marquee, traço desenhado; `prefers-reduced-motion` respeitado
- [x] T5.1 `Header` (logo + âncoras + CTA; menu mobile)
- [x] T5.2 `Hero`
- [x] T5.3 `Diferenciais`
- [x] T5.4 `Services`
- [x] T5.5 `About`
- [x] T5.6 `Testimonials` (condicional)
- [x] T5.7 `FAQ`
- [x] T5.8 `FinalCta`
- [x] T5.9 `Footer` (Instagram + mapa)
- [x] T5.10 Montar `page.tsx`

### F6 — Tracking e LGPD
- [x] T6.1 `CookieConsent` (banner na 1ª visita, Aceitar/Recusar, persiste em localStorage)
- [x] T6.2 `TrackingScripts` (GA4 + Pixel via `next/script`, só com consent)
- [x] T6.3 `FloatingWhatsApp` (botão fixo, não cobre banner de cookies no mobile)
- [x] T6.4 Página/seção de política de privacidade (texto mínimo LGPD)
- [x] T6.5 Testar fluxo: sem consent = zero request GA/Pixel

### F7 — SEO
- [x] T7.1 `metadata` em `layout.tsx` (title, description, OG, locale `pt_BR`, `metadataBase`)
- [x] T7.2 JSON-LD `Nutritionist`/`LocalBusiness` (nome, telefone, endereço, sameAs Instagram)
- [x] T7.3 `sitemap.ts`, `robots.ts`
- [x] T7.4 HTML semântico: um `h1`, `header/main/section/footer`, landmarks, ordem de headings

### F8 — QA
- [x] T8.10 Rodada Nielsen: botão "Gerenciar cookies" no footer, 404 própria, alvos de toque ≥ 44px, contraste do dourado corrigido, banner antes do conteúdo no DOM
- [x] T8.1 `npm run lint`, `tsc --noEmit`, `npm run build` limpos
- [x] T8.2 Lighthouse mobile: Performance ≥ 90, Acessibilidade ≥ 95, SEO ≥ 95, Best Practices ≥ 95 (medido: mobile 92/100/100/100, desktop 100/100/100/100)
- [x] T8.3 Teste manual 375 / 768 / 1280. Sem scroll horizontal
- [x] T8.4 Teclado: tab order, `focus-visible` visível em tudo
- [x] T8.5 Link WhatsApp abre com mensagem certa em cada CTA e em cada card
- [x] T8.6 Teste UTM: `/?utm_source=instagram&utm_medium=stories&utm_campaign=agenda_aberta`
- [ ] T8.7 Revisão Tech Lead (re-render, memory leak, promise sem catch)
- [ ] T8.9 `README.md` em português (ver §0 README). Commit: `docs: adiciona README do projeto`

### F9 — Deploy
- [ ] T9.0 **Go-live blocker:** substituir depoimentos DEMO por reais ou esvaziar `TESTIMONIALS` (seção some sozinha)
- [ ] T9.1 VPS Ubuntu, Node LTS, PM2 (`pm2 start npm --name "landing-evelyn" -- start`)
- [ ] T9.2 Nginx proxy reverso 80/443 → 3000
- [ ] T9.3 Certbot (Let's Encrypt) + renovação
- [ ] T9.4 GitHub Actions: SSH → `git pull` → `npm ci && npm run build` → `pm2 reload landing-evelyn`
- [ ] T9.5 Secrets no GitHub (host, user, key). `.env` de produção no servidor
- [ ] T9.6 DNS do domínio + smoke test em produção

---

## 8. Pendências / perguntas abertas

| # | Pergunta | Dono | Bloqueia |
|---|---|---|---|
| ~~Q1~~ | ~~Número WhatsApp~~ RESOLVIDO: (62) 9 9381-8529 (oficial, confirmado por Eduardo) | — | — |
| Q2 | Foto "Sobre" tratada a partir do print. Original sem overlay + mais fotos melhoram a qualidade (opcional) | Evelyn | — |
| Q3 | Depoimentos reais (autorizados). Hoje: DEMO sinalizado | Evelyn | T9.0 |
| Q4 | Endereço vem do Google (Av. João Florentino, Q.09 L.20, Portal do Cerrado). Horário próprio dela (clínica abre seg-sex 7h-17h30) e se atende online: confirmar | Evelyn | FAQ, Footer |
| Q5 | Formação, CRN, método, tempo de atuação | Evelyn | T5.5 |
| Q6 | Domínio `evelynrafaelanutri.com.br` existe? Qual provedor DNS? | Eduardo | F9 |
| Q7 | Ids GA4 e Meta Pixel | Eduardo | T6.2 |
| Q8 | VPS definida? (provedor, acesso SSH) | Eduardo | F9 |
| Q9 | Dourado `#A8895B` implementado. Avaliar visualmente e ajustar | Eduardo | — |
| ~~Q10~~ | ~~Repo GitHub~~ RESOLVIDO: criado por `gh` | — | — |

Regra: pendência não bloqueia fase inteira. Seguir com placeholder `TODO(evelyn)` e fechar depois.

## 9. Log de manutenção

Formato: `AAAA-MM-DD — tarefa(s) — resumo curto`. Mais recente no topo.

- 2026-10-01 — T5.11, T5.12 — redesign (Fraunces + Jost, fotos novas, animações, nova seção Como é a consulta, ícone da marca). Lighthouse mobile 92/100/100/100, desktop 99+/100/100/100.
- 2026-10-01 — T8.2, T8.4, T8.10 — Lighthouse mobile 92/100/100/100 e desktop 100/100/100/100. Teclado: 32 paradas de Tab, todas com foco visível, banner e menu operáveis por teclado. Correções de heurísticas (cookies, 404, toque, contraste).
- 2026-10-01 — F1–F7, T8.1/T8.3/T8.5/T8.6 — página completa (Header, Hero, Diferenciais, Serviços, Sobre, Depoimentos DEMO, FAQ, CTA, Footer), LGPD, tracking, SEO. Build limpo. UTM validado. Fotos tratadas.
- 2026-10-01 — §0 — regras de commit em português + tarefa README (T8.9) adicionadas.
- 2026-10-01 — T0.1–T0.3 — planner e canvas criados. Código ainda não iniciado.

## 10. Como atualizar o canvas (`progresso.canvas`)

**Automático:** `python3 scripts/atualizar-canvas.py` lê as tarefas deste arquivo (§7) e as pendências (§8) e regenera o canvas. Rodar depois de editar o planner.

**Painel web:** `python3 scripts/gerar-painel.py` gera `painel-progresso.html`. Publicado como Artifact (privado): https://claude.ai/artifact/6a27ayr2zaiTwm3GB5XUbG . Para atualizar: rodar o script e republicar o mesmo arquivo.

Manual (fallback):

Abrir no Obsidian. Um nó por fase (F0–F9) + nó "Agora" + nó "Pendências".
Ao mudar status de tarefa:
1. Editar checklist dentro do nó da fase (`- [x]`).
2. Ajustar cor do nó da fase: sem cor = a fazer · amarelo (3) = em andamento · verde (4) = concluída · vermelho (1) = bloqueada.
3. Atualizar nó "Agora" (tarefa atual + próxima).
4. Atualizar nó "Pendências" se Q fechou.
5. Reler JSON: IDs únicos, `fromNode`/`toNode` válidos.
