import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pearl via-blush/10 to-champagne/20"></div>
      
      {/* Elegant floating monograms */}
      <div className="absolute top-20 left-10 opacity-5 silk-float">
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-rose-gold">
          <path 
            d="M25 50 C25 30, 35 25, 45 30 C48 32, 48 35, 45 37 C42 35, 40 37, 42 40 C45 42, 50 40, 50 35 C50 25, 40 20, 30 25 C15 35, 15 65, 30 75 C40 80, 50 75, 50 65" 
            fill="currentColor"
          />
          <path 
            d="M55 25 L55 60 C55 70, 50 75, 40 75 C35 75, 32 72, 32 68 C32 65, 35 62, 38 65" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute top-1/3 right-20 opacity-3 silk-float" style={{ animationDelay: '2s' }}>
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-gold">
          <path 
            d="M25 50 C25 30, 35 25, 45 30 C48 32, 48 35, 45 37 C42 35, 40 37, 42 40 C45 42, 50 40, 50 35 C50 25, 40 20, 30 25 C15 35, 15 65, 30 75 C40 80, 50 75, 50 65" 
            fill="currentColor"
          />
          <path 
            d="M55 25 L55 60 C55 70, 50 75, 40 75 C35 75, 32 72, 32 68 C32 65, 35 62, 38 65" 
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="absolute bottom-32 left-1/4 opacity-4 silk-float" style={{ animationDelay: '4s' }}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-blush">
          <path 
            d="M25 50 C25 30, 35 25, 45 30 C48 32, 48 35, 45 37 C42 35, 40 37, 42 40 C45 42, 50 40, 50 35 C50 25, 40 20, 30 25 C15 35, 15 65, 30 75 C40 80, 50 75, 50 65" 
            fill="currentColor"
          />
          <path 
            d="M55 25 L55 60 C55 70, 50 75, 40 75 C35 75, 32 72, 32 68 C32 65, 35 62, 38 65" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Elegant script text watermarks */}
      <div className="absolute top-1/2 left-10 transform -rotate-12 opacity-2">
        <span className="font-playfair text-6xl text-rose-gold font-light italic">Christine</span>
      </div>
      
      <div className="absolute bottom-1/3 right-16 transform rotate-12 opacity-2">
        <span className="font-playfair text-5xl text-gold font-light italic">Jay</span>
      </div>

      {/* Decorative flourishes */}
      <div className="absolute top-40 right-1/3 opacity-8 silk-float" style={{ animationDelay: '1s' }}>
        <svg width="60" height="60" viewBox="0 0 100 100" className="text-rose-gold">
          <path 
            d="M20 50 Q35 30, 50 50 Q65 70, 80 50 Q65 30, 50 50 Q35 70, 20 50" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            opacity="0.6"
          />
          <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.8" />
        </svg>
      </div>

      <div className="absolute bottom-1/2 left-1/3 opacity-6 silk-float" style={{ animationDelay: '3s' }}>
        <svg width="40" height="40" viewBox="0 0 100 100" className="text-gold">
          <path 
            d="M50 20 L55 40 L75 45 L55 50 L50 70 L45 50 L25 45 L45 40 Z" 
            fill="currentColor" 
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Soft gradient orbs */}
      <div className="absolute top-16 right-20 w-64 h-64 bg-gradient-radial from-rose-gold/8 via-rose-gold/3 to-transparent rounded-full blur-3xl silk-float"></div>
      <div className="absolute bottom-20 left-16 w-48 h-48 bg-gradient-radial from-gold/6 via-gold/2 to-transparent rounded-full blur-2xl silk-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blush/4 via-champagne/2 to-transparent rounded-full blur-3xl silk-float" style={{ animationDelay: '4s' }}></div>

      {/* Subtle quote overlay */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-5 max-w-md text-center">
        <p className="font-playfair italic text-lg text-muted-foreground leading-relaxed">
          "We are deeply grateful for your presence, your love, and the memories we created together."
        </p>
      </div>

      {/* Delicate border flourishes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-rose-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-rose-gold/20 to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent"></div>
    </div>
  );
};

export default BackgroundElements;