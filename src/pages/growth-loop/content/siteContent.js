export const NAV_ITEMS = [
  { id: "home", label: "主页" },
  { id: "knowledge", label: "资料图谱" },
];

export const CHAT_SUGGESTIONS = [
  "请帮我判断我的业务当前应该先做 Content Loop 还是 Referral Loop",
  "如果我的增长停留在线性投放，怎么找出可以复利的再投入节点",
  "请把冷启动、Atomic Network、Tipping Point 用具体业务场景解释给我",
  "帮我设计一个 30 天内可验证的最小可行 Growth Loop 实验",
];

export const PROMPT_SHOWCASES = [
  {
    title: "案例 01",
    label: "识别核心环",
    userPrompt:
      "我做 B2B 服务，获客主要靠内容。请判断现在更适合 Content Loop 还是 Engagement Loop，并告诉我先量哪个指标。",
    assembly:
      "拼接基础范式文档、学习型提示词规则和行业场景资料，把问题限制在 Growth Loop 诊断语境里。",
    outcome:
      "输出结论、为什么、优先指标、30 天实验的结构化答案，并提示先测 Cycle Time 与推荐率。",
  },
  {
    title: "案例 02",
    label: "冷启动拆解",
    userPrompt:
      "请把 The Cold Start Problem 里 Atomic Network 的概念，映射成我的行业可执行的起盘方案。",
    assembly:
      "优先命中 Andrew Chen 相关资料和分析型提示词规则，要求答案结合原子网络、临界点、渠道动作一起回答。",
    outcome:
      "返回一个从最小网络单元到启动动作、指标阈值、风险展开的落地方案。",
  },
  {
    title: "案例 03",
    label: "实验设计",
    userPrompt:
      "如果我想验证推荐增长是不是假繁荣，请给我一个最小可行实验和看板字段。",
    assembly:
      "拼接实践实验模板、诊断规则和指标约束，要求回答必须包含假设、动作、观察周期和失败信号。",
    outcome:
      "输出一套带字段定义的实验卡片，帮助把推荐数据变成可验证的增长信号。",
  },
];

export const AUTHORITY_SOURCES = [
  {
    title: "Reforge Growth Loops",
    type: "权威方法论",
    href: "https://www.reforge.com/blog/growth-loops",
    summary:
      "Growth Loop 的方法论基底。关于获客环、留存环、再投入和复利的表达，都以这一脉络为骨架。",
  },
  {
    title: "Andrew Chen | The Cold Start Problem",
    type: "冷启动与网络效应",
    href: "https://andrewchen.com/first-book-2021/",
    summary:
      "用于解释冷启动、Atomic Network、Tipping Point 和网络效应放大器。",
  },
  {
    title: "学习路径与阶段产出",
    type: "本地知识库",
    href: "#knowledge",
    summary:
      "来自本项目本地文档的学习路径、阶段产出与实践节奏，用来承接 Growth Loop 体系化学习。",
  },
  {
    title: "业务增长画布",
    type: "场景映射",
    href: "#knowledge",
    summary:
      "把 Growth Loop 映射到具体业务场景，保证学习不停留在抽象概念层。",
  },
];

export const RESOURCE_LIBRARY = [
  {
    title: "学习路径",
    path: "00-roadmap/learning-path.md",
    summary: "课程结构、阶段目标与建议顺序。",
    tag: "路线图",
  },
  {
    title: "范式转变",
    path: "01-foundations/01-paradigm-shift.md",
    summary: "解释为什么 Loops compound, funnels don't。",
    tag: "基础",
  },
  {
    title: "学习提示词库",
    path: "prompts/01-learning-prompts.md",
    summary: "学习模式下的提问规则，用于解释、类比和概念奠基。",
    tag: "提示词规则",
  },
  {
    title: "分析提示词库",
    path: "prompts/02-analysis-prompts.md",
    summary: "诊断、案例拆解和业务映射的规则模板。",
    tag: "分析",
  },
  {
    title: "实践画布",
    path: "06-practice-lab/loop-design-canvas.md",
    summary: "把 Loop 设计成可执行动作、指标和实验节奏。",
    tag: "实践",
  },
  {
    title: "业务画布",
    path: "05-logistics-context/my-business-canvas.md",
    summary: "Growth Loop 与你的业务上下文连接的主入口。",
    tag: "场景",
  },
];

export const KNOWLEDGE_VIEWS = [
  { id: "outline", label: "学习大纲图" },
  { id: "lifecycle", label: "增长生命周期图" },
  { id: "keyword", label: "关键词地图" },
];

export const SYSTEM_FLOW = [
  {
    step: "01",
    title: "限定问题范围",
    desc: "先判断问题是否属于 Growth Loop、冷启动、留存、获客或网络效应语境。",
  },
  {
    step: "02",
    title: "命中文档与规则",
    desc: "把本地资料、学习/分析/实践提示词规则一起拼接成上下文，而不是直接裸问模型。",
  },
  {
    step: "03",
    title: "结构化回答",
    desc: "结合本地资料来源和提示词规则，输出结论、依据和可执行建议。",
  },
];
