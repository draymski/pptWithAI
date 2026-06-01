import { BarChart } from 'lucide-react';
import { Page, PageContent, Header } from '../components/Page';
import { roiTable, advantages, workflowSteps } from '../data/slides';

/** P3: 解决方案 */
export const Page3 = () => (
  <Page>
    <PageContent>
      <Header
        title="MVAS：私有化部署的红树林 AI 精准分析平台"
        subtitle="Mangrove Visual Analysis System - Secure Local Platform"
      />

      <div className="flex gap-8 h-full">
        {/* Left Column (2/3 width) */}
        <div className="w-[65%] flex flex-col justify-start gap-6">
          {/* ROI Table */}
          <div className="w-full mb-3">
            <div className="flex items-center gap-2 mb-3">
              <BarChart size={18} className="text-[#00A35C]" />
              <h3 className="text-[18px] font-bold text-[#1E293B]">百倍效能跃升 —— 核心价值 ROI 对比</h3>
            </div>
            <div className="w-full border border-[#E9ECEF] rounded-sm bg-white overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-[13px]">
                <caption className="sr-only">MVAS 与传统人工调查 ROI 对比表</caption>
                <thead>
                  <tr className="border-b border-[#E9ECEF] bg-[#c5d2e1ff]">
                    <th className="py-1.5 px-3 font-bold text-[#1E293B] w-[18%]">{roiTable.headers[0]}</th>
                    <th className="py-1.5 px-3 font-bold text-[#475569] w-[25%]">{roiTable.headers[1]}</th>
                    <th className="py-1.5 px-3 font-bold text-[#005C3E] w-[28%]">{roiTable.headers[2]}</th>
                    <th className="py-1.5 px-3 font-bold text-[#00A35C] w-[23%]">{roiTable.headers[3]}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9ECEF] bg-white">
                  {roiTable.rows.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F8F9FA]/50 transition-colors">
                      <td className="py-1.5 px-3 font-bold text-[#475569]">{row[0]}</td>
                      <td className="py-1.5 px-3 text-[#475569]">{row[1]}</td>
                      <td className="py-1.5 px-3 font-medium text-[#005C3E]">{row[2]}</td>
                      <td className="py-1.5 px-3 font-bold text-[#00A35C]">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advantages */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BarChart size={18} className="text-[#00A35C]" />
              <h3 className="text-[18px] font-bold text-[#1E293B]">平台优势</h3>
            </div>
            <div className="flex flex-col">
              {advantages.map((adv, i) => (
                <div key={i} className="w-[90%] bg-transparent py-1 px-3 rounded-sm border border-transparent hover:border-[#E9ECEF] transition-all duration-300 flex gap-4 items-start shadow-none hover:shadow-md hover:bg-white">
                  <div className="bg-[#E6F3EE] p-3 rounded-full shrink-0 text-[#005C3E] border border-[#005C3E]/10">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="text-[16.5px] font-bold text-[#1E293B] mb-1">{adv.title}</h4>
                    <p className="text-[14px] text-[#475569] leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1/3 width) — Workflow */}
        <div className="w-[36%] flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <BarChart size={18} className="text-[#00A35C]" />
            <h3 className="text-[18px] font-bold text-[#1E293B]">平台工作流</h3>
          </div>
          <div className="flex flex-col justify-center items-center flex-1 font-sans">
            <div className="relative z-10 flex flex-col items-center justify-center gap-0 w-full py-1 text-center">
              {workflowSteps.map((step, idx) => {
                // 根据风格选择颜色
                const styleMap = {
                  green: { bg: 'bg-[#E6F3EE]', border: 'border-[#00A35C]', text: 'text-[#005C3E]' },
                  gray: { bg: 'bg-[#EDF2F7]', border: 'border-[#4A5568]', text: 'text-[#2D3748]' },
                  purple: { bg: 'bg-[#F5F3FF]', border: 'border-[#6D28D9]', text: 'text-[#5B21B6]' },
                  amber: { bg: 'bg-[#FFFBEB]', border: 'border-[#D97706]', text: 'text-[#92400E]' },
                };
                const s = styleMap[step.style];

                return (
                  <div key={idx} className="flex flex-col items-center w-full">
                    {/* Arrow (before each step except the first) */}
                    {idx > 0 && (
                      <svg className="w-5 h-8 text-[#00A35C] mx-auto shrink-0 block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 0v24M7 17l5 7 5-7" />
                      </svg>
                    )}

                    {step.branches ? (
                      // Step with branches (AI推理)
                      <div className={`${s.bg} border-2 ${s.border} rounded-sm p-2.5 w-fit min-w-[250px] mx-auto shadow-sm transition-transform hover:scale-[1.02]`}>
                        <h4 className={`text-[14.5px] font-bold ${s.text} mb-2 whitespace-nowrap`}>{step.label}</h4>
                        <div className="grid grid-cols-3 gap-1">
                          {step.branches.map((name, bi) => (
                            <div key={bi} className="bg-white border-2 border-[#00A35C]/60 rounded-sm py-1 px-2 shadow-xs flex items-center justify-center min-h-[34px] w-fit mx-auto">
                              <span className="text-[11.5px] font-bold text-[#1E293B] leading-tight whitespace-nowrap">{name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      // Simple step
                      <div className={`${s.bg} border-2 ${s.border} rounded-sm py-2 px-5 shadow-sm w-fit mx-auto transition-transform hover:scale-[1.02]`}>
                        <h4 className={`text-[15.5px] font-bold ${s.text} whitespace-nowrap`}>{step.label}</h4>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  </Page>
);
