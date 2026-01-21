
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're celebrating a special occasion or simply treating yourself to a moment of sweetness, our bakery is your go-to destination.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden relative border border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" 
                alt="Happy Customer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-8 left-8">
                <div className="bg-primary text-white p-4 rounded-full shadow-xl">
                  <Quote size={32} className="rotate-180" />
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                "{TESTIMONIALS[0].content}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-secondary">{TESTIMONIALS[0].name}</h4>
                  <p className="text-sm text-primary font-medium">{TESTIMONIALS[0].role}</p>
                </div>
                
                <div className="flex gap-3">
                  <button className="p-3 border border-accent/40 rounded-full hover:bg-primary hover:text-white transition-all">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="p-3 border border-accent/40 rounded-full hover:bg-primary hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
