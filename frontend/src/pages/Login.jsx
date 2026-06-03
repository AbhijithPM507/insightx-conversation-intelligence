import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, perform auth here. For now, we just redirect.
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient light effects for that sleek dark mode vibe */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-accent flex items-center justify-center gap-2">
            Insight<span className="text-primary-400">X</span>
          </h1>
          <p className="text-primary-400 mt-3 text-sm">Sign in to your enterprise dashboard</p>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-600 block">Work Email</label>
              <input 
                type="email" 
                placeholder="name@company.com"
                required
                className="w-full px-4 py-3 bg-primary-50/50 border border-primary-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm text-accent transition-all placeholder:text-primary-300"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center block">
                <label className="text-sm font-medium text-primary-600">Password</label>
                <a href="#" className="text-xs text-primary-400 hover:text-accent transition-colors">Forgot password?</a>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-primary-50/50 border border-primary-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 text-sm text-accent transition-all placeholder:text-primary-300"
              />
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-primary-950 rounded-xl font-medium text-sm hover:bg-primary-900 hover:text-white transition-all shadow-lg shadow-accent/10 mt-4 group"
            >
              <span>Sign In</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-primary-500">
            <p>Don't have an account? <a href="#" className="text-accent hover:underline">Contact Sales</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
