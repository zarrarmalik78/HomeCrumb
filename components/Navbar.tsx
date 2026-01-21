
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact Me', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-xl z-50 border-b border-accent/10 transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-serif text-3xl font-black text-secondary tracking-tight group-hover:text-primary transition-colors"
          >
            HomeCrumb<span className="text-primary group-hover:text-secondary">.</span>
          </motion.span>
        </Link>

        {/* Nav Links Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link 
            to="/contact"
            className="hidden md:flex items-center bg-secondary text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Order Now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-secondary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-accent/20 overflow-hidden"
          >
            <div className="flex flex-col gap-8 py-10 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif font-bold ${
                    isActive(link.path) ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white w-full py-5 rounded-full font-bold text-center uppercase tracking-widest"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
