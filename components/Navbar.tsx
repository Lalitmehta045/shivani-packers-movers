
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="flex items-center gap-3">
              <div className="h-16 md:h-24 w-auto min-w-[140px] flex items-center justify-start">
                <img
                  src="/assets/logo_shivani.png"
                  alt="Shivani Packers Logo"
                  className="h-full w-auto object-contain drop-shadow-md"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.src = 'https://shivanipackers.com/wp-content/uploads/2023/10/shivani-logo.png';
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`text-sm font-bold tracking-wide transition-colors hover:text-brand-orange ${isScrolled ? 'text-slate-700' : 'text-slate-900'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-blue text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-brand-orange/20 active:scale-95"
            >
              <Phone size={16} />
              +91 98765 43210
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl border ${isScrolled ? 'text-slate-900 border-slate-200' : 'text-slate-900 border-white/20'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-4 py-4 text-lg font-bold text-slate-700 hover:text-brand-orange hover:bg-slate-50 rounded-2xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-3 w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl"
                >
                  <Phone size={22} />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
