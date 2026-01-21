
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-accent/80 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-serif font-bold text-white">HomeCrumb</Link>
            <p className="text-sm leading-relaxed">
              Crafting joy through artisanal bakes. Every loaf and cookie is handmade with love in my home kitchen in Islamabad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">About</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">My Story</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">The Menu</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Me</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/menu" className="hover:text-primary transition-colors">Artisanal Bread</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Signature Cookies</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Custom Cakes</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Pastry Selection</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-6">Get in Touch</h4>
            <div className="flex gap-3 items-start">
              <MapPin size={18} className="text-primary shrink-0" />
              <p className="text-sm">Sector I-10, Islamabad, Pakistan</p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={18} className="text-primary shrink-0" />
              <p className="text-sm">+92 300 0000000</p>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={18} className="text-primary shrink-0" />
              <p className="text-sm">hello@homecrumb.bakery</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 HomeCrumb Bakery Islamabad. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
