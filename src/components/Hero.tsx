import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#D9D9D9]"
    >
      {/* Background Image + calm minimal overlay */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <img
          src="/photos/dentalview.jpg"
          alt="Nahas Dental Clinic"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Soft black overlay instead of colored gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <div
            className="mb-6 inline-block animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="text-black font-semibold text-sm uppercase tracking-wider">
              Premium Dental Care
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            Nahas Dental Clinic
            <span className="text-[#2A2A2A]">.lb</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed max-w-2xl animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            Our team dedicates the time and technology needed to perfect your
            smile.
          </p>

          {/* Buttons — minimalist, luxury, matching logo */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            {/* Solid Button (minimal white) */}
            <Button
              size="lg"
              className="text-lg px-8 py-6 group hover:scale-110 transition-all duration-300 
                         bg-white text-black border border-black rounded-lg shadow-sm hover:bg-black hover:text-white"
              onClick={() => (window.location.href = "#clinic")}
            >
              Explore the Clinic
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>

            {/* Outline Button */}
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border border-black text-black 
                         hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 rounded-lg"
              onClick={() => (window.location.href = "#contact")}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-black/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-black/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
