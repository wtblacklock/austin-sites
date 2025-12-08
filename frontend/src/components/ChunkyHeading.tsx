import { cn } from "@/lib/utils";

interface ChunkyHeadingProps {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  align?: "left" | "center";
  className?: string;
  children: React.ReactNode;
}

const sizeClasses = {
  xl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  lg: "text-4xl sm:text-5xl md:text-6xl",
  md: "text-3xl sm:text-4xl md:text-5xl",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
};

export function ChunkyHeading({
  as: Component = "h2",
  size = "lg",
  align = "left",
  className,
  children,
}: ChunkyHeadingProps) {
  return (
    <Component
      className={cn(
        "font-black uppercase tracking-tight leading-none",
        sizeClasses[size],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
}

