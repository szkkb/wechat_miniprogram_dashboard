# Analytics Dashboard Wireframe v1

## Prompt

```
Design a single-page analytics dashboard wireframe for a web application. The page visualizes user lifecycle data and conversion funnels for an open-source "Component & FX Dashboard" project.

IMPORTANT: All text must be in Simplified Chinese (简体中文). This is a data analytics page, NOT a marketing page.

## Page Dimensions
- Width: 1440px, Height: 1800px (tall scrollable page)
- Background: #0a0a0f (very dark)
- Text: white and gray on dark background

## Color Palette (strict)
- Background: #0a0a0f
- Card backgrounds: #111118
- Accent green: #22c55e (for positive metrics)
- Accent red: #ef4444 (for negative/alert metrics)
- Accent blue: #3b82f6 (for neutral data)
- Accent purple: #a855f7 (for highlights)
- Text primary: #f8fafc
- Text secondary: #64748b

## Typography
- Headlines: bold sans-serif, clean
- Numbers/metrics: monospace for data
- All labels in Simplified Chinese

## Page Layout (top to bottom, 5 sections):

### Section 1: Header Bar (60px height)
- Left: "📊 数据看板" title
- Right: Date range selector showing "最近 7 天 ▼" and a refresh icon
- Clean dark header with subtle bottom border

### Section 2: KPI Overview Strip (120px height)
- Horizontal row of 5 metric cards, evenly spaced:
  1. "日活跃 DAU" → big number "847" with green "+12.3%" badge
  2. "人均浏览" → "4.2 页" with green "+8%"
  3. "名称复制率" → "14.7%" with green "+3.2%"
  4. "微信号复制" → "38 次" with purple "本周"
  5. "跳出率" → "52%" with red "需优化"
- Each card: dark card with rounded corners, big bold number, small label above, change indicator below

### Section 3: User Lifecycle Funnel (400px height)
- Title: "用户生命周期漏斗"
- A HORIZONTAL funnel visualization showing 5 stages left-to-right:
  - 发现 Discovery: 2,847 (100%) — wide bar, blue
  - 浏览 Browse: 1,923 (67.5%) — narrower bar, blue
  - 互动 Engage: 892 (31.3%) — narrower, purple
  - 转化 Convert: 418 (14.7%) — narrower, green
  - 传播 Spread: 67 (2.4%) — narrowest, gold
- Each stage shows: Chinese label, English label below, absolute number, percentage
- Bars get progressively narrower left-to-right to form a funnel shape
- Between each stage: conversion rate arrow (e.g., "67.5% →")
- Below the funnel: "转化洞察：从互动到转化的 31.3% → 14.7% 跌幅最大，建议优化 CopyableName 组件的可见性"

### Section 4: Three Analysis Panels Side-by-Side (500px height)
Three equal-width cards in a row:

**Panel A: "内容热度 Top 10"**
- A vertical bar chart or ranked list showing top 10 most viewed demos:
  1. 玻璃拟态 Glassmorphism — 342 次
  2. 全球物流网络 Global Network — 287 次
  3. 赛博朋克 Neon Cyberpunk — 256 次
  4. AI Copilot Chat — 231 次
  5. 货代操作面板 Freight Forwarding — 198 次
  6. 3D 悬停服务卡 Tilt 3D — 176 次
  7. 集装箱追踪 Container Tracking — 165 次
  8. 新野蛮主义 Neo-Brutalism — 149 次
  9. 暗夜淬金 Premium Metallic — 137 次
  10. 粒子连线 Particle Network — 128 次
- Horizontal bars with rank numbers, Chinese name, view count

**Panel B: "广告转化漏斗"**
- A vertical funnel specific to the promo card:
  - 广告曝光 → 1,247
  - 点击微信号 → 156 (12.5%)
  - 复制成功 → 134 (85.9%)
  - 点击"打开微信" → 89 (66.4%)
- Funnel visualization with percentage drop between each step
- Bottom insight: "Seamless Handoff 方案的复制→打开微信转化率 66.4%"

**Panel C: "流量来源分布"**
- A donut/pie chart showing traffic sources:
  - GitHub: 38%
  - 搜索引擎: 24%
  - 社交媒体: 18%
  - 用户分享: 12%
  - 直接访问: 8%
- Legend on the right side with colored dots and percentages
- Center of donut: total number "2,847"

### Section 5: Event Timeline & Recent Activity (500px height)
Two panels side by side:

**Left Panel: "最常被复制的名称"**
- Ranked list with copy counts:
  1. 🥇 Glassmorphism 玻璃拟态 — 89 次
  2. 🥈 Global Network 全球物流网络 — 67 次
  3. 🥉 Neon Cyberpunk 赛博朋克 — 54 次
  4. AI Copilot Chat AI 副驾驶 — 48 次
  5. Freight Forwarding 货代操作面板 — 43 次
- Each row: medal emoji, bilingual name, copy count, small trend arrow

**Right Panel: "实时事件流"**
- A scrollable event log showing recent user actions:
  - 14:23:01 — copy_ai_name: "Glassmorphism 玻璃拟态" — GitHub
  - 14:22:45 — pv_industry_styles filter=logistics — 搜索引擎
  - 14:22:30 — interact_globe_drag duration=3.2s — GitHub
  - 14:22:12 — copy_wechat_id — 社交媒体
  - 14:21:58 — pv_visual_styles filter=material — 直接访问
  - 14:21:30 — click_promo_cta phase=handoff — GitHub
  - (more rows fading out...)
- Each row: timestamp, event name in monospace, detail, source badge
- Green dot indicator for "Live" in the header

## Design Rules
- No gradients on cards (flat dark surfaces)
- Subtle 1px borders on cards (rgba white 5%)
- Rounded corners: 12px on cards
- No decorative illustrations
- Data-first: numbers should be the largest visual element
- Monospace font for all numbers and event names
- Clean grid layout with consistent 24px gaps
- The overall feel should be like a Grafana/Datadog dashboard but more beautiful
```
