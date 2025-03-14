
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className 
}) => {
  return (
    <div className={cn(
      'glass-card rounded-xl p-6 hover-scale',
      className
    )}>
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-logo-blue-100">
        <Icon className="h-6 w-6 text-logo-blue" />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
