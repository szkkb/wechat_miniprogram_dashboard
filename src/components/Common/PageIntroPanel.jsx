import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const PageIntroPanel = ({ title, description }) => {
    const [open, setOpen] = useState(false);

    const panel = (
        <div
            className={`glass-panel header-panel ${open ? 'header-expanded' : ''}`}
            onClick={() => setOpen(!open)}
        >
            <div className="header-panel-handle" />
            <div className="header-panel-hint">{open ? '点击收起' : '点击查看本页介绍'}</div>
            <h3 className="section-title">{title}</h3>
            <p className="section-desc">{description}</p>
        </div>
    );

    return createPortal(panel, document.body);
};

export default PageIntroPanel;
