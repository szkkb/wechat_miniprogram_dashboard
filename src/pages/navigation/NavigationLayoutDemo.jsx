import React, { useState, useRef } from 'react';
import { ChevronLeft, Home, MoreHorizontal, Truck, MapPin } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PromoCard from '../../components/Common/PromoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './NavigationLayout.css';

const NavigationLayoutDemo = () => {
    const [logs, setLogs] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleAction = (action) => {
        setLogs(prev => [...prev.slice(-4), `NavBar 动作: 模拟点击 <${action}>`]);
    };

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop > 50 && !isScrolled) setIsScrolled(true);
        if (scrollTop <= 50 && isScrolled) setIsScrolled(false);
    };

    return (
        <div className="page-container animate-fade-in">
            <PageIntroPanel title="导航与布局 (Navigation & Layout)" description="展示页面间路由流转顶栏与底栏的深度定制，包含沉浸式的安全区域过渡演算。" />

            <div className="demo-grid">
                <DemoCard
                    title="沉浸式自定义顶栏"
                    codeId="Component: NL-NavBar"
                    badge="原生胶囊适配"
                    description="脱离默认 Web 导航栏，模拟带左侧返回组和安全区偏移的透明毛玻璃顶栏。在实际的小程序中，常配合 scroll 监听渐变背景反色。"
                    mockPhone={true}
                    logs={logs}
                >
                    <div className="navbar-demo-container">

                        {/* Scrollable Content */}
                        <div className="scroll-view" onScroll={handleScroll}>

                            {/* Immersive Map Header - logistics themed */}
                            <div className="nav-logistics-header">
                                <div className="nav-map-pattern"></div>
                                <div className="route-info">
                                    <div className="route-city">广州</div>
                                    <div className="route-dash"></div>
                                    <div className="route-truck"><Truck size={20} /></div>
                                    <div className="route-dash"></div>
                                    <div className="route-city">深圳</div>
                                </div>
                                <div className="status-badge">运输中，预计明日达</div>
                            </div>

                            {/* Scroll Content simulating timeline/details */}
                            <div className="fake-scroll-content logistics-content">
                                <div className="info-card">
                                    <h4>运单信息</h4>
                                    <div className="skeleton-bar" style={{ width: '80%' }}></div>
                                    <div className="skeleton-bar" style={{ width: '60%' }}></div>
                                </div>

                                <div className="info-card">
                                    <h4>物流轨迹</h4>
                                    <div className="mock-timeline-item">
                                        <div className="dot"></div>
                                        <div className="t-content">
                                            <div className="skeleton-bar" style={{ width: '90%' }}></div>
                                            <div className="skeleton-bar" style={{ width: '40%' }}></div>
                                        </div>
                                    </div>
                                    <div className="mock-timeline-item">
                                        <div className="dot"></div>
                                        <div className="t-content">
                                            <div className="skeleton-bar" style={{ width: '70%' }}></div>
                                            <div className="skeleton-bar" style={{ width: '50%' }}></div>
                                        </div>
                                    </div>
                                    <div className="mock-timeline-item">
                                        <div className="dot"></div>
                                        <div className="t-content">
                                            <div className="skeleton-bar" style={{ width: '80%' }}></div>
                                            <div className="skeleton-bar" style={{ width: '30%' }}></div>
                                        </div>
                                    </div>
                                    {/* extra space to allow scrolling */}
                                    <div style={{ height: '100px' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Custom NavBar itself, overlapping the scroll view */}
                        <div className={`custom-navbar ${isScrolled ? 'solid' : 'transparent'}`}>
                            <div className="navbar-status-bar"></div> {/* Fake iOS status bar area */}
                            <div className="navbar-content">
                                <div className="navbar-left-capsule">
                                    <button onClick={() => handleAction('返回上一页')}><ChevronLeft size={16} /></button>
                                    <div className="capsule-divider"></div>
                                    <button onClick={() => handleAction('返回首页')}><Home size={16} /></button>
                                </div>
                                <div className="navbar-title" style={{ opacity: isScrolled ? 1 : 0, transition: 'opacity 0.3s' }}>
                                    查件详情
                                </div>
                                <div className="navbar-right-capsule">
                                    <button onClick={() => handleAction('WeChat原生菜单')}><MoreHorizontal size={16} /></button>
                                    <div className="capsule-divider"></div>
                                    <button onClick={() => handleAction('关闭小程序')}>
                                        <div className="close-circle"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </DemoCard>

                <PromoCard theme="dark" />
            </div>
        </div>
    );
};

export default NavigationLayoutDemo;
