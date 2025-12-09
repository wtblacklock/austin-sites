interface JaggedDotsSeparatorProps {
  color?: string;
  flipped?: boolean;
  bgColor?: string;
}

export function JaggedDotsSeparator({ 
  color = "#FF000D", 
  flipped = false,
  bgColor = "#faf8f5" 
}: JaggedDotsSeparatorProps) {
  // Different jagged pattern - more angular/sharp
  const pathData = flipped
    ? "M0,0 L40,35 L80,15 L120,45 L160,20 L200,50 L240,25 L280,55 L320,30 L360,60 L400,35 L440,65 L480,40 L520,70 L560,45 L600,75 L640,50 L680,80 L720,55 L760,85 L800,60 L840,90 L880,65 L920,95 L960,70 L1000,100 L1040,75 L1080,105 L1120,80 L1160,110 L1200,85 L1200,0 Z"
    : "M0,120 L40,85 L80,105 L120,75 L160,100 L200,70 L240,95 L280,65 L320,90 L360,60 L400,85 L440,55 L480,80 L520,50 L560,75 L600,45 L640,70 L680,40 L720,65 L760,35 L800,60 L840,30 L880,55 L920,25 L960,50 L1000,20 L1040,45 L1080,15 L1120,40 L1160,10 L1200,35 L1200,120 Z";

  // Dots positioned along the jagged edge
  const dots = flipped
    ? [
        { x: 60, y: 25 },
        { x: 180, y: 35 },
        { x: 300, y: 45 },
        { x: 420, y: 50 },
        { x: 540, y: 58 },
        { x: 660, y: 65 },
        { x: 780, y: 72 },
        { x: 900, y: 80 },
        { x: 1020, y: 88 },
        { x: 1140, y: 95 },
      ]
    : [
        { x: 60, y: 95 },
        { x: 180, y: 85 },
        { x: 300, y: 75 },
        { x: 420, y: 70 },
        { x: 540, y: 62 },
        { x: 660, y: 55 },
        { x: 780, y: 48 },
        { x: 900, y: 40 },
        { x: 1020, y: 32 },
        { x: 1140, y: 25 },
      ];

  return (
    <div 
      className="relative w-full h-12 md:h-16 lg:h-20 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <svg
        className={`absolute w-full h-full ${flipped ? "top-0" : "bottom-0"}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Jagged path */}
        <path
          d={pathData}
          fill={color}
        />
        {/* Dots along the jagged edge */}
        {dots.map((dot, index) => (
          <circle
            key={index}
            cx={dot.x}
            cy={dot.y}
            r="5"
            fill="#faf8f5"
            stroke={color}
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

