# 项目任务管理系统

一个基于React的智能项目任务管理系统前端原型，采用现代科技风格设计，支持响应式布局，适配PC和移动端。

## ✨ 功能特性

### 核心功能
- 📊 **仪表板概览** - 项目进度、任务统计、团队活动实时展示
- 📁 **项目管理** - 项目创建、编辑、进度跟踪、状态管理
- ✅ **任务管理** - 任务分配、进度更新、优先级设置
- 👥 **团队协作** - 成员管理、工作负荷分析、技能标签
- 📈 **数据分析** - 项目绩效、团队效率、可视化图表

### 设计特色
- 🎨 **科技风格UI** - 深色主题，渐变色彩，现代化界面
- 📱 **响应式设计** - 完美适配PC、平板、手机各种设备
- ⚡ **流畅动画** - 优雅的过渡效果和交互反馈
- 🎯 **用户体验** - 直观的操作流程，清晰的信息架构

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **路由管理**: React Router v6
- **图标库**: Lucide React
- **图表库**: Recharts
- **样式方案**: CSS3 + CSS Variables
- **构建工具**: Create React App

## 🚀 快速开始

### 环境要求
- Node.js 16.0 或更高版本
- npm 8.0 或更高版本

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```

应用将在 [http://localhost:3000](http://localhost:3000) 启动

### 构建生产版本
```bash
npm run build
```

### 运行测试
```bash
npm test
```

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Dashboard/      # 仪表板组件
│   └── Layout/         # 布局组件
├── pages/              # 页面组件
│   ├── Dashboard.tsx   # 仪表板页面
│   ├── Projects.tsx    # 项目管理页面
│   ├── Tasks.tsx       # 任务管理页面
│   ├── Team.tsx        # 团队协作页面
│   └── Analytics.tsx   # 数据分析页面
├── App.tsx             # 主应用组件
├── index.tsx           # 应用入口
└── index.css           # 全局样式
```

## 🎨 设计系统

### 颜色主题
- **主背景**: `#0f1419` → `#1a2332` (渐变)
- **卡片背景**: `#252d3d` → `#1e2736` (渐变)
- **主色调**: `#00d4ff` (科技蓝)
- **辅助色**: `#7c3aed` (紫色)
- **成功色**: `#10b981` (绿色)
- **警告色**: `#f59e0b` (橙色)
- **危险色**: `#ef4444` (红色)

### 响应式断点
- **手机端**: < 480px
- **平板端**: 481px - 768px
- **桌面端**: > 768px

## 📊 数据模型

### 项目数据结构
```typescript
interface Project {
  id: number;
  name: string;
  description: string;
  department: string;
  status: string;
  progress: number;
  startDate: string;
  endDate: string;
  team: string[];
  tasks: number;
  completedTasks: number;
}
```

### 任务数据结构
```typescript
interface Task {
  id: number;
  title: string;
  description: string;
  project: string;
  assignee: string;
  priority: 'high' | 'medium' | 'low';
  status: string;
  dueDate: string;
  estimatedHours: number;
  spentHours: number;
  tags: string[];
}
```

### 团队成员数据结构
```typescript
interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  status: 'online' | 'busy' | 'offline';
  workload: number;
  skills: string[];
  currentTasks: number;
  completedTasks: number;
  rating: number;
}
```

## 🔧 自定义配置

### 主题自定义
在 `src/index.css` 中修改 CSS 变量:

```css
:root {
  --primary-bg: #0f1419;
  --accent-color: #00d4ff;
  /* 更多变量... */
}
```

### 添加新页面
1. 在 `src/pages/` 创建新页面组件
2. 在 `src/App.tsx` 添加路由配置
3. 在 `src/components/Layout/Sidebar.tsx` 添加导航菜单

## 📱 移动端优化

- 响应式网格布局自动调整
- 触摸友好的按钮和交互元素
- 优化的侧边栏导航（滑动抽屉）
- 移动端适配的表格和图表

## 🎯 用户体验

### 交互设计
- 悬停效果和状态反馈
- 加载动画和过渡效果
- 直观的视觉层次
- 一致的操作模式

### 可访问性
- 语义化HTML结构
- 键盘导航支持
- 颜色对比度优化
- 屏幕阅读器友好

## 🚧 开发状态

当前版本: **v1.0.0 (原型版本)**

### ✅ 已完成功能
- [x] 基础项目架构搭建
- [x] 响应式布局框架
- [x] 仪表板页面
- [x] 项目管理页面
- [x] 任务管理页面
- [x] 团队协作页面
- [x] 数据分析页面
- [x] 科技风格主题
- [x] 移动端适配

### 🔄 后续计划
- [ ] 数据状态管理 (Redux/Zustand)
- [ ] API 接口集成
- [ ] 用户认证系统
- [ ] 实时通知功能
- [ ] 更多图表类型
- [ ] 国际化支持
- [ ] PWA 支持

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

MIT License

---

**注**: 这是一个前端原型项目，主要用于展示UI/UX设计和交互效果。生产环境使用需要添加后端API、数据持久化、用户认证等功能。
