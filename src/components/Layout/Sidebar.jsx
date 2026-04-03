import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard, BoxSelect, CheckSquare, AlignLeft, Layers, Zap, Smartphone,
    SmartphoneCharging, Compass, Radio, X, Type, ListTree, ToggleRight, MapPin,
    Palette, ShieldCheck, Gauge, MessageCircle, Globe, Box
} from 'lucide-react';
import './Layout.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navGroups = [
        {
            title: '1. 基础组件 (UI)',
            items: [
                { label: '富文本渲染', path: '/mini-program/ui-components/rich-text', icon: <Type size={18} /> },
                { label: '高级 3D 卡片按钮', path: '/mini-program/ui-components/premium-cards', icon: <Box size={18} /> },
                { label: '横向滑动选项卡', path: '/mini-program/ui-components/swipe-tabs', icon: <Layers size={18} /> },
                // Legacy links migrated here temporarily
                { label: '视图容器 (旧)', path: '/mini-program/components/view-containers', icon: <BoxSelect size={18} /> },
                { label: '基础内容 (旧)', path: '/mini-program/components/basic-content', icon: <AlignLeft size={18} /> },
            ]
        },
        {
            title: '2. 数据与反馈 (Data)',
            items: [
                { label: '垂直时间轴', path: '/mini-program/data-display/timeline', icon: <ListTree size={18} /> },
            ]
        },
        {
            title: '3. 导航与布局 (Navigation)',
            items: [
                { label: '自定义顶栏', path: '/mini-program/navigation/navbar', icon: <LayoutDashboard size={18} /> },
                { label: '国家目的地选择器', path: '/mini-program/navigation/country-picker', icon: <Globe size={18} /> },
            ]
        },
        {
            title: '4. 高阶表单 (Advanced Form)',
            items: [
                { label: '验证码输入', path: '/mini-program/advanced-form/captcha', icon: <ToggleRight size={18} /> },
                // Legacy
                { label: '表单控件 (旧)', path: '/mini-program/components/form-elements', icon: <CheckSquare size={18} /> },
            ]
        },
        {
            title: '5. 地图与位置 (LBS)',
            items: [
                { label: '交互式地标', path: '/mini-program/map-lbs/markers', icon: <MapPin size={18} /> },
            ]
        },
        {
            title: '6. 图形生成 (Canvas)',
            items: [
                { label: '海报生成器', path: '/mini-program/canvas/poster', icon: <Palette size={18} /> },
            ]
        },
        {
            title: '7. 生态与全系统 (Ecosystem)',
            items: [
                { label: '快捷登录弹窗', path: '/mini-program/ecosystem/login', icon: <ShieldCheck size={18} /> },
                { label: '悬浮客服按钮', path: '/mini-program/ecosystem/floating-cs', icon: <MessageCircle size={18} /> },
                // Legacy
                { label: '设备 API (旧)', path: '/mini-program/hardware/interactive-apis', icon: <SmartphoneCharging size={18} /> },
            ]
        },
        {
            title: '8. 体验模式 (UX Patterns)',
            items: [
                { label: '橡皮筋刷新', path: '/mini-program/performance/pull-refresh', icon: <Gauge size={18} /> },
                // Legacy
                { label: 'Skyline (旧)', path: '/mini-program/advanced/skyline-features', icon: <Layers size={18} /> },
                { label: '手势动画 (旧)', path: '/mini-program/advanced/gestures-animation', icon: <Zap size={18} /> },
            ]
        }
    ];

    return (
        <>
            {/* Mobile overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            />

            <aside className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <NavLink to="/" className="logo-container" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="logo-icon">MP</div>
                        <h1 className="logo-text">WeUI Dash</h1>
                    </NavLink>
                    <button className="mobile-close-btn" onClick={toggleSidebar}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {navGroups.map((group, index) => (
                        <div key={index} className="nav-group">
                            <h3 className="nav-group-title">{group.title}</h3>
                            <ul className="nav-list">
                                {group.items.map((item, idx) => (
                                    <li key={idx}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                            onClick={() => {
                                                if (window.innerWidth <= 768) {
                                                    toggleSidebar();
                                                }
                                            }}
                                        >
                                            <span className="nav-icon">{item.icon}</span>
                                            <span className="nav-label">{item.label}</span>
                                            {/* Active indicator styling in CSS */}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="avatar">JD</div>
                        <div className="user-info">
                            <div className="user-name">Jeremy Developer</div>
                            <div className="user-role">Super Admin</div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
