import { useState, useEffect, useRef } from 'react';
import { SLIDE_WIDTH, SLIDE_HEIGHT } from '../constants';

/**
 * 响应式幻灯片等比例缩放包装器
 * 确保在手机/平板等小屏幕上能够等比例无损缩放
 */
export const SlideWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [height, setHeight] = useState<number | string>('auto');

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.parentElement?.clientWidth || window.innerWidth;

      if (parentWidth < SLIDE_WIDTH) {
        const newScale = (parentWidth - 16) / SLIDE_WIDTH;
        setScale(newScale);
        setHeight(SLIDE_HEIGHT * newScale);
      } else {
        setScale(1);
        setHeight('auto');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(handleResize, 100);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-slide-wrapper
      style={{
        height,
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: scale < 1 ? '0.5rem' : '3rem',
      }}
    >
      <div
        data-slide-page
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
          width: `${SLIDE_WIDTH}px`,
          flexShrink: 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};
