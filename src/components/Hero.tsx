import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photos/drlogo.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury px-4 md:px-8 py-20 text-center md:text-left">
        <div className="max-w-2xl mx-auto md:mx-0">
          {/* Gold Accent Line */}
          <div className="w-20 h-1 bg-gold mb-8 mx-auto md:mx-0 animate-fade-up" />
          
          {/* Subtitle */}
          <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-up stagger-1 opacity-0">
            Luxury AI Smile Architect
          </p>

          {/* Main Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up stagger-2 opacity-0">
            Dr. Ali Merhi
          </h1>

          {/* Tagline */}
          <p className="font-body text-primary-foreground/80 text-lg md:text-xl lg:text-2xl font-light mb-8 leading-relaxed animate-fade-up stagger-3 opacity-0">
            Crafting Perfect Smiles with Precision,<br className="hidden md:block" />
            Artistry & Advanced Technology
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up stagger-4 opacity-0">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={scrollToBooking}
              className="group"
            >
              Book Appointment
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              asChild
            >
              <a href="tel:+96170848026">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start animate-fade-up stagger-5 opacity-0">
            <div className="text-center">
              <p className="text-gold font-heading text-3xl md:text-4xl">15+</p>
              <p className="text-primary-foreground/60 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-gold font-heading text-3xl md:text-4xl">5000+</p>
              <p className="text-primary-foreground/60 text-sm">Smiles Created</p>
            </div>
            <div className="text-center">
              <p className="text-gold font-heading text-3xl md:text-4xl">2</p>
              <p className="text-primary-foreground/60 text-sm">Clinic Locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
