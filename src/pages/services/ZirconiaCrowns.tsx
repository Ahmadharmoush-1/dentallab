import ServicePageLayout from "@/components/ServicePageLayout";

const ZirconiaCrowns = () => {
  return (
    <ServicePageLayout
      title="Zirconia Crowns"
      tagline="Premium full-ceramic restorations combining exceptional strength with natural beauty."
      description="Our zirconia crowns represent the perfect fusion of strength and aesthetics. Crafted from the finest dental-grade zirconia, these crowns offer unparalleled durability while providing the natural translucency of real teeth. Each crown is custom-designed using digital precision to ensure a perfect fit and seamless integration with your smile."
      features={[
        "Superior strength compared to traditional ceramics",
        "Natural light transmission for lifelike appearance",
        "Metal-free biocompatible material",
        "CAD/CAM precision manufacturing",
        "Stain and chip resistant",
        "Perfect color matching to existing teeth",
      ]}
      heroImage="/photos/service-crowns.jpg"
      beforeImage="/photos/before-after-crowns.jpg"
      afterImage="/photos/before-after-2.jpg"
    />
  );
};

export default ZirconiaCrowns;