import React, { useState, useEffect } from 'react';
import { PlayCircle, CheckCircle, Info, AlertTriangle, XCircle, Type } from 'lucide-react';
import './BasicContent.css';

const BasicContent = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(p => {
                if (p >= 100) return 0;
                return p + 1;
            });
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="page-container animate-fade-in">
            <div className="glass-panel header-panel">
                <h3 className="section-title">基础内容与反馈 (Basic Content)</h3>
                <p className="section-desc">
                    展示小程序的基础排版元素、自定义状态图标、发光进度条和原生反馈机制的模拟。
                </p>
            </div>

            <div className="demo-grid">
                {/* Progress Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;progress&gt;</code></h4>
                        <span className="demo-badge">动态发光进度</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase full-width" style={{ gap: '24px' }}>
                            <div className="premium-progress-container">
                                <div className="progress-info">
                                    <span>文件上传中...</span>
                                    <span className="progress-value">{progress}%</span>
                                </div>
                                <div className="progress-track">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${progress}%` }}
                                    >
                                        <div className="progress-glow"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Circular Progress */}
                            <div className="circular-progress" style={{ '--progress': `${progress * 3.6}deg` }}>
                                <div className="inner-circle">
                                    <span>{progress}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">模拟小程序中带动画的线性与环形进度条。</p>
                </div>

                {/* Icon Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;icon&gt;</code></h4>
                        <span className="demo-badge">语义化矢量图标</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase" style={{ flexWrap: 'wrap', gap: '20px' }}>
                            <div className="icon-wrapper success">
                                <CheckCircle size={32} />
                            </div>
                            <div className="icon-wrapper info">
                                <Info size={32} />
                            </div>
                            <div className="icon-wrapper warning">
                                <AlertTriangle size={32} />
                            </div>
                            <div className="icon-wrapper danger">
                                <XCircle size={32} />
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">带状态发光的高清矢量图标，适用于多种业务场景。</p>
                </div>

                {/* Text/Feedback Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>Feedback APIs</code></h4>
                        <span className="demo-badge">交互式反馈</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase full-width" style={{ gap: '16px' }}>
                            <button className="premium-btn primary">
                                <PlayCircle size={18} /> showToast 模拟
                            </button>
                            <button className="premium-btn secondary">
                                <Type size={18} /> showModal 模拟
                            </button>
                        </div>
                    </div>
                    <p className="demo-hint">点击按钮查看模拟小程序的原生弹出式反馈（Toast/Modal）。</p>
                </div>
            </div>
        </div>
    );
};

export default BasicContent;
