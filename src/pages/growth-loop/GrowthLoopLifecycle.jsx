import { useState } from "react";

/* ═══════════════════════════════════════════════════════════
   Design Tokens — Deep Ocean palette + phase accents
   Font Stack: Outfit (display) + Noto Sans SC (中文) + JetBrains Mono (data)
   ═══════════════════════════════════════════════════════════ */
const T = {
  bg: "#0a0f1a",
  surface: "#111827",
  surfaceAlt: "#0d1220",
  border: "rgba(255,255,255,0.07)",
  borderActive: "rgba(255,255,255,0.14)",
  text: "#e2e8f0",
  textMid: "rgba(255,255,255,0.65)",
  textMuted: "rgba(255,255,255,0.40)",
  textDim: "rgba(255,255,255,0.25)",
  font: "'Outfit', 'Noto Sans SC', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
};

/* ═══════════════════════════════════════════════════════════
   Phase Data
   ═══════════════════════════════════════════════════════════ */
const PHASES = [
  {
    id: "acquire",
    label: "获客 Acquire",
    color: "#3B82F6",
    icon: "◎",
    userState: "陌生人 → 访客",
    userAction: "触达 → 点击 → 着陆",
    aggregateMetric: "新访客数 / 渠道 CAC",
    loopInput: "渠道流量、推荐链接、内容曝光、口碑传播",
    conversionLabel: "点击率 / 注册率",
    conversionBenchmark: "广告 1-3% · 推荐 10-30% · 内容 3-8%",
    tactics: [
      "SEO 长尾词覆盖",
      "社交媒体内容分发",
      "老用户邀请奖励",
      "付费投放（验证 PMF 后）",
    ],
    questions: [
      "用户从哪听说你的？",
      "哪个渠道的 CAC 最低？",
      "有没有自然流量在增长？",
    ],
    loopRole: "INPUT",
    loopDesc: "新用户进入系统",
  },
  {
    id: "activate",
    label: "激活 Activate",
    color: "#10B981",
    icon: "⚡",
    userState: "访客 → 新用户",
    userAction: "注册 → 首次体验核心价值",
    aggregateMetric: "激活率 / Time-to-Value",
    loopInput: "注册流程、引导设计、Aha Moment 触达",
    conversionLabel: "访客→激活用户",
    conversionBenchmark: "SaaS 20-40% · 工具 30-60% · 平台 10-25%",
    tactics: [
      "缩短注册步骤到 ≤3 步",
      "设计清晰的 Aha Moment",
      "新手引导 Checklist",
      "首次使用即见效果",
    ],
    questions: [
      "用户的 Aha Moment 是什么？",
      "注册到激活的中位时间？",
      "哪一步流失最多？",
    ],
    loopRole: "ACTION-1",
    loopDesc: "用户首次获得价值",
  },
  {
    id: "engage",
    label: "留存 Engage",
    color: "#F59E0B",
    icon: "🔄",
    userState: "新用户 → 活跃用户",
    userAction: "重复使用 → 养成习惯 → 深度使用",
    aggregateMetric: "D7/D30 留存率 · DAU/MAU",
    loopInput: "触发器（通知/邮件）、习惯养成、功能深度",
    conversionLabel: "新用户→周活用户",
    conversionBenchmark: "优秀 >40% D7 · 良好 20-40% · 需改进 <20%",
    tactics: [
      "设计 Engagement Loop（触发→行动→奖励→投入）",
      "关键行为驱动的通知策略",
      "用户分层运营",
      "渐进式功能解锁",
    ],
    questions: [
      "用户回来的理由是什么？",
      "核心使用频率是多少？",
      "留存曲线是否走平？",
    ],
    loopRole: "ACTION-2",
    loopDesc: "用户持续获得价值",
  },
  {
    id: "monetize",
    label: "变现 Monetize",
    color: "#8B5CF6",
    icon: "💎",
    userState: "活跃用户 → 付费用户",
    userAction: "发现付费价值 → 付费 → 续费/升级",
    aggregateMetric: "转化率 · ARPU · LTV",
    loopInput: "付费墙设计、定价策略、增值功能",
    conversionLabel: "活跃→付费 / 续费率",
    conversionBenchmark: "Freemium 2-5% · 试用 15-30% · 续费 >85%",
    tactics: [
      "Value Metric 定价（按用量/按效果）",
      "免费版制造升级动机",
      "年付折扣锁定 LTV",
      "扩展收入（Expansion Revenue）",
    ],
    questions: [
      "用户愿意为什么付费？",
      "LTV 是否 > 3× CAC？",
      "有没有自然的升级路径？",
    ],
    loopRole: "OUTPUT-1",
    loopDesc: "产生收入 → 可再投入",
  },
  {
    id: "output",
    label: "产出 Output",
    color: "#EF4444",
    icon: "📡",
    userState: "付费/活跃用户 → 传播者",
    userAction: "推荐 · 产出内容 · 创造社交证明",
    aggregateMetric: "推荐率 · K-factor · UGC 量",
    loopInput: "推荐机制、分享功能、内容创作工具、社交证明",
    conversionLabel: "用户→推荐行为",
    conversionBenchmark: "邀请率 5-15% · 被邀转化 20-40%",
    tactics: [
      "推荐双向奖励",
      "产品内嵌分享触发点",
      "用户成果可外部展示",
      "社区/UGC 内容闭环",
    ],
    questions: [
      "用户有动机分享吗？",
      "分享的摩擦有多大？",
      "K-factor 是多少？",
    ],
    loopRole: "OUTPUT-2",
    loopDesc: "产生新用户 → 闭环",
  },
];

