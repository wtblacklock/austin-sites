import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={`container mx-auto px-6 ${narrow ? 'max-w-3xl' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

