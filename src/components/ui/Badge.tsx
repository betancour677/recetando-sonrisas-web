
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      variant === 'default' && 'bg-teal-100 text-teal-800',
      variant === 'outline' && 'border border-teal-300 text-teal-700',
      variant === 'secondary' && 'bg-blue-100 text-blue-800',
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;
