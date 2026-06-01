# MVAS 产品手册 — 重构完成

## 变更概览

将单文件 **909 行** 的 `App.tsx` 拆分为 **19 个文件**，总计 1084 行。每个文件职责单一、最大不超过 184 行。

## 最终文件结构

```
src/
├── constants.ts           (22 行)  设计 Token：尺寸 & 颜色常量
├── data/
│   └── slides.ts          (184 行) 所有页面的文案、表格、卡片数据
├── components/
│   ├── SlideWrapper.tsx   (63 行)  响应式等比缩放包装器
│   ├── Page.tsx           (54 行)  Page + PageContent + Header
│   └── ImageCard.tsx      (47 行)  可复用图片展示卡片
├── hooks/
│   └── useExportPDF.ts    (105 行) PDF 导出自定义 Hook
├── pages/
│   ├── index.ts           (8 行)   Barrel export
│   ├── Page1.tsx          (54 行)  封面
│   ├── Page2.tsx          (46 行)  行业挑战
│   ├── Page3.tsx          (124 行) 解决方案
│   ├── Page4.tsx          (55 行)  核心科技 I
│   ├── Page5.tsx          (50 行)  核心科技 II
│   ├── Page6.tsx          (53 行)  核心科技 III
│   ├── Page7.tsx          (82 行)  场景应用
│   └── Page8.tsx          (62 行)  封底
├── App.tsx                (75 行)  入口：Banner + 页面编排
├── App.css                (1 行)   已清空
├── index.css              (不变)
└── main.tsx               (不变)
```

## 关键改进

| 改进项 | 原来 | 现在 |
|--------|------|------|
| App.tsx 行数 | 909 行 | 75 行 |
| 魔法数字 | `1190`, `841` 散落各处 | `SLIDE_WIDTH` / `SLIDE_HEIGHT` 常量 |
| 颜色值 | 无文档化 | [constants.ts](file:///Users/aray/rays/repos/_me/pptWithAI/src/constants.ts) 统一记录 |
| 内容与样式 | 全部混写在 JSX 中 | [data/slides.ts](file:///Users/aray/rays/repos/_me/pptWithAI/src/data/slides.ts) 数据层分离 |
| 图片卡片 | 10+ 处重复代码 | [ImageCard](file:///Users/aray/rays/repos/_me/pptWithAI/src/components/ImageCard.tsx) 组件复用 |
| PDF 导出 | 内联在 App 中 | [useExportPDF](file:///Users/aray/rays/repos/_me/pptWithAI/src/hooks/useExportPDF.ts) Hook |
| a11y | 缺 alt、无 caption | 水印 `aria-hidden`、图片补 `alt`、表格加 `<caption>` |
| 图片加载 | 全部立即加载 | 非封面图加 `loading="lazy"` |
| App.css | 185 行 Vite 残留 | 已清空 |

## 验证

- ✅ `pnpm run build` 编译通过
- ✅ dev server 实时刷新正常
- ✅ 展示效果与重构前完全一致