/* ═══════════════════════════════════════════════════════════
   Growth Simulation
   ═══════════════════════════════════════════════════════════ */
function simulateGrowth(cycles, k, baseNew, retentionRate) {
  const data = [];
  let total = 0;
  let activeBase = 0;
  for (let i = 0; i <= cycles; i++) {
    const organic = i === 0 ? baseNew : Math.floor(activeBase * k * 0.1);
    const newUsers = baseNew + organic;
    activeBase = Math.floor((activeBase + newUsers) * retentionRate);
    total += newUsers;
    data.push({ cycle: i, newUsers, activeBase, total });
  }
  return data;
}

/* ═══════════════════════════════════════════════════════════
   Mini Chart (SVG)
   ═══════════════════════════════════════════════════════════ */
function MiniChart({ data, width = 220, height = 60 }) {
  const max = Math.max(...data.map((d) => d.total));
  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (d.total / max) * height * 0.85;
      return `${x},${y}`;
    })
    .join(" ");
  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartGrad)" />
      <polyline
        points={points}
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - (d.total / max) * height * 0.85;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.5"
            fill="#3B82F6"
            opacity="0.8"
          />
        );
      })}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Phase Card
   ═══════════════════════════════════════════════════════════ */
function PhaseCard({ phase, index, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className="phase-card"
      style={{
        background: isActive
          ? `linear-gradient(160deg, ${phase.color}14, ${phase.color}06)`
          : "rgba(255,255,255,0.02)",
        border: `1.5px solid ${isActive ? phase.color + "50" : T.border}`,
        borderRadius: 14,
        padding: 0,
        cursor: "pointer",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        overflow: "hidden",
        boxShadow: isActive
          ? `0 0 30px ${phase.color}12, 0 4px 20px rgba(0,0,0,0.3)`
          : "0 2px 8px rgba(0,0,0,0.2)",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      {/* Top glow bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: isActive
            ? phase.color
            : `linear-gradient(90deg, transparent, ${phase.color}30, transparent)`,
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Header */}
      <div
        style={{
          padding: "14px 16px 10px",
          borderBottom: `1px solid ${isActive ? phase.color + "20" : T.border}`,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 18 }}>{phase.icon}</span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: T.mono,
              fontSize: 13,
              fontWeight: 700,
              color: phase.color,
              letterSpacing: "0.3px",
            }}
          >
            {phase.label}
          </div>
          <div
            style={{
              fontSize: 10.5,
              color: T.textDim,
              marginTop: 2,
              fontFamily: T.mono,
              letterSpacing: "0.5px",
            }}
          >
            {phase.loopRole}
          </div>
        </div>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: isActive ? phase.color : "rgba(255,255,255,0.05)",
            color: isActive ? "#fff" : T.textDim,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 700,
            fontFamily: T.mono,
            transition: "all 0.3s",
          }}
        >
          {index + 1}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "12px 16px 14px" }}>
        {/* User state */}
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              fontSize: 9.5,
              textTransform: "uppercase",
              color: T.textDim,
              letterSpacing: "1.2px",
              marginBottom: 4,
              fontFamily: T.mono,
            }}
          >
            用户状态
          </div>
          <div
            style={{
              fontSize: 13,
              color: T.text,
              fontWeight: 500,
              fontFamily: T.font,
            }}
          >
            {phase.userState}
          </div>
        </div>

        {/* Conversion benchmark */}
        <div
          style={{
            background: "rgba(0,0,0,0.3)",
            borderRadius: 8,
            padding: "8px 10px",
            marginBottom: 10,
            border: `1px solid ${isActive ? phase.color + "15" : "transparent"}`,
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: phase.color,
              fontFamily: T.mono,
              marginBottom: 3,
              fontWeight: 600,
            }}
          >
            {phase.conversionLabel}
          </div>
          <div
            style={{
              fontSize: 10.5,
              color: T.textMuted,
              fontFamily: T.mono,
            }}
          >
            {phase.conversionBenchmark}
          </div>
        </div>

        {/* Core metric */}
        <div style={{ fontSize: 11, color: T.textMid, fontFamily: T.font }}>
          <span style={{ color: T.textDim, fontSize: 10 }}>{"核心指标 "}</span>
          {phase.aggregateMetric}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Loop Arrow (SVG)
   ═══════════════════════════════════════════════════════════ */
