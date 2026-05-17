// --- DATA: Conteúdo Programático Monitorest ---
// Banca: Quadrix · Calibrado com 47h48 de estudo registradas
const DEFAULT_SYLLABUS = [
    { id: 'lp_01', disciplina: 'Língua Portuguesa', nome: "1. Compreensão e Interpretação de Textos", relevancia: 5, peso: 1 },
    { id: 'lp_02', disciplina: 'Língua Portuguesa', nome: "2. Tipos e Gêneros Textuais", relevancia: 3, peso: 1 },
    { id: 'lp_03', disciplina: 'Língua Portuguesa', nome: "3. Ortografia Oficial", relevancia: 3, peso: 1 },
    { id: 'lp_04', disciplina: 'Língua Portuguesa', nome: "4.1 Coesão: referenciação, conectores, sequenciação", relevancia: 5, peso: 1 },
    { id: 'lp_05', disciplina: 'Língua Portuguesa', nome: "4.2 Coesão: tempos e modos verbais", relevancia: 4, peso: 1 },
    { id: 'lp_06', disciplina: 'Língua Portuguesa', nome: "5.1 Classes de Palavras", relevancia: 3, peso: 1 },
    { id: 'lp_07', disciplina: 'Língua Portuguesa', nome: "5.2/5.3 Coordenação e Subordinação", relevancia: 4, peso: 1 },
    { id: 'lp_08', disciplina: 'Língua Portuguesa', nome: "5.4 Pontuação", relevancia: 4, peso: 1 },
    { id: 'lp_09', disciplina: 'Língua Portuguesa', nome: "5.5/5.6 Concordância e Regência", relevancia: 4, peso: 1 },
    { id: 'lp_10', disciplina: 'Língua Portuguesa', nome: "5.7 Crase", relevancia: 4, peso: 1 },
    { id: 'lp_11', disciplina: 'Língua Portuguesa', nome: "5.8 Colocação Pronominal", relevancia: 2, peso: 1 },
    { id: 'lp_12', disciplina: 'Língua Portuguesa', nome: "6.1 Significação das Palavras", relevancia: 4, peso: 1 },
    { id: 'lp_13', disciplina: 'Língua Portuguesa', nome: "6.2 Substituição de palavras/trechos", relevancia: 5, peso: 1 },
    { id: 'lp_14', disciplina: 'Língua Portuguesa', nome: "6.3 Reorganização de orações e períodos", relevancia: 5, peso: 1 },
    { id: 'lp_15', disciplina: 'Língua Portuguesa', nome: "6.4 Reescrita de gêneros e formalidade", relevancia: 4, peso: 1 },
    { id: 'df_01', disciplina: 'Conhecimentos do DF e Legislação', nome: "1. Realidade DF/RIDE", relevancia: 2, peso: 2 },
    { id: 'df_02', disciplina: 'Conhecimentos do DF e Legislação', nome: "2. Plano Distrital de Política para Mulheres (PDPM)", relevancia: 3, peso: 2 },
    { id: 'df_03', disciplina: 'Conhecimentos do DF e Legislação', nome: "3. Lei Orgânica DF — Título VI", relevancia: 3, peso: 2 },
    { id: 'df_04', disciplina: 'Conhecimentos do DF e Legislação', nome: "4. LC 840/2011 — Tít. I, V, VI, VII", relevancia: 5, peso: 2 },
    { id: 'df_05', disciplina: 'Conhecimentos do DF e Legislação', nome: "5. Lei 11.340/2006 (Maria da Penha)", relevancia: 5, peso: 2 },
    { id: 'df_06', disciplina: 'Conhecimentos do DF e Legislação', nome: "6. Lei Distrital 7.484/2024", relevancia: 4, peso: 2 },
    { id: 'df_07', disciplina: 'Conhecimentos do DF e Legislação', nome: "7. Noções de Primeiros Socorros", relevancia: 3, peso: 2 },
    { id: 'suas_01', disciplina: 'SUAS e Assistência Social', nome: "1. PNAS/2004 e organização da assistência social", relevancia: 4, peso: 2 },
    { id: 'suas_02', disciplina: 'SUAS e Assistência Social', nome: "2. SUAS: princípios, diretrizes, seguranças socioassistenciais", relevancia: 4, peso: 2 },
    { id: 'suas_03', disciplina: 'SUAS e Assistência Social', nome: "3. NOB/SUAS (2012): responsabilidades, cofinanciamento, vigilância", relevancia: 3, peso: 2 },
    { id: 'prog_01', disciplina: 'Programas Socioassistenciais DF', nome: "1. Cartão Prato Cheio", relevancia: 4, peso: 1 },
    { id: 'prog_02', disciplina: 'Programas Socioassistenciais DF', nome: "2. Programa Cartão Gás", relevancia: 3, peso: 1 },
    { id: 'prog_03', disciplina: 'Programas Socioassistenciais DF', nome: "3. Plano DF Social", relevancia: 4, peso: 1 },
    { id: 'prog_04', disciplina: 'Programas Socioassistenciais DF', nome: "4. Benefícios Eventuais da Política de Assistência Social DF", relevancia: 4, peso: 1 },
    { id: 'prog_05', disciplina: 'Programas Socioassistenciais DF', nome: "5. SISAN / Restaurante Comunitário", relevancia: 3, peso: 1 },
    { id: 'const_01', disciplina: 'Direito Constitucional', nome: "1. CF/1988: princípios fundamentais", relevancia: 3, peso: 2 },
    { id: 'const_02', disciplina: 'Direito Constitucional', nome: "2. Direitos e garantias fundamentais (individuais, coletivos, sociais)", relevancia: 3, peso: 2 },
    { id: 'const_03', disciplina: 'Direito Constitucional', nome: "3. Organização do Estado e Administração Pública (servidores)", relevancia: 4, peso: 2 },
    { id: 'adm_01', disciplina: 'Direito Administrativo', nome: "1. Estado, governo e administração pública: conceitos", relevancia: 4, peso: 3 },
    { id: 'adm_02', disciplina: 'Direito Administrativo', nome: "2. Ato Administrativo: conceito, requisitos, atributos, extinção", relevancia: 5, peso: 3 },
    { id: 'adm_03', disciplina: 'Direito Administrativo', nome: "3. Poderes da Administração (hierárquico, disciplinar, polícia)", relevancia: 5, peso: 3 },
    { id: 'adm_04', disciplina: 'Direito Administrativo', nome: "4. Regime Jurídico Servidores DF — LC 840/2011 (aprofundado)", relevancia: 5, peso: 3 },
    { id: 'rot_01', disciplina: 'Rotinas Administrativas e Arquivologia', nome: "1. Qualidade no atendimento e trabalho em equipe", relevancia: 4, peso: 3 },
    { id: 'rot_02', disciplina: 'Rotinas Administrativas e Arquivologia', nome: "2. Redação Oficial e Comunicações Administrativas", relevancia: 5, peso: 3 },
    { id: 'rot_03', disciplina: 'Rotinas Administrativas e Arquivologia', nome: "3. Arquivologia: organização, controle de documentos, protocolo", relevancia: 5, peso: 3 },
    { id: 'rm_01', disciplina: 'Recursos Materiais, Patrimônio e Compras', nome: "1. Administração de Materiais: classificação, estoques, armazenagem", relevancia: 4, peso: 3 },
    { id: 'rm_02', disciplina: 'Recursos Materiais, Patrimônio e Compras', nome: "2. Gestão Patrimonial: tombamento, inventário, baixa", relevancia: 4, peso: 3 },
    { id: 'rm_03', disciplina: 'Recursos Materiais, Patrimônio e Compras', nome: "3. Compras no Setor Público (Lei 14.133/2021)", relevancia: 5, peso: 3 },
];
// --- PRÉ-CALIBRAÇÃO FSRS baseada em horas estudadas ---
// Tópicos sem entrada aqui iniciam como NOVOS (state=0, reps=0)
const SEED_STATES = {
    df_04: {"difficulty": 4.5, "stability": 7, "reps": 1, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 7, "elapsed_days": 0, "data_proxima_revisao": "2026-05-23", "history": []},
    adm_01: {"difficulty": 5.0, "stability": 7, "reps": 1, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 7, "elapsed_days": 0, "data_proxima_revisao": "2026-05-23", "history": []},
    adm_02: {"difficulty": 4.5, "stability": 9, "reps": 2, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 9, "elapsed_days": 0, "data_proxima_revisao": "2026-05-25", "history": []},
    adm_03: {"difficulty": 4.5, "stability": 9, "reps": 2, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 9, "elapsed_days": 0, "data_proxima_revisao": "2026-05-25", "history": []},
    adm_04: {"difficulty": 4.5, "stability": 9, "reps": 2, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 9, "elapsed_days": 0, "data_proxima_revisao": "2026-05-25", "history": []},
    const_01: {"difficulty": 4.0, "stability": 10, "reps": 2, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 10, "elapsed_days": 0, "data_proxima_revisao": "2026-05-26", "history": []},
    const_02: {"difficulty": 4.0, "stability": 10, "reps": 2, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 10, "elapsed_days": 0, "data_proxima_revisao": "2026-05-26", "history": []},
    const_03: {"difficulty": 4.0, "stability": 10, "reps": 2, "lapses": 0, "state": 2, "last_review": "2026-05-16", "scheduled_days": 10, "elapsed_days": 0, "data_proxima_revisao": "2026-05-26", "history": []},
};

// --- MODO RETA FINAL (Filtra topicos com relevancia < 3) ---
let modoRetaFinal = false;

// --- STATE ---
let appState = {
    config: {
        sessionsPerDay: 4, // Default to 4
        examDate: '',
        studyMode: 'mixed'
    },
    // SRS Topic State: Map topicId -> { dificulty, stability, reps, etc... }
    topicsState: {},
    generated: false
};

if (!globalThis.FSRSEngine) {
    throw new Error('FSRSEngine not found. Ensure fsrs-core.js is loaded before script.js.');
}

const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const STUDY_MODE_OPTIONS = ['mixed', 'theory', 'questions'];

// === NAMESPACE POR CARGO (resolve conflito entre Contador e Técnico) ===
const CARGO = 'tecnico';
const PERSONAL_DB_KEY = `editaliza_${CARGO}_personal_db`;

// Migração única: se houver dados antigos sem namespace, copia para a chave do cargo
(function migrarChavesAntigas() {
    try {
        const antigo = localStorage.getItem('editaliza_personal_db');
        if (antigo && !localStorage.getItem(PERSONAL_DB_KEY)) {
            localStorage.setItem(PERSONAL_DB_KEY, antigo);
            console.log(`[Migração] Dados antigos copiados para ${PERSONAL_DB_KEY}`);
        }
    } catch (e) { console.warn('Migração falhou:', e); }
})();

const THEME_STORAGE_KEY = 'editaliza_theme';

function aplicarTema(theme) {
    const tema = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', tema);

    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.textContent = tema === 'dark' ? 'Tema: Escuro' : 'Tema: Claro';
    }

    localStorage.setItem(THEME_STORAGE_KEY, tema);
}

function alternarTema() {
    const atual = document.documentElement.getAttribute('data-theme') || 'light';
    aplicarTema(atual === 'dark' ? 'light' : 'dark');
}

function inicializarTema() {
    const salvo = localStorage.getItem(THEME_STORAGE_KEY);
    const prefereEscuro = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    aplicarTema(salvo || (prefereEscuro ? 'dark' : 'light'));

    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.addEventListener('click', alternarTema);
    }
}

function formatLocalDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function isValidISODate(dateStr) {
    return FSRSEngine.isValidISODate(dateStr);
}

function parseLocalDate(dateStr) {
    return FSRSEngine.parseISODateLocal(dateStr);
}

function clampNumber(value, min, max, fallback) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.max(min, Math.min(max, parsed));
}

function clampInt(value, min, max, fallback) {
    const parsed = parseInt(value, 10);
    if (!Number.isFinite(parsed)) return fallback;
    return Math.max(min, Math.min(max, parsed));
}

function normalizarSessionsPerDay(value) {
    const parsed = parseInt(value, 10);
    if (!Number.isFinite(parsed) || parsed < 1 || parsed >= 100) return 4;
    return parsed;
}

function normalizarStudyMode(value) {
    return STUDY_MODE_OPTIONS.includes(value) ? value : 'mixed';
}

function diffDaysISO(startISO, endISO) {
    return FSRSEngine.diffDaysISO(startISO, endISO);
}

function diasAteProva(referenceDateISO = formatLocalDate()) {
    const examDate = appState?.config?.examDate;
    if (!isValidISODate(examDate)) return null;
    return diffDaysISO(referenceDateISO, examDate);
}

function normalizarHistory(history) {
    if (!Array.isArray(history)) return [];
    return history
        .filter(item => item && typeof item === 'object')
        .map(item => ({
            date: isValidISODate(item.date) ? item.date : formatLocalDate(),
            grade: clampInt(item.grade, 0, 3, 0),
            elapsed: clampInt(item.elapsed, 0, 36500, 0),
            stability: clampNumber(item.stability, 0, 1000000, 0),
            difficulty: clampNumber(item.difficulty, 1, 10, 5)
        }))
        .slice(-50);
}

