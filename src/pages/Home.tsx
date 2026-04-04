import { motion } from 'motion/react';
import Hero from '@/components/Hero';
import WorkGrid from '@/components/WorkGrid';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <WorkGrid />
      <AboutSection />
      <TechStack />
      <SkillsSection />
      <ContactSection />
    </motion.div>
  );
}
