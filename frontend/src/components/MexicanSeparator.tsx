export function MexicanSeparator() {
  return (
    <div className="relative w-full h-24 md:h-32 lg:h-40 overflow-hidden bg-[#FF000D]">
      {/* Animated papel picado style lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated decorative lines with papel picado pattern */}
        <g className="animate-pulse">
          {/* Top jagged edge with Mexican paper banner style */}
          <path
            d="M0,20 L60,5 L120,25 L180,10 L240,30 L300,15 L360,35 L420,20 L480,40 L540,25 L600,45 L660,30 L720,50 L780,35 L840,55 L900,40 L960,60 L1020,45 L1080,65 L1140,50 L1200,70 L1200,0 L0,0 Z"
            fill="#cc000a"
            opacity="0.8"
          />
          
          {/* Middle decorative cutouts */}
          <path
            d="M0,50 L80,60 L160,45 L240,70 L320,55 L400,80 L480,65 L560,90 L640,75 L720,100 L800,85 L880,110 L960,95 L1040,120 L1120,105 L1200,130 L1200,40 L0,40 Z"
            fill="#FF000D"
            opacity="0.9"
          />
          
          {/* Bottom decorative line */}
          <path
            d="M0,140 L100,120 L200,135 L300,115 L400,130 L500,110 L600,125 L700,105 L800,120 L900,100 L1000,115 L1100,95 L1200,110 L1200,160 L0,160 Z"
            fill="#cc000a"
            opacity="0.8"
          />
        </g>
        
        {/* Decorative dots/patterns */}
        <g>
          <circle cx="120" cy="35" r="3" fill="#FFDD00" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="360" cy="50" r="3" fill="#FFDD00" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="600" cy="65" r="3" fill="#FFDD00" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" begin="1s" />
          </circle>
          <circle cx="840" cy="80" r="3" fill="#FFDD00" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" begin="1.5s" />
          </circle>
          <circle cx="1080" cy="95" r="3" fill="#FFDD00" opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" begin="0.8s" />
          </circle>
        </g>
        
        {/* Flowing lines animation */}
        <g stroke="#FFDD00" strokeWidth="2" opacity="0.6" fill="none">
          <path d="M0,60 Q300,40 600,60 T1200,60">
            <animate
              attributeName="d"
              values="M0,60 Q300,40 600,60 T1200,60;M0,60 Q300,80 600,60 T1200,60;M0,60 Q300,40 600,60 T1200,60"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M0,100 Q300,120 600,100 T1200,100">
            <animate
              attributeName="d"
              values="M0,100 Q300,120 600,100 T1200,100;M0,100 Q300,80 600,100 T1200,100;M0,100 Q300,120 600,100 T1200,100"
              dur="4s"
              repeatCount="indefinite"
              begin="2s"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}

