import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award, CheckCircle2, Heart, Briefcase, TrendingUp, Quote, Truck, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import founderImg from '../images/Founder_shivani_packers.jpeg';

const milestones = [
  { year: "2008", title: "Company Founded", desc: "Started with a single truck and a dream to transform the moving industry in Bhopal." },
  { year: "2012", title: "500+ Moves Completed", desc: "Earned the trust of hundreds of families with our reliable and safe shifting services." },
  { year: "2016", title: "Intercity Expansion", desc: "Expanded our services to cover all major cities across India with dedicated routes." },
  { year: "2020", title: "ISO Certification", desc: "Achieved ISO certification for quality management in logistics and packing." },
  { year: "2024", title: "15,000+ Happy Clients", desc: "Serving thousands of families with a fleet of 50+ vehicles and 200+ trained staff." },
];

const values = [
  { icon: <ShieldCheck size={28} />, title: "Safety First", desc: "Every item is handled with utmost care using premium packing materials and modern techniques.", color: "bg-blue-50 text-primary" },
  { icon: <Heart size={28} />, title: "Customer Love", desc: "We treat every customer like family, ensuring a personal and caring moving experience.", color: "bg-rose-50 text-rose-600" },
  { icon: <TrendingUp size={28} />, title: "Continuous Growth", desc: "We constantly invest in training, technology, and fleet upgrades to serve you better.", color: "bg-emerald-50 text-emerald-600" },
  { icon: <Star size={28} />, title: "Integrity", desc: "Transparent pricing, honest communication, and no hidden charges — ever.", color: "bg-amber-50 text-amber-600" },
  { icon: <Briefcase size={28} />, title: "Professionalism", desc: "Our uniformed, trained team executes every move with precision and discipline.", color: "bg-violet-50 text-violet-600" },
  { icon: <Users size={28} />, title: "Team Spirit", desc: "200+ dedicated professionals working together to make your relocation seamless.", color: "bg-cyan-50 text-cyan-600" },
];

const stats = [
  { value: "15+", label: "Years of Experience", icon: <Clock size={24} /> },
  { value: "15,000+", label: "Successful Moves", icon: <Truck size={24} /> },
  { value: "200+", label: "Cities Served", icon: <Target size={24} /> },
  { value: "4.9★", label: "Customer Rating", icon: <Star size={24} /> },
];

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Shivani Packers and Movers Bhopal"
        description="Learn more about Shivani Packers and Movers, the most trusted shifting experts in Bhopal. Meet our founder Arun Vishwakarma and discover our mission, vision, and values."
      />
      
      {/* Hero Header */}
      <section className="relative bg-slate-900 text-white py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-secondary/20 text-secondary px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-8">
              Trusted Since 2008
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-400">Shivani Packers</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Bhopal's most trusted name in relocation — built on trust, driven by excellence, and committed to making every move memorable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-12 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent rounded-[2.5rem] -z-10"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full -z-10"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full -z-10"></div>
                
                <img 
                  src={founderImg} 
                  alt="Arun Vishwakarma - Founder & CEO of Shivani Packers & Movers" 
                  className="w-full rounded-[2rem] shadow-2xl object-cover aspect-[4/5]"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-5 left-6 sm:left-10 bg-primary text-white px-6 py-3 rounded-2xl shadow-xl flex items-center space-x-3">
                  <Award size={24} className="text-secondary" />
                  <div>
                    <p className="font-bold text-sm">15+ Years</p>
                    <p className="text-xs text-blue-200">Industry Leadership</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full">
                <Users size={16} className="text-primary" />
                <span className="text-sm font-bold text-primary uppercase tracking-wider">Meet Our Founder</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                Arun Vishwakarma
              </h2>
              <p className="text-lg sm:text-xl text-secondary font-bold">Founder & CEO, Shivani Packers & Movers</p>

              <div className="relative pl-6 border-l-4 border-secondary/30">
                <Quote size={32} className="text-secondary/30 absolute -top-2 -left-5 bg-white" />
                <p className="text-slate-600 leading-relaxed italic text-base sm:text-lg">
                  "I started Shivani Packers & Movers in 2008 with a simple belief — that every family deserves a stress-free, safe, and affordable moving experience. Today, seeing over 15,000 happy families trust us with their most precious belongings is the greatest reward."
                </p>
              </div>

              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  With over 15 years of hands-on experience in the logistics and relocation industry, <strong className="text-slate-900">Arun Vishwakarma</strong> built Shivani Packers & Movers from a single truck into one of Bhopal's most respected moving companies.
                </p>
                <p>
                  His vision of combining traditional Indian values of trust and care with modern logistics practices has set new standards in the industry. Under his leadership, the company has grown to serve 200+ cities with a fleet of 50+ vehicles and a team of 200+ trained professionals.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Visionary Leader", "Customer Champion", "Industry Expert"].map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">The Journey So Far</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From a humble beginning to Bhopal's most trusted moving partner.</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/30 -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative lg:flex items-center ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:mb-16`}
                >
                  <div className={`lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                      <span className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Center dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-primary rounded-full shadow-md z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary to-blue-700 p-10 sm:p-12 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">Our Mission</h3>
                <p className="leading-relaxed text-blue-100 text-base sm:text-lg">
                  To provide the most reliable, safe, and stress-free moving experience through professional excellence, innovative logistics solutions, and a dedicated team that treats every move like their own.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-secondary to-orange-600 p-10 sm:p-12 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-6">Our Vision</h3>
                <p className="leading-relaxed text-orange-100 text-base sm:text-lg">
                  To be India's leading logistics and shifting company, known for our integrity, customer-centric approach, and unwavering commitment to delivering happiness with every move we make.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">The principles that guide every move, every decision, and every interaction.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${value.color} group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 lg:p-20 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">Ready to Experience the Best Move of Your Life?</h2>
              <p className="text-lg sm:text-xl text-slate-300 mb-10">
                Join 15,000+ happy families who trusted Shivani Packers & Movers for their relocation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Link to="/pricing" className="bg-secondary hover:bg-orange-600 text-white px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1">
                  Get Free Quote
                </Link>
                <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
