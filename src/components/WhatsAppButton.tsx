import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "96170848026";
  const message = encodeURIComponent(
    "Hello Dr. Ali Merhi, I would like to inquire about your dental services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
      
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
