import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher (Nord Glanz)',
  className = ''
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let position = (x / rect.width) * 100;
      if (position < 0) position = 0;
      if (position > 100) position = 100;
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none rounded-2xl shadow-lg border border-slate-200/80 bg-slate-100 ${className}`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full width background) */}
      <img
        src={afterImage}
        alt={afterLabel}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover pointer-events-none block"
      />
      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-emerald-300 font-semibold text-xs px-3 py-1 rounded-full border border-emerald-500/30 shadow-sm z-10">
        {afterLabel}
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover max-w-none"
          style={{
            width: containerRef.current
              ? `${containerRef.current.getBoundingClientRect().width}px`
              : '100%'
          }}
        />
        <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-slate-200 font-semibold text-xs px-3 py-1 rounded-full border border-slate-700 shadow-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Divider Line & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl border-2 border-[#1B75D0] flex items-center justify-center text-[#1B75D0] hover:scale-110 transition-transform">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M8.5 17l-5-5 5-5v10zm7-10l5 5-5 5V7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
