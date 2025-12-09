interface JaggedSeparatorProps {
  color?: string;
  flipped?: boolean;
  bgColor?: string;
  animated?: boolean;
  building?: boolean;
  clipId?: string;
  wavy?: boolean;
}

export function JaggedSeparator({ 
  color = "#FF000D", 
  flipped = false,
  bgColor = "#faf8f5",
  animated = false,
  building = false,
  clipId = "building-clip",
  wavy = false
}: JaggedSeparatorProps) {
  // Wavy pattern - two parallel wavy lines
  if (wavy) {
    const waveLength = 100; // Length of one wave cycle
    const amplitude = 25; // Height of the wave (increased for deeper waves)
    const line1Y = 40; // Y position of first line
    const line2Y = 80; // Y position of second line
    const lineWidth = 5; // Stroke width (increased from 3)
    
    // Create a single wave pattern that will repeat
    const createWavePath = (startX: number, yPos: number) => {
      let path = `M ${startX} ${yPos}`;
      const numWaves = 15; // Enough waves to cover width and scroll
      
      for (let i = 0; i < numWaves; i++) {
        const x1 = startX + i * waveLength;
        const x2 = startX + (i + 0.25) * waveLength;
        const x3 = startX + (i + 0.5) * waveLength;
        const x4 = startX + (i + 0.75) * waveLength;
        const x5 = startX + (i + 1) * waveLength;
        
        const y1 = yPos;
        const y2 = yPos - amplitude;
        const y3 = yPos;
        const y4 = yPos + amplitude;
        
        path += ` Q ${x2} ${y2} ${x3} ${y3} Q ${x4} ${y4} ${x5} ${y1}`;
      }
      return path;
    };

    const wavePath1 = createWavePath(0, line1Y);
    const wavePath2 = createWavePath(0, line2Y);

    return (
      <div 
        className="relative w-full h-12 md:h-16 lg:h-20 overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <svg
          className="absolute w-full h-full bottom-0"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {building && (
              <clipPath id={clipId}>
                <rect x="0" y="0" width="1200" height="120">
                  <animate
                    attributeName="width"
                    from="0"
                    to="1200"
                    dur="2s"
                    fill="freeze"
                  />
                </rect>
              </clipPath>
            )}
          </defs>
          <g clipPath={building ? `url(#${clipId})` : undefined}>
            {/* First wavy line */}
            <path
              d={wavePath1}
              stroke={color}
              strokeWidth={lineWidth}
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; -100 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            {/* Second wavy line */}
            <path
              d={wavePath2}
              stroke={color}
              strokeWidth={lineWidth}
              fill="none"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; -100 0"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    );
  }

  // When flipped, invert the path so jagged edge is at top
  const pathData1 = flipped
    ? "M0,0 L50,40 L100,20 L150,60 L200,30 L250,70 L300,35 L350,65 L400,25 L450,75 L500,32 L550,68 L600,28 L650,72 L700,30 L750,70 L800,32 L850,68 L900,28 L950,72 L1000,30 L1050,70 L1100,32 L1150,68 L1200,28 L1200,0 Z"
    : "M0,120 L50,80 L100,100 L150,60 L200,90 L250,50 L300,85 L350,55 L400,95 L450,45 L500,88 L550,52 L600,92 L650,48 L700,90 L750,50 L800,88 L850,52 L900,92 L950,48 L1000,90 L1050,50 L1100,88 L1150,52 L1200,92 L1200,120 Z";

  const pathData2 = flipped
    ? "M0,0 L60,35 L110,25 L160,55 L210,35 L260,65 L310,40 L360,60 L410,30 L460,70 L510,38 L560,68 L610,32 L660,72 L710,35 L760,65 L810,33 L860,68 L910,30 L960,70 L1010,32 L1060,68 L1110,30 L1160,70 L1200,32 L1200,0 Z"
    : "M0,120 L60,85 L110,95 L160,65 L210,85 L260,55 L310,80 L360,60 L410,90 L460,50 L510,82 L560,52 L610,88 L660,48 L710,85 L760,55 L810,87 L860,52 L910,90 L960,50 L1010,88 L1060,52 L1110,90 L1160,50 L1200,88 L1200,120 Z";

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
        <defs>
          {building && (
            <clipPath id={clipId}>
              <rect x="0" y="0" width="1200" height="120">
                <animate
                  attributeName="width"
                  from="0"
                  to="1200"
                  dur="2s"
                  fill="freeze"
                />
              </rect>
            </clipPath>
          )}
        </defs>
        {animated ? (
          <>
            <path
              d={pathData1}
              fill={color}
              clipPath={building ? `url(#${clipId})` : undefined}
            >
              <animate
                attributeName="d"
                values={`${pathData1};${pathData2};${pathData1}`}
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </>
        ) : (
          <path
            d={pathData1}
            fill={color}
            clipPath={building ? `url(#${clipId})` : undefined}
          />
        )}
      </svg>
    </div>
  );
}

