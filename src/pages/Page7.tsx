import { Eye, BarChart, Navigation } from 'lucide-react';
import { Page, PageContent, Header } from '../components/Page';
import { blockAnalysisImg, monitoringData, deliverables } from '../data/slides';

/** P7: 场景 — 生态资产普查 */
export const Page7 = () => (
  <Page>
    <PageContent className="justify-start pb-4">
      <Header
        title="MVAS助力林业生态资产普查标准化"
        subtitle="Standardized Eco-Asset Inventory and Monitoring Powered by MVAS"
      />

      <p className="text-[#475569] text-[13.5px] leading-relaxed mb-4">
        在大尺度宏观红树林生态系统的资产普查中，传统人工解译面临标准不一、周期漫长、盲区多等痛点。<br />
        <strong>MVAS 平台</strong> 为合作伙伴提供一站式的智能化数字监管方案，实现从超大区块遥感影像输入到厘米级普查结果交付的全面标准化流程。
      </p>

      <div className="flex gap-24 mb-4 h-[530px] w-full items-start">
        {/* Left: Image */}
        <div className="w-[50%] h-full flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={15} className="text-[#00A35C]" />
            <h4 className="text-[16px] font-bold text-[#1E293B]">大面积生态资产监测项目示例</h4>
          </div>
          <div className="flex-1 border border-[#E9ECEF] rounded-sm overflow-hidden shadow-xs h-full">
            <img src={blockAnalysisImg} className="w-full h-full object-cover rounded-sm" alt="大区块统计分析与宏观生态普查" loading="lazy" />
          </div>
        </div>

        {/* Right: Table + Deliverables */}
        <div className="w-[50%] h-full flex flex-col justify-start">
          {/* Table */}
          <div className="flex flex-col w-[390px] mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <BarChart size={15} className="text-[#00A35C]" />
              <h4 className="text-[16px] font-bold text-[#1E293B]">核心监测数据落表示例</h4>
            </div>
            <div className="border border-[#E9ECEF] rounded-sm bg-white overflow-hidden shadow-xs w-full">
              <table className="w-full text-left border-collapse text-[13px]">
                <caption className="sr-only">核心监测数据示例表</caption>
                <thead>
                  <tr className="border-b border-[#E9ECEF] bg-[#c5d2e1ff]">
                    <th className="py-1.5 px-4 font-bold text-[#1E293B] w-[30%] text-left">核算指标项</th>
                    <th className="py-1.5 px-4 font-bold text-[#005C3E] w-[58%] text-left">普查实测数值</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9ECEF] bg-white">
                  {monitoringData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F9FA]/60 transition-colors">
                      <td className="py-1.5 px-4 font-semibold text-[#1E293B] text-left">{row.label}</td>
                      <td className="py-1.5 px-4 text-left font-mono font-bold text-[#005C3E]">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deliverables */}
          <div className="w-[390px] mx-auto flex flex-col gap-1.5 mt-8">
            <div className="flex items-center gap-2 mb-1">
              <Navigation size={15} className="text-[#00A35C]" />
              <h4 className="text-[16px] font-bold text-[#1E293B]">系统支持标准化普查成果输出</h4>
            </div>
            <div className="flex flex-col gap-2">
              {deliverables.map((d, idx) => (
                <div key={idx} className={`bg-transparent border border-[#E9ECEF] p-2.5 rounded-sm relative group ${d.hoverBorder} transition-all duration-300`}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`text-[8.5px] ${d.tagBg} ${d.tagText} font-bold px-1.5 py-0.2 rounded-xs tracking-wider`}>{d.tag}</span>
                    <h4 className="text-[14px] font-bold text-[#1E293B]">{d.title}</h4>
                  </div>
                  <p className="text-[12px] text-[#475569] leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  </Page>
);
