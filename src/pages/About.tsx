import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | Shivani Packers and Movers Bhopal"
        description="Learn more about Shivani Packers and Movers, the most trusted shifting experts in Bhopal. Our mission, vision, and commitment to safe logistics."
      />
      
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/team/1920/1080" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            About <span className="text-secondary">Shivani Packers</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Providing world-class logistics and shifting solutions in Bhopal for over 15 years.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Journey to Becoming Bhopal's #1 Movers</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Founded in 2008, Shivani Packers & Movers started with a single truck and a vision to redefine the shifting experience in Bhopal. We noticed that people were often stressed and worried about their precious belongings during a move.
                </p>
                <p>
                  We decided to change that by introducing professional packing standards, trained staff, and a customer-first approach. Today, we are proud to have served over 15,000 families and businesses, earning their trust through every mile we travel.
                </p>
                <p>
                  Our commitment to safety, transparency, and reliability has made us the preferred choice for local and intercity shifting in Madhya Pradesh.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                >
                  <h4 className="text-3xl font-bold text-primary mb-1">15+</h4>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Years Experience</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                >
                  <h4 className="text-3xl font-bold text-primary mb-1">15k+</h4>
                  <p className="text-sm font-semibold text-slate-500 uppercase">Happy Shifting</p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-2xl shadow-xl text-white">
                <Award size={48} className="mb-2" />
                <p className="font-bold text-xl">ISO Certified</p>
                <p className="text-sm opacity-80">Quality Guaranteed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide the most reliable, safe, and stress-free moving experience to our customers through professional excellence, innovative logistics solutions, and a dedicated team of experts.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-12 rounded-[2rem] shadow-xl border border-slate-100"
            >
              <div className="bg-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the leading logistics and shifting company in India, known for our integrity, customer-centric approach, and commitment to delivering happiness with every move.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600">The principles that guide us in every move we make.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We believe in honest pricing and transparent communication with our clients." },
              { title: "Safety First", desc: "The safety of your belongings is our top priority, no matter the distance." },
              { title: "Customer Delight", desc: "We go the extra mile to ensure our customers are happy and satisfied." },
              { title: "Professionalism", desc: "Our team is trained to handle every situation with professional expertise." },
              { title: "Innovation", desc: "We use modern tools and techniques to make shifting faster and safer." },
              { title: "Reliability", desc: "You can count on us to be there when you need us, exactly as promised." }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary transition-all group"
              >
                <CheckCircle2 className="text-primary mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
