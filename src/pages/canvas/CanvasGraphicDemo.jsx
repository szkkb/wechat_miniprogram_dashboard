import React, { useState } from 'react';
import { Image as ImageIcon, Download, Share2, Loader2 } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './CanvasGraphic.css';

const CanvasGraphicDemo = () => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [posterReady, setPosterReady] = useState(false);
    const [logs, setLogs] = useState([]);

    const generatePoster = () => {
        setIsGenerating(true);
        setPosterReady(false);
        setLogs(prev => [...prev.slice(-4), `开始绘制 Canvas 离屏图层...`]);

        // Simulate async canvas drawing
        setTimeout(() => {
            setLogs(prev => [...prev.slice(-4), `载入网络图片资源素材...`]);
            setTimeout(() => {
                setLogs(prev => [...prev.slice(-4), `叠加文本节点与二维码矩阵...`]);
                setTimeout(() => {
                    setLogs(prev => [...prev.slice(-4), `CanvasToTempFilePath 导出成功 ✅`]);
                    setIsGenerating(false);
                    setPosterReady(true);
                }, 800);
            }, 800);
        }, 800);
    };

    return (
        <div className="page-container animate-fade-in">
            <PageIntroPanel title="图形与海报生成 (Canvas & Graphic)" description="覆盖基于 Canvas 实现的前端图片合成、裁剪截取等展示能力。" />

            <div className="demo-grid">
                <DemoCard
                    title="一键分享海报生成"
                    codeId="Pattern: GFX-Poster"
                    badge="离屏渲染"
                    description="将复杂的 DOM 脱离正常流，通过 2D Canvas 叠字、叠图处理成整张高清位图下发，并提供保存至相册的闭环联动体验。"
                    mockPhone={false}
                    controls={
                        <button
                            className={`premium-btn ${posterReady ? 'secondary' : 'primary'}`}
                            style={{ width: '100%', padding: '12px' }}
                            onClick={generatePoster}
                            disabled={isGenerating}
                        >
                            {isGenerating ? <Loader2 size={18} className="spin-icon" /> : <ImageIcon size={18} />}
                            {isGenerating ? ' 渲染合成中...' : (posterReady ? ' 重新生成' : ' 生成专属海报')}
                        </button>
                    }
                    logs={logs}
                >
                    <div className="poster-demo-container">

                        {!posterReady && !isGenerating && (
                            <div className="poster-placeholder">
                                <ImageIcon size={48} opacity={0.2} />
                                <p>点击下方按钮开始合成</p>
                            </div>
                        )}

                        {isGenerating && (
                            <div className="poster-loading">
                                <div className="scanning-box">
                                    <div className="scan-line"></div>
                                    <div className="data-bits">
                                        {[...Array(6)].map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.2}s` }}></span>)}
                                    </div>
                                </div>
                                <span>Processing Pixels...</span>
                            </div>
                        )}

                        {posterReady && (
                            <div className="generated-poster animate-fade-in">
                                {/* The "Poster" visual */}
                                <div className="poster-visual">
                                    <div className="poster-bg"></div>
                                    <div className="poster-content">
                                        <h3>Jeremy 的年度报告</h3>
                                        <div className="poster-data">
                                            <p>2026年累计提交代码 <strong>9,999</strong> 行</p>
                                            <p>击败了全球 <strong>99%</strong> 的开发者</p>
                                        </div>
                                    </div>
                                    <div className="poster-footer">
                                        <div className="qr-code-fake"></div>
                                        <span>长按扫码查看我的完整报告</span>
                                    </div>
                                </div>
                                {/* Actions over the poster */}
                                <div className="poster-actions fade-in-up" style={{ animationDelay: '0.4s' }}>
                                    <button onClick={() => setLogs(prev => [...prev.slice(-4), `保存图片 wx.saveImageToPhotosAlbum`])}>
                                        <Download size={14} /> 保存本地
                                    </button>
                                    <button onClick={() => setLogs(prev => [...prev.slice(-4), `唤起转发面板`])}>
                                        <Share2 size={14} /> 转发群聊
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>
                </DemoCard>
            </div>
        </div>
    );
};

export default CanvasGraphicDemo;
