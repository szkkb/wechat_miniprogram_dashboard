import React, { useState, useMemo } from 'react';
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

            <div style={{ paddingBottom: '0.25rem' }}>
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
