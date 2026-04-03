import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import ShowcaseCard from '../ShowcaseCard';
import './Demos.css';

const IMAGE_DATA = [
    { id: "img-1", title: "Neon Cyberpunk", color: "#ec4899", height: 120 },
    { id: "img-2", title: "Glass Architecture", color: "#3b82f6", height: 160 },
    { id: "img-3", title: "Deep Space", color: "#8b5cf6", height: 100 },
];

const SharedElement = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <ShowcaseCard
            title="Shared Element Expansion"
            description="Magic layout transitions. Clicking a thumbnail seamlessly morphs it into a full-screen detailed view using layoutId."
            tags={['transition:shared-element', 'transition:morph', 'pattern:master-detail']}
        >
            <div className="shared-element-wrapper">
                {/* Master Grid */}
                <div className="card-grid">
                    {IMAGE_DATA.map(item => (
                        <motion.div 
                            className="mini-card"
                            layoutId={`card-container-\${item.id}`}
                            onClick={() => setSelectedId(item)}
                            key={item.id}
                            style={{ height: item.height, background: item.color }}
                        >
                            <motion.h4 layoutId={`title-\${item.id}`} className="card-title-text">{item.title}</motion.h4>
                            <motion.div className="card-zoom-icon" layoutId={`icon-\${item.id}`}>
                                <Search size={16} color="#fff" />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Detail Overlay */}
                <AnimatePresence>
                    {selectedId && (
                        <div className="shared-overlay">
                            <motion.div 
                                className="shared-overlay-backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                            />
                            
                            <motion.div 
                                className="expanded-card"
                                layoutId={`card-container-\${selectedId.id}`}
                                style={{ background: selectedId.color }}
                            >
                                <motion.button 
                                    className="close-expanded-btn"
                                    onClick={() => setSelectedId(null)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                    exit={{ opacity: 0 }}
                                >
                                    <X size={24} />
                                </motion.button>
                                
                                <div className="expanded-content">
                                    <motion.div layoutId={`icon-\${selectedId.id}`} className="expanded-icon">
                                        <Search size={48} color="rgba(255,255,255,0.5)" />
                                    </motion.div>
                                    <motion.h2 layoutId={`title-\${selectedId.id}`} className="expanded-title">
                                        {selectedId.title}
                                    </motion.h2>
                                    <motion.p 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                        exit={{ opacity: 0, y: 20 }}
                                        className="expanded-desc"
                                    >
                                        This is the detailed view that appeared from the tiny card. Notice how the container, 
                                        title, and icon seamlessly morphed across the DOM tree without any jitter.
                                    </motion.p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </ShowcaseCard>
    );
};

export default SharedElement;
