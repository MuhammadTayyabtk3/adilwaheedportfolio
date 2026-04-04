import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

const categories = ['All', 'UI/UX Design', 'Brand Identity', 'Mobile App', 'Web Application'];

export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-text">Selected Work</h2>
            <p className="text-muted max-w-md">A collection of my recent .NET development projects, showcasing web applications, APIs, and enterprise solutions built with modern Microsoft technologies.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-border pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative px-2 py-2 text-sm font-medium transition-colors cursor-hover",
                  activeCategory === category ? "text-accent" : "text-muted hover:text-accent"
                )}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute left-0 right-0 -bottom-[9px] h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
