import React, { useState, useRef } from 'react';
import { MessageCircle, Phone, X, Move } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './FloatingCS.css';

// ─── 方案一: Fixed Floating Button + Breathing Animation ──────────────────────
const FixedCSDemo = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [logs, setLogs] = useState([]);

    const handleContactClick = () => {
        setLogs(prev => [
            ...prev.slice(-4),
            `open-type="contact" 触发 → 唤起微信官方客服会话 ✅`
        ]);
    };

    return (
        <DemoCard
            title="固定悬浮客服球"
            codeId="open-type: contact"
            badge="呼吸光晕"
            description={`<button open-type="contact"> 是微信官方原生客服通道，点击直接进入客服会话。搭配 CSS 脉冲光晕动画提升可感知度，吸引用户注意。不需要任何额外授权。`}
            mockPhone={true}
            logs={logs}
        >
            <div className="cs-demo-screen">
                {/* 模拟首页内容 */}
                <div className="cs-fake-content">
                    <div className="cs-skeleton-bar" style={{ width: '70%', height: '20px' }}></div>
                    <div className="cs-skeleton-bar" style={{ width: '90%' }}></div>
                    <div className="cs-skeleton-bar" style={{ width: '60%' }}></div>
                    <div className="cs-fake-card">
                        <div className="cs-skeleton-bar" style={{ width: '100%', height: '80px' }}></div>
                    </div>
                    <div className="cs-skeleton-bar" style={{ width: '80%' }}></div>
                    <div className="cs-skeleton-bar" style={{ width: '50%' }}></div>
                </div>

                {/* 方案一: 固定悬浮按钮 */}
                <div className="cs-float-wrapper">
                    {/* 呼吸光晕 - 背后的 pulse 圆圈 */}
                    <div className="cs-pulse-ring ring-1"></div>
                    <div className="cs-pulse-ring ring-2"></div>

                    {/* 主按钮 */}
                    <button
                        className="cs-float-btn"
                        onClick={handleContactClick}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <MessageCircle size={20} />
                    </button>

                    {/* Tooltip */}
                    {showTooltip && (
                        <div className="cs-tooltip">在线客服</div>
                    )}
                </div>
            </div>
        </DemoCard>
    );
};

// ─── 方案二: Draggable FloatingButton (movable-view pattern) ───────────────────
const DraggableCSDemo = () => {
    const [pos, setPos] = useState({ x: 150, y: 260 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ mx: 0, my: 0, bx: 0, by: 0 });
    const [logs, setLogs] = useState([]);
    const containerRef = useRef(null);

    const onMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragStart({ mx: e.clientX, my: e.clientY, bx: pos.x, by: pos.y });
    };

    const onMouseMove = (e) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const dx = e.clientX - dragStart.mx;
        const dy = e.clientY - dragStart.my;

        // Clamp within container
        const BUTTON_SIZE = 52;
        const newX = Math.max(0, Math.min(rect.width - BUTTON_SIZE, dragStart.bx + dx));
        const newY = Math.max(0, Math.min(rect.height - BUTTON_SIZE, dragStart.by + dy));

        setPos({ x: newX, y: newY });
    };

    const onMouseUp = (e) => {
        if (!isDragging) return;
        setIsDragging(false);

        // Edge snapping: snap to nearest horizontal edge
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            const BUTTON_SIZE = 52;
            const midX = rect.width / 2;
            const snapX = pos.x < midX ? 8 : rect.width - BUTTON_SIZE - 8;
            setPos(p => ({ ...p, x: snapX }));
            setLogs(prev => [
                ...prev.slice(-4),
                `bindchange: {x: ${Math.round(snapX)}, y: ${Math.round(pos.y)}, source: "touch"} → 自动吸边`
            ]);
        }
    };

    const handleContactClick = () => {
        if (!isDragging) {
            setLogs(prev => [...prev.slice(-4), `open-type="contact" → 唤起客服会话 ✅`]);
        }
    };

    return (
        <DemoCard
            title="可拖动悬浮客服球"
            codeId="movable-view: direction=all"
            badge="吸边回弹"
            description={`movable-area 覆盖全屏，pointer-events: none 解决穿透；movable-view 上 pointer-events: auto 接收拖拽。松手后自动"吸边"到最近的左右侧边缘。`}
            mockPhone={true}
            logs={logs}
        >
            <div
                className="cs-demo-screen"
                ref={containerRef}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                style={{ cursor: isDragging ? 'grabbing' : 'default', userSelect: 'none' }}
            >
                {/* 模拟首页内容 */}
                <div className="cs-fake-content">
                    <div className="cs-skeleton-bar" style={{ width: '70%', height: '20px' }}></div>
                    <div className="cs-skeleton-bar" style={{ width: '90%' }}></div>
                    <div className="cs-skeleton-bar" style={{ width: '60%' }}></div>
                    <div className="cs-fake-card">
                        <div className="cs-skeleton-bar" style={{ width: '100%', height: '80px' }}></div>
                    </div>
                    <div className="cs-skeleton-bar" style={{ width: '80%' }}></div>
                    <div className="cs-skeleton-bar" style={{ width: '50%' }}></div>
                </div>

                {/* Draggable Button – positioned absolutely via state */}
                <button
                    className={`cs-float-btn draggable ${isDragging ? 'dragging' : ''}`}
                    style={{
                        position: 'absolute',
                        left: `${pos.x}px`,
                        top: `${pos.y}px`,
                        transition: isDragging ? 'none' : 'left 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s'
                    }}
                    onMouseDown={onMouseDown}
                    onClick={handleContactClick}
                >
                    <MessageCircle size={20} />
                    <div className="drag-hint"><Move size={10} /></div>
                </button>
            </div>
        </DemoCard>
    );
};

// ─── Page Wrapper ─────────────────────────────────────────────────────────────
const FloatingCSDemo = () => {
    return (
        <div className="page-container animate-fade-in">
            <PageIntroPanel title="生态与全系统 (Ecosystem)" description="展示微信原生客服能力的两种悬浮唤起方案：固定呼吸球与可全屏拖动吸边球。" />

            <div className="demo-grid two-col">
                <FixedCSDemo />
                <DraggableCSDemo />
            </div>
        </div>
    );
};

export default FloatingCSDemo;
