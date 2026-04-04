import React, { useState, useMemo, useCallback } from 'react';
import SmoothAccordion from '../../components/WebFXLayout/Demos/SmoothAccordion';
import SharedElement from '../../components/WebFXLayout/Demos/SharedElement';
import HoverSpotlight from '../../components/WebFXLayout/Demos/HoverSpotlight';
import FluidDragDrop from '../../components/WebFXLayout/Demos/FluidDragDrop';
import ShowcaseCard from '../../components/WebFXLayout/ShowcaseCard';
import { Link } from 'react-router-dom';
import './Gallery.css';

import MagneticButton from '../../components/WebFXLayout/BentoWidgets/MagneticButton';
import FrostedKPICard from '../../components/WebFXLayout/BentoWidgets/FrostedKPICard';

/* ── Typography Demos ── */
const PretextEngineCard = () => (
    <ShowcaseCard
        title="Pretext Engine 零回流排版引擎"
        description="60 FPS 逐行动态排版，文字自动避让浮动障碍物，零 DOM 回流"
        tags={['typography:engine', 'performance:60fps', 'layout:dynamic-wrap', '中文:标点禁排']}
    >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '1.5rem', background: '#0a0a12', minHeight: 200 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '0.3rem 0.8rem', borderRadius: 6 }}>
                layoutNextLine() · 0.1ms/帧
            </div>
            <div style={{ maxWidth: 340, color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.7, textAlign: 'center' }}>
                纯 JS 逐行计算文字排布位置，Canvas 一次性绘制。支持中文逐字断行 + 标点禁排规则。
            </div>
            <Link to="/web-fx/typography" style={{ color: '#a855f7', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>
                查看完整演示 →
            </Link>
        </div>
    </ShowcaseCard>
);

const FontShowcase = () => (
    <ShowcaseCard
        title="Font Pairing 常用字体搭配"
        description="前端项目常用的中英文字体组合，直接复制 CSS font-family 使用"
        tags={['typography:fonts', 'design:pairing', 'CSS:font-family']}
    >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem', background: '#0a0a12' }}>
            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc', marginBottom: 4 }}>
                    Outfit 800 标题字体
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: '#94a3b8' }}>
                    Outfit 300 正文搭配 · 适合科技/SaaS 产品
                </div>
                <code style={{ fontSize: '0.65rem', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '0.15rem 0.4rem', borderRadius: 3, marginTop: 4, display: 'inline-block' }}>
                    font-family: 'Outfit', sans-serif
                </code>
            </div>

            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '1.4rem', fontWeight: 400, color: '#f8fafc', marginBottom: 4 }}>
                    Instrument Serif 编辑风
                </div>
                <div style={{ fontFamily: "Georgia, 'Songti SC', serif", fontSize: '0.9rem', color: '#94a3b8' }}>
                    搭配宋体 · 适合杂志/奢侈品/人文博客
                </div>
                <code style={{ fontSize: '0.65rem', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '0.15rem 0.4rem', borderRadius: 3, marginTop: 4, display: 'inline-block' }}>
                    font-family: 'Instrument Serif', Georgia, serif
                </code>
            </div>

            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc', marginBottom: 4 }}>
                    JetBrains Mono 等宽体
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#94a3b8' }}>
                    代码/数据/终端场景首选 · 清晰辨识度
                </div>
                <code style={{ fontSize: '0.65rem', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '0.15rem 0.4rem', borderRadius: 3, marginTop: 4, display: 'inline-block' }}>
                    font-family: 'JetBrains Mono', monospace
                </code>
            </div>

            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>
                    思源黑体 中文无衬线
                </div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#94a3b8' }}>
                    Google 免费中文字体 · 7 个字重 · 适合正文
                </div>
                <code style={{ fontSize: '0.65rem', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '0.15rem 0.4rem', borderRadius: 3, marginTop: 4, display: 'inline-block' }}>
                    font-family: 'Noto Sans SC', sans-serif
                </code>
            </div>

            <div style={{ paddingBottom: '0.25rem' }}>
                <div style={{ fontFamily: "'LXGW WenKai Screen', cursive, serif", fontSize: '1.2rem', color: '#f8fafc', marginBottom: 4 }}>
                    霞鹜文楷 中文手写楷体
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    开源楷体 · 屏幕阅读优化版 · 适合诗词/引言
                </div>
                <code style={{ fontSize: '0.65rem', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '0.15rem 0.4rem', borderRadius: 3, marginTop: 4, display: 'inline-block' }}>
                    font-family: 'LXGW WenKai Screen', cursive
                </code>
            </div>

            <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.8rem', borderRadius: 8, background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.15)', fontSize: '0.65rem', color: '#94a3b8', lineHeight: 1.6 }}>
                💡 <strong style={{ color: '#38bdf8' }}>中文字体加载优化：</strong>完整中文字体 4-8MB。Google Fonts 用机器学习将字体切成 ~100 个 40KB 分片，浏览器只下载页面实际使用的汉字。使用 <code style={{ color: '#a78bfa' }}>unicode-range</code> + WOFF2 格式，4MB → ~200KB。
            </div>
        </div>
    </ShowcaseCard>
);

