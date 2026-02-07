import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Rahul Sharma',
      location: 'Delhi to Mumbai',
      text: "Extremely professional service. The team arrived on time and handled my fragile kitchenware with utmost care. Highly recommended for long-distance moves!",
      stars: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Priya Patel',
      location: 'Local Move in Pune',
      text: "The best experience I've had with packers and movers. No hidden costs and the staff was very polite and helpful throughout. They made the move stress-free.",
      stars: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Amit Kumar',
      location: 'Office Shifting, Bangalore',
      text: "Our IT infrastructure move was perfectly executed. We were back to work within 24 hours. Great coordination and zero damage to servers.",
      stars: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Sonal Verma',
      location: 'Vehicle Shifting, Gurgaon',
      text: "Transported my SUV from Gurgaon to Hyderabad. Received it scratch-free. Their closed container service is worth every penny!",
      stars: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Vikram Singh',
      location: 'Home Move, Hyderabad',
      text: "I was worried about my antique furniture, but Shivani Packers used special wooden crating. Everything arrived in pristine condition.",
      stars: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Ananya Das',
      location: 'Local Move, Kolkata',
      text: "Efficient, quick, and very clean packing. They used high-quality bubble wraps and boxes. Best service in the city by far.",
      stars: 4,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages, itemsPerPage]);

  // Swipe logic
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const onDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      nextSlide();
    } else if (swipe > swipeConfidenceThreshold) {
      prevSlide();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6 font-display">
              What Our <span className="text-brand-blue">Clients Say</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We take pride in every move we handle. Here are stories from happy families and businesses we've helped relocate across India.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="overflow-hidden px-2 py-4">
            <motion.div
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={onDragEnd}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {[...Array(totalPages)].map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full flex gap-4 md:gap-8 px-2 md:px-4"
                >
                  {reviews
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full group"
                      >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 text-center md:text-left">
                          <div className="relative">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-16 h-16 md:w-16 md:h-16 rounded-full object-cover border-2 border-slate-100 group-hover:border-brand-blue/30 transition-colors"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-brand-blue text-white p-1 rounded-full">
                              <Quote size={10} fill="currentColor" />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 text-lg group-hover:text-brand-blue transition-colors duration-300">
                              {review.name}
                            </h4>
                            <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                              <MapPin size={12} className="text-brand-orange" />
                              {review.location}
                            </div>
                          </div>
                        </div>

                        <div className="mb-6 flex-grow">
                          <p className="text-slate-600 leading-relaxed italic relative z-10 text-center md:text-left text-sm md:text-base">
                            "{review.text}"
                          </p>
                        </div>

                        <div className="flex justify-center md:justify-start gap-1 pt-6 border-t border-slate-50">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i < review.stars
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-slate-200 text-slate-200"
                              }
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  {/* Fill empty space if last page has fewer items */}
                  {Array.from({ length: itemsPerPage - reviews.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).length }).map((_, i) => (
                    <div key={`empty-${i}`} className="flex-1 invisible" />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls - Hidden on mobile, visible on tablet+ */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-brand-blue hover:text-white text-slate-700 p-3 rounded-full shadow-lg border border-slate-100 transition-all duration-300 z-20 group disabled:opacity-50 hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-brand-blue hover:text-white text-slate-700 p-3 rounded-full shadow-lg border border-slate-100 transition-all duration-300 z-20 group hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 md:w-8 bg-brand-orange" : "w-1.5 md:w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
