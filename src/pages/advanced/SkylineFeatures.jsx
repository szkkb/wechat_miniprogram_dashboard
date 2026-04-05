import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpToLine, GripHorizontal, Columns } from 'lucide-react';
import './SkylineFeatures.css';
import PageIntroPanel from '../../components/Common/PageIntroPanel';

const SkylineFeatures = () => {
    const [sheetOpen, setSheetOpen] = useState(false);
    const containerRef = useRef(null);

    // Fake intersection observer or scroll spy for sticky headers
    const handleScroll = (e) => {
        // In a real implementation this would manage dynamic sticky states
    };

    return (
        <div className="page-container animate-fade-in" style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
            <div className="demo-grid">
                {/* Sticky Header Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;sticky-header&gt;</code></h4>
                        <span className="demo-badge">原生级吸顶</span>
                    </div>
                    <div className="demo-content" style={{ padding: 0 }}>
                        <div className="mock-phone" style={{ width: '220px', height: '360px' }}>
                            <div className="mock-screen">
                                <div className="skyline-scroll-area" onScroll={handleScroll}>
                                    <div className="sticky-section">
                                        <div className="sticky-header">分组 A</div>
                                        <div className="sticky-body">
                                            {[1, 2, 3].map(i => <div key={`a-${i}`} className="list-item">Item A-{i}</div>)}
                                        </div>
                                    </div>
                                    <div className="sticky-section">
                                        <div className="sticky-header">分组 B</div>
                                        <div className="sticky-body">
                                            {[1, 2, 3, 4].map(i => <div key={`b-${i}`} className="list-item">Item B-{i}</div>)}
                                        </div>
                                    </div>
                                    <div className="sticky-section">
                                        <div className="sticky-header">分组 C</div>
                                        <div className="sticky-body">
                                            {[1, 2, 3, 4, 5].map(i => <div key={`c-${i}`} className="list-item">Item C-{i}</div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">滚动列表时，组标题会如同原生一致平滑吸顶并推挤。</p>
                </div>

                {/* Draggable Sheet Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;draggable-sheet&gt;</code></h4>
                        <span className="demo-badge">丝滑手势拖拽</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase full-width">
                            <button className="premium-btn primary" onClick={() => setSheetOpen(true)}>
                                <ArrowUpToLine size={18} /> 唤起半屏面板
                            </button>
                        </div>
                    </div>
                    <p className="demo-hint">模拟可支持多档位阻尼停靠的底部半屏弹窗 (点击唤起体验)。</p>
                </div>

                {/* Grid View / List View */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;grid-view&gt;</code></h4>
                        <span className="demo-badge">高性能瀑布流</span>
                    </div>
                    <div className="demo-content">
                        <div className="mock-phone" style={{ width: '220px', height: '300px' }}>
                            <div className="mock-screen">
                                <div className="grid-view-container">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className="grid-item" style={{ height: `${80 + (i % 3) * 30}px`, background: `hsla(${(i * 30) % 360}, 70%, 50%, 0.8)` }}>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">无需计算高度，基于 Skyline 渲染管线的瀑布流网格视图模拟。</p>
                </div>
            </div>

            {/* Draggable Sheet Overlay */}
            <div className={`bottom-sheet-overlay ${sheetOpen ? 'active' : ''}`} onClick={() => setSheetOpen(false)}></div>
            <div className={`draggable-sheet ${sheetOpen ? 'open' : ''}`}>
                <div className="drag-handle-wrapper" onClick={() => setSheetOpen(false)}>
                    <div className="drag-handle"></div>
                </div>
                <div className="sheet-content">
                    <h3>Draggable Sheet 模拟</h3>
                    <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                        通过强大的手势系统，在移动设备上可以实现跟随手指的连续拖拽，并在不同断点（Snap points）停靠。
                    </p>
                    <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <div className="skeleton-box" style={{ width: '100%' }}></div>
                        <div className="skeleton-box" style={{ width: '45%' }}></div>
                        <div className="skeleton-box" style={{ width: '45%' }}></div>
                    </div>
                </div>
            </div>

            <PageIntroPanel title="Skyline 高阶渲染特性" description="模拟微信新一代 Skyline 渲染引擎的高级视图容器：无缝吸顶的 sticky-header、多阶拖拽的 draggable-sheet 以及高性能流式瀑布流。" />
        </div>
    );
};

export default SkylineFeatures;
