import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { track } from '../../utils/track';

const CopyableName = ({ en, zh, size = 'default' }) => {
    const [copied, setCopied] = useState(false);
    const aiName = `${en} ${zh}`;

    const handleCopy = async (e) => {
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(aiName);
            setCopied(true);
            track('copy_name', { en, zh });
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // fallback
            const ta = document.createElement('textarea');
            ta.value = aiName;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const isSmall = size === 'small';

    return (
        <span className="copyable-name" data-size={size}>
            <span className="copyable-name-en">{en}</span>
            <span className="copyable-name-zh">{zh}</span>
            <button
                className={`copyable-name-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
                title={copied ? '已复制' : `复制 "${aiName}" 给 AI`}
            >
                {copied ? <Check size={isSmall ? 12 : 14} /> : <Copy size={isSmall ? 12 : 14} />}
            </button>
            {copied && <span className="copyable-toast">已复制</span>}
        </span>
    );
};

export default CopyableName;
