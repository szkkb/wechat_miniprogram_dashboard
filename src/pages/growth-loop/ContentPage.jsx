import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './ContentPage.css';

const ContentPage = ({ slug }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`/growth-loop-content/${slug}.md`)
            .then(r => {
                if (!r.ok) throw new Error('Not found');
                return r.text();
            })
            .then(text => { setContent(text); setLoading(false); })
            .catch(() => { setContent('# 内容加载失败\n\n请检查文件是否存在。'); setLoading(false); });
    }, [slug]);

    if (loading) return <div className="gl-content-loading">加载中...</div>;

    return (
        <div className="gl-content-page animate-fade-in">
            <div className="gl-markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default ContentPage;
