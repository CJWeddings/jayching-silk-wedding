import React from 'react';

const WeddingLogo = ({ size = 'md', className = '' }: { 
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24', 
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl', 
    xl: 'text-4xl'
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Monogram Circle */}
      <div className={`${sizeClasses[size]} relative mx-auto`}>
        {/* Outer glow ring */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-gold via-gold to-rose-gold rounded-full shadow-glow opacity-80"></div>
        
        {/* Inner background */}
        <div className="absolute inset-1 bg-background/95 rounded-full backdrop-blur-sm"></div>
        
        {/* Decorative inner ring */}
        <div className="absolute inset-2 border border-rose-gold/30 rounded-full"></div>
        
        {/* Monogram Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className={`${sizeClasses[size]} text-gradient`}
            fill="currentColor"
          >
            {/* C Letter - Elegant Script Style */}
            <path 
              d="M25 50 C25 30, 35 25, 45 30 C48 32, 48 35, 45 37 C42 35, 40 37, 42 40 C45 42, 50 40, 50 35 C50 25, 40 20, 30 25 C15 35, 15 65, 30 75 C40 80, 50 75, 50 65 C50 60, 45 58, 42 60 C40 63, 42 65, 45 63 C48 65, 48 68, 45 70 C35 75, 25 70, 25 50 Z" 
              className="fill-rose-gold opacity-90"
            />
            
            {/* J Letter - Elegant Script Style */}
            <path 
              d="M55 25 L55 60 C55 70, 50 75, 40 75 C35 75, 32 72, 32 68 C32 65, 35 62, 38 65 C35 67, 37 70, 40 68 C45 66, 50 63, 50 58 L50 25 C50 22, 52 20, 55 20 C65 20, 75 25, 75 35 L75 30 C75 25, 70 22, 65 25 C62 27, 62 30, 65 32 C68 30, 70 32, 68 35 C65 37, 60 35, 60 30 C60 25, 65 22, 70 25 C75 30, 75 35, 75 40 L75 35 C75 30, 70 25, 60 25 C57 25, 55 25, 55 25 Z" 
              className="fill-gold opacity-90"
            />
            
            {/* Decorative flourish */}
            <path 
              d="M20 80 Q30 85, 40 80 Q50 75, 60 80 Q70 85, 80 80" 
              stroke="url(#gradient1)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.6"
            />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--rose-gold))" />
                <stop offset="50%" stopColor="hsl(var(--gold))" />
                <stop offset="100%" stopColor="hsl(var(--rose-gold))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      {/* Text below logo */}
      <div className="text-center mt-4">
        <h1 className={`font-playfair font-bold text-gradient ${textSizes[size]} leading-tight`}>
          Christine & Jay
        </h1>
        {size !== 'sm' && (
          <p className="text-xs text-muted-foreground font-inter mt-1 tracking-widest">
            FOREVER STARTS
          </p>
        )}
      </div>
    </div>
  );
};

export default WeddingLogo;