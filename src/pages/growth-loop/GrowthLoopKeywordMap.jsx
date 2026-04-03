import { useState } from "react";

const COLORS = {
  bg: "#0a0a0f",
  card: "#12121a",
  cardHover: "#1a1a28",
  border: "#2a2a3a",
  borderActive: "#f59e0b",
  text: "#e4e4e7",
  textMuted: "#71717a",
  textDim: "#52525b",
  accent: "#f59e0b",
  accentSoft: "rgba(245, 158, 11, 0.12)",
  phase1: "#3b82f6",
  phase2: "#8b5cf6",
  phase3: "#06b6d4",
  phase4: "#10b981",
  phase5: "#f59e0b",
  tagBg: "rgba(255,255,255,0.06)",
};

const data = {
  meta: {
    title: "Growth Loop 关键词地图",
    subtitle: "从大维度掌握核心逻辑脉络",
  },
  spine: [
    {
      id: "why",
      label: "WHY 为什么要转变",
      phase: "Phase 1",
      color: COLORS.phase1,
      summary: "漏斗是线性的，循环是复利的。增长的本质不是\u201C灌流量\u201D，而是让系统自我放大。",
      concepts: [
        {
          term: "AARRR 漏斗",
          en: "Pirate Funnel",
          def: "获取→激活→留存→收入→推荐的单向筛选模型",
          key: "隐含假设：流量靠外部灌入，推荐是终点而非起点",
          icon: "🔻",
        },
        {
          term: "Growth Loop",
          en: "增长循环",
          def: "输出成为下一轮输入的闭环系统",
          key: "核心差异：输出再投入 → 复利；漏斗的输出是终点 → 线性",
          icon: "🔄",
        },
        {
          term: "复利 vs 线性",
          en: "Compounding vs Linear",
          def: "Loop 的数学：新客户[t+1] = f(新客户[t])；漏斗：新客户 = 投入 × 转化率",
          key: "同样优化10%，Loop 的收益随时间指数放大，漏斗只是一次性+10%",
          icon: "📈",
        },
      ],
    },
    {
      id: "what",
      label: "WHAT 循环有哪些类型",
      phase: "Phase 2",
      color: COLORS.phase2,
      summary: "三大核心获客引擎（Viral/Content/Paid）负责极致拉新，参与环（Engagement）负责留存护航。",
      concepts: [
        {
          term: "Content Loop",
          en: "内容环 (核心获客)",
          def: "【三大核心获客环之一】创建内容 → 被搜索/发现 → 获客 → 用户行为产生更多内容",
          key: "你的核心获客环：小红书/知乎/SEO 经验帖。关键是用户能否反哺内容",
          icon: "📝",
        },
        {
          term: "Viral Loop",
          en: "病毒环 (核心获客)",
          def: "【三大核心获客环之一】用户使用产品 → 自然邀请他人 → 新客加入",
          key: "K-factor > 1 时自传播。你的辅助获客环：家长群口碑传播",
          icon: "🦠",
        },
        {
          term: "Paid Loop",
          en: "付费环 (核心获客)",
          def: "【三大核心获客环之一】花钱获客 → 客户付费 → 利润再投入广告 → 更多客户",
          key: "本质是 ROAS > 1 的正循环。买量带来新用户，新用户产生利润继续买量",
          icon: "💰",
        },
        {
          term: "Sales Loop",
          en: "销售环",
          def: "销售获客 → 客户成功 → 产生案例/推荐 → 降低下次销售难度",
          key: "B2B 常见。你的业务偏 C 端，但大件客户可能适用",
          icon: "🤝",
        },
        {
          term: "Engagement Loop",
          en: "参与环 / 留存环",
          def: "触发 → 行动 → 奖励 → 投入 → 再次触发",
          key: "不是获客，而是让已有客户持续活跃和复购。你的复购率是关键杠杆",
          icon: "🎯",
        },
        {
          term: "Loop Stacking",
          en: "环堆叠",
          def: "多个 Loop 叠加运行，主环 + 辅助环协同",
          key: "你可能的组合：Content Loop（主）+ Referral Loop（辅）+ Engagement Loop（留存）",
          icon: "🧱",
        },
      ],
    },
    {
      id: "how-select",
      label: "HOW 如何选择与量化",
      phase: "Phase 2–3",
      color: COLORS.phase2,
      summary: "选对核心环 → 建立数学模型 → 找到杠杆点 → 优化复利项而非线性项。",
      concepts: [
        {
          term: "核心环选择",
          en: "Core Loop Selection",
          def: "基于产品特性、用户行为、资源约束选定最应该 all-in 的那一个 Loop",
          key: "决策因素：用户频次、分享倾向、CAC/LTV、团队能力",
          icon: "🎪",
        },
        {
          term: "K-factor",
          en: "病毒系数",
          def: "K = 邀请数 × 转化率。每个用户平均带来多少新用户",
          key: "K>1 自传播；K<1 仍有放大价值。你需要测量这个数字",
          icon: "🔢",
        },
        {
          term: "Cycle Time",
          en: "周期时间",
          def: "Loop 转一圈所需的时间",
          key: "你的内容环周期：发帖→被搜索→咨询→下单 可能 7-30 天；推荐环可能 30-90 天",
          icon: "⏱️",
        },
        {
          term: "Loop Efficiency",
          en: "环效率",
          def: "一轮循环中，输出 / 输入的比值",
          key: "各环节转化率的连乘积。任何一环为0，整个 Loop 失效",
          icon: "⚡",
        },
        {
          term: "杠杆点",
          en: "Leverage Point",
          def: "Loop 中提升 1% 能带来最大整体效果的那个环节",
          key: "区分：优化 Loop 本身（复利）vs 一次性改善（线性）",
          icon: "🔧",
        },
      ],
    },
    {
      id: "how-start",
      label: "HOW 如何从零启动",
      phase: "Phase 3",
      color: COLORS.phase3,
      summary: "Andrew Chen 的五阶段框架：从最小网络开始，跨越临界点，建立护城河。",
      concepts: [
        {
          term: "Cold Start",
          en: "冷启动",
          def: "产品/服务早期没有用户，如何获得第一批用户",
          key: "鸡和蛋问题。你当初的解法：先用内容获取第一批留学生家长",
          icon: "🥶",
        },
        {
          term: "Atomic Network",
          en: "原子网络",
          def: "能独立运转的最小用户网络单元",
          key: "你的原子网络可能是：一个城市的留学生家长微信群",
          icon: "⚛️",
        },
        {
          term: "Tipping Point",
          en: "临界点",
          def: "增长从需要推动变为自我驱动的转折点",
          key: "信号：推荐获客占比开始稳定上升，不再完全依赖内容产出",
          icon: "📍",
        },
        {
          term: "Escape Velocity",
          en: "逃逸速度",
          def: "增长进入自我加速的快车道",
          key: "三个效应同时发力：参与↑ 获客↑ 经济性↑",
          icon: "🚀",
        },
        {
          term: "Ceiling",
          en: "天花板",
          def: "增长触顶的各种原因",
          key: "你可能的天花板：留学生家长总量有限、航线覆盖有限、品类受限",
          icon: "🧱",
        },
        {
          term: "Moat / 护城河",
          en: "Network Effects Moat",
          def: "网络效应形成的竞争壁垒，用户越多价值越大",
          key: "传统货代的护城河≠网络效应，更多是信任、口碑、渠道关系",
          icon: "🏰",
        },
      ],
    },
    {
      id: "network",
      label: "AMPLIFIER 网络效应放大器",
      phase: "Phase 3",
      color: COLORS.phase3,
      summary: "网络效应是 Loop 的加速器，但不是所有业务都有。认清你有什么、没什么。",
      concepts: [
        {
          term: "Network Effects",
          en: "网络效应",
          def: "用户增加 → 每个用户的价值/体验提升",
          key: "≠ 规模效应（成本降低）。网络效应关注的是用户侧价值增加",
          icon: "🕸️",
        },
        {
          term: "直接 vs 间接",
          en: "Direct vs Indirect NE",
          def: "直接：同类用户越多越好（微信）。间接：A类用户多→B类用户受益（淘宝）",
          key: "你的业务更可能有间接效应：客户多→集运量大→成本降→价格优",
          icon: "↔️",
        },
        {
          term: "规模效应",
          en: "Economies of Scale",
          def: "规模增大 → 单位成本降低",
          key: "这是你确实有的：货量越大，与船司/航司议价能力越强",
          icon: "📦",
        },
      ],
    },
    {
      id: "apply",
      label: "APPLY 映射到你的业务",
      phase: "Phase 4–5",
      color: COLORS.phase5,
      summary: "理论落地：诊断现状 → 选定核心环 → 量化模型 → 实验验证 → 持续迭代。",
      concepts: [
        {
          term: "MVL",
          en: "Minimum Viable Loop",
          def: "最小可行循环，用最低成本验证 Loop 是否能跑通",
          key: "你的 MVL：内容获客 → 首单 → 满意交付 → 推荐/复购 → 新客户",
          icon: "🔬",
        },
        {
          term: "Loop 诊断",
          en: "Loop Diagnostics",
          def: "用数据检查 Loop 每个环节的转化率和健康度",
          key: "你当前最需要补的数据：推荐率、复购率、渠道归因",
          icon: "🩺",
        },
        {
          term: "增长实验",
          en: "Growth Experiment",
          def: "假设 → 最小实验 → 测量 → 学习 → 迭代",
          key: "小步快跑：每周1个实验，先测量再优化",
          icon: "🧪",
        },
        {
          term: "飞轮效应",
          en: "Flywheel Effect",
          def: "多个正向循环叠加，初始推动困难但越转越快",
          key: "终极目标：内容+推荐+复购三个环同时转动，形成自加速飞轮",
          icon: "☸️",
        },
      ],
    },
  ],
  coreLogic: {
    title: "一句话核心逻辑",
    line: "运用行为动力学与科学实验，围绕关键行为构建反馈系统：使系统产出通过可规模化的再投入机制回流为下一轮输入，从而实现复利式增长。",
  },
};

