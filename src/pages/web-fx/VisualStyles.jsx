import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShowcaseCard from '../../components/WebFXLayout/ShowcaseCard';
import './VisualStyles.css';

/* ═══════════════════════════════════════════════════════
   A. Material & Aesthetic — 13 Visual Style Demos
   ═══════════════════════════════════════════════════════ */

// 1. Glassmorphism
const GlassmorphismDemo = () => (
    <ShowcaseCard
        title="Glassmorphism 玻璃拟态"
        description="多层磨砂玻璃叠加，backdrop-filter blur + 半透明层级"
        tags={['visual-styles:Material', 'backdrop-filter', 'blur']}
    >
        <div className="vs-glass-scene">
            <div className="vs-glass-blob b1" />
            <div className="vs-glass-blob b2" />
            <div className="vs-glass-blob b3" />
            <div className="vs-glass-card back">
                <div className="vs-glass-line" /><div className="vs-glass-line short" />
            </div>
            <div className="vs-glass-card front">
                <div className="vs-glass-avatar" />
                <div className="vs-glass-line" /><div className="vs-glass-line short" />
                <div className="vs-glass-badge">Premium</div>
            </div>
        </div>
    </ShowcaseCard>
);

// 2. Neumorphism
const NeumorphismDemo = () => {
    const [playing, setPlaying] = useState(false);
    return (
        <ShowcaseCard
            title="Neumorphism 新拟物风格"
            description="柔和光影凹凸感，同色系 inset/outset shadow 营造触感"
            tags={['visual-styles:Material', 'soft-shadow', 'tactile']}
        >
            <div className="vs-neu-scene">
                <div className="vs-neu-card">
                    <div className="vs-neu-circle">
                        <span>{playing ? '⏸' : '▶'}</span>
                    </div>
                    <div className="vs-neu-track"><div className="vs-neu-fill" /></div>
                    <div className="vs-neu-btns">
                        <button className="vs-neu-btn">⏮</button>
                        <button className={`vs-neu-btn main ${playing ? 'pressed' : ''}`} onClick={() => setPlaying(!playing)}>
                            {playing ? '⏸' : '▶'}
                        </button>
                        <button className="vs-neu-btn">⏭</button>
                    </div>
                </div>
            </div>
        </ShowcaseCard>
    );
};

// 3. Claymorphism
const ClaymorphismDemo = () => (
    <ShowcaseCard
        title="Claymorphism 泥塑 3D 风"
        description="圆润气泡造型，双层阴影 + 内发光模拟粘土质感"
        tags={['visual-styles:Material', '3d-clay', 'playful']}
    >
        <div className="vs-clay-scene">
            <div className="vs-clay-card">
                <div className="vs-clay-icon">🎨</div>
                <div className="vs-clay-title">Creative Hub</div>
                <div className="vs-clay-desc">Design your ideas</div>
                <div className="vs-clay-btn">Get Started</div>
            </div>
            <div className="vs-clay-card accent">
                <div className="vs-clay-icon">🚀</div>
                <div className="vs-clay-title">Launch Pad</div>
                <div className="vs-clay-desc">Ship with confidence</div>
                <div className="vs-clay-btn">Deploy</div>
            </div>
        </div>
    </ShowcaseCard>
);

// 4. Liquid Metal
const LiquidMetalDemo = () => {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 50, y: 50 });
    const handleMove = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
    };
    return (
        <ShowcaseCard
            title="Liquid Metal 液态金属材质"
            description="高光流动的金属反射，跟随鼠标的镜面渐变"
            tags={['visual-styles:Material', 'metallic', 'reflection']}
        >
            <div className="vs-metal-scene" ref={ref} onMouseMove={handleMove}>
                <div className="vs-metal-card" style={{ '--mx': `${pos.x}%`, '--my': `${pos.y}%` }}>
                    <div className="vs-metal-shine" />
                    <div className="vs-metal-label">PLATINUM</div>
                    <div className="vs-metal-value">∞</div>
                    <div className="vs-metal-sub">Liquid Metal Surface</div>
                </div>
            </div>
        </ShowcaseCard>
    );
};

// 5. Holographic
const HolographicDemo = () => {
    const ref = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const handleMove = (e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 30, y: ((e.clientY - r.top) / r.height - 0.5) * -30 });
    };
    return (
        <ShowcaseCard
            title="Holographic 全息彩色材质"
            description="角度变化的彩虹衍射效果，模拟全息贴纸质感"
            tags={['visual-styles:Material', 'holographic', 'iridescent']}
        >
            <div className="vs-holo-scene" ref={ref} onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
                <div className="vs-holo-card" style={{ transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}>
                    <div className="vs-holo-foil" />
                    <div className="vs-holo-content">
                        <div className="vs-holo-chip" />
                        <div className="vs-holo-number">4242 •••• •••• 8888</div>
                        <div className="vs-holo-name">XIAO LEI</div>
                    </div>
                </div>
            </div>
        </ShowcaseCard>
    );
};

