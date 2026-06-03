import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, ShieldAlert, CheckCircle, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsightCard = ({ title, value, icon, type }) => {
  const getColor = () => {
    if (type === 'risk' && value > 70) return 'text-red-500 bg-red-50';
    if (type === 'risk' && value > 40) return 'text-yellow-500 bg-yellow-50';
    if (type === 'risk') return 'text-green-500 bg-green-50';
    return 'text-primary-600 bg-primary-50';
  };

  return (
    <div className="glass-card p-5">
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${getColor()}`}>
          {icon}
        </div>
        <h3 className="text-sm font-medium text-primary-500">{title}</h3>
      </div>
      <p className="text-2xl font-semibold text-accent">{type === 'risk' ? `${value}%` : value}</p>
    </div>
  );
};

const ConversationDetail = () => {
  return (
    <div className="p-10 max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/conversations" className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-accent transition-colors mb-4">
          <ArrowLeft size={16} /> Back to list
        </Link>
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-accent mb-2">Call with Global Tech</h1>
            <p className="text-primary-400 flex items-center gap-4 text-sm">
              <span>Oct 24, 2023 at 2:30 PM</span>
              <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
              <span>Agent: Jane Doe</span>
              <span className="w-1 h-1 bg-primary-300 rounded-full"></span>
              <span>Duration: 12:45</span>
            </p>
          </div>
          <div className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full flex items-center gap-2">
            <ShieldAlert size={16} /> High Risk
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="glass-card p-6">
            <h2 className="text-lg font-medium text-accent mb-4">AI Summary</h2>
            <p className="text-primary-600 leading-relaxed text-sm">
              The customer called to discuss a recent service outage that affected their production environment. They were highly frustrated as this is the second time this month. The agent apologized and offered a partial credit for the downtime. The customer stated they might consider canceling their contract if the issue persists.
            </p>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-lg font-medium text-accent mb-4">Transcript</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {/* Mock transcript bubbles */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center text-primary-500 font-medium text-xs">AG</div>
                <div className="bg-primary-50 p-4 rounded-2xl rounded-tl-none">
                  <p className="text-sm text-primary-600">Thank you for calling support, this is Jane. How can I help you today?</p>
                </div>
              </div>
              
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-primary-950 font-medium text-xs">CU</div>
                <div className="bg-surface border border-primary-100 p-4 rounded-2xl rounded-tr-none shadow-sm">
                  <p className="text-sm text-primary-600">Hi Jane. I'm calling because our system went down again for the second time this month. This is unacceptable, we are losing money.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex-shrink-0 flex items-center justify-center text-primary-500 font-medium text-xs">AG</div>
                <div className="bg-primary-50 p-4 rounded-2xl rounded-tl-none">
                  <p className="text-sm text-primary-600">I am so sorry to hear that you are experiencing downtime. Let me pull up your account immediately and see what's happening on our end.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-4">
            <InsightCard title="Risk Score" value={85} icon={<ShieldAlert size={20} />} type="risk" />
            <InsightCard title="Sentiment" value="Negative" icon={<BarChart2 size={20} />} type="text" />
            <InsightCard title="Intent" value="Cancellation" icon={<User size={20} />} type="text" />
            <InsightCard title="Resolved" value="No" icon={<CheckCircle size={20} />} type="text" />
          </div>

          <div className="glass-card p-6">
            <h2 className="text-sm font-medium text-primary-500 uppercase tracking-wider mb-4">Key Entities</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-xs font-medium text-primary-600">Service Outage</span>
              <span className="px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-xs font-medium text-primary-600">Production Env</span>
              <span className="px-3 py-1 bg-primary-50 border border-primary-100 rounded-full text-xs font-medium text-primary-600">Partial Credit</span>
              <span className="px-3 py-1 bg-red-50 border border-red-100 rounded-full text-xs font-medium text-red-600">Contract Cancellation</span>
            </div>
          </div>
          
          <div className="glass-card p-6">
            <h2 className="text-sm font-medium text-primary-500 uppercase tracking-wider mb-4">Agent Feedback</h2>
            <p className="text-sm text-primary-600 mb-3">
              <span className="font-semibold text-accent">Positives:</span> Agent was polite and apologized promptly.
            </p>
            <p className="text-sm text-primary-600">
              <span className="font-semibold text-accent">Improvement:</span> Agent could have escalated to a technical manager sooner given the account value.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConversationDetail;
