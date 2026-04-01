import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main';
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`max-w-7xl mx-auto w-full px-4 md:px-8 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
