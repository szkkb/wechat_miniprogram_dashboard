import React, { useState } from 'react';
import { ChevronLeft, MoreHorizontal, Circle, ChevronDown, CheckCircle2, X, ArrowRight, ChevronRight, Info } from 'lucide-react';
import PromoCard from '../../components/Common/PromoCard';
import './SwipeTabCardsDemo.css';

const OPTIMIZED_PLANS = [
    { 
        id: 'plan-best', 
        tag: '✨ 综合最优 (80%用户的选择)', 
        title: '普货-快线包税', 
        method: '🚢',
        originalPrice: 268,
        price: 263, 
        baseWeight: '2kg',
        time: '预计 25-35 天到达', 
        perKg: '¥32.5/1kg',
        features: ['双清包税', '时效与价格的最佳平衡'], 
        type: 'best',
        discountName: '🎉 老客户专属优惠',
        discountAmount: 5.36,
        allowedCategories: ['衣物鞋帽', '日用百货', '书籍文件', '母婴用品', '行李箱', '家具'],
        prohibitedCategories: ['药品保健', '食品特产', '数码电器', '美妆护肤', '品牌精品', '个护配饰']
    },
    { 
        id: 'plan-cheap', 
        tag: '🔥 极致性价比', 
        title: '普货-海运海派', 
        method: '🚢',
        originalPrice: 200,
        price: 189, 
        baseWeight: '2kg',
        time: '35-45 天',
        perKg: '¥22.0/1kg',
        features: ['适合：不急的重货', '低价高性价比'], 
        type: 'cheap',
        discountName: '🎉 V3等级专享',
        discountAmount: 11.00,
        allowedCategories: ['家具', '大件行李', '装修材料', '汽配'],
        prohibitedCategories: ['易碎品', '电池', '带磁物品', '液体粉末']
    },
    { 
        id: 'plan-fast', 
        tag: '🚀 极速达', 
        title: 'DHL官方特惠', 
        method: '✈️',
        originalPrice: 580,
        price: 529, 
        baseWeight: '2kg',
        time: '3-7 天', 
        perKg: '¥98.0/1kg',
        features: ['适合：紧急文件/加急礼物'], 
        type: 'fast',
        discountName: '🎉 限时空运补贴',
        discountAmount: 51.00,
        allowedCategories: ['全部普货', '敏感特货 (需附加费)', '电子产品', '化妆品'],
        prohibitedCategories: ['纯电池', '易燃易爆', '仿真武器', '处方药']
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
    const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

    const handleSelectPlan = (id) => {
        setSelectedPlanId(id);
        setBottomSheetOpen(true);
    };

    const selectedPlan = OPTIMIZED_PLANS.find(p => p.id === selectedPlanId);

    return (
        <div className="page-container" style={{ padding: 0, height: '100vh', overflow: 'hidden' }}>
            <div className={`new-ux-container ${bottomSheetOpen ? 'modal-open' : ''}`}>
                {/* Native WeChat Header Capsule */}
                <header className="demo-header-native">
                    <div className="demo-header-left"><ChevronLeft size={22} color="#000" /></div>
                    <div className="demo-header-title">运费查询</div>
                    <div className="demo-header-capsule">
                        <MoreHorizontal size={18} color="#000" />
                        <div className="capsule-divider"></div>
                        <Circle size={18} color="#000" />
                    </div>
                </header>

                <div className="scroll-content">
                    {/* Destination Context */}
                    <div className="context-header">
                        <div className="destination-badge">🇺🇸 美国 · {selectedPlan?.baseWeight || '2kg'} <span className="modify-link">修改条件</span></div>
                        <div className="smart-tip">
                            <span className="bulb-icon">💡</span> 
                            <span>系统已为您智能优选 3 套最佳发货方案：<br/><small>(左右滑动横向对比，点击卡片查看明细)</small></span>
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
                                    <div className="plan-price-row tabular-nums">
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
                                <div className="plan-card-cta">
                                    <span className="cta-pulse-icon"><Info size={14}/></span>
                                    <span>点击查看排仓与计费明细</span>
                                    <ChevronRight size={14} className="cta-arrow" />
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
                                            <span className="alt-price tabular-nums">¥{route.price}</span>
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
                    <div className="promo-wrapper">
                        <PromoCard theme="light" />
                    </div>

                    {/* Padding for bottom action bar */}
                    <div style={{ height: 120 }}></div>
                </div>

                {/* Bottom Action Bar */}
                <div className={`fixed-action-bar ${bottomSheetOpen ? 'hidden' : ''}`}>
                    <button className="btn-submit" onClick={() => setBottomSheetOpen(true)}>
                        使用【{selectedPlan ? selectedPlan.tag.split(' ')[1] || selectedPlan.tag.split(' ')[0] : ''}】去预报
                    </button>
                </div>

                {/* ─── Bottom Sheet Modal ─── */}
                <div className={`bottom-sheet-overlay ${bottomSheetOpen ? 'visible' : ''}`} onClick={() => setBottomSheetOpen(false)}></div>
                <div className={`bottom-sheet ${bottomSheetOpen ? 'visible' : ''}`}>
                    <div className="bs-handle"></div>
                    <div className="bs-header">
                        <h2 className="bs-title">{selectedPlan?.method} {selectedPlan?.title}</h2>
                        <button className="bs-close" onClick={() => setBottomSheetOpen(false)}><X size={20} color="#999" /></button>
                    </div>

                    <div className="bs-content">
                        {/* Summary Block */}
                        <div className="bs-summary-box">
                            <div className="bs-price-main">
                                <span className="bs-original-price tabular-nums">¥{selectedPlan?.originalPrice}</span>
                                <span className="bs-current-price tabular-nums"><span className="bs-currency">¥</span>{selectedPlan?.price}</span>
                            </div>
                            <div className="bs-time">{selectedPlan?.time}</div>
                            <div className="bs-incremental-weight">续重 {selectedPlan?.perKg}</div>
                        </div>

                        {/* Promo Banner */}
                        <div className="bs-promo-banner">
                            {selectedPlan?.discountName}
                        </div>

                        {/* Billing Details */}
                        <div className="bs-section">
                            <h3 className="bs-section-title">💰 计费明细</h3>
                            <div className="bs-billing-row">
                                <span className="bs-bill-label">首重</span>
                                <span className="bs-bill-value tabular-nums">{selectedPlan?.baseWeight}: ¥{selectedPlan?.originalPrice}</span>
                            </div>
                            <div className="bs-billing-row">
                                <span className="bs-bill-label">优惠减免</span>
                                <span className="bs-bill-value bs-discount tabular-nums">-¥{selectedPlan?.discountAmount}</span>
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="bs-section">
                            <h3 className="bs-section-title">✅ 可寄品类</h3>
                            <div className="bs-tags-cloud">
                                {selectedPlan?.allowedCategories.map((c, i) => (
                                    <span key={i} className="bs-tag-pill">{c}</span>
                                ))}
                            </div>
                            <div className="bs-prohibited-text">
                                ⚠️ 不支持：{selectedPlan?.prohibitedCategories.join(' · ')}
                            </div>
                        </div>
                    </div>

                    <div className="bs-action-footer">
                        <button className="btn-submit bs-submit-btn" onClick={() => {}}>
                            选择此线路 <ArrowRight size={16} /> 去预报
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SwipeTabCardsDemo;