function normalizarTopicState(topicId, rawTopic) {
    const fallbackRelevancia = RELEVANCIA_POR_ID[topicId] || 3;
    const topic = (rawTopic && typeof rawTopic === 'object' && !Array.isArray(rawTopic)) ? { ...rawTopic } : {};

    const isLegacySM2 = topic.fator_facilidade !== undefined && topic.difficulty === undefined;
    if (isLegacySM2) {
        topic.intervalo = clampInt(topic.intervalo, 0, 36500, 0);
        topic.historico_revisoes = clampInt(topic.historico_revisoes, 0, 100000, 0);
        topic.relevancia = clampInt(topic.relevancia, 1, 5, fallbackRelevancia);
        topic.data_proxima_revisao = isValidISODate(topic.data_proxima_revisao) ? topic.data_proxima_revisao : null;
        return topic;
    }

    topic.difficulty = clampNumber(topic.difficulty, 1, 10, 5);
    topic.stability = clampNumber(topic.stability, 0, 1000000, 0);
    topic.last_review = isValidISODate(topic.last_review) ? topic.last_review : null;
    topic.scheduled_days = clampInt(topic.scheduled_days, 0, 36500, 0);
    topic.elapsed_days = clampInt(topic.elapsed_days, 0, 36500, 0);
    topic.reps = clampInt(topic.reps, 0, 100000, 0);
    topic.lapses = clampInt(topic.lapses, 0, 100000, 0);
    topic.state = [0, 1, 2, 3].includes(topic.state) ? topic.state : (topic.reps > 0 ? 2 : 0);
    topic.relevancia = clampInt(topic.relevancia, 1, 5, fallbackRelevancia);
    topic.data_proxima_revisao = isValidISODate(topic.data_proxima_revisao) ? topic.data_proxima_revisao : null;
    topic.history = normalizarHistory(topic.history);

    // Recover last_review when only next date + scheduled interval are present.
    if (!topic.last_review && topic.data_proxima_revisao && topic.scheduled_days > 0) {
        const nextDate = parseLocalDate(topic.data_proxima_revisao);
        if (nextDate) {
            const lastDate = new Date(nextDate);
            lastDate.setDate(lastDate.getDate() - topic.scheduled_days);
            topic.last_review = formatLocalDate(lastDate);
        }
    }

    return topic;
}

function normalizarAppState(rawState) {
    if (!rawState || typeof rawState !== 'object' || Array.isArray(rawState)) {
        throw new Error('Estrutura inválida: esperado objeto no nível raiz.');
    }

    const state = { ...rawState };
    const rawConfig = (rawState.config && typeof rawState.config === 'object' && !Array.isArray(rawState.config)) ? rawState.config : {};
    state.config = {
        ...rawConfig,
        sessionsPerDay: normalizarSessionsPerDay(rawConfig.sessionsPerDay),
        examDate: isValidISODate(rawConfig.examDate) ? rawConfig.examDate : '',
        studyMode: normalizarStudyMode(rawConfig.studyMode),
        weights: (rawConfig.weights && typeof rawConfig.weights === 'object' && !Array.isArray(rawConfig.weights)) ? rawConfig.weights : {}
    };

    const rawTopics = (rawState.topicsState && typeof rawState.topicsState === 'object' && !Array.isArray(rawState.topicsState)) ? rawState.topicsState : {};
    state.topicsState = {};
    Object.keys(rawTopics).forEach(topicId => {
        state.topicsState[topicId] = normalizarTopicState(topicId, rawTopics[topicId]);
    });

    state.generated = Boolean(rawState.generated);
    state.calibrated = Boolean(rawState.calibrated);

    delete state.completedTopics;
    delete state.schedule;
    delete state.config.startDate;

    return state;
}

function atualizarInfoRetaFinal() {
    const info = document.getElementById('retaFinalInfo');
    if (!info) return;

    const diasRestantes = diasAteProva();
    let contextoProva = 'Sem data de prova definida.';
    if (diasRestantes !== null) {
        if (diasRestantes < 0) contextoProva = 'A data da prova já passou.';
        else if (diasRestantes === 0) contextoProva = 'Hoje é o dia da prova.';
        else contextoProva = `Faltam ${diasRestantes} dias para a prova.`;
    }

    if (modoRetaFinal) {
        info.innerHTML = `
            <strong>Reta Final ON:</strong> a fila diária passa a priorizar apenas tópicos com relevância >= 3.<br>
            O sistema <strong>recalcula a fila de hoje</strong>, mas <strong>não apaga</strong> histórico FSRS (D, S, R, revisões e lapsos).<br>
            ${contextoProva}
        `;
        return;
    }

    info.innerHTML = `
        <strong>Reta Final OFF:</strong> o cronograma considera todo o edital (relevância 1 a 5).<br>
        Ao ligar, a plataforma <strong>não gera do zero</strong>: apenas refaz a fila diária com o filtro de reta final.<br>
        ${contextoProva}
    `;
}

function atualizarBotaoRetaFinal() {
    const btn = document.getElementById('btnRetaFinal');
    if (!btn) return;
    btn.textContent = modoRetaFinal ? 'Reta Final: ON' : 'Reta Final: OFF';
    btn.classList.toggle('ativa', modoRetaFinal);
    btn.title = modoRetaFinal
        ? 'Ativo: mostra na fila diária apenas tópicos de relevância >= 3. Não apaga seu histórico.'
        : 'Inativo: inclui todo o edital. Ao ativar, recalcula a fila diária com filtro de reta final.';
    atualizarInfoRetaFinal();
}
// Generate Unique ID for topics
function getTopicId(subject, topicName) {
    return `${subject}||${topicName}`;
}

// === PESO POR DISCIPLINA (do edital) ===
// Específicas do cargo I09 Técnico Judiciário Área Judiciária = peso 3
// Conhecimentos Gerais (todos os cargos) = peso 1
// Reconstruído a partir do DEFAULT_SYLLABUS; persiste mesmo com syllabus custom
// (cai para 1 se a disciplina é desconhecida).
const PESO_POR_DISCIPLINA = (function buildPesoMap() {
    const map = {};
    DEFAULT_SYLLABUS.forEach(t => {
        if (!map[t.disciplina]) map[t.disciplina] = t.peso || 1;
    });
    return map;
})();

function getPesoDisciplina(disciplina) {
    return PESO_POR_DISCIPLINA[disciplina] || 1;
}

// =====================================================
// FSRS v5 (Free Spaced Repetition Scheduler) CORE
// =====================================================

/**
 * FSRS v5 Default Weights (calibrated from open-spaced-repetition)
 * These control how difficulty, stability, and intervals are calculated
 */
const FSRS_WEIGHTS = FSRSEngine.WEIGHTS;

/**
 * Decay constant for retrievability calculation
 * R(t) = (1 + t / (9 * S))^(-1)
 */
const FSRS_DECAY = FSRSEngine.DECAY;
const FSRS_FACTOR = FSRSEngine.FACTOR;

/**
 * Get target retention based on topic relevance
 * Higher relevance = higher retention target = shorter intervals
 */
function getTargetRetention(relevancia) {
    const base = FSRSEngine.getTargetRetentionByRelevance(relevancia);

    // Increase retention target as exam date approaches.
    const diasRestantes = diasAteProva();
    if (diasRestantes === null || diasRestantes < 0) return base;

    let bonus = 0;
    if (diasRestantes <= 15) bonus = relevancia >= 4 ? 0.03 : 0.02;
    else if (diasRestantes <= 30) bonus = relevancia >= 4 ? 0.02 : 0.015;
    else if (diasRestantes <= 60) bonus = relevancia >= 4 ? 0.01 : 0.005;

    return Math.min(0.97, base + bonus);
}

function diasAtraso(dataProximaISO, referenceISO) {
    return FSRSEngine.getOverdueDays(dataProximaISO, referenceISO);
}

/**
 * Calculate retrievability (probability of recall) at a given time
 * @param {number} stability - Current stability in days
 * @param {number} elapsedDays - Days since last review
 */
function calcularRetrievability(stability, elapsedDays) {
    return FSRSEngine.getRetrievability(stability, elapsedDays);
}

/**
 * Calculate initial difficulty based on first grade (0-3)
 */
function calcularDificuldadeInicial(grade) {
    return FSRSEngine.getInitialDifficulty(grade);
}

/**
 * Calculate initial stability based on first grade
 */
function calcularEstabilidadeInicial(grade) {
    return FSRSEngine.getInitialStability(grade);
}

/**
 * Update difficulty after a review
 * @param {number} difficulty - Current difficulty (1-10)
 * @param {number} grade - Review grade (0-3)
 */
function atualizarDificuldade(difficulty, grade) {
    return FSRSEngine.updateDifficulty(difficulty, grade);
}

/**
 * Calculate new stability after a successful recall
 * @param {number} difficulty - Current difficulty
 * @param {number} stability - Current stability
 * @param {number} retrievability - Current retrievability
 * @param {number} grade - Review grade (1-3, excludes lapses)
 */
function calcularNovaEstabilidade(difficulty, stability, retrievability, grade) {
    return FSRSEngine.getSuccessStability(difficulty, stability, retrievability, grade);
}

/**
 * Calculate new stability after a lapse (grade = 0)
 * @param {number} difficulty - Current difficulty
 * @param {number} stability - Current stability
 * @param {number} retrievability - Current retrievability
 */
function calcularEstabilidadeAposLapse(difficulty, stability, retrievability) {
    return FSRSEngine.getLapseStability(difficulty, stability, retrievability);
}

/**
 * Calculate next interval from stability and target retention
 * I = 9 * S * ((1/R) - 1)
 */
function calcularIntervalo(stability, targetRetention) {
    return FSRSEngine.getInterval(stability, targetRetention);
}

/**
 * Initialize FSRS v5 state for a topic
 */
function initTopicState(topicId, relevancia) {
    if (!appState.topicsState[topicId]) {
        const seed = (typeof SEED_STATES !== 'undefined') ? SEED_STATES[topicId] : null;
        if (seed) {
            appState.topicsState[topicId] = {
                difficulty:     seed.difficulty     || 5.0,
                stability:      seed.stability      || 0,
                last_review:    seed.last_review    || null,
                scheduled_days: seed.scheduled_days || 0,
                elapsed_days:   seed.elapsed_days   || 0,
                reps:           seed.reps           || 0,
                lapses:         seed.lapses         || 0,
                state:          seed.state          || 0,
                relevancia:     relevancia          || 3,
                data_proxima_revisao: seed.data_proxima_revisao || null,
                history:        seed.history        || []
            };
        } else {
            appState.topicsState[topicId] = {
                difficulty: 5.0, stability: 0, last_review: null,
                scheduled_days: 0, elapsed_days: 0, reps: 0, lapses: 0,
                state: 0, relevancia: relevancia || 3, history: []
            };
        }
    }
    return appState.topicsState[topicId];
}

/**
 * Migrate old SM-2 state to FSRS v5
 */
function migrarParaFSRS(topico) {
    // If old format detected, convert
    if (topico.fator_facilidade !== undefined && topico.difficulty === undefined) {
        const oldFactor = topico.fator_facilidade || 2.5;
        const oldInterval = topico.intervalo || 0;
        const oldReps = topico.historico_revisoes || 0;

        // Convert ease factor (1.3-3.0) to difficulty (10-1)
        const difficulty = FSRSEngine.legacyEaseToDifficulty(oldFactor);

        // Use old interval as stability approximation
        const stability = FSRSEngine.legacyIntervalToStability(oldInterval);
        const nextReviewDate = parseLocalDate(topico.data_proxima_revisao);
        let lastReviewDate = null;
        if (nextReviewDate) {
            lastReviewDate = new Date(nextReviewDate);
            lastReviewDate.setDate(lastReviewDate.getDate() - oldInterval);
        }

        return {
            difficulty: difficulty,
            stability: stability,
            last_review: lastReviewDate ? formatLocalDate(lastReviewDate) : null,
            scheduled_days: oldInterval,
            elapsed_days: 0,
            reps: oldReps,
            lapses: 0,
            state: oldReps > 0 ? 2 : 0,
            relevancia: topico.relevancia || 3,
            history: []
        };
    }
    return topico;
}

/**
 * SIMULAR INTERVALO: Calcula o intervalo previsto para um grade SEM modificar o estado
 * @param {object} topico - Estado atual do Topico
 * @returns {string} Intervalo formatado (ex: "1d", "15d", "1m")
 */
function simularIntervalo(topico, grade) {
    if (!topico) return "?";

    const hoje = parseLocalDate(formatLocalDate()) || new Date();
    let elapsedDays = 0;
    if (topico.last_review) {
        const lastDate = parseLocalDate(topico.last_review);
        if (lastDate) {
            elapsedDays = Math.max(0, Math.floor((hoje - lastDate) / ONE_DAY_MS));
        }
    }

    const targetRetention = getTargetRetention(topico.relevancia || 3);
    const retrievability = calcularRetrievability(topico.stability || 0, elapsedDays);

    let newStability;
    const difficulty = topico.difficulty || 5;
    const stability = topico.stability || 0;
    const isNew = topico.state === 0 || topico.reps === 0;

    if (isNew) {
        // NEW CARD: Use initial stability
        newStability = calcularEstabilidadeInicial(grade);
    } else if (grade === 0) {
        // LAPSE
        newStability = calcularEstabilidadeAposLapse(difficulty, stability, retrievability);
    } else {
        // SUCCESS
        newStability = calcularNovaEstabilidade(difficulty, stability, retrievability, grade);
    }

    // Calculate interval
    let interval = calcularIntervalo(newStability, targetRetention);

    // Apply paranoid caps
    const maxInterval = FSRSEngine.getMaxIntervalByRelevance(topico.relevancia || 3);
    interval = Math.min(interval, maxInterval);

    return formatarIntervalo(interval);
}

