import React from 'react';
import './DemoCard.css';

/**
 * DemoCard 统一组件演示卡片骨架
 *
 * @param {string} title 标题 (中文)
 * @param {string} codeId 底层技术标识 (如 `<swiper>`)
 * @param {string} description 卡片下方的描述性短语
 * @param {string} badge Tag 标签内容 (如 "Native 感")
 * @param {boolean} mockPhone 是否需要将 stage 包含在 mock-phone 容器内 (默认 false)
 * @param {ReactNode} children 主要演示区域 (Stage)
 * @param {ReactNode} controls 操作区域组件 (Controls, 可选)
 * @param {Array<string>} logs 日志输出数组 (Console, 可选)
 */
const DemoCard = ({
    title,
    codeId,
    description,
    badge,
    mockPhone = false,
    controls = null,
    logs = [],
    children
}) => {
    return (
        <div className="glass-panel demo-card-v2">
            {/* Header Area */}
            <div className="dc-header">
                <div className="dc-title-group">
                    {codeId && <h4><code>{codeId}</code></h4>}
                    <h5 className="dc-title">{title}</h5>
                </div>
                {badge && <span className="dc-badge">{badge}</span>}
            </div>

            {/* Main Stage Area */}
            <div className={`dc-stage ${mockPhone ? 'has-mock-phone' : ''}`}>
                {mockPhone ? (
                    <div className="mock-phone dc-mock-phone">
                        <div className="mock-screen dc-mock-screen">
                            {children}
                        </div>
                    </div>
                ) : (
                    children
                )}
            </div>

            {/* Controls Area (Optional) */}
            {controls && (
                <div className="dc-controls">
                    {controls}
                </div>
            )}

            {/* Description Area */}
            {description && (
                <div className="dc-description">
                    <p>{description}</p>
                </div>
            )}

            {/* Logs Console Area (Optional, Max 2 lines naturally via CSS) */}
            {logs && logs.length > 0 && (
                <div className="dc-console">
                    {logs.map((log, idx) => (
                        <div key={idx} className="dc-log-line">
                            <span className="log-time">{new Date().toLocaleTimeString('en-US', { hour12: false, hour: "numeric", minute: "numeric", second: "numeric" })}</span>
                            <span className="log-msg">{log}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DemoCard;
