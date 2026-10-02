#!/usr/bin/env python3
"""Gera painel-progresso.html (publicável como Artifact) a partir de planner.md. Uso: python3 scripts/gerar-painel.py"""
import html, re
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
planner = (ROOT / "planner.md").read_text(encoding="utf-8")

phases = []
for m in re.finditer(r"^### (F\d+) — (.+?)\n(.*?)(?=^### F\d+ —|^## 8\.)", planner, re.S | re.M):
    code, name, body = m.groups()
    phases.append((code, name.strip(), re.findall(r"^- \[(.)\] (T[\d.]+) (.+)$", body, re.M)))

pend = []
sec8 = re.search(r"## 8\..*?\n(.*?)\n## 9\.", planner, re.S)
for line in (sec8.group(1).splitlines() if sec8 else []):
    m = re.match(r"\| (~~)?(Q\d+)(~~)? \| (.+?) \| (.+?) \| (.+?) \|", line)
    if m: pend.append((m.group(2), bool(m.group(1)), m.group(4), m.group(5)))

log = re.findall(r"^- (\d{4}-\d{2}-\d{2}) — (.+)$", (re.search(r"## 9\..*?\n(.*?)\n## 10\.", planner, re.S) or [None, ""])[1], re.M)

clean = lambda t: html.escape(re.sub(r"[`*~]", "", t))
total = sum(len(t) for _, _, t in phases); done = sum(1 for _, _, ts in phases for t in ts if t[0] == "x")
pct = round(100 * done / total) if total else 0
todo = [(c, t) for c, _, ts in phases for t in ts if t[0] == " "]
now = todo[0] if todo else None

def state(ts):
    m = [t[0] for t in ts]
    if "!" in m: return "bloqueada", "Bloqueada"
    if all(x == "x" for x in m): return "ok", "Concluída"
    if "~" in m or "x" in m: return "andamento", "Em andamento"
    return "fazer", "A fazer"

cards = []
for code, name, ts in phases:
    cls, label = state(ts); d = sum(1 for t in ts if t[0] == "x")
    items = "".join(
        f'<li class="t t-{ {"x":"x","~":"p","!":"b"," ":"o"}[t[0]] }"><span class="box" aria-hidden="true"></span><span><b>{t[1]}</b> {clean(t[2])}</span></li>'
        for t in ts)
    cards.append(f'<article class="fase {cls}"><header><span class="cod">{code}</span><h3>{clean(name)}</h3><span class="pill">{label}</span></header>'
                 f'<div class="bar" role="img" aria-label="{d} de {len(ts)} tarefas"><i style="width:{round(100*d/len(ts)) if ts else 0}%"></i></div>'
                 f'<p class="cnt">{d}/{len(ts)} tarefas</p><ul>{items}</ul></article>')

pend_html = "".join(
    f'<li class="{"res" if r else ""}"><b>{q}</b><span>{clean(txt)}</span><em>{clean(who)}</em></li>' for q, r, txt, who in pend)
log_html = "".join(f'<li><time>{d}</time><span>{clean(t)}</span></li>' for d, t in log)
now_html = f'<b>{now[1][1]}</b> {clean(now[1][2])}' if now else "Tudo concluído"

