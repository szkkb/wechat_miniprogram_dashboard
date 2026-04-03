import React, { useState, useEffect, useRef, useMemo } from 'react';
import ShowcaseCard from '../../components/WebFXLayout/ShowcaseCard';
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';
import './TypographyDemo.css';

const PRETEXT_EXAMPLE_TEXT = `予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？

若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。

至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。

这就是脱离 DOM 树进行纯 JS 文字测量的真正威力。不仅对于英文，它对于高密度的中文方块字和标点禁排逻辑同样能做到精准运算。面对随时变动的障碍物，文字也能如这浩浩汤汤的水流般，以令人发指的 60 帧/秒速度在间隙穿梭填充！`;

const FONTS = [
    '18px Inter, system-ui, sans-serif',
    'italic 18px Georgia, serif',
    '18px monospace'
];

const TypographyDemo = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const svgRef = useRef(null);
    const rAFRef = useRef(null);
    const [stats, setStats] = useState("0.00ms");

    const [maxWidth, setMaxWidth] = useState(500);
    const [lineHeight, setLineHeight] = useState(30);
    const [fontIndex, setFontIndex] = useState(0);

    const font = FONTS[fontIndex];

    // 1. One Time Prep (Cached)
    const preparedText = useMemo(() => {
        return prepareWithSegments(PRETEXT_EXAMPLE_TEXT, font, { whiteSpace: 'pre-wrap' });
    }, [PRETEXT_EXAMPLE_TEXT, font]);

    // 2. High Performance Layout Loop
    useEffect(() => {
        if (!canvasRef.current || !svgRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const svgElement = svgRef.current;
        
        const dpr = window.devicePixelRatio || 1;
        const totalHeight = 500; // Fixed canvas height for the demo
        
        canvas.width = maxWidth * dpr;
        canvas.height = totalHeight * dpr;
        canvas.style.width = maxWidth + 'px';
        canvas.style.height = totalHeight + 'px';
        ctx.scale(dpr, dpr);
        ctx.font = font;

        const loop = (time) => {
            const start = performance.now();

            // Clear previous frame
            ctx.clearRect(0, 0, maxWidth, totalHeight);
            
            // Calculate dynamic shape coordinates
            // Let's make an orb that moves up and down, and oscillates left and right!
            const t = time * 0.001; 
            const orbY = (Math.sin(t) * 0.5 + 0.5) * (totalHeight - 100);
            const orbXOffset = Math.sin(t * 1.5) * 50 + 80;
            const orbRadius = 50;
            const orbLeftEdge = maxWidth - orbXOffset - orbRadius;
            const orbTopEdge = orbY;
            const orbBottomEdge = orbY + orbRadius * 2;
            
            // Move DOM SVG
            svgElement.style.transform = "translate(" + (maxWidth - orbXOffset - orbRadius) + "px, " + orbTopEdge + "px)";
            
            // Perform text layout line by line
            let cursor = { segmentIndex: 0, graphemeIndex: 0 };
            let y = 0;
            
            ctx.fillStyle = '#f8fafc';
            ctx.textBaseline = 'top';

            while (true) {
                // Determine available width for this specific line
                // If the line overlaps the orb vertically, its width is clamped to the orb's left edge
                let lineAvailableWidth = maxWidth;
                const lineBottom = y + lineHeight;
                
                if (lineBottom > orbTopEdge && y < orbBottomEdge) {
                    // There is an overlap! We shrink the text width
                    // Add a little padding (e.g. 15px) between text and orb
                    lineAvailableWidth = Math.max(0, orbLeftEdge - 15);
                }

                // Get the text line
                const line = layoutNextLine(preparedText, cursor, lineAvailableWidth);
                if (line === null) break; 
                
                // Draw text
                ctx.fillText(line.text, 0, y + 2); // +2 for visual baseline offset
                
                // Draw measuring line
                ctx.fillStyle = 'rgba(99, 102, 241, 0.1)';
                ctx.fillRect(0, y + lineHeight - 1, line.width, 1);
                ctx.fillStyle = '#f8fafc';

                cursor = line.end;
                y += lineHeight;
            }

            const end = performance.now();
            setStats((end - start).toFixed(2));

            rAFRef.current = requestAnimationFrame(loop);
        };

        rAFRef.current = requestAnimationFrame(loop);

        return () => {
            if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
        };
    }, [preparedText, maxWidth, lineHeight, font]);

    const controls = (
        <div className="typo-controls">
            <div className="control-group">
                <label>Container Width: {maxWidth}px</label>
                <input type="range" min="300" max="800" value={maxWidth} onChange={e => setMaxWidth(Number(e.target.value))} />
            </div>
            <div className="control-group">
                <label>Line Height: {lineHeight}px</label>
                <input type="range" min="20" max="50" value={lineHeight} onChange={e => setLineHeight(Number(e.target.value))} />
            </div>
            <div className="control-group">
                <label>Font Stack</label>
                <select value={fontIndex} onChange={e => setFontIndex(Number(e.target.value))}>
                    <option value={0}>18px Inter (Sans-serif)</option>
                    <option value={1}>18px Georgia (Serif)</option>
                    <option value={2}>18px Monospace</option>
                </select>
            </div>
        </div>
    );

    return (
        <div className="webfx-page animate-fade-in">
            <h1 style={{marginBottom: '2rem'}}>Typography: Dynamic Pretext Flow</h1>
            
            <ShowcaseCard
                title="60 FPS Off-DOM Dynamic Text Wrapping"
                description="The text engine queries intersection points dynamically and completely restructures the text lines at 60 FPS. Observe the seamless flow of paragraphs around the moving SVG Orb without any DOM layout thrashing!"
                tags={['visual:complex-typography', 'motion:zero-reflow', 'layout:dynamic-wrap', 'perf:60fps']}
                hasControls={true}
                controls={controls}
            >
                <div className="typo-demo-wrapper" ref={containerRef}>
                    <div className="perf-badge">
                        Loop Cost: {stats}ms
                    </div>
                    
                    <div className="available-width-box" style={{ width: maxWidth, position: 'relative' }}>
                         {/* Dynamic floating SVG element */}
                         <svg 
                            ref={svgRef}
                            width="100" 
                            height="100" 
                            viewBox="0 0 100 100" 
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
                <h3>The "AHA" Moment 💡</h3>
                <ul>
                    <li>We are running a <code>requestAnimationFrame</code> loop calculating bounding overlaps with an unpredictable SVG component.</li>
                    <li>Inside the loop, the text's natural flow is completely recalculated per-line using <code>layoutNextLine()</code> to perfectly dodge the orb!</li>
                    <li>Loop calculation time usually stays under <code>0.10ms</code>. This guarantees a butter-smooth 120/60FPS experience whereas conventional CSS/DOM Float/Clear reflows would cripple the CPU.</li>
                </ul>
            </div>
        </div>
    );
};

export default TypographyDemo;
