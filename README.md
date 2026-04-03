# WeChat Mini Program Dashboard

一个基于 React 构建的微信小程序能力演示 Dashboard，以高保真 Web 模拟的方式展示微信小程序的核心组件、API 和交互模式。

## 预览

项目包含两个主要模块：

- **Mini Program Lab** — 微信小程序原生能力的交互式演示
- **Web FX Gallery** — 前端视觉特效与排版展示

## 已实现的能力

### UI 组件
- 视图容器：`scroll-view`、`swiper`、`movable-view`
- 表单控件：`switch`、`input`、`slider`
- 基础内容：`progress`、`icon`、Feedback API
- 富文本、高级卡片、滑动标签页

### 高阶渲染与交互
- Skyline 引擎特性：`sticky-header`、`draggable-sheet`、`grid-view` 瀑布流
- 动效与手势：共享元素转场、Worklet 手势系统（左滑删除）

### 设备与硬件 API
- 相机扫码、地理位置、设备震动、剪贴板

### 更多模块
- 导航布局、国家选择器、高级表单验证码
- 地图与 LBS、Canvas 海报绘制
- 生态权限登录、悬浮客服、性能与 UX 模式

完整清单见 [ImplementedCapabilities.md](./ImplementedCapabilities.md)。

## 技术栈

- **React 18** + React Router v6
- **Framer Motion** — 动画与手势
- **Lucide React** — 图标
- **Vite 5** — 构建工具

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
src/
├── components/          # 通用组件与布局
│   ├── Layout/          # Mini Program Lab 布局
│   └── WebFXLayout/     # Web FX Gallery 布局
├── pages/
│   ├── components/      # 基础组件演示
│   ├── advanced/        # Skyline & 手势动效
│   ├── hardware/        # 设备硬件 API
│   ├── ui-components/   # 高级 UI 组件
│   ├── navigation/      # 导航相关
│   ├── data-display/    # 数据展示
│   ├── advanced-form/   # 高级表单
│   ├── map-lbs/         # 地图与位置
│   ├── canvas/          # Canvas 绘图
│   ├── ecosystem/       # 生态与权限
│   ├── performance/     # 性能与 UX
│   └── web-fx/          # Web FX 特效
└── main.jsx             # 入口文件
```

## License

Private
