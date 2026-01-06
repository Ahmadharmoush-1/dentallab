import ServicePageLayout from "@/components/ServicePageLayout";

const DentalImplants = () => {
  return (
    <ServicePageLayout
      title="Dental Implants"
      tagline="Permanent tooth replacement solutions that look, feel, and function like natural teeth."
      description="Our dental implants represent the gold standard in tooth replacement. Using state-of-the-art titanium implants and precision surgical techniques, we restore your smile with permanent solutions that integrate seamlessly with your natural bone structure. Each implant is carefully planned and placed to ensure optimal function and aesthetics."
      features={[
        "Premium titanium implants for superior biocompatibility",
        "3D-guided surgical placement for precision",
        "Natural-looking ceramic crowns",
        "Long-lasting permanent solution",
        "Bone preservation and stimulation",
        "Restored chewing function and confidence",
      ]}
      heroImage="/photos/service-implants.jpg"
      beforeImage="/photos/before-after-implants.jpg"
      afterImage="/photos/before-after-3.jpg"
    />
  );
};

export default DentalImplants