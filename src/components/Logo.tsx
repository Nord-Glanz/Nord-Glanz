interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
  subtextColor?: string;
}

export function Logo({
  className = '',
  size = 40,
  showText = true,
  textColor = 'text-slate-900',
  subtextColor = 'text-slate-500'
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/assets/aistudio/favicon_efa70838.png"
        alt="Nord Glanz Logo"
        width={size}
        height={size}
        referrerPolicy="no-referrer"
        className="shrink-0 object-contain"
      />

      {showText && (
        <div className="flex flex-col">
          <span className={`text-xl font-bold tracking-tight leading-tight ${textColor}`}>
            Nord <span className="text-[#1B75D0]">Glanz</span>
          </span>
          <span className={`text-[10px] font-semibold uppercase tracking-wider ${subtextColor}`}>
            Gebäude- &amp; Außenreinigung
          </span>
        </div>
      )}
    </div>
  );
}
