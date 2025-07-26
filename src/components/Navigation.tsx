import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#wedding-party', label: 'Wedding Party' },
    { href: '#venue', label: 'Venue' },
    { href: '#rsvp', label: 'RSVP' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass shadow-elegant backdrop-blur-xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Elegant Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-gold to-gold rounded-full shadow-soft opacity-90"></div>
                
                {/* Inner background */}
                <div className="absolute inset-0.5 bg-background/95 rounded-full backdrop-blur-sm"></div>
                
                {/* Monogram */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-6 h-6" fill="currentColor">
                    {/* Simplified C */}
                    <path 
                      d="M25 50 C25 35, 35 30, 45 35 C35 40, 35 60, 45 65 C35 70, 25 65, 25 50 Z" 
                      className="fill-rose-gold"
                    />
                    {/* Simplified J */}
                    <path 
                      d="M55 30 L55 60 C55 70, 45 70, 40 65 C45 65, 50 60, 50 55 L50 30 C50 25, 55 25, 55 30 Z" 
                      className="fill-gold"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-playfair font-semibold text-lg text-gradient">
                Christine & Jay
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter text-muted-foreground hover:text-rose-gold transition-all duration-300 silk-hover relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass border-t border-border/50">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left font-inter text-muted-foreground hover:text-rose-gold transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;