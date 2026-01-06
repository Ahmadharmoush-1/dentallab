import ServicePageLayout from "@/components/ServicePageLayout";

const TeethWhitening = () => {
  return (
    <ServicePageLayout
      title="Teeth Whitening"
      tagline="Professional-grade whitening treatments for a brilliantly radiant smile."
      description="Achieve a dazzling, celebrity-worthy smile with our advanced professional whitening treatments. Using the latest light-activated technology and premium whitening agents, we safely brighten your teeth multiple shades in a single session. Our customized approach ensures optimal results while protecting your enamel sensitivity."
      features={[
        "Advanced light-activated whitening technology",
        "Multiple shades brighter in one session",
        "Enamel-safe professional-grade formulas",
        "Customized treatment intensity levels",
        "Long-lasting brilliant results",
        "Take-home maintenance kits included",
      ]}
      heroImage="/photos/service-whitening.jpg"
      beforeImage="/photos/before-whitening.png"
      afterImage="/photos/after-whitening.png"
    />
  );
};

export default TeethWhitening;