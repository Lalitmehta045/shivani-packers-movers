
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, MapPin, ArrowRight, Star, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-slate-50">
      {/* Background with image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/hero-3d.png"
          alt="Shivani Packers & Movers Delivery Truck"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-blue-50/80"></div>

        {/* Animated Background Shapes - subtle now */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 45, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-[80px]"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-brand-blue text-xs font-bold uppercase tracking-wider mb-8"
            >
              <ShieldCheck size={16} className="text-brand-orange" />
              <span>ISO 9001:2015 Certified Mover</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 font-display tracking-tight">
              Moving Made <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-indigo-600">Secure</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-500">Simple</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Join <span className="text-slate-900 font-bold">25,000+</span> happy families. Experience premium "Door-to-Door" relocation with India's most trusted experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-brand-blue text-white flex items-center justify-center text-xs font-bold">+25k</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm font-bold text-slate-700">4.9/5 Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Zero Damage Guarantee', icon: ShieldCheck },
                { label: 'On-Time Delivery', icon: Clock },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-brand-blue rounded-lg">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Quote Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            className="relative"
          >
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-brand-orange text-white p-4 rounded-full shadow-lg shadow-brand-orange/30 hidden md:block"
            >
              <div className="text-center leading-tight">
                <span className="block text-xl font-black">30%</span>
                <span className="text-xs font-bold uppercase">Off</span>
              </div>
            </motion.div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(30,33,84,0.15)] border border-white/50 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue"></div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-1 font-display">Get Your Free Quote</h3>
                <p className="text-slate-500 text-sm font-medium">Instant estimate. No hidden fees.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="bg-white p-1 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-brand-blue/20 focus-within:border-brand-blue transition-all flex items-center shadow-sm">
                    <div className="p-3 text-slate-400">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-grow">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 pt-1">Pickup Location</label>
                      <input
                        type="text"
                        placeholder="City or Area"
                        className="w-full p-1 bg-transparent border-none outline-none text-slate-900 font-semibold placeholder:text-slate-300 text-sm"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-1 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-brand-orange/20 focus-within:border-brand-orange transition-all flex items-center shadow-sm">
                    <div className="p-3 text-slate-400">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-grow">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 pt-1">Drop Location</label>
                      <input
                        type="text"
                        placeholder="City or Area"
                        className="w-full p-1 bg-transparent border-none outline-none text-slate-900 font-semibold placeholder:text-slate-300 text-sm"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-1 rounded-xl border border-slate-200 focus-within:ring-2 focus-within:ring-brand-blue/20 focus-within:border-brand-blue transition-all flex items-center shadow-sm">
                    <div className="p-3 text-slate-400">
                      <div className="font-bold text-xs">🇮🇳 +91</div>
                    </div>
                    <div className="flex-grow border-l border-slate-100 pl-2">
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 pt-1">Mobile Number</label>
                      <input
                        type="tel"
                        placeholder="98765 43210"
                        className="w-full p-1 bg-transparent border-none outline-none text-slate-900 font-semibold placeholder:text-slate-300 text-sm"
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-brand-orange to-red-500 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/25 mt-2"
                >
                  Check Prices Now
                  <ArrowRight size={20} />
                </motion.button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 size={14} className="text-green-500" />
                <span>100% Spam Free</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <CheckCircle2 size={14} className="text-green-500" />
                <span>Instant Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
