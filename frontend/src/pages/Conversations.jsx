import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MOCK_CONVERSATIONS = [
  { id: '1', date: '2 mins ago', agent: 'Jane Doe', customer: 'Acme Corp', duration: '04:12', risk: 'Low', intent: 'Billing Support', status: 'Resolved' },
  { id: '2', date: '15 mins ago', agent: 'Jane Doe', customer: 'Global Tech', duration: '12:45', risk: 'High', intent: 'Account Cancellation', status: 'Escalated' },
  { id: '3', date: '1 hour ago', agent: 'Mark Smith', customer: 'Startup Inc', duration: '08:30', risk: 'Medium', intent: 'Feature Request', status: 'Pending' },
  { id: '4', date: '3 hours ago', agent: 'Jane Doe', customer: 'Local Shop', duration: '02:15', risk: 'Low', intent: 'Password Reset', status: 'Resolved' },
  { id: '5', date: 'Yesterday', agent: 'Mark Smith', customer: 'Enterprise Co', duration: '25:10', risk: 'High', intent: 'Service Outage', status: 'Escalated' },
];

const getRiskBadge = (risk) => {
  switch (risk) {
    case 'High': return <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">High Risk</span>;
    case 'Medium': return <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-600 rounded-md">Medium Risk</span>;
    default: return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-600 rounded-md">Low Risk</span>;
  }
};

const Conversations = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-accent mb-2">Conversations</h1>
          <p className="text-primary-400">Review and analyze past interactions.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors font-medium text-sm">
            <Filter size={16} /> Filter
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card overflow-hidden"
      >
        <div className="p-4 border-b border-primary-50 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-300" size={16} />
            <input 
              type="text" 
              placeholder="Search by customer, intent, or ID..." 
              className="w-full pl-10 pr-4 py-2 bg-primary-50 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-primary-400 uppercase bg-primary-50/50">
              <tr>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Primary Intent</th>
                <th className="px-6 py-4 font-medium">Agent</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium">Risk Score</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CONVERSATIONS.map((conv, index) => (
                <motion.tr 
                  onClick={() => navigate(`/conversations/${conv.id}`)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.05) }}
                  key={conv.id} 
                  className="border-b border-primary-50 hover:bg-primary-50/30 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 font-medium text-accent">{conv.customer}</td>
                  <td className="px-6 py-4 text-primary-500">{conv.date}</td>
                  <td className="px-6 py-4 text-primary-600 font-medium">{conv.intent}</td>
                  <td className="px-6 py-4 text-primary-500">{conv.agent}</td>
                  <td className="px-6 py-4 text-primary-500">{conv.duration}</td>
                  <td className="px-6 py-4">{getRiskBadge(conv.risk)}</td>
                  <td className="px-6 py-4 text-primary-500">{conv.status}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary-400 hover:text-accent transition-colors p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-primary-50 text-center text-sm text-primary-400">
          Showing 5 of 1,248 conversations
        </div>
      </motion.div>
    </div>
  );
};

export default Conversations;
