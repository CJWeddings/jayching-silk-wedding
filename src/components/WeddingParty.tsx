import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, Crown, Flower2 } from 'lucide-react';

const WeddingParty = () => {
  const weddingPartyData = {
    principalSponsors: [
      "Mr. & Mrs. Principal Sponsor 1",
      "Mr. & Mrs. Principal Sponsor 2",
      "Mr. & Mrs. Principal Sponsor 3",
      "Mr. & Mrs. Principal Sponsor 4"
    ],
    secondarySponsors: [
      "Secondary Sponsor 1",
      "Secondary Sponsor 2", 
      "Secondary Sponsor 3",
      "Secondary Sponsor 4"
    ],
    bridesmaids: [
      "Bridesmaid 1",
      "Bridesmaid 2",
      "Bridesmaid 3",
      "Bridesmaid 4"
    ],
    groomsmen: [
      "Groomsman 1",
      "Groomsman 2",
      "Groomsman 3", 
      "Groomsman 4"
    ],
    parents: {
      bride: ["Mr. & Mrs. Parent of the Bride"],
      groom: ["Mr. & Mrs. Parent of the Groom"]
    }
  };

  const PartySection = ({ title, members, icon: Icon, delay = 0 }: {
    title: string;
    members: string[];
    icon: any;
    delay?: number;
  }) => (
    <div 
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card className="glass rounded-2xl p-6 silk-hover">
        <div className="flex items-center space-x-3 mb-6">
          <Icon className="w-6 h-6 text-rose-gold" />
          <h3 className="text-xl font-playfair font-semibold text-gradient">{title}</h3>
        </div>
        <div className="space-y-3">
          {members.map((member, index) => (
            <p 
              key={index} 
              className="text-muted-foreground font-inter"
              style={{ animationDelay: `${delay + (index * 100)}ms` }}
            >
              {member}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4">
            Our Wedding Party
          </h2>
          <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
            The wonderful people who will stand with us on our special day, sharing in our joy and celebration.
          </p>
        </div>

        {/* Parents Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <PartySection 
              title="Parents of the Bride"
              members={weddingPartyData.parents.bride}
              icon={Crown}
              delay={100}
            />
            <PartySection 
              title="Parents of the Groom"
              members={weddingPartyData.parents.groom}
              icon={Crown}
              delay={200}
            />
          </div>
        </div>

        {/* Principal Sponsors */}
        <div className="mb-12">
          <PartySection 
            title="Principal Sponsors"
            members={weddingPartyData.principalSponsors}
            icon={Crown}
            delay={300}
          />
        </div>

        {/* Secondary Sponsors */}
        <div className="mb-12">
          <PartySection 
            title="Secondary Sponsors"
            members={weddingPartyData.secondarySponsors}
            icon={Users}
            delay={400}
          />
        </div>

        {/* Bridesmaids and Groomsmen */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <PartySection 
            title="Bridesmaids"
            members={weddingPartyData.bridesmaids}
            icon={Flower2}
            delay={500}
          />
          <PartySection 
            title="Groomsmen"
            members={weddingPartyData.groomsmen}
            icon={Users}
            delay={600}
          />
        </div>

        {/* Special Roles */}
        <div className="text-center glass rounded-2xl p-8 silk-hover animate-fade-in-up" style={{ animationDelay: '700ms' }}>
          <h3 className="text-xl font-playfair font-semibold text-gradient mb-4">Special Roles</h3>
          <div className="grid md:grid-cols-3 gap-4 text-muted-foreground font-inter">
            <div>
              <p className="font-medium">Flower Girl</p>
              <p className="text-sm">To be announced</p>
            </div>
            <div>
              <p className="font-medium">Ring Bearer</p>
              <p className="text-sm">To be announced</p>
            </div>
            <div>
              <p className="font-medium">Ceremony Coordinator</p>
              <p className="text-sm">To be announced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingParty;