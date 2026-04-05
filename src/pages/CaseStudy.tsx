import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import ContactSection from '@/components/ContactSection';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="pt-32"
    >
      <div className="container mx-auto px-6 md:px-12">
        <Link to="/work" className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-12 cursor-hover">
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        <div className="max-w-4xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif text-text"
            >
              {project.title}
            </motion.h1>

            {project.liveUrl && (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity cursor-hover w-fit"
              >
                Live Project
                <ExternalLink size={18} />
              </motion.a>
            )}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8 text-muted"
          >
            <div>
              <span className="block text-sm text-text mb-1">Role</span>
              {project.category}
            </div>
            <div>
              <span className="block text-sm text-text mb-1">Year</span>
              {project.year}
            </div>
            <div>
              <span className="block text-sm text-text mb-1">Tags</span>
              {project.tags.join(', ')}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-video rounded-3xl mb-24 overflow-hidden"
          style={{ backgroundColor: project.thumbnail.startsWith('http') ? 'transparent' : project.thumbnail }}
        >
          {project.thumbnail.startsWith('http') && (
            <img 
              src={project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </motion.div>

        <div className="max-w-3xl mx-auto prose prose-lg mb-32">
          <h2 className="text-3xl font-serif mb-6 text-text">Overview</h2>
          <p className="text-muted leading-relaxed mb-12">
            {project.description}
          </p>
          
          <h2 className="text-3xl font-serif mb-6 text-text">The Challenge</h2>
          <p className="text-muted leading-relaxed mb-12">
            {project.content}
          </p>
        </div>
      </div>
      
      <ContactSection />
    </motion.div>
  );
}
