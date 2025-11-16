import { Cpu, Scan, Printer, Zap, Monitor, Target } from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "CAD/CAM Fabrication",
    description: "Computer-aided design and manufacturing for same-day restorations.",
  },
  {
    icon: Scan,
    title: "Digital Impressions",
    description: "No messy molds—accurate 3D scans in seconds for perfect fit.",
  },
  {
    icon: Monitor,
    title: "Intraoral Scanning",
    description: "Real-time visualization of your teeth for enhanced diagnostics.",
  },
  {
    icon: Printer,
    title: "3D Printing",
    description: "Rapid prototyping of surgical guides, models, and aligners.",
  },
  {
    icon: Target,
    title: "Smile Simulation",
    description: "Preview your new smile before treatment begins with digital mockups.",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    description: "Minimally invasive laser treatments for precise, comfortable procedures.",
  },
];

export default function DigitalDentistry() {
  return (
    <section id="digital" className="section-container bg-primary text-white">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">
          Innovation
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          Digital Dentistry
        </h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
          We harness the power of advanced digital technology to deliver faster, 
          more accurate, and more comfortable dental treatments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-fade-in group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <tech.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
            <p className="text-white/70 leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
