
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Banknote, MapPin, HardHat, Headphones } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Full Transit Insurance',
      desc: 'Complete coverage for any accidental damage during transit for peace of mind.',
      icon: <ShieldCheck size={28} />,
    },
    {
      title: 'Professional Team',
      desc: 'Trained and background-verified packing professionals with years of experience.',
      icon: <UserCheck size={28} />,
    },
    {
      title: 'No Hidden Charges',
      desc: 'Transparent pricing with detailed quotation and zero last-minute surprises.',
      icon: <Banknote size={28} />,
    },
    {
      title: 'Real-time Tracking',
      desc: 'Stay updated with the live location of your shipment through our system.',
      icon: <MapPin size={28} />,
    },
    {
      title: 'Safe Packing Materials',
      desc: 'We use high-grade bubble wraps, heavy-duty cartons, and foam for fragility.',
      icon: <HardHat size={28} />,
    },
    {
      title: '24/7 Priority Support',
      desc: 'Dedicated move manager for every client to resolve queries anytime.',
      icon: <Headphones size={28} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl relative z-10 bg-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&q=80&w=1200" 
              alt="Professional Packing Team" 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                // Fallback to another reliable image if the first one fails
                e.currentTarget.src = 'https://images.unsplash.com/photo-1600518464441-9154a4dba246?auto=format&fit=crop&q=80&w=1200';
              }}
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue rounded-3xl -z-0 rotate-12 flex items-center justify-center p-6 text-white text-center font-bold shadow-xl">
            Guaranteed Satisfaction
          </div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/20 rounded-full -z-0 blur-3xl opacity-50"></div>
        </motion.div>

        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Shivani Packers?</h2>
          <p className="text-lg text-slate-600 mb-10">
            We don't just move boxes; we move lives. Our commitment to safety and efficiency makes us the preferred choice for thousands of families across India.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/5 text-brand-blue rounded-xl flex items-center justify-center border border-brand-blue/10">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
