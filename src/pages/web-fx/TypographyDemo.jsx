import React, { useState, useEffect, useRef, useMemo } from 'react';
import ShowcaseCard from '../../components/WebFXLayout/ShowcaseCard';
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';
import './TypographyDemo.css';

const PRETEXT_EXAMPLE_TEXT = `Pretext 是一个零 DOM 依赖的高性能文字排版引擎。它的核心思想是：把文字测量和行排布完全从浏览器的回流（Reflow）管线中剥离出来，转交给纯 JavaScript 逐行计算，再由 Canvas 2D 一次性绘制。

传统方案的瓶颈在于：当页面中存在浮动元素时，浏览器必须反复触发 Layout → Paint → Composite 管线来决定每一行文字该在哪里断开。如果浮动元素还在不断运动（比如拖拽、动画），那每一帧都会触发完整的 DOM 回流，CPU 占用率飙升，帧率骤降。

Pretext 的解决方式是彻底绕过 DOM。它通过 prepareWithSegments() 一次性预处理文本的分词与测量数据，然后在每一帧的 requestAnimationFrame 中，用 layoutNextLine() 逐行计算文字应当排布在什么位置。如果某一行与障碍物（如右侧的浮动 SVG）有重叠，它就动态收窄该行的可用宽度——整个过程耗时通常不超过 0.1 毫秒。

对于中文排版场景，这个引擎的优势尤为明显：中文是等宽方块字，没有天然的单词断点，传统 CSS word-break 经常导致排版错乱。Pretext 的分词器原生支持中文字符逐字断行，同时正确处理标点禁排规则（行首不出现句号、行尾不出现左括号等）。

开发者可以用它来实现：杂志级图文混排、实时可拖拽的排版编辑器、弹幕/字幕渲染、以及任何需要高帧率动态文字回流的场景。`;

const FONTS = [
    '16px "Outfit", system-ui, sans-serif',
    '16px Georgia, "Songti SC", serif',
    '15px "JetBrains Mono", monospace'
];
const FONT_LABELS = [
    '无衬线 Outfit / 系统默认',
    '衬线体 Georgia / 宋体',
    '等宽体 JetBrains Mono'
];

