/**
 * ImageCard — 可复用的图片展示卡片
 *
 * 统一封装 Page4~Page7 中反复出现的图片 + 底部 label overlay 模式。
 */

interface ImageCardProps {
  src: string;
  alt: string;
  /** 底部浮动标签内容（可选，支持 JSX） */
  label?: React.ReactNode;
  /** 标签左侧圆点颜色，默认 #00FF87 */
  dotColor?: string;
  /** 额外的容器 className */
  className?: string;
  /** 额外的图片 className */
  imgClassName?: string;
}

export const ImageCard = ({
  src,
  alt,
  label,
  dotColor = '#00FF87',
  className = '',
  imgClassName = '',
}: ImageCardProps) => (
  <div
    className={`border-2 border-[#E9ECEF] bg-[#F8F9FA] rounded-sm relative group overflow-hidden shadow-sm ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105 ${imgClassName}`}
      loading="lazy"
    />
    {label && (
      <div className="absolute bottom-4 left-4 bg-transparent text-[13.5px] font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] flex items-center gap-2">
        <div
          className="w-2.5 h-2.5 rounded-full animate-pulse"
          style={{ backgroundColor: dotColor, boxShadow: `0 0 8px ${dotColor}` }}
        />
        {label}
      </div>
    )}
  </div>
);