const PhaseTag = ({ phase, color }) => (
  <span
    style={{
      fontSize: 11,
      fontWeight: 600,
      color: color,
      background: `${color}18`,
      border: `1px solid ${color}30`,
      padding: "2px 8px",
      borderRadius: 4,
      letterSpacing: "0.03em",
    }}
  >
    {phase}
  </span>
);

const ConceptCard = ({ concept, color, isExpanded, onClick }) => (
  <div
    onClick={onClick}
    style={{
      background: isExpanded ? COLORS.cardHover : COLORS.card,
      border: `1px solid ${isExpanded ? color + "60" : COLORS.border}`,
      borderRadius: 8,
      padding: "12px 14px",
      cursor: "pointer",
      transition: "all 0.2s ease",
      borderLeft: `3px solid ${isExpanded ? color : "transparent"}`,
    }}
  >
    <div className="concept-card-header" style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span className="concept-icon" style={{ fontSize: 18 }}>{concept.icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, flexWrap: "wrap" }}>
          <span style={{ color: COLORS.text, fontWeight: 600, fontSize: 14 }}>
            {concept.term}
          </span>
          <span style={{ color: COLORS.textDim, fontSize: 11.5, fontStyle: "italic" }}>
            {concept.en}
          </span>
        </div>
      </div>
      <span
        style={{
          color: COLORS.textDim,
          fontSize: 12,
          transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.2s",
        }}
      >
        ▾
      </span>
    </div>
    {isExpanded && (
      <div style={{ marginTop: 10, paddingLeft: 26 }}>
        <p style={{ color: COLORS.textMuted, fontSize: 13, margin: "0 0 8px 0", lineHeight: 1.55 }}>
          {concept.def}
        </p>
        <div
          style={{
            background: COLORS.accentSoft,
            borderRadius: 6,
            padding: "8px 10px",
            borderLeft: `2px solid ${COLORS.accent}`,
          }}
        >
          <p style={{ color: COLORS.accent, fontSize: 12.5, margin: 0, lineHeight: 1.5, fontWeight: 500 }}>
            💡 {concept.key}
          </p>
        </div>
      </div>
    )}
  </div>
);

