
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const targetElem = document.getElementById(targetId.toLowerCase());
    if (targetElem) {
      e.preventDefault();
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = targetElem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Why Choose Us', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 relative overflow-hidden">
      {/* Brand accent gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="inline-block min-w-[160px]">
              <img
                src="assets/logo_shivani.png"
                alt="Shivani Packers Logo"
                className="h-24 w-auto object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.src = 'https://shivanipackers.com/wp-content/uploads/2023/10/shivani-logo.png';
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Setting the gold standard in Indian relocation for over 15 years. Professional, punctual, and reliable "Door to Door" delivery nationwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xl mb-8">Navigation</h4>
            <ul className="space-y-5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:text-brand-orange transition-colors flex items-center gap-2 group font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xl mb-8">Services</h4>
            <ul className="space-y-5">
              {['Home Shifting', 'Office Relocation', 'Car Transport', 'Bike Transport', 'Storage & Warehouse', 'International Moving'].map((service) => (
                <li key={service}>
                  <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-brand-orange transition-colors flex items-center gap-2 group font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-all"></div>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold text-xl mb-8">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-6 font-medium">Subscribe for moving checklists and seasonal discounts.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex-grow focus:ring-2 focus:ring-brand-orange transition-all outline-none font-medium text-white"
              />
              <button className="bg-brand-blue hover:bg-brand-orange text-white py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group">
                Subscribe Now
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-slate-500">
          <p>© 2026 Shivani Packers and Movers. All Rights Reserved. ISO 9001:2015 Certified Company.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-brand-orange transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Refunds</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
