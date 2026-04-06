/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Work from '@/pages/Work';
import CaseStudy from '@/pages/CaseStudy';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import { useCursorFollower } from '@/hooks/useCursorFollower';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RedirectToHome() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect if we are not already at the root
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []); // Run only once on mount (reload)

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const { position, isHovering } = useCursorFollower();

  return (
    <Router>
      <ScrollToTop />
      <RedirectToHome />
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(0, 31, 63, 0.2)' : '#001F3F',
          border: isHovering ? '1px solid #001F3F' : 'none',
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
