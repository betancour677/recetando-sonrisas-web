
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}) => {
  return (
    <div className={cn(
      'mb-12 space-y-2', 
      centered ? 'text-center' : 'text-left',
      className
    )}>
      <div className="inline-flex items-center">
        <div className={cn(
          'h-1 w-10 bg-logo-blue rounded-full',
          centered ? 'mx-auto' : ''
        )} />
      </div>
      <h2 className="text-3xl md:text-4xl font-medium text-balance text-logo-blue-800">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl text-balance mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
