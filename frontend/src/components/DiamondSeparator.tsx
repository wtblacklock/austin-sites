interface DiamondSeparatorProps {
  color?: string;
  bgColor?: string;
}

export function DiamondSeparator({ 
  color = "#FF000D",
  bgColor = "#faf8f5"
}: DiamondSeparatorProps) {
  // Simple diamond pattern - just repeating diamonds
  const diamondWidth = 50; // Width between diamonds
  const totalHeight = 30; // Total height of the pattern
  const centerY = totalHeight / 2;
  const diamondSize = 10; // Size of each diamond
  
  // Create simple diamond pattern
  const createDiamondPattern = () => {
    const numDiamonds = 30; // Enough to cover width
    let elements: JSX.Element[] = [];
    
    for (let i = 0; i < numDiamonds; i++) {
      const centerX = i * diamondWidth + diamondWidth / 2;
      
      elements.push(
        <polygon
          key={i}
          points={`
            ${centerX},${centerY - diamondSize}
            ${centerX + diamondSize},${centerY}
            ${centerX},${centerY + diamondSize}
            ${centerX - diamondSize},${centerY}
          `}
          fill={color}
        />
      );
    }
    
    return elements;
  };

  return (
    <div 
      className="relative w-full h-8 md:h-10 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <svg
        className="absolute w-full h-full"
        preserveAspectRatio="none"
        viewBox={`0 0 1500 ${totalHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diamond pattern with scrolling animation */}
        <g>
          {createDiamondPattern()}
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; -50 0"
            dur="20s"
            repeatCount="indefinite"
          />
        </g>
      </svg>
    </div>
  );
}

