import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, ChevronDown, Map, Phone, Copy, Check, Navigation, MapPin } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './Timeline.css';

const TimelineDemo = () => {
    const [expanded, setExpanded] = useState(false);
    const [copied, setCopied] = useState(false);
    const [logs, setLogs] = useState([]);

    // Detailed Mock Data based on standard logistics tracking
    const events = [
        { id: 1, title: '已签收', desc: '您的包裹已由【家人】代签收，感谢您使用顺丰速运，期待再次为您服务。', time: '今天 14:30', icon: <CheckCircle2 size={16} />, status: 'success' },
        { id: 2, title: '派送中', desc: '【深圳市】南山科技园派件员 正在为您派件，请保持电话畅通。', courier: { name: '张师傅', phone: '138 0000 8888' }, time: '今天 09:12', icon: <Truck size={16} />, status: 'active' },
        { id: 3, title: '运输中', desc: '快件已到达【深圳南山集散中心】', time: '昨天 23:45', icon: null, status: 'normal' },
        { id: 4, title: '运输中', desc: '快件已从【广州增城枢纽】发出，准备发往下一个集散中心', time: '昨天 16:20', icon: null, status: 'normal', hidden: !expanded },
        { id: 5, title: '已揽收', desc: '顺丰速运 已收取您的包裹', time: '昨天 10:05', icon: <Package size={16} />, status: 'normal', hidden: !expanded },
        { id: 6, title: '已发货', desc: '包裹正在等待揽收', time: '昨天 09:00', icon: null, status: 'normal', hidden: !expanded }
    ];

    const visibleEvents = events.filter(e => !e.hidden);

    const handleCopy = () => {
        setCopied(true);
        setLogs(prev => [...prev.slice(-4), `触发复制: wx.setClipboardData('SF1029384756')`]);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCall = (name) => {
        setLogs(prev => [...prev.slice(-4), `唤起拨号: wx.makePhoneCall('${name}')`]);
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="demo-grid">
                <DemoCard
                    title="高保真物流追踪轨"
                    codeId="Pattern: DF-Timeline"
                    badge="场景优化"
                    description="结合顶部地图/头图区域、快捷复制按键以及嵌入式的电话拨打动作，展现完美的垂直沉浸式物流架构。"
                    mockPhone={true}
                    controls={
                        <button className="premium-btn secondary" onClick={() => setExpanded(!expanded)} style={{ width: '100%' }}>
                            {expanded ? '收起完整轨迹' : '展开完整轨迹 (加载更多演示)'}
                        </button>
                    }
                    logs={logs}
                >
                    <div className="timeline-container">

                        {/* Fake Map / Logistics Header Banner */}
                        <div className="logistics-map-header">
                            <div className="map-bg-pattern"></div>

                            <div className="logistics-route">
                                <div className="route-point">
                                    <div className="city">广州市</div>
                                    <div className="point-icon origin">发</div>
                                </div>

                                <div className="route-truck-line">
                                    <div className="line-dashed"></div>
                                    <div className="truck-icon-float">
                                        <Truck size={14} />
                                    </div>
                                </div>

                                <div className="route-point">
                                    <div className="city">深圳市</div>
                                    <div className="point-icon dest">收</div>
                                </div>
                            </div>
                            <div className="delivery-status-tag">预计今天送达</div>
                        </div>

                        {/* Order Info Bar */}
                        <div className="timeline-header">
                            <div className="order-info-left">
                                <span className="waybill-label">顺丰单号</span>
                                <span className="waybill">SF1029384756</span>
                            </div>
                            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handleCopy}>
                                {copied ? <><Check size={12} /> 已复制</> : <><Copy size={12} /> 复制</>}
                            </button>
                        </div>

                        {/* Timeline List */}
                        <div className="timeline-list">
                            {visibleEvents.map((event, index) => (
                                <div key={event.id} className={`timeline-item ${event.status} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>

                                    <div className="timeline-tail"></div>
                                    <div className={`timeline-node ${event.icon ? 'has-icon' : ''}`}>
                                        {event.icon ? event.icon : <div className="dot"></div>}
                                    </div>

                                    <div className="timeline-content">
                                        <div className="timeline-title-row">
                                            <h4>{event.title}</h4>
                                            <span className="time">{event.time}</span>
                                        </div>
                                        <p>{event.desc}</p>

                                        {/* Courier Actions embedded in timeline */}
                                        {event.courier && (
                                            <div className="courier-card">
                                                <div className="courier-avatar">
                                                    <span role="img" aria-label="courier">👨‍🔧</span>
                                                </div>
                                                <div className="courier-info">
                                                    <span className="c-name">{event.courier.name}</span>
                                                    <span className="c-phone">{event.courier.phone}</span>
                                                </div>
                                                <button className="call-btn" onClick={() => handleCall(event.courier.name)}>
                                                    <Phone size={14} />
                                                </button>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            ))}
                        </div>

                        {!expanded && (
                            <div className="timeline-more" onClick={() => setExpanded(true)}>
                                点击查看较早的 3 条轨迹 <ChevronDown size={14} />
                            </div>
                        )}
                    </div>
                </DemoCard>
            </div>

            <PageIntroPanel title="数据呈现与反馈 (Data Display)" description="展示列表、状态追踪、步骤指引及复杂的横滑动作单元阵列。" />
        </div>
    );
};

export default TimelineDemo;
