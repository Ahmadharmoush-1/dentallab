import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Bloom Dental transformed my smile beyond my expectations. The team was professional, caring, and the results are stunning. I finally have the confidence to smile freely!",
    treatment: "Veneers & Whitening",
  },
  {
    name: "Ahmed K.",
    rating: 5,
    text: "After years of dental anxiety, I found a clinic that truly cares. The painless procedures and modern technology made everything comfortable. Highly recommend!",
    treatment: "Dental Implants",
  },
  {
    name: "Layla R.",
    rating: 5,
    text: "The digital dentistry approach is incredible. Same-day crowns with perfect fit and color match. The lab quality and speed are unmatched in the region.",
    treatment: "CAD/CAM Crowns",
  },
  {
    name: "Marc B.",
    rating: 5,
    text: "Exceptional service from consultation to final results. Dr. Haddad's expertise in implants is world-class. Worth every penny for the quality of care.",
    treatment: "Full Mouth Reconstruction",
  },
];

export default function Testimonials() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="section-container">
      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          What Our Patients Say
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Real experiences from satisfied patients who trusted us with their smiles
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`luxury-card p-8 hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 150}ms` : "0ms"
            }}
          >
            {/* Stars */}
            <div className="flex mb-4 gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-accent text-accent animate-fade-in"
                  style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-muted-foreground leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-accent">{testimonial.treatment}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300">
                <span className="text-accent font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
