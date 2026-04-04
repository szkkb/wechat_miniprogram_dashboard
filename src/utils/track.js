/**
 * track.js — 纯前端 localStorage 埋点 SDK
 *
 * 数据只存在用户浏览器本地，零后台、零成本、隐私友好。
 * 每个用户只看到自己的行为轨迹。
 */

const STORAGE_KEY = 'cfx_events';
const MAX_EVENTS = 500;

export function track(eventName, data = {}) {
    try {
        const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        events.push({
            t: Date.now(),
            e: eventName,
            p: location.pathname,
            d: data,
        });
        while (events.length > MAX_EVENTS) events.shift();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
    } catch {
        // localStorage 不可用时静默失败
    }
}

export function getEvents() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
}

export function clearEvents() {
    localStorage.removeItem(STORAGE_KEY);
}

// 会话管理：30分钟无活动算新会话
const SESSION_KEY = 'cfx_session';
const SESSION_TIMEOUT = 30 * 60 * 1000;

export function ensureSession() {
    try {
        const now = Date.now();
        const session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
        if (!session || now - session.last > SESSION_TIMEOUT) {
            const newSession = {
                id: Math.random().toString(36).slice(2, 10),
                start: now,
                last: now,
                referrer: document.referrer || 'direct',
            };
            localStorage.setItem(SESSION_KEY, JSON.stringify(newSession));
            track('session_start', { referrer: newSession.referrer });
            return newSession;
        }
        session.last = now;
        localStorage.setItem(SESSION_KEY, JSON.stringify(session));
        return session;
    } catch {
        return { id: 'unknown', start: Date.now(), last: Date.now(), referrer: '' };
    }
}

// 聚合计算工具
export function getStats() {
    const events = getEvents();
    if (events.length === 0) return null;

    const pvEvents = events.filter(e => e.e.startsWith('pv_'));
    const copyEvents = events.filter(e => e.e.startsWith('copy_'));
    const interactEvents = events.filter(e => e.e.startsWith('interact_'));
    const clickEvents = events.filter(e => e.e === 'click_cta' || e.e === 'click_tool');

    // 页面热度
    const pageHeat = {};
    pvEvents.forEach(e => {
        const page = e.d?.page || e.p;
        pageHeat[page] = (pageHeat[page] || 0) + 1;
    });
    const topPages = Object.entries(pageHeat)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([page, count]) => ({ page, count }));

    // 复制排行
    const copyHeat = {};
    copyEvents.filter(e => e.e === 'copy_name').forEach(e => {
        const name = e.d?.zh || e.d?.en || 'unknown';
        copyHeat[name] = (copyHeat[name] || 0) + 1;
    });
    const topCopies = Object.entries(copyHeat)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

    // 域分流
    const mpCount = pvEvents.filter(e => e.p.startsWith('/mini-program')).length;
    const fxCount = pvEvents.filter(e => e.p.startsWith('/web-fx')).length;
    const glCount = pvEvents.filter(e => e.p.startsWith('/growth-loop')).length;

    // 来源
    const sessions = events.filter(e => e.e === 'session_start');
    const sources = {};
    sessions.forEach(e => {
        const ref = e.d?.referrer || 'direct';
        let source = 'direct';
        if (ref.includes('github.com')) source = 'GitHub';
        else if (ref.includes('google') || ref.includes('baidu') || ref.includes('bing')) source = '搜索引擎';
        else if (ref.includes('xiaohongshu') || ref.includes('zhihu') || ref.includes('twitter') || ref.includes('weibo')) source = '社交媒体';
        else if (ref && ref !== 'direct') source = '其他';
        sources[source] = (sources[source] || 0) + 1;
    });

    return {
        totalEvents: events.length,
        uniquePages: new Set(pvEvents.map(e => e.p)).size,
        totalCopies: copyEvents.length,
        totalInteracts: interactEvents.length,
        wechatCopies: copyEvents.filter(e => e.e === 'copy_wechat').length,
        ctaClicks: clickEvents.length,
        firstVisit: events[0]?.t ? new Date(events[0].t) : null,
        topPages,
        topCopies,
        domainSplit: { mp: mpCount, fx: fxCount, gl: glCount },
        sources,
        recentEvents: events.slice(-20).reverse(),
    };
}
