# Component & FX Board

一个开源的小程序组件、网站视觉风格与 Growth Loop 学习 Dashboard。

**线上地址**: [www.kkbsz.com](https://www.kkbsz.com)

## 三个板块

### 📱 小程序组件 Lab
微信小程序原生组件与 API 的交互式演示（18 个组件）
- 视图容器、表单控件、富文本、高级卡片、滑动标签页
- 时间轴、导航栏、国家选择器、验证码
- 地图标注、Canvas 海报、快捷登录、悬浮客服
- Skyline 引擎、手势动效、下拉刷新

### 🎨 网站视觉 Dashboard
视觉风格与前端交互效果目录（50+ 个演示）
- **13 种视觉风格**: 玻璃拟态、新拟物、赛博朋克、包豪斯等
- **31 种行业风格**: 物流（12 种含 3D 地球）、金融、电商、SaaS、博客
- **交互演示**: 磁性按钮、拖拽排序、排版引擎、加微信按钮

### 📚 Growth Loop 学习
增长飞轮方法论的系统学习工具
- 3 个交互式可视化（学习大纲、生命周期图、关键词图谱）
- Phase 1 核心教学（范式转换、循环解剖、术语表）
- 实践模板（循环设计画布、商业画布、实验模板）
- 40+ 结构化 AI Prompt 库
- 数据观摩看板（localStorage 真实行为数据）

## 使用方法

浏览效果 → 找到想要的 → 复制标准名称 → 粘贴给 AI 工具（ChatGPT / Claude / 豆包）

每个组件和风格都有标准中英文名称，点击 📋 按钮一键复制。

## 技术栈

- **React 18** + React Router v6
- **Vite 5** — 构建工具
- **Framer Motion** — 动画与手势
- **COBE** — WebGL 3D 地球
- **tsParticles** — 粒子效果
- **react-markdown** — Markdown 渲染

## 快速开始

```bash
# 需要 Node.js 20+
npm install
npm run dev
```

## 部署

仓库不包含生产环境的域名映射、Pages 项目名或本机路径配置。
如需自行部署到 Cloudflare Pages，请先准备你自己的 Pages 项目和 Wrangler 登录状态。

```bash
CLOUDFLARE_PAGES_PROJECT=your-pages-project ./deploy.sh
```

脚本会按当前分支执行 `git push`、`npm run build`，然后把 `dist/` 部署到你指定的 Pages 项目。

## 项目结构

```
src/
├── components/
│   ├── Layout/              # 小程序 Lab 布局
│   ├── WebFXLayout/         # 视觉 Dashboard 布局
│   ├── GrowthLoopLayout/    # Growth Loop 布局
│   └── Common/              # CopyableName、PromoCard
├── pages/
│   ├── components/          # 小程序基础组件
│   ├── ui-components/       # 高级 UI 组件
│   ├── web-fx/              # 视觉风格与行业风格
│   └── growth-loop/         # Growth Loop 学习
├── data/catalog-registry.js # 所有 demo 的唯一数据源
├── utils/track.js           # localStorage 埋点 SDK
└── main.jsx
```

## 配色工具推荐

- [BrandColors](https://brandcolors.net/) — 大品牌配色参考
- [Huemint](https://huemint.com/brand-intersection/) — AI 智能配色生成
- [Google Stitch](https://stitch.withgoogle.com/home) — 设计系统导出

## License

本项目采用 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) 协议。

[![CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc/4.0/)

**可以**: 自由复制、分享、修改，用于个人学习和非商业项目

**需要**: 注明原作者和出处

**不可以**: 用于商业用途

如需商业授权，请联系微信：`xiaoleipro`