/* ── Fluid Typography Calculator ── */
const FluidTypography = () => {
    const [minSize, setMinSize] = useState(16);
    const [maxSize, setMaxSize] = useState(48);
    const minVw = 320, maxVw = 1280;
    const slope = (maxSize - minSize) / (maxVw - minVw);
    const yInt = minSize - slope * minVw;
    const clampVal = `clamp(${(minSize/16).toFixed(3)}rem, ${(yInt/16).toFixed(3)}rem + ${(slope*100).toFixed(3)}vw, ${(maxSize/16).toFixed(3)}rem)`;

    return (
        <ShowcaseCard
            title="Fluid Typography 流体排版计算器"
            description="一行 CSS clamp() 取代所有媒体查询断点 — 字体像水一样连续适应屏幕"
            tags={['typography:fluid', 'CSS:clamp()', '响应式', '零断点']}
        >
            <div style={{ padding: '1.5rem', background: '#0a0a12', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <label style={{ flex: 1, minWidth: 120 }}>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginBottom: 4 }}>最小字号 (px)</span>
                        <input type="range" min="12" max="32" value={minSize} onChange={e => setMinSize(+e.target.value)} style={{ width: '100%' }} />
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#22c55e' }}>{minSize}px</span>
                    </label>
                    <label style={{ flex: 1, minWidth: 120 }}>
                        <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginBottom: 4 }}>最大字号 (px)</span>
                        <input type="range" min="24" max="96" value={maxSize} onChange={e => setMaxSize(+e.target.value)} style={{ width: '100%' }} />
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: '#a855f7' }}>{maxSize}px</span>
                    </label>
                </div>
                <div style={{ padding: '0.75rem', borderRadius: 8, background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: '#c084fc', wordBreak: 'break-all', lineHeight: 1.6 }}>
                    font-size: {clampVal};
                </div>
                <div style={{ fontSize: clampVal, fontFamily: "'Outfit', sans-serif", fontWeight: 800, color: '#f8fafc', transition: 'font-size 0.2s', lineHeight: 1.2 }}>
                    流体字号预览
                </div>
                <div style={{ fontSize: '0.7rem', color: '#475569', lineHeight: 1.6 }}>
                    💡 原理：clamp(最小值, 首选值, 最大值)。首选值用 rem + vw 线性插值，在 {minVw}px→{maxVw}px 视口间连续缩放。
                </div>
            </div>
        </ShowcaseCard>
    );
};

/* ── Variable Fonts 可变字体 ── */
const VariableFontsDemo = () => {
    const [weight, setWeight] = useState(400);
    return (
        <ShowcaseCard
            title="Variable Fonts 可变字体"
            description="一个文件 = 一整个字体家族 — 用滑块实时调整 weight，感受连续变化"
            tags={['typography:variable', 'font-variation-settings', 'opsz 光学尺寸', '性能:单文件']}
        >
            <div style={{ padding: '1.5rem', background: '#0a0a12', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <label>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block', marginBottom: 4 }}>font-weight: <span style={{ fontFamily: "'JetBrains Mono', monospace", color: '#22c55e' }}>{weight}</span></span>
                    <input type="range" min="100" max="900" step="1" value={weight} onChange={e => setWeight(+e.target.value)} style={{ width: '100%' }} />
                </label>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: weight, fontSize: '2rem', color: '#f8fafc', transition: 'font-weight 0.05s', lineHeight: 1.3 }}>
                    Outfit Variable 连续变化
                </div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: weight, fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.6 }}>
                    传统方式需要 Light.woff2 + Regular.woff2 + Bold.woff2 三个文件。可变字体只需一个文件，包含 100-900 的连续 weight 变化。
                </div>
                <div style={{ padding: '0.6rem 0.8rem', borderRadius: 8, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', fontSize: '0.7rem', color: '#64748b', lineHeight: 1.7 }}>
                    <strong style={{ color: '#22c55e' }}>隐藏超能力 — Optical Size (opsz)：</strong>小字号自动加粗笔画保证可读性，大标题自动变纤细显示精致细节。浏览器已原生支持 <code style={{ color: '#a78bfa' }}>font-optical-sizing: auto</code>
                </div>
            </div>
        </ShowcaseCard>
    );
};

