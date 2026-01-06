import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Luxury Smile Design",
    description: "AI-powered precision planning for your perfect smile, visualized before treatment begins.",
    image: "/photos/service-smile-design.jpg",
    link: "/services/smile-design",
  },
  {
    title: " Feldspathic E-max Veneers",
    description: "Ultra-thin porcelain shells crafted to perfection for a flawless, natural appearance.",
    image: "/photos/e-maxveneers.png",
    link: "/services/veneers",
  },
  {
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    image: "/photos/service-implants.jpg",
    link: "/services/dental-implants",
  },
  {
    title: "Teeth Whitening",
    description: "Professional-grade whitening treatments for a brilliantly radiant smile.",
    image: "/photos/service-whitening.jpg",
    link: "/services/teeth-whitening",
  },
  {
    title: "Zirconia Crowns",
    description: "Premium full-ceramic restorations combining exceptional strength with natural beauty.",
    image: "/photos/service-crowns.jpg",
    link: "/services/zirconia-crowns",
  },
];

const Services = () => {
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
            <Link
              key={service.title}
              to={service.link}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-elegant cursor-pointer block transition-all duration-500 hover:shadow-gold hover:-translate-y-2 ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-xl md:text-2xl text-primary-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium transition-all duration-300 group-hover:gap-4">
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 group-hover:after:w-full">
                    Explore Service
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Luxury Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gold/20 rotate-45" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
