
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
            <HelpCircle size={20} />
          </div>
          <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-blue' : 'text-slate-700'}`}>
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`${isOpen ? 'text-brand-orange' : 'text-slate-400'}`}
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-14 pr-4 text-slate-600 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What items are not allowed for transport?",
      answer: "For safety reasons, we do not transport flammable items (gas cylinders, petrol, kerosene), jewelry, valuable documents, currency, explosives, or hazardous chemicals. We recommend carrying your personal valuables like laptops and gold jewelry yourself."
    },
    {
      question: "Is transit insurance mandatory?",
      answer: "While not mandatory, we strongly recommend opting for our comprehensive transit insurance. It covers accidental damage or loss during the entire moving process, ensuring you have complete peace of mind for your valuable household goods."
    },
    {
      question: "How long before the move should I book?",
      answer: "For local shifting within the same city, booking 24-48 hours in advance is sufficient. However, for domestic or long-distance moves across states, we recommend booking at least 3-7 days in advance to ensure availability and proper planning."
    },
    {
      question: "Are there any hidden costs after the final quote?",
      answer: "No, Shivani Packers believes in 100% transparency. Our final quotation includes all costs discussed during the survey. Unless there is a significant change in the inventory list or destination details at the last moment, the price remains fixed."
    },
    {
      question: "Do you provide packing materials?",
      answer: "Yes, we bring our own high-quality packing materials including 3-ply corrugated sheets, bubble wraps, stretch films, heavy-duty cartons, and adhesive tapes. Our 'Premium Packing' service ensures multi-layer protection for all items."
    },
    {
      question: "Can I track my shipment during transit?",
      answer: "Absolutely! We provide real-time tracking for all long-distance moves. You will be assigned a dedicated move manager who will provide regular updates on your shipment's location until it reaches your doorstep."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">
            Find answers to common queries about our relocation process and services.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-[32px] p-6 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