// 6. Dark Mode
const DarkModeDemo = () => (
    <ShowcaseCard
        title="Dark Mode 极夜暗黑模式"
        description="纯黑底 + 微光层级，OLED 友好的极致暗黑体验"
        tags={['visual-styles:Color', 'dark-mode', 'OLED']}
    >
        <div className="vs-dark-scene">
            <div className="vs-dark-panel">
                <div className="vs-dark-dots"><span className="r" /><span className="y" /><span className="g" /></div>
                <div className="vs-dark-body">
                    <div className="vs-dark-side">
                        <div className="vs-dark-item active" /><div className="vs-dark-item" />
                        <div className="vs-dark-item" /><div className="vs-dark-item" />
                    </div>
                    <div className="vs-dark-main">
                        <div className="vs-dark-line w80" /><div className="vs-dark-line w60" />
                        <div className="vs-dark-cards">
                            <div className="vs-dark-mini" /><div className="vs-dark-mini" /><div className="vs-dark-mini" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 7. Dopamine UI
const DopamineDemo = () => (
    <ShowcaseCard
        title="Dopamine UI 多巴胺风"
        description="高饱和度色彩冲击，充满活力的 Gen-Z 风格"
        tags={['visual-styles:Color', 'dopamine', 'vibrant']}
    >
        <div className="vs-dopa-scene">
            <div className="vs-dopa-card c1"><span>🍬</span><p>Candy</p></div>
            <div className="vs-dopa-card c2"><span>⚡</span><p>Energy</p></div>
            <div className="vs-dopa-card c3"><span>🫧</span><p>Bubble</p></div>
            <div className="vs-dopa-card c4"><span>🍀</span><p>Fresh</p></div>
        </div>
    </ShowcaseCard>
);

// 8. Neon / Cyberpunk
const NeonCyberpunkDemo = () => (
    <ShowcaseCard
        title="Neon / Cyberpunk 赛博朋克发光风"
        description="霓虹发光描边，深色背景中的赛博朋克视觉冲击"
        tags={['visual-styles:Color', 'neon', 'cyberpunk']}
    >
        <div className="vs-neon-scene">
            <div className="vs-neon-scanlines" />
            <div className="vs-neon-card">
                <div className="vs-neon-title">SYSTEM://ONLINE</div>
                <div className="vs-neon-divider" />
                <div className="vs-neon-row"><span className="label">STATUS</span><span className="val cyan">ACTIVE</span></div>
                <div className="vs-neon-row"><span className="label">THREAT</span><span className="val magenta">LOW</span></div>
                <div className="vs-neon-row"><span className="label">UPLINK</span><span className="val green">98.7%</span></div>
                <div className="vs-neon-bar"><div className="vs-neon-bar-fill" /></div>
            </div>
            <div className="vs-neon-sign">CYBER</div>
        </div>
    </ShowcaseCard>
);

// 9. Pastel / Macaron
const PastelMacaronDemo = () => (
    <ShowcaseCard
        title="Pastel / Macaron 马卡龙氛围"
        description="低饱和柔和色调，温暖治愈的视觉体验"
        tags={['visual-styles:Color', 'pastel', 'macaron']}
    >
        <div className="vs-pastel-scene">
            <div className="vs-pastel-card pink"><div className="vs-pastel-ic">🌸</div><p className="t">Wellness</p><p className="s">Daily check-in</p></div>
            <div className="vs-pastel-card mint"><div className="vs-pastel-ic">🍃</div><p className="t">Meditation</p><p className="s">5 min session</p></div>
            <div className="vs-pastel-card lavender"><div className="vs-pastel-ic">💤</div><p className="t">Sleep</p><p className="s">8h average</p></div>
        </div>
    </ShowcaseCard>
);

// 10. Flat 2.0
const Flat2Demo = () => (
    <ShowcaseCard
        title="Flat 2.0 微投影扁平 2.0"
        description="经典扁平设计 + 精致微阴影，Material-inspired 的现代进化"
        tags={['visual-styles:Structure', 'flat', 'micro-shadow']}
    >
        <div className="vs-flat-scene">
            <div className="vs-flat-card">
                <div className="vs-flat-header"><div className="vs-flat-av" /><div><div className="vs-flat-name">Dashboard</div><div className="vs-flat-sub">Overview</div></div></div>
                <div className="vs-flat-metrics">
                    <div className="vs-flat-m blue"><div className="v">2,847</div><div className="l">Users</div></div>
                    <div className="vs-flat-m green"><div className="v">94.2%</div><div className="l">Uptime</div></div>
                    <div className="vs-flat-m orange"><div className="v">1.2k</div><div className="l">Orders</div></div>
                </div>
                <button className="vs-flat-btn">View Report</button>
            </div>
        </div>
    </ShowcaseCard>
);

// 11. Neo-Brutalism
const NeoBrutalismDemo = () => (
    <ShowcaseCard
        title="Neo-Brutalism 新野蛮主义"
        description="加粗黑色描边 + 硬阴影偏移，大胆前卫的视觉主张"
        tags={['visual-styles:Structure', 'brutalism', 'bold-stroke']}
    >
        <div className="vs-brutal-scene">
            <div className="vs-brutal-card yellow">
                <div className="vs-brutal-h">BIG IDEA</div>
                <p>Design is not decoration.</p>
                <button className="vs-brutal-btn">READ MORE →</button>
            </div>
            <div className="vs-brutal-card pink">
                <div className="vs-brutal-tag">NEW</div>
                <div className="vs-brutal-h">BOLD</div>
                <p>No borders, no limits.</p>
                <button className="vs-brutal-btn dark">JOIN NOW →</button>
            </div>
        </div>
    </ShowcaseCard>
);

// 12. Wireframe / Blueprint
const WireframeDemo = () => (
    <ShowcaseCard
        title="Wireframe 线框蓝图风格"
        description="工程蓝图底纹 + 纯线框构成，技术感满载"
        tags={['visual-styles:Structure', 'wireframe', 'blueprint']}
    >
        <div className="vs-wire-scene">
            <div className="vs-wire-grid" />
            <div className="vs-wire-layout">
                <div className="vs-wire-box header">[HEADER]</div>
                <div className="vs-wire-row">
                    <div className="vs-wire-box nav">[NAV]</div>
                    <div className="vs-wire-box content">[CONTENT]<div className="vs-wire-lines"><div /><div className="short" /></div></div>
                </div>
                <div className="vs-wire-box footer">[FOOTER]</div>
            </div>
            <div className="vs-wire-dim">← 1200px →</div>
        </div>
    </ShowcaseCard>
);

// 13. Bauhaus / Swiss
const BauhausDemo = () => (
    <ShowcaseCard
        title="Bauhaus / Swiss 包豪斯国际主义排版"
        description="几何图形 + 严格网格 + 高对比纯色块，经典设计理性美学"
        tags={['visual-styles:Structure', 'bauhaus', 'swiss-style']}
    >
        <div className="vs-bauhaus-scene">
            <div className="vs-bauhaus-grid">
                <div className="vs-bauhaus-cell red"><div className="vs-bauhaus-circle" /></div>
                <div className="vs-bauhaus-cell title-cell"><span>FORM<br />FOLLOWS<br />FUNCTION</span></div>
                <div className="vs-bauhaus-cell yellow"><div className="vs-bauhaus-triangle" /></div>
                <div className="vs-bauhaus-cell blue"><div className="vs-bauhaus-square" /></div>
                <div className="vs-bauhaus-cell sub-cell"><span>1919 — WEIMAR</span></div>
                <div className="vs-bauhaus-cell black"><span>B</span></div>
            </div>
        </div>
    </ShowcaseCard>
);

/* ═══════════════════════════════════════════════════════
   Page Layout with Section Filter
   ═══════════════════════════════════════════════════════ */

const sections = [
    { id: 'all', label: 'All Styles', zh: '全部风格' },
    { id: 'material', label: 'Material & Texture', zh: '材质模拟' },
    { id: 'color', label: 'Color & Light', zh: '色彩光影' },
    { id: 'structure', label: 'Structure & Form', zh: '结构形态' },
];

const demos = [
    { section: 'material', el: <GlassmorphismDemo key="glass" /> },
    { section: 'material', el: <NeumorphismDemo key="neu" /> },
    { section: 'material', el: <ClaymorphismDemo key="clay" /> },
    { section: 'material', el: <LiquidMetalDemo key="metal" /> },
    { section: 'material', el: <HolographicDemo key="holo" /> },
    { section: 'color', el: <DarkModeDemo key="dark" /> },
    { section: 'color', el: <DopamineDemo key="dopa" /> },
    { section: 'color', el: <NeonCyberpunkDemo key="neon" /> },
    { section: 'color', el: <PastelMacaronDemo key="pastel" /> },
    { section: 'structure', el: <Flat2Demo key="flat" /> },
    { section: 'structure', el: <NeoBrutalismDemo key="brutal" /> },
    { section: 'structure', el: <WireframeDemo key="wire" /> },
    { section: 'structure', el: <BauhausDemo key="bauhaus" /> },
];

const VisualStyles = () => {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? demos : demos.filter(d => d.section === active);

    return (
        <div className="webfx-page animate-fade-in vs-page">
            <div className="vs-hero">
                <div className="vs-hero-glow g1" />
                <div className="vs-hero-glow g2" />
                <motion.div
                    className="vs-hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="vs-hero-tag">A. Material & Aesthetic</span>
                    <h1 className="vs-hero-title">Visual Styles</h1>
                    <p className="vs-hero-subtitle">材质与通感表达 — 13 种生产级视觉风格体系</p>
                </motion.div>
                <motion.div
                    className="vs-filters"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {sections.map(s => (
                        <button key={s.id} className={`vs-filter ${active === s.id ? 'active' : ''}`} onClick={() => setActive(s.id)}>
                            {s.label} <span className="zh">{s.zh}</span>
                        </button>
                    ))}
                </motion.div>
            </div>
            <div className="vs-grid">
                <AnimatePresence mode="popLayout">
                    {filtered.map((d, i) => (
                        <motion.div
                            key={d.section + i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {d.el}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default VisualStyles;
