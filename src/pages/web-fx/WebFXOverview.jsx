import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Building2, MousePointerClick, ArrowRight } from 'lucide-react';
import { WEBFX_CATALOG, getWebfxCounts } from '../../data/catalog-registry';
import './WebFXOverview.css';

const SectionPreview = ({ icon, title, subtitle, count, items, linkTo, delay }) => (
    <motion.div
        className="wfx-ov-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className="wfx-ov-section-header">
            <div className="wfx-ov-section-icon">{icon}</div>
            <div>
                <h2 className="wfx-ov-section-title">{title}</h2>
                <p className="wfx-ov-section-sub">{subtitle}</p>
            </div>
            <Link to={linkTo} className="wfx-ov-section-link">
                查看全部 ({count}) <ArrowRight size={14} />
            </Link>
        </div>
        <div className="wfx-ov-items">
            {items.slice(0, 8).map(item => (
                <Link key={item.id} to={item.route} className="wfx-ov-item">
                    <span className="wfx-ov-item-zh">{item.name.zh}</span>
                    <span className="wfx-ov-item-en">{item.name.en}</span>
                </Link>
            ))}
            {items.length > 8 && (
                <Link to={linkTo} className="wfx-ov-item more">+{items.length - 8} more</Link>
            )}
        </div>
    </motion.div>
);

const WebFXOverview = () => {
    const counts = getWebfxCounts();
    const visualItems = WEBFX_CATALOG.filter(i => i.group === 'visual');
    const industryItems = WEBFX_CATALOG.filter(i => i.group === 'industry');
    const interactionItems = WEBFX_CATALOG.filter(i => i.group === 'interaction');

    return (
        <div className="webfx-page animate-fade-in wfx-overview">
            <motion.div
                className="wfx-ov-hero"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="wfx-ov-title">网站视觉 Dashboard</h1>
                <p className="wfx-ov-subtitle">
                    {counts.total} 个视觉风格与交互演示 — 浏览、预览、复制标准名称给 AI
                </p>
            </motion.div>

            <SectionPreview
                icon={<Palette size={20} />}
                title="视觉风格 Visual Styles"
                subtitle="材质模拟 · 色彩光影 · 结构形态"
                count={counts.visual}
                items={visualItems}
                linkTo="/web-fx/visual-styles"
                delay={0.1}
            />

            <SectionPreview
                icon={<Building2 size={20} />}
                title="行业风格 Industry Styles"
                subtitle="物流 · 金融 · 电商 · SaaS · 博客"
                count={counts.industry}
                items={industryItems}
                linkTo="/web-fx/industry-styles"
                delay={0.2}
            />

            <SectionPreview
                icon={<MousePointerClick size={20} />}
                title="交互演示 Interactions"
                subtitle="磁性按钮 · 拖拽 · 手风琴 · 字体与排版"
                count={counts.interaction}
                items={interactionItems}
                linkTo="/web-fx/gallery"
                delay={0.3}
            />
        </div>
    );
};

export default WebFXOverview;
