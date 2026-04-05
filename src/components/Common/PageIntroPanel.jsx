import React from 'react';

const PageIntroPanel = ({ title, description }) => (
    <div className="page-intro-panel">
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default PageIntroPanel;
