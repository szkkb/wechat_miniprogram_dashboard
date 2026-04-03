import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ShowcaseCard from '../ShowcaseCard';
import './Demos.css';

const MOCK_CARDS = [
    { title: "Authentication", desc: "OAuth 2.0 and SAML implementation modules." },
    { title: "Database", desc: "NoSQL document storage clustering setup." },
    { title: "Edge Functions", desc: "Deploy serverless code globally on the edge." },
];

const HoverSpotlight = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 }); // off-screen by default

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <ShowcaseCard
            title="Spotlight Hover Reveal"
            description="Recreating a premium glowing border effect. A radial gradient tracks the mouse and uses CSS masking to only reveal the glow on the borders."
            tags={['visual:dark-mode', 'interaction:hover-reveal', 'effect:glow']}
            hasControls={false}
        >
            <div 
                className="spotlight-container" 
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setMousePosition({ x: -1000, y: -1000 })}
            >
                {MOCK_CARDS.map((card, idx) => (
                    <div className="spotlight-card-wrapper" key={idx}>
                        {/* The hover glow effect that tracks the mouse */}
                        <motion.div 
                            className="spotlight-glow"
                            animate={{
                                background: `radial-gradient(400px circle at \${mousePosition.x}px \${mousePosition.y}px, rgba(255,255,255,0.15), transparent 40%)`
                            }}
                            transition={{ type: "tween", ease: "backOut", duration: 0 }}
                        />
                        
                        {/* The actual card content */}
                        <div className="spotlight-card-content">
                            <h4 className="spotlight-card-title">{card.title}</h4>
                            <p className="spotlight-card-desc">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </ShowcaseCard>
    );
};

export default HoverSpotlight;
