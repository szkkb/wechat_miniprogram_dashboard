import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import './GrowthLoopLayout.css';

const GrowthLoopLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="gl-layout">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <main className="gl-main">
                <div className="gl-topbar">
                    <button className="mobile-menu-btn" onClick={toggleSidebar}>
                        <Menu size={24} />
                    </button>
                </div>
                <div className="gl-content" key={window.location.pathname}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default GrowthLoopLayout;
