import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Sparkles, ArrowRight } from 'lucide-react';
import { getMiniprogramCount, getWebfxCounts } from '../data/catalog-registry';
import './LandingPage.css';

const LandingPage = () => {
    const mpCount = getMiniprogramCount();
    const fxCounts = getWebfxCounts();

    return (
        <div className="landing-container">
            <div className="landing-content animate-fade-in">
                <div className="landing-header">
                    <h1 className="landing-title">Component & FX Dashboard</h1>
                    <p className="landing-subtitle">浏览组件与视觉风格，复制标准名称给 AI</p>
                </div>

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
            </div>

            {/* Ambient Background Elements */}
            <div className="ambient-blob blob-1"></div>
            <div className="ambient-blob blob-2"></div>
        </div>
    );
};

export default LandingPage;
