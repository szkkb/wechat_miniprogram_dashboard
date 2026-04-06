import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Wrench, ArrowRight, Activity, Trash2, MessageCircle } from 'lucide-react';
import { getStats, clearEvents } from '../../utils/track';
import './GrowthLoopOverview.css';

const Section = ({ icon, title, subtitle, items, delay }) => (
    <motion.div className="glo-section"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className="glo-section-header">
            <div className="glo-section-icon">{icon}</div>
            <div>
                <h2 className="glo-section-title">{title}</h2>
                <p className="glo-section-sub">{subtitle}</p>
            </div>
        </div>
        <div className="glo-items">
            {items.map(item => (
                <Link key={item.path} to={item.path} className="glo-item">
                    <span className="glo-item-zh">{item.zh}</span>
                    <span className="glo-item-en">{item.en}</span>
                    <ArrowRight size={12} className="glo-item-arrow" />
                </Link>
            ))}
        </div>
    </motion.div>
);

const GrowthLoopOverview = () => (
    <div className="glo-page animate-fade-in">
        <motion.div className="glo-hero"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="glo-title">Growth Loop 学习</h1>
            <p className="glo-subtitle">
                增长飞轮方法论 — 从理论到实践的系统学习路径
            </p>
            <p className="glo-desc">
                Growth Loop 是一种比传统 AARRR 漏斗更先进的增长框架。
                用户行为不是线性的"漏斗"，而是循环的"飞轮"——
                每一个用户的产出都能成为下一个用户的输入，形成复利增长。
            </p>
        </motion.div>

        <motion.div className="glo-story"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
        >
            <div className="glo-story-icon"><MessageCircle size={18} /></div>
            <div className="glo-story-body">
                <h3 className="glo-story-heading">为什么做这个</h3>
                <p>
                    做独立项目的人都知道「关键词优化」「冷启动」「A/B 测试」这些术语。我在系统学习 SEO 和自媒体内容运营之后，发现这些技巧之上还有一层更深的东西——<strong>增长飞轮 (Growth Loop)</strong>。它不是某一个技巧，而是一整套让产品自驱增长的方法论。
                </p>
                <p>
                    这些资料是我自己的学习笔记，整理成了交互式的可视化和结构化文档，配上了给 AI 用的 Prompt 模板。分享出来，是因为我觉得这套东西对独立开发者尤其有用——<strong>你不需要市场部，你需要的是理解增长的底层逻辑，然后把它设计进产品里</strong>。
                </p>
                <p className="glo-story-colophon">
                    — 萧磊 & Claude 合写，2026
                </p>
            </div>
        </motion.div>

        <Section
            icon={<BarChart3 size={20} />}
            title="交互式可视化"
            subtitle="三种视角理解 Growth Loop 结构"
            delay={0.1}
            items={[
                { zh: '学习大纲', en: 'Phase Outline', path: '/growth-loop/outline' },
                { zh: '生命周期图', en: 'Lifecycle Phases', path: '/growth-loop/lifecycle' },
                { zh: '关键词图谱', en: 'Keyword Map', path: '/growth-loop/keyword-map' },
            ]}
        />

        <Section
            icon={<BookOpen size={20} />}
            title="核心学习内容"
            subtitle="Phase 1 基础理论 — 约 2 小时完成"
            delay={0.2}
            items={[
                { zh: '学习路径', en: 'Learning Roadmap', path: '/growth-loop/roadmap' },
                { zh: '范式转换：漏斗 vs 飞轮', en: 'Paradigm Shift', path: '/growth-loop/paradigm-shift' },
                { zh: '循环解剖：四步结构', en: 'Loop Anatomy', path: '/growth-loop/loop-anatomy' },
                { zh: '术语表', en: 'Glossary', path: '/growth-loop/glossary' },
            ]}
        />

        <Section
            icon={<Wrench size={20} />}
            title="实践工具"
            subtitle="模板 + 画布，直接用于你的业务"
            delay={0.3}
            items={[
                { zh: '循环设计画布', en: 'Loop Design Canvas', path: '/growth-loop/design-canvas' },
                { zh: '商业画布', en: 'Business Canvas', path: '/growth-loop/business-canvas' },
                { zh: '实验模板', en: 'Experiment Template', path: '/growth-loop/experiment' },
            ]}
        />
        <AnalyticsSection />
    </div>
);

/* ─────────────────────────────────────────
   第四区块：数据观摩 — 你的真实行为数据
   ───────────────────────────────────────── */
