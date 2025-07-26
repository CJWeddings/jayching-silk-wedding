import React, { useState } from 'react';
import { Send, Heart, Users, MessageSquare, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    mealPreference: '',
    dietaryRestrictions: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Sheets integration would go here
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "RSVP Submitted Successfully! 💕",
        description: "Thank you for reserving your spot. We can't wait to celebrate with you!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '1',
        mealPreference: '',
        dietaryRestrictions: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blush/5 to-transparent">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Reserve Your Spot
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            Your presence would make our special day even more meaningful. Please let us know if you'll be joining us!
          </p>
        </div>

        {/* RSVP Form */}
        <Card className="glass rounded-2xl p-8 silk-hover animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-5 h-5 text-rose-gold" />
                <h3 className="text-xl font-playfair font-semibold text-gradient">Personal Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="font-inter font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="mt-1 border-border/50 focus:border-rose-gold rounded-xl"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="font-inter font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 border-border/50 focus:border-rose-gold rounded-xl"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="phone" className="font-inter font-medium">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="mt-1 border-border/50 focus:border-rose-gold rounded-xl"
                  placeholder="+63 xxx xxx xxxx"
                />
              </div>
            </div>

            {/* Guest Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-playfair font-semibold text-gradient">Guest Details</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests" className="font-inter font-medium">Number of Guests *</Label>
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className="mt-1 border-border/50 focus:border-rose-gold rounded-xl">
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest (Just me)</SelectItem>
                      <SelectItem value="2">2 Guests (Plus one)</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5+">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="meal" className="font-inter font-medium">Meal Preference</Label>
                  <Select value={formData.mealPreference} onValueChange={(value) => handleInputChange('mealPreference', value)}>
                    <SelectTrigger className="mt-1 border-border/50 focus:border-rose-gold rounded-xl">
                      <SelectValue placeholder="Select meal preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="chicken">Chicken</SelectItem>
                      <SelectItem value="beef">Beef</SelectItem>
                      <SelectItem value="fish">Fish</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="dietary" className="font-inter font-medium">Dietary Restrictions / Allergies</Label>
                <Input
                  id="dietary"
                  value={formData.dietaryRestrictions}
                  onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                  className="mt-1 border-border/50 focus:border-rose-gold rounded-xl"
                  placeholder="Please let us know of any dietary restrictions"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className="w-5 h-5 text-rose-gold" />
                <h3 className="text-xl font-playfair font-semibold text-gradient">Message for the Couple</h3>
              </div>
              
              <div>
                <Label htmlFor="message" className="font-inter font-medium">Your Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="mt-1 border-border/50 focus:border-rose-gold rounded-xl min-h-24"
                  placeholder="Share your wishes, excitement, or any special message for Christine & Jay..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.name}
                className="w-full bg-rose-gold hover:bg-gold text-white font-inter font-semibold py-3 rounded-xl silk-hover group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Submit RSVP
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>

        {/* RSVP Info */}
        <div className="mt-12 text-center">
          <Card className="glass rounded-2xl p-6 silk-hover animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Utensils className="w-5 h-5 text-gold" />
              <h3 className="text-lg font-playfair font-semibold">RSVP Information</h3>
            </div>
            <div className="space-y-2 text-muted-foreground font-inter text-sm">
              <p>📅 Please RSVP by <strong>January 15, 2025</strong></p>
              <p>🍽️ Dinner will be served at the reception</p>
              <p>💃 Dancing and celebration will follow</p>
              <p>❓ Questions? Contact us using the information above</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;