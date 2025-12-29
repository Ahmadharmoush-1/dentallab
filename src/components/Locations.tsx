import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Beirut - Hamra",
    phone: "70 848 026",
    address: "Hamra Street, Beirut, Lebanon",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com/?q=Hamra+Beirut+Lebanon",
  },
  {
    name: "Nabatieh",
    phone: "03 705 359",
    address: "Nabatieh, South Lebanon",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
    mapUrl: "https://maps.google.com/?q=Nabatieh+Lebanon",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="luxury-divider mb-6" />
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Visit Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Our Clinic Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience luxury dental care at our state-of-the-art facilities 
            in Beirut and Nabatieh.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-card rounded-xl shadow-card overflow-hidden hover-lift"
            >
              {/* Map Placeholder */}
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video bg-muted relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-foreground/5 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground group-hover:text-gold transition-colors">
                      View on Google Maps
                    </p>
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                  {location.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground text-sm">{location.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <a
                      href={`tel:+961${location.phone.replace(/\s/g, "")}`}
                      className="text-foreground hover:text-gold transition-colors font-medium"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{location.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
