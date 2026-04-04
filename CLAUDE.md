# CLAUDE.md — AI Agent 操作手册

> 任何 AI Agent 在操作此项目前必须阅读本文件。

## 项目概述

**Component & FX Board** — 开源的小程序组件 + 网站视觉风格 + Growth Loop 学习 Dashboard
- **线上地址**: https://www.kkbsz.com
- **GitHub**: https://github.com/szkkb/wechat_miniprogram_dashboard
- **协议**: CC BY-NC 4.0（非商业使用）

## 技术栈

- React 18 + React Router v6 + Vite 5
- Framer Motion（动画）、Lucide React（图标）
- COBE（3D 地球）、tsParticles（粒子效果）
- react-markdown（Markdown 渲染）
- Node.js 20+（构建需要）

## 三域架构

| 域 | 路由前缀 | 布局组件 | 侧边栏 |
|---|--------|---------|--------|
| 小程序 Lab | `/mini-program/*` | `Layout.jsx` | `Layout/Sidebar.jsx` |
| 视觉 Dashboard | `/web-fx/*` | `WebFXLayout.jsx` | `WebFXLayout/Sidebar.jsx` |
| Growth Loop | `/growth-loop/*` | `GrowthLoopLayout.jsx` | `GrowthLoopLayout/Sidebar.jsx` |

## 关键文件

| 文件 | 说明 |
|------|------|
| `src/App.jsx` | 路由表（三域 + 首页） |
| `src/data/catalog-registry.js` | 所有 demo 的唯一数据源 |
| `src/utils/track.js` | localStorage 埋点 SDK |
| `src/components/Common/CopyableName.jsx` | 可复制标准名称组件 |
| `src/components/Common/PromoCard.jsx` | 广告卡组件（Seamless Handoff 交互） |
| `src/pages/LandingPage.jsx` | 首页（三入口） |

## 部署方式

**托管平台**: Cloudflare Pages（手动 CLI 部署，非 GitHub 集成）

**一键部署命令**:
```bash
./deploy.sh
```

**等效于**:
```bash
git push origin main
npm run build
npx wrangler pages deploy dist --project-name wechat-dashboard --commit-dirty=true
```

**部署前提**:
- Node.js 20+（路径: `/Users/Jeremy/.nvm/versions/node/v20.20.0/bin`）
- Wrangler CLI 已登录（`npx wrangler whoami` 验证）
- 如果 wrangler 未登录，运行 `npx wrangler login`

**重要**: 每次 push 到 GitHub 后不会自动部署。必须手动运行 `./deploy.sh` 或上述命令。

## 域名配置

| 域名 | 指向 |
|------|------|
| `kkbsz.com` | `wechat-dashboard.pages.dev`（Cloudflare CNAME） |
| `www.kkbsz.com` | `wechat-dashboard.pages.dev`（Cloudflare CNAME） |

- DNS 托管: Cloudflare
- 域名注册: Namecheap
- SSL: Cloudflare 自动签发

## 开发流程

```bash
# 本地开发（需要 Node 20）
export PATH="/Users/Jeremy/.nvm/versions/node/v20.20.0/bin:$PATH"
npm run dev          # 启动 Vite 开发服务器 (localhost:5173)

# 构建
npm run build        # 输出到 dist/

# 部署上线
./deploy.sh          # push + build + deploy 一键完成
```

## 埋点系统

- **SDK**: `src/utils/track.js`（纯前端 localStorage）
- **存储**: `localStorage key: cfx_events`，最多 500 条 FIFO
- **看板**: Growth Loop 概览页第四区块"数据观摩"
- **事件**: `pv_home`, `pv_miniprogram`, `pv_webfx`, `pv_growthloop`, `copy_name`, `copy_wechat`, `click_tool`, `session_start`

## 广告系统

- **组件**: `PromoCard.jsx`（dark/light 双主题）
- **交互**: Seamless Handoff（复制→引导打开微信）
- **位置**: 导航栏 demo 底部、运费查询 demo 底部、Industry Styles 物流筛选第 3 个 demo 后
- **微信号**: `xiaoleipro`
- **CTA 文案**: "付费咨询"

## 注意事项

- 修改代码后如需上线，必须运行 `./deploy.sh`
- `package.json` 中 Node 引擎无锁定，但构建必须用 Node 20+（Vite 5 要求）
- Growth Loop 的可视化组件（Outline/Lifecycle/KeywordMap）是从 `growth-loop-mastery` 项目复制的，全部是纯 React 内联样式
- 学习内容的 Markdown 文件存放在 `public/growth-loop-content/`，通过 `fetch()` 加载
