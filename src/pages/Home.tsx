import { motion } from 'motion/react';
import { Truck, ShieldCheck, Clock, Award, ArrowRight, Star, CheckCircle2, PhoneCall, Package, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PricingCalculator from '../components/PricingCalculator';
import { getLocalBusinessSchema } from '../utils/schema';

import homeRelocationImg from '../images/home relocation.png';
import officeMovingImg from '../images/office moving.png';
import intercityImg from '../images/International Moving.png';
import carTransportImg from '../images/Car Transportation.png';
import packingImg from '../images/Packing Services.png';
import storageImg from '../images/Storage & Warehousing.png';
import heroImg from '../images/hero.png';

const services = [
  {
    id: "home-shifting",
    title: "Local Home Shifting",
    desc: "Safe and hassle-free household shifting within Bhopal with professional packing.",
    icon: <Truck className="text-secondary" size={32} />,
    image: homeRelocationImg,
  },
  {
    id: "office-relocation",
    title: "Office Relocation",
    desc: "Efficient office shifting services with minimal downtime for your business.",
    icon: <Award className="text-secondary" size={32} />,
    image: officeMovingImg,
  },
  {
    id: "intercity-moving",
    title: "Intercity Shifting",
    desc: "Reliable long-distance moving services from Bhopal to any city in India.",
    icon: <Truck className="text-secondary" size={32} />,
    image: intercityImg,
  },
  {
    id: "car-bike-transport",
    title: "Car & Bike Transport",
    desc: "Secure vehicle transportation in specialized carriers with full insurance coverage.",
    icon: <Truck className="text-secondary" size={32} />,
    image: carTransportImg,
  },
  {
    id: "packing-unpacking",
    title: "Packing & Unpacking",
    desc: "High-quality packing materials and expert techniques to ensure maximum safety of your goods.",
    icon: <Package className="text-secondary" size={32} />,
    image: packingImg,
  },
  {
    id: "warehouse-storage",
    title: "Warehouse & Storage",
    desc: "Secure and clean storage facilities for your household or commercial goods for short or long term.",
    icon: <Warehouse className="text-secondary" size={32} />,
    image: storageImg,
  },
];

const stats = [
  { label: "Successful Moves", value: "15,000+" },
  { label: "Happy Clients", value: "12,000+" },
  { label: "Years Experience", value: "15+" },
  { label: "Cities Covered", value: "200+" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Home Owner",
    text: "I moved from Indrapuri to Arera Colony. The team was very professional and handled my delicate furniture with great care. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    text: "Best packers and movers in Bhopal. They moved my entire household to Bangalore without a single scratch. Very affordable too.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Business Owner",
    text: "Relocated my office last month. Minimal disruption to our work. They are truly experts in office shifting.",
    rating: 5,
  },
];

const processSteps = [
  { title: "Get a Quote", desc: "Fill our form or call us for a free estimate." },
  { title: "Packing", desc: "Our experts pack your belongings with high-quality materials." },
  { title: "Loading", desc: "Safe loading into our specialized transport vehicles." },
  { title: "Delivery", desc: "Timely delivery and careful unloading at your destination." },
];

export default function Home() {
  return (
    <>
      <SEO 
        title="Best Packers and Movers in Bhopal | Safe & Reliable Shifting"
        description="Shivani Packers and Movers Bhopal offers top-rated home shifting, office relocation, and intercity moving services. Get a free quote today for affordable and safe shifting in Bhopal."
      />
      <script type="application/ld+json">
        {JSON.stringify(getLocalBusinessSchema())}
      </script>

      {/* Hero Section */}
      <section className="w-full bg-white relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full relative inline-block"
        >
          <img 
            src={heroImg} 
            alt="Shivani Packers & Movers" 
            className="w-full h-auto block"
          />
          
          {/* Invisible Overlay for "Get Free Quote" Button */}
          <Link 
            to="/pricing"
            className="absolute z-10 cursor-pointer"
            style={{
              top: '45.5%',
              left: '7.3%',
              width: '18.5%',
              height: '9%',
            }}
            title="Get Free Quote"
            aria-label="Navigate to Pricing to Get a Free Quote"
          />

          {/* Invisible Overlay for "Call Now" Button Bottom Right */}
          <a 
            href="tel:+918819017542"
            className="absolute z-10 cursor-pointer"
            style={{
              top: '74%',
              left: '66.5%',
              width: '24.5%',
              height: '14%',
            }}
            title="Call Now: +91 88190 17542"
            aria-label="Call Now"
          />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Professional Shifting Services</h2>
            <p className="text-slate-600 text-lg">
              We offer a comprehensive range of logistics services tailored to meet your specific moving needs in Bhopal and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden flex flex-col"
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-8 flex-grow">
                  <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <Link to={`/services/${service.id}`} className="text-primary font-bold text-sm flex items-center hover:text-secondary transition-colors mt-auto">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <PricingCalculator />

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">Why Shivani Packers & Movers is the Best Choice?</h2>
              <div className="space-y-8">
                {[
                  { title: "Expert Packing Team", desc: "Our team is trained in advanced packing techniques using premium materials." },
                  { title: "On-Time Delivery", desc: "We value your time and ensure your belongings reach the destination as scheduled." },
                  { title: "24/7 Customer Support", desc: "Get real-time updates and support throughout your moving journey." },
                  { title: "Transparent Pricing", desc: "No hidden charges. Get a clear, upfront quote for your entire move." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-primary p-2 rounded-lg mt-1">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000" 
                alt="Warehouse" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-secondary p-10 rounded-3xl shadow-2xl hidden md:block">
                <Clock size={48} className="mb-4" />
                <p className="text-2xl font-bold">Fast & Secure</p>
                <p className="opacity-80">Guaranteed Delivery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Simple Moving Process</h2>
            <p className="text-slate-600">How we make your shifting experience seamless and stress-free.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="w-16 h-16 bg-white border-4 border-primary text-primary rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-slate-600">Real feedback from our satisfied customers in Bhopal.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Move? Get Your Free Quote Today!</h2>
              <p className="text-xl opacity-90 mb-12">
                Join thousands of happy families who experienced a smooth move with Shivani Packers & Movers.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/pricing" className="bg-secondary hover:bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105">
                  Request a Quote
                </Link>
                <a href="tel:+918819017542" className="bg-white text-primary hover:bg-slate-100 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center">
                  <PhoneCall className="mr-3" size={24} /> Call: +91 88190 17542
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
