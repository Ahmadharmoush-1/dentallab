import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const teamMembers = [
  {
    name: "Dr. Maya Haddad",
    specialty: "Prosthodontist & Implantologist",
    bio: "Over 15 years of experience in complex prosthodontics and dental implant surgery. Certified by the International Congress of Oral Implantologists.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Karim Fares",
    specialty: "Periodontist",
    bio: "Specialist in gum health and periodontal surgery. Trained in advanced bone grafting techniques and laser-assisted periodontal therapy.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Layla Nader",
    specialty: "Cosmetic Dentist",
    bio: "Expert in aesthetic dentistry including veneers, smile makeovers, and advanced whitening treatments. Member of the American Academy of Cosmetic Dentistry.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Omar Khalil",
    specialty: "Endodontist",
    bio: "Specialized in root canal therapy and endodontic microsurgery. Utilizes the latest rotary systems and regenerative techniques.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Sara Badran",
    specialty: "Orthodontist",
    bio: "Certified Invisalign provider with expertise in clear aligner therapy and digital smile design. Focuses on adult and adolescent orthodontics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const members = [];
    for (let i = 0; i < 3; i++) {
      members.push(teamMembers[(currentIndex + i) % teamMembers.length]);
    }
    return members;
  };

  return (
    <section id="team" className="section-container bg-secondary/30">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Our Experts
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          Meet the Team
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          World-class specialists dedicated to your oral health and smile transformation
        </p>
      </div>

      <div className="relative">
        {/* Team Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {getVisibleMembers().map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="luxury-card p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-accent font-semibold mb-4">{member.specialty}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="rounded-full w-12 h-12"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <div className="flex space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="rounded-full w-12 h-12"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
