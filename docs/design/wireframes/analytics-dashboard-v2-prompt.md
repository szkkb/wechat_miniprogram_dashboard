# Analytics Dashboard Wireframe v2 — 基于真实业务逻辑

## 业务背景
这是一个开源的组件与视觉风格参考 Dashboard 的运营数据看板。
数据来自 Umami 自部署分析平台。
核心用户：初学者开发者 + 国际物流同行。
网站刚上线，流量从 GitHub 和搜索引擎来。

## Prompt

```
Design a real-time analytics dashboard wireframe for an open-source web project. This dashboard uses Umami (self-hosted) as the data source. The page must reflect REAL operational data structure — not marketing metrics.

All text in Simplified Chinese (简体中文). Numbers use monospace font.

## Page: 1440px wide × 2000px tall, scrollable
## Background: #0a0a0f
## Card bg: #111118, border: 1px solid rgba(255,255,255,0.05), radius: 12px

## Color system:
- Green #22c55e: positive change
- Red #ef4444: negative / alert
- Blue #3b82f6: primary data
- Purple #a855f7: accent / highlight
- Text: #f8fafc primary, #94a3b8 secondary, #475569 tertiary

## Layout — 6 sections, top to bottom:

### Section 1: Header + Real-Time Strip (80px)
Left side: "📊 运营数据看板" as page title, below it small text "数据源：Umami · 最后更新 14:23"
Right side: Date picker "最近 7 天 ▼", and a green pulsing dot with "实时在线 12 人"

### Section 2: Core Metrics Row (100px)
4 metric cards in a horizontal row, each card shows:
- Small label on top (gray)
- Large bold number (white, monospace)
- Change badge (green/red with arrow)

The 4 metrics:
1. "今日访客 UV" → "--" (placeholder, no data yet, show dashed outline) with note "接入 Umami 后自动填充"
2. "今日浏览量 PV" → "--"
3. "平均停留" → "--"
4. "跳出率" → "--"

IMPORTANT: Since the project just launched, show "--" placeholders with dashed borders to indicate "awaiting real data". This is honest and real, not fake numbers.

### Section 3: Traffic Sources — 流量来源归因 (450px)
Title: "流量来源归因"
Subtitle: "用户从哪里来？各渠道带来的流量质量如何？"

Left half (60%): A donut chart placeholder with 5 segments labeled:
- GitHub（readme / star）
- 搜索引擎（Google / 百度）
- 社交媒体（小红书 / 知乎）
- 用户分享（微信 / 链接）
- 直接访问（书签）
Center of donut: "总访客" + "--"
Below the chart: "UTM 参数追踪：?utm_source=github&utm_medium=readme"

Right half (40%): A comparison table titled "各来源质量对比":
| 来源 | 访客 | 平均停留 | 浏览深度 | 复制率 |
| GitHub | -- | -- | -- | -- |
| 搜索引擎 | -- | -- | -- | -- |
| 社交媒体 | -- | -- | -- | -- |
| 用户分享 | -- | -- | -- | -- |
| 直接访问 | -- | -- | -- | -- |
Table has dark rows with subtle alternating background. All values show "--".

### Section 4: User Path Analysis — 用户路径分析 (500px)
Title: "用户路径分析"
Subtitle: "用户进入后的行为流向"

This section has 3 sub-panels:

**Panel A (left, 33%): "入口分流"**
A horizontal bar showing the split:
- 小程序组件 Lab: [===== 52% =====]
- 网站视觉 Dashboard: [==== 48% ====]
Both bars show "--%" as placeholder
Below: "首页双卡入口的选择比例"

**Panel B (center, 33%): "页面热度 Top 10"**
Vertical ranked list with horizontal bars:
1. /web-fx/industry-styles — ██████ --
2. /web-fx/visual-styles — █████ --
3. /mini-program/ui-components/swipe-tabs — ████ --
4. /web-fx/wechat-buttons — ████ --
5. /mini-program/navigation/navbar — ███ --
6. /web-fx/typography — ███ --
7. /mini-program/ui-components/premium-cards — ██ --
8. /web-fx — ██ --
9. / (homepage) — ██ --
10. /mini-program/canvas/poster — █ --
Use actual route paths from the project. Bar lengths vary. Numbers show "--".

**Panel C (right, 33%): "退出页 Top 5"**
Where users leave the site:
1. /web-fx/industry-styles (物流同行看完就走？)
2. / (首页跳出)
3. /web-fx/visual-styles
4. /mini-program/ui-components/swipe-tabs
5. /web-fx/wechat-buttons
Each row: route path, small annotation in parentheses, "--%" exit rate
A yellow warning icon next to high exit rate pages

### Section 5: User Behavior Flow — 行为流向图 (400px)
Title: "行为流向图"
Subtitle: "从进入到离开的完整路径"

A simplified Sankey-style flow diagram showing:
```
首页 (100%)
├─→ 小程序 Lab (52%) ──→ 浏览 demo ──→ 复制名称 (?) ──→ 离开
│                                   └─→ 看到广告 ──→ 复制微信号 (?)
└─→ 视觉 Dashboard (48%) ──→ 浏览风格 ──→ 复制名称 (?) ──→ 离开
                                        └─→ 看到广告 ──→ 复制微信号 (?)
```

Use colored flow lines:
- Blue lines for browsing flow
- Green lines for conversion (copy name)
- Purple lines for commercial conversion (copy wechat)
- Gray lines for exit

Nodes are rounded rectangles with labels. Lines have varying thickness (thicker = more users). All numbers show "--" or "?" to indicate awaiting data.

### Section 6: Custom Events — 自定义事件追踪 (400px)
Title: "关键行为事件"
Subtitle: "需要通过 track() SDK 埋点的自定义事件"

A table with 3 column groups:

**Group A: "价值行为" (green header bar)**
| 事件名 | 说明 | 今日次数 |
| copy_ai_name | 复制标准名称给 AI | -- |
| copy_wechat_id | 复制微信号 xiaoleipro | -- |
| click_promo_cta | 点击"付费咨询" | -- |

**Group B: "浏览行为" (blue header bar)**
| 事件名 | 说明 | 今日次数 |
| nav_filter_change | 切换风格筛选 | -- |
| interact_globe_drag | 拖拽 3D 地球 | -- |
| interact_swipe_card | 横滑运费卡片 | -- |

**Group C: "外链点击" (purple header bar)**
| 事件名 | 说明 | 今日次数 |
| outbound_brandcolors | 点击 BrandColors | -- |
| outbound_huemint | 点击 Huemint | -- |
| outbound_google_stitch | 点击 Google Stitch | -- |

Each table row has the event name in monospace font, description in regular text, and "--" for count.
At the bottom: a notice card with blue background: "💡 接入指南：部署 Umami → 添加 track.js → 配置自定义事件 → 数据自动填充此看板"

## Design Rules:
- All "--" placeholders use dashed borders to clearly communicate "awaiting data"
- This is a REAL dashboard for a REAL project — not a demo with fake numbers
- Monospace for all numbers, event names, and route paths
- Clean Grafana/Datadog aesthetic but darker and more minimal
- No decorative elements, purely functional
- Each section clearly labeled with Chinese title + English context where helpful
```
