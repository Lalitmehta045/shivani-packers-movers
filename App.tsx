
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />

      <main>
        <section id="home">
          <Hero />
        </section>

        <Stats />

        <section id="services" className="py-20 bg-white">
          <Services />
        </section>

        <section id="about" className="py-20 bg-slate-50">
          <WhyChooseUs />
        </section>

        <section className="py-20 bg-blue-900 text-white overflow-hidden">
          <Process />
        </section>

        <section id="reviews" className="py-20 bg-white">
          <Testimonials />
        </section>

        <section className="py-20 bg-white">
          <FAQ />
        </section>

        <section id="contact" className="py-20 bg-slate-50">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
