import React from 'react';
import Navigation from '@/components/Navigation';
import WeddingHero from '@/components/WeddingHero';
import WeddingParty from '@/components/WeddingParty';
import VenueMap from '@/components/VenueMap';
import RSVPSection from '@/components/RSVPSection';
import ContactSection from '@/components/ContactSection';
import BackgroundElements from '@/components/BackgroundElements';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Beautiful Background Elements */}
      <BackgroundElements />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <WeddingHero />
        </section>

        {/* Wedding Party Section */}
        <section id="wedding-party">
          <WeddingParty />
        </section>

        {/* Venue & Map Section */}
        <section id="venue">
          <VenueMap />
        </section>

        {/* RSVP Section */}
        <section id="rsvp">
          <RSVPSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center bg-gradient-to-t from-blush/10 to-transparent">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-rose-gold rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-sm">CJ</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-gradient">
                Christine & Jay
              </h3>
            </div>
            <p className="text-muted-foreground font-inter mb-4">
              January 22, 2025 • Baguio City
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              With love and gratitude, we can't wait to celebrate with you 💕
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;
