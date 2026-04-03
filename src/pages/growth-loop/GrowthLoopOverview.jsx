import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Wrench, ArrowRight } from 'lucide-react';
import './GrowthLoopOverview.css';

const Section = ({ icon, title, subtitle, items, delay }) => (
    <motion.div className="glo-section"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
        <div className="glo-section-header">
            <div className="glo-section-icon">{icon}</div>
            <div>
                <h2 className="glo-section-title">{title}</h2>
                <p className="glo-section-sub">{subtitle}</p>
            </div>
        </div>
        <div className="glo-items">
            {items.map(item => (
                <Link key={item.path} to={item.path} className="glo-item">
                    <span className="glo-item-zh">{item.zh}</span>
                    <span className="glo-item-en">{item.en}</span>
                    <ArrowRight size={12} className="glo-item-arrow" />
                </Link>
            ))}
        </div>
    </motion.div>
);

const GrowthLoopOverview = () => (
    <div className="glo-page animate-fade-in">
        <motion.div className="glo-hero"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="glo-title">Growth Loop 学习</h1>
            <p className="glo-subtitle">
                增长飞轮方法论 — 从理论到实践的系统学习路径
            </p>
            <p className="glo-desc">
                Growth Loop 是一种比传统 AARRR 漏斗更先进的增长框架。
                用户行为不是线性的"漏斗"，而是循环的"飞轮"——
                每一个用户的产出都能成为下一个用户的输入，形成复利增长。
            </p>
        </motion.div>

        <Section
            icon={<BarChart3 size={20} />}
            title="交互式可视化"
            subtitle="三种视角理解 Growth Loop 结构"
            delay={0.1}
            items={[
                { zh: '学习大纲', en: 'Phase Outline', path: '/growth-loop/outline' },
                { zh: '生命周期图', en: 'Lifecycle Phases', path: '/growth-loop/lifecycle' },
                { zh: '关键词图谱', en: 'Keyword Map', path: '/growth-loop/keyword-map' },
            ]}
        />

        <Section
            icon={<BookOpen size={20} />}
            title="核心学习内容"
            subtitle="Phase 1 基础理论 — 约 2 小时完成"
            delay={0.2}
            items={[
                { zh: '学习路径', en: 'Learning Roadmap', path: '/growth-loop/roadmap' },
                { zh: '范式转换：漏斗 vs 飞轮', en: 'Paradigm Shift', path: '/growth-loop/paradigm-shift' },
                { zh: '循环解剖：四步结构', en: 'Loop Anatomy', path: '/growth-loop/loop-anatomy' },
                { zh: '术语表', en: 'Glossary', path: '/growth-loop/glossary' },
            ]}
        />

        <Section
            icon={<Wrench size={20} />}
            title="实践工具"
            subtitle="模板 + 画布，直接用于你的业务"
            delay={0.3}
            items={[
                { zh: '循环设计画布', en: 'Loop Design Canvas', path: '/growth-loop/design-canvas' },
                { zh: '商业画布', en: 'Business Canvas', path: '/growth-loop/business-canvas' },
                { zh: '实验模板', en: 'Experiment Template', path: '/growth-loop/experiment' },
            ]}
        />
    </div>
);

export default GrowthLoopOverview;
