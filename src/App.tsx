import React from 'react';
import {
  ShieldAlert, Bot, Eye, BarChart,
  Database, Navigation
} from 'lucide-react';
import watermarkImg from './assets/mangrove/mangrove.jpeg';
import coverImg from './assets/mangrove/cover.png';
import page4TargetImg from './assets/mangrove/page4-展示小目标检测效果.png';
import classImg1 from './assets/mangrove/展示分类能力-1.png';
import classImg2 from './assets/mangrove/展示分类能力-2.jpg';
import classImg3 from './assets/mangrove/展示分类能力-3.jpg';
import classChart1 from './assets/mangrove/表-树种统计柱状图.jpg';
import classChart2 from './assets/mangrove/表-树种的冠幅统计柱状图.png';
import toleranceImg1 from './assets/mangrove/展示杂草容错-1.jpg';
import toleranceImg2 from './assets/mangrove/有难度的滩涂背景的提取能力-1.jpg';
import toleranceImg3 from './assets/mangrove/展示杂草容错-3-大尺度.png';
import blockAnalysisImg from './assets/mangrove/大区块的统计分析能力-1.jpg';
import wechatQRImg from './assets/wechatQRcod_2.jpg';
import page2Img_1 from './assets/mangrove/传统人工-1.jpg';
import page2Img_2 from './assets/mangrove/传统人工-2.png';
import endPage from './assets/mangrove/尾页.jpg';
import generatedBrandLogo from './assets/刃蓝商标/图标-圆-暗-六边形.jpg';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

// === 基础布局组件 ===
const Page = ({ children, className = '' }: PageProps) => (
  <div
    className={`relative w-full max-w-[1190px] mx-auto aspect-[297/210] shadow-[0_20px_50px_rgba(0,0,0,0.1)] mb-12 overflow-hidden flex flex-col bg-white text-[#475569] ${className}`}
  >
    {children}
  </div>
);

interface PageContentProps {
  children: React.ReactNode;
  className?: string;
}

