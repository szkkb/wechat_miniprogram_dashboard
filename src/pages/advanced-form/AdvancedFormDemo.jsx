import React, { useState, useRef, useEffect } from 'react';
import DemoCard from '../../components/Common/DemoCard';
import './AdvancedForm.css';

const AdvancedFormDemo = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const [errorState, setErrorState] = useState(false);
    const [logs, setLogs] = useState([]);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const CODE_LENGTH = 4;

    const handleChange = (index, e) => {
        const val = e.target.value.replace(/\D/g, ''); // Numbers only
        if (val) {
            const newCode = [...code];
            newCode[index] = val.slice(-1); // Take last char
            setCode(newCode);
            setErrorState(false);

            // Move to next
            if (index < CODE_LENGTH - 1) {
                inputRefs[index + 1].current?.focus();
            } else if (newCode.join('').length === CODE_LENGTH) {
                // Submit
                verifyCode(newCode.join(''));
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            const newCode = [...code];
            if (code[index]) {
                newCode[index] = '';
                setCode(newCode);
            } else if (index > 0) {
                inputRefs[index - 1].current?.focus();
                // We don't wipe the previous one immediately to let user see it, just move focus
            }
            setErrorState(false);
        }
    };

    const verifyCode = (fullCode) => {
        setLogs(prev => [...prev.slice(-4), `提交验证码: ${fullCode}`]);
        // Fake Validation: fail if it's not '123456'
        if (fullCode !== '1234') {
            setTimeout(() => {
                setErrorState(true);
                setLogs(prev => [...prev.slice(-4), `验证失败: 验证码错误`]);
            }, 400);
        } else {
            setLogs(prev => [...prev.slice(-4), `验证成功! ✅`]);
        }
    };

    const resetCode = () => {
        setCode(['', '', '', '']);
        setErrorState(false);
        inputRefs[0].current?.focus();
        setLogs(prev => [...prev.slice(-4), `重置验证码阵区`]);
    };

    return (
        <div className="page-container animate-fade-in">
            <div className="glass-panel header-panel" tabIndex="0">
                <h3 className="section-title">高阶表单与控制 (Advanced Form)</h3>
                <p className="section-desc">
                    覆盖需要复杂校验、多级联动或特定防窥输入键盘的高级录入组件表现。
                </p>
            </div>

            <div className="demo-grid">
                <DemoCard
                    title="四位验证码输入矩阵"
                    codeId="Pattern: AF-Captcha"
                    badge="连贯焦点跳跃"
                    description="独立方块矩阵，键入数字后自动连贯跃迁至下一格；最后一位输入完成自动触发异步提交验证方案。包含摇晃警示视觉传达。"
                    mockPhone={false}
                    controls={
                        <button className="premium-btn secondary" onClick={resetCode} style={{ width: 'auto', padding: '8px 16px' }}>
                            清空并重新测试 (密码: 1234)
                        </button>
                    }
                    logs={logs}
                >
                    <div className="captcha-container">
                        <div className="captcha-header">
                            <h4>请输入短信验证码</h4>
                            <p>已发送至 +86 138****0000</p>
                        </div>

                        <div className={`captcha-grid ${errorState ? 'shake-error' : ''}`}>
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={inputRefs[index]}
                                    type="number"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className={`captcha-box ${digit ? 'filled' : ''} ${errorState ? 'error' : ''}`}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    maxLength={2} // Allow a bit of leeway for fast typing then slice it
                                />
                            ))}
                        </div>

                        {errorState && (
                            <div className="captcha-msg error-msg animate-fade-in">
                                验证码错误，请重新输入
                            </div>
                        )}
                    </div>
                </DemoCard>
            </div>
        </div>
    );
};

export default AdvancedFormDemo;
