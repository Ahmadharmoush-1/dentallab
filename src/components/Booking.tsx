import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, MapPin, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Digital Smile Design",
  "Veneers",
  "Elite Smile Makeover",
  "Maxillofacial Surgery",
  "Periodontal Surgery",
  "Consultation",
];

const locations = [
  { name: "Beirut - Hamra", phone: "70 848 026" },
  { name: "Nabatieh", phone: "03 705 359" },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Create WhatsApp message
      const message = encodeURIComponent(
        `Hello Dr. Ali Merhi,\n\nI would like to book an appointment:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nLocation: ${formData.location}\nDate: ${formData.date}\nTime: ${formData.time}\n\nThank you!`
      );
      
      // Get the phone number based on location
      const locationPhone = formData.location === "Beirut - Hamra" ? "96170848026" : "9613705359";
      
      // Open WhatsApp
      window.open(`https://wa.me/${locationPhone}?text=${message}`, "_blank");
      
      toast.success("Redirecting to WhatsApp to confirm your booking!");
      setIsSubmitting(false);
      setFormData({
        name: "",
        phone: "",
        service: "",
        location: "",
        date: "",
        time: "",
      });
    }, 1000);
  };

  return (
    <section id="booking" className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <div className="luxury-divider !mx-0 mb-6" />
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              Book Your Visit
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Schedule Your Appointment
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Take the first step towards your perfect smile. Book a consultation 
              with Dr. Ali Merhi and discover how we can transform your smile.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                "Personalized consultation",
                "AI-powered smile preview",
                "Flexible scheduling",
                "Premium patient care",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="p-4 bg-background rounded-lg shadow-elegant flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{loc.name}</p>
                    <a
                      href={`tel:+961${loc.phone.replace(/\s/g, "")}`}
                      className="text-gold hover:underline"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background rounded-xl shadow-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4 inline mr-2 text-gold" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4 inline mr-2 text-gold" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  placeholder="+961 XX XXX XXX"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Required
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  <MapPin className="w-4 h-4 inline mr-2 text-gold" />
                  Preferred Location
                </label>
                <select
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                >
                  <option value="">Select location</option>
                  {locations.map((loc) => (
                    <option key={loc.name} value={loc.name}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Calendar className="w-4 h-4 inline mr-2 text-gold" />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    <Clock className="w-4 h-4 inline mr-2 text-gold" />
                    Time
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Book Appointment"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
