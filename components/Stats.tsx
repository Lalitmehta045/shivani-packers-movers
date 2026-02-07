
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = '', className = '' }: { value: number; suffix?: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 }); // Slower, smoother animation

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with commas for strictly numeric look 
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span className={className} ref={ref}>0{suffix}</span>;
};

const Stats: React.FC = () => {
  const stats = [
    { label: 'Happy Customers', value: 25000, suffix: '+', color: 'text-brand-blue' },
    { label: 'Years Experience', value: 15, suffix: '+', color: 'text-brand-orange' },
    { label: 'Cities Covered', value: 500, suffix: '+', color: 'text-brand-blue' },
    { label: 'Successful Moves', value: 45, suffix: 'k', color: 'text-brand-orange' },
  ];

  return (
    <div className="bg-white border-y border-slate-100 relative z-20 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-50 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6, type: "spring" }}
              className="text-center group p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300"
            >
              <div className={`text-4xl lg:text-5xl font-display font-bold mb-2 ${stat.color} flex justify-center items-center`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-12 h-1 bg-slate-200 mx-auto mb-3 rounded-full group-hover:bg-brand-orange transition-colors duration-300"></div>
              <div className="text-sm lg:text-base font-semibold text-slate-600 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