/**
 */
function formatarIntervalo(dias) {
    if (dias < 1) return "<1d";
    if (dias === 1) return "1d";
    if (dias < 7) return `${dias}d`;
    if (dias < 30) return `${Math.round(dias / 7)}sem`;
    return `${Math.round(dias / 30)}m`;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatPercent(value) {
    const safe = Number.isFinite(value) ? value : 0;
    return `${Math.round(safe * 100)}%`;
}

function formatDecimalPt(value, casas = 1) {
    const numero = Number(value);
    if (!Number.isFinite(numero)) return '-';
    return numero.toFixed(casas).replace('.', ',');
}

function obterGuiaAvaliacaoPorModo(mode = appState?.config?.studyMode) {
    const modo = normalizarStudyMode(mode);

    if (modo === 'theory') {
        return {
            id: 'theory',
            nome: 'Só teoria',
            resumo: 'Baseie a nota na sua capacidade de explicar e reconstruir o conteúdo sem consulta.',
            quandoUsar: 'Use quando seu bloco foi leitura, aula, resumo, flashcard conceitual ou revisão de teoria.',
            tooltips: {
                errei: 'Teoria | Errei (0): não conseguiu explicar o conceito-base sem olhar material.',
                dificil: 'Teoria | Difícil (1): explicou só parte, com esforço alto ou lacunas centrais.',
                bom: 'Teoria | Bom (2): explicou ideia central com segurança razoável e poucas lacunas.',
                facil: 'Teoria | Fácil (3): explicou e aplicou sem esforço, incluindo exceções relevantes.'
            }
        };
    }

    if (modo === 'questions') {
        return {
            id: 'questions',
            nome: 'Só bateria de questões',
            resumo: 'Baseie a nota no resultado + qualidade da resolução (tempo, segurança e justificativa).',
            quandoUsar: 'Use quando o bloco foi predominantemente resolução de questões.',
            tooltips: {
                errei: 'Questões | Errei (0): errou ou acertou no chute, sem domínio do raciocínio.',
                dificil: 'Questões | Difícil (1): acertou com insegurança, demora alta ou eliminação frágil.',
                bom: 'Questões | Bom (2): acertou com segurança e tempo adequado, com justificativa correta.',
                facil: 'Questões | Fácil (3): acertou rápido, com confiança alta e justificando alternativas.'
            }
        };
    }

    return {
        id: 'mixed',
        nome: 'Mista (teoria + questões)',
        resumo: 'Considere o pior sinal do dia: se teoria e prática divergem, escolha a nota mais conservadora.',
        quandoUsar: 'Use quando no mesmo bloco você estudou teoria e também resolveu questões.',
        tooltips: {
            errei: 'Mista | Errei (0): falhou na teoria ou nas questões de forma relevante.',
            dificil: 'Mista | Difícil (1): lembrou/resolveu com esforço alto e inconsistência.',
            bom: 'Mista | Bom (2): desempenho sólido na teoria e nas questões, com poucos tropeços.',
            facil: 'Mista | Fácil (3): fluidez alta na teoria e na prática, sem esforço perceptível.'
        }
    };
}

function atualizarGuiaAvaliacao() {
    const resumoEl = document.getElementById('studyModeGuideSummary');
    const rubricaEl = document.getElementById('studyModeRubric');
    const guia = obterGuiaAvaliacaoPorModo();
    if (!resumoEl || !rubricaEl) return;

    resumoEl.innerHTML = `
        <p><strong>Modo atual:</strong> ${escapeHtml(guia.nome)}.</p>
        <p>${escapeHtml(guia.resumo)}</p>
    `;

    rubricaEl.innerHTML = `
        <div class="study-mode-rubric-grid">
            <article>
                <h4>Régua prática neste modo</h4>
                <ul>
                    <li><strong>Errei:</strong> ${escapeHtml(guia.tooltips.errei.replace(/^.*?\|\s*/, ''))}</li>
                    <li><strong>Difícil:</strong> ${escapeHtml(guia.tooltips.dificil.replace(/^.*?\|\s*/, ''))}</li>
                    <li><strong>Bom:</strong> ${escapeHtml(guia.tooltips.bom.replace(/^.*?\|\s*/, ''))}</li>
                    <li><strong>Fácil:</strong> ${escapeHtml(guia.tooltips.facil.replace(/^.*?\|\s*/, ''))}</li>
                </ul>
            </article>
            <article>
                <h4>Quando usar este modo</h4>
                <p>${escapeHtml(guia.quandoUsar)}</p>
            </article>
        </div>
    `;
}

function classificarRecuperabilidade(retrievability) {
    const r = Number.isFinite(retrievability) ? retrievability : 0;
    if (r >= 0.9) {
        return { faixa: 'alta', resumo: 'memória quente', influencia: 'baixo risco de erro agora; ganho de estabilidade tende a ser mais moderado.' };
    }
    if (r >= 0.75) {
        return { faixa: 'boa', resumo: 'memória estável', influencia: 'boa chance de acerto; revisão mantém crescimento consistente de estabilidade.' };
    }
    if (r >= 0.6) {
        return { faixa: 'atenção', resumo: 'zona de atenção', influencia: 'risco de falha começa a subir; revisar no prazo evita queda forte.' };
    }
    return { faixa: 'crítica', resumo: 'alto risco de esquecimento', influencia: 'prioridade alta: atraso adicional tende a reduzir acerto e aumentar carga futura.' };
}

function classificarEstabilidade(stability) {
    const s = Number.isFinite(stability) ? stability : 0;
    if (s >= 45) {
        return { faixa: 'alta', resumo: 'memória madura', influencia: 'intervalos podem ficar longos sem comprometer muito a retenção.' };
    }
    if (s >= 20) {
        return { faixa: 'boa', resumo: 'memória consolidada', influencia: 'o card já suporta intervalos em semanas.' };
    }
    if (s >= 7) {
        return { faixa: 'média', resumo: 'consolidação em progresso', influencia: 'responder bem mantém evolução para intervalos maiores.' };
    }
    if (s >= 1) {
        return { faixa: 'baixa', resumo: 'memória frágil', influencia: 'precisa de revisões mais próximas para não regredir.' };
    }
    return { faixa: 'inicial', resumo: 'memória não calibrada', influencia: 'as próximas respostas ainda vão definir o ritmo real do tópico.' };
}

function classificarAtraso(atrasoDias) {
    const atraso = Number.isFinite(atrasoDias) ? atrasoDias : 0;
    if (atraso <= 0) {
        return { faixa: 'no prazo', resumo: 'sem atraso', influencia: 'o algoritmo está conseguindo aplicar o intervalo planejado.' };
    }
    if (atraso <= 3) {
        return { faixa: 'leve', resumo: 'atraso leve', influencia: 'impacto pequeno, mas já reduz um pouco a recuperabilidade.' };
    }
    if (atraso <= 10) {
        return { faixa: 'moderado', resumo: 'atraso moderado', influencia: 'risco de esquecimento sobe e a fila tende a ficar mais pesada.' };
    }
    return { faixa: 'alto', resumo: 'atraso alto', influencia: 'prioridade máxima: o atraso já pressiona acerto e carga da semana.' };
}

function classificarDificuldade(difficulty) {
    const d = Number.isFinite(difficulty) ? difficulty : 5;
    if (d <= 3) {
        return { faixa: 'baixa', resumo: 'conteúdo fácil para você', influencia: 'em acertos sucessivos, a estabilidade tende a crescer mais rápido.' };
    }
    if (d <= 6) {
        return { faixa: 'média', resumo: 'dificuldade intermediária', influencia: 'evolui com consistência, mas exige manutenção regular.' };
    }
    if (d <= 8) {
        return { faixa: 'alta', resumo: 'conteúdo difícil', influencia: 'o crescimento de estabilidade costuma ser mais lento.' };
    }
    return { faixa: 'muito alta', resumo: 'conteúdo muito difícil', influencia: 'o algoritmo tende a manter intervalos curtos para proteger retenção.' };
}

function descreverImpactoPraticoCard({ isNovo, retrievability, stability, atraso }) {
    if (isNovo) {
        return 'Card novo: responda com honestidade para calibrar dificuldade e estabilidade iniciais.';
    }

    const rInfo = classificarRecuperabilidade(retrievability);
    const sInfo = classificarEstabilidade(stability);
    const aInfo = classificarAtraso(atraso);

    return `R ${Math.round(retrievability * 100)}% (${rInfo.resumo}), S ${formatDecimalPt(stability)}d (${sInfo.resumo}) e atraso ${atraso}d (${aInfo.resumo}).`;
}

function tooltipRecuperabilidade(motivo) {
    const rInfo = classificarRecuperabilidade(motivo.retrievability);
    return `R = Recuperabilidade. Chance estimada de lembrar agora (${motivo.rText}). Faixa ${rInfo.faixa}: ${rInfo.influencia}`;
}

function tooltipEstabilidade(motivo, dificuldade) {
    const sInfo = classificarEstabilidade(motivo.stability);
    const dInfo = classificarDificuldade(dificuldade);
    return `S = Estabilidade. Duração média da memória em dias (${motivo.sText}). ${sInfo.influencia} D ${formatDecimalPt(dificuldade)} (${dInfo.resumo}): ${dInfo.influencia}`;
}

function tooltipAtraso(motivo) {
    const aInfo = classificarAtraso(motivo.atraso);
    return `A = Atraso. Dias além da revisão planejada (${motivo.atrasoText}). ${aInfo.influencia}`;
}

function diasDesdeUltimaRevisao(topico, hojeISO) {
    if (!topico.last_review || !isValidISODate(topico.last_review)) return 0;
    return Math.max(0, diffDaysISO(topico.last_review, hojeISO));
}

function construirMotivoCard(topico, hojeISO) {
    const isNovo = topico.__bucket === 'new' || topico.reps === 0 || topico.state === 0;
    const atraso = isNovo ? 0 : diasAtraso(topico.data_proxima_revisao, hojeISO);
    const elapsed = isNovo ? 0 : diasDesdeUltimaRevisao(topico, hojeISO);
    const stability = Math.max(0, Number(topico.stability) || 0);
    const retrievability = isNovo ? 1 : calcularRetrievability(stability, elapsed);

    const bucketText = isNovo ? 'Novo por prioridade do edital' : (atraso > 0 ? `Revisão atrasada ${atraso}d` : 'Revisão prevista para hoje');
    const sText = stability > 0 ? `${stability.toFixed(1)}d` : '0d';
    const rText = formatPercent(retrievability);
    const atrasoText = `${atraso}d`;
    const impactoPratico = descreverImpactoPraticoCard({ isNovo, retrievability, stability, atraso });

    return {
        isNovo,
        bucketText,
        elapsed,
        atraso,
        stability,
        retrievability,
        rText,
        sText,
        atrasoText,
        impactoPratico
    };
}

/**
 * Main FSRS v5 Review Function
 * @param {string} topicId - Topic ID
 */
function calcularProximaRevisao(topicId, grade) {
    let topico = appState.topicsState[topicId];
    if (!topico) return null;

    // Migrate if needed
    topico = migrarParaFSRS(topico);
    appState.topicsState[topicId] = topico;

    const hojeISO = formatLocalDate();
    const hoje = parseLocalDate(hojeISO) || new Date();

    // Calculate elapsed days since last review
    let elapsedDays = 0;
    if (topico.last_review) {
        const lastDate = parseLocalDate(topico.last_review);
        if (lastDate) {
            elapsedDays = Math.max(0, Math.floor((hoje - lastDate) / ONE_DAY_MS));
        }
    }
    topico.elapsed_days = elapsedDays;

    // Get target retention based on relevance
    const targetRetention = getTargetRetention(topico.relevancia);

    // Calculate current retrievability
    const retrievability = calcularRetrievability(topico.stability, elapsedDays);

    let newDifficulty, newStability, newInterval;

    if (topico.state === 0) {
        // NEW CARD: First review
        newDifficulty = calcularDificuldadeInicial(grade);
        newStability = calcularEstabilidadeInicial(grade);
        topico.state = (grade === 0) ? 3 : 1; // Relearning or Learning
    } else {
        // EXISTING CARD: Update based on grade
        newDifficulty = atualizarDificuldade(topico.difficulty, grade);

        if (grade === 0) {
            // LAPSE: Errou
            newStability = calcularEstabilidadeAposLapse(topico.difficulty, topico.stability, retrievability);
            topico.lapses++;
            topico.state = 3; // Relearning
        } else {
            newStability = calcularNovaEstabilidade(topico.difficulty, topico.stability, retrievability, grade);
            topico.state = 2; // Review
        }
    }

    // Calculate next interval
    newInterval = calcularIntervalo(newStability, targetRetention);

    newInterval = FSRSEngine.applyIntervalFuzz(newInterval);

    // Cap intervals by relevance (paranoid mode for critical topics)
    const maxInterval = FSRSEngine.getMaxIntervalByRelevance(topico.relevancia);
    newInterval = Math.min(newInterval, maxInterval);

    // Update topic state
    topico.difficulty = Math.round(newDifficulty * 10) / 10;
    topico.stability = Math.round(newStability * 10) / 10;
    topico.scheduled_days = newInterval;
    topico.last_review = hojeISO;
    topico.reps++;

    // Calculate next review date
    const nextDate = new Date(hoje);
    nextDate.setDate(hoje.getDate() + newInterval);
    topico.data_proxima_revisao = formatLocalDate(nextDate);

    // Log to history (for future ML optimization)
    topico.history.push({
        date: hojeISO,
        grade: grade,
        elapsed: elapsedDays,
        stability: topico.stability,
        difficulty: topico.difficulty
    });

    // Keep history manageable (last 50 reviews)
    if (topico.history.length > 50) {
        topico.history = topico.history.slice(-50);
    }

    saveState();
    return topico;
}

/**
 * 70% Reviews due (sorted by relevance DESC, then stability ASC)
 * 30% New topics (sorted by relevance DESC)
 * Applies RETA FINAL filter if active
 */
function gerarFilaDoDia() {
    const hoje = formatLocalDate();
    const maxSessoes = normalizarSessionsPerDay(appState.config.sessionsPerDay);

    // Initialize all topics
    SYLLABUS.forEach(topico => {
        initTopicState(topico.id, topico.relevancia);
        // Migrate old data if needed
        if (appState.topicsState[topico.id].fator_facilidade !== undefined) {
            appState.topicsState[topico.id] = migrarParaFSRS(appState.topicsState[topico.id]);
        }
    });

    // Collect all topics with their states + peso (Específicas ×3 / Básicas ×1)
    let todosTopicos = SYLLABUS.map(topico => {
        const estado = appState.topicsState[topico.id] || {};
        return {
            id: topico.id,
            subject: topico.disciplina,
            name: topico.nome,
            ...estado,
            relevancia: topico.relevancia,
            peso: getPesoDisciplina(topico.disciplina)
        };
    });

    // Split em pools por peso e calcula quota proporcional ao peso
    // (Espec peso 3 + Bas peso 1 → ratio 3:1 → 75% slots Espec, 25% slots Bas)
    const espTopicos = todosTopicos.filter(t => t.peso === 3);
    const basTopicos = todosTopicos.filter(t => t.peso !== 3);

    // Quota base com fallback robusto se uma pool não está representada
    let espQuota = espTopicos.length > 0 ? Math.round(maxSessoes * 3 / 4) : 0;
    let basQuota = basTopicos.length > 0 ? maxSessoes - espQuota : 0;
    if (espTopicos.length === 0) espQuota = 0;
    if (basTopicos.length === 0) { espQuota = maxSessoes; basQuota = 0; }

    const espFila = FSRSEngine.buildDailyQueue({
        topics: espTopicos,
        todayISO: hoje,
        maxSessions: espQuota,
        retaFinal: modoRetaFinal,
        subjectKey: 'subject'
    });
    const basFila = FSRSEngine.buildDailyQueue({
        topics: basTopicos,
        todayISO: hoje,
        maxSessions: basQuota,
        retaFinal: modoRetaFinal,
        subjectKey: 'subject'
    });

    // Realoca slots se uma pool não preencheu a quota (ex: poucos vencidos do dia)
    const folgaEsp = espQuota - espFila.length;
    const folgaBas = basQuota - basFila.length;
    let extra = [];
    if (folgaEsp > 0 && basFila.length < basTopicos.length) {
        const bonus = FSRSEngine.buildDailyQueue({
            topics: basTopicos.filter(t => !basFila.some(f => f.id === t.id)),
            todayISO: hoje,
            maxSessions: folgaEsp,
            retaFinal: modoRetaFinal,
            subjectKey: 'subject'
        });
        extra = extra.concat(bonus);
    }
    if (folgaBas > 0 && espFila.length < espTopicos.length) {
        const bonus = FSRSEngine.buildDailyQueue({
            topics: espTopicos.filter(t => !espFila.some(f => f.id === t.id)),
            todayISO: hoje,
            maxSessions: folgaBas,
            retaFinal: modoRetaFinal,
            subjectKey: 'subject'
        });
        extra = extra.concat(bonus);
    }

    // Intercala 3 Esp : 1 Bas pra honrar peso visualmente também
    // Pattern: ESP ESP ESP BAS ESP ESP ESP BAS ...
    const merged = [];
    let iE = 0, iB = 0;
    for (let slot = 0; slot < maxSessoes; slot++) {
        const querBas = (slot % 4 === 3);  // slots 3, 7, 11... são Básicos
        if (querBas && iB < basFila.length) {
            merged.push(basFila[iB++]);
        } else if (iE < espFila.length) {
            merged.push(espFila[iE++]);
        } else if (iB < basFila.length) {
            merged.push(basFila[iB++]);
        }
    }
    // Adiciona qualquer extra que não tenha cabido
    extra.forEach(t => { if (merged.length < maxSessoes) merged.push(t); });

    return merged.map(topico => ({
        ...topico,
        __why: construirMotivoCard(topico, hoje)
    }));
}

let sessoesRestantesHoje = 0;
let filaDoDiaCache = [];

/**
 */
function iniciarSessaoDoDia() {
    sessoesRestantesHoje = appState.config.sessionsPerDay;
    filaDoDiaCache = gerarFilaDoDia();
    renderScheduleFromCache();
}

function destacarPrimeiroCardDaFila() {
    const cards = Array.from(document.querySelectorAll('.srs-card'));
    cards.forEach(card => card.classList.remove('card-foco'));
    if (cards.length > 0) {
        cards[0].classList.add('card-foco');
    }
}

/**
 */
function responderSRS(topicId, nota) {
    // 1. Gerar o mesmo ID sanitizado usado no renderScheduleFromCache
    const cardId = `card-${topicId.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const cardElement = document.getElementById(cardId);

    let toastY = 200; // fallback
    if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        toastY = rect.top + window.scrollY;
    }

    calcularProximaRevisao(topicId, nota);

    // 4. Obter a próxima data para mostrar no toast
    const estado = appState.topicsState[topicId];
    if (estado && estado.data_proxima_revisao) {
        mostrarToast(estado.data_proxima_revisao, toastY);
    }

    if (cardElement) {
        cardElement.classList.add('saindo');
        cardElement.style.transition = "all 0.3s ease";
        cardElement.style.opacity = "0";
        cardElement.style.transform = "translateX(50px)";

        setTimeout(() => {
            cardElement.remove();
        }, 300);
    }

    // 6. Atualizar contador e verificar fim
    sessoesRestantesHoje--;

    const contadorEl = document.getElementById('sessoesRestantes');
    if (contadorEl) {
        contadorEl.textContent = `${sessoesRestantesHoje} sessões restantes`;
    }

    // 7. Verificar se acabou (com delay para animação)
    setTimeout(() => {
        const cardsNaTela = document.querySelectorAll('.srs-card');
        if (sessoesRestantesHoje <= 0 || cardsNaTela.length === 0) {
            mostrarTelaConclusao();
            return;
        }
        destacarPrimeiroCardDaFila();
    }, 350);

    // 8. Atualizar overview e progresso
    renderOverview();
    updateOverallProgress();
}

/**
 * @param {string} dataProxima - Data no formato YYYY-MM-DD
 */
function mostrarToast(dataProxima, posY) {
    const hoje = parseLocalDate(formatLocalDate()) || new Date();
    const proxima = parseLocalDate(dataProxima);
    if (!proxima) return;

    const diffMs = proxima - hoje;
    const dias = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const dataFormatada = proxima.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

    let relativo = '';
    if (dias === 0) relativo = 'hoje';
    else if (dias === 1) relativo = 'amanhã';
    else if (dias < 7) relativo = `${dias} dias`;
    else if (dias < 30) relativo = `${Math.round(dias / 7)} sem`;
    else relativo = `${Math.round(dias / 30)} mês`;

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.top = `${Math.max(posY, 80)}px`;
    toast.innerHTML = `
        <span class="toast-icon">OK</span>
        Agendado: <span class="toast-date">${dataFormatada}</span>
        <span class="toast-relative">(${relativo})</span>
    `;

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3100);
}

function mostrarTelaConclusao() {
    const container = document.getElementById('scheduleOutput');
    container.innerHTML = `
        <div class="meta-concluida" style="text-align:center; padding: 50px;">
            <h2 style="color:#22c55e;">Meta diária concluída!</h2>
            <p>Você completou suas ${appState.config.sessionsPerDay} sessões de hoje.</p>
            <p style="font-size:0.85em; color:#94a3b8;">Volte amanhã para continuar seu progresso.</p>
            <button class="btn" onclick="location.reload()" style="margin-top:20px;">Atualizar página</button>
        </div>
    `;
}

function verificarFimDaSessao() {
    sessoesRestantesHoje--;

    const contadorEl = document.getElementById('sessoesRestantes');
    if (contadorEl) {
        contadorEl.textContent = `${sessoesRestantesHoje} sessões restantes`;
    }

    const cardsNaTela = document.querySelectorAll('.srs-card').length;

    if (sessoesRestantesHoje <= 0 || cardsNaTela === 0) {
        const container = document.getElementById('scheduleOutput');
        container.innerHTML = `
            <div class="meta-concluida" style="text-align:center; padding: 50px;">
                <h2 style="color:#22c55e;">Meta diária concluída!</h2>
                <p>Você completou suas ${appState.config.sessionsPerDay} sessões de hoje.</p>
                <p style="font-size:0.85em; color:#94a3b8;">Volte amanhã para continuar seu progresso.</p>
                <button class="btn" onclick="location.reload()" style="margin-top:20px;">Atualizar página</button>
            </div>
        `;
    }
}

let atalhosTecladoConfigurados = false;

function configurarAtalhosTeclado() {
    if (atalhosTecladoConfigurados) return;
    atalhosTecladoConfigurados = true;

    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey || event.metaKey || event.altKey) return;

        const target = event.target;
        if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;

        const gradeByKey = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            Numpad0: 0,
            Numpad1: 1,
            Numpad2: 2,
            Numpad3: 3
        };

        const grade = gradeByKey[event.key] ?? gradeByKey[event.code];
        if (grade === undefined) return;

        const card = document.querySelector('.srs-card');
        if (!card) return;

        const topicId = card.getAttribute('data-topic-id');
        if (!topicId) return;

        event.preventDefault();
        responderSRS(topicId, grade);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    inicializarTema();
    loadState();
    renderConfig();

    // Default: Initialize weights for each unique disciplina if missing (Internally used for grouping)
    if (Object.keys(appState.config.weights || {}).length === 0) {
        appState.config.weights = {};
        const disciplinas = [...new Set(SYLLABUS.map(t => t.disciplina))];
        disciplinas.forEach(d => appState.config.weights[d] = 3);
    }

    // Config Inputs & Countdown
    renderConfig();
    atualizarCountdown();
    document.getElementById('examDate').addEventListener('change', atualizarCountdown);
    const studyModeSelect = document.getElementById('studyMode');
    if (studyModeSelect) {
        studyModeSelect.addEventListener('change', () => {
            appState.config.studyMode = normalizarStudyMode(studyModeSelect.value);
            saveState();
            atualizarGuiaAvaliacao();
            if (appState.generated) {
                renderScheduleFromCache();
            }
        });
    }
    configurarAtalhosTeclado();

    // Events
    document.getElementById('generateBtn').addEventListener('click', generateSchedule);
    document.getElementById('printBtn').addEventListener('click', () => window.print());
    document.getElementById('resetBtn').addEventListener('click', resetData);
    aplicarTituloNaUI();

    // Backup button: Salvar (download JSON)
    const backupBtn = document.getElementById('backupBtn');
    if (backupBtn) {
        backupBtn.addEventListener('click', baixarBackup);
    }

    // Upload backup: Carregar arquivo JSON
    const uploadInput = document.getElementById('uploadBackup');
    if (uploadInput) {
        uploadInput.addEventListener('change', carregarBackupDoArquivo);
    }

    // Calibration button
    const calibrarBtn = document.getElementById('calibrarBtn');
    if (calibrarBtn) {
        calibrarBtn.addEventListener('click', abrirModalCalibragem);
    }

    const editSyllabusBtn = document.getElementById('editSyllabusBtn');
    if (editSyllabusBtn) {
        editSyllabusBtn.addEventListener('click', abrirModalConteudoProgramatico);
    }

    const editTitleBtn = document.getElementById('editTitleBtn');
    if (editTitleBtn) {
        editTitleBtn.addEventListener('click', abrirModalTitulo);
    }

    const retaFinalBtn = document.getElementById('btnRetaFinal');
    if (retaFinalBtn) {
        retaFinalBtn.addEventListener('click', toggleModoRetaFinal);
    }

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });

    if (appState.generated) {
        renderSchedule();
        renderOverview();
    }

    atualizarBotaoRetaFinal();
    updateOverallProgress();
});

// Toggle Configuration Panel visibility
function toggleConfig() {
    const panel = document.getElementById('configPanel');
    const btn = document.getElementById('toggleConfigBtn');

    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        btn.textContent = 'Ocultar configurações';
    } else {
        panel.style.display = 'none';
        btn.textContent = 'Mostrar configurações';
    }
}

// =====================================================
// FILE SYSTEM BACKUP (Auto-sync com arquivo local)
// =====================================================

let fileHandle = null; // Handle do arquivo selecionado

/**
 */
async function selecionarArquivoBackup() {
    try {
        // Verifica suporte
        if (!('showSaveFilePicker' in window)) {
            alert('Seu navegador não suporta backup automático. Use Chrome ou Edge.');
            return;
        }

        fileHandle = await window.showSaveFilePicker({
            suggestedName: 'editaliza_backup.json',
            types: [{
                description: 'JSON Backup',
                accept: { 'application/json': ['.json'] }
            }]
        });

        // Salva imediatamente
        await salvarNoArquivo();
        atualizarStatusSync(true, 'Conectado');

    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Erro ao selecionar arquivo:', err);
            atualizarStatusSync(false, 'Erro');
        }
    }
}

/**
 * Salva dados no arquivo selecionado
 */
async function salvarNoArquivo() {
    if (!fileHandle) return;

    try {
        const writable = await fileHandle.createWritable();
        await writable.write(JSON.stringify(appState, null, 2));
        await writable.close();

        atualizarStatusSync(true);
    } catch (err) {
        console.error('Erro ao salvar no arquivo:', err);
        atualizarStatusSync(false, 'Erro ao salvar');
    }
}

/**
 * DOWNLOAD BACKUP: Baixa o progresso como arquivo JSON
 */
function baixarBackup() {
    const payload = {
        ...appState,
        __customSyllabus: SYLLABUS.map(({ disciplina, nome, relevancia }) => ({ disciplina, nome, relevancia })),
        __customTitle: { ...appPresentation }
    };
    const dataStr = JSON.stringify(payload, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const hoje = formatLocalDate();
    const a = document.createElement('a');
    a.href = url;
    a.download = `editaliza_backup_${hoje}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    atualizarStatusSync(true, 'Backup baixado');
}

/**
 * UPLOAD BACKUP: Carrega backup de arquivo selecionado
 */
function carregarBackupDoArquivo(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const dados = JSON.parse(e.target.result);
            if (dados.__customTitle && typeof dados.__customTitle === 'object') {
                appPresentation = normalizarTituloCustomizado(dados.__customTitle);
                salvarTituloNoStorage();
                aplicarTituloNaUI();
            }
            if (Array.isArray(dados.__customSyllabus) && dados.__customSyllabus.length > 0) {
                const rawText = dados.__customSyllabus
                    .map(item => `${item.disciplina || ''};${item.nome || ''};${item.relevancia ?? 3}`)
                    .join('\n');
                const parsed = parseConteudoProgramatico(rawText);
                if (parsed.length > 0) {
                    SYLLABUS = parsed;
                    reconstruirIndicesConteudo();
                    salvarConteudoProgramaticoNoStorage();
                }
            }
            appState = normalizarAppState(dados);
            sincronizarEstadoComConteudo();
            saveState();
            atualizarStatusSync(true, 'Backup carregado');
            location.reload();
        } catch (err) {
            alert(`Erro ao ler arquivo de backup: ${err.message}`);
            console.error('Erro ao carregar backup:', err);
        }
    };
    reader.readAsText(file);
}

