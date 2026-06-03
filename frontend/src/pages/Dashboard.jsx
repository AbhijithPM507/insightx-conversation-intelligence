import React from 'react';
import { motion } from 'framer-motion';
import { Users, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, change, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="glass-card p-6 flex flex-col justify-between"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-primary-50 rounded-xl text-primary-600">
        {icon}
      </div>
      <span className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
    <div>
      <h3 className="text-primary-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-3xl font-semibold tracking-tight text-accent">{value}</p>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-semibold tracking-tight text-accent mb-2">Welcome back, Jane.</h1>
        <p className="text-primary-400">Here's what's happening with your customer conversations today.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Analyzed" value="1,248" change="+12%" icon={<Users size={24} />} delay={0.2} />
        <StatCard title="Avg Sentiment" value="78%" change="+5%" icon={<TrendingUp size={24} />} delay={0.3} />
        <StatCard title="High Risk Calls" value="34" change="-2%" icon={<AlertTriangle size={24} />} delay={0.4} />
        <StatCard title="Resolved Issues" value="892" change="+18%" icon={<CheckCircle size={24} />} delay={0.5} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="lg:col-span-2 glass-card p-8 min-h-[400px]"
        >
          <h2 className="text-lg font-semibold text-accent mb-6">Recent Conversations Insights</h2>
          <div className="flex items-center justify-center h-64 text-primary-300">
            [Chart Area - Trends over time]
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="glass-card p-8 min-h-[400px]"
        >
          <h2 className="text-lg font-semibold text-accent mb-6">Risk Breakdown</h2>
          <div className="flex items-center justify-center h-64 text-primary-300">
            [Doughnut Chart Area]
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
