import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '@/data/projects';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col gap-4"
    >
      <Link to={`/work/${project.slug}`} className="block overflow-hidden rounded-2xl cursor-hover">
        <div 
          className="relative w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] overflow-hidden transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundColor: project.thumbnail }}
        >
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full mb-4">
              View Case Study
            </span>
          </div>
        </div>
      </Link>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-serif text-text">{project.title}</h3>
          <span className="text-muted text-sm">{project.year}</span>
        </div>
        <p className="text-muted mb-4">{project.category}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-xs px-3 py-1 border border-border rounded-full text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
