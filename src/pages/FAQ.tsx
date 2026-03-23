import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
  {
    question: "How much do packers and movers in Bhopal charge?",
    answer: "Shifting charges depend on various factors like the volume of goods, distance, packing quality, and the floor of the building. Local shifting for 1 BHK starts from ₹3,500, while 2 BHK starts from ₹6,500. For intercity moves, charges are calculated based on distance and vehicle type."
  },
  {
    question: "Do you provide insurance for the goods?",
    answer: "Yes, we provide comprehensive transit insurance for all intercity moves. This covers any accidental damage or loss during transit. We recommend all our customers to opt for insurance for peace of mind."
  },
  {
    question: "How many days before should I book my move?",
    answer: "It is ideal to book your move at least 3-7 days in advance. This allows us to plan the logistics, arrange the right vehicle, and assign a dedicated team for your shifting."
  },
  {
    question: "What items are not allowed to be shifted?",
    answer: "For safety reasons, we do not shift hazardous items like gas cylinders, flammable liquids, explosives, or perishable food items. We also advise customers to carry jewelry, cash, and important documents personally."
  },
  {
    question: "Do you provide packing materials?",
    answer: "Yes, we bring our own high-quality packing materials including bubble wraps, corrugated sheets, sturdy cartons, stretch film, and adhesive tapes. The cost of materials is usually included in our quote."
  },
  {
    question: "Can you shift my car or bike along with household goods?",
    answer: "Absolutely! We have specialized car carriers and bike stands to transport your vehicles safely. We can move them along with your household items or separately as per your requirement."
  },
  {
    question: "Do you provide unpacking and assembly services?",
    answer: "Yes, our team will help you unpack your belongings and assemble basic furniture like beds and wardrobes at your new home. This ensures you can settle in quickly without any hassle."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <>
      <SEO 
        title="Frequently Asked Questions | Shifting Guide Bhopal"
        description="Find answers to common questions about packers and movers services in Bhopal. Learn about pricing, insurance, packing, and more."
      />

      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Common <span className="text-secondary">Questions</span>
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our shifting process and services.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`border rounded-3xl overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'border-primary shadow-xl' : 'border-slate-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <HelpCircle className={activeIndex === idx ? 'text-primary' : 'text-slate-400'} size={24} />
                    <span className={`text-lg font-bold ${activeIndex === idx ? 'text-primary' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full transition-colors ${activeIndex === idx ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {activeIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
              <p className="text-lg opacity-90 mb-8">
                Our support team is available 24/7 to help you with any queries.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="tel:+919876543210" className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all">
                  Call Us Now
                </a>
                <a href="mailto:info@shivanipackers.com" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all">
                  Email Support
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
