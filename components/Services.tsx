
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Car, Package, Warehouse, Plane, X, CheckCircle2, ArrowRight, Clock } from 'lucide-react';

interface Service {
  title: string;
  desc: string;
  detailedDesc: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  timeRequired: string;
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: 'Home Shifting',
      desc: 'Expert household goods packing and safe relocation within the city or across states.',
      detailedDesc: 'Our home shifting service is designed to take the burden off your shoulders. We handle everything from fragile glassware to heavy furniture with precision. Our team performs a pre-move survey to understand your specific requirements and ensures a damage-free transition to your new home.',
      features: ['Multi-layer safe packing', 'Furniture dismantling & assembly', 'Dedicated moving supervisor', 'Safe loading/unloading'],
      icon: <Home size={32} />,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      timeRequired: '4-8 Hours (Local) | 2-5 Days (Domestic)',
    },
    {
      title: 'Office Relocation',
      desc: 'Minimal downtime office shifting with specialized equipment handling and IT setup move.',
      detailedDesc: 'We understand that time is money in business. Our corporate relocation experts plan moves during weekends or after-hours to ensure zero business interruption. We specialize in safe handling of servers, workstations, and sensitive documentation.',
      features: ['IT infrastructure migration', 'Weekend & overnight moves', 'Asset labeling & tracking', 'Confidential document handling'],
      icon: <Building2 size={32} />,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
      timeRequired: 'Overnight / Weekend Execution',
    },
    {
      title: 'Car/Bike Transport',
      desc: 'Safe vehicle transport via closed containers to ensure scratch-free delivery to your destination.',
      detailedDesc: 'Your vehicle is a valuable asset. We use specialized closed-container car carriers that protect your car from weather, dust, and road debris. Every vehicle undergoes a detailed inspection report before and after transit.',
      features: ['GPS tracked carriers', 'Door-to-door delivery', 'Pre-transit inspection report', 'Zero-scratch guarantee'],
      icon: <Car size={32} />,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
      timeRequired: '3-7 Working Days',
    },
    {
      title: 'Warehousing',
      desc: 'Secure, CCTV monitored storage solutions for your valuable goods for short or long term.',
      detailedDesc: 'Whether you need space for a week or a year, our modern warehouses provide the perfect environment for your goods. Our facilities are climate-controlled, fire-safe, and monitored 24/7 by advanced security systems.',
      features: ['24/7 CCTV surveillance', 'Climate controlled units', 'Inventory management', 'Short & long term options'],
      icon: <Warehouse size={32} />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      timeRequired: 'Flexible (Daily/Weekly/Monthly)',
    },
    {
      title: 'Packaging Services',
      desc: 'High-quality multi-layer bubble wrap and corrugated sheet packing for maximum safety.',
      detailedDesc: 'The secret to a successful move lies in the packing. We use premium grade materials including 3-ply corrugated sheets, heavy-duty bubble wrap, and customized wooden crates for electronics and antiques.',
      features: ['Customized wooden crating', 'Premium packing materials', 'Fragile items expertise', 'Moisture-proof wrapping'],
      icon: <Package size={32} />,
      image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
      timeRequired: '2-4 Hours',
    },
    {
      title: 'International Moving',
      desc: 'Seamless international shifting with customs clearance and door-to-door delivery.',
      detailedDesc: 'Global relocation made simple. We handle everything from international freight booking (Air/Sea) to customs documentation and destination clearance, partnering with top global logistics networks.',
      features: ['FCL & LCL shipping options', 'Customs documentation support', 'Global partner network', 'Air freight for express moves'],
      icon: <Plane size={32} />,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800',
      timeRequired: '15-45 Days depending on destination',
    },
  ];

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService]);

  const modalContainerVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        // Fix: Explicitly cast the easing array to a tuple of 4 numbers to match the Easing type in Framer Motion.
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.92,
      // Fix: Explicitly cast the easing array to a tuple of 4 numbers to match the Easing type in Framer Motion.
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
        <p className="text-lg text-slate-600">
          Tailored relocation solutions designed for individuals and businesses.
          We handle everything from packing to final setup.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">
                {service.desc}
              </p>
              <button
                onClick={() => setSelectedService(service)}
                className="text-blue-600 font-bold flex items-center gap-2 group/btn cursor-pointer"
              >
                Learn More
                <div className="w-6 h-[2px] bg-blue-600 group-hover/btn:w-10 transition-all"></div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              variants={modalContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[32px] shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white/80 backdrop-blur-md text-slate-900 rounded-full hover:bg-white hover:scale-110 transition-all shadow-lg border border-slate-100"
              >
                <X size={20} />
              </button>

              <div className="md:w-2/5 h-48 md:h-auto relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/60 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <motion.div
                    variants={itemVariants}
                    className="p-3 bg-blue-600 rounded-xl inline-block mb-3 shadow-xl"
                  >
                    {selectedService.icon}
                  </motion.div>
                  <motion.h3 variants={itemVariants} className="text-3xl font-bold">{selectedService.title}</motion.h3>
                </div>
              </div>

              <div className="md:w-3/5 p-8 sm:p-10 overflow-y-auto">
                <div className="space-y-8">
                  <motion.div variants={itemVariants}>
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Service Details</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {selectedService.detailedDesc}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Estimated Duration</h5>
                      <p className="text-slate-600">{selectedService.timeRequired}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">What's Included?</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Get Pricing</p>
                      <p className="text-xl font-bold text-slate-900">Request Custom Quote</p>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      Book Now
                      <ArrowRight size={20} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
