import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "The Clinic", href: "#clinic" },
  { name: "Digital Dentistry", href: "#digital" },
  { name: "Dental Lab", href: "#lab" },
  { name: "The Team", href: "#team" },
  { name: "Services", href: "#services" },
  { name: "Media", href: "#media" },
  { name: "Contact", href: "#contact" },
  { name: "Locations", href: "#locations" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-[var(--shadow-soft)] py-2"
          : "bg-transparent py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled ? "h-16" : "h-20"
        }`}>
          {/* Logo */}
          <a
  href="#home"
  className="flex items-center hover:scale-105 transition-transform duration-300"
>
  <img
    src="/photos/logo.jpg"   // <-- your logo path
    alt="Bloom Dental Logo"
    className="w-20 h-20 object-contain rounded-full"
  />
</a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button
              variant="default"
              className="ml-4 luxury-button button-glow"
              onClick={() => (window.location.href = "#contact")}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="default"
              className="w-full luxury-button mt-4"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = "#contact";
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
