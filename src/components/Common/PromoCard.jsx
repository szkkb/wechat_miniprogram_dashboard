import React, { useState } from 'react';
import { Copy, Check, MessageCircle, Cpu, Smartphone, Globe, ArrowRight } from 'lucide-react';
import './PromoCard.css';

const PromoCard = ({ theme = 'dark' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText('xiaoleipro');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = 'xiaoleipro';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

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

            <div className="promo-cta-row">
                <button className={`promo-wechat ${copied ? 'promo-wechat-copied' : ''}`} onClick={handleCopy}>
                    {copied
                        ? <><Check size={14} /> <span>微信号已复制</span></>
                        : <><MessageCircle size={14} /> <span className="promo-wechat-id">xiaoleipro</span> <Copy size={12} className="promo-copy-icon" /></>
                    }
                </button>
                <button className="promo-cta-btn" onClick={handleCopy}>
                    免费咨询 <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );
};

export default PromoCard;
