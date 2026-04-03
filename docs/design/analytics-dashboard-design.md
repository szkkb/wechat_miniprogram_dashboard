# 运营数据看板 — 设计文档

> 让每一位用户看到自己在这个 Dashboard 上的真实行为轨迹，同时学习 Growth Loop 理念。

## 1. 产品定位

这不是一个传统的运营后台——它是一个**前端本地数据看板**，核心目的：

1. **让用户看到自己的真实行为数据**：我浏览了哪些组件、复制了几次名称、点了什么
2. **教用户理解 Growth Loop**：通过亲身体验"生命周期漏斗"，理解产品运营的数据思维
3. **展示前端数据可视化能力**：作为 Dashboard 项目本身的能力展示

**不依赖任何后台服务**。所有数据存在用户浏览器的 localStorage 中。

---

## 2. 数据架构

### 2.1 存储方案

```
localStorage key: "cfx_events"
值: JSON 数组，每条记录一个事件
```

```js
// 单条事件结构
{
  "t": 1712150400000,    // 时间戳 (ms)
  "e": "pv_home",        // 事件名
  "p": "/",              // 页面路径
  "d": {                 // 附加数据（可选）
    "filter": "logistics",
    "name_zh": "玻璃拟态"
  }
}
```

### 2.2 存储限制

- 最多保留最近 **500 条**事件（超出时 FIFO 淘汰最旧的）
- 单条事件 ≤ 200 字符
- 总占用 ≤ 100KB（localStorage 通常有 5MB 额度，绰绰有余）

### 2.3 track.js SDK

```js
// src/utils/track.js

const STORAGE_KEY = 'cfx_events';
const MAX_EVENTS = 500;

export function track(eventName, data = {}) {
  try {
    const events = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    events.push({
      t: Date.now(),
      e: eventName,
      p: location.pathname,
      d: data,
    });
    // FIFO 淘汰
    while (events.length > MAX_EVENTS) events.shift();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch {
    // localStorage 不可用时静默失败
  }
}

export function getEvents() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function clearEvents() {
  localStorage.removeItem(STORAGE_KEY);
}
```

---

## 3. 埋点事件清单

只埋**最有价值**的事件，不贪多：

### 3.1 页面浏览（自动）

| 事件名 | 触发点 | 附加数据 |
|--------|--------|---------|
| `pv_home` | 首页加载 | — |
| `pv_miniprogram` | 进入小程序域任意页 | `{ page: "swipe-tabs" }` |
| `pv_webfx` | 进入视觉域任意页 | `{ page: "visual-styles", filter: "material" }` |
| `pv_analytics` | 进入数据看板页 | — |

### 3.2 价值行为（核心）

| 事件名 | 触发点 | 附加数据 |
|--------|--------|---------|
| `copy_name` | CopyableName 复制按钮 | `{ en: "Glassmorphism", zh: "玻璃拟态" }` |
| `copy_wechat` | PromoCard 微信号复制 | `{ trigger: "left" 或 "right" }` |
| `click_cta` | PromoCard "付费咨询" | `{ page: "/web-fx/industry-styles" }` |
| `click_tool` | 首页外链工具 | `{ tool: "brandcolors" }` |

### 3.3 互动行为（关键交互）

| 事件名 | 触发点 | 附加数据 |
|--------|--------|---------|
| `interact_globe` | 拖拽 3D 地球 | — |
| `interact_swipe` | 横滑运费卡片 | `{ plan: "plan-best" }` |
| `interact_tilt` | Tilt 3D 卡片悬停 | — |
| `nav_filter` | 切换风格筛选 | `{ from: "all", to: "logistics" }` |
| `nav_sidebar` | 侧边栏点击 | `{ item: "rich-text" }` |

### 3.4 会话标记

| 事件名 | 触发点 | 附加数据 |
|--------|--------|---------|
| `session_start` | 每次打开网站（30分钟无活动算新会话） | `{ referrer: document.referrer }` |

**总计：14 个事件**。精简够用，不过度埋点。

---

## 4. 看板页面设计

### 4.1 路由

```
/web-fx/analytics
```

在 Web FX 侧边栏"交互演示"分组中加入，作为交互 demo 的一部分。

### 4.2 信息架构（6 个区域）

对应线框图 v2 的布局：

```
┌─────────────────────────────────────────────────────┐
│ Section 1: 顶部摘要条                                 │
│ 总事件数 | 浏览页面数 | 复制次数 | 首次访问时间          │
├─────────────────────────────────────────────────────┤
│ Section 2: 流量来源                                   │
│ referrer 分布饼图 + 首次来源记录                        │
├─────────────────────────────────────────────────────┤
│ Section 3: 用户路径分析                                │
│ 入口分流 | 页面热度 Top 10 | 退出页 Top 5              │
├─────────────────────────────────────────────────────┤
│ Section 4: 行为流向                                   │
│ 首页 → 入口选择 → demo 浏览 → 价值行为 → 离开          │
├─────────────────────────────────────────────────────┤
│ Section 5: 关键行为事件                                │
│ 复制名称排行 | 广告转化 | 外链点击                       │
├─────────────────────────────────────────────────────┤
│ Section 6: 事件时间线                                  │
│ 最近 50 条事件的实时流                                  │
└─────────────────────────────────────────────────────┘
```

### 4.3 各 Section 详细设计

#### Section 1: 顶部摘要条

从 localStorage 实时计算：

| 指标 | 计算方式 | 说明 |
|------|---------|------|
| 总事件数 | `events.length` | 你在这个网站上产生了多少行为 |
| 浏览页面数 | `count(distinct pv_*)` | 你看了几个不同页面 |
| 复制次数 | `count(copy_*)` | 你复制了几次名称/微信号 |
| 首次访问 | `events[0].t` 格式化 | 你第一次来是什么时候 |

