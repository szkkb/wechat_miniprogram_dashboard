# Component & FX Dashboard — 埋点方案

> 基于 logistics-platform Growth Loop 框架，适配开源 Dashboard 场景

## 1. 用户生命周期模型

```
发现 Discovery → 浏览 Browse → 互动 Engage → 转化 Convert → 传播 Spread
```

| 阶段 | 定义 | 关键问题 |
|------|------|---------|
| **发现** | 用户首次访问首页 | 从哪来的？搜索/分享/直接访问？ |
| **浏览** | 进入具体 demo 页面 | 看了什么？停留多久？看了几个？ |
| **互动** | 与 demo 产生交互 | 点了按钮？滑了卡片？拖了地球？ |
| **转化** | 复制名称 / 复制微信号 / 点击工具链接 | 复制了哪个名称？点了付费咨询？ |
| **传播** | 分享页面 / Star 项目 / Fork | 分享到哪里？GitHub 行为？ |

---

## 2. 事件命名规范

沿用 logistics-platform 的前缀体系：

| 前缀 | 类型 | 触发时机 | 示例 |
|------|------|---------|------|
| `pv_` | 页面浏览 | 进入页面 | `pv_home`, `pv_visual_styles` |
| `click_` | 点击 | 按钮/链接点击 | `click_copy_name`, `click_promo_cta` |
| `exp_` | 曝光 | 模块进入视口 | `exp_promo_card`, `exp_globe` |
| `interact_` | 交互 | 深度互动 | `interact_globe_drag`, `interact_swipe_card` |
| `copy_` | 复制 | 复制到剪贴板 | `copy_ai_name`, `copy_wechat_id` |
| `nav_` | 导航 | 侧边栏/筛选切换 | `nav_sidebar_click`, `nav_filter_change` |
| `outbound_` | 外链 | 离开本站 | `outbound_brandcolors`, `outbound_huemint` |

---

## 3. 完整事件字典

### 3.1 发现阶段 (Discovery)

| 事件 | 触发条件 | 关键属性 |
|------|---------|---------|
| `pv_home` | 首页加载完成 | `referrer`, `utm_source`, `utm_medium`, `utm_campaign`, `is_first_visit` |
| `pv_home_duration` | 首页离开时 | `duration_ms`, `scroll_depth_pct` |

**流量来源归因字段（首次访问写入 localStorage）：**
```
source:    utm_source || document.referrer 域名 || 'direct'
medium:    utm_medium || 'organic'
campaign:  utm_campaign || null
```

### 3.2 浏览阶段 (Browse)

| 事件 | 触发条件 | 关键属性 |
|------|---------|---------|
| `pv_miniprogram_lab` | 进入小程序域 | `entry_page`, `from_home` |
| `pv_webfx_overview` | 进入视觉 Dashboard 概览 | `from_home` |
| `pv_visual_styles` | 视觉风格页 | `filter`(all/material/color/structure) |
| `pv_industry_styles` | 行业风格页 | `filter`(all/logistics/finance/...) |
| `pv_wechat_buttons` | 加微信按钮页 | — |
| `pv_typography` | 排版引擎页 | — |
| `pv_gallery` | 交互画廊页 | — |
| `pv_demo_page` | 任意小程序 demo 页 | `demo_id`, `demo_name_zh`, `demo_name_en`, `group` |
| `nav_sidebar_click` | 侧边栏点击 | `domain`(miniprogram/webfx), `item_id`, `item_name` |
| `nav_filter_change` | 筛选切换 | `page`, `filter_from`, `filter_to` |
| `nav_back_home` | 点击"返回首页" | `from_domain` |

### 3.3 互动阶段 (Engage)

| 事件 | 触发条件 | 关键属性 |
|------|---------|---------|
| `interact_globe_drag` | 拖拽旋转 3D 地球 | `duration_ms`, `rotation_delta` |
| `interact_swipe_card` | 横滑运费卡片 | `cards_viewed`, `selected_plan` |
| `interact_tilt_hover` | Tilt 3D 悬停卡片 | `card_index`, `is_mobile`(auto-float) |
| `interact_particle_view` | 粒子网络在视口中 | `duration_visible_ms` |
| `interact_accordion_toggle` | 手风琴展开/收起 | `is_open` |
| `interact_drag_reorder` | 拖拽排序 | `items_moved` |
| `interact_typography_control` | 排版引擎控件调整 | `control`(width/height/font), `value` |
| `interact_expand_routes` | 展开备选线路 | `page` |
| `click_wechat_button_demo` | 点击加微信 demo 按钮 | `variant`(handoff/stamp/merge) |

