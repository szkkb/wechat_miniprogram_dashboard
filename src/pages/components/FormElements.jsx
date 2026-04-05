import React, { useState } from 'react';
import './FormElements.css';
import PageIntroPanel from '../../components/Common/PageIntroPanel';

const FormElements = () => {
    const [switchState, setSwitchState] = useState(true);
    const [sliderVal, setSliderVal] = useState(65);

    return (
        <div className="page-container animate-fade-in">
            <PageIntroPanel title="表单组件与控件 (Form Elements)" description="带有丰富微交互（涟漪、发光焦点、平滑缓动）的原生小程序表单控件在 Web 端的沉浸式模拟。" />

            <div className="demo-grid">
                {/* Switch Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;switch&gt;</code></h4>
                        <span className="demo-badge">阻尼与阴影反馈</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase">
                            <label className="switch-wrapper">
                                <input
                                    type="checkbox"
                                    checked={switchState}
                                    onChange={(e) => setSwitchState(e.target.checked)}
                                    className="switch-input"
                                />
                                <div className="switch-body">
                                    <div className="switch-handle"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <p className="demo-hint">模拟原生系统级别的开关交互，带有弹性动画与颜色过渡。</p>
                </div>

                {/* Input Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;input&gt;</code></h4>
                        <span className="demo-badge">霓虹溢出变色</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase full-width">
                            <div className="input-group">
                                <label>快递单号</label>
                                <input type="text" placeholder="请输入或扫描运单号..." className="premium-input" />
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">获取焦点时产生玻璃拟物光晕，以及流畅的 Placeholder 平移效果。</p>
                </div>

                {/* Slider Demo */}
                <div className="glass-panel demo-card">
                    <div className="demo-header">
                        <h4><code>&lt;slider&gt;</code></h4>
                        <span className="demo-badge">实时动态反馈</span>
                    </div>
                    <div className="demo-content">
                        <div className="component-showcase full-width">
                            <div className="premium-slider-wrapper">
                                <div className="slider-value" style={{ left: `${sliderVal}%` }}>{sliderVal}</div>
                                <input
                                    type="range"
                                    min="0" max="100"
                                    value={sliderVal}
                                    onChange={(e) => setSliderVal(e.target.value)}
                                    className="premium-slider"
                                />
                                <div
                                    className="slider-track-fill"
                                    style={{ width: `${sliderVal}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <p className="demo-hint">支持自定义轨道、滑块样式，及悬浮气泡值的丝滑滑动条。</p>
                </div>
            </div>
        </div>
    );
};

export default FormElements;
