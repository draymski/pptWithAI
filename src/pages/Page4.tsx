import { Page, PageContent, Header } from '../components/Page';
import { ImageCard } from '../components/ImageCard';
import { page4TargetImg, coverImg, coreFeatures } from '../data/slides';

/** P4: 核心科技 I — 高精单株识别 */
export const Page4 = () => (
  <Page>
    <PageContent className="justify-start pb-4">
      <Header
        title="BladeMgv™ 刃蓝AI模型──高精单株识别专家"
        subtitle="Proprietary Deep Learning Detection Network for Dense Canopies"
      />

      <p className="text-[#475569] text-[15px] max-w-4xl leading-relaxed mb-4">
        <strong className="text-[#1E293B] font-bold">BladeMgv™</strong> 是专为复杂滩涂、细小幼苗、密集冠幅的红树林研发的深度学习检测网络。同时具备高精度的单株识别、树种分类、存活度检测、长势评估等功能。
      </p>

      <div className="flex gap-4 relative mb-4 h-[430px]">
        <ImageCard
          src={page4TargetImg}
          alt="小目标高精度单株检测效果"
          label={<>珠三角某项目小目标红树识别。<span className="text-[#00FF87] font-bold">准确率≥98%，召回率≥92%</span></>}
          dotColor="#00FF87"
          className="w-1/2 h-full"
        />
        <ImageCard
          src={coverImg}
          alt="高郁闭度密集交错红树单株识别"
          label={<>高郁闭度密集交错红树单株识别。<span className="text-[#00FF87] font-bold">IOU≥90%</span></>}
          dotColor="#38BDF8"
          className="w-1/2 h-full"
        />
      </div>

      {/* Bottom Features */}
      <div className="flex gap-3 mb-4">
        {coreFeatures.map((feat, i) => (
          <div key={i} className="w-1/3">
            <h4 className="text-[#1E293B] font-bold flex items-center gap-2 text-[15px]">
              <span className="w-1.5 h-4 bg-[#005C3E]" /> {feat.title}
            </h4>
            <p className="text-[#475569] text-[13.5px] leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-auto border-t border-[#E9ECEF] pt-2 w-full">
        <p className="text-[#94A3B8] text-[11px] text-right italic tracking-wide font-medium">
          * 注：本手册所展示的所有高精单株识别与树种分类等效果图，均来源于我司与相关政企单位的真实合作项目。
        </p>
      </div>
    </PageContent>
  </Page>
);
