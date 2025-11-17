import { FileText, Video, Instagram, Newspaper } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mediaItems = [
  {
    type: "video",
    icon: Video,
    title: "Dr.  on Modern Implantology",
    source: "YouTube Interview",
    thumbnail: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop",
  },
  // {
  //   type: "article",
  //   icon: Newspaper,
  //   title: "The Future of Digital Dentistry",
  //   source: "Dental Tribune",
  //   thumbnail: "https://images.unsplash.com/photo-1609619385002-f40f670ecda5?w=400&h=300&fit=crop",
  // },
  {
    type: "social",
    icon: Instagram,
    title: "Patient Smile Stories",
    source: "Instagram @bloomdental",
    thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop",
  },
  {
    type: "article",
    icon: FileText,
    title: "Advanced Ceramic Materials in Prosthodontics",
    source: "Journal of Prosthetic Dentistry",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  },
  {
    type: "video",
    icon: Video,
    title: "Clinic Tour: Behind the Scenes",
    source: "YouTube",
    thumbnail: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=300&fit=crop",
  },
  // {
  //   type: "social",
  //   icon: Instagram,
  //   title: "Testimonial: Complete Smile Makeover",
  //   source: "Instagram",
  //   thumbnail: "https://images.unsplash.com/photo-1609619385002-f40f670ecda5?w=400&h=300&fit=crop",
  // },
];

export default function Media() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="media" className="section-container bg-secondary/20">
      <div className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Media
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
          In the News
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Featured articles, interviews, and social media highlights from Bloom Dental
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`luxury-card overflow-hidden group cursor-pointer hover:scale-105 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
            }}
          >
            <div className="relative overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-accent font-semibold mb-2">{item.source}</p>
              <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
