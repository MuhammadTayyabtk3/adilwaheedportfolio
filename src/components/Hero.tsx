import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react';

function MagneticButton({ children, className, to, href }: { children: ReactNode, className?: string, to?: string, href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const Component = to ? Link : 'a';
  const props = to ? { to } : { href };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        {...props as any}
        ref={ref}
        className={className}
      >
        {children}
      </Component>
    </motion.div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayedText}<span className="animate-pulse">|</span></span>;
}

export default function Hero() {
  const title = "Crafting digital experiences that matter.";
  const words = title.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-accent"></div>
              <p className="text-accent font-medium tracking-wide uppercase text-sm h-5">
                <TypewriterText text="Adil Waheed — Full-Stack .NET Developer" />
              </p>
            </motion.div>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-7xl lg:text-[80px] font-serif leading-[1.1] tracking-tight mb-8 text-text"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={child}
                  key={index}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed"
            >
              I specialize in developing robust, scalable, and user-friendly applications using modern web technologies. Currently available for freelance opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton
                to="/work"
                className="group flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity duration-300 cursor-hover"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <MagneticButton
                to="/contact"
                className="text-text hover:text-accent font-medium transition-colors cursor-hover px-4 py-4"
              >
                Contact Me
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-16 lg:mt-0 max-w-md mx-auto lg:max-w-none"
          >
            <div className="aspect-[3/4] bg-surface rounded-3xl overflow-hidden border border-border relative group">
              <img 
                src="https://i.postimg.cc/wMCqSpHQ/IMG-20260405-WA0005.jpg" 
                alt="Adil Waheed" 
                className="w-full h-full object-cover object-[center_15%] transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 border-t-2 border-r-2 border-accent/30 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 border-b-2 border-l-2 border-accent/30 rounded-bl-3xl" />
            
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 sm:-right-8 top-1/4 bg-surface border border-border p-3 sm:p-4 rounded-2xl backdrop-blur-md z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium uppercase tracking-wider text-text">Available for Hire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
