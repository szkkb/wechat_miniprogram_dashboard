import React, { useState, useMemo } from 'react';
import { ChevronDown, Check, X, Search } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './CountryPicker.css';

const COUNTRIES = [
    { code: 'US', flag: '🇺🇸', name: '美国', time: '7–12天', routes: ['空运', '海运'] },
    { code: 'CA', flag: '🇨🇦', name: '加拿大', time: '10–15天', routes: ['空运'] },
    { code: 'GB', flag: '🇬🇧', name: '英国', time: '7–14天', routes: ['空运', '海运'] },
    { code: 'AU', flag: '🇦🇺', name: '澳大利亚', time: '10–16天', routes: ['空运'] },
    { code: 'DE', flag: '🇩🇪', name: '德国', time: '8–14天', routes: ['空运', '海运'] },
    { code: 'FR', flag: '🇫🇷', name: '法国', time: '9–15天', routes: ['空运'] },
    { code: 'JP', flag: '🇯🇵', name: '日本', time: '5–10天', routes: ['空运', '海运'] },
    { code: 'KR', flag: '🇰🇷', name: '韩国', time: '5–9天', routes: ['空运'] },
    { code: 'SG', flag: '🇸🇬', name: '新加坡', time: '7–12天', routes: ['空运'] },
    { code: 'MY', flag: '🇲🇾', name: '马来西亚', time: '8–14天', routes: ['空运'] },
    { code: 'NL', flag: '🇳🇱', name: '荷兰', time: '9–14天', routes: ['空运', '海运'] },
    { code: 'IT', flag: '🇮🇹', name: '意大利', time: '10–16天', routes: ['空运'] },
];

