import { Page } from '../components/Page';
import { coverImg } from '../data/slides';
import wechatQRImg from '../assets/wechatQRcod_2.jpg';

/** P1: 封面 */
export const Page1 = () => (
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
        <div className="w-10 h-1 bg-[#00A35C] mb-8 mx-auto" />
        <div className="text-[#475569] space-y-3 font-sans text-m leading-relaxed">
          <p className="font-medium">单株级精准检测 · 智能化树种识别</p>
          <p className="font-medium">守护"海岸卫士"的 AI 力量</p>
          <p className="text-xs text-[#475569]/60 mt-4 tracking-wider uppercase">
            Precision Individual Tree Detection &amp; Species Identification
          </p>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-white border border-[#E9ECEF] rounded flex items-center justify-center p-1 shrink-0 shadow-sm">
            <img src={wechatQRImg} alt="微信二维码" className="w-full h-full object-cover rounded-sm" />
          </div>
          <div className="pt-1 text-left">
            <p className="text-sm font-bold text-[#1E293B] mb-1">广州刃蓝科技有限公司</p>
            <p className="text-xs text-[#475569] mb-1 uppercase text-[10px] tracking-wider">
              Guangzhou Renlan Technology Co., Ltd.
            </p>
            <p className="text-xs text-[#475569]/80">官方邮箱: support@renlan.top</p>
          </div>
        </div>
      </div>
    </div>

    {/* Right 66% background image */}
    <div className="w-[66%] absolute right-0 top-0 bottom-0 bg-white overflow-hidden z-10">
      <img
        src={coverImg}
        alt="红树林航拍"
        className="w-full h-full object-cover"
        style={{ filter: 'contrast(1.5) saturate(0.7) brightness(0.8) grayscale(0.45)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-3/5" />
      <div className="absolute inset-0 bg-white/10" />
    </div>
  </Page>
);
