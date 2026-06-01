# MVAS 产品手册 — 代码重构计划

在**不改变任何展示效果**的前提下，将单文件 ~900 行的 `App.tsx` 重构为工程化的模块结构。

## Proposed Changes

### 1. Design Tokens — 颜色与尺寸常量化

#### [NEW] [constants.ts](file:///Users/aray/rays/repos/_me/pptWithAI/src/constants.ts)

集中管理所有魔法数字和反复出现的颜色值：

```ts
// 幻灯片尺寸
export const SLIDE_WIDTH = 1190;
export const SLIDE_HEIGHT = 841;

// 品牌色系
export const colors = {
  brand:       { primary: '#005C3E', accent: '#00A35C' },
  text:        { heading: '#1E293B', body: '#475569', muted: '#94A3B8' },
  border:      '#E9ECEF',
  surface:     '#F8F9FA',
  // ...
} as const;
```

> [!NOTE]
> 不改动 Tailwind 配置，仅通过 TS 常量在 JSX 中引用。Tailwind 的 arbitrary value `text-[${colors.text.body}]` 不支持动态值，所以颜色在 className 中仍保持硬编码字面量；常量主要用于 inline style 和数据文件中需要引用颜色的场景，以及作为"唯一真相源"文档化色值。

---

### 2. 数据层分离

#### [NEW] [data/slides.ts](file:///Users/aray/rays/repos/_me/pptWithAI/src/data/slides.ts)

将所有页面中内联的文案、表格数据、卡片列表抽为结构化数据对象：

- Page2 的 3 个挑战卡片 `challenges[]`
- Page3 的 ROI 对比表 `roiTable[]`、平台优势 `advantages[]`、工作流步骤 `workflowSteps[]`
- Page4 的底部特性 `coreFeatures[]`
- Page5 的图表图片+标签 `speciesImages[]`、树种注释 `speciesNote`
- Page7 的监测数据表 `monitoringData[]`、成果输出 `deliverables[]`

---

### 3. 可复用组件

#### [NEW] [components/SlideWrapper.tsx](file:///Users/aray/rays/repos/_me/pptWithAI/src/components/SlideWrapper.tsx)

从 App.tsx 提取，引用 `SLIDE_WIDTH` / `SLIDE_HEIGHT` 常量。

#### [NEW] [components/Page.tsx](file:///Users/aray/rays/repos/_me/pptWithAI/src/components/Page.tsx)

`Page` + `PageContent` + `Header` 三个布局组件，引用常量尺寸。`PageContent` 中的水印图使用 `aria-hidden` 增强 a11y。

#### [NEW] [components/ImageCard.tsx](file:///Users/aray/rays/repos/_me/pptWithAI/src/components/ImageCard.tsx)

封装在 Page4~Page7 中反复出现的图片展示卡片模式：
```tsx
<ImageCard src={...} alt={...} label="珠三角某项目..." labelColor="#00FF87" />
```
统一处理 `border`、`rounded`、`group-hover:scale`、底部 label overlay 等样式。

---

### 4. 页面拆分

#### [NEW] [pages/Page1.tsx](file:///Users/aray/rays/repos/_me/pptWithAI/src/pages/Page1.tsx) ~ [pages/Page8.tsx](file:///Users/aray/rays/repos/_me/pptWithAI/src/pages/Page8.tsx)

每个页面组件独立为一个文件。从 `data/slides.ts` 导入数据，从 `components/` 导入布局组件和 `ImageCard`。

#### [NEW] [pages/index.ts](file:///Users/aray/rays/repos/_me/pptWithAI/src/pages/index.ts)

Barrel export：`export { Page1 } from './Page1'` ...

---

### 5. PDF 导出逻辑

#### [NEW] [hooks/useExportPDF.ts](file:///Users/aray/rays/repos/_me/pptWithAI/src/hooks/useExportPDF.ts)

将 `handleExportPDF` 和 `isExporting` 状态抽为自定义 hook：
```ts
export function useExportPDF(containerRef: RefObject<HTMLDivElement | null>) {
  // ...返回 { isExporting, handleExportPDF }
}
```

---

### 6. App.tsx 瘦身

#### [MODIFY] [App.tsx](file:///Users/aray/rays/repos/_me/pptWithAI/src/App.tsx)

重写为 ~60 行的入口组件，只负责：
- 渲染 Banner
- 渲染 8 个 `<SlideWrapper><PageN /></SlideWrapper>`
- 调用 `useExportPDF` hook

---

### 7. 清理无用 CSS

#### [MODIFY] [App.css](file:///Users/aray/rays/repos/_me/pptWithAI/src/App.css)

当前内容是 Vite 脚手架残留（`.counter`、`.hero`、`#center` 等），项目完全没有引用。清空为空文件或删除。

---

### 8. 可访问性 (a11y) 改进

在组件拆分过程中同步完成：
- 水印背景图：`alt=""` + `aria-hidden="true"`
- 缺少 `alt` 的图片补齐语义化描述
- 表格加 `<caption>` (视觉隐藏但屏幕阅读器可读)
- 图片加 `loading="lazy"`（封面页除外）

---

## 最终文件结构

```
src/
├── constants.ts              # 尺寸、颜色 token
├── data/
│   └── slides.ts             # 所有页面的文案/数据
├── components/
│   ├── SlideWrapper.tsx       # 响应式缩放包装器
│   ├── Page.tsx               # Page + PageContent + Header
│   └── ImageCard.tsx          # 可复用图片展示卡片
├── hooks/
│   └── useExportPDF.ts        # PDF 导出逻辑
├── pages/
│   ├── index.ts               # Barrel export
│   ├── Page1.tsx ~ Page8.tsx  # 各页面组件
├── assets/                    # 不变
├── App.tsx                    # ~60 行入口
├── App.css                    # 清空
├── index.css                  # 不变
└── main.tsx                   # 不变
```

## Verification Plan

### Automated Tests
- `pnpm run build` — 确保 TypeScript 编译和 Vite 打包通过
- 浏览器打开对比重构前后每页视觉效果

### Manual Verification
- 确认 PDF 导出功能正常（含 filter 烘焙）
- 确认移动端 Banner 布局正常
- 确认 hover 动效、水印背景等细节无变化
