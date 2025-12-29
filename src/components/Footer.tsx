import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-padding !pb-8">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="font-heading text-2xl mb-4">Dr. Ali Merhi</h3>
              <p className="text-gold text-sm tracking-wider mb-4">
                Luxury AI Smile Architect
              </p>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Crafting perfect smiles with precision, artistry, and advanced 
                technology for over 15 years.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", id: "about" },
                  { label: "Services", id: "services" },
                  { label: "Gallery", id: "gallery" },
                  { label: "Book Appointment", id: "booking" },
                  { label: "Locations", id: "locations" },
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                {[
                  "Digital Smile Design",
                  "Veneers",
                  "Elite Smile Makeovers",
                  "Maxillofacial Surgery",
                  "Periodontal Surgery",
                ].map((service) => (
                  <li key={service}>
                    <span className="text-primary-foreground/60 text-sm">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/60 text-sm">
                    Beirut - Hamra
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href="tel:+96170848026"
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    70 848 026
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-primary-foreground/60 text-sm">
                    Nabatieh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href="tel:+9613705359"
                    className="text-primary-foreground/60 hover:text-gold transition-colors text-sm"
                  >
                    03 705 359
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-primary-foreground/40 text-xs">
              © {currentYear} Dr. Ali Merhi. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs max-w-xl">
              Medical Disclaimer: The information provided on this website is for general 
              informational purposes only and does not constitute medical advice. Always 
              consult with a qualified healthcare provider for medical concerns.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
