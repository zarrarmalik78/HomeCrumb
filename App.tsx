import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart, Search, Menu as MenuIcon, X, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import Home from './pages/Home.tsx';
import MenuPage from './pages/MenuPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import StoryPage from './pages/StoryPage.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<StoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;