import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { track } from '../../utils/track';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import './GrowthLoopLayout.css';

const GrowthLoopLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        const page = location.pathname.split('/').pop() || 'index';
        track('pv_growthloop', { page });
    }, [location.pathname]);

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
