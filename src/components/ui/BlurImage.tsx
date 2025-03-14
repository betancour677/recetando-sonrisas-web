
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const BlurImage = ({ src, alt, className, width, height }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "image-fade-in w-full h-full object-cover",
          isLoaded ? "image-loaded" : ""
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default BlurImage;