### 3.4 转化阶段 (Convert)

这是最关键的阶段——用户产生了可衡量的价值行为。

| 事件 | 触发条件 | 关键属性 |
|------|---------|---------|
| `copy_ai_name` | 复制标准名称给 AI | `name_en`, `name_zh`, `page`, `component_type`(visual/industry/interaction/miniprogram) |
| `copy_wechat_id` | 复制微信号 xiaoleipro | `trigger`(left_btn/right_btn), `page`, `promo_position` |
| `click_promo_cta` | 点击"付费咨询"按钮 | `theme`(dark/light), `page`, `handoff_phase`(idle/copied) |
| `click_promo_wechat` | 点击微信号按钮 | `phase`(idle→copied), `page` |
| `outbound_brandcolors` | 点击 BrandColors 链接 | — |
| `outbound_huemint` | 点击 Huemint 链接 | — |
| `outbound_google_stitch` | 点击 Google Stitch 链接 | — |
| `outbound_github` | 点击 GitHub 链接（如有） | — |

### 3.5 传播阶段 (Spread)

| 事件 | 触发条件 | 关键属性 |
|------|---------|---------|
| `share_page` | 浏览器原生分享 / 复制链接 | `page`, `share_method` |
| `share_screenshot` | 截图（检测 visibilitychange） | `page` |

---

## 4. 关键漏斗分析

### 漏斗 1：首页到转化

```
pv_home
  → pv_webfx_overview 或 pv_miniprogram_lab    (选择入口)
  → pv_visual_styles 或 pv_demo_page            (浏览具体内容)
  → copy_ai_name 或 copy_wechat_id              (产生价值)
```

**SQL 示例：**
```sql
-- 首页→浏览→复制 三步漏斗转化率
SELECT
  COUNT(DISTINCT CASE WHEN event_type = 'pv_home' THEN session_id END) AS step1_home,
  COUNT(DISTINCT CASE WHEN event_type LIKE 'pv_%_styles' OR event_type = 'pv_demo_page' THEN session_id END) AS step2_browse,
  COUNT(DISTINCT CASE WHEN event_type LIKE 'copy_%' THEN session_id END) AS step3_convert,
  ROUND(step2_browse * 100.0 / NULLIF(step1_home, 0), 1) AS browse_rate,
  ROUND(step3_convert * 100.0 / NULLIF(step2_browse, 0), 1) AS convert_rate
FROM events
WHERE created_at >= CURRENT_DATE - INTERVAL '7 days';
```

### 漏斗 2：广告曝光到转化

```
exp_promo_card                   (广告进入视口)
  → click_promo_wechat           (点击微信号)
  → copy_wechat_id               (复制成功)
  → click_promo_cta (handoff)    (点击"打开微信搜索粘贴")
```

### 漏斗 3：物流同行路径（核心商业漏斗）

```
pv_industry_styles (filter=logistics)
  → interact_globe_drag           (被 3D 地球吸引)
  → exp_promo_card                (看到广告)
  → copy_wechat_id                (复制微信号)
```

---

## 5. 核心指标看板

### 5.1 流量指标

| 指标 | 计算方式 | 目标 |
|------|---------|------|
| DAU | `COUNT(DISTINCT visitor_id WHERE date = today)` | 观察趋势 |
| 页面浏览量 PV | `COUNT(*) WHERE event_type LIKE 'pv_%'` | 观察趋势 |
| 人均浏览页数 | `PV / DAU` | > 3 |
| 跳出率 | `单页会话数 / 总会话数` | < 60% |
| 平均停留时长 | `AVG(session_duration_ms)` | > 2 min |

### 5.2 互动指标

| 指标 | 计算方式 | 目标 |
|------|---------|------|
| 互动率 | `有 interact_* 事件的会话 / 总会话` | > 30% |
| 地球拖拽率 | `interact_globe_drag 会话 / pv_industry_styles 会话` | > 20% |
| 卡片滑动率 | `interact_swipe_card 会话 / pv_demo_page(swipe-tabs) 会话` | > 50% |

### 5.3 转化指标（最重要）

| 指标 | 计算方式 | 目标 |
|------|---------|------|
| 名称复制率 | `copy_ai_name 会话 / 总会话` | > 10% |
| 微信号复制率 | `copy_wechat_id / exp_promo_card` | > 5% |
| 广告 CTR | `click_promo_cta / exp_promo_card` | > 3% |
| 外链点击率 | `outbound_* / pv_home` | 观察 |
| 付费咨询转化 | `copy_wechat_id 独立访客数 / DAU` | > 2% |

### 5.4 内容热度

