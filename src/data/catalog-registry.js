/**
 * Catalog Registry — 所有 demo 的唯一数据源
 * 驱动：侧边栏导航、首页预览、TopBar 标题、可复制名称
 */

// ═══ Mini Program Domain ═══

export const MINIPROGRAM_CATALOG = [
  // 基础组件 UI Components
  { id: 'view-containers', name: { en: 'View Containers', zh: '视图容器' }, group: 'ui', route: '/mini-program/components/view-containers' },
  { id: 'form-elements', name: { en: 'Form Elements', zh: '表单控件' }, group: 'ui', route: '/mini-program/components/form-elements' },
  { id: 'basic-content', name: { en: 'Basic Content', zh: '基础内容' }, group: 'ui', route: '/mini-program/components/basic-content' },
  { id: 'rich-text', name: { en: 'Rich Text', zh: '富文本' }, group: 'ui', route: '/mini-program/ui-components/rich-text' },
  { id: 'premium-cards', name: { en: 'Premium Cards', zh: '高级卡片' }, group: 'ui', route: '/mini-program/ui-components/premium-cards' },
  { id: 'swipe-tabs', name: { en: 'Swipe Tabs', zh: '滑动标签页' }, group: 'ui', route: '/mini-program/ui-components/swipe-tabs' },

  // 数据与导航 Data & Navigation
  { id: 'timeline', name: { en: 'Timeline', zh: '时间轴' }, group: 'data-nav', route: '/mini-program/data-display/timeline' },
  { id: 'navbar', name: { en: 'Navigation Bar', zh: '导航栏' }, group: 'data-nav', route: '/mini-program/navigation/navbar' },
  { id: 'country-picker', name: { en: 'Country Picker', zh: '国家选择器' }, group: 'data-nav', route: '/mini-program/navigation/country-picker' },
  { id: 'captcha', name: { en: 'Captcha Input', zh: '验证码输入' }, group: 'data-nav', route: '/mini-program/advanced-form/captcha' },

  // 媒体与图形 Media & Graphics
  { id: 'map-markers', name: { en: 'Map Markers', zh: '地图标注' }, group: 'media', route: '/mini-program/map-lbs/markers' },
  { id: 'canvas-poster', name: { en: 'Canvas Poster', zh: '海报生成' }, group: 'media', route: '/mini-program/canvas/poster' },

  // 生态与系统 Ecosystem
  { id: 'quick-login', name: { en: 'Quick Login', zh: '快捷登录' }, group: 'ecosystem', route: '/mini-program/ecosystem/login' },
  { id: 'floating-cs', name: { en: 'Floating CS', zh: '悬浮客服' }, group: 'ecosystem', route: '/mini-program/ecosystem/floating-cs' },
  { id: 'interactive-apis', name: { en: 'Interactive APIs', zh: '设备 API' }, group: 'ecosystem', route: '/mini-program/hardware/interactive-apis' },

  // 高阶引擎 Advanced Engine
  { id: 'skyline', name: { en: 'Skyline Features', zh: 'Skyline 引擎' }, group: 'engine', route: '/mini-program/advanced/skyline-features' },
  { id: 'gestures', name: { en: 'Gestures & Animation', zh: '手势动效' }, group: 'engine', route: '/mini-program/advanced/gestures-animation' },
  { id: 'pull-refresh', name: { en: 'Pull Refresh', zh: '下拉刷新' }, group: 'engine', route: '/mini-program/performance/pull-refresh' },
];

export const MINIPROGRAM_GROUPS = [
  { id: 'ui', name: { en: 'UI Components', zh: '基础组件' }, icon: 'Layers' },
  { id: 'data-nav', name: { en: 'Data & Navigation', zh: '数据与导航' }, icon: 'Navigation' },
  { id: 'media', name: { en: 'Media & Graphics', zh: '媒体与图形' }, icon: 'Image' },
  { id: 'ecosystem', name: { en: 'Ecosystem', zh: '生态与系统' }, icon: 'Globe' },
  { id: 'engine', name: { en: 'Advanced Engine', zh: '高阶引擎' }, icon: 'Zap' },
];

// ═══ Web FX Domain ═══

