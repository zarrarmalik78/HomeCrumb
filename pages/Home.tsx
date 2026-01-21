
import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';
import { Leaf, Award, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Short Story In-Home */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1200&auto=format&fit=crop" 
                alt="My Baking Process" 
                className="rounded-[4rem] shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full -z-10 blur-[80px] opacity-40"></div>
            </div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -right-10 bg-secondary p-12 rounded-[2.5rem] shadow-2xl text-white z-20"
            >
              <p className="text-6xl font-serif font-black text-primary">05</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] mt-2 whitespace-nowrap">Years of Passion</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">My Philosophy</h4>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-secondary leading-tight">
                Authenticity in <br /> 
                <span className="italic font-light">Every Batch.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-lg">
                As a solo home baker, I control every variable. No industrial shortcuts, no additives. Just flour, water, salt, and the luxury of time. Handcrafted daily for the community in I-10.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Leaf size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-2">Organic Only</h4>
                  <p className="text-sm text-gray-400 font-medium">Pure local flour and organic dairy for unmatched taste.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-secondary mb-2">Hyper Local</h4>
                  <p className="text-sm text-gray-400 font-medium">Serving Sector I-10 and neighboring Islamabad areas personally.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="inline-flex items-center gap-4 text-secondary font-black text-xs uppercase tracking-widest group">
              Explore My Journey 
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Menu />
      
      <Testimonials />

      {/* Luxury CTA */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary relative overflow-hidden rounded-[4rem] px-12 py-24 md:p-32 text-center"
          >
            {/* Background Grain Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-80 h-80 border border-white/5 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -left-32 w-80 h-80 border border-white/5 rounded-full"
            ></motion.div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">
                Ready to Experience <br /> <span className="text-primary italic font-light">Real Bakery?</span>
              </h2>
              <p className="text-accent/60 text-lg md:text-xl font-medium">
                I take a limited number of custom orders per week to ensure every bake is perfect. Book your slot now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact"
                  className="bg-primary text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-secondary transition-all duration-500 shadow-2xl shadow-primary/20"
                >
                  Book My Order
                </Link>
                <Link 
                  to="/menu"
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-500"
                >
                  See Full Menu
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
