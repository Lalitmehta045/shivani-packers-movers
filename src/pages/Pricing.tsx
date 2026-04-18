import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Truck, Home, Building2, Package, CheckCircle2, PhoneCall } from 'lucide-react';
import SEO from '../components/SEO';


export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromCity: 'Bhopal',
    toCity: '',
    moveType: 'Home Shifting',
    moveSize: '1 BHK',
    date: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <SEO 
        title="Pricing & Free Quote | Shivani Packers and Movers Bhopal"
        description="Get a free, no-obligation quote for your shifting needs in Bhopal. Transparent pricing for home, office, and vehicle relocation."
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Get a <span className="text-secondary">Free Quote</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent pricing with no hidden charges. Fill the form below for an instant estimate.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 lg:p-12">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h3>
                    <p className="text-slate-600 text-lg">
                      Thank you for choosing Shivani Packers & Movers. Our expert will call you within 15 minutes with a detailed quote.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-primary font-bold hover:underline"
                    >
                      Need another quote?
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Enter your name"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="Your 10-digit mobile number"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Moving From</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Pickup City/Area"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          value={formData.fromCity}
                          onChange={(e) => setFormData({...formData, fromCity: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Moving To</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Destination City/Area"
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          value={formData.toCity}
                          onChange={(e) => setFormData({...formData, toCity: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Type of Move</label>
                        <select 
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                          value={formData.moveType}
                          onChange={(e) => setFormData({...formData, moveType: e.target.value})}
                        >
                          <option>Home Shifting</option>
                          <option>Office Relocation</option>
                          <option>Vehicle Transport</option>
                          <option>Storage Service</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Move Size</label>
                        <select 
                          className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none"
                          value={formData.moveSize}
                          onChange={(e) => setFormData({...formData, moveSize: e.target.value})}
                        >
                          <option>1 BHK</option>
                          <option>2 BHK</option>
                          <option>3 BHK</option>
                          <option>4+ BHK / Villa</option>
                          <option>Few Items Only</option>
                          <option>Full Office</option>
                        </select>
                      </div>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-secondary hover:bg-orange-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl transition-all transform hover:-translate-y-1"
                    >
                      Calculate My Shifting Cost
                    </button>
                    <p className="text-center text-xs text-slate-400">
                      By submitting, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-primary text-white p-10 rounded-[2rem] shadow-xl">
                <Calculator className="mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4">Why Get a Quote?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-3 mt-1 shrink-0 text-accent" />
                    <span className="text-sm">Accurate cost estimation based on items.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-3 mt-1 shrink-0 text-accent" />
                    <span className="text-sm">No hidden charges or surprise costs.</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={18} className="mr-3 mt-1 shrink-0 text-accent" />
                    <span className="text-sm">Free pre-move survey at your location.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Estimated Starting Prices</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-sm font-medium text-slate-600">Local 1 BHK</span>
                    <span className="font-bold text-primary">₹3,500+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-sm font-medium text-slate-600">Local 2 BHK</span>
                    <span className="font-bold text-primary">₹6,500+</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-200">
                    <span className="text-sm font-medium text-slate-600">Local 3 BHK</span>
                    <span className="font-bold text-primary">₹9,500+</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm font-medium text-slate-600">Car Transport</span>
                    <span className="font-bold text-primary">₹5,000+</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 mt-4 italic">
                  *Prices are indicative and depend on distance, volume, and packing quality.
                </p>
              </div>

              <div className="bg-secondary/10 p-8 rounded-[2rem] border border-secondary/20 text-center">
                <PhoneCall className="mx-auto mb-4 text-secondary" size={32} />
                <h4 className="font-bold text-slate-900 mb-2">Prefer to Call?</h4>
                <p className="text-sm text-slate-600 mb-4">Get an instant quote over the phone.</p>
                <a href="tel:+918819017542" className="text-xl font-bold text-secondary hover:underline">+91 88190 17542</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
