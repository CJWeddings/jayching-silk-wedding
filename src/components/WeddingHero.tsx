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
        {/* Monogram */}
        <div className="relative mx-auto mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-rose-gold rounded-full shadow-glow"></div>
            <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
              <span className="text-4xl font-playfair font-bold text-gradient">CJ</span>
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