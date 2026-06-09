import { motion } from 'motion/react';
import { Truck, Home, Building2, Package, Warehouse, Bike, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import localShiftingImg from '../images/Local Shifting.png';
import officeMovingImg from '../images/office moving.png';
import intercityImg from '../images/International Moving.png';
import carTransportImg from '../images/Car Transportation.png';
import packingImg from '../images/Packing Services.png';
import storageImg from '../images/Storage & Warehousing.png';

const allServices = [
  {
    id: "home-shifting",
    title: "Local Home Shifting",
    desc: "Complete household shifting services within Bhopal. We handle everything from packing to unpacking.",
    icon: <Home size={40} />,
    image: localShiftingImg,
    features: ["Expert Packing", "Safe Loading", "Timely Delivery", "Furniture Assembly"]
  },
  {
    id: "office-relocation",
    title: "Office Relocation",
    desc: "Professional office shifting with minimal business disruption. We move IT equipment, furniture, and files securely.",
    icon: <Building2 size={40} />,
    image: officeMovingImg,
    features: ["IT Infrastructure Moving", "Document Archiving", "Weekend Shifting", "Minimal Downtime"]
  },
  {
    id: "intercity-moving",
    title: "Intercity Shifting",
    desc: "Moving to another city? We provide reliable long-distance shifting from Bhopal to any part of India.",
    icon: <Truck size={40} />,
    image: intercityImg,
    features: ["Specialized Carriers", "Real-time Tracking", "Insurance Coverage", "Direct Delivery"]
  },
  {
    id: "car-bike-transport",
    title: "Car & Bike Transport",
    desc: "Safe transportation of your vehicles in specialized closed containers to prevent any damage.",
    icon: <Bike size={40} />,
    image: carTransportImg,
    features: ["Door-to-door Pickup", "Closed Carriers", "Vehicle Inspection", "Safe Transit"]
  },
  {
    id: "packing-unpacking",
    title: "Packing & Unpacking",
    desc: "High-quality packing materials and expert techniques to ensure maximum safety of your goods.",
    icon: <Package size={40} />,
    image: packingImg,
    features: ["Bubble Wrap", "Corrugated Sheets", "Sturdy Boxes", "Labeling System"]
  },
  {
    id: "warehouse-storage",
    title: "Warehouse & Storage",
    desc: "Secure and clean storage facilities for your household or commercial goods for short or long term.",
    icon: <Warehouse size={40} />,
    image: storageImg,
    features: ["24/7 Security", "Pest Controlled", "Climate Controlled", "Easy Access"]
  }
];

export default function Services() {
  return (
    <>
      <SEO 
        title="Our Services | Home Shifting & Office Relocation Bhopal"
        description="Explore our wide range of shifting services including local home shifting, office relocation, intercity moving, and car transport in Bhopal."
      />

      {/* Header */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive logistics solutions designed for your peace of mind.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col"
              >
                <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
                <div className="p-10 flex-grow">
                  <div className="bg-slate-50 w-20 h-20 rounded-2xl flex items-center justify-center text-primary mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.desc}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-sm font-semibold text-slate-700">
                          <CheckCircle2 size={16} className="text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-8 bg-slate-50 border-t border-slate-100">
                  <Link to={`/services/${service.id}`} className="bg-primary text-white w-full py-4 rounded-xl font-bold flex items-center justify-center hover:bg-slate-800 transition-colors">
                    Learn More <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Why Choose Our Shifting Services?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Safety Guaranteed", desc: "We use multi-layer packing for maximum safety.", icon: <ShieldCheck className="text-primary" /> },
                  { title: "Timely Delivery", desc: "Punctuality is our core strength.", icon: <Clock className="text-primary" /> },
                  { title: "Expert Team", desc: "Trained professionals for every task.", icon: <CheckCircle2 className="text-primary" /> },
                  { title: "Full Insurance", desc: "Comprehensive transit insurance coverage.", icon: <ShieldCheck className="text-primary" /> }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
                alt="Logistics Service" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Need a Custom Shifting Plan?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Our experts can design a personalized moving strategy that fits your budget and timeline perfectly.
            </p>
            <Link to="/contact" className="bg-white text-secondary px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-slate-100 transition-all transform hover:scale-105 inline-block">
              Contact Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
