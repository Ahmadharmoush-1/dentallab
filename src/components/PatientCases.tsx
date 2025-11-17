import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "./ui/button";

const cases = [
  {
    title: "Complete Smile Makeover",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    description: "Full mouth rehabilitation with veneers and crowns",
  },
  {
    title: "Teeth Whitening Transformation",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    description: "Professional bleaching achieving 8 shades lighter",
  },
  {
    title: "Dental Implant Restoration",
    before: "https://images.unsplash.com/photo-1598531228433-d9f0bb199161?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
    description: "Multiple implants with custom zirconia crowns",
  },
  {
    title: "Veneer Smile Enhancement",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
    description: "Ultra-thin porcelain veneers for natural appearance",
  },
];

export default function PatientCases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentIndex];

  return (
    <section ref={sectionRef} className="section-container">
      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Results
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          Patient Transformations
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Real results from real patients—see the life-changing transformations we create
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className={`luxury-card p-8 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          {/* Before/After Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="image-hover-zoom">
              <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                Before
              </p>
              <img
                src={currentCase.before}
                alt="Before treatment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="image-hover-zoom">
              <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                After
              </p>
              <img
                src={currentCase.after}
                alt="After treatment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Case Info */}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-primary mb-2">
              {currentCase.title}
            </h3>
            <p className="text-muted-foreground">{currentCase.description}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {cases.map((_, index) => (
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
              className="rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
