import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Shivani Packers and Movers Bhopal"
        description="Contact Shivani Packers and Movers in Bhopal for reliable shifting services. Call us, email us, or visit our office in Ashoka Garden."
      />

      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Contact <span className="text-accent">Us</span>
          </motion.h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We are here to help you with your move. Reach out to us anytime.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Get in Touch</h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                Have questions about our services or need a custom quote? Our friendly team is ready to assist you. We operate 24/7 to ensure your move is handled perfectly.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-slate-50 p-4 rounded-2xl text-primary mr-6">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Call Us</h4>
                    <p className="text-slate-600 mb-1">+91 88190 17542</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-50 p-4 rounded-2xl text-primary mr-6">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-600 mb-1">shivanipackersandmovers03@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-slate-50 p-4 rounded-2xl text-primary mr-6">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Visit Office</h4>
                    <p className="text-slate-600 leading-relaxed">
                      SHOP NO.-02, H.NO.04, Nawab Colony,<br />
                      Ashoka Garden, Bhopal, Madhya Pradesh - 462023
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Call Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="tel:+918819017542"
                  className="flex-1 bg-primary hover:bg-blue-900 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center space-x-3 shadow-lg"
                >
                  <Phone size={22} />
                  <span>Call Now</span>
                </a>
                <a 
                  href={`https://wa.me/918819017542?text=${encodeURIComponent("Hi Shivani Packers & Movers, I'm interested in your shifting services. Can I get a quote?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center space-x-3 shadow-lg"
                >
                  <MessageCircle size={22} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-lg font-bold text-slate-900 mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-slate-100 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Facebook size={20} /></a>
                  <a href="#" className="bg-slate-100 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></a>
                  <a href="#" className="bg-slate-100 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Instagram size={20} /></a>
                  <a href="#" className="bg-slate-100 p-3 rounded-xl hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl"
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 text-lg">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Your message here..."
                      className="w-full px-6 py-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-slate-800 text-white py-5 rounded-2xl font-bold text-xl shadow-xl transition-all flex items-center justify-center"
                  >
                    Send Message <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d77.435!3d23.239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE0JzIwLjQiTiA3N8KwMjYnMDYuMCJF!5e0!3m2!1sen!2sin!4v1711111111111!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Shivani Packers & Movers - Ashoka Garden, Bhopal"
        ></iframe>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-8">
          <a 
            href="https://maps.app.goo.gl/5AZP5E9h4PEV9kMm8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            <MapPin size={20} className="mr-2" />
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
