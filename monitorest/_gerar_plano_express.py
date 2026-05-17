"""
Gera plano_express_27dias.md a partir dos syllabus JSON.
Ordena tópicos por score (relevância × peso) e distribui em 27 dias.
Uso: python _gerar_plano_express.py
"""
import json
from datetime import date, timedelta
from pathlib import Path

AQUI = Path(__file__).parent
DIAS = 27
INICIO = date.today()


def carregar(arquivo):
    return json.loads((AQUI / arquivo).read_text(encoding="utf-8"))


def gerar_plano(syl, cargo_nome, min_relev=3):
    scored = [{**t, "score": t["relevancia"] * t["peso"]} for t in syl
              if t["relevancia"] >= min_relev]
    scored.sort(key=lambda t: (-t["score"], -t["relevancia"]))
    slots = max(1, -(-len(scored) // DIAS))

    md = [f"# Plano Express {DIAS} dias — {cargo_nome}",
          f"\nGerado em: **{date.today().strftime('%d/%m/%Y')}**",
          f"Total: **{len(scored)} tópicos** (relevância ≥{min_relev}) "
          f"distribuídos em **{slots} tópicos/dia**\n"]

    DOW = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"]
    for d in range(DIAS):
        dia = INICIO + timedelta(days=d)
        topicos = scored[d * slots:(d + 1) * slots]
        if not topicos:
            break
        md.append(f"\n## D{d+1} · {dia.strftime('%d/%m')} ({DOW[dia.weekday()]})")
        for t in topicos:
            estrelas = "⭐" * t["relevancia"]
            md.append(f"- {estrelas} **{t['disciplina']}** — {t['nome']} "
                      f"(score {t['score']})")
    return "\n".join(md)


def main():
    for arq, nome in [("syllabus_contador.json", "Contador (Ciências Contábeis)"),
                       ("syllabus_tecnico.json", "Técnico Agente Social")]:
        syl = carregar(arq)
        md = gerar_plano(syl, nome)
        saida = AQUI / f"plano_express_{arq.replace('syllabus_', '').replace('.json', '')}.md"
        saida.write_text(md, encoding="utf-8")
        print(f"✅ {saida.name} gerado ({len(md)} chars)")


if __name__ == "__main__":
    main()
