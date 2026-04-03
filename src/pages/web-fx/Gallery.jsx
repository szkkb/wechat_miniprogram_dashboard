import React, { useState, useMemo } from 'react';
import SmoothAccordion from '../../components/WebFXLayout/Demos/SmoothAccordion';
import SharedElement from '../../components/WebFXLayout/Demos/SharedElement';
import HoverSpotlight from '../../components/WebFXLayout/Demos/HoverSpotlight';
import FluidDragDrop from '../../components/WebFXLayout/Demos/FluidDragDrop';
import TypographyDemo from '../../pages/web-fx/TypographyDemo';
import './Gallery.css';

import MagneticButton from '../../components/WebFXLayout/BentoWidgets/MagneticButton';
import FrostedKPICard from '../../components/WebFXLayout/BentoWidgets/FrostedKPICard';

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
