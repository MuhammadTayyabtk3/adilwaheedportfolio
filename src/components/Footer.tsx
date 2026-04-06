import { Github, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-24">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-serif font-bold tracking-tighter text-text">
          Portfolio<span className="text-accent">.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/adilwaheed786" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors cursor-hover"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.facebook.com/adil.waheed.144/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors cursor-hover"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/adil-waheed-300205201" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors cursor-hover"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.instagram.com/adilwaheed786/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-accent transition-colors cursor-hover"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
