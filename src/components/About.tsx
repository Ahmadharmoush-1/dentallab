import { Shield, Award, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Sparkles,
    title: "Pain-Free Techniques",
    description: "Advanced anesthesia and gentle procedures ensure maximum comfort during every visit.",
  },
  {
    icon: Award,
    title: "Certified Specialists",
    description: "Our team consists of internationally certified dental professionals with years of expertise.",
  },
  {
    icon: Shield,
    title: "Latest Equipment",
    description: "State-of-the-art technology and modern facilities for superior treatment outcomes.",
  },
];

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="clinic" className="section-container bg-secondary/30">
      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          About Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          The Clinic
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          At Nahas Dental Clinic, we believe that exceptional dental care goes beyond treatment. 
          We combine luxury, comfort, and cutting-edge technology to create a transformative experience 
          for every patient. Our philosophy is simple: perfection in every smile, comfort in every visit.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`luxury-card p-8 text-center group hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
            }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
              <feature.icon className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

