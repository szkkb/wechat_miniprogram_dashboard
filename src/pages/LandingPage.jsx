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
                                一个开源的小程序组件与网站视觉风格 Dashboard
                            </p>
                        </div>
                        <div className="landing-intro">
                            <p>
                                这个项目源于我在做微信小程序和国际物流网站时的一个朴素需求：<strong>每次开新项目，都要反复翻找组件效果和视觉风格参考</strong>。后来索性做了这个 Dashboard，把常用的交互组件和视觉风格集中到一起。<br/><br/>
                                现在开源出来，希望对初学者有帮助。使用方法很简单——<strong>浏览效果 → 找到想要的 → 复制标准名称 → 粘贴给 AI 工具（ChatGPT / Claude / 豆包）</strong>，让 AI 帮你深化风格和交互代码。这样即使没有设计师，也能快速起步。
                            </p>
                        </div>

                        {/* ── Tools / Resources ── */}
                        <div className="landing-tools">
                            <h3 className="tools-title">配色与设计工具推荐</h3>
                            <div className="tools-list">
                                <a href="https://brandcolors.net/" target="_blank" rel="noopener noreferrer" className="tool-row">
                                    <span className="tool-name">BrandColors</span>
                                    <span className="tool-link-text">大品牌官方配色值，想不出配色就看大厂 <ArrowRight size={14}/></span>
                                </a>
                                <a href="https://huemint.com/brand-intersection/" target="_blank" rel="noopener noreferrer" className="tool-row">
                                    <span className="tool-name">Huemint</span>
                                    <span className="tool-link-text">AI 智能配色，输入关键词自动生成色彩方案 <ArrowRight size={14}/></span>
                                </a>
                                <a href="https://stitch.withgoogle.com/home" target="_blank" rel="noopener noreferrer" className="tool-row">
                                    <span className="tool-name">Google Stitch</span>
                                    <span className="tool-link-text">界面一般，但设计系统文件不错，调好色丢给 AI 用 <ArrowRight size={14}/></span>
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
                                    <h2 className="card-title">小程序组件 Lab</h2>
                                    <p className="card-desc">微信小程序原生组件与 API 的交互式演示</p>
                                </div>
                                <div className="card-action">进入 Lab <ArrowRight size={16} /></div>
                            </Link>

                            <Link to="/web-fx" className="workspace-card fx-card">
                                <div className="card-icon-wrapper">
                                    <Sparkles size={48} className="card-icon" strokeWidth={1.5} />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">网站视觉 Dashboard</h2>
                                    <p className="card-desc">网站视觉风格、行业风格与前端交互效果目录</p>
                                </div>
                                <div className="card-action">进入 Dashboard <ArrowRight size={16} /></div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="landing-footer">
                    <p>开源项目 · 欢迎 Star 和 PR · 有问题随时提 Issue</p>
                </div>
            </div>

            {/* Ambient Background Elements */}
            <div className="ambient-blob blob-1"></div>
            <div className="ambient-blob blob-2"></div>
        </div>
    );
};

export default LandingPage;
