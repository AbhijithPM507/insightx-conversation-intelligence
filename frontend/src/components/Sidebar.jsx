import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Activity, Settings, PhoneCall, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Conversations', icon: <MessageSquare size={20} />, path: '/conversations' },
    { name: 'Live Calls', icon: <PhoneCall size={20} />, path: '/live' },
    { name: 'Analytics', icon: <Activity size={20} />, path: '/analytics' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  const handleLogout = () => {
    // Perform any logout logic here
    navigate('/login');
  };

  return (
    <motion.aside 
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-64 h-screen fixed left-0 top-0 border-r border-primary-100 bg-surface flex flex-col z-20"
    >
      <div className="h-20 flex items-center px-8 border-b border-primary-50">
        <h1 className="text-xl font-semibold tracking-tight text-accent">Insight<span className="text-primary-400">X</span></h1>
      </div>
      
      <nav className="flex-1 px-4 py-8 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-accent text-black shadow-md' 
                  : 'text-primary-500 hover:bg-primary-50 hover:text-accent'
              }`
            }
          >
            {item.icon}
            <span className="font-medium text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6 border-t border-primary-50 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-accent">Jane Doe</p>
            <p className="text-xs text-primary-400">Admin</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-red-500 hover:bg-red-500/10 rounded-xl font-medium text-sm transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
