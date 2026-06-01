import { Page, PageContent, Header } from '../components/Page';
import { speciesImages, speciesCharts, speciesNote } from '../data/slides';

/** P5: 核心科技 II — 树种分类 */
export const Page5 = () => (
  <Page>
    <PageContent className="justify-start pb-4">
      <Header
        title="BladeMgv™ 刃蓝AI模型──高精多维度树种识别"
        subtitle="High-Precision Multi-Dimensional Mangrove Species Identification"
      />

      <p className="text-[#475569] text-[14.5px] max-w-4xl leading-relaxed mb-4">
        <strong className="text-[#1E293B] font-bold">BladeMgv™</strong> 提取高维空间-光谱耦合特征，突破传统人工目视解译与单一空谱分类的局限性，实现针对优势树种的工业级全自动识别。
      </p>

      {/* 3 Detail Segmentation Images */}
      <div className="flex gap-4 mb-4 h-[300px] w-full">
        {speciesImages.map((item, idx) => (
          <div key={idx} className="w-1/3 h-full border border-[#E9ECEF] rounded-sm relative group overflow-hidden shadow-xs">
            <img src={item.img} className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105" alt={item.label} loading="lazy" />
          </div>
        ))}
      </div>

      {/* 2 Species Distribution Charts */}
      <div className="flex gap-4 mb-4 h-[225px] w-full">
        {speciesCharts.map((chart, idx) => (
          <div key={idx} className="w-1/2 h-full border border-[#E9ECEF] bg-white p-1.5 rounded-sm relative group overflow-hidden shadow-xs">
            <img src={chart.img} className="w-full h-full object-contain rounded-sm transition-transform duration-500 group-hover:scale-[1.02]" alt={chart.label} loading="lazy" />
            <div className="absolute bottom-0 right-2 bg-white/90 border border-[#E2E8F0] px-2 py-0.5 rounded-sm text-[11.5px] font-bold text-[#1E293B] flex items-center gap-1.5 shadow-sm">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: chart.dotColor, boxShadow: `0 0 6px ${chart.dotColor}` }}
              />
              {chart.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-auto border-t border-[#E9ECEF] pt-2 w-full">
        <p className="text-[#94A3B8] text-[11px] text-right italic tracking-wide font-medium">
          {speciesNote}
        </p>
      </div>
    </PageContent>
  </Page>
);
