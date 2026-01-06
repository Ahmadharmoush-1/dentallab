import ServicePageLayout from "@/components/ServicePageLayout";

const Veneers = () => {
  return (
    <ServicePageLayout
      title="Luxury Veneers"
      tagline="Ultra-thin porcelain shells crafted to perfection for a flawless, natural appearance."
      description="Experience the ultimate in smile enhancement with our premium porcelain veneers. Each veneer is meticulously handcrafted by master ceramists to achieve a natural, luminous appearance that complements your unique features. Our veneers are designed to last, providing you with a stunning smile for years to come."
      features={[
        "Premium-grade porcelain for natural translucency",
        "Custom shade matching to complement your skin tone",
        "Minimal tooth preparation for maximum preservation",
        "Stain-resistant and durable construction",
        "Natural light reflection mimicking real enamel",
        "Personalized design for facial harmony",
      ]}
      heroImage="/photos/e-maxveneers.png"
      beforeImage="/photos/before-emaxveneers.png"
      afterImage="/photos/after-emaxveneers.png"
    />
  );
};

export default Veneers;