import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const TopAgentCard = ({ name, score, calls, index }) => (
  <div className="flex items-center justify-between p-4 border-b border-primary-50 last:border-0 hover:bg-primary-50/50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold text-xs">
        {index}
      </div>
      <div>
        <p className="text-sm font-medium text-accent">{name}</p>
        <p className="text-xs text-primary-400">{calls} calls analyzed</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-sm font-semibold text-accent">{score}%</p>
      <p className="text-xs text-green-500">Quality Score</p>
    </div>
  </div>
);

const Analytics = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-accent mb-2">Platform Analytics</h1>
        <p className="text-primary-400">Deep dive into conversation trends and agent performance.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-primary-500">Avg Handle Time</h3>
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
              <TrendingUp size={18} />
            </div>
          </div>
          <p className="text-3xl font-semibold text-accent mb-1">08:42</p>
          <p className="text-xs text-red-500 flex items-center gap-1">
            <ArrowUpRight size={14} /> +12% from last week
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-primary-500">Escalation Rate</h3>
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
              <BarChart3 size={18} />
            </div>
          </div>
          <p className="text-3xl font-semibold text-accent mb-1">14.2%</p>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <ArrowDownRight size={14} /> -3.5% from last week
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-medium text-primary-500">Customer Churn Risk</h3>
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
              <Users size={18} />
            </div>
          </div>
          <p className="text-3xl font-semibold text-accent mb-1">8.7%</p>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <ArrowDownRight size={14} /> -1.2% from last week
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-8 min-h-[350px]"
        >
          <h2 className="text-lg font-medium text-accent mb-6">Top Conversation Topics</h2>
          <div className="space-y-4">
            {/* Mock horizontal bar charts */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-primary-600">Billing Issues</span>
                <span className="text-accent">45%</span>
              </div>
              <div className="w-full bg-primary-50 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-primary-600">Technical Support</span>
                <span className="text-accent">28%</span>
              </div>
              <div className="w-full bg-primary-50 rounded-full h-2">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-primary-600">Account Cancellations</span>
                <span className="text-accent">15%</span>
              </div>
              <div className="w-full bg-primary-50 rounded-full h-2">
                <div className="bg-primary-400 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-primary-600">General Inquiries</span>
                <span className="text-accent">12%</span>
              </div>
              <div className="w-full bg-primary-50 rounded-full h-2">
                <div className="bg-primary-300 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass-card p-0 overflow-hidden min-h-[350px]"
        >
          <div className="p-8 pb-4">
            <h2 className="text-lg font-medium text-accent">Top Performing Agents</h2>
            <p className="text-sm text-primary-400">Based on AI-scored resolution quality.</p>
          </div>
          <div className="flex flex-col">
            <TopAgentCard name="Jane Doe" score="94" calls="124" index={1} />
            <TopAgentCard name="Michael Chen" score="91" calls="98" index={2} />
            <TopAgentCard name="Sarah Williams" score="89" calls="145" index={3} />
            <TopAgentCard name="David Miller" score="87" calls="82" index={4} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
