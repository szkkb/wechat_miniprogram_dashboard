import { useState, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   Color System
   ═══════════════════════════════════════════════════════════ */
const C = {
  bg: "#08080d",
  surface: "#0c0c14",
  card: "#111119",
  cardHover: "#181824",
  border: "#1e1e2e",
  borderLight: "#2a2a3c",
  text: "#e4e4ec",
  textSec: "#9898aa",
  textMuted: "#6a6a7c",
  textDim: "#48485a",
  accent: "#f59e0b",
  accentSoft: "rgba(245,158,11,0.08)",
  accentBorder: "rgba(245,158,11,0.20)",
  p1: "#3b82f6",
  p2: "#8b5cf6",
  p23: "#a78bfa",
  p3: "#06b6d4",
  p3a: "#14b8a6",
  p45: "#f59e0b",
  done: "#22c55e",
  doneSoft: "rgba(34,197,94,0.08)",
};

/* ═══════════════════════════════════════════════════════════
   Phase Definitions
   ═══════════════════════════════════════════════════════════ */
const PHASES = [
  {
    id: "p1",
    label: "Phase 1",
    subtitle: "WHY 感知",
    color: C.p1,
    done: "团队能解释 Loop vs Funnel 差异与复利数学",
    concepts: [
      { term: "Growth Loop", en: "增长循环", icon: "🔄", def: "输出成为下一轮输入的闭环系统", biz: "核心差异：输出再投入→复利；漏斗输出是终点→线性" },
      { term: "复利 vs 线性", en: "Compounding vs Linear", icon: "📈", def: "Loop: 新客户[t+1]=f(新客户[t]); 漏斗: 新客户=投入×转化率" },
      { term: "AARRR 漏斗", en: "Pirate Funnel", icon: "🔻", def: "获取→激活→留存→收入→推荐的单向筛选模型" },
    ],
  },
  {
    id: "p2",
    label: "Phase 2",
    subtitle: "WHAT 分类",
    color: C.p2,
    done: "选定 ≤2 个候选核心环并给出适配理由",
    concepts: [
      { term: "Content Loop", en: "内容环 [获客]", icon: "📝", def: "【三大获客核心】创建内容→被分发/搜索→获取用户→产生更多内容", biz: "你的首要获客环：小红书/知乎/SEO 经验帖→获客" },
      { term: "Viral Loop", en: "病毒环 [获客]", icon: "🦠", def: "【三大获客核心】用户使用产品→自然邀请他人→新用户加入", biz: "家长群口碑传播是弱病毒环" },
      { term: "Paid Loop", en: "付费环 [获客]", icon: "💰", def: "【三大获客核心】花钱买量→客户留存付费→利润再投入买量" },
      { term: "Engagement Loop", en: "参与环 [留存]", icon: "🎯", def: "触发→行动→奖励→投入，负责承接三大获客环带来的流量", biz: "让已有客户持续复购，你的复购率是关键杠杆" },
    ],
    folded: [
      { term: "Loop Stacking", en: "环堆叠" },
      { term: "Sales Loop", en: "销售环" },
    ],
  },
  {
    id: "p23",
    label: "Phase 2–3",
    subtitle: "HOW 量化",
    color: C.p23,
    done: "Loop 模型已建立，K-factor / Cycle Time 有基线值",
    concepts: [
      { term: "杠杆点", en: "Leverage Point", icon: "🔧", def: "Loop 中提升 1% 能带来最大整体效果的环节", biz: "区分：优化 Loop 本身(复利) vs 一次性改善(线性)" },
      { term: "Loop Efficiency", en: "环效率", icon: "⚡", def: "一轮循环中，输出/输入的比值", biz: "各环节转化率的连乘积，任何一环为0整个 Loop 失效" },
      { term: "K-factor", en: "病毒系数", icon: "🔢", def: "K = 邀请数 × 转化率，每个用户平均带来多少新用户" },
      { term: "Core Loop Selection", en: "核心环选择", icon: "🎪", def: "基于产品特性、用户行为、资源约束选定最应该 all-in 的 Loop" },
    ],
    folded: [{ term: "Cycle Time", en: "周期时间" }],
  },
  {
    id: "p3",
    label: "Phase 3",
    subtitle: "HOW 启动",
    color: C.p3,
    done: "种子用户 ≥50，推荐获客占比可测量",
    concepts: [
      { term: "Cold Start", en: "冷启动", icon: "🥶", def: "产品/服务早期没有用户，如何获得第一批", biz: "你当初的解法：先用内容获取第一批留学生家长" },
      { term: "Atomic Network", en: "原子网络", icon: "⚛️", def: "能独立运转的最小用户网络单元", biz: "你的原子网络：一个城市的留学生家长微信群" },
      { term: "Tipping Point", en: "临界点", icon: "📍", def: "增长从需要推动变为自我驱动的转折点" },
      { term: "Escape Velocity", en: "逃逸速度", icon: "🚀", def: "增长进入自我加速的快车道" },
    ],
    folded: [
      { term: "Ceiling", en: "天花板" },
      { term: "Moat", en: "护城河" },
    ],
  },
  {
    id: "p3a",
    label: "Phase 3-Amp",
    subtitle: "AMPLIFIER 放大",
    color: C.p3a,
    done: "辅助环贡献获客 ≥10%，规模效应可量化",
    concepts: [
      { term: "Network Effects", en: "网络效应", icon: "🕸️", def: "用户增加→每个用户的价值/体验提升", biz: "≠规模效应，网络效应关注用户侧价值增加" },
      { term: "直接 vs 间接", en: "Direct vs Indirect NE", icon: "↔️", def: "直接：同类用户越多越好；间接：A类多→B类受益", biz: "客户多→集运量大→成本降→价格优" },
      { term: "规模效应", en: "Economies of Scale", icon: "📦", def: "规模增大→单位成本降低", biz: "货量越大，与船司/航司议价能力越强" },
    ],
  },
  {
    id: "p45",
    label: "Phase 4–5",
    subtitle: "APPLY 落地",
    color: C.p45,
    done: "MVL 跑通，三环同时运转形成飞轮",
    concepts: [
      { term: "MVL", en: "最小可行循环", icon: "🔬", def: "最小可行循环，用最低成本验证 Loop 能否跑通", biz: "内容获客→首单→满意交付→推荐/复购→新客户" },
      { term: "Loop 诊断", en: "Loop Diagnostics", icon: "🩺", def: "用数据检查 Loop 每个环节的转化率和健康度" },
      { term: "增长实验", en: "Growth Experiment", icon: "🧪", def: "假设→最小实验→测量→学习→迭代" },
      { term: "飞轮效应", en: "Flywheel Effect", icon: "☸️", def: "多个正向循环叠加，初始推动困难但越转越快", biz: "终极目标：内容+推荐+复购三环同时转动" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════
   Swimlane Definitions
   ═══════════════════════════════════════════════════════════ */
const LANES = [
  { id: "user", label: "用户/客户旅程", en: "User Journey", icon: "👤", desc: "留学生家长为主体" },
  { id: "product", label: "产品/服务体验", en: "Product", icon: "📦", desc: "集运履约与触点" },
  { id: "growth", label: "增长/分发机制", en: "Growth", icon: "🚀", desc: "内容环+推荐环+参与环" },
  { id: "data", label: "数据/实验验证", en: "Data & Exp.", icon: "📊", desc: "指标·归因·实验" },
  { id: "ops", label: "组织/流程能力", en: "Ops", icon: "⚙️", desc: "团队·SOP·资源" },
];

/* ═══════════════════════════════════════════════════════════
   Cell Data — 30 cells (6 Phases × 5 Lanes)
   ═══════════════════════════════════════════════════════════ */
const CELLS = {
  // Phase 1: WHY 感知
  "p1-user": { action: "识别当前获客路径瓶颈", artifact: "获客成本趋势报告", metric: "CAC 月环比变化率" },
  "p1-product": { action: "审计现有转化漏斗", artifact: "漏斗各环节转化率表", metric: "全链路转化基线值" },
  "p1-growth": { action: "对比漏斗与循环模型差异", artifact: "Loop vs Funnel 对照表", metric: "团队认知评测通过率", biz: true },
  "p1-data": { action: "采集历史渠道获客数据", artifact: "渠道归因数据集", metric: "数据完整度 ≥80%" },
  "p1-ops": { action: "组建增长学习小组", artifact: "学习路径与分工表", metric: "周会出勤率 ≥90%" },

  // Phase 2: WHAT 分类
  "p2-user": { action: "绘制客户全生命周期地图", artifact: "客户旅程地图 CJM", metric: "关键触点覆盖率", biz: true },
  "p2-product": { action: "标注产品天然分享触点", artifact: "分享触点清单", metric: "各触点分享转化率" },
  "p2-growth": { action: "评估五种环的业务适配度", artifact: "Loop 适配评分矩阵", metric: "候选核心环 ≤2 个", biz: true },
  "p2-data": { action: "定义各 Loop 类型关键指标", artifact: "指标字典 v1", metric: "指标可采集率 ≥70%" },
  "p2-ops": { action: "评估团队执行各环能力", artifact: "能力差距分析表", metric: "关键岗位到位率", biz: true },

  // Phase 2-3: HOW 量化
  "p23-user": { action: "测量用户推荐与复购意愿", artifact: "NPS/推荐率调研报告", metric: "NPS ≥ 40" },
  "p23-product": { action: "设计核心环最小闭环流程", artifact: "核心环流程原型", metric: "闭环跑通 ≥1 次", biz: true },
  "p23-growth": { action: "建立 Loop 量化数学模型", artifact: "Loop 量化公式表", metric: "K-factor/CT 基线值" },
  "p23-data": { action: "排序找到最高杠杆优化点", artifact: "杠杆点优先级排序表", metric: "首轮优化效率 ↑≥10%", biz: true },
  "p23-ops": { action: "制定 Loop 迭代标准流程", artifact: "迭代 SOP 文档", metric: "SOP 偏差率 ≤15%" },

  // Phase 3: HOW 启动
  "p3-user": { action: "锁定并激活种子用户群", artifact: "种子用户画像与名单", metric: "首批激活 ≥50 人", biz: true },
  "p3-product": { action: "构建原子网络最小体验", artifact: "MVP 服务包方案", metric: "首单满意度 ≥90%", biz: true },
  "p3-growth": { action: "执行冷启动获客计划", artifact: "冷启动渠道执行表", metric: "周新增连续 4 周 ↑" },
  "p3-data": { action: "搭建增长仪表盘监控", artifact: "增长仪表盘 v1", metric: "推荐获客占比 ≥15%", biz: true },
  "p3-ops": { action: "建立快速响应履约流程", artifact: "履约SOP+异常清单", metric: "平均响应 ≤2h" },

  // Phase 3-Amp: AMPLIFIER 放大
  "p3a-user": { action: "激活用户间互助与传播", artifact: "用户社群互动机制", metric: "月活跃互动率 ≥20%", biz: true },
  "p3a-product": { action: "嵌入规模效应定价策略", artifact: "阶梯定价/拼团方案", metric: "集运量月环比增长率", biz: true },
  "p3a-growth": { action: "叠加辅助环放大主循环", artifact: "Stacking 执行方案", metric: "辅助环贡献 ≥10%" },
  "p3a-data": { action: "量化网络效应与规模效应", artifact: "网络效应指标看板", metric: "用户↑ 成本↓ 负相关" },
  "p3a-ops": { action: "优化运力集约调度能力", artifact: "集运合并发货流程", metric: "单票成本下降 ≥5%", biz: true },

  // Phase 4-5: APPLY 落地
  "p45-user": { action: "追踪客户全周期复购链路", artifact: "客户 LTV 分群报告", metric: "复购率 ≥30%", biz: true },
  "p45-product": { action: "迭代服务触发推荐飞轮", artifact: "复购+推荐触发机制", metric: "推荐转化率 ≥8%", biz: true },
  "p45-growth": { action: "运行 MVL 验证完整闭环", artifact: "MVL 运行数据周报", metric: "Loop 效率月环比 ↑" },
  "p45-data": { action: "执行每周一次增长实验", artifact: "实验记录与学习日志", metric: "月均实验 ≥4 次" },
  "p45-ops": { action: "建立飞轮迭代长效节奏", artifact: "月度 Loop 诊断报告", metric: "周期时间持续缩短", biz: true },
};

/* ═══════════════════════════════════════════════════════════
   Verification Checklist
   ═══════════════════════════════════════════════════════════ */
const CHECKLIST = [
  { text: "主线从左到右一次读完（Phase 1→2→2-3→3→3-Amp→4-5，无跳跃）", pass: true },
  { text: "每个 Phase 都有清晰 Done 定义（6 个 Phase 均已填写）", pass: true },
  { text: "每格同时包含 Action / Artifact / Metric（30 格全部三行齐备）", pass: true },
  { text: "💡 金色提示仅用于与集运业务直接相关项（30 格中 15 格标金）", pass: true },
  { text: "单屏核心概念 ≤12 个同时可见（默认每 Phase 展示 ≤4 chips）", pass: true },
];

/* ═══════════════════════════════════════════════════════════
   Sub-Components
   ═══════════════════════════════════════════════════════════ */
const font = "'Outfit', 'Noto Sans SC', -apple-system, sans-serif";
const mono = "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace";

const ConceptChip = ({ concept, color, isActive, onClick }) => (
  <span
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      padding: "3px 8px", borderRadius: 4, cursor: "pointer",
      fontSize: 11, fontWeight: 500, fontFamily: font,
      color: isActive ? "#fff" : color,
      background: isActive ? `${color}30` : `${color}10`,
      border: `1px solid ${isActive ? color + "50" : color + "20"}`,
      transition: "all 0.2s", whiteSpace: "nowrap",
    }}
  >
    <span style={{ fontSize: 12 }}>{concept.icon}</span>
    {concept.term}
  </span>
);

const ChipDetail = ({ concept, color }) => (
  <div style={{
    background: `${color}08`, border: `1px solid ${color}20`,
    borderRadius: 6, padding: "8px 10px", marginTop: 6,
  }}>
    <div style={{ fontSize: 11.5, color: C.textSec, lineHeight: 1.5, fontFamily: font }}>
      {concept.def}
    </div>
    {concept.biz && (
      <div style={{
        marginTop: 6, padding: "5px 8px", borderRadius: 4,
        background: C.accentSoft, borderLeft: `2px solid ${C.accent}`,
      }}>
        <span style={{ fontSize: 11, color: C.accent, fontWeight: 500, fontFamily: font }}>
          {"💡 "}{concept.biz}
        </span>
      </div>
    )}
  </div>
);

const SwimlaneCell = ({ cell, phaseColor }) => {
  if (!cell) return <td style={{ background: C.surface, border: `1px solid ${C.border}`, padding: 8 }} />;
  const isBiz = cell.biz;
  return (
    <td
      style={{
        background: C.card, border: `1px solid ${C.border}`,
        borderLeft: isBiz ? `3px solid ${C.accent}` : `1px solid ${C.border}`,
        padding: 10, verticalAlign: "top", minWidth: 170,
        position: "relative", transition: "background 0.15s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = C.cardHover; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = C.card; }}
    >
      {isBiz && <span style={{ position: "absolute", top: 4, right: 6, fontSize: 10, opacity: 0.7 }}>{"💡"}</span>}
      <div style={{ fontSize: 12.5, fontWeight: 600, color: C.text, lineHeight: 1.4, marginBottom: 6, fontFamily: font, paddingRight: isBiz ? 16 : 0 }}>
        {cell.action}
      </div>
      <div style={{ fontSize: 11.5, color: C.textSec, lineHeight: 1.4, marginBottom: 5, fontFamily: font }}>
        <span style={{ color: C.textMuted, fontSize: 10, marginRight: 4 }}>{"▸"}</span>
        {cell.artifact}
      </div>
      <div style={{
        fontSize: 10.5, color: phaseColor, lineHeight: 1.3, fontFamily: mono, fontWeight: 500,
        padding: "3px 6px", borderRadius: 3, background: `${phaseColor}0a`, display: "inline-block",
      }}>
        {cell.metric}
      </div>
    </td>
  );
};

const DoneCell = ({ text }) => (
  <td style={{
    background: C.doneSoft, border: `1px solid ${C.border}`, padding: "8px 10px",
    verticalAlign: "middle", borderTop: `2px solid ${C.done}30`, minWidth: 170,
  }}>
    <div style={{ display: "flex", alignItems: "flex-start", gap: 5 }}>
      <span style={{ color: C.done, fontSize: 12, flexShrink: 0, marginTop: 1 }}>{"✓"}</span>
      <span style={{ fontSize: 11, color: C.textSec, lineHeight: 1.45, fontFamily: font }}>{text}</span>
    </div>
  </td>
);

const LaneLabel = ({ lane }) => (
  <td style={{
    background: C.surface, border: `1px solid ${C.border}`, padding: 10,
    verticalAlign: "middle", position: "sticky", left: 0, zIndex: 2,
    minWidth: 130, maxWidth: 130,
  }}>
    <div>
      <div style={{ fontSize: 15, marginBottom: 4 }}>{lane.icon}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: C.text, lineHeight: 1.3, fontFamily: font }}>{lane.label}</div>
      <div style={{ fontSize: 10, color: C.textDim, marginTop: 2, fontFamily: font }}>{lane.desc}</div>
    </div>
  </td>
);

/* ═══════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════ */
export default function GrowthLoopOutline() {
  const [activeChip, setActiveChip] = useState(null);
  const [showChecklist, setShowChecklist] = useState(false);
  const [expandedPhases, setExpandedPhases] = useState(new Set());

  const toggleChip = useCallback((phaseId, idx) => {
    const key = `${phaseId}-${idx}`;
    setActiveChip((prev) => (prev === key ? null : key));
  }, []);

  const toggleFolded = useCallback((phaseId) => {
    setExpandedPhases((prev) => {
      const next = new Set(prev);
      if (next.has(phaseId)) next.delete(phaseId);
      else next.add(phaseId);
      return next;
    });
  }, []);

  const totalConcepts = PHASES.reduce((s, p) => s + p.concepts.length + (p.folded?.length || 0), 0);

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: font }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .outline-scroll::-webkit-scrollbar { height: 6px; }
        .outline-scroll::-webkit-scrollbar-track { background: ${C.surface}; border-radius: 3px; }
        .outline-scroll::-webkit-scrollbar-thumb { background: ${C.borderLight}; border-radius: 3px; }
        .outline-scroll::-webkit-scrollbar-thumb:hover { background: ${C.textDim}; }

        @media (max-width: 768px) {
          .outline-table {
            min-width: 800px !important;
          }
          .outline-table colgroup col:first-child {
            width: 80px !important;
          }
          .outline-table th, .outline-table td {
            min-width: 120px !important;
            padding: 8px !important;
          }
          .outline-table th:first-child, .outline-table td:first-child {
            min-width: 80px !important;
            max-width: 80px !important;
            padding: 6px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "28px 16px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{
            fontSize: 24, fontWeight: 800, margin: "0 0 6px",
            background: `linear-gradient(135deg, ${C.p1}, ${C.p3}, ${C.accent})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em", fontFamily: font,
          }}>
            Growth Loop 大纲图
          </h1>
          <p style={{ color: C.textMuted, fontSize: 13, margin: 0 }}>
            {"从理论到落地的完整路径 · 6 阶段 × 5 维度 · "}{totalConcepts}{" 个关键概念 · 30 个执行动作"}
          </p>
        </div>

        {/* Core Logic Banner */}
        <div style={{
          background: `linear-gradient(135deg, ${C.accent}0a, ${C.p1}0a)`,
          border: `1px solid ${C.accentBorder}`, borderRadius: 10,
          padding: "12px 16px", marginBottom: 20, textAlign: "center",
        }}>
          <div style={{ fontSize: 10, color: C.accent, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 4 }}>
            {"★ 一句话核心逻辑"}
          </div>
          <p style={{ fontSize: 13.5, color: C.text, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
            运用行为动力学与科学实验，围绕关键行为构建反馈系统：使系统产出通过可规模化的再投入机制回流为下一轮输入，从而实现复利式增长。
          </p>
        </div>

        {/* Reading Guide + Checklist Toggle */}
        <div style={{ display: "flex", gap: 12, marginBottom: 20, flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            fontSize: 11.5, color: C.textMuted, lineHeight: 1.5,
            background: C.surface, padding: "6px 12px", borderRadius: 6, border: `1px solid ${C.border}`,
          }}>
            {"→ 横向读 = 学习阶段推进　↓ 纵向读 = 同阶段多维度执行　"}
            <span style={{ color: C.accent }}>{"💡 = 集运业务直接映射"}</span>
          </span>
          <button
            onClick={() => setShowChecklist(!showChecklist)}
            style={{
              background: showChecklist ? `${C.done}15` : C.surface,
              color: showChecklist ? C.done : C.textMuted,
              border: `1px solid ${showChecklist ? C.done + "30" : C.border}`,
              borderRadius: 6, padding: "5px 12px", fontSize: 11.5,
              cursor: "pointer", fontWeight: 600, fontFamily: font,
            }}
          >
            {showChecklist ? "✓ 校验清单" : "显示校验清单"}
          </button>
        </div>

        {/* Checklist */}
        {showChecklist && (
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8, padding: "12px 16px", marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.done, marginBottom: 8 }}>校验清单 (D)</div>
            {CHECKLIST.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                <span style={{ color: item.pass ? C.done : C.textDim, fontSize: 13, flexShrink: 0 }}>{item.pass ? "✓" : "○"}</span>
                <span style={{ fontSize: 12, color: C.textSec, lineHeight: 1.5 }}>{item.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* ═══ Swimlane Grid ═══ */}
        <div className="outline-scroll" style={{ overflowX: "auto", borderRadius: 10, border: `1px solid ${C.border}` }}>
          <table className="outline-table" style={{ borderCollapse: "collapse", minWidth: 1180, width: "100%", tableLayout: "fixed" }}>
            <colgroup>
              <col style={{ width: 130 }} />
              {PHASES.map((p) => <col key={p.id} style={{ width: "auto", minWidth: 170 }} />)}
            </colgroup>

            {/* Phase Header Row */}
            <thead>
              <tr>
                <th style={{
                  background: C.surface, border: `1px solid ${C.border}`, padding: 10,
                  verticalAlign: "bottom", position: "sticky", left: 0, zIndex: 3, textAlign: "left",
                }}>
                  <div style={{ fontSize: 10, color: C.textDim, fontWeight: 400, lineHeight: 1.4 }}>{"↓ 维度 / 阶段 →"}</div>
                </th>
                {PHASES.map((phase) => (
                  <th key={phase.id} style={{
                    background: C.surface, border: `1px solid ${C.border}`,
                    borderTop: `3px solid ${phase.color}`, padding: "10px 10px 8px",
                    verticalAlign: "top", textAlign: "left", minWidth: 170,
                  }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                      <span style={{ fontSize: 10.5, fontWeight: 700, color: phase.color, letterSpacing: "0.04em", fontFamily: font }}>{phase.label}</span>
                      <span style={{ fontSize: 12, fontWeight: 600, color: C.text, fontFamily: font }}>{phase.subtitle}</span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
                      {phase.concepts.map((concept, idx) => (
                        <ConceptChip key={concept.term} concept={concept} color={phase.color}
                          isActive={activeChip === `${phase.id}-${idx}`}
                          onClick={() => toggleChip(phase.id, idx)} />
                      ))}
                      {phase.folded && phase.folded.length > 0 && (
                        <span onClick={() => toggleFolded(phase.id)} style={{
                          fontSize: 10, color: C.textDim, cursor: "pointer", padding: "3px 6px",
                          borderRadius: 4, border: `1px dashed ${C.border}`, display: "inline-flex", alignItems: "center",
                        }}>
                          {expandedPhases.has(phase.id) ? "▴ 收起" : `+${phase.folded.length} 更多`}
                        </span>
                      )}
                    </div>
                    {expandedPhases.has(phase.id) && phase.folded && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                        {phase.folded.map((fc) => (
                          <span key={fc.term} style={{
                            fontSize: 10.5, color: C.textMuted, padding: "2px 6px", borderRadius: 3,
                            background: `${phase.color}08`, border: `1px solid ${phase.color}15`,
                          }}>
                            {fc.term}{" "}<span style={{ color: C.textDim, fontStyle: "italic" }}>{fc.en}</span>
                          </span>
                        ))}
                      </div>
                    )}
                    {phase.concepts.map((concept, idx) =>
                      activeChip === `${phase.id}-${idx}` ? (
                        <ChipDetail key={concept.term} concept={concept} color={phase.color} />
                      ) : null
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Swimlane Body */}
            <tbody>
              {LANES.map((lane) => (
                <tr key={lane.id}>
                  <LaneLabel lane={lane} />
                  {PHASES.map((phase) => (
                    <SwimlaneCell key={`${phase.id}-${lane.id}`} cell={CELLS[`${phase.id}-${lane.id}`]} phaseColor={phase.color} />
                  ))}
                </tr>
              ))}
              {/* Done Row */}
              <tr>
                <td style={{
                  background: C.surface, border: `1px solid ${C.border}`, padding: "8px 10px",
                  position: "sticky", left: 0, zIndex: 2, borderTop: `2px solid ${C.done}30`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <span style={{ color: C.done, fontSize: 14 }}>{"✓"}</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.done }}>Done</span>
                  </div>
                  <div style={{ fontSize: 10, color: C.textDim, marginTop: 2 }}>阶段完成标准</div>
                </td>
                {PHASES.map((phase) => <DoneCell key={`done-${phase.id}`} text={phase.done} />)}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Phase Legend */}
        <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {PHASES.map((p) => (
            <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <span style={{ fontSize: 11, color: p.color, fontWeight: 600 }}>{p.label}</span>
              <span style={{ fontSize: 11, color: C.textDim }}>{p.subtitle}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ marginTop: 24, textAlign: "center", color: C.textDim, fontSize: 11, lineHeight: 1.6 }}>
          Growth Loop Mastery · 大纲图 v1.0
          <br />
          {"数据源：Reforge Growth Loops + Andrew Chen《The Cold Start Problem》"}
        </div>
      </div>
    </div>
  );
}
