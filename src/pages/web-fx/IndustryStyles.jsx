import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShowcaseCard from '../../components/WebFXLayout/ShowcaseCard';
import './IndustryStyles.css';

/* ═══════════════════════════════════════════════════════
   B. Industry Expressive — 12 Industry-Specific Styles
   ═══════════════════════════════════════════════════════ */

/* ── Logistics & Infrastructure ── */

// 1. High-Density Dashboard
const HighDensityDashboard = () => (
    <ShowcaseCard
        title="High-Density Dashboard 高密信息平铺风"
        description="最大信息密度，多面板并列的运营监控大屏"
        tags={['industry:Logistics', 'dashboard', 'data-dense']}
    >
        <div className="is-density-scene">
            <div className="is-density-grid">
                <div className="is-density-cell header">
                    <span className="is-d-label">SHIPMENTS</span>
                    <span className="is-d-val">14,892</span>
                    <span className="is-d-change up">+12.3%</span>
                </div>
                <div className="is-density-cell header">
                    <span className="is-d-label">IN TRANSIT</span>
                    <span className="is-d-val">3,247</span>
                    <span className="is-d-change">active</span>
                </div>
                <div className="is-density-cell header">
                    <span className="is-d-label">DELAYED</span>
                    <span className="is-d-val">89</span>
                    <span className="is-d-change down">+2.1%</span>
                </div>
                <div className="is-density-cell header">
                    <span className="is-d-label">SLA MET</span>
                    <span className="is-d-val">97.8%</span>
                    <span className="is-d-change up">+0.5%</span>
                </div>
                <div className="is-density-cell wide">
                    <div className="is-d-chart">
                        {[65,45,78,52,88,42,95,68,73,56,82,90,48,77,63].map((h, i) => (
                            <div key={i} className="is-d-bar" style={{ height: `${h}%` }} />
                        ))}
                    </div>
                </div>
                <div className="is-density-cell">
                    <div className="is-d-table">
                        <div className="is-d-row"><span>SH → LA</span><span className="green">On Time</span></div>
                        <div className="is-d-row"><span>BJ → NYC</span><span className="yellow">Delayed</span></div>
                        <div className="is-d-row"><span>GZ → LDN</span><span className="green">On Time</span></div>
                        <div className="is-d-row"><span>SZ → TKY</span><span className="red">Alert</span></div>
                    </div>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 2. Industrial Console
const IndustrialConsole = () => (
    <ShowcaseCard
        title="Industrial Console 重工夜间控制台风格"
        description="深色高对比 + 琥珀色/绿色指示灯，工业级 SCADA 感"
        tags={['industry:Logistics', 'console', 'industrial']}
    >
        <div className="is-console-scene">
            <div className="is-console-panel">
                <div className="is-console-header">
                    <span className="is-console-logo">▣ CTRL-SYS</span>
                    <div className="is-console-indicators">
                        <span className="is-ind green" /><span className="is-ind green" />
                        <span className="is-ind amber" /><span className="is-ind off" />
                    </div>
                </div>
                <div className="is-console-body">
                    <div className="is-console-gauge">
                        <div className="is-gauge-ring">
                            <svg viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(0,255,100,0.1)" strokeWidth="4" />
                                <circle cx="40" cy="40" r="34" fill="none" stroke="#00ff64" strokeWidth="4"
                                    strokeDasharray="160 214" strokeLinecap="round"
                                    transform="rotate(-90 40 40)" />
                            </svg>
                            <span className="is-gauge-val">75%</span>
                        </div>
                        <span className="is-gauge-label">LOAD</span>
                    </div>
                    <div className="is-console-gauge">
                        <div className="is-gauge-ring">
                            <svg viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,180,0,0.1)" strokeWidth="4" />
                                <circle cx="40" cy="40" r="34" fill="none" stroke="#ffb400" strokeWidth="4"
                                    strokeDasharray="120 214" strokeLinecap="round"
                                    transform="rotate(-90 40 40)" />
                            </svg>
                            <span className="is-gauge-val amber">56%</span>
                        </div>
                        <span className="is-gauge-label">TEMP</span>
                    </div>
                    <div className="is-console-log">
                        <div className="is-log-line"><span className="ts">[14:23:01]</span> System nominal</div>
                        <div className="is-log-line"><span className="ts">[14:23:15]</span> Valve A3 opened</div>
                        <div className="is-log-line warn"><span className="ts">[14:23:28]</span> Pressure +12%</div>
                        <div className="is-log-line"><span className="ts">[14:23:42]</span> Coolant stable</div>
                    </div>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 3. Blueprint Tracking
const BlueprintTracking = () => (
    <ShowcaseCard
        title="Blueprint Tracking 全视野地图溯源体系"
        description="地图底图 + 路径追踪 + 节点标注，物流全链路可视化"
        tags={['industry:Logistics', 'map', 'tracking']}
    >
        <div className="is-blueprint-scene">
            <div className="is-bp-map">
                <div className="is-bp-grid" />
                <svg className="is-bp-routes" viewBox="0 0 300 180">
                    <path d="M 40 120 Q 100 40 160 80 T 260 60" fill="none" stroke="rgba(0,200,255,0.4)" strokeWidth="2" strokeDasharray="6 3" />
                    <path d="M 40 120 Q 120 100 180 130 T 260 60" fill="none" stroke="rgba(0,255,100,0.6)" strokeWidth="2" />
                    <circle cx="40" cy="120" r="6" fill="#0cf" stroke="#0cf" strokeWidth="2" className="is-bp-pulse" />
                    <circle cx="160" cy="80" r="4" fill="rgba(0,200,255,0.4)" />
                    <circle cx="260" cy="60" r="6" fill="#0f8" stroke="#0f8" strokeWidth="2" className="is-bp-pulse" />
                    <text x="30" y="140" fill="rgba(0,200,255,0.6)" fontSize="8" fontFamily="monospace">SH</text>
                    <text x="250" y="52" fill="rgba(0,255,100,0.6)" fontSize="8" fontFamily="monospace">LA</text>
                </svg>
                <div className="is-bp-legend">
                    <span><i className="dot green" /> Active</span>
                    <span><i className="dot blue" /> Planned</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

/* ── Finance & Crypto ── */

// 4. FinTech Minimalist
const FinTechMinimalist = () => (
    <ShowcaseCard
        title="FinTech Minimalist 无国界极简金融风"
        description="Stripe 风格——极简留白 + 渐变按钮 + 精致排版"
        tags={['industry:Finance', 'minimalist', 'stripe-style']}
    >
        <div className="is-fintech-scene">
            <div className="is-fintech-card">
                <div className="is-fintech-header">
                    <span className="is-fintech-logo">◉ payflow</span>
                    <span className="is-fintech-badge">Pro</span>
                </div>
                <div className="is-fintech-amount">$12,480.00</div>
                <div className="is-fintech-sub">Total revenue this month</div>
                <div className="is-fintech-chart">
                    <svg viewBox="0 0 200 50" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="ftGrad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="rgba(99,102,241,0.3)" />
                                <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                            </linearGradient>
                        </defs>
                        <path d="M0 40 Q25 35 50 28 T100 20 T150 15 T200 8 V50 H0Z" fill="url(#ftGrad)" />
                        <path d="M0 40 Q25 35 50 28 T100 20 T150 15 T200 8" fill="none" stroke="#6366f1" strokeWidth="2" />
                    </svg>
                </div>
                <button className="is-fintech-btn">View Dashboard →</button>
            </div>
        </div>
    </ShowcaseCard>
);

// 5. Premium Metallic
const PremiumMetallic = () => (
    <ShowcaseCard
        title="Premium Metallic 暗夜淬金高净值资产风"
        description="深色底 + 金色点缀 + 精致线条，私人银行级奢华感"
        tags={['industry:Finance', 'premium', 'gold']}
    >
        <div className="is-premium-scene">
            <div className="is-premium-card">
                <div className="is-premium-header">
                    <span className="is-premium-logo">⬡ AURUM</span>
                    <span className="is-premium-tier">PRIVATE</span>
                </div>
                <div className="is-premium-divider" />
                <div className="is-premium-row">
                    <div><div className="is-premium-label">Portfolio Value</div><div className="is-premium-val">¥ 8,240,000</div></div>
                    <div><div className="is-premium-label">24h Change</div><div className="is-premium-val gold">+2.34%</div></div>
                </div>
                <div className="is-premium-row">
                    <div><div className="is-premium-label">Assets</div><div className="is-premium-val">12</div></div>
                    <div><div className="is-premium-label">Risk Level</div><div className="is-premium-val">Medium</div></div>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 6. Web3 Iridescent
const Web3Iridescent = () => (
    <ShowcaseCard
        title="Web3 Iridescent Web3 极客紫/全息流体渐变"
        description="深紫基调 + 流体渐变 + 发光粒子，加密原生美学"
        tags={['industry:Finance', 'web3', 'crypto']}
    >
        <div className="is-web3-scene">
            <div className="is-web3-glow glow1" />
            <div className="is-web3-glow glow2" />
            <div className="is-web3-card">
                <div className="is-web3-header">
                    <span className="is-web3-logo">◆ DefiVault</span>
                    <span className="is-web3-chain">ETH Mainnet</span>
                </div>
                <div className="is-web3-tvl">
                    <div className="is-web3-label">Total Value Locked</div>
                    <div className="is-web3-amount">$4.2M</div>
                </div>
                <div className="is-web3-stats">
                    <div><span className="is-web3-stat-label">APY</span><span className="is-web3-stat-val">12.4%</span></div>
                    <div><span className="is-web3-stat-label">Pool</span><span className="is-web3-stat-val">ETH/USDC</span></div>
                </div>
                <button className="is-web3-btn">Connect Wallet</button>
            </div>
        </div>
    </ShowcaseCard>
);

/* ── E-Commerce & Retail ── */

// 7. Editorial / Magazine
const EditorialMagazine = () => (
    <ShowcaseCard
        title="Editorial / Magazine 高级杂志画报排版风"
        description="大字号标题 + 精致 Serif 字体 + 图文交错的杂志级排版"
        tags={['industry:E-Commerce', 'editorial', 'typography']}
    >
        <div className="is-editorial-scene">
            <div className="is-editorial-card">
                <div className="is-editorial-tag">CURATED COLLECTION</div>
                <div className="is-editorial-title">The Art of<br />Minimalism</div>
                <div className="is-editorial-body">
                    Less is more. Discover the beauty in simplicity with our handpicked selection of timeless pieces.
                </div>
                <div className="is-editorial-meta">
                    <span>Vol. 24 — Spring Edition</span>
                    <span className="is-editorial-link">Explore →</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 8. Luxury Blank
const LuxuryBlank = () => (
    <ShowcaseCard
        title="Luxury Blank 高奢极简大面积留白"
        description="极度克制的排版 + 超大留白 + 细线条分割，顶奢品牌感"
        tags={['industry:E-Commerce', 'luxury', 'minimal']}
    >
        <div className="is-luxury-scene">
            <div className="is-luxury-card">
                <div className="is-luxury-brand">MAISON</div>
                <div className="is-luxury-divider" />
                <div className="is-luxury-product">Essence N°5</div>
                <div className="is-luxury-price">¥ 2,880</div>
                <div className="is-luxury-cta">DISCOVER</div>
            </div>
        </div>
    </ShowcaseCard>
);

// 9. Dynamic Promotional
const DynamicPromotional = () => (
    <ShowcaseCard
        title="Dynamic Promotional 高动态促销强对比风"
        description="红黄大字 + 价格标签 + 倒计时，电商大促视觉冲击"
        tags={['industry:E-Commerce', 'promotional', 'bold']}
    >
        <div className="is-promo-scene">
            <div className="is-promo-card">
                <div className="is-promo-banner">FLASH SALE</div>
                <div className="is-promo-price">
                    <span className="is-promo-original">¥599</span>
                    <span className="is-promo-now">¥199</span>
                </div>
                <div className="is-promo-badge">67% OFF</div>
                <div className="is-promo-timer">
                    <div className="is-promo-time-box">02</div>
                    <span>:</span>
                    <div className="is-promo-time-box">14</div>
                    <span>:</span>
                    <div className="is-promo-time-box">38</div>
                </div>
                <button className="is-promo-btn">立即抢购</button>
            </div>
        </div>
    </ShowcaseCard>
);

/* ── SaaS & B2B ── */

// 10. Clean Corporate
const CleanCorporate = () => (
    <ShowcaseCard
        title="Clean Corporate 极净商业信任蓝"
        description="蓝白为主的企业级信任感设计，清晰的信息层级"
        tags={['industry:SaaS', 'corporate', 'trust']}
    >
        <div className="is-corp-scene">
            <div className="is-corp-card">
                <div className="is-corp-header">
                    <span className="is-corp-logo">▲ CloudSync</span>
                    <span className="is-corp-plan">Enterprise</span>
                </div>
                <div className="is-corp-features">
                    <div className="is-corp-feature"><span className="is-corp-check">✓</span> Unlimited team members</div>
                    <div className="is-corp-feature"><span className="is-corp-check">✓</span> 99.99% uptime SLA</div>
                    <div className="is-corp-feature"><span className="is-corp-check">✓</span> Advanced analytics</div>
                    <div className="is-corp-feature"><span className="is-corp-check">✓</span> Priority support</div>
                </div>
                <button className="is-corp-btn">Start Free Trial</button>
                <div className="is-corp-note">No credit card required</div>
            </div>
        </div>
    </ShowcaseCard>
);

// 11. High-Contrast Accessible
const HighContrastAccessible = () => (
    <ShowcaseCard
        title="High-Contrast Accessible 高反差全兼容企业应用模式"
        description="WCAG AAA 标准，超大字号 + 强对比 + 粗线框"
        tags={['industry:SaaS', 'a11y', 'WCAG-AAA']}
    >
        <div className="is-a11y-scene">
            <div className="is-a11y-card">
                <div className="is-a11y-header">
                    <span className="is-a11y-title">Accessibility Settings</span>
                    <span className="is-a11y-badge">AAA</span>
                </div>
                <div className="is-a11y-options">
                    <div className="is-a11y-opt">
                        <span className="is-a11y-label">High Contrast</span>
                        <div className="is-a11y-toggle on"><div className="is-a11y-knob" /></div>
                    </div>
                    <div className="is-a11y-opt">
                        <span className="is-a11y-label">Large Text</span>
                        <div className="is-a11y-toggle on"><div className="is-a11y-knob" /></div>
                    </div>
                    <div className="is-a11y-opt">
                        <span className="is-a11y-label">Reduce Motion</span>
                        <div className="is-a11y-toggle"><div className="is-a11y-knob" /></div>
                    </div>
                </div>
                <button className="is-a11y-btn">Apply Settings</button>
            </div>
        </div>
    </ShowcaseCard>
);

// 12. (Bonus) SaaS Gradient Modern
const SaaSGradient = () => (
    <ShowcaseCard
        title="SaaS Gradient Modern SaaS 渐变现代风"
        description="渐变色 CTA + 圆润卡片 + 明亮配色，现代 SaaS 标准美学"
        tags={['industry:SaaS', 'gradient', 'modern']}
    >
        <div className="is-saas-scene">
            <div className="is-saas-card">
                <div className="is-saas-icon">🚀</div>
                <div className="is-saas-title">Ship faster with AI</div>
                <div className="is-saas-desc">Automate your workflow and boost productivity by 10x.</div>
                <div className="is-saas-pills">
                    <span className="is-saas-pill">API</span>
                    <span className="is-saas-pill">SDK</span>
                    <span className="is-saas-pill">Dashboard</span>
                </div>
                <button className="is-saas-btn">Get Started Free →</button>
            </div>
        </div>
    </ShowcaseCard>
);

// --- 2026 New Enterprise Styles ---

// 13-E. AI Copilot Chat Interface
const AICopilotChat = () => (
    <ShowcaseCard
        title="AI Copilot Chat AI 副驾驶对话界面"
        description="对话即操作——2026 年最热趋势，Chat 成为企业应用主交互入口"
        tags={['industry:SaaS', 'AI-copilot', 'chat', '2026-trend']}
    >
        <div className="is-aichat-scene">
            <div className="is-aichat-panel">
                <div className="is-aichat-header">
                    <div className="is-aichat-avatar">AI</div>
                    <span className="is-aichat-name">Copilot</span>
                    <span className="is-aichat-status">Online</span>
                </div>
                <div className="is-aichat-messages">
                    <div className="is-aichat-msg user">
                        <div className="is-aichat-bubble user">Show me Q1 revenue breakdown</div>
                    </div>
                    <div className="is-aichat-msg ai">
                        <div className="is-aichat-bubble ai">
                            <div className="is-aichat-text">Here's your Q1 revenue by region:</div>
                            <div className="is-aichat-card-inline">
                                <div className="is-aichat-metric"><span className="is-aichat-region">APAC</span><span className="is-aichat-val">$2.4M</span><span className="is-aichat-delta up">+18%</span></div>
                                <div className="is-aichat-metric"><span className="is-aichat-region">EMEA</span><span className="is-aichat-val">$1.8M</span><span className="is-aichat-delta up">+12%</span></div>
                                <div className="is-aichat-metric"><span className="is-aichat-region">AMER</span><span className="is-aichat-val">$3.1M</span><span className="is-aichat-delta down">-3%</span></div>
                            </div>
                            <div className="is-aichat-action">📊 Open full report</div>
                        </div>
                    </div>
                </div>
                <div className="is-aichat-input">
                    <span className="is-aichat-sparkle">✦</span>
                    <span className="is-aichat-placeholder">Ask anything...</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 14-E. Developer-First Dark (Linear / Vercel aesthetic)
const DevFirstDark = () => (
    <ShowcaseCard
        title="Dev-First Dark 开发者暗黑极简风"
        description="Linear/Vercel 美学——1px 边框 + 高对比暗色 + 等宽字体 + 微光效果"
        tags={['industry:SaaS', 'developer', 'Linear-style', 'dark']}
    >
        <div className="is-devdark-scene">
            <div className="is-devdark-card">
                <div className="is-devdark-header">
                    <span className="is-devdark-logo">▲ deploy.io</span>
                    <span className="is-devdark-env">Production</span>
                </div>
                <div className="is-devdark-deploy">
                    <div className="is-devdark-commit">
                        <span className="is-devdark-hash">#a3f8c2d</span>
                        <span className="is-devdark-msg">feat: add auth middleware</span>
                    </div>
                    <div className="is-devdark-status">
                        <span className="is-devdark-dot" />
                        <span>Ready</span>
                        <span className="is-devdark-time">2s ago</span>
                    </div>
                </div>
                <div className="is-devdark-metrics">
                    <div className="is-devdark-m"><span className="is-devdark-m-label">Build</span><span className="is-devdark-m-val">12s</span></div>
                    <div className="is-devdark-m"><span className="is-devdark-m-label">Size</span><span className="is-devdark-m-val">142kB</span></div>
                    <div className="is-devdark-m"><span className="is-devdark-m-label">Region</span><span className="is-devdark-m-val">hkg1</span></div>
                </div>
                <div className="is-devdark-actions">
                    <button className="is-devdark-btn primary">Visit →</button>
                    <button className="is-devdark-btn">Logs</button>
                    <button className="is-devdark-btn">Rollback</button>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 15-E. Warm Productivity (Notion-inspired)
const WarmProductivity = () => (
    <ShowcaseCard
        title="Warm Productivity 暖色生产力工具风"
        description="Notion 式美学——暖色调 + 圆润图标 + 亲和力设计，让企业工具不再冰冷"
        tags={['industry:SaaS', 'Notion-style', 'warm', 'productivity']}
    >
        <div className="is-warm-scene">
            <div className="is-warm-card">
                <div className="is-warm-header">
                    <span className="is-warm-emoji">📋</span>
                    <span className="is-warm-title">Team Workspace</span>
                </div>
                <div className="is-warm-items">
                    <div className="is-warm-item"><span className="is-warm-icon">📝</span><span>Product Roadmap</span><span className="is-warm-badge blue">In Progress</span></div>
                    <div className="is-warm-item"><span className="is-warm-icon">🎯</span><span>Q2 OKRs</span><span className="is-warm-badge green">On Track</span></div>
                    <div className="is-warm-item"><span className="is-warm-icon">📊</span><span>Weekly Standup Notes</span><span className="is-warm-badge orange">Updated</span></div>
                    <div className="is-warm-item"><span className="is-warm-icon">💡</span><span>Design Brainstorm</span><span className="is-warm-badge purple">New</span></div>
                </div>
                <div className="is-warm-footer">
                    <span className="is-warm-members">👤👤👤 +5</span>
                    <span className="is-warm-link">Open workspace →</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 16-E. AI Analytics Narrative Dashboard
const AIAnalytics = () => (
    <ShowcaseCard
        title="AI Analytics 智能叙事分析面板"
        description="AI 自动解读数据并生成可操作洞察，从看图表到听故事的进化"
        tags={['industry:SaaS', 'AI-analytics', 'narrative', 'insight']}
    >
        <div className="is-aianalytics-scene">
            <div className="is-aianalytics-card">
                <div className="is-aianalytics-insight">
                    <div className="is-aianalytics-sparkle">✦ AI Insight</div>
                    <div className="is-aianalytics-text">Revenue grew <strong>23%</strong> MoM, primarily driven by APAC expansion. Churn risk detected in <strong>3 enterprise accounts</strong> — recommend scheduling check-ins.</div>
                </div>
                <div className="is-aianalytics-chart">
                    <svg viewBox="0 0 240 60" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="aiGrad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="rgba(34,197,94,0.3)" />
                                <stop offset="100%" stopColor="rgba(34,197,94,0)" />
                            </linearGradient>
                        </defs>
                        <path d="M0 50 Q30 45 60 38 T120 25 T180 18 T240 8 V60 H0Z" fill="url(#aiGrad)" />
                        <path d="M0 50 Q30 45 60 38 T120 25 T180 18 T240 8" fill="none" stroke="#22c55e" strokeWidth="2" />
                    </svg>
                </div>
                <div className="is-aianalytics-actions">
                    <button className="is-aianalytics-btn">View Details</button>
                    <button className="is-aianalytics-btn primary">Take Action →</button>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 17-E. Modular Widget Dashboard
const ModularDashboard = () => (
    <ShowcaseCard
        title="Modular Dashboard 模块化拖拽仪表盘"
        description="可定制 Widget + 角色化视图 + 拖拽布局，每个用户看到最相关的信息"
        tags={['industry:SaaS', 'modular', 'drag-drop', 'widget']}
    >
        <div className="is-modular-scene">
            <div className="is-modular-grid">
                <div className="is-modular-widget w1">
                    <div className="is-modular-wh"><span className="is-modular-grip">⋮⋮</span> Revenue</div>
                    <div className="is-modular-wv">$48.2k</div>
                    <div className="is-modular-ws up">+12.5%</div>
                </div>
                <div className="is-modular-widget w2">
                    <div className="is-modular-wh"><span className="is-modular-grip">⋮⋮</span> Users</div>
                    <div className="is-modular-wv">1,247</div>
                    <div className="is-modular-ws up">+8.3%</div>
                </div>
                <div className="is-modular-widget w3">
                    <div className="is-modular-wh"><span className="is-modular-grip">⋮⋮</span> Tasks</div>
                    <div className="is-modular-mini-bars">
                        <div style={{height:'60%'}} /><div style={{height:'80%'}} /><div style={{height:'45%'}} />
                        <div style={{height:'90%'}} /><div style={{height:'70%'}} /><div style={{height:'55%'}} />
                    </div>
                </div>
                <div className="is-modular-widget w4 wide">
                    <div className="is-modular-wh"><span className="is-modular-grip">⋮⋮</span> Activity Feed</div>
                    <div className="is-modular-feed">
                        <div className="is-modular-feed-item"><span className="is-modular-feed-dot blue" />Deploy v2.4.1 completed</div>
                        <div className="is-modular-feed-item"><span className="is-modular-feed-dot green" />New signup: Acme Corp</div>
                        <div className="is-modular-feed-item"><span className="is-modular-feed-dot orange" />Alert: API latency spike</div>
                    </div>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 18-E. Story-Driven SaaS Hero
const StoryDrivenHero = () => (
    <ShowcaseCard
        title="Story-Driven Hero 叙事型产品首屏"
        description="3 秒讲清产品价值——从静态标语到交互式故事驱动的首屏体验"
        tags={['industry:SaaS', 'hero', 'narrative', 'landing']}
    >
        <div className="is-story-scene">
            <div className="is-story-card">
                <div className="is-story-nav">
                    <span className="is-story-brand">◈ FlowStack</span>
                    <div className="is-story-links"><span>Product</span><span>Pricing</span><span>Docs</span></div>
                    <button className="is-story-cta-sm">Sign Up</button>
                </div>
                <div className="is-story-hero">
                    <div className="is-story-headline">Build workflows<br /><span className="is-story-gradient">10x faster</span></div>
                    <div className="is-story-sub">From idea to production in minutes, not months.</div>
                    <div className="is-story-ctas">
                        <button className="is-story-cta primary">Start Building →</button>
                        <button className="is-story-cta ghost">Watch Demo</button>
                    </div>
                </div>
                <div className="is-story-social">
                    <span>⭐ 4.9/5 on G2</span>
                    <span>·</span>
                    <span>2,000+ teams</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

/* ── Blog & Content ── */

// 13. Tech Blog — Developer / Hacker Aesthetic
const TechBlog = () => (
    <ShowcaseCard
        title="Tech Blog 科技/开发者博客"
        description="等宽字体 + 代码高亮 + 暗色终端感，面向工程师的极客阅读体验"
        tags={['industry:Blog', 'tech', 'developer', 'monospace']}
    >
        <div className="is-techblog-scene">
            <div className="is-techblog-card">
                <div className="is-techblog-topbar">
                    <span className="is-techblog-logo">&gt;_ devlog</span>
                    <div className="is-techblog-nav">
                        <span className="active">Posts</span><span>Tags</span><span>About</span>
                    </div>
                </div>
                <article className="is-techblog-post">
                    <div className="is-techblog-meta">
                        <span className="is-techblog-date">2026-04-01</span>
                        <span className="is-techblog-tag">React</span>
                        <span className="is-techblog-tag">Performance</span>
                    </div>
                    <h2 className="is-techblog-title">Why We Ditched Virtual DOM</h2>
                    <p className="is-techblog-excerpt">A deep dive into fine-grained reactivity and how signals changed our architecture...</p>
                    <div className="is-techblog-code">
                        <span className="kw">const</span> <span className="fn">signal</span> = <span className="fn">createSignal</span>(<span className="num">0</span>);
                    </div>
                    <div className="is-techblog-footer">
                        <span>5 min read</span>
                        <span>·</span>
                        <span>2.4k views</span>
                    </div>
                </article>
            </div>
        </div>
    </ShowcaseCard>
);

// 14. Humanities Blog — Literary / Cultural
const HumanitiesBlog = () => (
    <ShowcaseCard
        title="Humanities Blog 人文/文学博客"
        description="衬线字体 + 大面积暖色留白 + 书页质感，沉浸式长文阅读体验"
        tags={['industry:Blog', 'humanities', 'literary', 'serif']}
    >
        <div className="is-humanities-scene">
            <div className="is-humanities-card">
                <div className="is-humanities-header">
                    <span className="is-humanities-pub">拾光集</span>
                    <span className="is-humanities-issue">Vol. 37 · 春日号</span>
                </div>
                <div className="is-humanities-divider" />
                <h2 className="is-humanities-title">论山水间的<br />永恒与瞬息</h2>
                <p className="is-humanities-body">
                    我们在旅途中追寻的，从不是目的地本身，而是某种在行走中才浮现的、关于自我的理解。正如本雅明笔下的漫游者……
                </p>
                <div className="is-humanities-meta">
                    <span>苏拾 · 2026 春</span>
                    <span className="is-humanities-link">阅读全文 →</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 15. Lifestyle / Photography Blog
const LifestyleBlog = () => (
    <ShowcaseCard
        title="Lifestyle Blog 生活方式/摄影博客"
        description="大图铺满 + 极细无衬线字体 + 卡片瀑布流，视觉驱动的灵感展示"
        tags={['industry:Blog', 'lifestyle', 'photography', 'visual']}
    >
        <div className="is-lifestyle-scene">
            <div className="is-lifestyle-grid">
                <div className="is-lifestyle-card tall">
                    <div className="is-lifestyle-img gradient-1" />
                    <div className="is-lifestyle-overlay">
                        <span className="is-lifestyle-cat">Travel</span>
                        <h3>Kyoto in Spring</h3>
                    </div>
                </div>
                <div className="is-lifestyle-card">
                    <div className="is-lifestyle-img gradient-2" />
                    <div className="is-lifestyle-overlay">
                        <span className="is-lifestyle-cat">Food</span>
                        <h3>Morning Ritual</h3>
                    </div>
                </div>
                <div className="is-lifestyle-card">
                    <div className="is-lifestyle-img gradient-3" />
                    <div className="is-lifestyle-overlay">
                        <span className="is-lifestyle-cat">Design</span>
                        <h3>Studio Tour</h3>
                    </div>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

// 16. Indie / Personal Blog
const IndieBlog = () => (
    <ShowcaseCard
        title="Indie Blog 独立/个人博客"
        description="手写感 + 不规则排版 + 个性色彩，反模板的独立创作者主页"
        tags={['industry:Blog', 'indie', 'personal', 'creative']}
    >
        <div className="is-indie-scene">
            <div className="is-indie-card">
                <div className="is-indie-sticker s1">✦</div>
                <div className="is-indie-sticker s2">hey!</div>
                <div className="is-indie-name">小雷的杂货铺</div>
                <div className="is-indie-tagline">写代码、画画、偶尔发呆</div>
                <div className="is-indie-posts">
                    <div className="is-indie-post">
                        <span className="is-indie-post-dot" />
                        <div>
                            <div className="is-indie-post-title">搬家到新框架了！</div>
                            <div className="is-indie-post-date">3 天前</div>
                        </div>
                    </div>
                    <div className="is-indie-post">
                        <span className="is-indie-post-dot" />
                        <div>
                            <div className="is-indie-post-title">读《百年孤独》的第三遍</div>
                            <div className="is-indie-post-date">1 周前</div>
                        </div>
                    </div>
                    <div className="is-indie-post">
                        <span className="is-indie-post-dot" />
                        <div>
                            <div className="is-indie-post-title">周末骑行 120km 记录</div>
                            <div className="is-indie-post-date">2 周前</div>
                        </div>
                    </div>
                </div>
                <div className="is-indie-footer">
                    <span className="is-indie-link">RSS</span>
                    <span className="is-indie-link">GitHub</span>
                    <span className="is-indie-link">Twitter</span>
                </div>
            </div>
        </div>
    </ShowcaseCard>
);

/* ═══════════════════════════════════════════════════════
   Page Layout
   ═══════════════════════════════════════════════════════ */

const industries = [
    { id: 'all', label: 'All Industries', zh: '全部行业' },
    { id: 'logistics', label: 'Logistics & Infra', zh: '物流与基建' },
    { id: 'finance', label: 'Finance & Crypto', zh: '金融与加密' },
    { id: 'ecommerce', label: 'E-Commerce & Retail', zh: '商业与电商' },
    { id: 'saas', label: 'SaaS & B2B', zh: '企业级服务' },
    { id: 'blog', label: 'Blog & Content', zh: '博客与内容' },
];

const industryDemos = [
    { industry: 'logistics', el: <HighDensityDashboard key="density" /> },
    { industry: 'logistics', el: <IndustrialConsole key="console" /> },
    { industry: 'logistics', el: <BlueprintTracking key="blueprint" /> },
    { industry: 'finance', el: <FinTechMinimalist key="fintech" /> },
    { industry: 'finance', el: <PremiumMetallic key="premium" /> },
    { industry: 'finance', el: <Web3Iridescent key="web3" /> },
    { industry: 'ecommerce', el: <EditorialMagazine key="editorial" /> },
    { industry: 'ecommerce', el: <LuxuryBlank key="luxury" /> },
    { industry: 'ecommerce', el: <DynamicPromotional key="promo" /> },
    { industry: 'saas', el: <CleanCorporate key="corp" /> },
    { industry: 'saas', el: <HighContrastAccessible key="a11y" /> },
    { industry: 'saas', el: <SaaSGradient key="saas" /> },
    { industry: 'saas', el: <AICopilotChat key="aichat" /> },
    { industry: 'saas', el: <DevFirstDark key="devdark" /> },
    { industry: 'saas', el: <WarmProductivity key="warm" /> },
    { industry: 'saas', el: <AIAnalytics key="aianalytics" /> },
    { industry: 'saas', el: <ModularDashboard key="modular" /> },
    { industry: 'saas', el: <StoryDrivenHero key="story" /> },
    { industry: 'blog', el: <TechBlog key="techblog" /> },
    { industry: 'blog', el: <HumanitiesBlog key="humanities" /> },
    { industry: 'blog', el: <LifestyleBlog key="lifestyle" /> },
    { industry: 'blog', el: <IndieBlog key="indie" /> },
];

const IndustryStyles = () => {
    const [active, setActive] = useState('all');
    const filtered = active === 'all' ? industryDemos : industryDemos.filter(d => d.industry === active);

    return (
        <div className="webfx-page animate-fade-in vs-page">
            <div className="vs-hero is-hero">
                <div className="vs-hero-glow g1 is-g1" />
                <div className="vs-hero-glow g2 is-g2" />
                <motion.div
                    className="vs-hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="vs-hero-tag">B. Industry Expressive</span>
                    <h1 className="vs-hero-title is-title">Industry Styles</h1>
                    <p className="vs-hero-subtitle">行业专属风 — 22 种垂直行业视觉体系</p>
                </motion.div>
                <motion.div
                    className="vs-filters"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {industries.map(s => (
                        <button key={s.id} className={`vs-filter ${active === s.id ? 'active' : ''}`} onClick={() => setActive(s.id)}>
                            {s.label} <span className="zh">{s.zh}</span>
                        </button>
                    ))}
                </motion.div>
            </div>
            <div className="vs-grid">
                <AnimatePresence mode="popLayout">
                    {filtered.map((d, i) => (
                        <motion.div
                            key={d.industry + i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {d.el}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default IndustryStyles;
