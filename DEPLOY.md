# Deploy (VPS Ubuntu + PM2 + Nginx + Certbot)

Tudo que o servidor precisa já está em `deploy/`. O que depende de acesso (VPS, domínio, secrets) é feito uma vez, na ordem abaixo.

## 1. Servidor (uma vez)

```bash
ssh usuario@IP_DO_VPS
git clone <url-ssh-do-repo> /tmp/lp && bash /tmp/lp/deploy/server-setup.sh <url-ssh-do-repo>
```

O script instala Node 22, PM2, Nginx e Certbot, libera o firewall, faz o build e sobe o app como `landing-evelyn` na porta 3000. Rode o comando `sudo` que o `pm2 startup` imprimir, para o app voltar após reboot.

O servidor precisa de acesso de leitura ao repositório privado. A *deploy key* (somente leitura) já está cadastrada no GitHub; a chave privada está na máquina do Eduardo em `~/.ssh/lp_evelyn_pull`. Antes de rodar o script, envie-a ao servidor:

```bash
scp ~/.ssh/lp_evelyn_pull usuario@IP_DO_VPS:~/.ssh/lp_evelyn_pull
```

## 2. Variáveis de ambiente

No servidor, em `/var/www/landing-evelyn/.env` (nunca vai ao Git). O `server-setup.sh` cria o arquivo a partir do `.env.example`; depois edite com `nano /var/www/landing-evelyn/.env` para colocar `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID`. As `NEXT_PUBLIC_*` são embutidas no build, então rode `npm run build` e `pm2 reload landing-evelyn` depois de alterar.

## 3. DNS e HTTPS

1. No provedor do domínio, crie registros **A** de `evelynrafaelanutri.com.br` e `www` para o IP do VPS.
2. Com o DNS propagado: `sudo certbot --nginx -d evelynrafaelanutri.com.br -d www.evelynrafaelanutri.com.br`. A renovação é automática (timer do Certbot). Teste com `sudo certbot renew --dry-run`.

O Nginx redireciona o domínio sem `www` para `https://www...`, que é o canônico do `NEXT_PUBLIC_SITE_URL`.

## 4. CI/CD (GitHub Actions)

`.github/workflows/deploy.yml` roda lint, `tsc` e build em todo push/PR. Em push na `main`, entra no servidor por SSH e faz `git pull`, `npm ci`, `npm run build` e `pm2 reload`.

**Já cadastrados no GitHub:** `SSH_KEY` (chave privada `~/.ssh/lp_evelyn_actions`) e `SSH_PORT`. Faltam `SSH_HOST` e `SSH_USER`, que dependem do VPS:

```bash
gh secret set SSH_HOST --body "IP_DO_VPS"
gh secret set SSH_USER --body "usuario_do_deploy"
gh variable set DEPLOY_ENABLED --body "true"
```

Coloque a chave **pública** no servidor, em `~/.ssh/authorized_keys` do usuário de deploy:

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIMpyKqz7e/Tpvq80xEb/4IimKw6u3v1YMoLwyENuL9EI gh-actions-lp-evelyn
```

Referência dos secrets (*Settings → Secrets and variables → Actions*):

| Secret | Valor |
|---|---|
| `SSH_HOST` | IP ou host do VPS |
| `SSH_USER` | usuário do deploy |
| `SSH_KEY` | chave privada SSH (par cuja pública está em `~/.ssh/authorized_keys` do servidor) |
| `SSH_PORT` | opcional, padrão 22 |

Por fim, em *Variables* crie `DEPLOY_ENABLED` = `true`. Enquanto ela não existir, o CI roda (lint, tipos, build) mas o deploy fica desligado.

## 5. Smoke test

- `https://www.evelynrafaelanutri.com.br` abre com cadeado.
- `/sitemap.xml`, `/robots.txt` e `/privacidade` respondem.
- Botões de WhatsApp abrem a conversa com a mensagem pronta.
- Banner de cookies aparece na primeira visita.
- Rode o Lighthouse no domínio.

## Antes de publicar

- Trocar os **depoimentos de exemplo** por reais, ou esvaziar `TESTIMONIALS` em `src/data/content.ts`.
- Informar `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID`, se for medir.
