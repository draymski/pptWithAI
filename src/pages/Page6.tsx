import { Page, PageContent, Header } from '../components/Page';
import { ImageCard } from '../components/ImageCard';
import { toleranceImages, toleranceNote } from '../data/slides';

/** P6: 核心科技 III — 复杂环境自适应容错 */
export const Page6 = () => (
  <Page>
    <PageContent className="justify-start pb-4">
      <Header
        title="BladeMgv™ 刃蓝AI模型──复杂环境自适应容错"
        subtitle="Extreme Complex Environment Adaptive Extraction & Fault-Tolerance"
      />

      <p className="text-[#475569] text-[14.5px] max-w-4xl leading-relaxed mb-4">
        <strong className="text-[#1E293B] font-bold">BladeMgv™</strong> 针对低信噪比与高噪点背景进行了深度优化，可高容错自动剔除滩涂水体、识别异形云影，并在杂木杂草混生区域保持识别纯净度，解决实际普查场景中<span className="text-red-500 font-bold">95%</span>以上的高难度噪点干扰。
      </p>

      {/* GIS Dashboard Images Layout */}
      <div className="flex gap-4 mb-4 h-[450px] w-full">
        {/* Left: Large Scale Overview */}
        <ImageCard
          src={toleranceImages.overview.img}
          alt="大尺度广域高容错识别总览"
          label={toleranceImages.overview.label}
          dotColor={toleranceImages.overview.dotColor}
          className="w-[55%] h-full"
        />

        {/* Right: Detail Demos */}
        <div className="w-[45%] h-full flex flex-col gap-4">
          {toleranceImages.details.map((item, idx) => (
            <ImageCard
              key={idx}
              src={item.img}
              alt={item.label}
              label={item.label}
              dotColor={item.dotColor}
              className="h-1/2"
            />
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 border-t border-[#E9ECEF] pt-2 w-full">
        <div className="text-[11.5px] text-[#475569] leading-relaxed">
          <span className="text-[#005C3E] font-bold">* 多源数据拓展服务说明：</span>
          {toleranceNote}
        </div>
      </div>
    </PageContent>
  </Page>
);
