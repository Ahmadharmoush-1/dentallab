const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-card">
              <img
                src="/photos/drlogo.jpg"
                alt="Dr. Ali Merhi - Luxury AI Smile Architect"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="luxury-divider !mx-0 mb-6" />
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Meet Dr. Ali Merhi
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over 15 years of experience in aesthetic dentistry and maxillofacial surgery, 
              Dr. Ali Merhi has established himself as a leading figure in luxury dental care in Lebanon.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Combining cutting-edge AI technology with artistic precision, Dr. Merhi crafts 
              bespoke smiles that enhance natural beauty while ensuring optimal oral health. 
              His approach integrates Digital Smile Design technology with traditional surgical 
              expertise, delivering results that exceed expectations.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-background rounded-lg shadow-elegant">
                <p className="text-gold font-heading text-2xl mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-elegant">
                <p className="text-gold font-heading text-2xl mb-1">AI-Powered</p>
                <p className="text-sm text-muted-foreground">Smile Design</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-elegant">
                <p className="text-gold font-heading text-2xl mb-1">Certified</p>
                <p className="text-sm text-muted-foreground">Maxillofacial Surgeon</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-elegant">
                <p className="text-gold font-heading text-2xl mb-1">Premium</p>
                <p className="text-sm text-muted-foreground">Patient Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
