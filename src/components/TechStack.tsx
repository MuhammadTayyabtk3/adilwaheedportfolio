import { motion } from 'motion/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const techStack = [
  { name: 'C#', icon: 'https://github.com/devicons/devicon/raw/master/icons/csharp/csharp-original.svg' },
  { name: '.NET', icon: 'https://github.com/devicons/devicon/raw/master/icons/dot-net/dot-net-plain-wordmark.svg' },
  { name: '.NET CORE', icon: 'https://github.com/devicons/devicon/raw/master/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'Angular', icon: 'https://github.com/devicons/devicon/raw/master/icons/angularjs/angularjs-plain.svg' },
  { name: 'SQL Server', icon: 'https://github.com/devicons/devicon/raw/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg' },
  { name: 'Azure', icon: 'https://github.com/devicons/devicon/raw/master/icons/azure/azure-original.svg' },
  { name: 'Firebase', icon: 'https://github.com/devicons/devicon/raw/master/icons/firebase/firebase-plain-wordmark.svg' },
  { name: 'GitHub', icon: 'https://github.com/devicons/devicon/raw/master/icons/github/github-original.svg' },
  { name: 'Visual Studio', icon: 'https://github.com/devicons/devicon/raw/master/icons/visualstudio/visualstudio-plain.svg' },
  { name: 'VS Code', icon: 'https://github.com/devicons/devicon/raw/master/icons/vscode/vscode-original.svg' },
  { name: 'React', icon: 'https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg' },
];

export default function TechStack() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 bg-[#141414] overflow-hidden" id="tech-stack">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-[#888888]"
          >
            The tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        <div ref={ref} className="w-full">
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            freeMode={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              1024: { slidesPerView: 8 },
              1280: { slidesPerView: 10 },
            }}
            className="tech-swiper"
          >
            {techStack.map((tech) => (
              <SwiperSlide key={tech.name}>
                <div className="group relative flex flex-col items-center py-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 p-2 rounded-xl bg-[#0A0A0A] border border-[#222222] flex items-center justify-center group-hover:border-[#FF6B00]/50 transition-all duration-300">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="mt-3 text-[10px] uppercase tracking-widest text-[#888888] opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
