import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import DigitalDentistry from "@/components/DigitalDentistry";
import DentalLab from "@/components/DentalLab";
import Team from "@/components/Team";
import PatientCases from "@/components/PatientCases";
import Media from "@/components/Media";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      {/* <DigitalDentistry /> */}
      <DentalLab />
      <Team />
      <PatientCases />
      <Media />
      <Testimonials />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