const AnalyticsSection = () => {
    const stats = useMemo(() => getStats(), []);

    if (!stats) {
        return (
            <motion.div className="glo-section glo-analytics-empty"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="glo-section-header">
                    <div className="glo-section-icon analytics-icon"><Activity size={20} /></div>
                    <div>
                        <h2 className="glo-section-title">数据观摩 Data Observatory</h2>
                        <p className="glo-section-sub">你的真实行为数据 · localStorage 本地存储</p>
                    </div>
                </div>
                <div className="glo-analytics-placeholder">
                    <p>你还没有产生任何行为数据。</p>
                    <p>去浏览一些<Link to="/mini-program" className="glo-inline-link">小程序组件</Link>或<Link to="/web-fx" className="glo-inline-link">视觉风格</Link>，然后回来看你的行为轨迹。</p>
                    <p className="glo-analytics-hint">每一次浏览、复制、点击都会被记录在你的浏览器本地。没有服务器，数据只属于你。</p>
                    <p className="glo-analytics-hint">⚠️ 微信内置浏览器会在每次关闭后清除缓存，无法积累跨次访问数据。用 Safari 或 Chrome 打开可保留完整历史。</p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div className="glo-section glo-analytics"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <div className="glo-section-header">
                <div className="glo-section-icon analytics-icon"><Activity size={20} /></div>
                <div>
                    <h2 className="glo-section-title">数据观摩 Data Observatory</h2>
                    <p className="glo-section-sub">你的真实行为数据 · {stats.totalEvents} 条事件 · 自 {stats.firstVisit?.toLocaleDateString() || '—'}</p>
                </div>
                <button className="glo-clear-btn" onClick={() => { clearEvents(); window.location.reload(); }} title="清空数据">
                    <Trash2 size={14} />
                </button>
            </div>

            {/* KPI Strip */}
            <div className="glo-kpi-strip">
                <div className="glo-kpi"><span className="glo-kpi-val">{stats.uniquePages}</span><span className="glo-kpi-label">浏览页面</span></div>
                <div className="glo-kpi"><span className="glo-kpi-val">{stats.totalCopies}</span><span className="glo-kpi-label">复制次数</span></div>
                <div className="glo-kpi"><span className="glo-kpi-val">{stats.totalInteracts}</span><span className="glo-kpi-label">交互次数</span></div>
                <div className="glo-kpi"><span className="glo-kpi-val">{stats.wechatCopies}</span><span className="glo-kpi-label">微信号复制</span></div>
            </div>

            {/* Domain Split */}
            {(stats.domainSplit.mp + stats.domainSplit.fx + stats.domainSplit.gl > 0) && (
                <div className="glo-domain-split">
                    <span className="glo-domain-label">浏览分布：</span>
                    {stats.domainSplit.mp > 0 && <span className="glo-domain-bar mp" style={{ flex: stats.domainSplit.mp }}>小程序 {stats.domainSplit.mp}</span>}
                    {stats.domainSplit.fx > 0 && <span className="glo-domain-bar fx" style={{ flex: stats.domainSplit.fx }}>视觉 {stats.domainSplit.fx}</span>}
                    {stats.domainSplit.gl > 0 && <span className="glo-domain-bar gl" style={{ flex: stats.domainSplit.gl }}>Growth {stats.domainSplit.gl}</span>}
                </div>
            )}

            {/* Two columns */}
            <div className="glo-analytics-grid">
                {/* Left: Page Heat */}
                <div className="glo-analytics-panel">
                    <h4 className="glo-panel-title">页面热度 Top {stats.topPages.length}</h4>
                    <div className="glo-heat-list">
                        {stats.topPages.map((p, i) => (
                            <div key={i} className="glo-heat-row">
                                <span className="glo-heat-rank">{i + 1}</span>
                                <span className="glo-heat-page">{p.page}</span>
                                <span className="glo-heat-count">{p.count}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Recent Events */}
                <div className="glo-analytics-panel">
                    <h4 className="glo-panel-title">最近事件</h4>
                    <div className="glo-event-list">
                        {stats.recentEvents.slice(0, 10).map((e, i) => (
                            <div key={i} className="glo-event-row">
                                <span className="glo-event-time">{new Date(e.t).toLocaleTimeString()}</span>
                                <span className="glo-event-name">{e.e}</span>
                                <span className="glo-event-page">{e.p}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copy rankings */}
            {stats.topCopies.length > 0 && (
                <div className="glo-copy-ranking">
                    <h4 className="glo-panel-title">最常复制的名称</h4>
                    <div className="glo-copy-list">
                        {stats.topCopies.map((c, i) => (
                            <span key={i} className="glo-copy-chip">
                                {['🥇','🥈','🥉','4️⃣','5️⃣'][i]} {c.name} × {c.count}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="glo-analytics-footer">
                💡 这就是 Growth Loop 的数据思维：观察行为 → 发现模式 → 优化体验 → 驱动增长
            </div>
            <div className="glo-analytics-footer" style={{ marginTop: 4, fontSize: '0.65rem', color: '#475569' }}>
                ⚠️ 数据存储在浏览器本地 (localStorage)。微信内置浏览器会在关闭后清除缓存，无法积累历史数据。建议用 Safari / Chrome 直接打开 kkbsz.com 以保留完整行为轨迹。
            </div>
        </motion.div>
    );
};

export default GrowthLoopOverview;
