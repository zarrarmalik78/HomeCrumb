
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-background">
      {/* Abstract Shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-white shadow-sm border border-accent/20 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            Baked with Love in Islamabad
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black text-secondary leading-[1.1] mb-8">
            Elegance <br />
            <span className="text-primary italic font-light tracking-tight">in every bite.</span>
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-medium">
            Discover artisanal sourdough and boutique confections, handcrafted in my Sector I-10 home kitchen. Experience the luxury of real baking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/contact"
              className="bg-secondary text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 shadow-2xl shadow-secondary/20 hover:shadow-primary/30 transform hover:-translate-y-1"
            >
              Order Now <ArrowRight size={18} />
            </Link>
            <Link 
              to="/menu"
              className="bg-white text-secondary border border-accent/30 px-12 py-5 rounded-full font-bold text-sm uppercase tracking-[0.2em] flex items-center justify-center hover:bg-surface transition-all duration-500 transform hover:-translate-y-1"
            >
              The Menu
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-20 flex gap-16 border-t border-accent/10 pt-10"
          >
            <div>
              <span className="block text-4xl font-serif font-bold text-secondary">100%</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 block">Artisanal</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold text-secondary">Home</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 block">Based</span>
            </div>
            <div>
              <span className="block text-4xl font-serif font-bold text-secondary">Pure</span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 block">Ingredients</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 group">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop" 
              alt="Freshly Baked Pastries" 
              className="rounded-[3rem] shadow-2xl object-cover w-full h-[600px] transform transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          
          {/* Floating Detail Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="absolute bottom-12 -left-8 md:-left-12 z-20 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 max-w-[240px]"
          >
            <p className="text-primary font-serif italic text-2xl mb-2">Weekend Specials</p>
            <p className="text-xs font-bold text-secondary/60 leading-relaxed uppercase tracking-wider">
              Limited batches of gourmet croissants every Saturday morning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
