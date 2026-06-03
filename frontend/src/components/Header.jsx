import React from 'react';
import { Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="h-20 glass sticky top-0 z-10 flex items-center justify-between px-10"
    >
      <div className="flex items-center gap-2 text-primary-400">
        <span className="text-sm font-medium">Overview</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-300" size={16} />
          <input 
            type="text" 
            placeholder="Search conversations..." 
            className="pl-10 pr-4 py-2 bg-primary-50 border-none rounded-full text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-primary-50 transition-colors text-primary-500 hover:text-accent">
          <Bell size={20} />
          <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
