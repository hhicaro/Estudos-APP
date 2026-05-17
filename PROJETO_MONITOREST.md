# Projeto Monitorest — Handoff Document

Documento de contexto pra retomar este projeto em outra sessão de IA (Claude, Gemini, etc).
Última atualização: 17/05/2026.

---

## 1. Visão geral

**Nome:** Monitorest (originalmente "SEDES-DF", renomeado pra ser reutilizável em outros concursos).

**O que é:** plataforma web local (HTML/JS/CSS puros) para acompanhamento de estudos de concurso público, integrando 3 componentes:

1. **Painel de Prioridades** (`prioridade.html`) — visão geral do edital, com pesos, cronograma e Plano Express 27 dias
2. **Apps FSRS** (`index_contador.html`, `index_tecnico.html`) — flashcards com algoritmo de repetição espaçada (FSRS) por cargo
3. **Hora do Foco** (`horas_liquidas.html`) — pomodoro timer + tracker de horas líquidas por matéria

**Concurso atual:** SEDES-DF 2026 (Quadrix), prova 06/09/2026.
- Cargo 401 (EDAS Ciências Contábeis) → "Contador" no app
- Cargo 200 (TDAS Agente Social) → "Técnico" no app
- Inscrição PCD: 09/06–13/07; Laudo (Anexo III): 08/06–14/07; Pagamento: 14/07.

**Usuário:** Hícaro (hhicaro). GitHub: hhicaro. Estuda os DOIS cargos (Contador é prioridade — área de formação).

---

## 2. Estrutura de pastas

```
C:\Users\teste\OneDrive\Área de Trabalho\Programas de estudo\Estudos-APP\
├── .git/                       ← repo conectado ao GitHub
├── README.md
├── push_para_github.bat        ← script de commit+push automático
├── PROJETO_MONITOREST.md       ← este arquivo
└── monitorest/                 ← código da plataforma
    ├── index.html              ← página principal (painel) [ex-prioridade.html]
    ├── horas_liquidas.html     ← pomodoro
    ├── app_contador.html       ← FSRS Contador [ex-index_contador.html]
    ├── app_tecnico.html        ← FSRS Técnico [ex-index_tecnico.html]
    ├── script_contador.js      ← lógica FSRS Contador (~2300 linhas)
    ├── script_tecnico.js       ← lógica FSRS Técnico (~2300 linhas)
    ├── fsrs-core.js            ← engine FSRS (compartilhado)
    ├── style.css               ← estilos compartilhados FSRS
    ├── syllabus_contador.json  ← 40 tópicos com pesos curados do edital
    ├── syllabus_tecnico.json   ← 31 tópicos com pesos curados do edital
    ├── _validar_cobertura.py   ← valida JSON contra edital
    ├── _gerar_plano_express.py ← gera .md do plano de 27 dias
    ├── _backup_completo.py     ← empacota tudo em ZIP
    └── plano_express_*.md      ← outputs gerados pelo Python
```

---

## 3. Arquitetura técnica

### Frontend
- HTML/CSS/JS puros, **sem build step**
- Funciona aberto via `file://` ou em servidor estático (GitHub Pages, Vercel, Netlify)
- Sem framework — vanilla JS

### Persistência
- **localStorage do navegador** (sem backend)
- Chaves por cargo pra evitar conflito:
  - `editaliza_contador_personal_db` → progresso FSRS Contador
  - `editaliza_tecnico_personal_db` → progresso FSRS Técnico
  - `editaliza_contador_custom_syllabus_v1` → edits do syllabus Contador
  - `editaliza_tecnico_custom_syllabus_v1` → edits do syllabus Técnico
  - `editaliza_contador_custom_title_v1` / `editaliza_tecnico_custom_title_v1` → títulos customizados
  - `editaliza_theme` → tema claro/escuro (compartilhado)
  - `hl_sedes_df_2026` → dados do Hora do Foco (matérias + histórico de pomodoros)
  - `sedes_cargo` → último cargo selecionado em prioridade.html
  - `sedes_theme` → tema da página prioridade.html
- **Nota:** as chaves mantêm prefixo "sedes"/"editaliza" por compatibilidade com dados existentes. Renomear quebraria o histórico.
- Cada script tem auto-migração: se encontra dados na chave antiga sem namespace (`editaliza_personal_db`), copia pra chave nova do cargo.