page = f'''<title>Painel LP Evelyn</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Lato:wght@400;700&display=swap">
<style>
/* Layout: cabeçalho com progresso global, faixa Agora/Pendências, grade de fases em colunas */
:root {{ --bg:#fdfbf7; --surface:#ffffff; --fg:#2c4027; --muted:#5f6b5a; --line:rgba(44,64,39,.16); --gold:#a8895b; --gold-ink:#7d6334; --ok:#2f7d3a; --warn:#a8791f; --bad:#a8332a; --okbg:rgba(47,125,58,.1); --warnbg:rgba(168,121,31,.12); --badbg:rgba(168,51,42,.1);
  --display:"Cormorant Garamond",Georgia,serif; --body:"Lato",system-ui,sans-serif; }}
@media (prefers-color-scheme: dark) {{ :root:not([data-theme="light"]) {{ --bg:#141a12; --surface:#1b2318; --fg:#eef0e6; --muted:#a3ad9d; --line:rgba(238,240,230,.16); --gold:#c4a574; --gold-ink:#c4a574; --ok:#74c27f; --warn:#d9a845; --bad:#e07a70; --okbg:rgba(116,194,127,.12); --warnbg:rgba(217,168,69,.14); --badbg:rgba(224,122,112,.12); color-scheme:dark; }} }}
:root[data-theme="dark"] {{ --bg:#141a12; --surface:#1b2318; --fg:#eef0e6; --muted:#a3ad9d; --line:rgba(238,240,230,.16); --gold:#c4a574; --gold-ink:#c4a574; --ok:#74c27f; --warn:#d9a845; --bad:#e07a70; --okbg:rgba(116,194,127,.12); --warnbg:rgba(217,168,69,.14); --badbg:rgba(224,122,112,.12); color-scheme:dark; }}
* {{ box-sizing:border-box; }}
body {{ background:var(--bg); color:var(--fg); font:15px/1.55 var(--body); margin:0; padding-inline:max(16px,4vw); padding-block:32px 64px; }}
main {{ max-width:1200px; margin:0 auto; display:grid; gap:32px; }}
h1,h2,h3 {{ font-family:var(--display); font-weight:600; letter-spacing:-.01em; margin:0; text-wrap:balance; }}
.top {{ display:grid; gap:20px; grid-template-columns:minmax(0,1.4fr) minmax(0,1fr); align-items:end; border-bottom:1px solid var(--line); padding-bottom:24px; }}
.eyebrow {{ font-size:11px; font-weight:700; letter-spacing:.24em; text-transform:uppercase; color:var(--gold-ink); margin:0 0 8px; }}
h1 {{ font-size:clamp(34px,6vw,56px); line-height:1.02; }}
.glob b {{ font:600 44px/1 var(--display); font-variant-numeric:tabular-nums; }}
.glob span {{ color:var(--muted); margin-left:6px; }}
.glob .bar {{ margin-top:12px; height:8px; }}
.bar {{ height:6px; background:var(--line); border-radius:99px; overflow:hidden; }}
.bar i {{ display:block; height:100%; background:var(--ok); border-radius:99px; }}
.faixa {{ display:grid; gap:16px; grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr)); }}
.box2 {{ background:var(--surface); border:1px solid var(--line); padding:20px; min-width:0; }}
.box2 h2 {{ font-size:22px; margin-bottom:12px; }}
.now {{ font-size:17px; }} .now b {{ color:var(--gold-ink); }}
ul {{ list-style:none; margin:0; padding:0; }}
.pend li {{ display:grid; grid-template-columns:auto 1fr; gap:2px 10px; padding:8px 0; border-top:1px solid var(--line); font-size:14px; }}
.pend li:first-child {{ border-top:0; }} .pend b {{ color:var(--gold-ink); }} .pend em {{ grid-column:2; color:var(--muted); font-style:normal; font-size:12px; }}
.pend li.res span {{ text-decoration:line-through; color:var(--muted); }}
.fases {{ display:grid; gap:16px; grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr)); }}
.fase {{ background:var(--surface); border:1px solid var(--line); padding:18px; min-width:0; border-top:3px solid var(--line); }}
.fase.ok {{ border-top-color:var(--ok); }} .fase.andamento {{ border-top-color:var(--warn); }} .fase.bloqueada {{ border-top-color:var(--bad); }}
.fase header {{ display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }}
.cod {{ font:600 13px var(--body); color:var(--gold-ink); letter-spacing:.12em; }}
.fase h3 {{ font-size:23px; flex:1; }}
.pill {{ font-size:11px; font-weight:700; padding:2px 8px; border-radius:99px; background:var(--line); color:var(--muted); }}
.ok .pill {{ background:var(--okbg); color:var(--ok); }} .andamento .pill {{ background:var(--warnbg); color:var(--warn); }} .bloqueada .pill {{ background:var(--badbg); color:var(--bad); }}
.fase .bar {{ margin:14px 0 6px; }} .cnt {{ margin:0 0 12px; font-size:12px; color:var(--muted); font-variant-numeric:tabular-nums; }}
.t {{ display:flex; gap:10px; padding:5px 0; font-size:13.5px; }} .t b {{ font-variant-numeric:tabular-nums; color:var(--muted); font-weight:700; margin-right:4px; }}
.box {{ flex:none; width:14px; height:14px; margin-top:3px; border:1.5px solid var(--muted); border-radius:3px; }}
.t-x .box {{ background:var(--ok); border-color:var(--ok); position:relative; }} .t-x .box::after {{ content:""; position:absolute; left:3px; top:0; width:4px; height:8px; border:solid var(--bg); border-width:0 2px 2px 0; transform:rotate(45deg); }}
.t-x {{ color:var(--muted); }} .t-p .box {{ border-color:var(--warn); background:var(--warnbg); }} .t-b .box {{ border-color:var(--bad); }}
.log li {{ display:grid; grid-template-columns:96px 1fr; gap:12px; padding:8px 0; border-top:1px solid var(--line); font-size:14px; }}
.log li:first-child {{ border-top:0; }} time {{ color:var(--muted); font-variant-numeric:tabular-nums; }}
footer {{ color:var(--muted); font-size:13px; }} footer a {{ color:var(--gold-ink); }}
a:focus-visible {{ outline:2px solid var(--gold); outline-offset:2px; }}
@media (max-width:720px) {{ .top {{ grid-template-columns:1fr; }} .log li {{ grid-template-columns:1fr; gap:2px; }} }}
</style>
<main>
  <section class="top">
    <div><p class="eyebrow">Landing page · Nutricionista</p><h1>LP Evelyn Rafaela</h1></div>
    <div class="glob"><b>{pct}%</b><span>{done} de {total} tarefas</span><div class="bar" role="img" aria-label="{pct}% concluído"><i style="width:{pct}%"></i></div></div>
  </section>
  <section class="faixa">
    <div class="box2"><h2>Agora</h2><p class="now">{now_html}</p></div>
    <div class="box2"><h2>Pendências</h2><ul class="pend">{pend_html}</ul></div>
  </section>
  <section><div class="fases">{"".join(cards)}</div></section>
  <section class="box2"><h2>Histórico</h2><ul class="log">{log_html}</ul></section>
  <footer>Gerado do planner.md em {date.today().strftime("%d/%m/%Y")}. Repositório: <a href="https://github.com/edudiaspf18/lp-evelyn-rafaela" target="_blank" rel="noopener noreferrer">edudiaspf18/lp-evelyn-rafaela</a> (privado).</footer>
</main>
'''
(ROOT / "painel-progresso.html").write_text(page, encoding="utf-8")
print("painel ok:", done, "/", total)
