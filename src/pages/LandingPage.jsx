import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, MonitorPlay } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <div className="landing-content animate-fade-in">
                <div className="landing-header">
                    <h1 className="landing-title">Component & FX Dashboard</h1>
                    <p className="landing-subtitle">Choose a workspace to explore</p>
                </div>

                <div className="workspace-cards">
                    <Link to="/mini-program" className="workspace-card mp-card">
                        <div className="card-icon-wrapper">
                            <Smartphone size={40} className="card-icon" />
                        </div>
                        <h2 className="card-title">Mini Program Lab</h2>
                        <p className="card-desc">UI components, forms, LBS maps, and navigation specific to WeChat Mini Programs standard.</p>
                        <div className="card-action">Enter Lab →</div>
                    </Link>

                    <Link to="/web-fx/explore" className="workspace-card fx-card">
                        <div className="card-icon-wrapper">
                            <MonitorPlay size={40} className="card-icon" />
                        </div>
                        <h2 className="card-title">Web FX Gallery</h2>
                        <p className="card-desc">Framer Motion spring physics, pretext typography engine, glassmorphism and modern web UX.</p>
                        <div className="card-action">Enter Gallery →</div>
                    </Link>
                </div>
            </div>
            
            {/* Ambient Background Elements */}
            <div className="ambient-blob blob-1"></div>
            <div className="ambient-blob blob-2"></div>
        </div>
    );
};

export default LandingPage;
