import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-primary text-white py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <a href="tel:+918819017542" className="flex items-center hover:text-accent transition-colors">
            <Phone size={14} className="mr-2" />
            <span>+91 88190 17542</span>
          </a>
          <a href="mailto:shivanipackersandmovers03@gmail.com" className="flex items-center hover:text-accent transition-colors">
            <Mail size={14} className="mr-2" />
            <span>shivanipackersandmovers03@gmail.com</span>
          </a>
          <div className="flex items-center">
            <MapPin size={14} className="mr-2" />
            <span>Bhopal, Madhya Pradesh</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 mr-4 border-r border-white/20 pr-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={16} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={16} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={16} /></a>
          </div>
          <span className="font-medium">ISO 9001:2015 Certified</span>
        </div>
      </div>
    </div>
  );
}
