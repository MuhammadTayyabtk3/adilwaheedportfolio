import { motion } from 'motion/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const email = "adilwaheed2222.com@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32" id="contact">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8 text-text">Let's create something extraordinary.</h2>
          <p className="text-xl text-muted mb-12">
            Currently available for freelance projects and full-time opportunities.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a 
              href={`mailto:${email}?subject=Project Inquiry`}
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-serif border-b-2 border-border hover:border-accent pb-2 transition-colors cursor-hover text-text"
            >
              {email}
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 group-hover:text-accent transition-all" />
            </a>

            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors cursor-hover"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-accent" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
