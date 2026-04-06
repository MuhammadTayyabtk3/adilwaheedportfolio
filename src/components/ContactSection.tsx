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
            Currently available for freelance projects.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <a 
              href={`mailto:${email}?subject=Project Inquiry`}
              className="group inline-flex items-center gap-4 bg-accent text-white px-10 py-5 rounded-full text-xl md:text-2xl font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 cursor-hover shadow-lg shadow-accent/20"
            >
              Send me an email
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="flex flex-col items-center gap-3">
              <p className="text-muted text-sm uppercase tracking-widest">Or copy address</p>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:border-accent hover:text-accent transition-all duration-300 cursor-hover bg-surface/50"
              >
                <span className="font-mono text-text">{email}</span>
                {copied ? (
                  <Check size={18} className="text-accent" />
                ) : (
                  <Copy size={18} className="text-muted" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
