import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { track } from '../../utils/track';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import './WebFX.css';

const WebFXLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const location = useLocation();
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        const page = location.pathname.split('/').pop() || 'index';
        track('pv_webfx', { page });
    }, [location.pathname]);

    return (
        <div className="webfx-layout">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="webfx-main">
                <div className="webfx-topbar">
                    <button className="mobile-menu-btn" onClick={toggleSidebar}>
                        <Menu size={24} />
                    </button>
                    <div className="webfx-topbar-right">
                        {/* Maybe search or theme toggle here */}
                    </div>
                </div>

                <div className="webfx-content" key={window.location.pathname}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default WebFXLayout;
