import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, X, ChevronDown, Palette, Building2, MousePointerClick, LayoutGrid, Sparkles } from 'lucide-react';
import { WEBFX_CATALOG, WEBFX_GROUPS, getWebfxCounts } from '../../data/catalog-registry';

const GROUP_ICONS = {
    visual: <Palette size={16} />,
    industry: <Building2 size={16} />,
    interaction: <MousePointerClick size={16} />,
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [collapsed, setCollapsed] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const counts = getWebfxCounts();

    const toggleGroup = (id) => {
        setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSubClick = (group, sub) => {
        // Navigate to the style page with the subcategory filter
        if (group.id === 'visual') {
            navigate(`/web-fx/visual-styles?filter=${sub.id}`);
        } else if (group.id === 'industry') {
            navigate(`/web-fx/industry-styles?filter=${sub.id}`);
        }
        if (window.innerWidth <= 768) toggleSidebar();
    };

    return (
        <>
            <div
                className={`webfx-sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            />

            <aside className={`webfx-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="webfx-sidebar-header">
                    <NavLink to="/" className="webfx-logo-link">
                        <Sparkles size={18} />
                        <span>视觉 Dashboard</span>
                    </NavLink>
                    <button className="mobile-close-btn" onClick={toggleSidebar}>
                        <X size={20} />
                    </button>
                </div>

                <div className="webfx-sidebar-count">
                    {counts.total} 个视觉演示
                </div>

                {/* Overview link */}
                <nav className="webfx-sidebar-nav">
                    <NavLink
                        to="/web-fx"
                        end
                        className={({ isActive }) => `webfx-overview-link ${isActive ? 'active' : ''}`}
                        onClick={() => window.innerWidth <= 768 && toggleSidebar()}
                    >
                        <LayoutGrid size={16} />
                        <span>概览 Overview</span>
                    </NavLink>

                    {WEBFX_GROUPS.map(group => {
                        const items = WEBFX_CATALOG.filter(i => i.group === group.id);
                        const isCollapsed = collapsed[group.id];
                        const count = items.length;

                        return (
                            <div key={group.id} className="webfx-nav-group">
                                <button
                                    className="webfx-group-title"
                                    onClick={() => toggleGroup(group.id)}
                                >
                                    <span className="webfx-group-icon">{GROUP_ICONS[group.id]}</span>
                                    <span className="webfx-group-label">
                                        {group.name.zh} <span className="webfx-group-en">{group.name.en}</span>
                                    </span>
                                    <span className="webfx-group-count">{count}</span>
                                    <ChevronDown size={14} className={`webfx-chevron ${isCollapsed ? 'collapsed' : ''}`} />
                                </button>

                                {!isCollapsed && (
                                    <ul className="webfx-sub-list">
                                        {group.subs ? (
                                            // Groups with subcategories (visual, industry)
                                            group.subs.map(sub => {
                                                const subCount = items.filter(i => i.sub === sub.id).length;
                                                return (
                                                    <li key={sub.id}>
                                                        <button
                                                            className="webfx-sub-item"
                                                            onClick={() => handleSubClick(group, sub)}
                                                        >
                                                            <span className="webfx-sub-label">{sub.name.zh}</span>
                                                            <span className="webfx-sub-en">{sub.name.en}</span>
                                                            <span className="webfx-sub-count">{subCount}</span>
                                                        </button>
                                                    </li>
                                                );
                                            })
                                        ) : (
                                            // Flat items (interaction)
                                            items.map(item => (
                                                <li key={item.id}>
                                                    <NavLink
                                                        to={item.route}
                                                        className={({ isActive }) => `webfx-sub-item link ${isActive ? 'active' : ''}`}
                                                        onClick={() => window.innerWidth <= 768 && toggleSidebar()}
                                                    >
                                                        <span className="webfx-sub-label">{item.name.zh}</span>
                                                        <span className="webfx-sub-en">{item.name.en}</span>
                                                    </NavLink>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="webfx-sidebar-footer">
                    <NavLink to="/" className="webfx-back-link">
                        ← 返回首页
                    </NavLink>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
