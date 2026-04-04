import { motion } from 'motion/react';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24"
    >
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">About Me</h1>
      </div>
      <AboutSection />
      <TechStack />
      <SkillsSection />
      <ContactSection />
    </motion.div>
  );
}
