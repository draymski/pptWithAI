import { Download } from 'lucide-react';
import { SlideWrapper } from './components/SlideWrapper';
import { useExportPDF } from './hooks/useExportPDF';
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8 } from './pages';
import generatedBrandLogo from './assets/刃蓝商标/图标-圆-暗-六边形.jpg';

// === 主渲染应用 ===
export default function App() {
  const { handleExportPDF } = useExportPDF();

  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 font-sans text-[#475569]">
      {/* ── 横幅 Banner ── */}
      <div
        data-banner
        className="max-w-[1190px] w-full mx-auto mb-10 bg-gradient-to-r from-[#004D30] to-[#006E47] rounded-sm py-4 sm:py-6 px-4 sm:px-10 shadow-sm relative overflow-hidden flex flex-row items-center justify-between gap-2 sm:gap-4 text-white"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {/* 左侧：品牌信息 */}
        <div className="relative z-10 flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 select-none bg-transparent">
            <img src={generatedBrandLogo} alt="刃蓝科技商标" className="w-full h-full object-contain scale-[1.1] transform origin-center" />
          </div>
          <div className="flex flex-col items-start whitespace-nowrap">
            <span className="text-sm sm:text-[18px] font-bold tracking-wider">刃蓝科技</span>
            <span className="text-[7px] sm:text-[9px] text-[#A7F3D0] tracking-widest font-sans uppercase font-semibold">RENLAN TECH.</span>
          </div>
        </div>

        {/* 中/右：标题 */}
        <div className="relative z-10 flex flex-col items-end text-right whitespace-nowrap min-w-0">
          <h1 className="text-sm sm:text-xl md:text-2xl font-bold tracking-widest font-serif flex items-center gap-2">
            <span>MVAS 产品手册</span>
          </h1>
          <p className="text-[8px] sm:text-[10px] text-white/70 tracking-widest uppercase font-sans font-bold mt-0.5 sm:mt-1">
            MVAS · Product Brochure
          </p>
        </div>

        {/* 右侧：下载 PDF 按钮 */}
        <button
          onClick={handleExportPDF}
          title="下载高清 PDF"
          className="relative z-10 shrink-0 ml-1 sm:ml-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer bg-white/10 hover:bg-white/25 active:scale-95 border border-white/20 hover:border-white/40"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      </div>

      {/* ── 幻灯片区域 ── */}
      <div className="flex flex-col items-center w-full">
        <SlideWrapper><Page1 /></SlideWrapper>
        <SlideWrapper><Page2 /></SlideWrapper>
        <SlideWrapper><Page3 /></SlideWrapper>
        <SlideWrapper><Page4 /></SlideWrapper>
        <SlideWrapper><Page5 /></SlideWrapper>
        <SlideWrapper><Page6 /></SlideWrapper>
        <SlideWrapper><Page7 /></SlideWrapper>
        <SlideWrapper><Page8 /></SlideWrapper>
      </div>
    </div>
  );
}
