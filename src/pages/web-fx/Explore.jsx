import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FrostedKPICard from '../../components/WebFXLayout/BentoWidgets/FrostedKPICard';
import MagneticButton from '../../components/WebFXLayout/BentoWidgets/MagneticButton';
import './Explore.css';

const Explore = () => {
    // Stagger animation for the bento grid
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <div className="webfx-explore-page">
            <div className="ambient-background">
                <div className="blob blob-purple"></div>
                <div className="blob blob-blue"></div>
                <div className="blob blob-pink"></div>
                <div className="noise-overlay"></div>
            </div>

            <div className="explore-header">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="explore-title"
                >
                    State of the Art UI
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="explore-subtitle"
                >
                    Pushing the boundaries of what's possible in the browser with Spring Physics and Glassmorphism.
                </motion.p>
            </div>

            <motion.div 
                className="bento-grid"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 1. Frosted KPI Card */}
                <motion.div className="bento-item col-span-2" variants={itemVariants}>
                    <div className="bento-inner-content glass-panel-deep">
                        <div className="widget-header">
                            <span className="fx-label">visual:glassmorphism</span>
                            <span className="fx-label">motion:spring-damping</span>
                        </div>
                        <div className="widget-body center-flex">
                            <FrostedKPICard />
                        </div>
                    </div>
                </motion.div>

                {/* 2. Magnetic Button Area */}
                <motion.div className="bento-item col-span-1" variants={itemVariants}>
                    <div className="bento-inner-content glass-panel-deep flex-column-center">
                        <div className="widget-header">
                            <span className="fx-label">pattern:cursor-follow</span>
                        </div>
                        <h3 className="widget-title">Magnetic Attraction</h3>
                        <p className="widget-hint">Hover the button to see physics in action.</p>
                        <div className="widget-body center-flex">
                            <MagneticButton />
                        </div>
                    </div>
                </motion.div>

                {/* 3. Empty State or Typography Link */}
                <motion.div className="bento-item col-span-1" variants={itemVariants}>
                    <div className="bento-inner-content glass-panel-deep glow-border">
                        <div className="widget-header">
                            <span className="fx-label">engine:pretext</span>
                        </div>
                        <div className="widget-body typography-promo">
                            <h2>0-DOM Reflow</h2>
                            <p>Browse live typography demos, font pairings and CJK layout notes.</p>
                            <Link to="/web-fx/gallery?category=typography" className="promo-link">Open Typography Resources →</Link>
                        </div>
                    </div>
                </motion.div>

                {/* 4. Fluid Loading Widget (Placeholder for more coolness) */}
                <motion.div className="bento-item col-span-2" variants={itemVariants}>
                    <div className="bento-inner-content glass-panel-deep">
                        <div className="widget-header">
                            <span className="fx-label">coming-soon</span>
                        </div>
                        <div className="widget-body coming-soon-flex">
                            <div className="holographic-loader"></div>
                            <p>More fluid interactions loading...</p>
                        </div>
                    </div>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Explore;
