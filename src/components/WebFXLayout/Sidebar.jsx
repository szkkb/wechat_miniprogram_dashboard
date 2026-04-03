import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Layers, Type, X, LayoutGrid } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const navItems = [
        { label: 'Explore (探索)', path: '/web-fx/explore', icon: <Compass size={18} /> },
        { label: 'Gallery (画廊)', path: '/web-fx/gallery', icon: <LayoutGrid size={18} /> },
        { label: 'Collections (合集)', path: '/web-fx/collections', icon: <Layers size={18} /> },
        { label: 'Typography (排版)', path: '/web-fx/typography', icon: <Type size={18} /> },
    ];

    return (
        <>
            <div
                className={`webfx-sidebar-overlay ${isOpen ? 'active' : ''}`}
                onClick={toggleSidebar}
            />

            <aside className={`webfx-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="webfx-sidebar-header">
                    <NavLink to="/" className="webfx-logo-link">
                        <Home size={20} />
                        <span>FX Hub</span>
                    </NavLink>
                    <button className="mobile-close-btn" onClick={toggleSidebar}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="webfx-sidebar-nav">
                    <div className="nav-group">
                        <ul className="nav-list">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                                        onClick={() => window.innerWidth <= 768 && toggleSidebar()}
                                    >
                                        <span className="nav-icon">{item.icon}</span>
                                        <span className="nav-label">{item.label}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