const CountryPickerDemo = () => {
    const [selected, setSelected] = useState(COUNTRIES[0]);
    const [sheetOpen, setSheetOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [logs, setLogs] = useState([]);

    const filtered = useMemo(
        () => COUNTRIES.filter(c => c.name.includes(query) || c.code.toLowerCase().includes(query.toLowerCase())),
        [query]
    );

    const handleSelect = (country) => {
        setSelected(country);
        setSheetOpen(false);
        setQuery('');
        setLogs(prev => [...prev.slice(-4), `picker onChange: { code: "${country.code}", name: "${country.name}" }`]);
    };

    const handleOpenSheet = () => {
        setSheetOpen(true);
        setLogs(prev => [...prev.slice(-4), `bindtap → 唤起国家选择 draggable-sheet`]);
    };

    return (
        <div className="page-container animate-fade-in cp-page-wrapper">
            <PageIntroPanel title="导航与布局 (Navigation)" description="通过 draggable-sheet 实现物流目的国选择器，内含搜索过滤与时效展示，比 picker 原生选择器体验更丰富。" />

            <div className="demo-grid">
                <DemoCard
                    title="国家目的地选择器"
                    codeId="Pattern: NL-CountryPicker"
                    badge="draggable-sheet"
                    description="点击目的国标签唤起底部半屏面板，支持模糊搜索过滤，选中即关闭并同步主界面。相比 <picker> 可附加时效标签和运输方式徽章，帮助用户做决策。"
                    mockPhone={true}
                    logs={logs}
                >
                    <div className="cp-screen">
                        {/* Mock home page content */}
                        <div className="cp-mock-home">
                            <div className="cp-topbar">
                                <span className="cp-title">萧船长</span>
                                <div className="cp-topbar-right">
                                    <div className="cp-icon-dot">···</div>
                                </div>
                            </div>

                            <div className="cp-banner">
                                🚚 中国寄往全球 10+ 国
                            </div>

                            <div className="cp-section-label">寄到哪里</div>

                            {/* Country Selector Trigger */}
                            <button className="cp-country-trigger" onClick={handleOpenSheet}>
                                <span className="cp-flag">{selected.flag}</span>
                                <span className="cp-country-name">{selected.name}</span>
                                <ChevronDown size={16} className="cp-chevron" />
                            </button>

                            {/* Action Buttons */}
                            <div className="cp-action-row">
                                <button className="cp-btn-primary">
                                    <span className="cp-btn-title">查运费</span>
                                    <span className="cp-btn-sub">价格·时效·能寄啥</span>
                                </button>
                                <button className="cp-btn-outline">
                                    <span className="cp-btn-title">开始寄件</span>
                                    <span className="cp-btn-sub">预报包裹</span>
                                </button>
                            </div>

                            {/* Time info bar */}
                            <div className="cp-time-bar">
                                <span className="cp-time-item">
                                    <span>{selected.flag}</span>
                                    <span>{selected.time}</span>
                                </span>
                                {selected.routes.map(r => (
                                    <span key={r} className="cp-route-badge">{r}</span>
                                ))}
                            </div>

                            {/* Warehouse Address Card */}
                            <div className="cp-section-label" style={{ marginTop: 16 }}>转运仓地址</div>
                            <div className="cp-warehouse-card">
                                <div className="cp-warehouse-header">
                                    <span className="cp-warehouse-icon">📦</span>
                                    <span className="cp-warehouse-name">广东仓</span>
                                    <button className="cp-copy-btn">复制</button>
                                </div>
                                <div className="cp-warehouse-addr">广东省广州市白云区太和镇大源街XX号</div>
                                <div className="cp-warehouse-contact">收件人：XXX　电话：138-XXXX-XXXX</div>
                            </div>

                            {/* Stats Row */}
                            <div className="cp-stats-row">
                                <span className="cp-stat-icon">✅</span>
                                <span className="cp-stat-text">已帮助 <strong>12,847</strong> 位用户寄出包裹</span>
                            </div>

                            {/* Recent Shipments */}
                            <div className="cp-section-label" style={{ marginTop: 16 }}>最近包裹</div>
                            {[
                                { id: 'MX202401001', status: '运输中', dest: '美国', color: '#1a3d8f' },
                                { id: 'MX202312988', status: '已签收', dest: '英国', color: '#16a34a' },
                                { id: 'MX202312801', status: '已揽件', dest: '加拿大', color: '#d97706' },
                            ].map(pkg => (
                                <div key={pkg.id} className="cp-package-row">
                                    <div className="cp-package-info">
                                        <span className="cp-package-id">{pkg.id}</span>
                                        <span className="cp-package-dest">→ {pkg.dest}</span>
                                    </div>
                                    <span className="cp-package-status" style={{ color: pkg.color }}>{pkg.status}</span>
                                </div>
                            ))}

                            {/* Bottom spacing */}
                            <div style={{ height: 40 }} />

                            {/* ── draggable-sheet overlay ── */}
                            <div
                                className={`cp-overlay ${sheetOpen ? 'active' : ''}`}
                                onClick={() => { setSheetOpen(false); setQuery(''); }}
                            />

                            {/* ── draggable-sheet panel ── */}
                            <div className={`cp-sheet ${sheetOpen ? 'open' : ''}`}>
                                {/* Handle bar */}
                                <div className="cp-sheet-handle-row">
                                    <div className="cp-sheet-handle" />
                                    <button className="cp-sheet-close" onClick={() => { setSheetOpen(false); setQuery(''); }}>
                                        <X size={16} />
                                    </button>
                                </div>

                                <div className="cp-sheet-title">选择目的国</div>

                                {/* Search bar */}
                                <div className="cp-search-bar">
                                    <Search size={14} className="cp-search-icon" />
                                    <input
                                        className="cp-search-input"
                                        placeholder="搜索国家..."
                                        value={query}
                                        onChange={e => setQuery(e.target.value)}
                                    />
                                    {query && (
                                        <button className="cp-search-clear" onClick={() => setQuery('')}>
                                            <X size={12} />
                                        </button>
                                    )}
                                </div>

                                {/* Country list */}
                                <div className="cp-country-list">
                                    {filtered.length === 0 && (
                                        <div className="cp-empty">未找到匹配的国家</div>
                                    )}
                                    {filtered.map(c => (
                                        <button
                                            key={c.code}
                                            className={`cp-country-row ${selected.code === c.code ? 'selected' : ''}`}
                                            onClick={() => handleSelect(c)}
                                        >
                                            <span className="cp-row-flag">{c.flag}</span>
                                            <div className="cp-row-info">
                                                <span className="cp-row-name">{c.name}</span>
                                                <div className="cp-row-badges">
                                                    <span className="cp-badge-time">{c.time}</span>
                                                    {c.routes.map(r => (
                                                        <span key={r} className="cp-badge-route">{r}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            {selected.code === c.code && (
                                                <Check size={16} className="cp-check" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </DemoCard>
            </div>
        </div>
    );
};

export default CountryPickerDemo;
