import { Wrench, Clock, Scan, Users, Award, Cog } from "lucide-react";
import labImage from "@/assets/dental-lab.jpg";

const labServices = [
  {
    icon: Award,
    title: "Crown & Bridge Production",
    description: "High-quality ceramic and metal restorations crafted with precision.",
  },
  {
    icon: Cog,
    title: "Zirconia & E-Max",
    description: "Premium materials for natural-looking, durable restorations.",
  },
  {
    icon: Wrench,
    title: "Implant Prosthetics",
    description: "Custom abutments and crowns for dental implant systems.",
  },
  {
    icon: Scan,
    title: "Digital Wax-ups",
    description: "Virtual smile design before final fabrication.",
  },
];

const labAdvantages = [
  { icon: Clock, text: "Fast turnaround times" },
  { icon: Scan, text: "Digital workflow compatible" },
  { icon: Award, text: "Precision milling & scanning" },
  { icon: Users, text: "Direct dentist collaboration" },
];

export default function DentalLab() {
  return (
    <section id="lab" className="section-container bg-secondary/20">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          In-House Excellence
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          Our Dental Laboratory
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          State-of-the-art in-house dental lab ensuring precision, speed, and quality control 
          for all prosthetic work. Every restoration is crafted by certified technicians using 
          the latest CAD/CAM technology.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Lab Image */}
        <div className="animate-fade-in hover:scale-105 transition-all duration-500">
          <img
            src={labImage}
            alt="Bloom Dental Laboratory"
            className="rounded-2xl shadow-[var(--shadow-strong)] w-full h-[400px] object-cover"
          />
        </div>

        {/* Lab Services */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-bold text-primary mb-6">Laboratory Services</h3>
          {labServices.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 group hover:translate-x-2 transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lab Advantages */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {labAdvantages.map((advantage, index) => (
          <div
            key={index}
            className="luxury-card p-6 text-center animate-fade-in hover:scale-105 hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              <advantage.icon className="w-6 h-6 text-accent" />
            </div>
            <p className="font-semibold text-primary">{advantage.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
