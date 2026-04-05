import React, { useState } from 'react';
import { Smartphone, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import DemoCard from '../../components/Common/DemoCard';
import PageIntroPanel from '../../components/Common/PageIntroPanel';
import './EcosystemPermissions.css';

const EcosystemPermissionsDemo = () => {
    const [loginPanelOpen, setLoginPanelOpen] = useState(false);
    const [policyAgreed, setPolicyAgreed] = useState(false);
    const [shakePolicy, setShakePolicy] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [logs, setLogs] = useState([]);

    const handleLoginClick = () => {
        if (!policyAgreed) {
            setShakePolicy(true);
            setTimeout(() => setShakePolicy(false), 400); // Remove class after anim
            setLogs(prev => [...prev.slice(-4), `拦截: 用户未勾选隐私协议`]);
            return;
        }

        // Simulating the Native bottom sheet popping up to select phone number
        setLogs(prev => [...prev.slice(-4), `唤起系统原生 Phone Number 选择面板...`]);
        setTimeout(() => {
            setLogs(prev => [...prev.slice(-4), `获取加密手机号成功 ✅`]);
            setIsLoggedIn(true);
            setLoginPanelOpen(false);
        }, 1200);
    };

    const restartDemo = () => {
        setIsLoggedIn(false);
        setPolicyAgreed(false);
        setLoginPanelOpen(false);
        setLogs(prev => [...prev.slice(-4), `重置登录态，清空授权凭证`]);
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="demo-grid">
                <DemoCard
                    title="新版安全快捷登录"
                    codeId="Pattern: ECO-Login"
                    badge="阻断/掩膜唤起"
                    description="被安全机制拦截时的静默授权面板。未勾选协议将触发震动提示，点击手机号一键登录会模拟唤起原生号段选择。"
                    mockPhone={true}
                    controls={
                        <button className="premium-btn secondary" onClick={restartDemo} style={{ width: '100%' }}>
                            退出登录态 / 重新体验拦截
                        </button>
                    }
                    logs={logs}
                >
                    <div className="eco-demo-container">

                        {/* Background App Content */}
                        <div className="mock-app-header">
                            <div className="mock-avatar"></div>
                            <div className="mock-name">{isLoggedIn ? 'Jeremy 的账户' : '访客'}</div>
                        </div>

                        <div className="mock-app-body">
                            <button
                                className="premium-btn primary"
                                style={{ marginTop: '40px', width: '80%' }}
                                onClick={() => {
                                    if (isLoggedIn) {
                                        setLogs(prev => [...prev.slice(-4), `已登录，准许进入核心业务...`]);
                                    } else {
                                        setLoginPanelOpen(true);
                                        setLogs(prev => [...prev.slice(-4), `触发拦截: 弹射出 Login 面板`]);
                                    }
                                }}
                            >
                                点击进入“我的钱包”核心区
                            </button>
                        </div>

                        {/* Login Intercept Overlay */}
                        <div className={`login-overlay ${loginPanelOpen ? 'active' : ''}`} onClick={() => setLoginPanelOpen(false)}></div>
                        <div className={`login-panel ${loginPanelOpen ? 'open' : ''}`}>
                            <div className="lp-close" onClick={() => setLoginPanelOpen(false)}><X size={18} /></div>
                            <div className="lp-brand">
                                <div className="lp-logo">WeUI</div>
                                <h3>WeUI Dashboard <br />申请获取并验证您的手机号</h3>
                            </div>

                            <button className="premium-btn primary lp-btn-login" onClick={handleLoginClick}>
                                手机号快捷登录
                            </button>
                            <button className="premium-btn secondary lp-btn-other" onClick={() => setLogs(prev => [...prev.slice(-4), `使用验证码或密码登录`])}>
                                其他手机号登录
                            </button>

                            <div className={`lp-policy ${shakePolicy ? 'shake-alert' : ''}`}>
                                <label className="policy-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={policyAgreed}
                                        onChange={(e) => setPolicyAgreed(e.target.checked)}
                                    />
                                    <span className="checkmark"><CheckCircle2 size={12} strokeWidth={3} /></span>
                                </label>
                                <span className="policy-text">我已阅读并同意《服务协议》及《隐私保护指引》</span>
                            </div>
                        </div>

                    </div>
                </DemoCard>
            </div>

            <PageIntroPanel title="生态互动与隐私机制 (Ecosystem & Permissions)" description="展现特有的系统授权链路设计与实名操作拦截的模拟体验。" />
        </div>
    );
};

export default EcosystemPermissionsDemo;
