// ── 幻灯片尺寸 (px) ──
export const SLIDE_WIDTH = 1190;
export const SLIDE_HEIGHT = 841;

// ── 品牌色系 ──
// 注：Tailwind arbitrary value 不支持运行时动态引用，className 中仍保持字面量。
// 此常量作为"唯一真相源"文档化色值，同时用于 inline style 和数据文件。
export const colors = {
  brand: {
    primary: '#005C3E',
    accent: '#00A35C',
    gradient: { from: '#004D30', to: '#006E47' },
  },
  text: {
    heading: '#1E293B',
    body: '#475569',
    muted: '#94A3B8',
  },
  border: '#E9ECEF',
  surface: '#F8F9FA',
  white: '#FFFFFF',
} as const;