/**
 * Carrega dados de um arquivo existente
 */
async function carregarDoArquivo() {
    try {
        if (!('showOpenFilePicker' in window)) {
            alert('Seu navegador não suporta esta funcionalidade. Use Chrome ou Edge.');
            return;
        }

        const [handle] = await window.showOpenFilePicker({
            types: [{
                description: 'JSON Backup',
                accept: { 'application/json': ['.json'] }
            }]
        });

        fileHandle = handle;
        const file = await handle.getFile();
        const contents = await file.text();
        const parsed = JSON.parse(contents);
        if (parsed.__customTitle && typeof parsed.__customTitle === 'object') {
            appPresentation = normalizarTituloCustomizado(parsed.__customTitle);
            salvarTituloNoStorage();
            aplicarTituloNaUI();
        }
        if (Array.isArray(parsed.__customSyllabus) && parsed.__customSyllabus.length > 0) {
            const rawText = parsed.__customSyllabus
                .map(item => `${item.disciplina || ''};${item.nome || ''};${item.relevancia ?? 3}`)
                .join('\n');
            const parsedSyllabus = parseConteudoProgramatico(rawText);
            if (parsedSyllabus.length > 0) {
                SYLLABUS = parsedSyllabus;
                reconstruirIndicesConteudo();
                salvarConteudoProgramaticoNoStorage();
            }
        }

        appState = normalizarAppState(parsed);
        sincronizarEstadoComConteudo();
        saveState();
        atualizarStatusSync(true, 'Carregado');
        location.reload();

    } catch (err) {
        if (err.name !== 'AbortError') {
            alert(`Erro ao carregar arquivo: ${err.message}`);
            console.error('Erro ao carregar arquivo:', err);
        }
    }
}

