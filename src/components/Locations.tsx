import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "./ui/button";

const locations = [
  {
    city: "Beirut",
    country: "Lebanon",
    address: "Sin el Fil",
    phone: "+961 1 123 456",
    email: "beirut@saadedental.lb",
    hours: "Mon-Fri: 9:00 AM - 7:00 PM\nSat: 10:00 AM - 4:00 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.2299804808914!2d35.50953731521013!3d33.88863338065076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2s!4v1234567890",
  },
  // {
  //   city: "Dubai",
  //   country: "UAE",
  //   address: "Dubai Healthcare City, Building 64",
  //   phone: "+971 4 123 4567",
  //   email: "dubai@bloomdental.ae",
  //   hours: "Sun-Thu: 9:00 AM - 8:00 PM\nFri: 10:00 AM - 5:00 PM",
  //   mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.7326885961564!2d55.33151931499934!3d25.23448758388865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cb2f3f3f3f3%3A0x3f3f3f3f3f3f3f3f!2sDubai%20Healthcare%20City!5e0!3m2!1sen!2s!4v1234567890",
  // },
];

export default function Locations() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="locations" className="section-container bg-secondary/30">
      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Visit Us
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          Our Locations
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Two world-class clinics serving patients across the Middle East
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`luxury-card overflow-hidden hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 200}ms` : "0ms"
            }}
          >
            {/* Map */}
            <div className="w-full h-64 bg-muted">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city} location map`}
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                {location.city}
              </h3>
              <p className="text-accent font-semibold mb-6">{location.country}</p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.address}</p>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.phone}</p>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.email}</p>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground whitespace-pre-line">
                    {location.hours}
                  </p>
                </div>
              </div>

              <Button className="w-full luxury-button button-glow hover:scale-105 transition-transform duration-300" size="lg">
                Get Directions
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}