如果 events 为空（新用户），显示：
```
"你还没有产生任何行为数据。去浏览一些组件和视觉风格吧！"
```

#### Section 2: 流量来源

- 从 `session_start` 事件的 `referrer` 字段提取域名
- 分组为：GitHub / 搜索引擎 / 社交媒体 / 直接访问 / 其他
- 甜甜圈图展示分布
- 如果只有一个来源（大概率），直接显示："你通过 [来源] 发现了这个项目"

#### Section 3: 用户路径分析

**入口分流：**
- 统计 `pv_miniprogram` vs `pv_webfx` 的事件数
- 水平对比条显示比例

**页面热度 Top 10：**
- 从所有 `pv_*` 事件中提取页面路径
- 按访问次数降序排列
- 显示真实路由路径 + 访问次数

**退出页分析：**
- 每个 session 最后一个 `pv_*` 事件的页面
- 提示用户："你最常在这些页面离开"

#### Section 4: 行为流向

简化版桑基图（CSS 实现，不依赖 D3）：

```
首页 ─┬─→ 小程序 Lab ──→ 浏览 demo ──→ 复制名称
      │                             └─→ 看到广告 ──→ 复制微信号
      └─→ 视觉 Dashboard ──→ 浏览风格 ──→ 复制名称
                                      └─→ 看到广告 ──→ 复制微信号
```

节点上显示用户在每个阶段的实际事件数。线条粗细按比例。

#### Section 5: 关键行为事件

**复制名称排行：**
- 从 `copy_name` 事件中提取 `name_zh` + `name_en`
- 按次数降序排列
- 显示 Top 5 + 奖牌 emoji

**广告转化：**
- `copy_wechat` 次数
- `click_cta` 次数
- 如果为 0，显示："你还没有点击过广告"

**外链点击：**
- `click_tool` 事件按 tool 分组
- 如果为 0，显示："去首页看看推荐的配色工具吧"

#### Section 6: 事件时间线

- 取最近 50 条事件
- 每条显示：时间（HH:MM:SS）、事件名（monospace）、页面、附加数据
- 最新的在上面
- 绿色脉冲点表示"数据实时更新中"

---

## 5. Growth Loop 教学文案

在看板页面顶部加一段教学引言：

```
📊 这是你在本站的真实行为数据

每一次浏览、复制、点击都被记录在你的浏览器本地（localStorage）。
没有服务器，没有后台，数据只属于你。

这个看板展示了 Growth Loop（增长飞轮）的核心理念：
发现 → 浏览 → 互动 → 转化 → 传播

通过观察你自己的行为数据，你能直观理解：
· 哪些内容吸引你停留最久
· 你的行为路径是否符合产品设计的预期
· 转化漏斗在哪里出现了断层

这正是产品经理和增长团队每天在做的事情——
只不过他们用的是 Mixpanel 和 Amplitude，而你用的是 localStorage。
```

---

## 6. 技术实现清单

### 6.1 新增文件

| 文件 | 说明 |
|------|------|
| `src/utils/track.js` | 埋点 SDK（track / getEvents / clearEvents） |
| `src/pages/web-fx/AnalyticsDashboard.jsx` | 看板页面组件 |
| `src/pages/web-fx/AnalyticsDashboard.css` | 看板样式 |

### 6.2 修改文件

| 文件 | 修改 |
|------|------|
| `src/App.jsx` | 加路由 `/web-fx/analytics` |
| `src/data/catalog-registry.js` | 加 interaction 条目 |
| `src/components/Common/CopyableName.jsx` | 加 `track('copy_name', ...)` |
| `src/components/Common/PromoCard.jsx` | 加 `track('copy_wechat', ...)` / `track('click_cta', ...)` |
| `src/pages/LandingPage.jsx` | 加 `track('pv_home')` / `track('click_tool', ...)` |

### 6.3 埋点集成方式

在每个页面组件的 `useEffect` 中调用 `track()`：

```jsx
import { track } from '../../utils/track';

useEffect(() => {
  track('pv_visual_styles', { filter: active });
}, []);
```

CopyableName 复制时：

```jsx
const handleCopy = () => {
  // ...existing copy logic...
  track('copy_name', { en, zh });
};
```

### 6.4 看板数据计算

所有计算在前端实时完成，从 `getEvents()` 读取后用 `useMemo` 聚合：

```jsx
const stats = useMemo(() => {
  const events = getEvents();
  return {
    total: events.length,
    pages: new Set(events.filter(e => e.e.startsWith('pv_')).map(e => e.p)).size,
    copies: events.filter(e => e.e.startsWith('copy_')).length,
    firstVisit: events[0]?.t ? new Date(events[0].t).toLocaleDateString() : null,
    // ...更多聚合
  };
}, []);
```

---

## 7. 线框图参考

- v1 (示例数据版): `docs/design/wireframes/analytics-dashboard-v1.png`
- v2 (真实数据版): `docs/design/wireframes/analytics-dashboard-v2.png`

信息架构以 v2 为准。

---

## 8. 实现优先级

| 优先级 | 内容 | 工作量 |
|--------|------|--------|
| **P0** | track.js SDK + 4 个核心 pv 事件 | 0.5h |
| **P0** | copy_name + copy_wechat 埋点 | 0.5h |
| **P1** | 看板页面 Section 1-3（摘要+来源+路径） | 2h |
| **P1** | 看板页面 Section 5-6（事件表+时间线） | 1.5h |
| **P2** | Section 4 行为流向图（CSS 桑基图） | 2h |
| **P2** | 互动事件埋点（globe/swipe/tilt） | 1h |
| **P3** | Growth Loop 教学文案完善 | 0.5h |
