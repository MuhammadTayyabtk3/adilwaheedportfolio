import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
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
        <Link to="/work" className="inline-flex items-center gap-2 text-[#888888] hover:text-white transition-colors mb-12 cursor-hover">
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        <div className="max-w-4xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8 text-[#888888]"
          >
            <div>
              <span className="block text-sm text-white mb-1">Role</span>
              {project.category}
            </div>
            <div>
              <span className="block text-sm text-white mb-1">Year</span>
              {project.year}
            </div>
            <div>
              <span className="block text-sm text-white mb-1">Tags</span>
              {project.tags.join(', ')}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-video rounded-3xl mb-24"
          style={{ backgroundColor: project.thumbnail }}
        />

        <div className="max-w-3xl mx-auto prose prose-invert prose-lg mb-32">
          <h2 className="text-3xl font-serif mb-6 text-white">Overview</h2>
          <p className="text-[#888888] leading-relaxed mb-12">
            {project.description}
          </p>
          
          <h2 className="text-3xl font-serif mb-6 text-white">The Challenge</h2>
          <p className="text-[#888888] leading-relaxed mb-12">
            {project.content}
          </p>
        </div>
      </div>
      
      <ContactSection />
    </motion.div>
  );
}
