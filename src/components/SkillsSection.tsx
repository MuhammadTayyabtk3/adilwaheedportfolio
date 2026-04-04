import { motion } from 'motion/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <img src="https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg" className="w-6 h-6" alt="React" />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"]
  },
  {
    title: "Backend Development",
    icon: <img src="https://github.com/devicons/devicon/raw/master/icons/dotnetcore/dotnetcore-original.svg" className="w-6 h-6" alt=".NET" />,
    skills: [".NET Core", "C#", "ASP.NET MVC", "Web API", "Entity Framework"]
  },
  {
    title: "Database & Storage",
    icon: <img src="https://github.com/devicons/devicon/raw/master/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" className="w-6 h-6" alt="SQL" />,
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis", "Azure Storage"]
  },
  {
    title: "Tools & DevOps",
    icon: <img src="https://github.com/devicons/devicon/raw/master/icons/visualstudio/visualstudio-plain.svg" className="w-6 h-6" alt="VS" />,
    skills: ["Git", "Docker", "Azure", "CI/CD", "Visual Studio"]
  }
];

export default function SkillsSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 bg-bg" id="skills">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-serif mb-6 text-text"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-muted"
          >
            A comprehensive set of skills acquired through years of building complex enterprise applications and modern web solutions.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="mb-6 p-3 rounded-xl bg-bg inline-block group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-serif mb-6 text-text">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
