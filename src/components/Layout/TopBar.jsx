import React from 'react';
import { Menu, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TopBar = ({ toggleSidebar }) => {
    const location = useLocation();

    // Create page title depending on route
    const getPageTitle = (path) => {
        switch (path) {
            case '/components/view-containers': return { title: '视图容器', subtitle: 'View Containers' };
            case '/components/form-elements': return { title: '表单组件', subtitle: 'Form Components' };
            case '/components/basic-content': return { title: '内容展示', subtitle: 'Basic Content' };
            case '/advanced/skyline-features': return { title: 'Skyline 特性', subtitle: 'Next-gen Rendering' };
            case '/advanced/gestures-animation': return { title: '交互与动画', subtitle: 'Gestures & Animations' };
            case '/hardware/interactive-apis': return { title: '底层开放能力', subtitle: 'Device & Ecosystem APIs' };
            default: return { title: 'WeChat MiniProgram', subtitle: 'Capabilities Dashboard' };
        }
    };

    const { title, subtitle } = getPageTitle(location.pathname);

    return (
        <header className="topbar">
            <div className="topbar-left">
                <button className="mobile-menu-btn" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 className="page-title">{title}</h2>
                    <span className="page-subtitle">{subtitle}</span>
                </div>
            </div>

            <div className="topbar-right">
                <div className="status-badge" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(7, 193, 96, 0.1)', border: '1px solid rgba(7, 193, 96, 0.2)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', color: '#07c160' }}>
                    <Activity size={14} />
                    <span>System Online</span>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
