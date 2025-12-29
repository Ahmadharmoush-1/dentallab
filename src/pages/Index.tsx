import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dr. Ali Merhi | Luxury AI Smile Architect - Premium Dental Care in Lebanon</title>
        <meta 
          name="description" 
          content="Dr. Ali Merhi - Leading luxury dental specialist in Lebanon. Expert in Digital Smile Design, Veneers, Elite Smile Makeovers, and Maxillofacial Surgery. Book your appointment today." 
        />
        <meta name="keywords" content="dentist lebanon, veneers beirut, smile makeover, maxillofacial surgery, periodontal surgery, digital smile design, luxury dental care" />
        <link rel="canonical" href="https://dralimerhi.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Dr. Ali Merhi | Luxury AI Smile Architect" />
        <meta property="og:description" content="Transform your smile with Dr. Ali Merhi - Lebanon's premier luxury dental specialist." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dr. Ali Merhi",
            "description": "Luxury AI Smile Architect specializing in Digital Smile Design, Veneers, and Maxillofacial Surgery",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Beirut",
                "addressRegion": "Hamra",
                "addressCountry": "Lebanon"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Nabatieh",
                "addressCountry": "Lebanon"
              }
            ],
            "telephone": ["+961 70 848 026", "+961 3 705 359"],
            "medicalSpecialty": ["Cosmetic Dentistry", "Maxillofacial Surgery", "Periodontics"]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Booking />
          <Locations />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
