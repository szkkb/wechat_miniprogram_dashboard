import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Sparkles, ArrowRight, ExternalLink, Github, Palette, Layers, Pen } from 'lucide-react';
import { getMiniprogramCount, getWebfxCounts } from '../data/catalog-registry';
import './LandingPage.css';

const LandingPage = () => {
    const mpCount = getMiniprogramCount();
    const fxCounts = getWebfxCounts();

    return (
        <div className="landing-container">
            <div className="landing-content animate-fade-in">
                
                <div className="landing-grid-layout">
                    {/* ── Left Column: Intro ── */}
                    <div className="landing-left-col">
                        <div className="landing-header">
                            <h1 className="landing-title">Component<br/>& FX Board.</h1>
                            <p className="landing-subtitle">
                                The Open-Source Design Engineering Catalog.
                            </p>
                        </div>
                        <div className="landing-intro">
                            <p>
                                不要把时间浪费在重复造轮子上。这里汇集了开箱即用的<strong>小程序交互组件</strong>与<strong>网站视觉风格体系</strong>。<br/><br/>
                                直接浏览挑选，复制组件符号名，抛给 AI 帮你秒出代码。专注业务创新，不做样板民工。
                            </p>
                        </div>

                        {/* ── Tools / Resources ── */}
                        <div className="landing-tools">
                            <h3 className="tools-title">Essential Tools</h3>
                            <div className="tools-list">
                                <a href="https://brandcolors.net/" target="_blank" rel="noopener noreferrer" className="tool-row">
                                    <span className="tool-name">BrandColors</span>
                                    <span className="tool-link-text">顶级大厂原生配色 <ArrowRight size={14}/></span>
                                </a>
                                <a href="https://huemint.com/brand-intersection/" target="_blank" rel="noopener noreferrer" className="tool-row">
                                    <span className="tool-name">Huemint</span>
                                    <span className="tool-link-text">AI 方案级色彩演算 <ArrowRight size={14}/></span>
                                </a>
                                <a href="https://stitch.withgoogle.com/home" target="_blank" rel="noopener noreferrer" className="tool-row">
                                    <span className="tool-name">Google Stitch</span>
                                    <span className="tool-link-text">系统化设计令牌源 <ArrowRight size={14}/></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Dual Dashboards ── */}
                    <div className="landing-right-col">
                        <div className="workspace-cards">
                            <Link to="/mini-program" className="workspace-card mp-card">
                                <div className="card-icon-wrapper">
                                    <Smartphone size={48} className="card-icon" strokeWidth={1.5} />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Mini Program Lab</h2>
                                    <p className="card-desc">原生级微信小程序交互与 API 试验场</p>
                                </div>
                                <div className="card-action">Enter Lab <ArrowRight size={16} /></div>
                            </Link>

                            <Link to="/web-fx" className="workspace-card fx-card">
                                <div className="card-icon-wrapper">
                                    <Sparkles size={48} className="card-icon" strokeWidth={1.5} />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">Visual Dashboard</h2>
                                    <p className="card-desc">前沿网站美学结构与跨行业响应式版图</p>
                                </div>
                                <div className="card-action">Enter Dashboard <ArrowRight size={16} /></div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="landing-footer">
                    <p>Open Source Project · Built with AI & Minimalist Heart</p>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="ambient-blob blob-1"></div>
            <div className="ambient-blob blob-2"></div>
        </div>
    );
};

export default LandingPage;
