import React, { useState } from 'react';
import { ArrowRightLeft, MousePointer2 } from 'lucide-react';
import './GesturesAndAnimation.css';
import PageIntroPanel from '../../components/Common/PageIntroPanel';

const GesturesAndAnimation = () => {
    const [swiped, setSwiped] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="page-container animate-fade-in">
            <div className="demo-grid">
                {/* Share Element Demo */}
                <div className="glass-panel demo-card" style={{ gridColumn: '1 / -1' }}>
                    <div className="demo-header">
                        <h4><code>&lt;share-element&gt;</code></h4>
                        <span className="demo-badge">全屏共享元素动画</span>
                    </div>
                    <div className="demo-content">
                        <div className="share-element-container">
                            {!selectedImage ? (
                                <div className="image-grid">
                                    {[1, 2, 3].map(i => (
                                        <div
                                            key={i}
                                            className={`mini-image img-${i}`}
                                            onClick={() => setSelectedImage(i)}
                                        >
                                            <span className="img-label">IMAGE {i}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="expanded-image-view" onClick={() => setSelectedImage(null)}>
                                    <div className={`large-image img-${selectedImage}`}>
                                        <span className="img-label large">IMAGE {selectedImage}</span>
                                    </div>
                                    <div className="expanded-text fade-in-up">
                                        <h3>高分辨率预览</h3>
                                        <p>这种过渡动画打破了页面壁垒，让元素像是在同一个空间中通过缩放和平移展开（类似 iOS 的全屏动画），大幅提升了视觉连续性。</p>
                                        <button className="premium-btn secondary" style={{ marginTop: '24px' }}>
                                            点击任意处关闭
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="demo-hint">点击任意方块，体验类似打开图片的流畅无缝放大转场效果。</p>
                </div>

                {/* Gesture Worklet Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>手势系统 (Worklet)</code></h4>
                        <span className="demo-badge">流畅物理手势</span>
                    </div>
                    <div className="demo-content">
                        <div className="mock-phone" style={{ height: '200px' }}>
                            <div className="mock-screen" style={{ padding: '20px' }}>
                                <div
                                    className={`swipeable-cell ${swiped ? 'swiped' : ''}`}
                                    onClick={() => setSwiped(!swiped)}
                                >
                                    <div className="cell-content">
                                        <MousePointer2 size={16} style={{ marginRight: '8px' }} />
                                        点击模拟左滑手势
                                        <div className="drag-indicator"><ArrowRightLeft size={16} /></div>
                                    </div>
                                    <div className="cell-actions">
                                        <button className="action-btn delete">删除</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">模拟带有橡皮筋弹性和基于物理速度计算的手势交互（常用于滑动删除）。</p>
                </div>
            </div>

            <PageIntroPanel title="交互与动效引擎 (Gestures & Animations)" description="基于 Web 技术还原微信小程序的高阶动画体系：包含极度平滑的共享元素转场（Share Element）以及丝滑的滑动删除手势模拟。" />
        </div>
    );
};

export default GesturesAndAnimation;
