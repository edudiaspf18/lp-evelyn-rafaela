#!/usr/bin/env python3
"""Regenera progresso.canvas a partir de planner.md (§7 tarefas, §8 pendências). Uso: python3 scripts/atualizar-canvas.py"""
import json, re, secrets
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
planner = (ROOT / "planner.md").read_text(encoding="utf-8")

# fases + tarefas
phases = []
for m in re.finditer(r"^### (F\d+) — (.+?)\n(.*?)(?=^### F\d+ —|^## 8\.)", planner, re.S | re.M):
    code, name, body = m.groups()
    tasks = re.findall(r"^- \[(.)\] (T[\d.]+) (.+)$", body, re.M)
    phases.append((code, name.strip(), tasks))

def short(t):  # remove markdown e corta
    t = re.sub(r"[`*]", "", t)
    return t if len(t) <= 46 else t[:44] + "…"

def status(tasks):
    marks = [t[0] for t in tasks]
    if "!" in marks: return "1", "BLOQUEADA"
    if all(x == "x" for x in marks): return "4", "CONCLUÍDA"
    if "~" in marks or "x" in marks: return "3", "EM ANDAMENTO"
    return None, "A FAZER"

# pendências abertas (§8): linhas sem ~~Qn~~
pend = []
sec8 = re.search(r"## 8\..*?\n(.*?)\n## 9\.", planner, re.S)
for line in (sec8.group(1).splitlines() if sec8 else []):
    m = re.match(r"\| (Q\d+) \| (.+?) \|", line)
    if m: pend.append(f"- {m.group(1)} {short(m.group(2))}")

# agora / próxima
flat = [(c, t) for c, _, ts in phases for t in ts]
doing = [x for x in flat if x[1][0] == "~"]
todo = [x for x in flat if x[1][0] == " "]
cur = doing[0] if doing else (todo[0] if todo else None)
nxt = [x for x in todo if x != cur][:1]
fmt = lambda x: f"{x[1][1]} {short(x[1][2])}" if x else "—"

nid = lambda: secrets.token_hex(8)
W, H, GX, GY, TOP = 320, 360, 60, 80, 330
nodes, edges, ids = [], [], {}
for i, (code, name, tasks) in enumerate(phases):
    row, col = divmod(i, 5)
    color, label = status(tasks)
    done = sum(1 for t in tasks if t[0] == "x")
    lines = "\n".join(f"- [{t[0]}] {t[1]} {short(t[2])}" for t in tasks)
    n = {"id": nid(), "type": "text", "x": col * (W + GX), "y": TOP + row * (H + GY), "width": W, "height": H,
         "text": f"## {code} · {name}\n**{label}** ({done}/{len(tasks)})\n\n{lines}"}
    if color: n["color"] = color
    nodes.append(n); ids[code] = n["id"]

total = sum(len(t) for _, _, t in phases); done_all = sum(1 for _, _, ts in phases for t in ts if t[0] == "x")
pct = round(100 * done_all / total) if total else 0
full_w = 5 * W + 4 * GX
hdr = {"id": nid(), "type": "text", "x": 0, "y": 0, "width": 700, "height": 280, "color": "4",
       "text": f"# LP Evelyn Rafaela · Progresso\n**{done_all}/{total} tarefas ({pct}%)**\n\nNext.js + TS + Tailwind + Shadcn. Alvo: agendamento via WhatsApp.\n\nLegenda: sem cor = a fazer · amarelo = em andamento · verde = concluída · vermelho = bloqueada\n\nFonte da verdade: `planner.md`. Rodar `python3 scripts/atualizar-canvas.py` após editar."}
now = {"id": nid(), "type": "text", "x": 760, "y": 0, "width": 420, "height": 280, "color": "3",
       "text": f"## AGORA\n**Tarefa:** {fmt(cur)}\n**Próxima:** {fmt(nxt[0] if nxt else None)}\n\n_Atualizado: {date.today().isoformat()}_"}
pn = {"id": nid(), "type": "text", "x": 1240, "y": 0, "width": full_w - 1240, "height": 280, "color": "1",
      "text": "## Pendências\n" + ("\n".join(pend) if pend else "nenhuma") + "\n\nVer planner.md §8"}
nodes += [hdr, now, pn]

codes = [p[0] for p in phases]
for i in range(len(codes) - 1):
    a, b = codes[i], codes[i + 1]
    sides = ("bottom", "top") if i == 4 else ("right", "left")
    edges.append({"id": nid(), "fromNode": ids[a], "fromSide": sides[0], "toNode": ids[b], "toSide": sides[1], "toEnd": "arrow"})

allids = [n["id"] for n in nodes] + [e["id"] for e in edges]
assert len(allids) == len(set(allids))
(ROOT / "progresso.canvas").write_text(json.dumps({"nodes": nodes, "edges": edges}, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"canvas ok: {done_all}/{total} tarefas, {len(nodes)} nós")
