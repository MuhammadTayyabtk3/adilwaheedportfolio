import { motion } from 'motion/react';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32 min-h-[80vh] flex flex-col justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 mb-12 text-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 text-text">Get in Touch</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>
      <ContactSection />
    </motion.div>
  );
}
