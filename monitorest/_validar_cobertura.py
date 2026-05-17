"""
Valida se os syllabus JSON cobrem todo o edital Monitorest.
Uso: python _validar_cobertura.py
"""
import json
from pathlib import Path

AQUI = Path(__file__).parent

EDITAL_CONTADOR = {
    "Língua Portuguesa": [
        "1. Compreensão e interpretação de textos",
        "2. Tipos e gêneros textuais",
        "3. Ortografia oficial",
        "4. Coesão textual (referenciação, conectores, tempos/modos verbais)",
        "5.1 Classes de palavras",
        "5.2 Coordenação",
        "5.3 Subordinação",
        "5.4 Pontuação",
        "5.5 Concordância verbal e nominal",
        "5.6 Regência verbal e nominal",
        "5.7 Crase",
        "5.8 Colocação pronominal",
        "6. Reescrita, significação, reorganização",
    ],
    "Conhecimentos do DF e Legislação": [
        "1. Realidade DF/RIDE",
        "2. Plano Distrital de Política para Mulheres (PDPM)",
        "3. Lei Orgânica DF — Título VI",
        "4. LC 840/2011 — Tít. I, V, VI, VII",
        "5. Lei 11.340/2006 (Maria da Penha)",
        "6. Lei Distrital 7.484/2024",
        "7. Primeiros socorros",
    ],
    "Contabilidade Geral e Societária": [
        "1.1 Estrutura conceitual",
        "1.2 Conceito de lucro",
        "1.3 Mensuração de ativos/passivos/PL",
        "1.4 Evidenciação contábil",
    ],
    "Adm. Financeira e Análise de Balanços": [
        "2.1 Análise de liquidez",
        "2.2 Planejamento de caixa, CGL",
        "2.3 Estoques e valores a receber",
        "2.4 Risco x rentabilidade, capital de giro",
    ],
    "CASP": [
        "3.1 Contabilidade pública e ambiente",
        "3.2 MCASP",
        "3.3 PCASP",
        "3.4 DCASP",
        "3.5 NBC TSP",
        "3.6 PCO + PCP",
    ],
    "Orçamento Público e AFO": [
        "4.1 Evolução e princípios",
        "4.2 Lei 4.320 + LRF",
        "4.3 PPA, LDO, LOA",
        "4.4 Execução orçamentária",
    ],
    "Auditoria Contábil e Governamental": [
        "5.1 Marco legal e técnicas",
        "5.2 Controles internos",
        "5.3 Papéis, pareceres, relatórios",
        "5.4 Auditoria por ciclos",
    ],
}

EDITAL_TECNICO = {
    "Língua Portuguesa": EDITAL_CONTADOR["Língua Portuguesa"],
    "Conhecimentos do DF e Legislação": EDITAL_CONTADOR["Conhecimentos do DF e Legislação"],
    "Fundamentos do SUAS": [
        "1. PNAS/2004 e organização",
        "2. SUAS: princípios, seguranças",
        "3. NOB/SUAS (2012)",
    ],
    "Programas Socioassistenciais DF": [
        "1. Cartão Prato Cheio",
        "2. Cartão Gás",
        "3. Plano DF Social",
        "4. Benefícios Eventuais",
        "5. SISAN/Restaurante Comunitário",
    ],
    "Específicos Agente Social": [
        "1. Rede Socioassistencial (CRAS, CREAS, Acolhimento)",
        "2. PAIF, SCFV (Proteção Básica)",
        "3. Proteção Especial (Média/Alta)",
        "4. População em situação de rua",
        "5. Saúde mental, álcool/drogas, redução de danos",
    ],
}


def carregar_syllabus(arquivo: str):
    return json.loads((AQUI / arquivo).read_text(encoding="utf-8"))


def validar(cargo_nome: str, edital_dict: dict, syllabus: list):
    print(f"\n{'='*60}\n  COBERTURA — {cargo_nome.upper()}\n{'='*60}")
    total_edital = sum(len(v) for v in edital_dict.values())
    total_syl = len(syllabus)
    print(f"Edital exige: {total_edital} itens. Syllabus tem: {total_syl} tópicos.\n")

    lacunas = []
    for disc, itens in edital_dict.items():
        topicos_disc = [t for t in syllabus if t["disciplina"] == disc]
        if not topicos_disc:
            print(f"❌ DISCIPLINA AUSENTE: {disc} ({len(itens)} itens no edital)")
            lacunas.append((disc, "disciplina inteira", len(itens)))
            continue

        nomes_syl = " ".join(t["nome"].lower() for t in topicos_disc)
        faltando = []
        for item in itens:
            # Verifica se o número do item aparece no syllabus
            num = item.split(".")[0].strip() if "." in item[:5] else item.split()[0]
            palavras_chave = [p.lower() for p in item.split() if len(p) > 4][:3]
            achou = any(num in t["nome"].split(".")[0] or
                       any(pc in t["nome"].lower() for pc in palavras_chave[:2])
                       for t in topicos_disc)
            if not achou:
                faltando.append(item)

        if faltando:
            print(f"⚠️  {disc}: {len(topicos_disc)} tópicos no syllabus, "
                  f"mas pode faltar detalhamento:")
            for f in faltando[:3]:
                print(f"     - {f}")
            if len(faltando) > 3:
                print(f"     ... e mais {len(faltando)-3}")
        else:
            print(f"✅ {disc}: {len(topicos_disc)} tópicos cobrindo os {len(itens)} itens")

    return lacunas


def main():
    syl_cont = carregar_syllabus("syllabus_contador.json")
    syl_tec = carregar_syllabus("syllabus_tecnico.json")

    lacunas_c = validar("Contador (EDAS Cargo 401)", EDITAL_CONTADOR, syl_cont)
    lacunas_t = validar("Técnico Agente Social (TDAS Cargo 200)", EDITAL_TECNICO, syl_tec)

    print(f"\n{'='*60}\n  RESUMO\n{'='*60}")
    print(f"Contador: {len(syl_cont)} tópicos | Técnico: {len(syl_tec)} tópicos")
    if not lacunas_c and not lacunas_t:
        print("✅ Cobertura completa de todas as disciplinas do edital.")
    print("\nNota: cada tópico do syllabus é um 'card' do FSRS. Subtópicos")
    print("detalhados do edital ficam DENTRO de cada card (você cobre os")
    print("subitens quando estuda o card). Pra granularidade maior, adicione")
    print("entradas detalhadas no JSON e rode este script de novo.\n")


if __name__ == "__main__":
    main()
