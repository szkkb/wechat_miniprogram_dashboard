# Dashboard 已实现能力与组件清单

这份清单列出了当前“微信小程序能力演示 Dashboard”中已经模拟和还原的所有组件与能力。你可以以此为基础，后续继续添加更多来自《微小程序能力全景报告》中的其他能力。

## 1. 视图容器与基础组件 (UI Components)

### 视图容器 (View Containers)
- **`<scroll-view>`**: 模拟了带有弹性阻尼的原生纵向滚动视图。
- **`<swiper>`**: 模拟了带有自动分页轮播、阻尼滑动和状态指示器的焦点图组件。
- **`<movable-view>`**: 模拟了可以在指定 `movable-area` 区域内自由拖拽交互的浮动组件。

### 表单控件 (Form Elements)
- **`<switch>`**: 模拟了带有弹性阻尼动画及颜色/阴影过渡的原生级别开关。
- **`<input>`**: 模拟了焦点发光（霓虹溢出变色）、拟物化外观的高质感输入框。
- **`<slider>`**: 模拟了高度定制化的滑动选择器，包含动态悬浮提示气泡和双色轨迹。

### 基础内容与反馈 (Basic Content)
- **`<progress>`**: 模拟了带有发光动画的线性进度条和环形进度条组件。
- **`<icon>`**: 模拟了带有不同语义颜色和发光特效的系统图标（Success, Info, Warning, Danger）。
- **`Feedback API`**: 模拟了触发 `wx.showToast` 和 `wx.showModal` 等交互反馈动作的入口按钮。

---

## 2. 高阶渲染与交互引擎 (Advanced Algorithms)

### Skyline 特性模拟 (Skyline Render Engine)
- **`<sticky-header>`**: 模拟了 Skyline 引擎中的吸顶布局组件，分组标题在滚动时会自动吸顶推挤。
- **`<draggable-sheet>`**: 模拟了可以由底部通过手势唤起，并支持阻尼拖拽下落的半屏容器组件。
- **`<grid-view>`/瀑布流**: 模拟了 Skyline 基于渲染管线优势的高性能流式网格布局引擎。

### 动效与手势 (Gestures & Animations)
- **`share-element` (页面共享元素)**: 模拟了点击缩略图时，元素打破层级限制平滑满屏展开的 iOS 级别转场动画。
- **`Worklet 手势系统`**: 模拟了原生常见的“左滑删除”可拖拽单元格，包括回弹阻尼效果。

---

## 3. 设备底层与硬件开放能力 (Hardware APIs)

### 视觉与媒体输入
- **`wx.createCameraContext` / `wx.scanCode`**: 模拟了原生相机扫码能力的展示（包含了扫码框UI、扫描线动画和动态遮罩）。

### 设备位置与传感器
- **`wx.getLocation`**: 模拟了调用地理位置服务获取经纬度的全流程体验（包含 loading 状态与数据回显）。
- **设备震动 (`wx.vibrate*`)**: 结合 Web `navigator.vibrate` 加上视觉震颤动画，模拟了系统级短震动反馈。
- **剪贴板交互 (`wx.getClipboardData`)**: 结合 Web `Clipboard API`，模拟了读取用户设备剪贴板内容的系统能力。

---

## 💡 后续可添加的模块建议

你可以参考《微小程序能力全景报告》在此基础上继续添加以下能力的演示，以丰富此 Dashboard：

1. **地图与标记 (Map Component)**: 模拟 `<map>` 组件的呈现视角，加载第三方地图 SDK 放入卡片中。
2. **多媒体展示 (Media)**: 模拟 `<video>` 和 `<picker>`(如图片上传预览 `<chooseImage>`) 行为。
3. **图表绘制 (Canvas)**: 模拟小程序 Canvas 的 2D 绘图接口（如绘制分享海报或者二维码）。
4. **骨架屏与占位 (Skeleton)**: 添加列表加载时的骨架屏过渡动画模拟。
