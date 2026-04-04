import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Sparkles, TrendingUp, ArrowRight, ExternalLink, Palette, Layers, Pen, Star, GitFork } from 'lucide-react';
import { getMiniprogramCount, getWebfxCounts } from '../data/catalog-registry';
import { track, ensureSession } from '../utils/track';
import './LandingPage.css';

const LandingPage = () => {
    const mpCount = getMiniprogramCount();
    const cardRefs = useRef({});
    const [visibleCards, setVisibleCards] = useState({});

    useEffect(() => { ensureSession(); track('pv_home'); }, []);
    const fxCounts = getWebfxCounts();

    useEffect(() => {
        const cardElements = Object.values(cardRefs.current).filter(Boolean);
        if (cardElements.length === 0) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleCards((prev) => {
                    const next = { ...prev };
                    let changed = false;

                    entries.forEach((entry) => {
                        const { cardKey } = entry.target.dataset;
                        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
                        if (next[cardKey] !== isVisible) {
                            next[cardKey] = isVisible;
                            changed = true;
                        }
                    });

                    return changed ? next : prev;
                });
            },
            {
                threshold: [0.2, 0.35, 0.55],
                rootMargin: '0px 0px -8% 0px',
            }
        );

        cardElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="landing-container">
            <div className="landing-content animate-fade-in">
                
                <div className="landing-grid-layout">
                    {/* ── Left Column: Intro ── */}
                    <div className="landing-left-col">
                        <div className="landing-header">
                            <h1 className="landing-title">Component<br/>& FX Board.</h1>
                            <p className="landing-subtitle">
                                一个开源的小程序组件、网站视觉风格与 Growth Loop 学习工具
                            </p>
                        </div>
                        <div className="landing-intro">
                            <p>
                                做微信小程序和国际物流网站的时候，我反复遇到同一个问题：<strong>组件叫什么名字？视觉风格怎么描述？</strong>说不出准确名称，AI 就帮不上忙。所以做了这个 Dashboard，把交互组件和视觉风格的<strong>标准名称</strong>整理到一起。
                            </p>
                            <p>
                                后来学 SEO 和内容运营，发现关键词、冷启动、A/B 测试这些技巧之上还有一层更深的东西——<strong>增长飞轮</strong>。于是又加了 Growth Loop 学习区，把方法论整理成可视化和 Prompt 模板。
                            </p>
                            <p className="landing-intro-usage">
                                用法很简单：<strong>浏览 → 复制名称 → 粘贴给 AI</strong>，让 ChatGPT / Claude / 豆包帮你生成代码和方案。没有设计师也能起步。
                            </p>
                        </div>

                        {/* ── Tools / Resources ── */}
                        <div className="landing-tools">
                            <h3 className="tools-title">配色与设计工具推荐</h3>
                            <div className="tools-list">
                                <a href="https://brandcolors.net/" target="_blank" rel="noopener noreferrer" className="tool-row" onClick={() => track('click_tool', { tool: 'brandcolors' })}>
                                    <span className="tool-name">BrandColors</span>
                                    <span className="tool-link-text">大品牌官方配色值，想不出配色就看大厂 <ArrowRight size={14}/></span>
                                </a>
                                <a href="https://huemint.com/brand-intersection/" target="_blank" rel="noopener noreferrer" className="tool-row" onClick={() => track('click_tool', { tool: 'huemint' })}>
                                    <span className="tool-name">Huemint</span>
                                    <span className="tool-link-text">AI 智能配色，输入关键词自动生成色彩方案 <ArrowRight size={14}/></span>
                                </a>
                                <a href="https://stitch.withgoogle.com/home" target="_blank" rel="noopener noreferrer" className="tool-row" onClick={() => track('click_tool', { tool: 'google_stitch' })}>
                                    <span className="tool-name">Google Stitch</span>
                                    <span className="tool-link-text">能力一般，但设计系统文件不错，调好色丢给 AI 用 <ArrowRight size={14}/></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Dual Dashboards ── */}
                    <div className="landing-right-col">
                        <div className="workspace-cards">
                            <Link
                                to="/mini-program"
                                className={`workspace-card mp-card ${visibleCards.mp ? 'card-in-view' : ''}`}
                                data-card-key="mp"
                                ref={(node) => { cardRefs.current.mp = node; }}
                                style={{ '--glow-delay': '0s' }}
                            >
                                <div className="card-icon-wrapper">
                                    <Smartphone size={48} className="card-icon" strokeWidth={1.5} />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">小程序组件 Lab</h2>
                                    <p className="card-desc">微信小程序原生组件与 API 的交互式演示</p>
                                </div>
                                <div className="card-action">进入 Lab <ArrowRight size={16} /></div>
                            </Link>

                            <Link
                                to="/web-fx"
                                className={`workspace-card fx-card ${visibleCards.fx ? 'card-in-view' : ''}`}
                                data-card-key="fx"
                                ref={(node) => { cardRefs.current.fx = node; }}
                                style={{ '--glow-delay': '0.18s' }}
                            >
                                <div className="card-icon-wrapper">
                                    <Sparkles size={48} className="card-icon" strokeWidth={1.5} />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">网站视觉 Dashboard</h2>
                                    <p className="card-desc">网站视觉风格、行业风格与前端交互效果目录</p>
                                </div>
                                <div className="card-action">进入 Dashboard <ArrowRight size={16} /></div>
                            </Link>

                            <Link
                                to="/growth-loop"
                                className={`workspace-card gl-card ${visibleCards.gl ? 'card-in-view' : ''}`}
                                data-card-key="gl"
                                ref={(node) => { cardRefs.current.gl = node; }}
                                style={{ '--glow-delay': '0.36s' }}
                            >
                                <div className="card-icon-wrapper">
                                    <TrendingUp size={48} className="card-icon" strokeWidth={1.5} />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Growth Loop 学习</h2>
                                    <p className="card-desc">增长飞轮方法论：可视化学习 + 实践模板 + AI Prompt 库</p>
                                </div>
                                <div className="card-action">开始学习 <ArrowRight size={16} /></div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── GitHub CTA ── */}
                <div className="github-cta-section">
                    <p className="github-cta-line">如果这个项目帮到了你，Star 是最好的感谢 ⭐</p>
                    <div className="github-cta-buttons">
                        <a href="https://github.com/szkkb/wechat_miniprogram_dashboard" target="_blank" rel="noopener noreferrer" className="github-btn star-btn" onClick={() => track('click_tool', { tool: 'github_star' })}>
                            <Star size={16} />
                            <span>Star 收藏</span>
                        </a>
                        <a href="https://github.com/szkkb/wechat_miniprogram_dashboard/fork" target="_blank" rel="noopener noreferrer" className="github-btn fork-btn" onClick={() => track('click_tool', { tool: 'github_fork' })}>
                            <GitFork size={16} />
                            <span>Fork</span>
                        </a>
                    </div>
                    <p className="github-cta-hint">Star = 收藏到你的 GitHub，下次找得到 · 也让更多人发现这个项目</p>
                </div>

                {/* ── Footer ── */}
                <div className="landing-footer">
                    <a href="https://github.com/szkkb/wechat_miniprogram_dashboard" target="_blank" rel="noopener noreferrer" className="footer-github-link">
                        GitHub · CC BY-NC 4.0
                    </a>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="ambient-blob blob-1"></div>
            <div className="ambient-blob blob-2"></div>
        </div>
    );
};

export default LandingPage;
