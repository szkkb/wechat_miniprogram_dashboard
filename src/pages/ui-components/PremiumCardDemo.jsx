import React from 'react';
import { Sparkles, Layers, Box, ChevronRight, Zap, Target } from 'lucide-react';
import './PremiumCardDemo.css';

const PremiumCardDemo = () => {
    return (
        <div className="premium-demo-container">
            {/* Style 1: Crystal Glass Section */}
            <section className="demo-section">
                <h2 className="section-title">
                    <Sparkles size={20} className="text-indigo-400" />
                    玻璃拟态 (Crystal Glassmorphism)
                </h2>
                <p className="text-gray-400 mb-4">
                    利用高斯模糊、微边框包裹和多层弥散投影，营造成通透的晶体感。
                </p>
                <div className="card-grid">
                    <div className="glass-card-button">
                        <div className="glass-icon-wrapper">
                            <Layers color="white" size={28} />
                        </div>
                        <h3 className="glass-card-title">多维空间</h3>
                        <p className="glass-card-desc">探索深层级交互结构</p>
                    </div>

                    <div className="glass-card-button">
                        <div className="glass-icon-wrapper" style={{ background: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)' }}>
                            <Zap color="white" size={28} />
                        </div>
                        <h3 className="glass-card-title">急速引擎</h3>
                        <p className="glass-card-desc">毫秒级反馈响应体验</p>
                    </div>
                </div>
            </section>

            {/* Style 2: Floating 3D Neumorphic Section */}
            <section className="demo-section">
                <h2 className="section-title">
                    <Box size={20} className="text-sky-400" />
                    浮动新拟态 (Elevated 3D Neumorphism)
                </h2>
                <p className="text-gray-400 mb-4">
                    通过光源模拟（双向阴影）让元素产生“破屏而出”的物理浮动感。
                </p>

                <div className="demo-column flex flex-col gap-6">
                    <div className="neo-card-button">
                        <div className="neo-icon-box">
                            <Target size={36} />
                        </div>
                        <div className="neo-content">
                            <h3 className="neo-title">核心战略指挥</h3>
                            <div className="neo-badge">Active Strategic</div>
                        </div>
                        <div className="neo-arrow">
                            <ChevronRight size={20} />
                        </div>
                    </div>

                    <div className="neo-card-button">
                        <div className="neo-icon-box" style={{ color: '#fbbf24' }}>
                            <Sparkles size={36} />
                        </div>
                        <div className="neo-content">
                            <h3 className="neo-title">高级实验室</h3>
                            <div className="neo-badge" style={{ background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>Premium Lab</div>
                        </div>
                        <div className="neo-arrow">
                            <ChevronRight size={20} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PremiumCardDemo;
