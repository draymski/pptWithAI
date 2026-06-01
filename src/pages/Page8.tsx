import { Page } from '../components/Page';
import { endPage } from '../data/slides';
import wechatQRImg from '../assets/wechatQRcod_2.jpg';
import generatedBrandLogo from '../assets/刃蓝商标/图标-圆-暗-六边形.jpg';

/** P8: 封底 */
export const Page8 = () => (
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

      {/* Visual Image Block */}
      <div className="my-6 w-full h-[350px] rounded-sm overflow-hidden border border-[#E9ECEF] relative shadow-sm group">
        <img
          src={endPage}
          alt="红树林生态全景"
          className="absolute top-0 left-0 w-full h-[150%] object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          style={{ filter: 'grayscale(0.15)' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
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
      {/* Contact Info */}
      <div className="mt-auto space-y-4 text-[13.5px] text-[#475569] leading-relaxed text-right w-full flex flex-col items-end">
        <div><strong className="text-[#1E293B] font-bold">官方网站：</strong>mvas.renlan.top</div>
        <div><strong className="text-[#1E293B] font-bold">联系邮箱：</strong>support@renlan.top</div>
        <div><strong className="text-[#1E293B] font-bold">公司地址：</strong>广东省广州市南沙区<br />金岭南路412号</div>
      </div>

      {/* QR Code */}
      <div className="mt-16 flex flex-col items-end">
        <div className="w-20 h-20 bg-white border border-[#E9ECEF] rounded flex items-center justify-center p-1 shrink-0 shadow-sm">
          <img src={wechatQRImg} alt="微信二维码" className="w-full h-full object-cover rounded-sm" />
        </div>
        <p className="text-[12.5px] text-[#1E293B] font-bold mb-1">扫码联系技术专家</p>
        <p className="text-[11px] text-[#475569]">获取系统详细部署方案</p>
      </div>
    </div>
  </Page>
);
