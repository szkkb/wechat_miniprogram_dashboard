import React, { useState } from 'react';
import { MapPin, Navigation, X, Store } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './MapLBS.css';

const MapLBSDemo = () => {
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [logs, setLogs] = useState([]);

    const markers = [
        { id: 1, name: '南山科技园旗舰店', distance: '1.2km', status: '营业中', x: 30, y: 40 },
        { id: 2, name: '后海自提点', distance: '3.5km', status: '即将打烊', x: 60, y: 70 },
        { id: 3, name: '宝安中心区派送站', distance: '8.1km', status: '休息中', x: 20, y: 80 }
    ];

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
        setLogs(prev => [...prev.slice(-4), `选中地标: ${marker.name}`]);
    };

    const closeDetail = (e) => {
        e.stopPropagation();
        setSelectedMarker(null);
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="demo-grid">
                <DemoCard
                    title="交互式定制地标群"
                    codeId="Pattern: LBS-Markers"
                    badge="视口联动"
                    description="点击 Marker 弹跳并触发下方详情信息卡片的平移轮换进入；在真实的 Map 组件中还会伴随中心视野的平滑偏移聚拢。"
                    mockPhone={true}
                    controls={
                        <button className="premium-btn secondary" onClick={() => setSelectedMarker(null)} style={{ width: '100%' }}>
                            清除选点 / 恢复全局视角
                        </button>
                    }
                    logs={logs}
                >
                    <div className="map-demo-container" onClick={() => setSelectedMarker(null)}>
                        {/* Fake Map Background */}
                        <div className="fake-map-bg"></div>

                        {/* Markers */}
                        {markers.map(marker => {
                            const isSelected = selectedMarker?.id === marker.id;
                            return (
                                <div
                                    key={marker.id}
                                    className={`custom-marker ${isSelected ? 'selected' : ''}`}
                                    style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleMarkerClick(marker);
                                    }}
                                >
                                    <div className="marker-pin">
                                        <Store size={14} />
                                    </div>
                                    <div className="marker-pulse"></div>
                                </div>
                            );
                        })}

                        {/* Bottom Detail Sheet */}
                        <div className={`map-detail-card ${selectedMarker ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                            {selectedMarker && (
                                <>
                                    <div className="detail-header">
                                        <div className="title-row">
                                            <h4>{selectedMarker.name}</h4>
                                            <span className={`status-badge ${selectedMarker.status === '营业中' ? 'open' : ''}`}>
                                                {selectedMarker.status}
                                            </span>
                                        </div>
                                        <button className="close-btn" onClick={closeDetail}><X size={16} /></button>
                                    </div>
                                    <p className="distance-info">距离您当前位置 {selectedMarker.distance}</p>

                                    <div className="action-row">
                                        <button className="premium-btn primary" style={{ flex: 1, padding: '10px' }} onClick={() => setLogs(prev => [...prev.slice(-4), `发起路线规划...`])}>
                                            <Navigation size={16} /> 去这里
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </DemoCard>
            </div>

            <PageIntroPanel title="地图与位置 (Map & LBS)" description="覆盖基于地图容器展开的标记、轨迹及联动选择能力。" />
        </div>
    );
};

export default MapLBSDemo;
