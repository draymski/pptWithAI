import { useCallback } from 'react';

/**
 * 自定义 Hook：通过浏览器原生打印功能导出 PDF。
 *
 * 配合 index.css 中的 @media print 样式，自动：
 * - 隐藏横幅 Banner
 * - 强制打印背景图/背景色
 * - 还原幻灯片原始尺寸（覆盖响应式缩放）
 * - 每张幻灯片独占一页
 *
 * 用户在打印对话框中选择"保存为 PDF"即可。
 */
export function useExportPDF() {
  const handleExportPDF = useCallback(() => {
    window.print();
  }, []);

  return { isExporting: false, handleExportPDF };
}