const TypographyDemo = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const svgRef = useRef(null);
    const rAFRef = useRef(null);
    const [stats, setStats] = useState("0.00");

    const [maxWidth, setMaxWidth] = useState(500);
    const [lineHeight, setLineHeight] = useState(28);
    const [fontIndex, setFontIndex] = useState(0);

    const font = FONTS[fontIndex];

    const preparedText = useMemo(() => {
        return prepareWithSegments(PRETEXT_EXAMPLE_TEXT, font, { whiteSpace: 'pre-wrap' });
    }, [PRETEXT_EXAMPLE_TEXT, font]);

    useEffect(() => {
        if (!canvasRef.current || !svgRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const svgElement = svgRef.current;

        const dpr = window.devicePixelRatio || 1;
        const totalHeight = 520;

        canvas.width = maxWidth * dpr;
        canvas.height = totalHeight * dpr;
        canvas.style.width = maxWidth + 'px';
        canvas.style.height = totalHeight + 'px';
        ctx.scale(dpr, dpr);
        ctx.font = font;

        const loop = (time) => {
            const start = performance.now();
            ctx.clearRect(0, 0, maxWidth, totalHeight);

            const t = time * 0.001;
            const orbY = (Math.sin(t) * 0.5 + 0.5) * (totalHeight - 100);
            const orbXOffset = Math.sin(t * 1.5) * 50 + 80;
            const orbRadius = 50;
            const orbLeftEdge = maxWidth - orbXOffset - orbRadius;
            const orbTopEdge = orbY;
            const orbBottomEdge = orbY + orbRadius * 2;

            svgElement.style.transform = "translate(" + (maxWidth - orbXOffset - orbRadius) + "px, " + orbTopEdge + "px)";

            let cursor = { segmentIndex: 0, graphemeIndex: 0 };
            let y = 0;

            ctx.fillStyle = '#e2e8f0';
            ctx.textBaseline = 'top';

            while (true) {
                let lineAvailableWidth = maxWidth;
                const lineBottom = y + lineHeight;

                if (lineBottom > orbTopEdge && y < orbBottomEdge) {
                    lineAvailableWidth = Math.max(0, orbLeftEdge - 15);
                }

                const line = layoutNextLine(preparedText, cursor, lineAvailableWidth);
                if (line === null) break;

                ctx.fillText(line.text, 0, y + 2);

                ctx.fillStyle = 'rgba(99, 102, 241, 0.08)';
                ctx.fillRect(0, y + lineHeight - 1, line.width, 1);
                ctx.fillStyle = '#e2e8f0';

                cursor = line.end;
                y += lineHeight;
            }

            const end = performance.now();
            setStats((end - start).toFixed(2));
            rAFRef.current = requestAnimationFrame(loop);
        };

        rAFRef.current = requestAnimationFrame(loop);
        return () => { if (rAFRef.current) cancelAnimationFrame(rAFRef.current); };
    }, [preparedText, maxWidth, lineHeight, font]);

    const controls = (
        <div className="typo-controls">
            <div className="control-group">
                <label>容器宽度: {maxWidth}px</label>
                <input type="range" min="300" max="800" value={maxWidth} onChange={e => setMaxWidth(Number(e.target.value))} />
            </div>
            <div className="control-group">
                <label>行高: {lineHeight}px</label>
                <input type="range" min="20" max="50" value={lineHeight} onChange={e => setLineHeight(Number(e.target.value))} />
            </div>
            <div className="control-group">
                <label>字体选择</label>
                <select value={fontIndex} onChange={e => setFontIndex(Number(e.target.value))}>
                    {FONT_LABELS.map((l, i) => <option key={i} value={i}>{l}</option>)}
                </select>
            </div>
        </div>
    );

    return (
        <div className="webfx-page animate-fade-in">
            <h1 style={{ marginBottom: '2rem', fontFamily: "'Outfit', sans-serif" }}>
                排版引擎：零 DOM 动态文字回流
            </h1>

            <ShowcaseCard
                title="Pretext Engine 零回流排版引擎"
                description="60 FPS 逐行动态排版 — 文字自动避让浮动障碍物，无 DOM 回流，纯 Canvas 绘制"
                tags={['排版:零DOM回流', '性能:60fps', '布局:动态断行', '中文:标点禁排']}
                hasControls={true}
                controls={controls}
            >
                <div className="typo-demo-wrapper" ref={containerRef}>
                    <div className="perf-badge">
                        排版耗时: {stats}ms
                    </div>

                    <div className="available-width-box" style={{ width: maxWidth, position: 'relative' }}>
                        <svg
                            ref={svgRef}
                            width="100" height="100" viewBox="0 0 100 100"
                            className="dynamic-floater-svg"
                        >
                            <circle cx="50" cy="50" r="45" fill="rgba(168, 85, 247, 0.4)" stroke="#c084fc" strokeWidth="2" />
                            <circle cx="25" cy="40" r="5" fill="#f8fafc" />
                            <circle cx="75" cy="40" r="5" fill="#f8fafc" />
                            <path d="M 30 65 Q 50 85 70 65" stroke="#f8fafc" strokeWidth="3" fill="transparent" />
                        </svg>
                        <canvas ref={canvasRef} className="text-canvas" />
                    </div>
                </div>
            </ShowcaseCard>

            <div className="imp-notes glass-panel">
                <h3>开发者指南 🛠️</h3>

                <h4>核心 API</h4>
                <ul>
                    <li><code>prepareWithSegments(text, font, options)</code> — 一次性预处理：分词、测量字符宽度、缓存分段数据。只需在文本或字体变化时调用一次。</li>
                    <li><code>layoutNextLine(prepared, cursor, availableWidth)</code> — 逐行排布：传入当前光标位置和可用宽度，返回一行文字内容及新光标。在 rAF 循环中反复调用即可。</li>
                </ul>

                <h4>为什么不用 CSS Float / Clear？</h4>
                <ul>
                    <li>CSS 方案中，障碍物每移动一帧，浏览器就要执行完整的 Layout → Paint → Composite 管线。60fps 意味着每秒 60 次 DOM 回流。</li>
                    <li>Pretext 在 rAF 中用纯 JS 计算，单帧耗时通常 <code>&lt; 0.1ms</code>，比 DOM 回流快 100 倍以上。</li>
                </ul>

                <h4>中文排版优势</h4>
                <ul>
                    <li>原生支持 CJK 逐字断行（中文没有空格分词，传统方案常排版错乱）</li>
                    <li>内置标点禁排规则：行首不出现 <code>。，、；！？</code>，行尾不出现 <code>（「</code></li>
                    <li>适合国际物流场景中 中英混排 的运单/面单渲染</li>
                </ul>

                <h4>适用场景</h4>
                <ul>
                    <li>杂志级图文混排（文字环绕图片/不规则形状）</li>
                    <li>实时可拖拽的排版编辑器</li>
                    <li>弹幕 / 字幕高帧率渲染</li>
                    <li>运单面单 Canvas 生成（替代 html2canvas）</li>
                </ul>
            </div>
        </div>
    );
};

export default TypographyDemo;
