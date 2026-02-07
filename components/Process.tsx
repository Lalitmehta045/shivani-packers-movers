
import React from 'react';
import { motion } from 'framer-motion';
import { Search, ClipboardList, Box, Truck, CheckCircle2 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { title: 'Inquiry & Quote', icon: <Search size={24} />, desc: 'Fill the form and get an instant free cost estimate.' },
    { title: 'Survey & Pre-plan', icon: <ClipboardList size={24} />, desc: 'Our experts analyze your goods and plan the packing strategy.' },
    { title: 'Safe Packing', icon: <Box size={24} />, desc: 'High-quality packing using multi-layer protection.' },
    { title: 'Loading & Transit', icon: <Truck size={24} />, desc: 'Expert loading in closed trucks and secure transportation.' },
    { title: 'Unpack & Setup', icon: <CheckCircle2 size={24} />, desc: 'Delivery, unpacking, and final placement at your new home.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-blue-200">Our seamless process ensures your peace of mind from start to finish.</p>
      </div>

      <div className="relative">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-blue-800/50 -z-0"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center relative z-10"
            >
              <div className="w-24 h-24 bg-blue-800/50 backdrop-blur-md rounded-full border-4 border-blue-600 flex items-center justify-center mx-auto mb-6 text-white group hover:scale-110 transition-transform">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-blue-200 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