### Engine de revisão espaçada
- **FSRS** (Free Spaced Repetition Scheduler) implementado em `fsrs-core.js`
- Cada tópico do edital = um "card"
- Usuário marca Errei (0), Difícil (1), Bom (2), Fácil (3) após estudar
- Algoritmo calcula próxima revisão com base em stability/difficulty
- **Reta Final** = filtro automático: quando faltam ≤15 dias pra prova, prioriza relevância ≥3

### Plano Express 27 dias
- Dinâmico (JS no `prioridade.html`), aba dentro de cada cargo
- Pega tópicos do syllabus com relevância ≥ N (filtro do usuário)
- Score = relevância × peso
- Distribui em 27 dias (~12/06/2026), 2 tópicos/dia
- Hardcoded inline em `prioridade.html` (variáveis `EXP_SYL_CONT` e `EXP_SYL_TEC` — **manter sincronizado com os JSONs**)

---

## 4. Decisões já tomadas

| Decisão | Por quê |
|---------|---------|
| Renomeado de "SEDES-DF" pra "Monitorest" | Reutilizável em outros concursos |
| Pasta `SEDES_FINAL/` → `monitorest/` | Mesmo motivo |
| Manter localStorage com prefixo `sedes_*` / `editaliza_*` | Não perder progresso salvo |
| 2 syllabus separados (Contador / Técnico) | Resolveu conflito quando ambos usavam mesma chave |
| HTML puro em vez de framework | Funciona offline, sem build |
| Storage local em vez de backend | Privacidade + zero custo + zero infra |
| Plano Express 27 dias hardcoded inline | Evita CORS issues com `file://` ao fazer fetch de JSON |
| H1 = "Monitorest" sozinho | Subtitle abaixo identifica o concurso atual |

---

## 5. O que está feito

✅ Painel prioridade.html com:
- Caixa de prazos críticos do edital (laudo PCD, pagamento, prova)
- Painel de horas líquidas dinâmico (lê do localStorage do Hora do Foco)
- 3 abas por cargo: Prioridade por Disciplina | Cronograma 113d | Plano Express 27d
- Toggle Contador/Técnico

✅ Apps FSRS (`index_*.html`):
- Carregam syllabus correto por cargo
- Calibração inicial
- Geração de cronograma diário
- Modo Reta Final (filtro relevância ≥3)
- Tema claro/escuro

✅ Hora do Foco:
- 3 abas (Timer / Matérias / Dashboard)
- Filtros por cargo (Todas / Contador / Técnico / Comuns)
- Pomodoro 25/45/50 min
- Export Excel + Backup JSON
- Ring 200px centralizado

✅ Scripts Python:
- `_validar_cobertura.py` confirma 100% de cobertura do edital
- `_gerar_plano_express.py` gera markdown do plano
- `_backup_completo.py` empacota tudo em ZIP

✅ Setup git:
- `.git/` inicializado em `Estudos-APP/`
- `push_para_github.bat` automatiza commit+push

---

## 6. O que está pendente

⏳ **Atualizar stats das abas de prioridade**: prioridade.html ainda mostra "57 tópicos Contador / 43 Técnico" — após reescrever os syllabus pra 40/31, esses números ficaram desatualizados.

⏳ **Trim do Cronograma 113d**: ele vai até dia 134 (data antiga da prova). Precisa cortar tudo após 06/09/2026.

⏳ **GitHub Pages**: configurar `Settings → Pages → main → /monitorest` pra publicar online.

⏳ **Supabase (sync entre dispositivos)**: sair do localStorage e usar Postgres do Supabase. Permite acessar do celular/tablet com mesmo progresso. Plano da Gemini está em `Projeto Reta Final SEDES-DF Recomen.txt`.

⏳ **Refatorar pra 1 script único + JSON por concurso**: hoje `script_contador.js` e `script_tecnico.js` são duplicatas. Idealmente 1 `script.js` genérico + `config_X.json` por concurso.

✅ **Renomear `prioridade.html` → `index.html`** (e `index_*.html` → `app_*.html`): feito em 17/05/2026. Todos os links internos atualizados.

