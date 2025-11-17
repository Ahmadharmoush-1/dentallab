import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "./ui/button";

const teamMembers = [
  {
  name: "Dr. Nicolas Sakr",
  specialty: "Prosthodontist",
  bio: "Expert in prosthodontic rehabilitation including crowns, bridges, veneers, and full-mouth restorations. Specialized in digital smile design and advanced implant prosthetics.",
  image: "/photos/DrNICOLAS.png",
},
{
  name: "Dr. Sara Chehab",
  specialty: "Endodontology Specialist",
  bio: "Specialist in root canal therapy and endodontic microsurgery. Utilizes state-of-the-art rotary systems, CBCT diagnostics, and modern pain-free treatment techniques.",
  image: "/photos/DrSARA.png",
},
{
  name: "Dr. Chloe Haddad",
  specialty: "Pediatric Dentist",
  bio: "Dedicated to children’s oral health, providing gentle, child-friendly treatments. Experienced in behavior management, dental growth monitoring, and preventive pediatric care.",
  image: "/photos/DrCHLOE.png",
},
{
  name: "Dr. Marc Abou Nahed",
  specialty: "Orthodontist",
  bio: "Specialized in orthodontic treatments including braces, clear aligners, and bite correction. Focused on achieving functional, aesthetic, and long-lasting smile alignment.",
  image: "/photos/DrMARC.png",
},

//   {
//     name: "Dr. Sara Badran",
//     specialty: "Orthodontist",
//     bio: "Certified Invisalign provider with expertise in clear aligner therapy and digital smile design. Focuses on adult and adolescent orthodontics.",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
//   },
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

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
    <section ref={sectionRef} id="team" className="section-container bg-secondary/30">
      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
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
        {/* Mobile: Horizontal Scroll with Snap */}
        <div className="relative md:hidden">
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
            <div className="flex gap-6 px-4">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="luxury-card p-8 text-center min-w-[300px] snap-center hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20 transition-all duration-500 hover:scale-110 hover:border-accent/40 hover:shadow-lg">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.specialty}`}
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
          </div>
          {/* Gradient Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
        </div>

        {/* Desktop: Carousel with Navigation */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleMembers().map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className={`luxury-card p-8 text-center hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
                }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20 transition-all duration-500 hover:scale-110 hover:border-accent/40 hover:shadow-lg">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.specialty}`}
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
              className="rounded-full w-12 h-12 hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8 h-2"
                      : "bg-muted-foreground/30 w-2 h-2 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-12 h-12 hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
