import { Link } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import logo from '../../images/logo_shivani.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Shivani Packers & Movers" className="h-[60px] w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed">
              Shivani Packers & Movers is Bhopal's most trusted logistics partner. We provide safe, reliable, and affordable shifting solutions for homes and offices across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Pricing', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center hover:text-secondary transition-colors group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Local Home Shifting',
                'Office Relocation',
                'Intercity Shifting',
                'Car & Bike Transport',
                'Warehouse Storage',
                'Packing & Unpacking'
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="flex items-center hover:text-secondary transition-colors group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-secondary mr-3 mt-1 shrink-0" size={18} />
                <span className="text-sm">123, MP Nagar Zone 2, Near Board Office, Bhopal, MP - 462011</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-secondary mr-3 shrink-0" size={18} />
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail className="text-secondary mr-3 shrink-0" size={18} />
                <a href="mailto:info@shivanipackers.com" className="text-sm hover:text-white transition-colors">info@shivanipackers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {currentYear} Shivani Packers & Movers. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
