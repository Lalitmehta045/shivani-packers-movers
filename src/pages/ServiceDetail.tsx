import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

// Import images mapping
import localShiftingImg from '../images/Local Shifting.png';
import officeMovingImg from '../images/office moving.png';
import intercityImg from '../images/International Moving.png';
import carTransportImg from '../images/Car Transportation.png';
import packingImg from '../images/Packing Services.png';
import storageImg from '../images/Storage & Warehousing.png';

const serviceDetailsData: Record<string, any> = {
  "home-shifting": {
    title: "Local Home Shifting",
    desc: "We make your local house shifting within Bhopal smooth and completely hassle-free. Our expert team ensures that every item, from delicate glassware to heavy furniture, is carefully packed and transported to your new home.",
    image: localShiftingImg,
    features: [
      "Professional Packing & Unpacking",
      "Safe Loading & Unloading",
      "Special Care for Fragile Items",
      "Furniture Dismantling & Assembly",
      "Timely Door-to-Door Delivery"
    ]
  },
  "office-relocation": {
    title: "Office Relocation",
    desc: "Relocating your office requires precision and minimal downtime. We offer fast and efficient office moving services, seamlessly transferring your IT equipment, confidential files, and office furniture.",
    image: officeMovingImg,
    features: [
      "Dedicated Project Managers",
      "IT Equipment & Server Relocation",
      "Confidential File & Document Archiving",
      "Weekend & After-Hours Shifting",
      "Minimal Business Disruption"
    ]
  },
  "intercity-moving": {
    title: "Intercity Shifting",
    desc: "Moving to another city? Our robust network ensures reliable long-distance shifting from Bhopal to any destination in India. We guarantee 100% safety and transparency throughout the transit.",
    image: intercityImg,
    features: [
      "GPS Enabled Specialized Carriers",
      "Real-time Tracking & Updates",
      "Comprehensive Insurance Coverage",
      "Direct Zero-Transshipment Delivery",
      "Dedicated Escorts for High-Value Goods"
    ]
  },
  "car-bike-transport": {
    title: "Car & Bike Transport",
    desc: "Your vehicles are transported securely in our specialized closed containers, ensuring they reach your new destination without a single scratch, safe from weather conditions and road debris.",
    image: carTransportImg,
    features: [
      "Door-to-door Pickup & Delivery",
      "Closed Container Carriers",
      "Comprehensive Pre-Transit Vehicle Inspection",
      "Wheel Chocking & Secure Tie-downs",
      "Full Transit Insurance"
    ]
  },
  "packing-unpacking": {
    title: "Packing & Unpacking Services",
    desc: "Don't want to deal with the hassle of packing? Our experts use premium quality materials and advanced techniques to pack your belongings, ensuring maximum safety against damages during transit.",
    image: packingImg,
    features: [
      "Multi-layer Bubble Wrap for Fragiles",
      "High-grade Corrugated Sheets & Edge Protectors",
      "Sturdy Double-walled Boxes",
      "Detailed Inventory & Labeling System",
      "Complete Unpacking at Destination"
    ]
  },
  "warehouse-storage": {
    title: "Warehouse & Storage Solutions",
    desc: "Whether you need short-term storage while in transition or long-term warehousing, our modern facilities provide a clean, secure, and climate-controlled environment for your household or commercial goods.",
    image: storageImg,
    features: [
      "24/7 CCTV Surveillance & Security Guards",
      "Regular Pest Control Management",
      "Climate Controlled Options Available",
      "Fire Detection & Protection Systems",
      "Easy Access & Flexible Terms"
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetailsData[id] : null;

  if (!service) {
    return (
      <div className="min-h-screen py-24 bg-white text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
        <p className="text-slate-600 mb-8">We couldn't find the service you are looking for.</p>
        <Link to="/services" className="bg-primary text-white px-6 py-3 rounded-xl font-bold inline-block">
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${service.title} | Shivani Packers & Movers Bhopal`}
        description={service.desc}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Professional and reliable {service.title.toLowerCase()} tailored for your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About This Service</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                {service.desc}
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Highlights</h3>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-slate-700 font-semibold bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 size={24} className="text-green-500 mr-4 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Ready to proceed with {service.title}?</h3>
                <Link to="/pricing" className="bg-secondary text-white w-full py-4 rounded-xl font-bold flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
                  Request a Free Quote <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
