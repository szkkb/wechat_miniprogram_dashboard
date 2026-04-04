import React, { useState, useRef } from 'react';
import { RefreshCw, ArrowDownToLine, Check, Package } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import './PerformanceUX.css';

const PerformanceUXDemo = () => {
    const [refreshing, setRefreshing] = useState(false);
    const [pullDistance, setPullDistance] = useState(0);
    const [logs, setLogs] = useState([]);

    // Fake records state
    const [records, setRecords] = useState([
        { id: 1, title: '已扫描入库', time: '10:00' },
        { id: 2, title: '离开分拨中心', time: '08:30' },
    ]);

    const PULL_THRESHOLD = 60; // Distance to trigger refresh

    const simulateTouchMove = (e) => {
        if (refreshing) return;

        // Simulating the y-delta from a slider/drag
        const yDist = Number(e.target.value);

        // Rubber-band calculation (simplified): X = dx / (1 + dx/100)
        let visualDist = yDist;
        if (yDist > PULL_THRESHOLD) {
            visualDist = PULL_THRESHOLD + (yDist - PULL_THRESHOLD) * 0.3;
        }

        setPullDistance(visualDist);
    };

    const simulateTouchEnd = () => {
        if (refreshing) return;

        if (pullDistance >= PULL_THRESHOLD) {
            triggerRefresh();
        } else {
            // Spring back
            setPullDistance(0);
            setLogs(prev => [...prev.slice(-4), `列表回弹 (未达阈值)`]);
        }
    };

    const triggerRefresh = () => {
        setRefreshing(true);
        setPullDistance(PULL_THRESHOLD); // Keep it open for the spinner
        setLogs(prev => [...prev.slice(-4), `触发 onPullDownRefresh...`]);

        // Mock async network delay
        setTimeout(() => {
            setRecords(prev => [
                { id: Date.now(), title: '新的动态 (已送达)', time: new Date().toLocaleTimeString().slice(0, 5) },
                ...prev
            ]);
            setRefreshing(false);
            setPullDistance(0);
            setLogs(prev => [...prev.slice(-4), `刷新成功，收起下拉头 ✅`]);
        }, 1500);
    };

    // Calculate dynamic styles based on pull state
    const isAtThreshold = pullDistance >= PULL_THRESHOLD;

    return (
        <div className="page-container animate-fade-in">
            <div className="glass-panel header-panel" tabIndex="0">
                <h3 className="section-title">性能与体验模式 (Performance & UX)</h3>
                <p className="section-desc">
                    体验丝滑橡皮筋刷新、无限加载，以及大规模渲染下的抗抖动。
                </p>
            </div>

            <div className="demo-grid">
                <DemoCard
                    title="阻尼拉拽与下拉刷新"
                    codeId="Pattern: UX-PullRefresh"
                    badge="物理级跟手"
                    description="非粗暴截断，通过贝塞尔与摩擦力公式对用户超越顶底列表边界产生弹性阻挡。松手达到阈值时化为 Loading 环。"
                    mockPhone={true}
                    controls={
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <label style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                                滑动控制条模拟向下拖拽手势：
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="150"
                                value={refreshing ? PULL_THRESHOLD : (pullDistance > PULL_THRESHOLD ? pullDistance / 0.3 : pullDistance)} // reverse math roughly for controlled state
                                onChange={simulateTouchMove}
                                onMouseUp={simulateTouchEnd}
                                onTouchEnd={simulateTouchEnd}
                                className="premium-slider"
                                disabled={refreshing}
                            />
                        </div>
                    }
                    logs={logs}
                >
                    <div className="pull-demo-container">

                        {/* The list wrapper that moves down */}
                        <div
                            className="pull-list-wrapper"
                            style={{
                                transform: `translateY(${pullDistance}px)`,
                                transition: pullDistance === 0 || refreshing ? 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'none'
                            }}
                        >
                            {/* The hidden pull-header (Refresh indicator) */}
                            <div className="pull-header" style={{ top: `-${PULL_THRESHOLD}px`, height: `${PULL_THRESHOLD}px` }}>
                                <div className="pull-content">
                                    {refreshing ? (
                                        <RefreshCw size={18} className="pull-spinner" />
                                    ) : (
                                        <div className={`pull-arrow ${isAtThreshold ? 'flip' : ''}`} style={{ opacity: pullDistance / PULL_THRESHOLD }}>
                                            <ArrowDownToLine size={18} />
                                        </div>
                                    )}
                                    <span style={{ fontSize: '12px', marginTop: '4px', opacity: Math.max(0.5, pullDistance / PULL_THRESHOLD) }}>
                                        {refreshing ? '正在拉取...' : (isAtThreshold ? '释放立即刷新' : '下拉获取最新状态')}
                                    </span>
                                </div>
                            </div>

                            {/* Actual Content List */}
                            <div className="pull-list">
                                {records.map(r => (
                                    <div key={r.id} className="pull-item animate-fade-in">
                                        <div className="pull-item-icon"><Package size={16} /></div>
                                        <div className="pull-item-text">
                                            <h4>{r.title}</h4>
                                            <p>{r.time}</p>
                                        </div>
                                        <div className="pull-item-check"><Check size={14} /></div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </DemoCard>
            </div>
        </div>
    );
};

export default PerformanceUXDemo;