```sql
-- 最受欢迎的 demo Top 10（按浏览量）
SELECT
  properties->>'demo_id' AS demo,
  properties->>'demo_name_zh' AS name,
  COUNT(*) AS views,
  COUNT(DISTINCT visitor_id) AS unique_visitors
FROM events
WHERE event_type = 'pv_demo_page'
  AND created_at >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY 1, 2
ORDER BY views DESC
LIMIT 10;
```

```sql
-- 最常被复制的名称 Top 10
SELECT
  properties->>'name_zh' AS name,
  properties->>'name_en' AS name_en,
  COUNT(*) AS copy_count
FROM events
WHERE event_type = 'copy_ai_name'
  AND created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY 1, 2
ORDER BY copy_count DESC
LIMIT 10;
```

---

## 6. 流量归因方案

### 6.1 URL 参数体系

```
https://dashboard.example.com/?utm_source=github&utm_medium=readme&utm_campaign=launch
https://dashboard.example.com/?utm_source=xiaohongshu&utm_medium=post&utm_campaign=logistics_demo
https://dashboard.example.com/?utm_source=wechat&utm_medium=share&utm_campaign=friend
```

### 6.2 来源分组

| medium | 含义 | 来源示例 |
|--------|------|---------|
| `github` | GitHub 生态 | readme, star, fork, issue |
| `social` | 社交媒体 | 小红书、知乎、Twitter |
| `share` | 用户分享 | 微信、朋友圈 |
| `search` | 搜索引擎 | Google、百度、Bing |
| `direct` | 直接访问 | 书签、地址栏 |

### 6.3 归因存储（localStorage 首次触达模型）

```js
// 首次访问时写入，后续不覆盖
if (!localStorage.getItem('first_source')) {
  const params = new URLSearchParams(location.search);
  localStorage.setItem('first_source', params.get('utm_source') || getRefererDomain() || 'direct');
  localStorage.setItem('first_medium', params.get('utm_medium') || 'organic');
  localStorage.setItem('first_campaign', params.get('utm_campaign') || '');
  localStorage.setItem('first_visit_at', new Date().toISOString());
}
```

---

## 7. 技术实现方案

### 7.1 轻量 Track SDK（前端）

```js
// src/utils/track.js
const ENDPOINT = '/api/events'; // 或第三方如 Umami / Plausible

let visitorId = localStorage.getItem('vid');
if (!visitorId) {
  visitorId = crypto.randomUUID();
  localStorage.setItem('vid', visitorId);
}

export function track(eventType, properties = {}) {
  const payload = {
    event: eventType,
    visitor_id: visitorId,
    page: location.pathname,
    timestamp: Date.now(),
    first_source: localStorage.getItem('first_source'),
    first_medium: localStorage.getItem('first_medium'),
    ...properties,
  };

  // Fire-and-forget
  if (navigator.sendBeacon) {
    navigator.sendBeacon(ENDPOINT, JSON.stringify(payload));
  } else {
    fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(payload), keepalive: true });
  }

  // Dev mode
  if (import.meta.env.DEV) {
    console.log('[Track]', eventType, properties);
  }
}
```

### 7.2 推荐数据收集方案

| 方案 | 成本 | 适合 | 特点 |
|------|------|------|------|
| **Umami** (自部署) | 免费 | ✅ 推荐 | 隐私友好、开源、自定义事件、Dashboard 好看 |
| **Plausible** (云) | $9/月 | 预算充足 | 无 cookie、GDPR 友好 |
| **Google Analytics** | 免费 | 流量大 | 功能强但重、隐私争议 |
| **自建 API** | 开发成本 | 完全控制 | 参考 logistics-platform 的 events.ts |

**推荐：Umami 自部署** — 与本项目的开源精神一致，一行 script 标签即可接入，自带漂亮看板。

---

## 8. 埋点优先级

### P0（第一天就要有）

| 事件 | 理由 |
|------|------|
| `pv_home` + 归因 | 知道用户从哪来 |
| `pv_*` 所有页面浏览 | 知道用户看什么 |
| `copy_ai_name` | 核心价值动作 |
| `copy_wechat_id` | 商业转化动作 |

### P1（一周内加上）

| 事件 | 理由 |
|------|------|
| `exp_promo_card` | 衡量广告曝光 |
| `click_promo_cta` | 衡量广告点击 |
| `nav_filter_change` | 理解用户浏览偏好 |
| `outbound_*` | 工具推荐是否有价值 |

### P2（有数据后再加）

| 事件 | 理由 |
|------|------|
| `interact_*` 系列 | 深度互动分析 |
| `share_*` | 传播效果衡量 |
| 停留时长 | 内容质量评估 |
