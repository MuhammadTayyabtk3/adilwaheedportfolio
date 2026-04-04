import { motion } from 'motion/react';
import WorkGrid from '@/components/WorkGrid';
import ContactSection from '@/components/ContactSection';

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24"
    >
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">All Projects</h1>
        <p className="text-xl text-[#888888] max-w-2xl">
          A comprehensive showcase of my .NET development projects, including real-world applications, technical case studies, and hands-on experiments demonstrating practical solutions and best practices.
        </p>
      </div>
      <WorkGrid />
      <ContactSection />
    </motion.div>
  );
}
