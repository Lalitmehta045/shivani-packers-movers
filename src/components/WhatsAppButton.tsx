import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "918819017542";
  const message = "Hi Shivani Packers & Movers, I'm interested in your shifting services. Can I get a quote?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* Call Button */}
      <a
        href="tel:+918819017542"
        className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-blue-900 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Call Now"
      >
        <Phone size={26} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
