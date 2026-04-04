import React, { useState, useRef } from 'react';
import './ViewContainers.css';
import { Smartphone, GripHorizontal, ChevronRight, ChevronLeft } from 'lucide-react';

const ViewContainers = () => {
    const [activeTab, setActiveTab] = useState('scroll-view');

    return (
        <div className="page-container animate-fade-in">
            <div className="glass-panel header-panel" tabIndex="0">
                <h3 className="section-title">视图容器 (View Containers)</h3>
                <p className="section-desc">
                    模拟微信小程序核心容器组件在 Web 端的高级质感实现。包含弹性滚动、轮播、触控拖拽与页面级容器模拟。
                </p>
            </div>

            <div className="demo-grid">
                {/* Scroll View Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;scroll-view&gt;</code></h4>
                        <span className="demo-badge">高平滑阻尼滚动</span>
                    </div>
                    <div className="demo-content">
                        <div className="mock-phone">
                            <div className="mock-screen">
                                <div className="scroll-view-y">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className={`scroll-item color-${i}`}>
                                            Item {i}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">模拟带有物理回弹效果的纵向滚动视图体验。</p>
                </div>

                {/* Swiper Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;swiper&gt;</code></h4>
                        <span className="demo-badge">原生级轮播阻尼</span>
                    </div>
                    <div className="demo-content">
                        <div className="mock-phone">
                            <div className="mock-screen">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide c-blue">Slide 1</div>
                                        <div className="swiper-slide c-green">Slide 2</div>
                                        <div className="swiper-slide c-purple">Slide 3</div>
                                    </div>
                                    <div className="swiper-pagination">
                                        <span className="dot active"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">支持弹性滑动、自动吸附和分页指示器的画廊视图。</p>
                </div>

                {/* Movable View Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;movable-view&gt;</code></h4>
                        <span className="demo-badge">自由任意拖拽</span>
                    </div>
                    <div className="demo-content">
                        <div className="movable-area">
                            <div className="movable-view">
                                <GripHorizontal size={24} />
                            </div>
                            <span className="area-text">movable-area</span>
                        </div>
                    </div>
                    <p className="demo-hint">可以在指定区域内自由拖动，释放后带有惯性阻泥动画。</p>
                </div>
            </div>
        </div>
    );
};

export default ViewContainers;
