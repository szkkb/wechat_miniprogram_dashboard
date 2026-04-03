import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronDown, BarChart3, BookOpen, Wrench, MessageSquare, LayoutGrid, TrendingUp } from 'lucide-react';

const GROUPS = [
    {
        id: 'viz', name: '可视化', en: 'Visualizations', icon: <BarChart3 size={16} />,
        items: [
            { id: 'outline', zh: '学习大纲', en: 'Outline', path: '/growth-loop/outline' },
            { id: 'lifecycle', zh: '生命周期', en: 'Lifecycle', path: '/growth-loop/lifecycle' },
            { id: 'keyword-map', zh: '关键词图谱', en: 'Keyword Map', path: '/growth-loop/keyword-map' },
        ]
    },
    {
        id: 'learn', name: '学习内容', en: 'Learning', icon: <BookOpen size={16} />,
        items: [
            { id: 'roadmap', zh: '学习路径', en: 'Roadmap', path: '/growth-loop/roadmap' },
            { id: 'paradigm', zh: '范式转换', en: 'Paradigm Shift', path: '/growth-loop/paradigm-shift' },
            { id: 'anatomy', zh: '循环解剖', en: 'Loop Anatomy', path: '/growth-loop/loop-anatomy' },
            { id: 'glossary', zh: '术语表', en: 'Glossary', path: '/growth-loop/glossary' },
        ]
    },
    {
        id: 'practice', name: '实践工具', en: 'Practice', icon: <Wrench size={16} />,
        items: [
            { id: 'canvas', zh: '循环设计画布', en: 'Design Canvas', path: '/growth-loop/design-canvas' },
            { id: 'biz', zh: '商业画布', en: 'Business Canvas', path: '/growth-loop/business-canvas' },
            { id: 'exp', zh: '实验模板', en: 'Experiment', path: '/growth-loop/experiment' },
        ]
    },
    {
        id: 'prompts', name: 'Prompt 库', en: 'Prompts', icon: <MessageSquare size={16} />,
        items: [
            { id: 'p-learn', zh: '学习 Prompts', en: 'Learning', path: '/growth-loop/prompts-learning' },
            { id: 'p-analysis', zh: '分析 Prompts', en: 'Analysis', path: '/growth-loop/prompts-analysis' },
            { id: 'p-practice', zh: '实践 Prompts', en: 'Practice', path: '/growth-loop/prompts-practice' },
            { id: 'p-reflect', zh: '反思 Prompts', en: 'Reflection', path: '/growth-loop/prompts-reflection' },
        ]
    },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [collapsed, setCollapsed] = useState({});
    const toggle = (id) => setCollapsed(p => ({ ...p, [id]: !p[id] }));
    const totalItems = GROUPS.reduce((s, g) => s + g.items.length, 0);

    return (
        <>
            <div className={`gl-sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSidebar} />
            <aside className={`gl-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="gl-sidebar-header">
                    <NavLink to="/" className="gl-logo-link">
                        <TrendingUp size={18} />
                        <span>Growth Loop</span>
                    </NavLink>
                    <button className="mobile-close-btn" onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                        <X size={20} />
                    </button>
                </div>

                <div className="gl-sidebar-count">{totalItems} 个学习资源</div>

                <nav className="gl-sidebar-nav">
                    <NavLink to="/growth-loop" end className={({ isActive }) => `gl-sub-item ${isActive ? 'active' : ''}`}
                        onClick={() => window.innerWidth <= 768 && toggleSidebar()}
                        style={{ marginBottom: '0.5rem', padding: '0.6rem 0.75rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <LayoutGrid size={16} /> <span>概览 Overview</span>
                    </NavLink>

                    {GROUPS.map(g => (
                        <div key={g.id} className="gl-nav-group">
                            <button className="gl-group-title" onClick={() => toggle(g.id)}>
                                <span className="gl-group-icon">{g.icon}</span>
                                <span className="gl-group-label">{g.name} <span style={{ fontSize: '0.6rem', color: '#475569', marginLeft: '0.25rem' }}>{g.en}</span></span>
                                <span className="gl-group-count">{g.items.length}</span>
                                <ChevronDown size={14} className={`gl-chevron ${collapsed[g.id] ? 'collapsed' : ''}`} />
                            </button>
                            {!collapsed[g.id] && (
                                <ul className="gl-sub-list">
                                    {g.items.map(item => (
                                        <li key={item.id}>
                                            <NavLink to={item.path}
                                                className={({ isActive }) => `gl-sub-item ${isActive ? 'active' : ''}`}
                                                onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
                                                <span className="gl-sub-label">{item.zh}</span>
                                                <span className="gl-sub-en">{item.en}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="gl-sidebar-footer">
                    <NavLink to="/" className="gl-back-link">← 返回首页</NavLink>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
