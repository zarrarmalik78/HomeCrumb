
import React from 'react';
import { motion } from 'framer-motion';
import Menu from '../components/Menu';

const MenuPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <div className="bg-surface py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary mb-4">Our Full Menu</h1>
          <p className="text-gray-600">Discover our range of artisanal creations</p>
        </div>
      </div>
      <Menu />
    </motion.div>
  );
};

export default MenuPage;
