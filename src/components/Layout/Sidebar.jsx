import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Layers, Zap, X, Type, ListTree, ToggleRight, MapPin,
    Palette, ShieldCheck, Gauge, MessageCircle, Globe, Box,
    BoxSelect, CheckSquare, AlignLeft, SmartphoneCharging,
    LayoutDashboard, Image, ChevronDown, Smartphone
} from 'lucide-react';
import { MINIPROGRAM_CATALOG, MINIPROGRAM_GROUPS } from '../../data/catalog-registry';
import './Layout.css';

const ICON_MAP = {
    Layers: <Layers size={16} />,
    Navigation: <LayoutDashboard size={16} />,
    Image: <Image size={16} />,
    Globe: <Globe size={16} />,
    Zap: <Zap size={16} />,
};

const ITEM_ICONS = {
    'view-containers': <BoxSelect size={16} />,
    'form-elements': <CheckSquare size={16} />,
    'basic-content': <AlignLeft size={16} />,
    'rich-text': <Type size={16} />,
    'premium-cards': <Box size={16} />,
    'swipe-tabs': <Layers size={16} />,
    'timeline': <ListTree size={16} />,
    'navbar': <LayoutDashboard size={16} />,
    'country-picker': <Globe size={16} />,
    'captcha': <ToggleRight size={16} />,
    'map-markers': <MapPin size={16} />,
    'canvas-poster': <Palette size={16} />,
    'quick-login': <ShieldCheck size={16} />,
    'floating-cs': <MessageCircle size={16} />,
    'interactive-apis': <SmartphoneCharging size={16} />,
    'skyline': <Layers size={16} />,
    'gestures': <Zap size={16} />,
    'pull-refresh': <Gauge size={16} />,
};

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [collapsed, setCollapsed] = useState({});

    const toggleGroup = (id) => {
        setCollapsed(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            />

            <aside className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <NavLink to="/" className="logo-container" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="logo-icon">
                            <Smartphone size={16} />
                        </div>
                        <h1 className="logo-text">小程序 Lab</h1>
                    </NavLink>
                    <button className="mobile-close-btn" onClick={toggleSidebar}>
                        <X size={20} />
                    </button>
                </div>

                <div className="sidebar-count">
                    {MINIPROGRAM_CATALOG.length} 个组件演示
                </div>

                <nav className="sidebar-nav">
                    {MINIPROGRAM_GROUPS.map(group => {
                        const items = MINIPROGRAM_CATALOG.filter(i => i.group === group.id);
                        const isCollapsed = collapsed[group.id];
                        return (
                            <div key={group.id} className="nav-group">
                                <button
                                    className="nav-group-title collapsible"
                                    onClick={() => toggleGroup(group.id)}
                                >
                                    <span className="nav-group-icon">{ICON_MAP[group.icon]}</span>
                                    <span>{group.name.zh} {group.name.en}</span>
                                    <ChevronDown size={14} className={`chevron ${isCollapsed ? 'collapsed' : ''}`} />
                                </button>
                                {!isCollapsed && (
                                    <ul className="nav-list">
                                        {items.map(item => (
                                            <li key={item.id}>
                                                <NavLink
                                                    to={item.route}
                                                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                                    onClick={() => window.innerWidth <= 768 && toggleSidebar()}
                                                >
                                                    <span className="nav-icon">{ITEM_ICONS[item.id]}</span>
                                                    <span className="nav-label">{item.name.zh}</span>
                                                    <span className="nav-label-en">{item.name.en}</span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </nav>

                <div className="sidebar-footer">
                    <NavLink to="/" className="sidebar-back-link">
                        ← 返回首页
                    </NavLink>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