⏳ **Pomodoro integrado dentro dos apps FSRS**: hoje horas_liquidas e index_* são separados; faria sentido unificar.

⏳ **Importação Excel TecConcursos**: usuário tem assinatura premium e pode baixar bases de questões. Falta script que parse o XLSX e crie banco de questões vinculado aos tópicos do syllabus.

---

## 7. Pesos curados do edital (Contador)

Score = relevância × peso. Ordem decrescente do top-15:

| Tópico | Disciplina | Score |
|--------|-----------|-------|
| 2. MCASP | CASP | 15 |
| 3. PCASP | CASP | 15 |
| 6. PCO + PCP | CASP | 15 |
| 2. Lei 4.320 + LRF | AFO | 15 |
| 4. Execução Orçamentária | AFO | 15 |
| 4. DCASP | CASP | 12 |
| 5. NBC TSP | CASP | 12 |
| 3. PPA, LDO, LOA | AFO | 12 |
| 1. Contab. Pública | CASP | 9 |
| 1. Princípios AFO | AFO | 9 |
| 1. Estrutura Conceitual (Cont. Geral) | CG | 9 |
| 3. Mensuração (Cont. Geral) | CG | 9 |
| 1. Marco Legal Auditoria | AUD | 9 |
| 5. Lei 11.340 (Maria da Penha) ⭐ | DF | 10 (peso 2, mín. 3 questões garantidas) |
| 6. Lei Distrital 7.484/2024 | DF | 8 |

## 8. Pesos curados do edital (Técnico)

| Tópico | Disciplina | Score |
|--------|-----------|-------|
| 1. PNAS/2004 | SUAS | 15 |
| 2. SUAS Princípios | SUAS | 15 |
| 4. Benefícios Eventuais | Programas DF | 15 |
| 1. CRAS, CREAS, Acolhimento | Ag. Social | 15 |
| 2. PAIF, SCFV | Ag. Social | 15 |
| 3. Proteção Social Especial | Ag. Social | 15 |
| 5. Saúde Mental, Drogas | Ag. Social | 15 |
| 3. NOB/SUAS 2012 | SUAS | 12 |
| 1. Cartão Prato Cheio | Programas DF | 12 |
| 3. Plano DF Social | Programas DF | 12 |
| 4. População em Situação de Rua | Ag. Social | 12 |
| 5. Lei 11.340 (Maria da Penha) ⭐ | DF | 10 |

---

## 9. Como continuar em outra sessão

1. **Carregar este MD** no chat
2. **Apontar a pasta** `C:\Users\teste\OneDrive\Área de Trabalho\Programas de estudo\Estudos-APP\`
3. **Citar a tarefa** da seção "O que está pendente" que quer atacar
4. Se for IA com acesso a navegador, **abrir** `monitorest/prioridade.html` pra ver o estado atual

### Comandos úteis pro Python

```bash
cd "C:\Users\teste\OneDrive\Área de Trabalho\Programas de estudo\Estudos-APP\monitorest"
python _validar_cobertura.py        # checa cobertura JSON vs edital
python _gerar_plano_express.py       # gera plano_express_*.md
python _backup_completo.py           # zipa tudo
```

### Comando pra subir mudanças

Dois cliques em `Estudos-APP/push_para_github.bat` — ou no PowerShell:
```powershell
cd "C:\Users\teste\OneDrive\Área de Trabalho\Programas de estudo\Estudos-APP"
git add . ; git commit -m "<mensagem>" ; git push
```

---

## 10. Referências e arquivos externos

- `Programas de estudo/Edital Tecnico e Contador.txt` — edital bruto (cópia do DODF 14/05/2026)
- `Programas de estudo/SEDES DF VERT DO EDITAL JA COM OS PESOS.txt` — edital com pesos curados pelo Hícaro
- `Programas de estudo/Projeto Reta Final SEDES-DF Recomen.txt` — plano da Gemini para migração Supabase
- `Programas de estudo/Ambient-Focus-Timer-Portable/` — pomodoro Electron que o Hícaro também usa (não integrado)
- `hhicaro.github.io/horas-liquidas/` — versão GitHub Pages anterior do pomodoro (referência visual)
- TecConcursos (premium) — fonte futura de questões em Excel

---

*Gerado por Claude (Cowork mode) em 17/05/2026.*
