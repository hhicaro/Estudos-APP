(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.FSRSEngine = factory();
    }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
    const DAY_MS = 24 * 60 * 60 * 1000;
    const WEIGHTS = [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61];
    const DECAY = -0.5;
    const FACTOR = Math.pow(0.9, 1 / DECAY) - 1;

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    function isValidISODate(dateStr) {
        if (typeof dateStr !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
        const parts = dateStr.split('-').map(Number);
        const date = new Date(parts[0], parts[1] - 1, parts[2]);
        return (
            date.getFullYear() === parts[0] &&
            date.getMonth() === parts[1] - 1 &&
            date.getDate() === parts[2]
        );
    }

    function parseISODateLocal(dateStr) {
        if (!isValidISODate(dateStr)) return null;
        const parts = dateStr.split('-').map(Number);
        return new Date(parts[0], parts[1] - 1, parts[2]);
    }

    function diffDaysISO(startISO, endISO) {
        const start = parseISODateLocal(startISO);
        const end = parseISODateLocal(endISO);
        if (!start || !end) return 0;
        return Math.floor((end - start) / DAY_MS);
    }

    function getOverdueDays(nextISO, todayISO) {
        if (!isValidISODate(nextISO) || !isValidISODate(todayISO)) return 0;
        return Math.max(0, diffDaysISO(nextISO, todayISO));
    }

    function getTargetRetentionByRelevance(relevancia) {
        switch (relevancia) {
            case 5: return 0.95;
            case 4: return 0.92;
            case 3: return 0.90;
            default: return 0.85;
        }
    }

    function getRetrievability(stability, elapsedDays) {
        if (stability <= 0 || elapsedDays < 0) return 1;
        return Math.pow(1 + FACTOR * elapsedDays / stability, DECAY);
    }

    function getInitialDifficulty(grade) {
        return clamp(WEIGHTS[4] - (grade - 3) * WEIGHTS[5], 1, 10);
    }

    function getInitialStability(grade) {
        return Math.max(0.1, WEIGHTS[grade] || WEIGHTS[0]);
    }

    function updateDifficulty(difficulty, grade) {
        const d0 = getInitialDifficulty(grade);
        const value = WEIGHTS[7] * d0 + (1 - WEIGHTS[7]) * (difficulty - WEIGHTS[6] * (grade - 3));
        return clamp(value, 1, 10);
    }

    function getSuccessStability(difficulty, stability, retrievability, grade) {
        const hardPenalty = grade === 1 ? WEIGHTS[15] : 1;
        const easyBonus = grade === 3 ? WEIGHTS[16] : 1;
        const inner = Math.exp(WEIGHTS[8]) *
            (11 - difficulty) *
            Math.pow(stability, -WEIGHTS[9]) *
            (Math.exp(WEIGHTS[10] * (1 - retrievability)) - 1) *
            hardPenalty *
            easyBonus;
        return stability * (inner + 1);
    }

    function getLapseStability(difficulty, stability, retrievability) {
        const value = WEIGHTS[11] *
            Math.pow(difficulty, -WEIGHTS[12]) *
            (Math.pow(stability + 1, WEIGHTS[13]) - 1) *
            Math.exp(WEIGHTS[14] * (1 - retrievability));
        return Math.max(0.1, value);
    }

    function getInterval(stability, targetRetention) {
        if (targetRetention >= 1 || targetRetention <= 0) return 1;
        const interval = 9 * stability * (1 / targetRetention - 1);
        return Math.max(1, Math.round(interval));
    }

    function applyIntervalFuzz(interval, rng) {
        if (interval <= 4) return interval;
        const randomFn = typeof rng === 'function' ? rng : Math.random;
        const fuzz = Math.round(interval * 0.1 * (randomFn() - 0.5));
        return Math.max(1, interval + fuzz);
    }

    function getMaxIntervalByRelevance(relevancia) {
        if (relevancia === 5) return 30;
        if (relevancia >= 3) return 45;
        return 90;
    }

    function legacyEaseToDifficulty(oldFactor) {
        const factor = Number.isFinite(oldFactor) ? oldFactor : 2.5;
        return clamp(11 - (factor * 3), 1, 10);
    }

    function legacyIntervalToStability(oldInterval) {
        const interval = Number.isFinite(oldInterval) ? oldInterval : 0;
        return Math.max(interval * 0.8, 0.5);
    }

    function computeReviewSplit(vencidosCount, maxSessions, retaFinal) {
        const limit = Math.max(1, maxSessions);
        const pressure = vencidosCount / limit;
        let proportion = 0.7;
        if (pressure >= 2) proportion = 0.9;
        else if (pressure >= 1) proportion = 0.8;
        else if (pressure <= 0.35) proportion = 0.6;

        if (retaFinal) proportion = Math.max(proportion, 0.85);
        return proportion;
    }

    function interleaveBySubject(candidates, limit, subjectKey) {
        const key = subjectKey || 'subject';
        if (!Array.isArray(candidates) || candidates.length === 0) return [];

        const grouped = {};
        candidates.forEach(item => {
            const subject = item[key] || 'Sem disciplina';
            if (!grouped[subject]) grouped[subject] = [];
            grouped[subject].push(item);
        });

        const output = [];
        const subjects = Object.keys(grouped);
        let idx = 0;

        while (output.length < limit && subjects.length > 0) {
            const subject = subjects[idx % subjects.length];
            const list = grouped[subject];
            if (list && list.length > 0) {
                output.push(list.shift());
                idx++;
                continue;
            }

            const removeIndex = subjects.indexOf(subject);
            if (removeIndex >= 0) {
                subjects.splice(removeIndex, 1);
                if (idx >= subjects.length) idx = 0;
            }
        }

        return output;
    }

    function buildDailyQueue(options) {
        const params = options || {};
        const topics = Array.isArray(params.topics) ? params.topics : [];
        const todayISO = params.todayISO;
        const maxSessions = Math.max(0, parseInt(params.maxSessions, 10) || 0);
        const retaFinal = Boolean(params.retaFinal);
        const subjectKey = params.subjectKey || 'subject';

        if (!isValidISODate(todayISO) || maxSessions === 0) return [];

        let pool = topics.slice();
        if (retaFinal) {
            pool = pool.filter(topic => (topic.relevancia || 0) >= 3);
        }

        const due = pool
            .filter(topic => topic.data_proxima_revisao && topic.data_proxima_revisao <= todayISO)
            .map(topic => ({
                ...topic,
                __bucket: 'review',
                __overdueDays: getOverdueDays(topic.data_proxima_revisao, todayISO)
            }))
            .sort((a, b) => {
                if ((b.relevancia || 0) !== (a.relevancia || 0)) return (b.relevancia || 0) - (a.relevancia || 0);
                if ((b.__overdueDays || 0) !== (a.__overdueDays || 0)) return (b.__overdueDays || 0) - (a.__overdueDays || 0);
                return (a.stability || 0) - (b.stability || 0);
            });

        const fresh = pool
            .filter(topic => (topic.reps || 0) === 0 && !topic.data_proxima_revisao)
            .map(topic => ({ ...topic, __bucket: 'new', __overdueDays: 0 }))
            .sort((a, b) => (b.relevancia || 0) - (a.relevancia || 0));

        const reviewRatio = computeReviewSplit(due.length, maxSessions, retaFinal);
        const dueSlots = Math.min(due.length, Math.ceil(maxSessions * reviewRatio));
        const reviewSlots = due.slice(0, dueSlots);
        const remaining = maxSessions - reviewSlots.length;
        const newSlots = fresh.slice(0, Math.min(remaining, fresh.length));

        const candidates = reviewSlots.concat(newSlots);
        return interleaveBySubject(candidates, maxSessions, subjectKey);
    }

    return {
        DAY_MS,
        WEIGHTS,
        DECAY,
        FACTOR,
        clamp,
        isValidISODate,
        parseISODateLocal,
        diffDaysISO,
        getOverdueDays,
        getTargetRetentionByRelevance,
        getRetrievability,
        getInitialDifficulty,
        getInitialStability,
        updateDifficulty,
        getSuccessStability,
        getLapseStability,
        getInterval,
        applyIntervalFuzz,
        getMaxIntervalByRelevance,
        legacyEaseToDifficulty,
        legacyIntervalToStability,
        computeReviewSplit,
        interleaveBySubject,
        buildDailyQueue
    };
});
