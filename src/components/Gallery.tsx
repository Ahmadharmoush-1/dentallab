import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const beforeAfterImages = [
  {
    id: 1,
    image: "/images/before-after-1.jpg",
    title: "Complete Smile Transformation",
    description: "Veneers & Whitening Treatment",
  },
  {
    id: 2,
    image: "/images/before-after-2.jpg",
    title: "Alignment Correction",
    description: "Digital Smile Design",
  },
  {
    id: 3,
    image: "/images/before-after-3.jpg",
    title: "Full Makeover",
    description: "Elite Smile Makeover",
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section id="gallery" className="section-padding bg-foreground">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Transformations
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Before & After Gallery
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto">
            Witness the remarkable transformations achieved through our precision 
            treatments and artistic approach to smile design.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg overflow-hidden shadow-card">
            <img
              src={beforeAfterImages[currentIndex].image}
              alt={beforeAfterImages[currentIndex].title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 to-transparent">
              <h3 className="font-heading text-xl md:text-2xl text-primary-foreground mb-1">
                {beforeAfterImages[currentIndex].title}
              </h3>
              <p className="text-gold text-sm">
                {beforeAfterImages[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary-foreground"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary-foreground"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {beforeAfterImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails for Desktop */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          {beforeAfterImages.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-24 h-16 rounded overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-foreground"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