const SpineNode = ({ node, expandedConcepts, toggleConcept, isActive, onActivate }) => (
  <div style={{ marginBottom: 24 }}>
    <div
      onClick={onActivate}
      style={{
        cursor: "pointer",
        background: isActive ? `${node.color}10` : "transparent",
        border: `1px solid ${isActive ? node.color + "40" : COLORS.border}`,
        borderRadius: 10,
        padding: "14px 16px",
        transition: "all 0.25s ease",
      }}
    >
      <div className="spine-node-header" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
        <div
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: node.color,
            boxShadow: isActive ? `0 0 12px ${node.color}60` : "none",
            flexShrink: 0,
          }}
        />
        <span style={{ color: COLORS.text, fontWeight: 700, fontSize: 15, letterSpacing: "0.01em" }}>
          {node.label}
        </span>
        <PhaseTag phase={node.phase} color={node.color} />
      </div>
      <p className="spine-node-p" style={{ color: COLORS.textMuted, fontSize: 13, margin: "0 0 0 20px", lineHeight: 1.5 }}>
        {node.summary}
      </p>
    </div>

    {isActive && (
      <div style={{ marginTop: 8, marginLeft: 4, display: "flex", flexDirection: "column", gap: 6 }}>
        {node.concepts.map((c) => (
          <ConceptCard
            key={c.term}
            concept={c}
            color={node.color}
            isExpanded={expandedConcepts.has(`${node.id}-${c.term}`)}
            onClick={(e) => {
              e.stopPropagation();
              toggleConcept(`${node.id}-${c.term}`);
            }}
          />
        ))}
      </div>
    )}
  </div>
);

