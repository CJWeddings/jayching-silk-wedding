import React from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WeddingHero = () => {
  const weddingDate = new Date('2025-01-22T15:00:00');
  
  const handleSaveToCalendar = () => {
    const startDate = weddingDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(weddingDate.getTime() + 4 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const details = encodeURIComponent('Join us as we celebrate the union of Juanito Pasiliao Jr (Jay) & Christine Joyce Bentinganan');
    const location = encodeURIComponent('Our Lady of Atonement Cathedral, Baguio');
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Jay & Christine Wedding')}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    
    window.open(calendarUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-rose-gold/20 to-gold/10 rounded-full blur-xl silk-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-gold/20 to-rose-gold/10 rounded-full blur-xl silk-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-blush/30 to-champagne/20 rounded-full blur-lg silk-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="text-center space-y-8 px-6 max-w-4xl mx-auto animate-fade-in-up">
        {/* Custom Monogram Logo */}
        <div className="relative mx-auto mb-8">
          <div className="w-40 h-40 mx-auto relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-gold via-gold to-rose-gold rounded-full shadow-glow opacity-80"></div>
            
            {/* Inner background */}
            <div className="absolute inset-2 bg-background/95 rounded-full backdrop-blur-sm"></div>
            
            {/* Decorative inner ring */}
            <div className="absolute inset-4 border border-rose-gold/30 rounded-full"></div>
            
            {/* Monogram Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                className="w-20 h-20 text-gradient"
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
        </div>

        {/* Names */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gradient leading-tight">
            Christine & Jay
          </h1>
          <div className="flex items-center justify-center space-x-4 text-muted-foreground">
            <div className="h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent flex-1 max-w-32"></div>
            <Heart className="w-6 h-6 text-rose-gold" />
            <div className="h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent flex-1 max-w-32"></div>
          </div>
          <p className="text-xl md:text-2xl font-inter text-muted-foreground">
            Forever Starts
          </p>
        </div>

        {/* Wedding Date */}
        <div className="glass rounded-2xl p-8 mx-auto max-w-md silk-hover">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar className="w-6 h-6 text-rose-gold" />
            <h2 className="text-2xl font-playfair font-semibold">January 22, 2025</h2>
          </div>
          <p className="text-muted-foreground mb-6">Wednesday at 3:00 PM</p>
          
          <Button 
            onClick={handleSaveToCalendar}
            className="w-full bg-rose-gold hover:bg-gold text-white font-inter font-medium rounded-xl"
          >
            Save to Calendar
          </Button>
        </div>

        {/* Venues */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="glass rounded-2xl p-6 silk-hover">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-rose-gold" />
              <h3 className="font-playfair font-semibold text-lg">Ceremony</h3>
            </div>
            <p className="text-muted-foreground">Our Lady of Atonement Cathedral</p>
            <p className="text-sm text-muted-foreground mt-1">Baguio City</p>
          </div>
          
          <div className="glass rounded-2xl p-6 silk-hover">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-gold" />
              <h3 className="font-playfair font-semibold text-lg">Reception</h3>
            </div>
            <p className="text-muted-foreground">El Retiro Baguio</p>
            <p className="text-sm text-muted-foreground mt-1">Baguio City</p>
          </div>
        </div>

        {/* Romantic Quote */}
        <div className="mt-16 max-w-2xl mx-auto">
          <blockquote className="text-lg md:text-xl font-inter italic text-muted-foreground leading-relaxed">
            "We are deeply grateful for your presence, your love, and the memories we created together."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WeddingHero;