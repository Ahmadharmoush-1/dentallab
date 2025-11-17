import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Asmar<span className="text-accent">Dental</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Premium dental care with luxury service, advanced technology, and expert specialists.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#clinic" className="text-white/70 hover:text-accent transition-colors">
                  About the Clinic
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="text-white/70 hover:text-accent transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#digital" className="text-white/70 hover:text-accent transition-colors">
                  Digital Dentistry
                </a>
              </li>
              <li>
                <a href="#lab" className="text-white/70 hover:text-accent transition-colors">
                  Dental Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Beirut */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Beirut Office</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Adlieh – Beirut | Kfarhbab – Ghazir</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+96111234567" className="hover:text-accent">
                  +961 1 123 456
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:beirut@Asmardental.lb" className="hover:text-accent">
                  beirut@Asmardental.lb
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Dubai */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Dubai Office</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>Dubai Healthcare City, Building 64, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+97141234567" className="hover:text-accent">
                  +971 4 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:dubai@bloomdental.ae" className="hover:text-accent">
                  dubai@bloomdental.ae
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/60 text-sm">
            © 2025 Asmar Dental Clinic. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
          <p className="text-white/60 text-sm">
            Made with ❤️ by <span className="text-accent font-semibold">Beirut Web</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