/* ── CJK 排版参数表 ── */
const CJKParamsCard = () => (
    <ShowcaseCard
        title="CJK Params 中英文排版黄金参数"
        description="中文不要加字间距 — 反直觉的排版真相，及中英文最佳参数对照"
        tags={['typography:CJK', 'line-height', 'letter-spacing', '阅读体验研究']}
    >
        <div style={{ padding: '1.5rem', background: '#0a0a12' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
                        <th style={{ padding: '0.5rem', textAlign: 'left', color: '#f8fafc', fontWeight: 600 }}>参数</th>
                        <th style={{ padding: '0.5rem', textAlign: 'center', color: '#22c55e', fontWeight: 600 }}>中文正文</th>
                        <th style={{ padding: '0.5rem', textAlign: 'center', color: '#38bdf8', fontWeight: 600 }}>英文正文</th>
                        <th style={{ padding: '0.5rem', textAlign: 'left', color: '#64748b', fontWeight: 500 }}>原因</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['font-size', '16px', '16px', '屏幕阅读最低舒适值'],
                        ['line-height', '1.8 ~ 2.0', '1.5 ~ 1.6', '汉字占满 em 方框，行间更挤'],
                        ['letter-spacing', '0（不要加）', '0 ~ 0.02em', '方块字自带内建间距'],
                        ['max-width', '35 ~ 40em', '60 ~ 75ch', '中文信息密度更高'],
                        ['text-indent', '2em', '0', '中文段落首行缩进传统'],
                    ].map(([param, zh, en, reason], i) => (
                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                            <td style={{ padding: '0.5rem', fontFamily: "'JetBrains Mono', monospace", color: '#c084fc', fontSize: '0.7rem' }}>{param}</td>
                            <td style={{ padding: '0.5rem', textAlign: 'center', color: '#cbd5e1', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>{zh}</td>
                            <td style={{ padding: '0.5rem', textAlign: 'center', color: '#cbd5e1', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem' }}>{en}</td>
                            <td style={{ padding: '0.5rem', color: '#64748b', fontSize: '0.7rem' }}>{reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '1rem', padding: '0.6rem 0.8rem', borderRadius: 8, background: 'rgba(255,190,92,0.08)', borderLeft: '3px solid #ffbe5c', fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.6 }}>
                ⚠️ <strong style={{ color: '#ffbe5c' }}>反直觉发现：</strong>中文正文加 letter-spacing 会导致需要更大的 line-height，最终文章变得不可读。字间距只在标题中少量使用（0.05-0.1em）。
            </div>
        </div>
    </ShowcaseCard>
);

/* ── 霞鹜文楷 + Modular Scale ── */
const LXGWWenKaiCard = () => (
    <ShowcaseCard
        title="LXGW WenKai 霞鹜文楷"
        description="中文网页的手写温度 — 唯一适合网页的免费开源楷体，带屏幕阅读优化版"
        tags={['typography:CJK-kai', '开源字体', 'CDN 可用', '诗词/引言/注释']}
    >
        <div style={{ padding: '1.5rem', background: '#0a0a12', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontFamily: "'LXGW WenKai Screen', cursive, serif", fontSize: '1.3rem', color: '#f8fafc', lineHeight: 1.8 }}>
                予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。
            </div>
            <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.6 }}>
                ↑ 如果你看到的是楷体效果，说明你的浏览器已缓存了霞鹜文楷。否则会降级为系统默认衬线体。
            </div>
            <code style={{ fontSize: '0.65rem', color: '#a78bfa', background: 'rgba(167,139,250,0.1)', padding: '0.4rem 0.6rem', borderRadius: 4, lineHeight: 1.5, display: 'block' }}>
                {`/* CDN 引入 */\n@import url('https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.7.0/style.css');\n\n/* 使用 */\nfont-family: 'LXGW WenKai Screen', cursive;`}
            </code>
            <div style={{ fontSize: '0.7rem', color: '#475569', lineHeight: 1.6 }}>
                💡 适合场景：诗词、引言、注释、人文博客。<strong style={{ color: '#ffbe5c' }}>不适合大段正文</strong>（作者本人也这么说）。<br/>
                📐 <strong style={{ color: '#38bdf8' }}>Modular Scale 推荐：</strong>用 <a href="https://typescale.com" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', textDecoration: 'none' }}>Typescale.com</a> 生成字号层级。推荐比率 1.25 (Major Third) 或 1.333 (Perfect Fourth)。Golden Ratio (1.618) 在 UI 中太夸张。
            </div>
        </div>
    </ShowcaseCard>
);

// 1. Mandatory Bilingual Categories Dictionary
const CATEGORIES = [
    { id: 'all', en: 'All Demos', zh: '全部演示' },
    { id: 'visual-styles', en: 'Visual Styles', zh: '视觉风格' },
    { id: 'layout', en: 'Layout & Composition', zh: '布局与版式' },
    { id: 'motion', en: 'Motion & Physics', zh: '动效与物理' },
    { id: 'transitions', en: 'Transitions', zh: '转场过渡' },
    { id: 'patterns', en: 'Interaction Patterns', zh: '交互模式' },
    { id: 'microinteractions', en: 'Microinteractions', zh: '组件微交互' },
    { id: 'background', en: 'Background & Effects', zh: '背景与特效' },
    { id: '3d-spatial', en: '3D & Spatial', zh: '3D 与空间' },
    { id: 'typography', en: 'Typography', zh: '字体与排版' },
    { id: 'data-vis', en: 'Data Visualization', zh: '数据可视化' },
    { id: 'ux-states', en: 'UX States', zh: '状态反馈' },
    { id: 'performance', en: 'Performance & A11y', zh: '性能与无障碍' },
];

// 2. Demo Registry - Mapping precisely to IA Tags
const DEMO_REGISTRY = [
    {
        id: 'spotlight-hover',
        component: <HoverSpotlight key="spotlight" />,
        categories: ['visual-styles', 'background', 'patterns']
    },
    {
        id: 'shared-element',
        component: <SharedElement key="shared-element" />,
        categories: ['transitions', 'layout']
    },
    {
        id: 'smooth-accordion',
        component: <SmoothAccordion key="smooth-accordion" />,
        categories: ['microinteractions', 'patterns', 'motion']
    },
    {
        id: 'fluid-drag',
        component: <FluidDragDrop key="fluid-drag" />,
        categories: ['patterns', 'motion']
    },
    {
        id: 'magnetic-button',
        component: <MagneticButton key="magnetic-btn" />,
        categories: ['microinteractions', 'motion', 'visual-styles']
    },
    {
        id: 'frosted-card',
        component: <FrostedKPICard key="frosted-card" />,
        categories: ['visual-styles', '3d-spatial', 'background']
    },
    {
        id: 'pretext-engine',
        component: <PretextEngineCard key="pretext" />,
        categories: ['typography', 'performance']
    },
    {
        id: 'font-showcase',
        component: <FontShowcase key="fonts" />,
        categories: ['typography', 'visual-styles']
    },
    {
        id: 'fluid-typography',
        component: <FluidTypography key="fluid" />,
        categories: ['typography', 'performance']
    },
    {
        id: 'variable-fonts',
        component: <VariableFontsDemo key="varfonts" />,
        categories: ['typography', 'performance']
    },
    {
        id: 'cjk-params',
        component: <CJKParamsCard key="cjk" />,
        categories: ['typography']
    },
    {
        id: 'lxgw-wenkai',
        component: <LXGWWenKaiCard key="lxgw" />,
        categories: ['typography']
    }
];

const Gallery = () => {
    const [activeCat, setActiveCat] = useState('all');

    const filteredDemos = useMemo(() => {
        if (activeCat === 'all') return DEMO_REGISTRY;
        return DEMO_REGISTRY.filter(demo => demo.categories.includes(activeCat));
    }, [activeCat]);

    return (
        <div className="webfx-page animate-fade-in gallery-dashboard">
            {/* Sidebar Mapping the 12 IA Categories */}
            <aside className="gallery-sidebar glass-panel">
                <div className="sidebar-header">
                    <h2>IA Taxonomy</h2>
                    <p>按标准图谱字典分类检索</p>
                </div>
                <nav className="gallery-nav">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            className={"gallery-nav-btn " + (activeCat === cat.id ? 'active' : '')}
                            onClick={() => setActiveCat(cat.id)}
                        >
                            <span className="nav-en">{cat.en}</span>
                            <span className="nav-zh">{cat.zh}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="gallery-main">
                <div className="gallery-header-info">
                    <h1>{CATEGORIES.find(c => c.id === activeCat)?.en}</h1>
                    <p className="subtitle">{CATEGORIES.find(c => c.id === activeCat)?.zh} - 生产级组件库</p>
                </div>

                {filteredDemos.length > 0 ? (
                    <div className="gallery-masonry-grid">
                        {filteredDemos.map(item => item.component)}
                    </div>
                ) : (
                    <div className="gallery-empty-state glass-panel">
                        <h3>Coming Soon</h3>
                        <p>该分类下的高阶演示包正在研发中，敬请期待跨越 DOM 限制的前端魔法。</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Gallery;
