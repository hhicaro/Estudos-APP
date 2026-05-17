"""
Lembra de fazer backup periódico! Este script empacota os JSONs do syllabus
+ as instruções pra exportar do navegador.

Uso: python _backup_completo.py
Gera: backup_sedes_AAAA-MM-DD.zip (na mesma pasta)
"""
import json
import zipfile
from datetime import date
from pathlib import Path

AQUI = Path(__file__).parent
DATA = date.today().isoformat()
SAIDA = AQUI / f"backup_sedes_{DATA}.zip"

ARQUIVOS_SOURCE = [
    "syllabus_contador.json",
    "syllabus_tecnico.json",
    "prioridade.html",
    "index_contador.html",
    "index_tecnico.html",
    "horas_liquidas.html",
    "script_contador.js",
    "script_tecnico.js",
    "fsrs-core.js",
    "style.css",
]

INSTRUCAO_LS = """
# Como restaurar seus dados do navegador

Os dados do FSRS (progresso de revisão) e do Hora do Foco ficam no
localStorage do seu navegador, NÃO neste ZIP. Pra fazer backup deles:

## FSRS (progresso dos cards)
1. Abra index_contador.html no Chrome/Edge
2. Clique no botão "Salvar" no topo
3. Salve o arquivo .json na pasta backup/
4. Repita pra index_tecnico.html

## Hora do Foco (horas líquidas)
1. Abra horas_liquidas.html
2. Vá em Timer, depois ↓ Backup (canto inferior direito)
3. Salve o arquivo .json na pasta backup/

## Pra restaurar
Use os botões "Carregar" / "↑ Restaurar" nos respectivos apps.
"""


def main():
    with zipfile.ZipFile(SAIDA, "w", zipfile.ZIP_DEFLATED) as z:
        for nome in ARQUIVOS_SOURCE:
            origem = AQUI / nome
            if origem.exists():
                z.write(origem, arcname=nome)
                print(f"+ {nome} ({origem.stat().st_size} bytes)")
            else:
                print(f"  (pulado) {nome} não encontrado")
        z.writestr("INSTRUCOES_RESTAURAR.md", INSTRUCAO_LS)
    print(f"\n✅ Backup gerado: {SAIDA.name} ({SAIDA.stat().st_size//1024} KB)")
    print(f"📂 Caminho: {SAIDA}")


if __name__ == "__main__":
    main()
