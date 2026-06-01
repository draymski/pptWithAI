import watermarkImg from '../assets/mangrove/mangrove.jpeg';

// ── Page: 固定尺寸幻灯片容器 ──
interface PageProps {
  children: React.ReactNode;
  className?: string;
}

export const Page = ({ children, className = '' }: PageProps) => (
  <div
    className={`relative w-[1190px] h-[841px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col bg-white text-[#475569] ${className}`}
  >
    {children}
  </div>
);

// ── PageContent: 页边距 + 全局水印背景 ──
interface PageContentProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContent = ({ children, className = '' }: PageContentProps) => (
  <>
    {/* 背景图层：红树林航拍水印，极低可见度 */}
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      <img
        src={watermarkImg}
        alt=""
        className="w-full h-full object-cover"
        style={{ opacity: 0.25, filter: 'brightness(0.2) grayscale(0.1)' }}
        loading="lazy"
      />
    </div>

    {/* 内容图层 */}
    <div className={`relative z-10 w-full flex-1 px-16 pt-14 pb-14 flex flex-col ${className}`}>
      {children}
    </div>
  </>
);

// ── Header: 页面标题 + 英文副标题 ──
interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <div className="mb-10">
    <h2 className="text-3xl font-serif font-bold mb-3 text-[#1E293B] tracking-wide">{title}</h2>
    <p className="text-sm tracking-widest uppercase font-sans text-[#475569] opacity-80">{subtitle}</p>
  </div>
);
