import React, { useState } from 'react';
import { Code, Settings, ExternalLink, RefreshCw } from 'lucide-react';
import './ShowcaseCard.css';

const ShowcaseCard = ({
    title,
    description,
    tags = [],
    hasControls = false,
    controls = null,
    onRefresh,
    children
}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className="showcase-card animate-fade-in">
            <div className="showcase-header">
                <div className="showcase-title-area">
                    <h3 className="showcase-title">{title}</h3>
                    <p className="showcase-desc">{description}</p>
                </div>
                <div className="showcase-actions">
                    {onRefresh && (
                        <button className="icon-btn" onClick={onRefresh} title="Restart Animation">
                            <RefreshCw size={16} />
                        </button>
                    )}
                    {hasControls && (
                        <button 
                            className={`icon-btn ${drawerOpen ? 'active' : ''}`} 
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            title="Controls"
                        >
                            <Settings size={16} />
                        </button>
                    )}
                </div>
            </div>

            <div className="showcase-preview-area">
                {children}
            </div>

            {hasControls && drawerOpen && (
                <div className="showcase-controls-panel">
                    {controls}
                </div>
            )}

            <div className="showcase-footer">
                <div className="showcase-tags">
                    {tags.map((tag, i) => {
                        const isPrimary = tag.includes(':');
                        const [category, name] = isPrimary ? tag.split(':') : ['', tag];
                        return (
                            <span key={i} className={`fx-tag ${isPrimary ? 'primary' : ''}`}>
                                {isPrimary ? (
                                    <>
                                        <span className="fx-tag-cat">{category}</span>
                                        <span className="fx-tag-name">{name}</span>
                                    </>
                                ) : (
                                    tag
                                )}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ShowcaseCard;
