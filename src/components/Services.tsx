import { useState } from "react";
import { Sparkles, Heart, Smile, Baby, FileText, Layers, AlignHorizontalJustifyCenter, Activity } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Cleaning Teeth",
    shortDesc: "Professional cleaning and preventive care",
    fullDesc: "Comprehensive dental cleaning removes plaque, tartar, and stains. Our gentle hygienists use advanced scaling techniques and polishing to keep your teeth healthy and bright.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Layers,
    title: "Veneers",
    shortDesc: "Transform your smile with custom veneers",
    fullDesc: "Ultra-thin porcelain veneers crafted to perfection. We design natural-looking, durable veneers that enhance your smile's appearance, correcting chips, gaps, and discoloration.",
    color: "from-purple-500 to-pink-400",
  },
  {
    icon: Smile,
    title: "Whitening / Bleaching",
    shortDesc: "Achieve a brighter, whiter smile",
    fullDesc: "Professional teeth whitening treatments using safe, effective methods. Choose from in-office power bleaching or take-home kits for a radiant smile up to 8 shades lighter.",
    color: "from-yellow-500 to-orange-400",
  },
  {
    icon: Baby,
    title: "Pedodontics",
    shortDesc: "Specialized care for children's dental health",
    fullDesc: "Child-friendly dental care in a comfortable environment. Our pediatric specialists provide preventive treatments, education, and gentle procedures tailored for young patients.",
    color: "from-green-500 to-teal-400",
  },
  {
    icon: FileText,
    title: "Endodontics / Restorative",
    shortDesc: "Root canal and tooth restoration",
    fullDesc: "Advanced endodontic treatments including root canal therapy, pulp treatments, and restorative procedures. We save natural teeth using modern techniques and materials.",
    color: "from-red-500 to-pink-400",
  },
  {
    icon: Heart,
    title: "Occlusion & Prosthodontics",
    shortDesc: "Full mouth reconstruction and prosthetics",
    fullDesc: "Comprehensive prosthodontic solutions including crowns, bridges, and dentures. We restore function and aesthetics with precision-crafted prosthetics and bite correction.",
    color: "from-indigo-500 to-blue-400",
  },
  {
    icon: AlignHorizontalJustifyCenter,
    title: "Aligners",
    shortDesc: "Invisible orthodontic treatment",
    fullDesc: "Clear aligner therapy for discreet teeth straightening. Custom-made invisible aligners gradually move your teeth into perfect alignment without traditional braces.",
    color: "from-teal-500 to-green-400",
  },
  {
    icon: Activity,
    title: "Periodontics & Dental Implants",
    shortDesc: "Gum health and permanent tooth replacement",
    fullDesc: "Expert periodontal care and implant dentistry. We treat gum disease, perform bone grafting, and place premium dental implants for lasting tooth replacement solutions.",
    color: "from-orange-500 to-red-400",
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Our Services
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          What We Do
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive dental services combining artistry, science, and technology
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="luxury-card p-6 cursor-pointer group animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
            onClick={() => setSelectedService(service)}
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <service.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {service.shortDesc}
            </p>
          </div>
        ))}
      </div>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedService?.color} flex items-center justify-center mb-4`}>
              {selectedService && <selectedService.icon className="w-8 h-8 text-white" />}
            </div>
            <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
            <DialogDescription className="text-base mt-4 leading-relaxed">
              {selectedService?.fullDesc}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              className="w-full luxury-button"
              onClick={() => {
                setSelectedService(null);
                window.location.href = "#contact";
              }}
            >
              Book This Service
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}