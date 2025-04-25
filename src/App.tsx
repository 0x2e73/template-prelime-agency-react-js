import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-neutral-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff0] transform origin-left z-50"
        style={{ scaleX }}
      />
      <Header />
      <main id="content">
        <Hero />
        <Clients />
        <CaseStudies />
        <Testimonials />
        <Stats />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;