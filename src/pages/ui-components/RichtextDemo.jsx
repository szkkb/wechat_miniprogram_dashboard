import React, { useState } from 'react';
import { Type, Edit3, Image as ImageIcon } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import './RichText.css';

const RichtextDemo = () => {
    const [logs, setLogs] = useState([]);
    const [isLargeText, setIsLargeText] = useState(false);

    const handleNodeClick = (nodeName) => {
        setLogs(prev => [...prev.slice(-4), `触发 rich-text 点击事件: 节点 <${nodeName}>`]);
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="glass-panel header-panel">
                <h3 className="section-title">基础组件 (UI Components)</h3>
                <p className="section-desc">
                    展示承载内容与信息的基石型组件系统，例如富文本、媒体呈现等。
                </p>
            </div>

            <div className="demo-grid">
                <DemoCard
                    title="富文本渲染呈现"
                    codeId="<rich-text>"
                    badge="原生级排版"
                    description="解析渲染提供的高保真 HTML 字符串，支持局部点击拦截和图片自适应长图显示规则，常用于商品详情和图文连载阅读。"
                    mockPhone={false}
                    controls={
                        <>
                            <button className="premium-btn secondary" onClick={() => setIsLargeText(!isLargeText)} style={{ width: 'auto', padding: '8px 16px' }}>
                                <Type size={16} /> 切换字号 ({isLargeText ? '大号' : '标准'})
                            </button>
                            <button className="premium-btn secondary" onClick={() => handleNodeClick('img')} style={{ width: 'auto', padding: '8px 16px' }}>
                                模拟图片点击拦截
                            </button>
                        </>
                    }
                    logs={logs}
                >
                    <div className="component-showcase full-width">
                        <div className={`rt-container ${isLargeText ? 'large-text' : ''}`}>
                            <h1 onClick={() => handleNodeClick('h1')}>小程序2026年全景组件库更新指南</h1>
                            <div className="rt-meta">
                                <span>官方发布</span> | <span>10w+ 阅读</span>
                            </div>
                            <p onClick={() => handleNodeClick('p')}>
                                这是一段模拟富文本返回的段落。我们在设计上要求极高对比度和<b>良好的暗色模式适配性</b>。它不仅仅是文字的堆砌，而是带有<i>原生级别选中长按</i>特性的混合图文模块。
                            </p>

                            <div className="rt-fake-img" onClick={() => handleNodeClick('img')}>
                                <ImageIcon size={32} opacity={0.5} />
                                <span>商品结构爆炸图.webp (点击模拟大图预览)</span>
                            </div>

                            <ul onClick={() => handleNodeClick('ul')}>
                                <li>支持定义任意 Node 节点的样式隔离</li>
                                <li>支持 `space` 属性呈现连续空格</li>
                                <li>内联元素不再受外部全局样式穿透影响</li>
                            </ul>
                        </div>
                    </div>
                </DemoCard>
            </div>
        </div>
    );
};

export default RichtextDemo;
