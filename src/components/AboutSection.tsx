import { motion } from 'motion/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function AboutSection() {
  const { ref, isInView } = useScrollReveal();

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'Interaction Design', level: 85 },
    { name: 'Design Systems', level: 90 },
    { name: 'Frontend Dev (React)', level: 75 },
  ];

  const textLines = [
    "👋 Hi there! I'm Adil Waheed, a Full-Stack .NET Developer passionate about creating efficient and scalable web applications. With expertise in both front-end and back-end development, I strive to deliver high-quality solutions that meet client requirements and exceed expectations.",
    "-📫 How to reach me: You can reach out to me via email at adilwaheed2222.com@gmail.com. I'm always open to new opportunities, collaborations, and discussions related to web development and modern technologies."
  ];

  return (
    <section className="py-24 bg-surface" id="about">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={ref}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-serif mb-8 text-text"
            >
              Design with purpose.
            </motion.h2>
            
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              {textLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.1 * (index + 1), ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-border rounded-2xl overflow-hidden relative group">
              <img 
                src="https://i.postimg.cc/T2KWHjXn/IMG-20260405-WA0006.jpg" 
                alt="Adil Waheed Portrait" 
                className="w-full h-full object-cover object-[center_15%] transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Decorative element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-12 -left-12 w-32 h-32 border border-accent/30 rounded-full border-dashed flex items-center justify-center backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-accent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
