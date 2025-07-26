import React from 'react';
import { Facebook, Mail, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ContactSection = () => {
  const contacts = [
    {
      name: "Jay Pasiliao",
      role: "Groom",
      facebook: "https://www.facebook.com/jaypasiliao",
      email: "jaypasiliao@gmail.com",
      gradient: "from-rose-gold to-gold"
    },
    {
      name: "Christine Bentinganan", 
      role: "Bride",
      facebook: "https://www.facebook.com/ching.cjbentinganan",
      email: "",
      gradient: "from-gold to-rose-gold"
    }
  ];

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Have questions about our special day? Want to share your excitement? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="glass rounded-2xl p-8 silk-hover relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-5 rounded-2xl`}></div>
                
                <div className="relative">
                  {/* Contact Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-playfair font-bold text-gradient mb-2">
                      {contact.name}
                    </h3>
                    <p className="text-muted-foreground font-inter">{contact.role}</p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={() => openLink(contact.facebook)}
                      variant="outline"
                      className="w-full border-rose-gold/30 hover:bg-rose-gold/10 text-rose-gold silk-hover group"
                    >
                      <Facebook className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Connect on Facebook
                    </Button>
                    
                    {contact.email && (
                      <Button 
                        onClick={() => openLink(`mailto:${contact.email}`)}
                        variant="outline"
                        className="w-full border-gold/30 hover:bg-gold/10 text-gold silk-hover group"
                      >
                        <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        Send Email
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Wedding Hashtag */}
        <div className="text-center">
          <Card className="glass rounded-2xl p-8 max-w-md mx-auto silk-hover animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-rose-gold" />
              <h3 className="text-xl font-playfair font-semibold text-gradient">
                Share the Love
              </h3>
            </div>
            <p className="text-muted-foreground font-inter mb-4">
              Tag us in your photos with our wedding hashtag:
            </p>
            <div className="bg-background/50 rounded-xl p-4 border border-border/50">
              <p className="text-lg font-inter font-semibold text-gradient">
                #ChristineAndJayForever
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <Card className="glass rounded-2xl p-6 silk-hover animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <MessageCircle className="w-5 h-5 text-rose-gold" />
              <h3 className="text-lg font-playfair font-semibold">Questions?</h3>
            </div>
            <p className="text-muted-foreground font-inter text-sm">
              Feel free to reach out to either of us if you have any questions about the wedding, 
              accommodations, or anything else. We're here to help make your experience wonderful!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;