function LoopArrow() {
  return (
    <svg
      width="100%"
      height="50"
      viewBox="0 0 1000 50"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="loopGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="60%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
        </marker>
      </defs>
      <path
        d="M 950 15 C 800 15, 700 40, 500 40 C 300 40, 200 15, 50 15"
        fill="none"
        stroke="url(#loopGrad)"
        strokeWidth="2"
        strokeDasharray="8 4"
        markerEnd="url(#arrowhead)"
        opacity="0.6"
      />
      <text
        x="500"
        y="12"
        textAnchor="middle"
        fill="rgba(255,255,255,0.28)"
        fontSize="11"
        fontFamily="'JetBrains Mono', monospace"
      >
        {"OUTPUT → REINVEST → 新 INPUT（闭环）"}
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main Component
   ═══════════════════════════════════════════════════════════ */
export default function GrowthLoopLifecycle() {
  const [activePhase, setActivePhase] = useState(0);
  const [kFactor, setKFactor] = useState(0.8);
  const growthData = simulateGrowth(12, kFactor, 100, 0.7);
  const phase = PHASES[activePhase];

  return (
    <div
      style={{
        background: T.bg,
        color: T.text,
        minHeight: "100vh",
        fontFamily: T.font,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Injected Styles: fonts, animations, scrollbar ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .phase-card {
          animation: fadeUp 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        .phase-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.15) !important;
        }
        .detail-panel {
          animation: slideDown 0.35s ease both;
        }
        .k-btn:hover {
          background: rgba(255,255,255,0.12) !important;
        }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        .detail-cols {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        .detail-col {
          padding: 16px 24px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .detail-col:last-child {
          border-right: none;
        }
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
          .detail-cols {
            grid-template-columns: 1fr;
          }
          .detail-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.07);
          }
          .detail-col:last-child {
            border-bottom: none;
          }
          .hide-mobile {
            display: none;
          }
        }
      `}</style>

      {/* ── Atmosphere: gradient mesh background ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: [
            `radial-gradient(ellipse at 15% 85%, rgba(59,130,246,0.07) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 85% 15%, rgba(139,92,246,0.05) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 60%)`,
          ].join(", "),
        }}
      />

      {/* ── Noise texture overlay ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Content (above atmosphere) ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ═══════ Header ═══════ */}
        <div
          style={{
            borderBottom: `1px solid ${T.border}`,
            padding: "24px 32px 20px",
            background:
              "linear-gradient(180deg, rgba(59,130,246,0.04) 0%, transparent 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  margin: 0,
                  letterSpacing: "-0.5px",
                  fontFamily: T.font,
                  background:
                    "linear-gradient(135deg, #e2e8f0 30%, #94a3b8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Growth Loop 泳道图
              </h1>
              <p
                style={{
                  fontSize: 13,
                  color: T.textMuted,
                  margin: "5px 0 0",
                  lineHeight: 1.5,
                  fontFamily: T.font,
                }}
              >
                单用户生命周期 × 全量增长飞轮 · 独立开发者 / PM 实操参考<br />
                <span style={{ fontSize: 11, color: "rgba(245,158,11,0.8)" }}>
                  注：系统的运转必须由 <strong>三大核心外在引擎（Content / Viral / Paid）</strong> 注入获取新客的动力，<br className="hide-mobile" />
                  并通过 Engagement Loop 确保持续留存。生命周期本身不是引擎，而是被引擎驱动的价值流。
                </span>
              </p>
            </div>

            {/* Mini growth chart */}
            <div
              style={{
                background: "rgba(255,255,255,0.025)",
                borderRadius: 12,
                padding: "10px 14px",
                border: `1px solid ${T.border}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 6,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: T.textDim,
                    fontFamily: T.mono,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  累计用户增长模拟
                </span>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      color: T.textDim,
                      fontFamily: T.mono,
                    }}
                  >
                    K=
                  </span>
                  {[0.5, 0.8, 1.0, 1.3].map((k) => (
                    <button
                      key={k}
                      className="k-btn"
                      onClick={() => setKFactor(k)}
                      style={{
                        background:
                          kFactor === k
                            ? "#3B82F6"
                            : "rgba(255,255,255,0.06)",
                        border: "none",
                        borderRadius: 4,
                        color:
                          kFactor === k ? "#fff" : T.textMuted,
                        fontSize: 10,
                        padding: "2px 7px",
                        cursor: "pointer",
                        fontFamily: T.mono,
                        fontWeight: kFactor === k ? 700 : 400,
                        transition: "all 0.2s",
                      }}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>
              <MiniChart data={growthData} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 9,
                    color: T.textDim,
                    fontFamily: T.mono,
                  }}
                >
                  Cycle 0
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: T.textDim,
                    fontFamily: T.mono,
                  }}
                >
                  {"Cycle 12 → "}
                  {growthData[12]?.total}
                  {" 用户"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ Phase Cards Row ═══════ */}
        <div style={{ padding: "20px 32px 0" }}>
          {/* Flow direction */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <span
              style={{
                fontSize: 10,
                color: T.textDim,
                fontFamily: T.mono,
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              用户生命周期流向
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background:
                  "linear-gradient(90deg, rgba(59,130,246,0.4), rgba(16,185,129,0.4), rgba(245,158,11,0.4), rgba(139,92,246,0.4), rgba(239,68,68,0.4))",
              }}
            />
            <span style={{ fontSize: 12, color: T.textDim }}>{"→"}</span>
          </div>

          {/* Cards Grid */}
          <div className="cards-grid">
            {PHASES.map((p, i) => (
              <PhaseCard
                key={p.id}
                phase={p}
                index={i}
                isActive={activePhase === i}
                onClick={() => setActivePhase(i)}
              />
            ))}
          </div>

          {/* Loop Arrow */}
          <div style={{ margin: "4px 0" }}>
            <LoopArrow />
          </div>
        </div>

        {/* ═══════ Detail Panel ═══════ */}
        <div style={{ padding: "0 32px 32px" }}>
          <div
            key={phase.id}
            className="detail-panel"
            style={{
              background: `linear-gradient(160deg, ${phase.color}0c, rgba(0,0,0,0.25))`,
              border: `1px solid ${phase.color}22`,
              borderRadius: 16,
              overflow: "hidden",
              backdropFilter: "blur(16px)",
              boxShadow: `0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 ${phase.color}10`,
            }}
          >
            {/* Detail Header */}
            <div
              style={{
                padding: "16px 24px",
                borderBottom: `1px solid ${phase.color}15`,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 24 }}>{phase.icon}</span>
              <div>
                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    margin: 0,
                    color: phase.color,
                    fontFamily: T.font,
                    letterSpacing: "-0.3px",
                  }}
                >
                  {phase.label}
                </h2>
                <p
                  style={{
                    fontSize: 12,
                    color: T.textMuted,
                    margin: "3px 0 0",
                    fontFamily: T.font,
                  }}
                >
                  {phase.loopDesc}
                  {"　·　"}
                  {phase.userAction}
                </p>
              </div>
            </div>

            {/* Detail Body — 3 columns */}
            <div className="detail-cols">
              {/* Col 1: Tactics */}
              <div className="detail-col">
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: phase.color,
                    letterSpacing: "1.2px",
                    marginBottom: 12,
                    fontFamily: T.mono,
                    fontWeight: 600,
                  }}
                >
                  实操策略 Tactics
                </div>
                {phase.tactics.map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: phase.color,
                        fontSize: 14,
                        lineHeight: "18px",
                        flexShrink: 0,
                      }}
                    >
                      {"›"}
                    </span>
                    <span
                      style={{
                        fontSize: 12.5,
                        color: T.textMid,
                        lineHeight: "18px",
                        fontFamily: T.font,
                      }}
                    >
                      {t}
                    </span>
                  </div>
                ))}
              </div>

              {/* Col 2: Loop mechanics */}
              <div className="detail-col">
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: phase.color,
                    letterSpacing: "1.2px",
                    marginBottom: 12,
                    fontFamily: T.mono,
                    fontWeight: 600,
                  }}
                >
                  {"Loop 输入 / 驱动力"}
                </div>
                <p
                  style={{
                    fontSize: 12.5,
                    color: T.textMid,
                    lineHeight: "20px",
                    margin: "0 0 14px",
                    fontFamily: T.font,
                  }}
                >
                  {phase.loopInput}
                </p>
                <div
                  style={{
                    background: "rgba(0,0,0,0.3)",
                    borderRadius: 10,
                    padding: "10px 12px",
                    border: `1px solid ${phase.color}10`,
                  }}
                >
                  <div
                    style={{
                      fontSize: 9.5,
                      color: T.textDim,
                      fontFamily: T.mono,
                      marginBottom: 4,
                      letterSpacing: "0.8px",
                    }}
                  >
                    BENCHMARK
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: phase.color,
                      fontFamily: T.mono,
                      fontWeight: 600,
                    }}
                  >
                    {phase.conversionLabel}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: T.textMuted,
                      fontFamily: T.mono,
                      marginTop: 3,
                    }}
                  >
                    {phase.conversionBenchmark}
                  </div>
                </div>
              </div>

              {/* Col 3: Diagnostic questions */}
              <div className="detail-col">
                <div
                  style={{
                    fontSize: 10,
                    textTransform: "uppercase",
                    color: phase.color,
                    letterSpacing: "1.2px",
                    marginBottom: 12,
                    fontFamily: T.mono,
                    fontWeight: 600,
                  }}
                >
                  诊断问题 Check
                </div>
                {phase.questions.map((q, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        background: `${phase.color}18`,
                        color: phase.color,
                        fontSize: 9,
                        fontWeight: 700,
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: T.mono,
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      style={{
                        fontSize: 12.5,
                        color: T.textMid,
                        lineHeight: "18px",
                        fontFamily: T.font,
                      }}
                    >
                      {q}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════ Footer: Loop Formula ═══════ */}
        <div style={{ padding: "0 32px 28px" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${T.border}`,
              borderRadius: 14,
              padding: "16px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 16,
              backdropFilter: "blur(8px)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  textTransform: "uppercase",
                  color: T.textDim,
                  letterSpacing: "1.2px",
                  fontFamily: T.mono,
                  marginBottom: 6,
                }}
              >
                Growth Loop 核心公式
              </div>
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 13,
                  color: T.textMid,
                  lineHeight: "22px",
                }}
              >
                <span style={{ color: "#3B82F6" }}>New[t+1]</span>
                {" = "}
                <span style={{ color: "#3B82F6" }}>New[t]</span>
                {" × "}
                <span style={{ color: "#10B981" }}>激活率</span>
                {" × "}
                <span style={{ color: "#F59E0B" }}>留存率</span>
                {" × "}
                <span style={{ color: "#8B5CF6" }}>变现率</span>
                {" × "}
                <span style={{ color: "#EF4444" }}>推荐放大系数</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 10,
                    color: T.textDim,
                    fontFamily: T.mono,
                  }}
                >
                  Loop Efficiency
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#F59E0B",
                    fontFamily: T.mono,
                  }}
                >
                  = 各步转化率之积
                </div>
              </div>
              <div
                style={{
                  width: 1,
                  height: 30,
                  background: T.border,
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: 10,
                    color: T.textDim,
                    fontFamily: T.mono,
                  }}
                >
                  复利条件
                </div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#10B981",
                    fontFamily: T.mono,
                  }}
                >
                  {"Efficiency > 0 ✓"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
