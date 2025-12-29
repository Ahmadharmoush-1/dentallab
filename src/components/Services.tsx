import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Digital Smile Design",
    description: "AI-powered precision planning for your perfect smile, visualized before treatment begins.",
    image: "/images/service-smile-design.jpg",
  },
  {
    title: "Luxury Veneers",
    description: "Ultra-thin porcelain shells crafted to perfection for a flawless, natural appearance.",
    image: "/images/service-veneers.jpg",
  },
  {
    title: "Elite Smile Makeovers",
    description: "Complete smile transformations tailored to your unique facial features and personality.",
    image: "/images/service-makeover.jpg",
  },
  {
    title: "Maxillofacial Surgery",
    description: "Advanced surgical solutions for jaw alignment, facial reconstruction, and oral health.",
    image: "/images/service-maxillofacial.jpg",
  },
  {
    title: "Periodontal Surgery",
    description: "Expert gum care and surgical treatments to restore and maintain healthy foundations.",
    image: "/images/service-perio.jpg",
  },
];

const Services = () => {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="luxury-divider mb-6" />
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Our Expertise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Premium Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience world-class dental care with our comprehensive range of 
            aesthetic and surgical treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-card rounded-lg overflow-hidden shadow-elegant hover-lift cursor-pointer ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={scrollToBooking}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl md:text-2xl text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