// 奢侈级页边距统一包装器 (约 28mm 左右，25mm 上下) + 全局水印背景
const PageContent = ({ children, className = '' }: PageContentProps) => (
  <>
    {/* 背景图层：红树林航拍背景，大幅调高透明度，仅保留黑白去色以确保可见 */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <img
        src={watermarkImg}
        alt="Mangrove Watermark Background"
        className="w-full h-full object-cover opacity-[0.25] brightness-30"
      />
    </div>

    {/* 内容图层：加上 relative z-10 确保文字和卡片浮在背景之上 */}
    <div className={`relative z-10 w-full flex-1 px-16 pt-14 pb-14 flex flex-col ${className}`}>
      {children}
    </div>
  </>
);

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => (
  <div className="mb-10">
    <h2 className="text-3xl font-serif font-bold mb-3 text-[#1E293B] tracking-wide">{title}</h2>
    <p className="text-sm tracking-widest uppercase font-sans text-[#475569] opacity-80">{subtitle}</p>
  </div>
);

// === P1: 封面 ===
const Page1 = () => (
  <Page className="relative">
    {/* Left 45% overlapping on top */}
    <div className="w-[45%] absolute left-0 top-0 bottom-0 bg-transparent px-14 py-20 flex flex-col justify-between z-20 text-center">
      <div className="mt-8">
        <h1 className="text-6xl font-serif font-bold text-[#1E293B] leading-tight mb-4 tracking-widest">
          红树林视觉<br />分析系统
        </h1>
        <div className="text-[#005C3E] text-[21px] font-bold font-sans tracking-wide mb-8">
          Mangrove Visual Analysis System (MVAS)
        </div>
        <div className="w-10 h-1 bg-[#00A35C] mb-8 mx-auto"></div>
        <div className="text-[#475569] space-y-3 font-sans text-m leading-relaxed">
          <p className="font-medium">单株级精准检测 · 智能化树种识别</p>
          <p className="font-medium">守护“海岸卫士”的 AI 力量</p>
          <p className="text-xs text-[#475569]/60 mt-4 tracking-wider uppercase">Precision Individual Tree Detection & Species Identification</p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-white border border-[#E9ECEF] rounded flex items-center justify-center p-1 shrink-0 shadow-sm">
            <img src={wechatQRImg} alt="WeChat QR Code" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div className="pt-1 text-left">
            <p className="text-sm font-bold text-[#1E293B] mb-1">广州刃蓝科技有限公司</p>
            <p className="text-xs text-[#475569] mb-1 uppercase text-[10px] tracking-wider">Guangzhou Renlan Technology Co., Ltd.</p>
            <p className="text-xs text-[#475569]/80">官方邮箱: support@renlan.top</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right 65% in the background */}
    <div className="w-[66%] absolute right-0 top-0 bottom-0 bg-white overflow-hidden z-10">
      <img
        src={coverImg}
        alt="Mangrove Forest"
        className="w-full h-full object-cover opacity-100 contrast-[1.5] saturate-[1.05]"
      />
      {/* Smooth gradient fade to transparent to ensure high text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-3/5"></div>
      <div className="absolute inset-0 bg-white/10"></div>
    </div>
  </Page>
);

// === P2: 行业挑战 ===
const Page2 = () => (
  <Page>
    <PageContent>
      <Header
        title="传统红树林调查的“物理局限”"
        subtitle="Traditional Challenges in Mangrove Monitoring"
      />
      <p className="text-[#475569] mb-8 max-w-5xl leading-relaxed text-[15px]">
        在《湿地保护法》与国家“双碳”刚性考核下，高频次、高精度的生态监测已成刚需。然而，传统的调查手段正面临无法逾越的物理限制。
      </p>

      <div className="flex gap-10 h-[520px]">
        {/* Left 40% Images */}
        <div className="w-[40%] flex flex-col gap-3 justify-between">
          <div className="flex-1 relative rounded-sm overflow-hidden border border-[#E9ECEF] shadow-sm">
            <img
              src={page2Img_1}
              className="w-full h-full object-cover"
              alt="Traditional manual investigation 1"
            />
          </div>
          <div className="flex-1 relative rounded-sm overflow-hidden border border-[#E9ECEF] shadow-sm">
            <img
              src={page2Img_2}
              className="w-full h-full object-cover"
              alt="Traditional manual investigation 2"
            />
          </div>
        </div>

        {/* Right 60% Cards */}
        <div className="w-[60%] flex flex-col gap-4 justify-center py-0">
          {[
            { num: "01", title: "滩涂泥泞 · 效率瓶颈", icon: <Navigation size={22} />, desc: "人工“拉样方”寸步难行，耗时动辄数十日至数月，且面临潮汐与陷溺安全风险。" },
            { num: "02", title: "样方偏差 · 精度局限", icon: <Eye size={22} />, desc: "人工抽样范围有限，样本代表性不足，同时受制于人员的主观因素，难以反映大尺度区域的真实生态状况。" },
            { num: "03", title: "地理数据 · 安全红线", icon: <ShieldAlert size={22} />, desc: "高精度正射影像（DOM）属政企内部高敏感数据，传统云端 AI 交付第三方处理，存在泄密与合规风险。" }
          ].map((item, i) => (
            <div key={i} className="bg-[#F8F9FA] px-6 py-4.5 rounded-sm flex gap-6 items-start border border-transparent hover:border-[#E9ECEF] transition-colors shadow-sm">
              <div className="text-[#005C3E] mt-1 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1.5">
                  <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
                </div>
                <p className="text-[#475569] leading-relaxed text-[13.5px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContent>
  </Page>
);

// === P3: 解决方案 ===
const Page3 = () => (
  <Page>
    <PageContent>
      <Header
        title="MVAS：私有化部署的红树林 AI 精准分析平台"
        subtitle="Mangrove Visual Analysis System - Secure Local Platform"
      />

      <div className="flex gap-8 h-full">
        {/* Left Column (2/3 width) */}
        <div className="w-[65%] flex flex-col justify-start gap-6">
          {/* Top: ROI Table */}
          <div className="w-full mb-3">
            <div className="flex items-center gap-2 mb-3">
              <BarChart size={18} className="text-[#00A35C]" />
              <h3 className="text-[18px] font-bold text-[#1E293B]">百倍效能跃升 —— 核心价值 ROI 对比</h3>
            </div>
            <div className="w-full border border-[#E9ECEF] rounded-sm bg-white overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead>
                  <tr className="border-b border-[#E9ECEF] bg-[#c5d2e1ff]">
                    <th className="py-1.5 px-3 font-bold text-[#1E293B] w-[18%] ">评估维度</th>
                    <th className="py-1.5 px-3 font-bold text-[#475569] w-[25%] ">传统人工调查</th>
                    <th className="py-1.5 px-3 font-bold text-[#005C3E] w-[28%] ">MVAS平台</th>
                    <th className="py-1.5 px-3 font-bold text-[#00A35C] w-[23%] ">效能提升</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9ECEF] bg-white">
                  {[
                    ["万亩作业周期", "10人团队 / 15-20 天", "单人航拍，1小时 AI 分析", "效率跃升 60倍+"],
                    ["检测精细度", "“拉样方”估算，误差大", "100%全域单株级高精分割与计数", "精度极度细化"],
                    ["作业安全系数", "滩涂陷入，风险高", "无人机遥控作业", "现场安全零风险"],
                    ["生态指标数量", "数量固定，若扩展需重新实地拉样方", "植株长势、树种、数量、株距、株高、覆盖率等多种维度", "生态指标更丰富"]
                  ].map((row, i) => (
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

          {/* Bottom: 3 Advantages stacked vertically */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 ">
              <BarChart size={18} className="text-[#00A35C]" />
              <h3 className="text-[18px] font-bold text-[#1E293B]">平台优势</h3>
            </div>
            <div className="flex flex-col">
              {[
                { title: "无人机航测 + 常态化智能监测", icon: <Navigation size={18} />, desc: "轻松覆盖万亩滩涂，实现极度降本增效；联动智能无人机机巢，支持全天候高频次常态化核查。" },
                { title: "AI高效推理 + 数据可视化", icon: <Bot size={18} />, desc: "依托自研高精度图像识别大模型，从田间到报表，生态资产轻松监控，植株长势、树种、数量、株距、株高、覆盖率等数据精准触达。" },
                { title: "内网私有化部署 + 数据绝对安全", icon: <Database size={18} />, desc: "敏感数据零第三方接触，保障绝对合规；100%政企内网私有化运行，支持标准Web服务多端协同。" }
              ].map((adv, i) => (
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

        {/* Right Column (1/3 width) */}
        <div className="w-[36%] flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <BarChart size={18} className="text-[#00A35C]" />
            <h3 className="text-[18px] font-bold text-[#1E293B]">平台工作流</h3>
          </div>
          <div className="flex flex-col justify-center items-center flex-1 font-sans">
            <div className="relative z-10 flex flex-col items-center justify-center gap-0 w-full py-1 text-center">

              {/* Step 1: 无人机航测 */}
              <div className="bg-[#E6F3EE] border-2 border-[#00A35C] rounded-sm py-2 px-5 shadow-sm w-fit mx-auto transition-transform hover:scale-[1.02]">
                <h4 className="text-[15.5px] font-bold text-[#005C3E] whitespace-nowrap">全自主无人机航测</h4>
              </div>

              {/* Conspicuous Arrow touching top and bottom */}
              <svg className="w-5 h-8 text-[#00A35C] mx-auto shrink-0 block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 0v24M7 17l5 7 5-7" />
              </svg>

              {/* Step 2: 正射影像合成 */}
              <div className="bg-[#EDF2F7] border-2 border-[#4A5568] rounded-sm py-2 px-5 shadow-sm w-fit mx-auto transition-transform hover:scale-[1.02]">
                <h4 className="text-[15.5px] font-bold text-[#2D3748] whitespace-nowrap">正射影像自动合成</h4>
              </div>

              {/* Conspicuous Arrow touching top and bottom */}
              <svg className="w-5 h-8 text-[#00A35C] mx-auto shrink-0 block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 0v24M7 17l5 7 5-7" />
              </svg>

              {/* Step 3: Run AI (3 Branches horizontal) */}
              <div className="bg-[#F0F7F4] border-2 border-[#00A35C] rounded-sm p-2.5 w-fit min-w-[250px] mx-auto shadow-sm transition-transform hover:scale-[1.02]">
                <h4 className="text-[14.5px] font-bold text-[#005C3E] mb-2 whitespace-nowrap">BladeMgv™ AI推理</h4>
                <div className="grid grid-cols-3 gap-1">
                  {[
                    "单株检测",
                    "树种识别",
                    "存活度"
                  ].map((name, idx) => (
                    <div key={idx} className="bg-white border-2 border-[#00A35C]/60 rounded-sm py-1 px-2 shadow-xs flex items-center justify-center min-h-[34px] w-fit mx-auto">
                      <span className="text-[11.5px] font-bold text-[#1E293B] leading-tight whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conspicuous Arrow touching top and bottom */}
              <svg className="w-5 h-8 text-[#00A35C] mx-auto shrink-0 block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 0v24M7 17l5 7 5-7" />
              </svg>

              {/* Step 4: 生态指标核算 */}
              <div className="bg-[#F5F3FF] border-2 border-[#6D28D9] rounded-sm py-2 px-5 shadow-sm w-fit mx-auto transition-transform hover:scale-[1.02]">
                <h4 className="text-[15.5px] font-bold text-[#5B21B6] whitespace-nowrap">生态指标多维核算</h4>
              </div>

              {/* Conspicuous Arrow touching top and bottom */}
              <svg className="w-5 h-8 text-[#00A35C] mx-auto shrink-0 block" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 0v24M7 17l5 7 5-7" />
              </svg>

              {/* Step 5: 报表产出 */}
              <div className="bg-[#FFFBEB] border-2 border-[#D97706] rounded-sm py-2 px-5 shadow-sm w-fit mx-auto transition-transform hover:scale-[1.02]">
                <h4 className="text-[15.5px] font-bold text-[#92400E] whitespace-nowrap">一站式报表产出</h4>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageContent>
  </Page>
);

// === P4: 核心科技 I ===
const Page4 = () => (
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
        {/* Left Image: page4TargetImg */}
        <div className="w-1/2 h-full border-2 border-[#E9ECEF] bg-[#F8F9FA] rounded-sm relative group overflow-hidden shadow-sm">
          <img
            src={page4TargetImg}
            className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
            alt="小目标高精度单株检测效果"
          />
          <div className="absolute bottom-4 left-4 bg-transparent text-[13.5px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87] animate-pulse"></div>
            珠三角某项目小目标红树识别。<span className="text-[#00FF87] font-bold">准确率≥98%，召回率≥92%</span>
          </div>
        </div>

        {/* Right Image: coverImg */}
        <div className="w-1/2 h-full border-2 border-[#E9ECEF] bg-[#F8F9FA] rounded-sm relative group overflow-hidden shadow-sm">
          <img
            src={coverImg}
            className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-4 left-4 bg-transparent text-[13.5px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse"></div>
            高郁闭度密集交错红树单株识别。<span className="text-[#00FF87] font-bold">IOU≥90%</span>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="flex gap-3 mb-4">
        <div className="w-1/3">
          <h4 className="text-[#1E293B] font-bold flex items-center gap-2 text-[15px]">
            <span className="w-1.5 h-4 bg-[#005C3E]"></span> 穿透高稠密重叠
          </h4>
          <p className="text-[#475569] text-[13.5px] leading-relaxed">自研多尺度特征融合与自适应注意力机制，厘米级精准辨别密集郁闭林冠下的单株红树。</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-[#1E293B] font-bold flex items-center gap-2 text-[15px]">
            <span className="w-1.5 h-4 bg-[#005C3E]"></span> 消除小株漏检
          </h4>
          <p className="text-[#475569] text-[13.5px] leading-relaxed">针对细小初生幼苗与小冠幅特征实施高保真局部重建，彻底扫除行业小目标漏检盲区。</p>
        </div>
        <div className="w-1/3">
          <h4 className="text-[#1E293B] font-bold flex items-center gap-2 text-[15px]">
            <span className="w-1.5 h-4 bg-[#005C3E]"></span> 工业级性能
          </h4>
          <p className="text-[#475569] text-[13.5px] leading-relaxed">本地 GPU 算力硬件级加速，1小时检测万亩林区，实现全栈高效率与高精准度的完美统一。</p>
        </div>
      </div>

      {/* Bottom Project Footnote */}
      <div className="mt-auto border-t border-[#E9ECEF] pt-2 w-full">
        <p className="text-[#94A3B8] text-[11px] text-right italic tracking-wide font-medium">
          * 注：本手册所展示的所有高精单株识别与树种分类等效果图，均来源于我司与相关政企单位的真实合作项目。
        </p>
      </div>
    </PageContent>
  </Page>
);

// === P5: 核心科技 II - 树种分类 ===
const Page5 = () => (
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
        {[
          { img: classImg1, label: "AI 优势树种光谱掩膜" },
          { img: classImg2, label: "精细化郁闭斑块分割" },
          { img: classImg3, label: "跨区域植被群落划分" }
        ].map((item, idx) => (
          <div key={idx} className="w-1/3 h-full border border-[#E9ECEF] rounded-sm relative group overflow-hidden shadow-xs">
            <img src={item.img} className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105" alt={item.label} />
            {/* <div className="absolute bottom-2 left-2 bg-transparent text-[11px] font-bold text-white drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)] flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#00FF87] shadow-[0_0_6px_#00FF87] animate-pulse"></div>
              {item.label}
            </div> */}
          </div>
        ))}
      </div>

      {/* 2 Species Distribution Charts */}
      <div className="flex gap-4 mb-4 h-[225px] w-full">
        <div className="w-1/2 h-full border border-[#E9ECEF] bg-white p-1.5 rounded-sm relative group overflow-hidden shadow-xs">
          <img src={classChart1} className="w-full h-full object-contain rounded-sm transition-transform duration-500 group-hover:scale-[1.02]" alt="优势红树树种分布统计" />
          <div className="absolute bottom-0 right-2 bg-white/90 border border-[#E2E8F0] px-2 py-0.5 rounded-sm text-[11.5px] font-bold text-[#1E293B] flex items-center gap-1.5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_6px_#3B82F6] animate-pulse"></div>
            优势红树树种分布统计
          </div>
        </div>
        <div className="w-1/2 h-full border border-[#E9ECEF] bg-white p-1.5 rounded-sm relative group overflow-hidden shadow-xs">
          <img src={classChart2} className="w-full h-full object-contain rounded-sm transition-transform duration-500 group-hover:scale-[1.02]" alt="树种冠幅统计" />
          <div className="absolute bottom-0 right-2 bg-white/90 border border-[#E2E8F0] px-2 py-0.5 rounded-sm text-[11.5px] font-bold text-[#1E293B] flex items-center gap-1.5 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8] animate-pulse"></div>
            不同树种平均冠幅分析
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-auto border-t border-[#E9ECEF] pt-2 w-full">
        <p className="text-[#94A3B8] text-[11px] text-right italic tracking-wide font-medium">
          * 注：数据分析图表中，QQ 表示秋茄 ，THS 表示桐花树 ，BGR 表示白骨壤，HHL 表示红海榄，ML 表示木榄 ，GG 表示死亡植株，TREE 表示其他混生林木。
        </p>
      </div>
    </PageContent>
  </Page>
);

// === P6: 核心科技 III - 极限复杂环境自适应容错 ===
const Page6 = () => (
  <Page>
    <PageContent className="justify-start pb-4">
      <Header
        title="BladeMgv™ 刃蓝AI模型──复杂环境自适应容错"
        subtitle="Extreme Complex Environment Adaptive Extraction & Fault-Tolerance"
      />

      <p className="text-[#475569] text-[14.5px] max-w-4xl leading-relaxed mb-4">
        <strong className="text-[#1E293B] font-bold">BladeMgv™</strong> 针对低信噪比与高噪点背景进行了深度优化，可高容错自动剔除滩涂水体、识别异形云影，并在杂木杂草混生区域保持识别纯净度，解决实际普查场景中95%以上的高难度噪点干扰。
      </p>

      {/* GIS Dashboard Images Layout */}
      <div className="flex gap-4 mb-4 h-[450px] w-full">
        {/* Left Column (55% width) - Large Scale Overview */}
        <div className="w-[55%] h-full border-2 border-[#E9ECEF] bg-[#F8F9FA] rounded-sm relative group overflow-hidden shadow-sm">
          <img
            src={toleranceImg3}
            className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
            alt="大尺度广域高容错识别总览"
          />
          <div className="absolute bottom-4 left-4 bg-transparent text-[13px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87] animate-pulse"></div>
            大尺度广域高容错识别总览图
          </div>
        </div>

        {/* Right Column (45% width) - Detail Demos */}
        <div className="w-[45%] h-full flex flex-col gap-4">
          {/* Top Image: toleranceImg1 */}
          <div className="h-1/2 border-2 border-[#E9ECEF] bg-[#F8F9FA] rounded-sm relative group overflow-hidden shadow-sm">
            <img
              src={toleranceImg1}
              className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              alt="杂草混生剔除"
            />
            <div className="absolute bottom-3 left-4 bg-transparent text-[12.5px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse"></div>
              混生杂草中保持识别准确率
            </div>
          </div>

          {/* Bottom Image: toleranceImg2 */}
          <div className="h-1/2 border-2 border-[#E9ECEF] bg-[#F8F9FA] rounded-sm relative group overflow-hidden shadow-sm">
            <img
              src={toleranceImg2}
              className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
              alt="有难度背景提取"
            />
            <div className="absolute bottom-3 left-4 bg-transparent text-[12.5px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#A855F7] shadow-[0_0_8px_#A855F7] animate-pulse"></div>
              复杂泥水混合物高难度背景分离
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-8 border-t border-[#E9ECEF] pt-2 w-full">
        <div className="text-[11.5px] text-[#475569] leading-relaxed">
          <span className="text-[#005C3E] font-bold">* 多源数据拓展服务说明：</span>
          本产品聚焦于高性价比 RGB 无人机正射影像。刃蓝科技同时提供针对“多光谱/高光谱”与“激光雷达”等高阶遥感数据的定制，满足树高精准测量与林分蓄积量估算需求。
        </div>
      </div>
    </PageContent>
  </Page>
);

// === P7: 场景 I ===
const Page7 = () => (
  <Page>
    <PageContent className="justify-start pb-4">
      <Header
        title="MVAS助力林业生态资产普查标准化"
        subtitle="Standardized Eco-Asset Inventory and Monitoring Powered by MVAS"
      />

      <p className="text-[#475569] text-[13.5px] leading-relaxed mb-4">
        在大尺度宏观红树林生态系统的资产普查中，传统人工解译面临标准不一、周期漫长、盲区多等痛点。<br /><strong>MVAS 平台</strong> 为合作伙伴提供一站式的智能化数字监管方案，实现从超大区块遥感影像输入到厘米级普查结果交付的全面标准化流程。
      </p>

      {/* 2-Column Dashboard Layout (50/50 Split) */}
      <div className="flex gap-24 mb-4 h-[530px] w-full items-start">

        {/* Left Side (50%): Image fully displayed without cropping */}
        <div className="w-[50%] h-full flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={15} className="text-[#00A35C]" />
            <h4 className="text-[16px] font-bold text-[#1E293B]">大面积生态资产监测项目示例</h4>
          </div>
          <div className="flex-1 border border-[#E9ECEF] rounded-sm overflow-hidden shadow-xs h-full">
            <img
              src={blockAnalysisImg}
              className="w-full h-full object-cover rounded-sm"
              alt="大区块统计分析与宏观生态普查能力"
            />
          </div>
        </div>

        {/* Right Side (50%): Table on top, deliverables stack grouped closely below */}
        <div className="w-[50%] h-full flex flex-col justify-start">

          {/* Top of Right Side: Centered Custom-width Table */}
          <div className="flex flex-col w-[390px] mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <BarChart size={15} className="text-[#00A35C]" />
              <h4 className="text-[16px] font-bold text-[#1E293B]">核心监测数据落表示例</h4>
            </div>
            <div className="border border-[#E9ECEF] rounded-sm bg-white overflow-hidden shadow-xs w-full">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead>
                  <tr className="border-b border-[#E9ECEF] bg-[#c5d2e1ff]">
                    <th className="py-1.5 px-4 font-bold text-[#1E293B] w-[30%] text-left">核算指标项</th>
                    <th className="py-1.5 px-4 font-bold text-[#005C3E] w-[58%] text-left">普查实测数值</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E9ECEF] bg-white">
                  {[
                    { label: "监测区域面积", val: "66,073 m²" },
                    { label: "植株识别总量", val: "24,405 棵" },
                    { label: "植株冠幅监测", val: "平均 0.216 m² [0.01~2.20]" },
                    { label: "死亡植株定位", val: "1,673 棵" },
                    { label: "识别保存密度", val: "3,694 棵/公顷" },
                    { label: "关键成效指标", val: "成活率 83.19% | 健康度 93.6%" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F8F9FA]/60 transition-colors">
                      <td className="py-1.5 px-4 font-semibold text-[#1E293B] text-left">{row.label}</td>
                      <td className="py-1.5 px-4 text-left font-mono font-bold text-[#005C3E]">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom of Right Side: Deliverables in centered stack closely below table */}
          <div className="w-[390px] mx-auto flex flex-col gap-1.5 mt-8">
            <div className="flex items-center gap-2 mb-1">
              <Navigation size={15} className="text-[#00A35C]" />
              <h4 className="text-[16px] font-bold text-[#1E293B]">系统支持标准化普查成果输出</h4>
            </div>

            <div className="flex flex-col gap-2">
              <div className="bg-transparent border border-[#E9ECEF] p-2.5 rounded-sm relative group hover:border-[#005C3E] transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[8.5px] bg-[#E6F3EE] text-[#005C3E] font-bold px-1.5 py-0.2 rounded-xs tracking-wider">GIS VECTOR</span>
                  <h4 className="text-[14px] font-bold text-[#1E293B]">原始空间地理矢量</h4>
                </div>
                <p className="text-[12px] text-[#475569] leading-relaxed">
                  支持一键导出含高精检测边缘的 <strong>Shapefile、GeoJSON</strong> 等标准格式，无缝集成至 ArcGIS、QGIS 开展高级拓扑分析。
                </p>
              </div>

              <div className="bg-transparent border border-[#E9ECEF] p-2.5 rounded-sm relative group hover:border-[#D97706] transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[8.5px] bg-[#FFFBEB] text-[#D97706] font-bold px-1.5 py-0.2 rounded-xs tracking-wider">ASSET REPORT</span>
                  <h4 className="text-[14px] font-bold text-[#1E293B]">多维资产统计报表</h4>
                </div>
                <p className="text-[12px] text-[#475569] leading-relaxed">
                  自动生成全域树种分布、冠幅比例等图表，支持一键导出可视化专业分析报表，全方位赋能日常汇报。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageContent>
  </Page >
);

// === P8: 封底 ===
const Page8 = () => (
  <Page className="flex flex-row">
    {/* Left Side 60% */}
    <div className="w-[60%] px-16 py-20 flex flex-col justify-between bg-white">
      <div>
        <h2 className="text-[34px] font-serif font-bold text-[#1E293B] mb-4 leading-snug tracking-wider">
          用 AI 算力，守护每一抹海岸绿意
        </h2>
        <p className="text-[#475569] text-sm uppercase tracking-widest font-sans opacity-80">
          Empowering Mangrove Conservation with Intelligent Computing.
        </p>
      </div>

      {/* Visual Image Block for Middle Empty Space */}
      <div className="my-6 w-full h-[350px] rounded-sm overflow-hidden border border-[#E9ECEF] relative shadow-sm group">
        <img
          src={endPage}
          className="absolute top-0 left-0 w-full h-[150%] object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none"></div>
      </div>

      <div className="mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 select-none bg-transparent">
          <img src={generatedBrandLogo} alt="刃蓝科技商标" className="w-full h-full object-contain scale-[1.1] transform origin-center" />
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold text-[#005C3E] tracking-widest mb-1">广州刃蓝科技有限公司</h1>
          <p className="text-[11px] text-[#475569] uppercase tracking-widest font-sans">Guangzhou Renlan Technology Co., Ltd.</p>
        </div>
      </div>
    </div>

    {/* Right Side 40% */}
    <div className="w-[40%] bg-[#F8F9FA] px-14 py-20 flex flex-col justify-between items-end text-right border-l border-[#E9ECEF]">

      {/* Contact Info (Aligned right/bottom) */}
      <div className="mt-auto space-y-4 text-[13.5px] text-[#475569] leading-relaxed text-right w-full flex flex-col items-end">
        <div><strong className="text-[#1E293B] font-bold">官方网站：</strong>www.renlan.top</div>
        <div><strong className="text-[#1E293B] font-bold">联系邮箱：</strong>support@renlan.top</div>
        <div><strong className="text-[#1E293B] font-bold">公司地址：</strong>广东省广州市南沙区<br />金岭南路412号</div>
      </div>

      {/* QR Code Section */}
      <div className="mt-16 flex flex-col items-end">
        <div className="w-20 h-20 bg-white border border-[#E9ECEF] rounded flex items-center justify-center p-1 shrink-0 shadow-sm">
          <img src={wechatQRImg} alt="WeChat QR Code" className="w-full h-full object-cover rounded-sm" />
        </div>
        <p className="text-[12.5px] text-[#1E293B] font-bold mb-1">扫码联系技术专家</p>
        <p className="text-[11px] text-[#475569]">获取系统详细部署方案</p>
      </div>
    </div>
  </Page>
);

// === 主渲染应用 ===
export default function App() {
  return (
    <div className="min-h-screen bg-gray-200 py-12 px-4 font-sans text-[#475569]">
      <div className="max-w-[1190px] w-full mx-auto mb-10 bg-gradient-to-r from-[#004D30] to-[#006E47] rounded-sm py-6 px-10 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        {/* Subtle grid background inside banner */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center shrink-0 select-none bg-transparent">
            <img src={generatedBrandLogo} alt="刃蓝科技商标" className="w-full h-full object-contain scale-[1.1] transform origin-center" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[18px] font-bold tracking-wider">刃蓝科技 </span>
            <span className="text-[9px] text-[#A7F3D0] tracking-widest font-sans uppercase font-semibold">RENLAN TECH.</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-right">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest font-serif flex items-center gap-2">
            <span>MVAS 产品手册</span>
          </h1>
          <p className="text-[10px] text-white/70 tracking-widest uppercase font-sans font-bold mt-1">
            MVASS · Product Brochure
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
      </div>
    </div>
  );
}
