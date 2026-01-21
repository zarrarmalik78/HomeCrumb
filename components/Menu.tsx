
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants.tsx';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-32 bg-background" id="menu">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-black text-secondary mb-6"
            >
              The Collection
            </motion.h2>
            <p className="text-gray-500 text-lg font-medium">
              Every item is a result of hours of patient fermentation and precision. 
              Handcrafted in small batches to ensure absolute perfection for my Islamabad neighbors.
            </p>
          </div>
          
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 border ${
                  activeCategory === cat.value
                    ? 'bg-secondary text-white border-secondary shadow-lg'
                    : 'bg-white text-gray-400 border-accent/20 hover:border-primary/40 hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                variants={item}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-accent/10 hover:shadow-[0_40px_80px_-20px_rgba(78,52,46,0.12)] transition-all duration-700 flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl">
                    <Star size={14} className="fill-primary text-primary" />
                    <span className="text-[10px] font-black text-secondary tracking-widest">{product.rating}</span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    <Link 
                      to="/contact"
                      className="w-full bg-white text-secondary py-4 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                      Inquire Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
                
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-lg font-black text-primary">Rs. {product.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-0 leading-relaxed font-medium">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
