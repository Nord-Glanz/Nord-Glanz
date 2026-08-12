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
      {/* SVG Emblem representing the official Nord Glanz Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        id="nord-glanz-logo-svg"
      >
        {/* Outer Teal Crescent Ring */}
        <path
          d="M 250 20 
             A 230 230 0 1 0 455 350
             A 210 210 0 0 1 80 250
             A 210 210 0 0 1 390 90
             A 230 230 0 0 0 250 20 Z"
          fill="#256685"
        />

        {/* Inner Dark Navy Swoosh Ring */}
        <path
          d="M 160 70 
             A 210 210 0 0 1 480 250
             A 230 230 0 0 1 200 470
             A 210 210 0 0 0 440 250
             A 190 190 0 0 0 220 95 Z"
          fill="#0E1B2E"
        />

        {/* Center Water Droplet */}
        <path
          d="M 275 115
             C 275 115 355 235 355 295
             A 80 80 0 1 1 195 295
             C 195 235 275 115 275 115 Z"
          fill="#0E1B2E"
        />

        {/* Sparkles on the Left of the Droplet (Teal/Blue) */}
        {/* Sparkle 1 (Large left) */}
        <path
          d="M 170 265 Q 170 240 145 240 Q 170 240 170 215 Q 170 240 195 240 Q 170 240 170 265 Z"
          fill="#256685"
        />
        {/* Sparkle 2 (Bottom left main) */}
        <path
          d="M 170 335 Q 170 300 135 300 Q 170 300 170 265 Q 170 300 205 300 Q 170 300 170 335 Z"
          fill="#256685"
        />
        {/* Sparkle 3 (Top left medium) */}
        <path
          d="M 200 190 Q 200 175 185 175 Q 200 175 200 160 Q 200 175 215 175 Q 200 175 200 190 Z"
          fill="#256685"
        />
        {/* Sparkle 4 (Far left small) */}
        <path
          d="M 148 245 Q 148 235 138 235 Q 148 235 148 225 Q 148 235 158 235 Q 148 235 148 245 Z"
          fill="#256685"
        />
        {/* Sparkle 5 (Top tiny) */}
        <path
          d="M 230 195 Q 230 187 222 187 Q 230 187 230 179 Q 230 187 238 187 Q 230 187 230 195 Z"
          fill="#256685"
        />

        {/* Sparkles inside the Droplet (White) */}
        {/* White Sparkle 1 (Top center inside drop) */}
        <path
          d="M 275 190 Q 275 180 265 180 Q 275 180 275 170 Q 275 180 285 180 Q 275 180 275 190 Z"
          fill="#FFFFFF"
        />
        {/* White Sparkle 2 (Upper right inside drop) */}
        <path
          d="M 290 220 Q 290 210 280 210 Q 290 210 290 200 Q 290 210 300 210 Q 290 210 290 220 Z"
          fill="#FFFFFF"
        />
        {/* White Sparkle 3 (Center large inside drop) */}
        <path
          d="M 290 280 Q 290 255 265 255 Q 290 255 290 230 Q 290 255 315 255 Q 290 255 290 280 Z"
          fill="#FFFFFF"
        />
        {/* White Sparkle 4 (Bottom left inside drop) */}
        <path
          d="M 255 305 Q 255 293 243 293 Q 255 293 255 281 Q 255 293 267 293 Q 255 293 255 305 Z"
          fill="#FFFFFF"
        />
        {/* White Sparkle 5 (Right inside drop) */}
        <path
          d="M 315 305 Q 315 293 303 293 Q 315 293 315 281 Q 315 293 327 293 Q 315 293 315 305 Z"
          fill="#FFFFFF"
        />
      </svg>

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
