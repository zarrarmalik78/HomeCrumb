
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      <div className="bg-surface py-32 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-6"
          >
            Direct Inquiries
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-black text-secondary mb-6"
          >
            Get in <span className="italic font-light">Touch.</span>
          </h1 >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-lg font-medium max-w-xl mx-auto"
          >
            For custom cake requests, artisanal bread subscriptions, or general questions, please send me a message below.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-12 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-accent/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <MessageSquare size={160} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-secondary mb-10">Personal Details</h3>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-2">Location</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">Sector I-10, Islamabad, Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-2">WhatsApp Direct</h4>
                    <p className="text-gray-500 font-medium leading-relaxed">+92 300 0000000</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary uppercase tracking-widest text-xs mb-2">Daily Freshness</h4>
                    <p className="text-gray-500 font-medium leading-relaxed italic">Fresh bakes ready by 9:00 AM daily</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_40px_100px_-30px_rgba(78,52,46,0.15)] border border-accent/10">
              <h3 className="text-4xl font-serif font-bold text-secondary mb-10">Inquiry Form</h3>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-black text-secondary uppercase tracking-[0.2em] px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full px-8 py-5 bg-surface border-none rounded-3xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-secondary"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-secondary uppercase tracking-[0.2em] px-1">Email or Phone</label>
                    <input 
                      type="text" 
                      placeholder="+92 3xx..."
                      className="w-full px-8 py-5 bg-surface border-none rounded-3xl focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-secondary"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-secondary uppercase tracking-[0.2em] px-1">Inquiry Category</label>
                  <div className="relative">
                    <select className="w-full px-8 py-5 bg-surface border-none rounded-3xl focus:ring-2 focus:ring-primary/20 outline-none appearance-none font-medium text-secondary">
                      <option>Custom Cake for Islamabad Delivery</option>
                      <option>Sourdough Subscription Inquiry</option>
                      <option>General Question</option>
                      <option>Event/Party Catering</option>
                    </select>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <Clock size={16} />
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-secondary uppercase tracking-[0.2em] px-1">Your Detailed Message</label>
                  <textarea 
                    rows={6} 
                    placeholder="Describe your request..."
                    className="w-full px-8 py-6 bg-surface border-none rounded-[2rem] focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-all font-medium text-secondary"
                  ></textarea>
                </div>
                <button className="w-full bg-secondary text-white py-6 rounded-full font-bold text-sm uppercase tracking-[0.4em] hover:bg-primary transition-all duration-500 shadow-2xl shadow-secondary/20 flex items-center justify-center gap-4 group">
                  Send Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
