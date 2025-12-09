interface ZigzagSeparatorProps {
  color?: string;
  bgColor?: string;
  scrolling?: boolean;
}

export function ZigzagSeparator({ 
  color = "#FF000D",
  bgColor = "#faf8f5",
  scrolling = true
}: ZigzagSeparatorProps) {
  // Zigzag pattern - double chevron lines that alternate V and A
  const segmentWidth = 50; // Width of one chevron segment
  const chevronHeight = 10; // Height of the chevron point
  const lineSpacing = 6; // Distance between the two parallel lines
  const lineWidth = 4; // Thickness of each line
  
  // Create the zigzag pattern - alternating V (down) and A (up) shapes
  const createZigzagPath = (startX: number, yPos: number) => {
    const numSegments = 30; // Enough to cover width and scroll
    let path = `M ${startX} ${yPos}`;
    
    for (let i = 0; i < numSegments; i++) {
      const x1 = startX + i * segmentWidth;
      const x2 = startX + (i + 0.5) * segmentWidth;
      const x3 = startX + (i + 1) * segmentWidth;
      
      if (i % 2 === 0) {
        // V shape (pointing down) - even segments
        const yTop = yPos;
        const yBottom = yPos + chevronHeight;
        path += ` L ${x2} ${yBottom} L ${x3} ${yTop}`;
      } else {
        // A shape (pointing up) - odd segments
        const yTop = yPos;
        const yBottom = yPos + chevronHeight;
        path += ` L ${x2} ${yTop} L ${x3} ${yBottom}`;
      }
    }
    return path;
  };

  // Both lines follow the same pattern, just offset vertically
  const baseY = 15;
  const topPath = createZigzagPath(0, baseY);
  const bottomPath = createZigzagPath(0, baseY + lineSpacing);

  return (
    <div 
      className="relative w-full h-8 md:h-10 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1500 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Top zigzag line */}
          <path
            d={topPath}
            stroke={color}
            strokeWidth={lineWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {scrolling && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; -50 0"
                dur="15s"
                repeatCount="indefinite"
              />
            )}
          </path>
          {/* Bottom zigzag line */}
          <path
            d={bottomPath}
            stroke={color}
            strokeWidth={lineWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {scrolling && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; -50 0"
                dur="15s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </g>
      </svg>
    </div>
  );
}

