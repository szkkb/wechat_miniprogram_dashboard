import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Activity, TrendingUp, Users } from 'lucide-react';
import './FrostedKPICard.css';

const FrostedKPICard = () => {
    const cardRef = useRef(null);

    // Mouse position trackers
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics configuration for the 3D tilt
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Convert mouse position to rotation degrees
    const rotateX = useTransform(springY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-15deg", "15deg"]);
    
    // Convert mouse to glare/sheen position
    const glareX = useTransform(springX, [-0.5, 0.5], ["100%", "0%"]);
    const glareY = useTransform(springY, [-0.5, 0.5], ["100%", "0%"]);

    const handleMouseMove = (event) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        // Calculate relative mouse position (-0.5 to 0.5)
        const relX = (event.clientX - rect.left) / rect.width - 0.5;
        const relY = (event.clientY - rect.top) / rect.height - 0.5;
        
        x.set(relX);
        y.set(relY);
    };

    const handleMouseLeave = () => {
        // Reset position with spring
        x.set(0);
        y.set(0);
    };

    const background = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 60%)`;

    // Number animation placeholder (ideally use framer-motion useSpring for animated numbers too)
    
    return (
        <div className="kpi-card-perspective">
            <motion.div
                ref={cardRef}
                className="frosted-kpi-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    // transformStyle: "preserve-3d", // For intense 3d popouts
                }}
            >
                {/* Dynamic Mouse Glare */}
                <motion.div 
                    className="card-glare"
                    style={{ background }}
                />

                <div className="kpi-content">
                    <div className="kpi-header">
                        <div className="kpi-icon-box">
                            <Activity size={20} className="kpi-icon" />
                        </div>
                        <span className="kpi-badge positive">+24.5%</span>
                    </div>

                    <div className="kpi-body">
                        <h4 className="kpi-label">Active Users (Real-time)</h4>
                        <div className="kpi-value-row">
                            <span className="kpi-value">124,892</span>
                        </div>
                    </div>

                    <div className="kpi-footer">
                        <div className="kpi-stat">
                            <Users size={14} /> 12k new
                        </div>
                        <div className="kpi-graph-mock">
                            <TrendingUp size={24} className="graph-line" />
                        </div>
                    </div>
                </div>
                
                {/* Decorative glowing sphere inside the glass */}
                <div className="glass-orb orb-1"></div>
                <div className="glass-orb orb-2"></div>
            </motion.div>
        </div>
    );
};

export default FrostedKPICard;
