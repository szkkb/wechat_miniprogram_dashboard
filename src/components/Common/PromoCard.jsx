import React, { useState, useCallback, useRef } from 'react';
import { Copy, Check, MessageCircle, Cpu, Smartphone, Globe, ArrowRight, Search } from 'lucide-react';
import './PromoCard.css';

/**
 * PromoCard — "Seamless Handoff" UX
 *
 * State machine: idle → copied → resetting
 *
 * 点击任意按钮 →
 *   左侧: ripple + icon flip ✅ + "已复制到剪贴板"
 *   右侧: pulse glow + text morph → "💬 立即打开微信搜索"
 *   3s → 双侧恢复
 */

const STATES = { IDLE: 'idle', COPIED: 'copied', RESETTING: 'resetting' };

const PromoCard = ({ theme = 'dark' }) => {
    const [phase, setPhase] = useState(STATES.IDLE);
    const timerRef = useRef(null);

    const handleAction = useCallback(async () => {
        if (phase !== STATES.IDLE) return; // prevent re-trigger during animation

        // Copy to clipboard
        try {
            await navigator.clipboard.writeText('xiaoleipro');
        } catch {
            const ta = document.createElement('textarea');
            ta.value = 'xiaoleipro';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }

        setPhase(STATES.COPIED);

        timerRef.current = setTimeout(() => {
            setPhase(STATES.RESETTING);
            // Brief reset transition, then back to idle
            setTimeout(() => setPhase(STATES.IDLE), 400);
        }, 3500);
    }, [phase]);

    const isCopied = phase === STATES.COPIED;
    const isDark = theme === 'dark';

    return (
        <div className={`promo-card promo-${theme}`}>
            <div className="promo-glow" />

            <div className="promo-header">
                <div className="promo-badge">
                    <Cpu size={12} />
                    <span>AI 加持</span>
                </div>
                <span className="promo-subtle">广告</span>
            </div>

            <h3 className="promo-title">
                {isDark
                    ? '刚才看到的效果，你的物流系统也可以拥有'
                    : '想让你的客户也能这样查运费？'
                }
            </h3>

            <p className="promo-desc">
                {isDark
                    ? '从沉浸式导航到物流追踪，我们为国际物流企业定制全套数字化解决方案'
                    : '从运费查询到下单追踪，AI 驱动的全链路国际物流解决方案'
                }
            </p>

            <div className="promo-services">
                <div className="promo-service">
                    <div className="promo-service-icon"><Cpu size={16} /></div>
                    <div className="promo-service-info">
                        <span className="promo-service-name">AI 智能物流系统</span>
                        <span className="promo-service-desc">智能报价 · 轨迹追踪 · 数据分析</span>
                    </div>
                </div>
                <div className="promo-service">
                    <div className="promo-service-icon"><Smartphone size={16} /></div>
                    <div className="promo-service-info">
                        <span className="promo-service-name">微信小程序定制</span>
                        <span className="promo-service-desc">你的客户随时查单下单</span>
                    </div>
                </div>
                <div className="promo-service">
                    <div className="promo-service-icon"><Globe size={16} /></div>
                    <div className="promo-service-info">
                        <span className="promo-service-name">SEO 国际物流网站</span>
                        <span className="promo-service-desc">豆包 / ChatGPT 都能索引推荐你</span>
                    </div>
                </div>
            </div>

            <div className="promo-social-proof">
                <span className="promo-proof-badge">已服务 50+ 企业</span>
                <span className="promo-proof-text">你的同行正在用 AI 升级物流</span>
            </div>

            {/* ═══ Seamless Handoff CTA Row ═══ */}
            <div className={`promo-cta-row ${isCopied ? 'promo-cta-copied' : ''}`}>
                {/* Left: WeChat ID button */}
                <button
                    className={`promo-wechat ${isCopied ? 'promo-wechat-done' : ''}`}
                    onClick={handleAction}
                >
                    {isCopied ? (
                        <>
                            <span className="promo-icon-flip"><Check size={14} /></span>
                            <span className="promo-text-slide">✨ 已复制到剪贴板</span>
                        </>
                    ) : (
                        <>
                            <MessageCircle size={14} />
                            <span className="promo-wechat-id">xiaoleipro</span>
                            <Copy size={12} className="promo-copy-icon" />
                        </>
                    )}
                    {/* Ripple element */}
                    {isCopied && <span className="promo-ripple" />}
                </button>

                {/* Right: CTA button — morphs to next-step guide */}
                <button
                    className={`promo-cta-btn ${isCopied ? 'promo-cta-handoff' : ''}`}
                    onClick={handleAction}
                >
                    {isCopied ? (
                        <>
                            <span className="promo-text-slide">
                                <Search size={14} /> 打开微信搜索粘贴
                            </span>
                        </>
                    ) : (
                        <>免费咨询 <ArrowRight size={14} /></>
                    )}
                </button>
            </div>
        </div>
    );
};

export default PromoCard;
