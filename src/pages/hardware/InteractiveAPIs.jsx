import React, { useState } from 'react';
import { Camera, MapPin, ScanLine, Smartphone } from 'lucide-react';
import './InteractiveAPIs.css';

const InteractiveAPIs = () => {
    const [cameraActive, setCameraActive] = useState(false);
    const [clipboardData, setClipboardData] = useState('');
    const [gpsLoading, setGpsLoading] = useState(false);
    const [location, setLocation] = useState(null);

    const simulateVibrate = () => {
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        // Visual feedback for web since vibration is often not supported on desktop
        const btn = document.getElementById('vibrate-btn');
        if (btn) {
            btn.classList.add('shake-anim');
            setTimeout(() => btn.classList.remove('shake-anim'), 300);
        }
    };

    const simulateGeolocation = () => {
        setGpsLoading(true);
        setTimeout(() => {
            setLocation({ lat: '31.2304° N', lng: '121.4737° E', city: '上海市' });
            setGpsLoading(false);
        }, 1500);
    };

    const readClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setClipboardData(text || '剪贴板为空');
        } catch (err) {
            setClipboardData('无法读取，请确保已授予剪贴板权限或手动输入。');
        }
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="glass-panel header-panel" tabIndex="0">
                <h3 className="section-title">硬件交互与开放 API</h3>
                <p className="section-desc">
                    模拟微信小程序能够调用的手机底层硬件能力，如相机预览、震动反馈、GPS定位及系统剪贴板读取。
                </p>
            </div>

            <div className="demo-grid">
                {/* Camera & Scan Demo */}
                <div className="glass-panel demo-card" style={{ gridColumn: '1 / -1' }}>
                    <div className="demo-header">
                        <h4><code>wx.scanCode / wx.createCameraContext</code></h4>
                        <span className="demo-badge">实时视觉输入</span>
                    </div>
                    <div className="demo-content">
                        <div className={`camera-view-container ${cameraActive ? 'active' : ''}`}>
                            {!cameraActive ? (
                                <div className="camera-placeholder" onClick={() => setCameraActive(true)}>
                                    <div className="pulse-circle">
                                        <Camera size={48} color="rgba(255,255,255,0.4)" />
                                    </div>
                                    <p>点击开启扫码模拟</p>
                                </div>
                            ) : (
                                <div className="simulated-camera-feed">
                                    <div className="scan-line-anim"></div>
                                    <div className="scan-corners">
                                        <span className="top-left"></span><span className="top-right"></span>
                                        <span className="bottom-left"></span><span className="bottom-right"></span>
                                    </div>
                                    <button className="close-camera-btn" onClick={() => setCameraActive(false)}>关闭相机</button>
                                    <p className="scan-hint">请将条形码/二维码放入框内</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Location Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>wx.getLocation</code></h4>
                        <span className="demo-badge">地理位置服务</span>
                    </div>
                    <div className="demo-content" style={{ flexDirection: 'column' }}>
                        <div className="location-display">
                            {!location ? (
                                <div className="loc-empty">
                                    <MapPin size={32} opacity={0.5} />
                                    <span>尚未获取位置</span>
                                </div>
                            ) : (
                                <div className="loc-data fade-in-up">
                                    <h3>{location.city}</h3>
                                    <p>Lat: {location.lat}</p>
                                    <p>Lng: {location.lng}</p>
                                </div>
                            )}
                        </div>
                        <button
                            className={`premium-btn ${gpsLoading ? 'secondary' : 'primary'}`}
                            style={{ marginTop: '16px' }}
                            onClick={simulateGeolocation}
                            disabled={gpsLoading}
                        >
                            <MapPin size={16} />
                            {gpsLoading ? '定位中...' : '模拟获取位置'}
                        </button>
                    </div>
                </div>

                {/* Device/Clipboard Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>System Interfaces</code></h4>
                        <span className="demo-badge">系统剪贴板 & 震动</span>
                    </div>
                    <div className="demo-content" style={{ flexDirection: 'column', gap: '16px' }}>

                        <div className="clipboard-area">
                            <input type="text" className="premium-input code-input" placeholder="剪贴板内容..." value={clipboardData} readOnly />
                            <button className="icon-btn" onClick={readClipboard} title="读取剪贴板">
                                <ScanLine size={18} />
                            </button>
                        </div>

                        <button id="vibrate-btn" className="premium-btn secondary" onClick={simulateVibrate}>
                            <Smartphone size={16} /> 触发短震动反馈
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveAPIs;
