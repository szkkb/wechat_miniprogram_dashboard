import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Copy, Check, ArrowRight, Search, Stamp, Sparkles } from 'lucide-react';
import ShowcaseCard from '../../components/WebFXLayout/ShowcaseCard';
import './WeChatButtonDemo.css';

const WECHAT_ID = 'xiaoleipro';
const IDLE = 'idle', COPIED = 'copied';

/** ═══ Utility: copy to clipboard ═══ */
const copyToClipboard = async (text) => {
    try { await navigator.clipboard.writeText(text); }
    catch { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); }
};

/* ─────────────────────────────────────────────────────
   方案一：Seamless Handoff 连贯指引
   ───────────────────────────────────────────────────── */
const SeamlessHandoff = () => {
    const [phase, setPhase] = useState(IDLE);
    const handleClick = useCallback(async () => {
        if (phase !== IDLE) return;
        await copyToClipboard(WECHAT_ID);
        setPhase(COPIED);
        setTimeout(() => setPhase(IDLE), 3500);
    }, [phase]);
    const done = phase === COPIED;

    return (
        <ShowcaseCard
            title="Seamless Handoff 连贯指引"
            description="完形心理学 — 复制确认 + 下一步行动引导无缝衔接，消除操作后的认知断层"
            tags={['场景:加微信按钮', 'Zeigarnik Effect', '微漏斗闭环', 'CSS Ripple', '文字 Morph']}
        >
            <div className="wcb-demo-scene">
                <div className="wcb-handoff-row">
                    <button className={`wcb-left ${done ? 'wcb-left-done' : ''}`} onClick={handleClick}>
                        {done ? (
                            <><span className="wcb-icon-flip"><Check size={14} /></span><span className="wcb-text-slide">✨ 已复制到剪贴板</span></>
                        ) : (
                            <><MessageCircle size={14} /><span className="wcb-id">{WECHAT_ID}</span><Copy size={12} className="wcb-copy-dim" /></>
                        )}
                        {done && <span className="wcb-ripple" />}
                    </button>
                    <button className={`wcb-right-handoff ${done ? 'wcb-right-active' : ''}`} onClick={handleClick}>
                        {done ? (
                            <span className="wcb-text-slide"><Search size={14} /> 打开微信搜索粘贴</span>
                        ) : (
                            <>付费咨询 <ArrowRight size={14} /></>
                        )}
                    </button>
                </div>
            </div>
        </ShowcaseCard>
    );
};

/* ─────────────────────────────────────────────────────
   方案二：Ticket Stamp 机械盖章弹射
   ───────────────────────────────────────────────────── */
const TicketStamp = () => {
    const [phase, setPhase] = useState(IDLE);
    const handleClick = useCallback(async () => {
        if (phase !== IDLE) return;
        await copyToClipboard(WECHAT_ID);
        setPhase(COPIED);
        setTimeout(() => setPhase(IDLE), 4000);
    }, [phase]);
    const done = phase === COPIED;

    return (
        <ShowcaseCard
            title="Ticket Stamp 机械盖章弹射"
            description="具身认知 — 按钮下压盖章 + 名片弹射浮出 + 镭射扫光，物理感操作反馈"
            tags={['场景:加微信按钮', 'Embodied Cognition', '盖章下压', '名片弹射', 'CSS Shimmer']}
        >
            <div className="wcb-demo-scene">
                <div className="wcb-stamp-area">
                    <motion.button
                        className={`wcb-stamp-btn ${done ? 'wcb-stamped' : ''}`}
                        onClick={handleClick}
                        whileTap={{ scale: 0.92 }}
                    >
                        {done ? (
                            <><Check size={16} /> 已盖章确认</>
                        ) : (
                            <><Stamp size={16} /> 点击获取微信号</>
                        )}
                    </motion.button>

                    <AnimatePresence>
                        {done && (
                            <motion.div
                                className="wcb-ticket"
                                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                animate={{ y: -8, opacity: 1, scale: 1 }}
                                exit={{ y: 10, opacity: 0, scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            >
                                <div className="wcb-ticket-shimmer" />
                                <div className="wcb-ticket-content">
                                    <MessageCircle size={16} className="wcb-ticket-icon" />
                                    <div className="wcb-ticket-info">
                                        <span className="wcb-ticket-id">{WECHAT_ID}</span>
                                        <span className="wcb-ticket-hint">已就绪 · 去微信搜索添加</span>
                                    </div>
                                    <div className="wcb-ticket-badge">✓ COPIED</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </ShowcaseCard>
    );
};

/* ─────────────────────────────────────────────────────
   方案三：Fluid Merge 流体磁性融合
   ───────────────────────────────────────────────────── */
const FluidMerge = () => {
    const [phase, setPhase] = useState(IDLE);
    const handleClick = useCallback(async () => {
        if (phase !== IDLE) return;
        await copyToClipboard(WECHAT_ID);
        setPhase(COPIED);
        setTimeout(() => setPhase(IDLE), 4000);
    }, [phase]);
    const done = phase === COPIED;

    return (
        <ShowcaseCard
            title="Fluid Merge 流体磁性融合"
            description="心流体验 — 双按钮坍缩融合为一，视觉焦点最大化聚焦到行动引导"
            tags={['场景:加微信按钮', 'Flow State', '共享元素过渡', '坍缩融合', '涟漪爆发']}
        >
            <div className="wcb-demo-scene">
                <div className="wcb-merge-row">
                    <AnimatePresence mode="wait">
                        {!done ? (
                            <motion.div className="wcb-merge-dual" key="dual"
                                initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.25 }}
                            >
                                <button className="wcb-merge-left" onClick={handleClick}>
                                    <MessageCircle size={14} />
                                    <span className="wcb-id">{WECHAT_ID}</span>
                                </button>
                                <button className="wcb-merge-right" onClick={handleClick}>
                                    付费咨询 <ArrowRight size={14} />
                                </button>
                            </motion.div>
                        ) : (
                            <motion.button className="wcb-merge-unified" key="unified"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                                onClick={() => {}}
                            >
                                <span className="wcb-merge-burst" />
                                <Sparkles size={18} />
                                <span className="wcb-merge-text">
                                    复制成功！打开微信搜索 <strong>{WECHAT_ID}</strong>
                                </span>
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </ShowcaseCard>
    );
};

/* ─────────────────────────────────────────────────────
   Page Component
   ───────────────────────────────────────────────────── */
const WeChatButtonDemo = () => (
    <div className="webfx-page animate-fade-in vs-page">
        <div className="vs-hero">
            <div className="vs-hero-glow g1" />
            <div className="vs-hero-glow g2" />
            <div className="vs-hero-content">
                <span className="vs-hero-tag" style={{ color: '#22c55e', background: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.2)' }}>
                    WeChat CTA Showcase
                </span>
                <h1 className="vs-hero-title" style={{ background: 'linear-gradient(135deg, #fff 0%, #22c55e 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    加微信按钮
                </h1>
                <p className="vs-hero-subtitle">三种心理学驱动的「复制微信号 → 引导添加」交互方案</p>
            </div>
        </div>

        <div className="vs-grid">
            <SeamlessHandoff />
            <TicketStamp />
            <FluidMerge />
        </div>
    </div>
);

export default WeChatButtonDemo;