export const WEBFX_CATALOG = [
  // 视觉风格 Visual Styles
  { id: 'glassmorphism', name: { en: 'Glassmorphism', zh: '玻璃拟态' }, group: 'visual', sub: 'material', route: '/web-fx/visual-styles', hash: 'glassmorphism' },
  { id: 'neumorphism', name: { en: 'Neumorphism', zh: '新拟物' }, group: 'visual', sub: 'material', route: '/web-fx/visual-styles', hash: 'neumorphism' },
  { id: 'claymorphism', name: { en: 'Claymorphism', zh: '泥塑 3D' }, group: 'visual', sub: 'material', route: '/web-fx/visual-styles', hash: 'claymorphism' },
  { id: 'liquid-metal', name: { en: 'Liquid Metal', zh: '液态金属' }, group: 'visual', sub: 'material', route: '/web-fx/visual-styles', hash: 'liquid-metal' },
  { id: 'holographic', name: { en: 'Holographic', zh: '全息材质' }, group: 'visual', sub: 'material', route: '/web-fx/visual-styles', hash: 'holographic' },
  { id: 'dark-mode', name: { en: 'Dark Mode', zh: '暗黑模式' }, group: 'visual', sub: 'color', route: '/web-fx/visual-styles', hash: 'dark-mode' },
  { id: 'dopamine-ui', name: { en: 'Dopamine UI', zh: '多巴胺风' }, group: 'visual', sub: 'color', route: '/web-fx/visual-styles', hash: 'dopamine-ui' },
  { id: 'neon-cyberpunk', name: { en: 'Neon Cyberpunk', zh: '赛博朋克' }, group: 'visual', sub: 'color', route: '/web-fx/visual-styles', hash: 'neon-cyberpunk' },
  { id: 'pastel-macaron', name: { en: 'Pastel Macaron', zh: '马卡龙' }, group: 'visual', sub: 'color', route: '/web-fx/visual-styles', hash: 'pastel-macaron' },
  { id: 'flat-2', name: { en: 'Flat 2.0', zh: '扁平 2.0' }, group: 'visual', sub: 'structure', route: '/web-fx/visual-styles', hash: 'flat-2' },
  { id: 'neo-brutalism', name: { en: 'Neo-Brutalism', zh: '新野蛮主义' }, group: 'visual', sub: 'structure', route: '/web-fx/visual-styles', hash: 'neo-brutalism' },
  { id: 'wireframe', name: { en: 'Wireframe', zh: '线框蓝图' }, group: 'visual', sub: 'structure', route: '/web-fx/visual-styles', hash: 'wireframe' },
  { id: 'bauhaus', name: { en: 'Bauhaus Swiss', zh: '包豪斯' }, group: 'visual', sub: 'structure', route: '/web-fx/visual-styles', hash: 'bauhaus' },

  // 行业风格 Industry Styles
  { id: 'high-density', name: { en: 'High-Density Dashboard', zh: '高密信息平铺' }, group: 'industry', sub: 'logistics', route: '/web-fx/industry-styles', hash: 'high-density' },
  { id: 'industrial-console', name: { en: 'Industrial Console', zh: '重工控制台' }, group: 'industry', sub: 'logistics', route: '/web-fx/industry-styles', hash: 'industrial-console' },
  { id: 'blueprint-tracking', name: { en: 'Blueprint Tracking', zh: '地图溯源' }, group: 'industry', sub: 'logistics', route: '/web-fx/industry-styles', hash: 'blueprint-tracking' },
  { id: 'fintech-minimal', name: { en: 'FinTech Minimalist', zh: '极简金融' }, group: 'industry', sub: 'finance', route: '/web-fx/industry-styles', hash: 'fintech-minimal' },
  { id: 'premium-metallic', name: { en: 'Premium Metallic', zh: '暗夜淬金' }, group: 'industry', sub: 'finance', route: '/web-fx/industry-styles', hash: 'premium-metallic' },
  { id: 'web3-iridescent', name: { en: 'Web3 Iridescent', zh: '极客紫' }, group: 'industry', sub: 'finance', route: '/web-fx/industry-styles', hash: 'web3-iridescent' },
  { id: 'editorial-magazine', name: { en: 'Editorial Magazine', zh: '杂志排版' }, group: 'industry', sub: 'ecommerce', route: '/web-fx/industry-styles', hash: 'editorial-magazine' },
  { id: 'luxury-blank', name: { en: 'Luxury Blank', zh: '高奢极简' }, group: 'industry', sub: 'ecommerce', route: '/web-fx/industry-styles', hash: 'luxury-blank' },
  { id: 'dynamic-promo', name: { en: 'Dynamic Promotional', zh: '促销强对比' }, group: 'industry', sub: 'ecommerce', route: '/web-fx/industry-styles', hash: 'dynamic-promo' },
  { id: 'clean-corporate', name: { en: 'Clean Corporate', zh: '极净商业蓝' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'clean-corporate' },
  { id: 'high-contrast-a11y', name: { en: 'High-Contrast Accessible', zh: '高反差全兼容' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'high-contrast-a11y' },
  { id: 'saas-gradient', name: { en: 'SaaS Gradient Modern', zh: 'SaaS 渐变现代' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'saas-gradient' },
  { id: 'ai-copilot', name: { en: 'AI Copilot Chat', zh: 'AI 副驾驶' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'ai-copilot' },
  { id: 'dev-first-dark', name: { en: 'Dev-First Dark', zh: '开发者暗黑' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'dev-first-dark' },
  { id: 'warm-productivity', name: { en: 'Warm Productivity', zh: '暖色生产力' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'warm-productivity' },
  { id: 'ai-analytics', name: { en: 'AI Analytics', zh: '智能叙事分析' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'ai-analytics' },
  { id: 'modular-dashboard', name: { en: 'Modular Dashboard', zh: '模块化仪表盘' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'modular-dashboard' },
  { id: 'story-hero', name: { en: 'Story-Driven Hero', zh: '叙事型首屏' }, group: 'industry', sub: 'saas', route: '/web-fx/industry-styles', hash: 'story-hero' },
  { id: 'tech-blog', name: { en: 'Tech Blog', zh: '科技博客' }, group: 'industry', sub: 'blog', route: '/web-fx/industry-styles', hash: 'tech-blog' },
  { id: 'humanities-blog', name: { en: 'Humanities Blog', zh: '人文博客' }, group: 'industry', sub: 'blog', route: '/web-fx/industry-styles', hash: 'humanities-blog' },
  { id: 'lifestyle-blog', name: { en: 'Lifestyle Blog', zh: '生活方式博客' }, group: 'industry', sub: 'blog', route: '/web-fx/industry-styles', hash: 'lifestyle-blog' },
  { id: 'indie-blog', name: { en: 'Indie Blog', zh: '独立博客' }, group: 'industry', sub: 'blog', route: '/web-fx/industry-styles', hash: 'indie-blog' },

  // 交互演示 Interaction Demos
  { id: 'magnetic-button', name: { en: 'Magnetic Button', zh: '磁性按钮' }, group: 'interaction', route: '/web-fx/gallery' },
  { id: 'hover-spotlight', name: { en: 'Hover Spotlight', zh: '悬停光斑' }, group: 'interaction', route: '/web-fx/gallery' },
  { id: 'shared-element', name: { en: 'Shared Element', zh: '共享元素' }, group: 'interaction', route: '/web-fx/gallery' },
  { id: 'smooth-accordion', name: { en: 'Smooth Accordion', zh: '弹性手风琴' }, group: 'interaction', route: '/web-fx/gallery' },
  { id: 'fluid-drag', name: { en: 'Fluid Drag & Drop', zh: '流体拖拽' }, group: 'interaction', route: '/web-fx/gallery' },
  { id: 'frosted-kpi', name: { en: 'Frosted KPI Card', zh: '毛玻璃卡片' }, group: 'interaction', route: '/web-fx/gallery' },
  { id: 'typography-engine', name: { en: 'Typography Engine', zh: '排版引擎' }, group: 'interaction', route: '/web-fx/typography' },
];

export const WEBFX_GROUPS = [
  { id: 'visual', name: { en: 'Visual Styles', zh: '视觉风格' }, icon: 'Palette',
    subs: [
      { id: 'material', name: { en: 'Material', zh: '材质模拟' } },
      { id: 'color', name: { en: 'Color & Light', zh: '色彩光影' } },
      { id: 'structure', name: { en: 'Structure', zh: '结构形态' } },
    ]
  },
  { id: 'industry', name: { en: 'Industry Styles', zh: '行业风格' }, icon: 'Building2',
    subs: [
      { id: 'logistics', name: { en: 'Logistics', zh: '物流基建' } },
      { id: 'finance', name: { en: 'Finance', zh: '金融加密' } },
      { id: 'ecommerce', name: { en: 'E-Commerce', zh: '商业电商' } },
      { id: 'saas', name: { en: 'SaaS & B2B', zh: '企业服务' } },
      { id: 'blog', name: { en: 'Blog', zh: '博客内容' } },
    ]
  },
  { id: 'interaction', name: { en: 'Interactions', zh: '交互演示' }, icon: 'MousePointerClick' },
];

// ═══ Helper Functions ═══

export function getAiName(item) {
  return `${item.name.en} ${item.name.zh}`;
}

export function getMiniprogramCount() {
  return MINIPROGRAM_CATALOG.length;
}

export function getWebfxCounts() {
  const visual = WEBFX_CATALOG.filter(i => i.group === 'visual').length;
  const industry = WEBFX_CATALOG.filter(i => i.group === 'industry').length;
  const interaction = WEBFX_CATALOG.filter(i => i.group === 'interaction').length;
  return { visual, industry, interaction, total: visual + industry + interaction };
}
