import ServicePageLayout from "@/components/ServicePageLayout";

const SmileDesign = () => {
  return (
    <ServicePageLayout
      title="Luxury Smile Design"
      tagline="AI-powered precision planning for your perfect smile, visualized before treatment begins."
      description="Our Digital Smile Design technology represents the pinnacle of modern dentistry. Using advanced AI and 3D imaging, we create a complete visualization of your perfect smile before any treatment begins. This revolutionary approach ensures predictable, stunning results tailored to your unique facial features."
      features={[
        "Advanced AI-powered smile analysis and planning",
        "3D visualization of your future smile before treatment",
        "Personalized design based on facial proportions",
        "Virtual try-on to preview your transformation",
        "Precise treatment planning for optimal results",
        "Collaborative approach with patient input throughout",
      ]}
      heroImage="/photos/service-smile-design.jpg"
      beforeImage="/photos/before-after-1.jpg"
      afterImage="/photos/before-after-2.jpg"
    />
  );
};

export default SmileDesign;