/**
 * Atualiza indicador de sincronização
 */
function atualizarStatusSync(ok, texto) {
    const el = document.getElementById('syncStatus');
    if (!el) return;

    if (ok) {
        el.textContent = texto || `Salvo ${new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
        el.style.color = '#22c55e';
    } else {
        el.textContent = texto || 'Erro';
        el.style.color = '#ef4444';
    }
}

function saveState() {
    localStorage.setItem(PERSONAL_DB_KEY, JSON.stringify(appState));

    // Auto-sync se arquivo estiver conectado
    if (fileHandle) {
        salvarNoArquivo();
    }
}

function loadState() {
    const saved = localStorage.getItem(PERSONAL_DB_KEY);
    if (saved) {
        try {
            appState = normalizarAppState(JSON.parse(saved));
            sincronizarEstadoComConteudo();
        } catch (e) {
            console.error('Erro ao carregar dados, resetando...', e);
            localStorage.removeItem(PERSONAL_DB_KEY);
            location.reload();
            return;
        }
    } else {
        appState = normalizarAppState(appState);
        sincronizarEstadoComConteudo();
    }
    updateOverallProgress();
}

function resetData() {
    if (confirm('Tem certeza? Isso apagara todo o seu progresso.')) {
        localStorage.removeItem(PERSONAL_DB_KEY);
        localStorage.removeItem(SYLLABUS_STORAGE_KEY);
        localStorage.removeItem(TITLE_STORAGE_KEY);
        location.reload();
    }
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

function renderConfig() {
    if (appState.config.examDate) {
        document.getElementById('examDate').value = appState.config.examDate;
    }
    if (appState.config.sessionsPerDay) {
        document.getElementById('sessionsPerDay').value = appState.config.sessionsPerDay;
    }
    appState.config.studyMode = normalizarStudyMode(appState.config.studyMode);
    const studyModeSelect = document.getElementById('studyMode');
    if (studyModeSelect) {
        studyModeSelect.value = appState.config.studyMode;
    }
    atualizarGuiaAvaliacao();
}

function gerarIconeRelevancia(peso) {
    if (peso === 5) return '<span style="color: #f97316; font-weight: 700;">MAX</span>';
    if (peso === 4) return '<span style="color: #38bdf8; font-weight: 700;">ALTA</span>';
    if (peso === 3) return '<span style="color: #22c55e; font-weight: 700;">MEDIA</span>';
    return '<span style="color: #64748b; font-weight: 700;">BASE</span>';
}

function corBorda(peso) {
    if (peso === 5) return '#e67e22';
    if (peso === 4) return '#2980b9';
    if (peso === 3) return '#27ae60';
    return '#bdc3c7';
}

// --- SCHEDULE GENERATION AND RENDERING ---

function generateSchedule() {
    const examDateValue = document.getElementById('examDate').value;
    appState.config.examDate = isValidISODate(examDateValue) ? examDateValue : '';
    appState.config.sessionsPerDay = normalizarSessionsPerDay(document.getElementById('sessionsPerDay').value);
    const studyModeSelect = document.getElementById('studyMode');
    appState.config.studyMode = normalizarStudyMode(studyModeSelect ? studyModeSelect.value : appState.config.studyMode);

    if (!confirm('Iniciar o cronograma SRS para hoje?')) {
        return;
    }

    SYLLABUS.forEach(topico => {
        initTopicState(topico.id, topico.relevancia);
    });

    appState.generated = true;
    saveState();

    iniciarSessaoDoDia();
    renderOverview();
    updateOverallProgress();
    verificarPrimeiraCalibragem();
}

function renderSchedule() {
    iniciarSessaoDoDia();
}

/**
 * Renderiza os cards a partir do cache (nao regenera a fila)
 */
function renderScheduleFromCache() {
    const container = document.getElementById('scheduleOutput');
    container.innerHTML = '';

    const fila = filaDoDiaCache;

    if (fila.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="padding:40px; text-align:center;">
                <h3 style="color:#22c55e;">Tudo em dia!</h3>
                <p>Não há tópicos para revisar hoje.</p>
                <p style="font-size:0.9em; color:#94a3b8;">Novos tópicos aparecerão quando revisões vencerem.</p>
            </div>
        `;
        return;
    }

    const hojeISO = formatLocalDate();
    const hoje = parseLocalDate(hojeISO) || new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const label = hoje.toLocaleDateString('pt-BR', options);

    const revisoes = fila.filter(t => t.__bucket === 'review').length;
    const novos = fila.filter(t => t.__bucket !== 'review').length;
    const guiaAvaliacao = obterGuiaAvaliacaoPorModo();
    const ajudaNotas = guiaAvaliacao.tooltips;

    let html = `
        <div class="day-card">
            <div class="day-header">
                <span>${label}</span>
                <span id="sessoesRestantes">${sessoesRestantesHoje} sessões restantes</span>
            </div>
            <div class="queue-legend">
                <span class="legend-item review">${revisoes} revisões</span>
                <span class="legend-item new">${novos} novos</span>
            </div>
            <div class="session-list" role="list" aria-label="Fila de estudos do dia">
    `;

    fila.forEach((topico, index) => {
        const cardId = `card-${topico.id.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const motivo = topico.__why || construirMotivoCard(topico, hojeISO);
        const isNovo = motivo.isNovo;

        const prevErrei = simularIntervalo(topico, 0);
        const prevDificil = simularIntervalo(topico, 1);
        const prevBom = simularIntervalo(topico, 2);
        const prevFacil = simularIntervalo(topico, 3);

        const estrelas = '*'.repeat(topico.relevancia) + '-'.repeat(5 - topico.relevancia);
        const titulo = escapeHtml(topico.name);
        const disciplina = escapeHtml(topico.subject);
        const motivoMain = escapeHtml(motivo.bucketText);
        const ariaErrei = escapeHtml(`Responder Errei para ${topico.name}. Próxima revisão estimada em ${prevErrei}.`);
        const ariaDificil = escapeHtml(`Responder Difícil para ${topico.name}. Próxima revisão estimada em ${prevDificil}.`);
        const ariaBom = escapeHtml(`Responder Bom para ${topico.name}. Próxima revisão estimada em ${prevBom}.`);
        const ariaFacil = escapeHtml(`Responder Fácil para ${topico.name}. Próxima revisão estimada em ${prevFacil}.`);

        const infoR = `<span class="mini-kpi" data-tooltip="${escapeHtml(tooltipRecuperabilidade(motivo))}">R ${escapeHtml(motivo.rText)}</span>`;
        const infoS = `<span class="mini-kpi" data-tooltip="${escapeHtml(tooltipEstabilidade(motivo, Number(topico.difficulty) || 5))}">S ${escapeHtml(motivo.sText)}</span>`;
        const infoA = `<span class="mini-kpi" data-tooltip="${escapeHtml(tooltipAtraso(motivo))}">A ${escapeHtml(motivo.atrasoText)}</span>`;
        const impactoPratico = escapeHtml(motivo.impactoPratico);

        html += `
            <div class="session-item srs-card" id="${cardId}" data-topic-id="${topico.id}" role="listitem" aria-label="${titulo}" style="--card-index:${index};">
                <div class="card-header">
                    <h3 class="topic-title">${titulo}</h3>
                    ${isNovo ? '<span class="badge-novo">NOVO</span>' : '<span class="badge-revisao">REVISÃO</span>'}
                </div>

                <div class="card-meta">
                    <span class="meta-discipline">${disciplina}</span>
                    <span class="meta-separator">|</span>
                    <span class="meta-relevance">${estrelas}</span>
                </div>

                <div class="card-why" aria-live="polite">
                    <span class="why-title">Por que este card agora</span>
                    <span class="why-main">${motivoMain}</span>
                    <span class="why-sub">${infoR}${infoS}${infoA}</span>
                    <span class="why-impact">${impactoPratico}</span>
                </div>

                <div class="srs-buttons-grid">
                    <button class="srs-btn btn-errei" onclick="responderSRS('${topico.id}', 0)" data-grade="0" data-tooltip="${escapeHtml(ajudaNotas.errei)}" aria-label="${ariaErrei}">
                        <span class="btn-label">Errei</span>
                        <span class="btn-interval">${prevErrei}</span>
                    </button>
                    <button class="srs-btn btn-dificil" onclick="responderSRS('${topico.id}', 1)" data-grade="1" data-tooltip="${escapeHtml(ajudaNotas.dificil)}" aria-label="${ariaDificil}">
                        <span class="btn-label">Difícil</span>
                        <span class="btn-interval">${prevDificil}</span>
                    </button>
                    <button class="srs-btn btn-bom" onclick="responderSRS('${topico.id}', 2)" data-grade="2" data-tooltip="${escapeHtml(ajudaNotas.bom)}" aria-label="${ariaBom}">
                        <span class="btn-label">Bom</span>
                        <span class="btn-interval">${prevBom}</span>
                    </button>
                    <button class="srs-btn btn-facil" onclick="responderSRS('${topico.id}', 3)" data-grade="3" data-tooltip="${escapeHtml(ajudaNotas.facil)}" aria-label="${ariaFacil}">
                        <span class="btn-label">Fácil</span>
                        <span class="btn-interval">${prevFacil}</span>
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    container.innerHTML = html;
    destacarPrimeiroCardDaFila();
}

function calcularResumoDSGlobal() {
    let somaD = 0;
    let countD = 0;
    let somaS = 0;
    let countS = 0;

    SYLLABUS.forEach(topico => {
        const estado = appState.topicsState[topico.id];
        if (!estado) return;

        const dificuldade = Number(estado.difficulty);
        if (Number.isFinite(dificuldade)) {
            somaD += dificuldade;
            countD++;
        }

        const estabilidade = Number(estado.stability);
        const revisoes = estado.reps ?? estado.historico_revisoes ?? 0;
        if (Number.isFinite(estabilidade) && revisoes > 0) {
            somaS += estabilidade;
            countS++;
        }
    });

    return {
        mediaD: countD > 0 ? somaD / countD : null,
        mediaS: countS > 0 ? somaS / countS : null,
        countS
    };
}

// --- OVERVIEW (VERTICALIZED) - FSRS v5 Version ---
function renderOverview() {
    const container = document.getElementById('overviewOutput');
    const hoje = formatLocalDate();

    SYLLABUS.forEach(topico => {
        initTopicState(topico.id, topico.relevancia);
    });

    const resumoDS = calcularResumoDSGlobal();
    const mediaDText = resumoDS.mediaD !== null ? formatDecimalPt(resumoDS.mediaD, 1) : '-';
    const mediaSText = resumoDS.mediaS !== null ? `${Math.round(resumoDS.mediaS)}d` : '-';

    container.innerHTML = `
        <div class="overview-explainer">
            <h3>Como ler Dificuldade | Estabilidade (D | S)</h3>
            <p><strong>Dificuldade (D, 1 a 10):</strong> quanto maior, mais esforço o tema exige para lembrar com segurança.</p>
            <p><strong>Estabilidade (S, em dias):</strong> durabilidade média da memória. S maior permite intervalos maiores; S menor exige revisões mais próximas.</p>
            <p><strong>Exemplo:</strong> <code>5,8 | 45d</code> indica dificuldade intermediária para difícil e memória já durando cerca de 45 dias.</p>
            <p class="overview-explainer-summary">Média atual dos tópicos revisados: D ${mediaDText} | S ${mediaSText} (${resumoDS.countS} tópicos com histórico).</p>
        </div>
        <div class="overview-header-row">
            <span>Tópico</span>
            <span>Peso</span>
            <span>Status</span>
            <span>Dificuldade | Estabilidade</span>
            <span>Revisões</span>
            <span>Próxima</span>
        </div>
    `;

    const porDisciplina = {};
    SYLLABUS.forEach(topico => {
        if (!porDisciplina[topico.disciplina]) {
            porDisciplina[topico.disciplina] = [];
        }
        porDisciplina[topico.disciplina].push(topico);
    });

    Object.keys(porDisciplina).forEach(disciplina => {
        const topicos = porDisciplina[disciplina];
        const card = document.createElement('div');
        card.className = 'subject-overview';
        let html = `<h3>${disciplina}</h3>`;

        topicos.forEach(topico => {
            const estado = appState.topicsState[topico.id] || {};

            const reps = estado.reps ?? estado.historico_revisoes ?? 0;
            const isNovo = reps === 0 || estado.state === 0;
            const isVencido = estado.data_proxima_revisao && estado.data_proxima_revisao < hoje;
            const isHoje = estado.data_proxima_revisao === hoje;
            const isFuturo = estado.data_proxima_revisao && estado.data_proxima_revisao > hoje;

            let statusHtml = '';
            if (isNovo) {
                statusHtml = '<span class="srs-status status-novo">Novo</span>';
            } else if (isVencido) {
                statusHtml = '<span class="srs-status status-vencido">Atrasado</span>';
            } else if (isHoje) {
                statusHtml = '<span class="srs-status status-hoje">Hoje</span>';
            } else if (isFuturo) {
                const diff = Math.max(0, diffDaysISO(hoje, estado.data_proxima_revisao));
                statusHtml = `<span class="srs-status status-agendado">Daqui ${diff}d</span>`;
            }

            const dificuldade = Number(estado.difficulty);
            const dificuldadeVal = Number.isFinite(dificuldade) ? dificuldade : 5;
            const estabilidade = Number(estado.stability);
            const estabilidadeVal = Number.isFinite(estabilidade) ? Math.max(0, estabilidade) : 0;

            const dsDisplay = `${formatDecimalPt(dificuldadeVal, 1)} | ${estabilidadeVal < 1 ? '<1' : Math.round(estabilidadeVal)}d`;
            const dInfo = classificarDificuldade(dificuldadeVal);
            const sInfo = classificarEstabilidade(estabilidadeVal);
            const dsTooltip = `D ${formatDecimalPt(dificuldadeVal, 1)} (${dInfo.resumo}). S ${estabilidadeVal < 1 ? '<1' : Math.round(estabilidadeVal)}d (${sInfo.resumo}). ${sInfo.influencia}`;

            const proximaDate = parseLocalDate(estado.data_proxima_revisao);
            const proximaDisplay = proximaDate ? proximaDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : '-';

            const pesoClass = topico.relevancia >= 4 ? 'peso-alto' : (topico.relevancia >= 3 ? 'peso-medio' : 'peso-baixo');

            html += `
                <div class="topic-row ${isVencido ? 'vencido' : ''}">
                    <div class="topic-name">
                        <span>${topico.nome}</span>
                    </div>
                    <div class="srs-stat ${pesoClass}">*${topico.relevancia}</div>
                    ${statusHtml}
                    <div class="srs-stat ds-stat tooltip-anchor" data-tooltip="${escapeHtml(dsTooltip)}">${dsDisplay}</div>
                    <div class="srs-stat">${reps}x${estado.lapses ? ` (${estado.lapses} lapsos)` : ''}</div>
                    <div class="srs-stat">${proximaDisplay}</div>
                </div>
            `;
        });

        card.innerHTML += html;
        container.appendChild(card);
    });
}

/**
 */
function updateStatusSummary() {
    const hoje = formatLocalDate();

    let revisoesPendentes = 0;
    let novosDisponiveis = 0;
    let teEsperando = 0;

    SYLLABUS.forEach(topico => {
        const estado = appState.topicsState[topico.id];

        if (!estado) {
            novosDisponiveis++;
            return;
        }

        const reps = estado.reps ?? estado.historico_revisoes ?? 0;
        if (reps === 0 && !estado.data_proxima_revisao) {
            novosDisponiveis++;
            return;
        }

        if (estado.data_proxima_revisao && estado.data_proxima_revisao <= hoje) {
            teEsperando++;
            if (reps > 0) revisoesPendentes++;
        }
    });

    const elRevisoes = document.getElementById('statusRevisoes');
    const elNovos = document.getElementById('statusNovos');
    const elEsperando = document.getElementById('statusEsperando');

    if (elRevisoes) elRevisoes.textContent = `${revisoesPendentes} na fila`;
    if (elNovos) elNovos.textContent = `${novosDisponiveis} novos`;
    if (elEsperando) elEsperando.textContent = `${teEsperando} aguardando`;
}

function coletarMetricasAprendizagem() {
    const hoje = formatLocalDate();
    const topics = Object.entries(appState.topicsState || {});

    let totalReviews = 0;
    let totalAcertos = 0;
    let totalErros = 0;
    let somaStabilityRecente = 0;
    let countStabilityRecente = 0;
    let somaStabilityAnterior = 0;
    let countStabilityAnterior = 0;
    const disciplinas = {};

    topics.forEach(([topicId, topico]) => {
        const disciplina = TOPICO_POR_ID[topicId]?.disciplina || 'Outras';
        if (!disciplinas[disciplina]) {
            disciplinas[disciplina] = { nome: disciplina, reviews: 0, acertos: 0, erros: 0 };
        }
        const history = normalizarHistory(topico.history);
        history.forEach(entry => {
            totalReviews++;
            disciplinas[disciplina].reviews++;
            if (entry.grade > 0) {
                totalAcertos++;
                disciplinas[disciplina].acertos++;
            } else {
                totalErros++;
                disciplinas[disciplina].erros++;
            }

            const diasAtras = diffDaysISO(entry.date, hoje);
            if (diasAtras >= 0 && diasAtras <= 6) {
                somaStabilityRecente += Number(entry.stability) || 0;
                countStabilityRecente++;
                return;
            }
            if (diasAtras >= 7 && diasAtras <= 13) {
                somaStabilityAnterior += Number(entry.stability) || 0;
                countStabilityAnterior++;
            }
        });
    });

    const accuracy = totalReviews > 0 ? totalAcertos / totalReviews : 0;

    let stabilityTrend = '-';
    let stabilityTrendPct = null;
    let mediaStabilityRecente = null;
    let mediaStabilityAnterior = null;
    if (countStabilityRecente > 0 && countStabilityAnterior > 0) {
        const mediaRecente = somaStabilityRecente / countStabilityRecente;
        const mediaAnterior = somaStabilityAnterior / countStabilityAnterior;
        mediaStabilityRecente = mediaRecente;
        mediaStabilityAnterior = mediaAnterior;
        const delta = mediaRecente - mediaAnterior;
        const percentual = mediaAnterior > 0 ? (delta / mediaAnterior) * 100 : 0;
        stabilityTrendPct = percentual;
        const sinal = percentual >= 0 ? '+' : '';
        stabilityTrend = `${sinal}${Math.round(percentual)}%`;
    } else if (countStabilityRecente > 0) {
        stabilityTrend = 'base inicial';
        mediaStabilityRecente = somaStabilityRecente / countStabilityRecente;
    }

    let carga7d = 0;
    let atrasados = 0;
    let atrasoMaximo = 0;
    let retrievabilityFilaSoma = 0;
    let retrievabilityFilaCount = 0;
    let cardsRiscoNaFila = 0;

    SYLLABUS.forEach(topico => {
        const estado = appState.topicsState[topico.id];
        if (!estado || !isValidISODate(estado.data_proxima_revisao)) return;

        const delta = diffDaysISO(hoje, estado.data_proxima_revisao);
        const atrasoDias = delta < 0 ? Math.abs(delta) : 0;
        if (atrasoDias > atrasoMaximo) atrasoMaximo = atrasoDias;

        if (delta < 0) {
            atrasados++;
            carga7d++;
        } else if (delta <= 6) {
            carga7d++;
        }

        const reps = estado.reps ?? estado.historico_revisoes ?? 0;
        if (reps > 0 && delta <= 0) {
            const elapsed = diasDesdeUltimaRevisao(estado, hoje);
            const stability = Number(estado.stability) || 0;
            const retrievability = calcularRetrievability(stability, elapsed);
            if (Number.isFinite(retrievability)) {
                retrievabilityFilaSoma += retrievability;
                retrievabilityFilaCount++;
                if (retrievability < 0.7) cardsRiscoNaFila++;
            }
        }
    });

    const disciplinasArray = Object.values(disciplinas)
        .filter(item => item.reviews > 0)
        .map(item => ({
            ...item,
            accuracy: item.reviews > 0 ? item.acertos / item.reviews : 0
        }))
        .sort((a, b) => b.reviews - a.reviews || a.nome.localeCompare(b.nome, 'pt-BR'));

    const comparaveis = disciplinasArray.filter(item => item.reviews >= 4);
    let melhorDisciplina = null;
    let piorDisciplina = null;
    if (comparaveis.length > 0) {
        const ordenadas = [...comparaveis].sort((a, b) => b.accuracy - a.accuracy || b.reviews - a.reviews);
        melhorDisciplina = ordenadas[0];
        piorDisciplina = ordenadas[ordenadas.length - 1];
    }

    const sessionsPerDay = normalizarSessionsPerDay(appState.config.sessionsPerDay);
    const capacidade7d = sessionsPerDay * 7;
    const retrievabilityFilaMedia = retrievabilityFilaCount > 0 ? retrievabilityFilaSoma / retrievabilityFilaCount : null;

    return {
        totalReviews,
        totalAcertos,
        totalErros,
        accuracy,
        stabilityTrend,
        stabilityTrendPct,
        mediaStabilityRecente,
        mediaStabilityAnterior,
        countStabilityRecente,
        countStabilityAnterior,
        carga7d,
        atrasados,
        atrasoMaximo,
        retrievabilityFilaMedia,
        retrievabilityFilaCount,
        cardsRiscoNaFila,
        capacidade7d,
        disciplinas: disciplinasArray,
        melhorDisciplina,
        piorDisciplina
    };
}

function renderMetricasAprendizagem() {
    const totalEl = document.getElementById('metricTotalReviews');
    const accEl = document.getElementById('metricAccuracy');
    const trendEl = document.getElementById('metricStabilityTrend');
    const loadEl = document.getElementById('metricLoad7d');
    const reviewsHintEl = document.getElementById('metricReviewsHint');
    const accHintEl = document.getElementById('metricAccuracyHint');
    const trendHintEl = document.getElementById('metricStabilityHint');
    const loadHintEl = document.getElementById('metricLoadHint');
    const insightAccuracyEl = document.getElementById('insightAccuracy');
    const insightTrendEl = document.getElementById('insightTrend');
    const insightLoadEl = document.getElementById('insightLoad');
    const insightOverviewEl = document.getElementById('insightOverview');

    if (!totalEl || !accEl || !trendEl || !loadEl) return;

    const metrics = coletarMetricasAprendizagem();
    const guiaAvaliacao = obterGuiaAvaliacaoPorModo();
    totalEl.textContent = String(metrics.totalReviews);
    accEl.textContent = metrics.totalReviews > 0 ? formatPercent(metrics.accuracy) : '-';
    trendEl.textContent = metrics.stabilityTrend;
    loadEl.textContent = metrics.atrasados > 0 ? `${metrics.carga7d} (${metrics.atrasados} atrasados)` : String(metrics.carga7d);

    if (reviewsHintEl) {
        if (metrics.totalReviews === 0) {
            reviewsHintEl.textContent = 'Sem histórico ainda. As próximas respostas calibram o algoritmo.';
        } else if (metrics.totalReviews < 20) {
            reviewsHintEl.textContent = `Amostra inicial: ${metrics.totalReviews} respostas (${metrics.totalAcertos} acertos, ${metrics.totalErros} erros).`;
        } else {
            reviewsHintEl.textContent = `Amostra robusta: ${metrics.totalReviews} respostas (${metrics.totalAcertos} acertos, ${metrics.totalErros} erros).`;
        }
    }

    if (accHintEl) {
        if (metrics.totalReviews === 0) {
            accHintEl.textContent = 'Sem respostas ainda.';
        } else if (metrics.accuracy === 1 && metrics.totalReviews < 20) {
            accHintEl.textContent = `100% com amostra pequena (${metrics.totalAcertos}/${metrics.totalReviews}). Pode oscilar com novas revisões.`;
        } else if (metrics.accuracy === 1) {
            accHintEl.textContent = `100% significa zero respostas "Errei" no histórico (${metrics.totalAcertos}/${metrics.totalReviews}).`;
        } else {
            accHintEl.textContent = `${metrics.totalAcertos} acertos e ${metrics.totalErros} erros no histórico (${metrics.totalReviews} respostas).`;
        }
    }

    if (trendHintEl) {
        if (metrics.stabilityTrendPct !== null) {
            if (metrics.stabilityTrendPct >= 10) {
                trendHintEl.textContent = `Subiu: sua memória está durando mais (S média ${formatDecimalPt(metrics.mediaStabilityAnterior, 1)}d -> ${formatDecimalPt(metrics.mediaStabilityRecente, 1)}d).`;
            } else if (metrics.stabilityTrendPct <= -10) {
                trendHintEl.textContent = `Caiu: sua memória está durando menos (S média ${formatDecimalPt(metrics.mediaStabilityAnterior, 1)}d -> ${formatDecimalPt(metrics.mediaStabilityRecente, 1)}d).`;
            } else {
                trendHintEl.textContent = `Estável: pequena variação de S média (${formatDecimalPt(metrics.mediaStabilityAnterior, 1)}d -> ${formatDecimalPt(metrics.mediaStabilityRecente, 1)}d).`;
            }
        } else if (metrics.countStabilityRecente > 0) {
            trendHintEl.textContent = 'Base inicial: ainda falta semana anterior comparável.';
        } else {
            trendHintEl.textContent = 'Aguardando revisões para medir tendência.';
        }
    }

    if (loadHintEl) {
        const ocupacao = metrics.capacidade7d > 0 ? metrics.carga7d / metrics.capacidade7d : 0;
        if (metrics.atrasados > 0) {
            loadHintEl.textContent = `${metrics.atrasados} atrasados aumentam a carga real desta semana.`;
        } else if (ocupacao > 1) {
            loadHintEl.textContent = 'Carga acima da capacidade semanal atual. Ajuste sessões por dia.';
        } else if (ocupacao > 0.75) {
            loadHintEl.textContent = 'Carga alta, mas ainda administrável com consistência diária.';
        } else {
            loadHintEl.textContent = 'Fila sob controle para os próximos 7 dias.';
        }
    }

    const melhorDisciplinaTxt = metrics.melhorDisciplina
        ? `${metrics.melhorDisciplina.nome}: ${formatPercent(metrics.melhorDisciplina.accuracy)} (${metrics.melhorDisciplina.acertos}/${metrics.melhorDisciplina.reviews})`
        : '';
    const piorDisciplinaTxt = metrics.piorDisciplina
        ? `${metrics.piorDisciplina.nome}: ${formatPercent(metrics.piorDisciplina.accuracy)} (${metrics.piorDisciplina.acertos}/${metrics.piorDisciplina.reviews})`
        : '';

    if (insightAccuracyEl) {
        let interpretacao = 'Sem respostas ainda.';
        if (metrics.totalReviews > 0) {
            interpretacao = `${formatPercent(metrics.accuracy)} representa ${metrics.totalAcertos} acertos em ${metrics.totalReviews} respostas (conta como acerto qualquer nota 1, 2 ou 3).`;
        }

        let recorte = 'Com poucas respostas, esse número oscila bastante.';
        if (metrics.totalReviews >= 20) {
            recorte = 'Com mais amostra, o indicador fica mais confiável para medir progresso real.';
        }
        if (metrics.melhorDisciplina && metrics.piorDisciplina && metrics.melhorDisciplina.nome !== metrics.piorDisciplina.nome) {
            recorte = `Leitura por disciplina: melhor ${melhorDisciplinaTxt}. Ponto de atenção ${piorDisciplinaTxt}.`;
        }

        insightAccuracyEl.innerHTML = `
            <h3>Acerto global</h3>
            <p><strong>Fórmula:</strong> acerto = respostas com nota 1/2/3 ÷ total de respostas.</p>
            <p><strong>Critério de nota atual:</strong> ${escapeHtml(guiaAvaliacao.nome)}.</p>
            <p>${escapeHtml(interpretacao)}</p>
            <p>${escapeHtml(recorte)}</p>
        `;
    }

    if (insightTrendEl) {
        let leituraLeiga = 'Ainda sem base comparável.';
        let leituraTecnica = 'TS = ((S média dos últimos 7 dias - S média da semana anterior) / S média da semana anterior) × 100.';
        let acaoTrend = 'Continue revisando diariamente para formar duas semanas de histórico.';
        if (metrics.stabilityTrendPct !== null) {
            const pct = Math.round(metrics.stabilityTrendPct);
            if (pct >= 10) {
                leituraLeiga = `Leitura leiga: sua memória está consolidando melhor que na semana passada (${pct >= 0 ? '+' : ''}${pct}%).`;
            } else if (pct <= -10) {
                leituraLeiga = `Leitura leiga: sua memória está “escorregando” em relação à semana passada (${pct >= 0 ? '+' : ''}${pct}%).`;
            } else {
                leituraLeiga = `Leitura leiga: estabilidade praticamente estável (${pct >= 0 ? '+' : ''}${pct}%).`;
            }
            leituraTecnica = `TS = ((${formatDecimalPt(metrics.mediaStabilityRecente, 1)} - ${formatDecimalPt(metrics.mediaStabilityAnterior, 1)}) / ${formatDecimalPt(metrics.mediaStabilityAnterior, 1)}) × 100 = ${pct >= 0 ? '+' : ''}${pct}%.`;
            if (metrics.stabilityTrendPct >= 0) {
                acaoTrend = 'S em alta normalmente indica boa consistência e respostas honestas.';
            } else {
                acaoTrend = 'S em queda costuma indicar atrasos, sequência de "Errei" ou notas infladas antes de lapsos.';
            }
        } else if (metrics.countStabilityRecente > 0) {
            leituraLeiga = `Base inicial com ${metrics.countStabilityRecente} revisões recentes.`;
        }

        insightTrendEl.innerHTML = `
            <h3>Tendência de estabilidade</h3>
            <p><strong>Leigo:</strong> indicador de “durabilidade da memória”. Se sobe, você tende a esquecer mais devagar; se cai, mais rápido.</p>
            <p>${escapeHtml(leituraLeiga)}</p>
            <p><strong>Técnico:</strong> ${escapeHtml(leituraTecnica)}</p>
            <p>${escapeHtml(acaoTrend)}</p>
        `;
    }

    if (insightLoadEl) {
        const ocupacao = metrics.capacidade7d > 0 ? metrics.carga7d / metrics.capacidade7d : 0;
        const ocupacaoTxt = `${Math.round(ocupacao * 100)}%`;
        const retrievabilityTxt = metrics.retrievabilityFilaMedia !== null
            ? `${formatPercent(metrics.retrievabilityFilaMedia)} (em ${metrics.retrievabilityFilaCount} cards vencidos/hoje)`
            : 'sem cards vencidos suficientes para medir';
        const riscoTxt = metrics.cardsRiscoNaFila > 0
            ? `${metrics.cardsRiscoNaFila} cards estão com R abaixo de 70% (maior risco de falha).`
            : 'Sem cards críticos de recuperabilidade no momento.';

        insightLoadEl.innerHTML = `
            <h3>Carga de revisão</h3>
            <p><strong>O que mede:</strong> atrasados + cards previstos para os próximos 7 dias.</p>
            <p>Fila da semana: ${metrics.carga7d} cards para uma capacidade estimada de ${metrics.capacidade7d} (${ocupacaoTxt}).</p>
            <p>${metrics.atrasados > 0 ? `${metrics.atrasados} atrasados (máx. ${metrics.atrasoMaximo}d). ` : ''}R médio da fila urgente: ${retrievabilityTxt}. ${riscoTxt}</p>
        `;
    }

    if (insightOverviewEl) {
        insightOverviewEl.innerHTML = `
            <h3>Edital verticalizado</h3>
            <p><strong>D | S</strong> resume dificuldade e estabilidade de cada tópico. Exemplo: <code>5,8 | 45d</code>.</p>
            <p><strong>D (1-10):</strong> maior D = mais difícil para você, então o algoritmo tende a segurar intervalos.</p>
            <p><strong>S (dias):</strong> maior S = memória mais durável, então o tópico pode aparecer com mais espaçamento.</p>
            <p><strong>Na prática:</strong> se D estiver alto e S baixo, esse tema exige revisão frequente e resposta honesta para evoluir.</p>
        `;
    }
}

// Alias para compatibilidade
function updateOverallProgress() {
    updateStatusSummary();
    renderMetricasAprendizagem();
}

/**
 * Ativa Reta Final automaticamente quando <= 15 dias
 */
function atualizarCountdown() {
    const examDateInput = document.getElementById('examDate');
    const countdownEl = document.getElementById('examCountdown');

    if (!examDateInput || !countdownEl) return;

    const examDate = examDateInput.value;
    if (!examDate || !isValidISODate(examDate)) {
        appState.config.examDate = '';
        saveState();
        countdownEl.textContent = '';
        atualizarBotaoRetaFinal();
        return;
    }

    appState.config.examDate = examDate;
    saveState();

    const hojeISO = formatLocalDate();
    const diasRestantes = Math.ceil(diffDaysISO(hojeISO, examDate));

    if (diasRestantes < 0) {
        countdownEl.textContent = 'Prova já passou';
        countdownEl.style.color = '#94a3b8';
    } else if (diasRestantes === 0) {
        countdownEl.textContent = 'Hoje é o dia';
        countdownEl.style.color = '#ef4444';
    } else if (diasRestantes <= 15) {
        countdownEl.textContent = `${diasRestantes} dias - reta final`;
        countdownEl.style.color = '#f97316';

        if (!modoRetaFinal) {
            modoRetaFinal = true;
            atualizarBotaoRetaFinal();
            if (appState.generated) {
                iniciarSessaoDoDia();
                renderOverview();
                updateOverallProgress();
            }
            console.log('Modo reta final ativado automaticamente');
        }
    } else if (diasRestantes <= 30) {
        countdownEl.textContent = `${diasRestantes} dias`;
        countdownEl.style.color = '#f59e0b';
    } else {
        countdownEl.textContent = `${diasRestantes} dias`;
        countdownEl.style.color = '#22c55e';
    }

    atualizarBotaoRetaFinal();
}

/**
 * Alterna o Modo Reta Final
 */
function toggleModoRetaFinal() {
    modoRetaFinal = !modoRetaFinal;
    atualizarBotaoRetaFinal();
    if (appState.generated) {
        iniciarSessaoDoDia(); // Re-gera a fila com o filtro
        renderOverview();
        updateOverallProgress();
        mostrarToastSimples(
            modoRetaFinal
                ? 'Reta Final ON: fila diária recalculada com foco em relevância alta (>=3), sem perder histórico.'
                : 'Reta Final OFF: fila diária recalculada incluindo novamente todo o edital.'
        );
    } else {
        mostrarToastSimples(
            modoRetaFinal
                ? 'Reta Final ON ativado. O filtro será aplicado ao gerar a fila diária.'
                : 'Reta Final OFF ativado. O edital completo será usado ao gerar a fila diária.'
        );
    }
}

function getSubjectColor(subject) {
    let hash = 0;
    for (let i = 0; i < subject.length; i++) {
        hash = subject.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '#' + "00000".substring(0, 6 - c.length) + c;
}

// =====================================================
// CALIBRATION MODAL - Bulk Topic Classification
// =====================================================

const CALIBRATION_LEVELS = [
    { id: 0, label: 'Tópico desconhecido', stability: 0, interval: 0 },
    { id: 1, label: 'Vi por cima, não fixou', stability: 1, interval: 1 },
    { id: 2, label: 'Estudei, preciso revisar', stability: 4, interval: 4 },
    { id: 3, label: 'Tenho segurança', stability: 14, interval: 14 },
    { id: 4, label: 'Expert, só manutenção', stability: 30, interval: 30 }
];

const SYLLABUS_STORAGE_KEY = `editaliza_${CARGO}_custom_syllabus_v1`;
const TITLE_STORAGE_KEY = `editaliza_${CARGO}_custom_title_v1`;
const DEFAULT_APP_TITLE = 'Monitorest · Técnico';
const DEFAULT_APP_SUBTITLE = 'Técnico Administrativo (Quadrix)';
let SYLLABUS = carregarConteudoProgramatico();
let RELEVANCIA_POR_ID = {};
let TOPICO_POR_ID = {};
let appPresentation = carregarTituloCustomizado();
reconstruirIndicesConteudo();

function normalizarTituloCustomizado(rawTitle) {
    const title = String(rawTitle?.title || '').trim().slice(0, 80);
    const subtitle = String(rawTitle?.subtitle || '').trim().slice(0, 120);
    return {
        title: title || DEFAULT_APP_TITLE,
        subtitle: subtitle || DEFAULT_APP_SUBTITLE
    };
}

function carregarTituloCustomizado() {
    const raw = localStorage.getItem(TITLE_STORAGE_KEY);
    if (!raw) {
        return { title: DEFAULT_APP_TITLE, subtitle: DEFAULT_APP_SUBTITLE };
    }
    try {
        return normalizarTituloCustomizado(JSON.parse(raw));
    } catch (_err) {
        return { title: DEFAULT_APP_TITLE, subtitle: DEFAULT_APP_SUBTITLE };
    }
}

function salvarTituloNoStorage() {
    localStorage.setItem(TITLE_STORAGE_KEY, JSON.stringify(appPresentation));
}

function aplicarTituloNaUI() {
    const titleEl = document.getElementById('appMainTitle');
    const subtitleEl = document.getElementById('appMainSubtitle');

    if (titleEl) titleEl.textContent = appPresentation.title;
    if (subtitleEl) subtitleEl.textContent = appPresentation.subtitle;

    document.title = `${appPresentation.title} - Cronograma`;
}

function abrirModalTitulo() {
    const titleInput = document.getElementById('titleInput');
    const subtitleInput = document.getElementById('subtitleInput');
    if (titleInput) titleInput.value = appPresentation.title;
    if (subtitleInput) subtitleInput.value = appPresentation.subtitle;

    const modal = document.getElementById('titleModal');
    if (modal) modal.style.display = 'flex';
}

function fecharModalTitulo() {
    const modal = document.getElementById('titleModal');
    if (modal) modal.style.display = 'none';
}

function salvarTituloCronograma() {
    const titleInput = document.getElementById('titleInput');
    const subtitleInput = document.getElementById('subtitleInput');

    const rawTitle = titleInput ? String(titleInput.value || '').trim() : '';
    const rawSubtitle = subtitleInput ? String(subtitleInput.value || '').trim() : '';

    appPresentation = normalizarTituloCustomizado({
        title: rawTitle || DEFAULT_APP_TITLE,
        subtitle: rawSubtitle || DEFAULT_APP_SUBTITLE
    });

    salvarTituloNoStorage();
    aplicarTituloNaUI();
    fecharModalTitulo();
    mostrarToastSimples('Título atualizado com sucesso.');
}

function clonarTopico(base) {
    return {
        id: String(base.id || ''),
        disciplina: String(base.disciplina || ''),
        nome: String(base.nome || ''),
        relevancia: clampInt(base.relevancia, 1, 5, 3)
    };
}

function normalizarStringId(input) {
    return String(input || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 48);
}

function gerarIdDeterministicoTopico(disciplina, nome, usados) {
    const d = normalizarStringId(disciplina) || 'disc';
    const n = normalizarStringId(nome) || 'topico';
    const base = `${d}_${n}`;
    let id = base;
    let i = 2;
    while (usados.has(id)) {
        id = `${base}_${i}`;
        i += 1;
    }
    usados.add(id);
    return id;
}

function textoConteudoProgramatico(topicos = SYLLABUS) {
    return topicos
        .map(t => `${t.disciplina};${t.nome};${t.relevancia}`)
        .join('\n');
}

function parseConteudoProgramatico(texto) {
    const linhas = String(texto || '')
        .split(/\r?\n/)
        .map(l => l.trim())
        .filter(Boolean)
        .filter(l => !l.startsWith('#'));

    const usados = new Set();
    const out = [];

    linhas.forEach((linha) => {
        let partes = linha.split(';').map(p => p.trim());
        if (partes.length < 2) {
            partes = linha.split('\t').map(p => p.trim());
        }
        if (partes.length < 2) return;

        const disciplina = partes[0] || 'Sem disciplina';
        const nome = partes[1] || 'Tópico sem nome';
        const relevancia = clampInt(partes[2], 1, 5, 3);
        const id = gerarIdDeterministicoTopico(disciplina, nome, usados);

        out.push({ id, disciplina, nome, relevancia });
    });

    return out;
}

function carregarConteudoProgramatico() {
    const raw = localStorage.getItem(SYLLABUS_STORAGE_KEY);
    if (!raw) return DEFAULT_SYLLABUS.map(clonarTopico);

    try {
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed) || parsed.length === 0) {
            return DEFAULT_SYLLABUS.map(clonarTopico);
        }

        const usados = new Set();
        const topicos = parsed
            .filter(item => item && typeof item === 'object')
            .map(item => {
                const disciplina = String(item.disciplina || '').trim();
                const nome = String(item.nome || '').trim();
                if (!disciplina || !nome) return null;
                const relevancia = clampInt(item.relevancia, 1, 5, 3);
                const id = gerarIdDeterministicoTopico(disciplina, nome, usados);
                return { id, disciplina, nome, relevancia };
            })
            .filter(Boolean);

        return topicos.length > 0 ? topicos : DEFAULT_SYLLABUS.map(clonarTopico);
    } catch (_err) {
        return DEFAULT_SYLLABUS.map(clonarTopico);
    }
}

function salvarConteudoProgramaticoNoStorage() {
    const serializado = SYLLABUS.map(({ disciplina, nome, relevancia }) => ({
        disciplina,
        nome,
        relevancia
    }));
    localStorage.setItem(SYLLABUS_STORAGE_KEY, JSON.stringify(serializado));
}

function reconstruirIndicesConteudo() {
    RELEVANCIA_POR_ID = Object.fromEntries(SYLLABUS.map(t => [t.id, t.relevancia]));
    TOPICO_POR_ID = Object.fromEntries(SYLLABUS.map(t => [t.id, t]));
}

function sincronizarEstadoComConteudo() {
    const novoEstado = {};
    SYLLABUS.forEach((topico) => {
        const atual = appState.topicsState[topico.id];
        const normalizado = normalizarTopicState(topico.id, atual || { relevancia: topico.relevancia });
        normalizado.relevancia = topico.relevancia;
        novoEstado[topico.id] = normalizado;
    });
    appState.topicsState = novoEstado;
}

function abrirModalConteudoProgramatico() {
    const textarea = document.getElementById('syllabusTextarea');
    if (textarea) {
        textarea.value = textoConteudoProgramatico();
    }
    const modal = document.getElementById('syllabusModal');
    if (modal) modal.style.display = 'flex';
}

function fecharModalConteudoProgramatico() {
    const modal = document.getElementById('syllabusModal');
    if (modal) modal.style.display = 'none';
}

function salvarConteudoProgramatico() {
    const textarea = document.getElementById('syllabusTextarea');
    if (!textarea) return;

    const novosTopicos = parseConteudoProgramatico(textarea.value);
    if (novosTopicos.length === 0) {
        alert('Nenhum tópico válido. Use: Disciplina;Tópico;Relevância');
        return;
    }

    SYLLABUS = novosTopicos;
    reconstruirIndicesConteudo();
    sincronizarEstadoComConteudo();
    salvarConteudoProgramaticoNoStorage();
    saveState();

    if (Object.keys(appState.config.weights || {}).length === 0) {
        appState.config.weights = {};
    }
    const disciplinas = [...new Set(SYLLABUS.map(t => t.disciplina))];
    disciplinas.forEach((d) => {
        if (!Number.isFinite(appState.config.weights[d])) {
            appState.config.weights[d] = 3;
        }
    });

    if (appState.generated) {
        iniciarSessaoDoDia();
        renderScheduleFromCache();
        renderOverview();
        updateOverallProgress();
    } else {
        renderOverview();
        updateOverallProgress();
    }

    fecharModalConteudoProgramatico();
    mostrarToastSimples(`Conteúdo atualizado: ${SYLLABUS.length} tópicos.`);
}

// Temporary state for calibration
let calibrationState = {};

/**
 * Abre o modal de calibragem
 */
function abrirModalCalibragem() {
    calibrationState = {};
    renderizarListaCalibragem();
    document.getElementById('calibrationModal').style.display = 'flex';
}

/**
 * Fecha o modal de calibragem
 */
function fecharModalCalibragem() {
    document.getElementById('calibrationModal').style.display = 'none';
}

/**
 * Renderiza a lista de tópicos no modal
 */
function renderizarListaCalibragem() {
    const container = document.getElementById('calibrationList');

    let html = '';
    SYLLABUS.forEach(topico => {
        const estado = appState.topicsState[topico.id];
        const nivelAtual = detectarNivelAtual(estado);
        calibrationState[topico.id] = nivelAtual;

        html += `
            <div class="calibration-item">
                <input type="checkbox" id="cal-check-${topico.id}" data-topic-id="${topico.id}">
                <div class="topic-info">
                    <div class="topic-name">${topico.nome}</div>
                    <div class="topic-discipline">${topico.disciplina}</div>
                </div>
                <select id="cal-select-${topico.id}" onchange="atualizarCalibragem('${topico.id}', this.value)">
                    ${CALIBRATION_LEVELS.map(lvl =>
            `<option value="${lvl.id}" ${nivelAtual === lvl.id ? 'selected' : ''}>${lvl.label}</option>`
        ).join('')}
                </select>
            </div>
        `;
    });

    container.innerHTML = html;
}

/**
 */
function detectarNivelAtual(estado) {
    if (!estado || estado.reps === 0) return 0; // Desconhecido

    const stability = estado.stability || 0;
    if (stability >= 25) return 4; // Expert
    if (stability >= 10) return 3; // Tenho segurança
    if (stability >= 3) return 2;  // Estudei
    if (stability >= 1) return 1;  // Vi por cima
    return 0;
}

/**
 */
function atualizarCalibragem(topicId, nivel) {
    calibrationState[topicId] = parseInt(nivel);
}

/**
 * Aplica calibragem em massa aos tópicos selecionados
 */
function aplicarCalibragemEmMassa(nivel) {
    const checkboxes = document.querySelectorAll('.calibration-item input[type="checkbox"]:checked');

    if (checkboxes.length === 0) {
        alert('Selecione ao menos um tópico para aplicar a ação em massa.');
        return;
    }

    checkboxes.forEach(cb => {
        const topicId = cb.dataset.topicId;
        calibrationState[topicId] = nivel;

        // Atualizar o dropdown visualmente
        const select = document.getElementById(`cal-select-${topicId}`);
        if (select) select.value = nivel;
    });

    // Feedback visual
    mostrarToastSimples(`${checkboxes.length} tópicos atualizados para "${CALIBRATION_LEVELS[nivel].label}"`);
}

/**
 * Toast simples para feedback
 */
function mostrarToastSimples(mensagem) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.style.top = '100px';
    toast.textContent = mensagem;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3100);
}

