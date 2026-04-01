import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Top padding; default pt-32 pb-16 for page sections */
  padding?: string;
}

export function Section({ children, className = '', padding = 'pt-32 pb-16' }: SectionProps) {
  return (
    <section className={`${padding} ${className}`.trim()}>
      {children}
    </section>
  );
}
