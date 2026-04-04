import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Smartphone, Sparkles, TrendingUp } from 'lucide-react';
import './MobileTabBar.css';

const TABS = [
    { path: '/', icon: <Home size={20} />, label: '首页', end: true },
    { path: '/mini-program', icon: <Smartphone size={20} />, label: '小程序' },
    { path: '/web-fx', icon: <Sparkles size={20} />, label: '视觉' },
    { path: '/growth-loop', icon: <TrendingUp size={20} />, label: 'Growth' },
];

const MobileTabBar = () => (
    <nav className="mobile-tab-bar">
        {TABS.map(tab => (
            <NavLink
                key={tab.path}
                to={tab.path}
                end={tab.end}
                className={({ isActive }) => `tab-item ${isActive ? 'active' : ''}`}
            >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
            </NavLink>
        ))}
    </nav>
);

export default MobileTabBar;