const FlowArrow = ({ color }) => (
  <div style={{ display: "flex", justifyContent: "center", margin: "-10px 0" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 2, height: 16, background: `${color || COLORS.textDim}40` }} />
      <span style={{ color: `${color || COLORS.textDim}60`, fontSize: 10 }}>▼</span>
    </div>
  </div>
);

export default function GrowthLoopKeywordMap() {
  const [activeNodes, setActiveNodes] = useState(new Set(["why"]));
  const [expandedConcepts, setExpandedConcepts] = useState(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggleNode = (id) => {
    setActiveNodes((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleConcept = (key) => {
    setExpandedConcepts((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const expandAll = () => {
    if (showAll) {
      setActiveNodes(new Set(["why"]));
      setExpandedConcepts(new Set());
      setShowAll(false);
    } else {
      const allNodes = new Set(data.spine.map((n) => n.id));
      const allConcepts = new Set();
      data.spine.forEach((n) => n.concepts.forEach((c) => allConcepts.add(`${n.id}-${c.term}`)));
      setActiveNodes(allNodes);
      setExpandedConcepts(allConcepts);
      setShowAll(true);
    }
  };

  const totalConcepts = data.spine.reduce((s, n) => s + n.concepts.length, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: COLORS.bg,
        color: COLORS.text,
        fontFamily: "'Noto Sans SC', 'SF Pro Text', -apple-system, sans-serif",
        padding: "32px 16px",
        maxWidth: 640,
        margin: "0 auto",
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .concept-card-header {
            align-items: flex-start !important;
          }
          .concept-icon {
            font-size: 16px !important;
            margin-top: 2px;
          }
          .spine-node-header {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 6px !important;
          }
          .spine-node-p {
            margin: 0 !important;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <h1
          style={{
            fontSize: 22,
            fontWeight: 800,
            margin: "0 0 6px 0",
            background: `linear-gradient(135deg, ${COLORS.phase1}, ${COLORS.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          {data.meta.title}
        </h1>
        <p style={{ color: COLORS.textMuted, fontSize: 13, margin: 0 }}>{data.meta.subtitle}</p>

        <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ color: COLORS.textDim, fontSize: 12 }}>
            {data.spine.length} 个模块 · {totalConcepts} 个关键概念
          </span>
          <button
            onClick={expandAll}
            style={{
              background: COLORS.accentSoft,
              color: COLORS.accent,
              border: `1px solid ${COLORS.accent}30`,
              borderRadius: 6,
              padding: "4px 12px",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {showAll ? "收起全部" : "展开全部"}
          </button>
        </div>
      </div>

      {/* Core Logic Banner */}
      <div
        style={{
          background: `linear-gradient(135deg, ${COLORS.accent}12, ${COLORS.phase1}12)`,
          border: `1px solid ${COLORS.accent}25`,
          borderRadius: 10,
          padding: "14px 16px",
          marginBottom: 28,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 11, color: COLORS.accent, fontWeight: 700, marginBottom: 6, letterSpacing: "0.08em" }}>
          {data.coreLogic.title.toUpperCase()}
        </div>
        <p style={{ color: COLORS.text, fontSize: 14, margin: 0, lineHeight: 1.6, fontWeight: 500 }}>
          {data.coreLogic.line}
        </p>
      </div>

      {/* Reading Guide */}
      <div
        style={{
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 8,
          padding: "12px 14px",
          marginBottom: 24,
          fontSize: 12.5,
          color: COLORS.textMuted,
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: COLORS.text }}>阅读指南：</strong>
        从上往下是学习路径 WHY→WHAT→HOW→APPLY。点击模块展开关键概念，点击概念卡片查看定义和业务映射。
        <span style={{ color: COLORS.accent }}> 💡 金色提示</span> 是与你集运业务的直接关联。
      </div>

      {/* Spine */}
      {data.spine.map((node, i) => (
        <div key={node.id}>
          <SpineNode
            node={node}
            expandedConcepts={expandedConcepts}
            toggleConcept={toggleConcept}
            isActive={activeNodes.has(node.id)}
            onActivate={() => toggleNode(node.id)}
          />
          {i < data.spine.length - 1 && (
            <FlowArrow color={data.spine[i + 1].color} />
          )}
        </div>
      ))}

      {/* Phase Legend */}
      <div
        style={{
          marginTop: 32,
          background: COLORS.card,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 10,
          padding: "16px",
        }}
      >
        <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.textMuted, marginBottom: 10 }}>
          学习阶段对照
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { phase: "Phase 1", label: "概念奠基", desc: "理解为什么 Loop > Funnel", color: COLORS.phase1, you: "← 你在这里" },
            { phase: "Phase 2", label: "理论深化", desc: "Loop 类型·选择·量化方法", color: COLORS.phase2, you: "" },
            { phase: "Phase 3", label: "理论深化", desc: "冷启动·网络效应·病毒数学", color: COLORS.phase3, you: "" },
            { phase: "Phase 4", label: "框架整合", desc: "Reforge + Andrew Chen 统一框架", color: COLORS.phase4, you: "" },
            { phase: "Phase 5", label: "场景映射", desc: "理论落地到你的集运业务", color: COLORS.phase5, you: "" },
          ].map((p) => (
            <div key={p.phase} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: p.color, flexShrink: 0 }} />
              <span style={{ color: p.color, fontSize: 11.5, fontWeight: 600, minWidth: 56 }}>{p.phase}</span>
              <span style={{ color: COLORS.text, fontSize: 12.5, fontWeight: 500 }}>{p.label}</span>
              <span style={{ color: COLORS.textDim, fontSize: 11.5 }}>— {p.desc}</span>
              {p.you && (
                <span style={{ color: COLORS.accent, fontSize: 11, fontWeight: 700 }}>{p.you}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: 24, textAlign: "center", color: COLORS.textDim, fontSize: 11 }}>
        Growth Loop Mastery · 关键词地图 v1.0
      </div>
    </div>
  );
}