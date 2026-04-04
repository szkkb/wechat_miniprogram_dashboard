import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { track } from '../../utils/track';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const location = useLocation();
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    useEffect(() => {
        const page = location.pathname.split('/').pop() || 'index';
        track('pv_miniprogram', { page });
    }, [location.pathname]);

    return (
        <div className="layout-wrapper">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                <TopBar toggleSidebar={toggleSidebar} />

                <div className="content-wrapper animate-fade-in" key={window.location.pathname}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
