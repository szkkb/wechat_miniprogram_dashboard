import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

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
