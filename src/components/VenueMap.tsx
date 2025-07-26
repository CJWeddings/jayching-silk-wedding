import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const VenueMap = () => {
  const venues = [
    {
      name: "Our Lady of Atonement Cathedral",
      type: "Ceremony",
      address: "Magsaysay Ave, Baguio, Benguet",
      time: "3:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.1234567890123!2d120.5929234!3d16.4108567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI0JzM5LjEiTiAxMjDCsDM1JzM0LjUiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph",
      icon: <MapPin className="w-5 h-5 text-rose-gold" />
    },
    {
      name: "El Retiro Baguio",
      type: "Reception",
      address: "El Retiro Rd, Baguio, Benguet",
      time: "6:00 PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.9876543210987!2d120.5854321!3d16.3987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIzJzU1LjYiTiAxMjDCsDM1JzA3LjYiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph",
      icon: <Navigation className="w-5 h-5 text-gold" />
    }
  ];

  const openDirections = (venueName: string) => {
    const searchQuery = encodeURIComponent(`${venueName} Baguio`);
    window.open(`https://www.google.com/maps/search/${searchQuery}`, '_blank');
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-blush/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Venue & Directions
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Find your way to our celebration venues in beautiful Baguio City.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {venues.map((venue, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="glass rounded-2xl overflow-hidden silk-hover">
                {/* Venue Info Header */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-center space-x-3 mb-4">
                    {venue.icon}
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-gradient">
                        {venue.type}
                      </h3>
                      <p className="text-sm text-muted-foreground">{venue.name}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{venue.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{venue.time}</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => openDirections(venue.name)}
                    variant="outline"
                    className="w-full border-rose-gold/30 hover:bg-rose-gold/10 text-rose-gold"
                  >
                    Get Directions
                  </Button>
                </div>

                {/* Map Embed */}
                <div className="h-64 relative">
                  <iframe
                    src={venue.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  ></iframe>
                  
                  {/* Map Overlay for styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-b-2xl"></div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="glass rounded-2xl p-8 max-w-2xl mx-auto silk-hover animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-playfair font-semibold text-gradient mb-4">
              Travel Information
            </h3>
            <div className="space-y-3 text-muted-foreground font-inter">
              <p>📍 Both venues are located in the heart of Baguio City</p>
              <p>🚗 Parking is available at both locations</p>
              <p>🕒 Please arrive 15 minutes before the ceremony begins</p>
              <p>❄️ Don't forget to bring a jacket - Baguio can be chilly!</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;