import { useState, useEffect, MouseEvent } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: "Let's Talk", path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled ? 'py-4 bg-bg/80 backdrop-blur-md border-b border-border' : 'py-6 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-serif font-bold tracking-tighter z-50 relative">
            Portfolio<span className="text-accent">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'relative text-sm font-medium transition-colors hover:text-accent',
                    isActive ? 'text-accent' : 'text-muted'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <NavLink
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-hover"
              >
                Let's Talk
              </NavLink>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50 relative">
            <ThemeToggle />
            <button
              className="text-text p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-bg flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        'text-4xl font-serif transition-colors',
                        isActive ? 'text-accent' : 'text-text hover:text-accent'
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
