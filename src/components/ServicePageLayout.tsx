import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

interface ServicePageLayoutProps {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  heroImage: string;
  beforeImage: string;
  afterImage: string;
}

const ServicePageLayout = ({
  title,
  tagline,
  description,
  features,
  heroImage,
  beforeImage,
  afterImage,
}: ServicePageLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    window.location.href = "/#booking";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-6 left-6 z-20 flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </Link>

        {/* Hero Content */}
        <div className="relative z-10 container-luxury text-center px-6 animate-fade-in">
          <div className="luxury-divider mb-6" />
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
            Premium Service
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="group"
              onClick={scrollToContact}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
            >
              <a href="tel:+96170848026">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="luxury-divider mb-6" />
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
                Excellence in Every Detail
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {description}
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Before/After Slider */}
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="mb-6">
                <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-2">
                  Real Results
                </p>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                  Before & After
                </h3>
              </div>
              <BeforeAfterSlider
                beforeImage={beforeImage}
                afterImage={afterImage}
              />
              <p className="text-muted-foreground text-sm mt-4 text-center">
                Drag the slider to see the transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-luxury text-center">
          <div className="luxury-divider mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Schedule a consultation with Dr. Ali Merhi and discover how we can help you achieve the smile of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
              className="hover-lift"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Consultation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="hover-lift"
            >
              <a
                href="https://wa.me/96170848026?text=Hello%20Dr.%20Ali%20Merhi,%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Link */}
      <div className="py-8 text-center border-t border-border">
        <Link
          to="/"
          className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ServicePageLayout;