/**
 * Salva a calibragem e atualiza o estado FSRS
 */
function salvarCalibragem() {
    const hoje = formatLocalDate();
    const hojeDate = parseLocalDate(hoje) || new Date();

    Object.keys(calibrationState).forEach(topicId => {
        const nivel = calibrationState[topicId];
        const config = CALIBRATION_LEVELS[nivel];

        const topico = SYLLABUS.find(t => t.id === topicId);
        const relevancia = topico ? topico.relevancia : 3;

        if (nivel === 0) {
            // Tópico desconhecido: reseta para estado inicial
            appState.topicsState[topicId] = {
                state: 0, // New
                difficulty: 5.0,
                stability: 0,
                last_review: null,
                scheduled_days: 0,
                elapsed_days: 0,
                reps: 0,
                lapses: 0,
                data_proxima_revisao: null,
                relevancia: relevancia,
                history: []
            };
        } else {
            // Tópicos com algum conhecimento
            const proximaData = new Date(hojeDate);
            proximaData.setDate(proximaData.getDate() + config.interval);

            appState.topicsState[topicId] = {
                state: 2, // Review
                difficulty: 5.0 - (nivel * 0.5),
                stability: config.stability,
                last_review: hoje,
                scheduled_days: config.interval,
                elapsed_days: 0,
                reps: nivel, // Simula revisões anteriores
                lapses: 0,
                data_proxima_revisao: formatLocalDate(proximaData),
                relevancia: relevancia,
                history: []
            };
        }
    });

    // Marcar como calibrado
    appState.calibrated = true;
    saveState();

    // Fechar modal e atualizar UI
    fecharModalCalibragem();
    iniciarSessaoDoDia();
    renderOverview();
    updateOverallProgress();

    mostrarToastSimples('Calibragem salva com sucesso!');
}

/**
 * Verifica se deve mostrar modal de calibragem na primeira vez
 */
function verificarPrimeiraCalibragem() {
    if (!appState.calibrated && appState.generated) {
        setTimeout(() => {
            if (confirm('Você já estudou alguns desses tópicos antes?\n\nClique OK para abrir a calibragem e classificar seu nível em cada tema.')) {
                abrirModalCalibragem();
            }
        }, 500);
    }
}


