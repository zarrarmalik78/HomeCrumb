
import React from 'react';
import { motion } from 'framer-motion';

const StoryPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <div className="bg-surface py-20 text-center mb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-4">My Story</h1>
          <p className="text-gray-600">Handcrafted with love from Sector I-10, Islamabad</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1556217477-d32525143809?q=80&w=1200&auto=format&fit=crop" 
            alt="My Kitchen" 
            className="rounded-[2rem] shadow-xl mb-12 w-full h-[400px] object-cover"
          />
          <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Artisan Baking in the Heart of the City</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            HomeCrumb began in my personal kitchen in Sector I-10 with a single oven and a passion for slow-fermented bread. I believe that Islamabad deserves the purest form of artisanal baking—free from preservatives and full of flavor.
          </p>
          <p className="text-gray-600 mb-12 leading-relaxed">
            As a one-person operation, I handle everything from kneading the dough at 4 AM to personally ensuring every order arrives fresh at your doorstep. My mission is to provide my community with the highest quality, handmade treats that you won't find in any commercial bakery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-surface p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-secondary mb-4">My Mission</h3>
              <p className="text-sm text-gray-500">To provide Islamabad residents with authentic, high-quality artisanal bakes made with local integrity.</p>
            </div>
            <div className="bg-surface p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-secondary mb-4">My Values</h3>
              <p className="text-sm text-gray-500">Patience in fermentation, precision in ingredients, and personal care for every neighbor.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StoryPage;
