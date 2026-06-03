import React from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Key, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-accent mb-2">Settings</h1>
        <p className="text-primary-400">Manage your account and platform preferences.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-1 space-y-2"
        >
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-white text-accent rounded-xl shadow-sm border border-primary-100 font-medium text-sm transition-all">
            <User size={18} /> Profile
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-primary-500 hover:bg-primary-50 rounded-xl font-medium text-sm transition-all">
            <Key size={18} /> API Keys
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-primary-500 hover:bg-primary-50 rounded-xl font-medium text-sm transition-all">
            <Bell size={18} /> Notifications
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-primary-500 hover:bg-primary-50 rounded-xl font-medium text-sm transition-all">
            <Shield size={18} /> Compliance Rules
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-3 space-y-6"
        >
          <div className="glass-card p-8">
            <h2 className="text-lg font-medium text-accent mb-6">Personal Information</h2>
            
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-600">First Name</label>
                  <input 
                    type="text" 
                    defaultValue="Jane"
                    className="w-full px-4 py-2.5 bg-primary-50/50 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm text-accent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-600">Last Name</label>
                  <input 
                    type="text" 
                    defaultValue="Doe"
                    className="w-full px-4 py-2.5 bg-primary-50/50 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm text-accent"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-600">Email Address</label>
                <input 
                  type="email" 
                  defaultValue="jane.doe@example.com"
                  className="w-full px-4 py-2.5 bg-primary-50/50 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm text-accent"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-primary-900 transition-colors shadow-sm">
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-lg font-medium text-accent mb-2">Theme Preferences</h2>
            <p className="text-sm text-primary-400 mb-6">Customize the look and feel of your dashboard.</p>
            
            <div className="flex gap-4">
              <div className="flex-1 p-4 border-2 border-accent rounded-xl bg-white flex items-center justify-center cursor-pointer relative overflow-hidden">
                <div className="absolute top-2 right-2 w-4 h-4 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <span className="font-medium text-accent text-sm">Light Mode (Active)</span>
              </div>
              <div className="flex-1 p-4 border border-primary-100 rounded-xl bg-primary-950 flex items-center justify-center cursor-pointer hover:border-primary-300 transition-colors">
                <span className="font-medium text-white text-sm">Dark Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
