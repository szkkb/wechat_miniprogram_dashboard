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
                {/* ── Hero ── */}
                <div className="landing-header">
                    <h1 className="landing-title">Component & FX Dashboard</h1>
                    <p className="landing-subtitle">
                        一个开源的小程序组件与网站视觉风格 Dashboard
                    </p>
                </div>

                {/* ── 真诚介绍 ── */}
                <div className="landing-intro">
                    <p>
                        这个项目源于我在做微信小程序和国际物流网站时的一个朴素需求：
                        <strong>每次开新项目，都要反复翻找组件效果和视觉风格参考</strong>。
                        后来索性做了这个 Dashboard，把常用的交互组件和视觉风格集中到一起。
                    </p>
                    <p>
                        现在开源出来，希望对初学者有帮助。使用方法很简单——
                        <strong>浏览效果 → 找到想要的 → 复制标准名称 → 粘贴给 AI 工具（ChatGPT / Claude / 豆包）</strong>，
                        让 AI 帮你深化风格和交互代码。这样即使没有设计师，也能快速起步。
                    </p>
                </div>

                {/* ── 双卡入口 ── */}
                <div className="workspace-cards">
                    <Link to="/mini-program" className="workspace-card mp-card">
                        <div className="card-icon-wrapper">
                            <Smartphone size={36} className="card-icon" />
                        </div>
                        <h2 className="card-title">小程序组件 Lab</h2>
                        <p className="card-desc">
                            微信小程序原生组件与 API 的交互式演示
                        </p>
                        <div className="card-stats">
                            <span className="card-stat">{mpCount} 个组件</span>
                            <span className="card-stat">表单 · 导航 · 地图 · Canvas</span>
                        </div>
                        <div className="card-tags">
                            <span>视图容器</span><span>手势动效</span><span>Skyline</span>
                            <span>快捷登录</span><span>下拉刷新</span>
                        </div>
                        <div className="card-action">进入 Lab <ArrowRight size={16} /></div>
                    </Link>

                    <Link to="/web-fx" className="workspace-card fx-card">
                        <div className="card-icon-wrapper">
                            <Sparkles size={36} className="card-icon" />
                        </div>
                        <h2 className="card-title">网站视觉 Dashboard</h2>
                        <p className="card-desc">
                            网站视觉风格、行业风格与前端交互效果目录
                        </p>
                        <div className="card-stats">
                            <span className="card-stat">{fxCounts.visual} 视觉风格</span>
                            <span className="card-stat">{fxCounts.industry} 行业风格</span>
                            <span className="card-stat">{fxCounts.interaction} 交互 Demo</span>
                        </div>
                        <div className="card-tags">
                            <span>玻璃拟态</span><span>赛博朋克</span><span>AI Copilot</span>
                            <span>包豪斯</span><span>极简金融</span>
                        </div>
                        <div className="card-action">进入 Dashboard <ArrowRight size={16} /></div>
                    </Link>
                </div>

                {/* ── 配色与设计工具推荐 ── */}
                <div className="landing-tools">
                    <h3 className="tools-title">配色与设计工具推荐</h3>
                    <p className="tools-desc">
                        做项目时配色是个难题，这几个工具帮了我不少忙，分享给大家：
                    </p>
                    <div className="tools-grid">
                        <a href="https://brandcolors.net/" target="_blank" rel="noopener noreferrer" className="tool-card">
                            <div className="tool-icon"><Palette size={20} /></div>
                            <div className="tool-info">
                                <span className="tool-name">BrandColors</span>
                                <span className="tool-desc">大品牌官方配色值集合。想不出配色时，看看大厂怎么配的，直接借鉴。</span>
                            </div>
                            <ExternalLink size={14} className="tool-link-icon" />
                        </a>
                        <a href="https://huemint.com/brand-intersection/" target="_blank" rel="noopener noreferrer" className="tool-card">
                            <div className="tool-icon"><Layers size={20} /></div>
                            <div className="tool-info">
                                <span className="tool-name">Huemint</span>
                                <span className="tool-desc">AI 智能配色生成器。输入品牌关键词，自动生成协调的色彩方案，很实用。</span>
                            </div>
                            <ExternalLink size={14} className="tool-link-icon" />
                        </a>
                        <a href="https://stitch.withgoogle.com/home" target="_blank" rel="noopener noreferrer" className="tool-card">
                            <div className="tool-icon"><Pen size={20} /></div>
                            <div className="tool-info">
                                <span className="tool-name">Google Stitch</span>
                                <span className="tool-desc">Google 出的设计系统工具。界面一般，但导出的设计系统文件质量不错，调好配色后可以直接丢给 AI 开发工具用。</span>
                            </div>
                            <ExternalLink size={14} className="tool-link-icon" />
                        </a>
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
