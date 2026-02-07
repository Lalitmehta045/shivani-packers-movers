
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[40px] shadow-2xl shadow-blue-900/10 overflow-hidden">
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-2 bg-blue-600 p-8 lg:p-16 text-white relative overflow-hidden">
            {/* Design patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>

            <h2 className="text-4xl font-bold mb-8 relative z-10">Let's Talk About Your Move</h2>
            <p className="text-blue-100 mb-12 relative z-10 leading-relaxed text-lg">
              Have questions? Our relocation experts are ready to help you plan your journey. Reach out to us today!
            </p>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">Call Us Anytime</div>
                  <div className="text-xl font-bold">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">Email Support</div>
                  <div className="text-lg lg:text-xl font-bold break-all">info@shivanipackers.com</div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold text-blue-200 uppercase tracking-widest mb-1">Head Office</div>
                  <div className="text-xl font-bold">Grd Floor, Plot No 45, Sector 18, Gurugram, HR - 122015</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                  <option>Relocation Inquiry</option>
                  <option>Corporate Tie-up</option>
                  <option>Vehicle Transport</option>
                  <option>Warehouse Storage</option>
                  <option>Feedback/Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-slate-900/10">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
