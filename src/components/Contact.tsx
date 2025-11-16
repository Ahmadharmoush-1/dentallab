import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll contact you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          Contact Us
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Ready to transform your smile? Reach out to us today.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="luxury-card p-8 animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Full Name *
              </label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Phone *
                </label>
                <Input
                  type="tel"
                  placeholder="+961 1 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Service Needed
              </label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                  <SelectItem value="veneers">Veneers</SelectItem>
                  <SelectItem value="whitening">Whitening</SelectItem>
                  <SelectItem value="implants">Dental Implants</SelectItem>
                  <SelectItem value="orthodontics">Aligners</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Message
              </label>
              <Textarea
                placeholder="Tell us about your needs..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full luxury-button" size="lg">
              Send Message
            </Button>
          </form>
        </div>

        {/* Quick Contact Options */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="luxury-card p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Call Us Now
                </h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our team
                </p>
                <a
                  href="tel:+96111234567"
                  className="text-accent hover:text-accent/80 font-semibold"
                >
                  Beirut: +961 1 123 456
                </a>
                <br />
                {/* <a
                  href="tel:+97141234567"
                  className="text-accent hover:text-accent/80 font-semibold"
                >
                  Dubai: +971 4 123 4567
                </a> */}
              </div>
            </div>
          </div>

          <div className="luxury-card p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  WhatsApp Chat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Quick responses via WhatsApp
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() =>
                    window.open("https://wa.me/96111234567", "_blank")
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>

          <div className="luxury-card p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Email Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Send us your questions anytime
                </p>
                <a
                  href="mailto:info@bloomdental.lb"
                  className="text-accent hover:text-accent/80 font-semibold"
                >
                  info@bloomdental.lb
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}