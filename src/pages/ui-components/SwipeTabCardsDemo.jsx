import React, { useState } from 'react';
import { ChevronLeft, MoreHorizontal, Circle, ChevronDown, CheckCircle2 } from 'lucide-react';
import PromoCard from '../../components/Common/PromoCard';
import './SwipeTabCardsDemo.css';

const OPTIMIZED_PLANS = [
    { 
        id: 'plan-best', 
        tag: '✨ 综合最优 (80%用户的选择)', 
        title: '普货-快线包税', 
        method: '✈️',
        price: 321, 
        time: '预计 7-15 天送达', 
        features: ['双清包税', '时效与价格的最佳平衡'], 
        type: 'best' 
    },
    { 
        id: 'plan-cheap', 
        tag: '🔥 极致性价比', 
        title: '普货-海运快线', 
        method: '🚢',
        price: 268, 
        time: '25-35 天', 
        features: ['适合：不急的重货'], 
        type: 'cheap' 
    },
    { 
        id: 'plan-fast', 
        tag: '🚀 极速达', 
        title: 'DHL官方特惠', 
        method: '✈️',
        price: 529, 
        time: '3-7 天', 
        features: ['适合：紧急文件/礼物'], 
        type: 'fast' 
    },
];

const ALTERNATIVE_ROUTES = [
    { id: 4, title: '海运-大件专线', price: 180, time: '30-60 天到达', tags: ['特惠清仓'] },
    { id: 5, title: '空运-加急快线', price: 650, time: '2-5 天到达', tags: ['极速达'] },
    { id: 6, title: '敏感货-特快专线', price: 385, time: '10-18 天到达', tags: ['稳定不排仓'] },
];

const SwipeTabCardsDemo = () => {
    const [selectedPlanId, setSelectedPlanId] = useState('plan-best');
    const [showOthers, setShowOthers] = useState(false);

    const handleSelectPlan = (id) => {
        setSelectedPlanId(id);
    };

    const selectedPlan = OPTIMIZED_PLANS.find(p => p.id === selectedPlanId);

    return (
        <div className="page-container" style={{ padding: 0, height: '100vh', overflow: 'hidden' }}>
            <div className="new-ux-container">
                {/* Header mimicking mini-program */}
                <header className="demo-header">
                    <button className="back-btn"><ChevronLeft /></button>
                    <span>运费查询</span>
                    <div style={{ position: 'absolute', right: 16, display: 'flex', gap: 12 }}>
                        <MoreHorizontal size={20} />
                        <Circle size={20} />
                    </div>
                </header>

                <div className="scroll-content">
                    {/* Destination Context */}
                    <div className="context-header">
                        <div className="destination-badge">🇺🇸 美国 · 2kg</div>
                        <div className="smart-tip">
                            <span className="bulb-icon">💡</span> 
                            <span>系统已为您智能优选 3 套最佳发货方案：<br/><small>(用户可左右滑动卡片横向对比)</small></span>
                        </div>
                    </div>

                    {/* Horizontal Swiper Area */}
                    <div className="horizontal-swiper-area">
                        {OPTIMIZED_PLANS.map((plan) => (
                            <div 
                                key={plan.id}
                                className={`plan-card ${selectedPlanId === plan.id ? 'highlighted' : 'normal'}`}
                                onClick={() => handleSelectPlan(plan.id)}
                            >
                                <div className={`plan-badge ${plan.type}`}>{plan.tag}</div>
                                <div className="plan-content">
                                    <div className="plan-title">{plan.method} {plan.title}</div>
                                    <div className="plan-price-row">
                                        <span className="currency">¥</span>
                                        <span className="amount">{plan.price}</span>
                                    </div>
                                    <div className="plan-time">⏱ {plan.time}</div>
                                    <div className="plan-divider"></div>
                                    <ul className="plan-features">
                                        {plan.features.map((f, i) => (
                                            <li key={i}>✅ {f}</li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedPlanId === plan.id && (
                                    <div className="selection-indicator">
                                        <CheckCircle2 fill="#0052d9" color="#fff" size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Expand Others Section */}
                    <div className="expand-section">
                        <button 
                            className="expand-toggle-btn"
                            onClick={() => setShowOthers(!showOthers)}
                        >
                            <ChevronDown size={16} className={showOthers ? 'rotated' : ''} />
                            <span>{showOthers ? '收起' : '展开查看其他 3 条备选线路'}</span>
                        </button>

                        {showOthers && (
                            <div className="alternative-list animate-fade-in">
                                {ALTERNATIVE_ROUTES.map(route => (
                                    <div key={route.id} className="alt-route-card">
                                        <div className="alt-row-1">
                                            <span className="alt-title">{route.title}</span>
                                            <span className="alt-price">¥{route.price}</span>
                                        </div>
                                        <div className="alt-row-2">
                                            <span className="alt-time">{route.time}</span>
                                            <span className="alt-tag">{route.tags[0]}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    {/* Promo */}
                    <div style={{ padding: '0 16px' }}>
                        <PromoCard theme="light" />
                    </div>

                    {/* Padding for bottom action bar */}
                    <div style={{ height: 100 }}></div>
                </div>

                {/* Bottom Action Bar */}
                <div className="fixed-action-bar">
                    <button className="btn-submit">
                        使用【{selectedPlan ? selectedPlan.tag.split(' ')[1] || selectedPlan.tag.split(' ')[0] : ''}】去预报
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SwipeTabCardsDemo;
