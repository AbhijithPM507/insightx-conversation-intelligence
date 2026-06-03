import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle, Mic } from 'lucide-react';

const UploadView = () => {
  const [dragActive, setDragActive] = useState(false);
  const [inputType, setInputType] = useState('audio'); // 'audio' or 'text'

  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Mock processing
  };

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight text-accent mb-2">Analyze Conversation</h1>
        <p className="text-primary-400">Upload an audio file or provide a transcript to extract insights.</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card p-1"
      >
        <div className="flex bg-primary-50/50 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setInputType('audio')}
            className={`flex-1 py-3 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${inputType === 'audio' ? 'bg-surface shadow-sm text-accent' : 'text-primary-400 hover:text-primary-600'}`}
          >
            <Mic size={18} /> Audio Upload
          </button>
          <button 
            onClick={() => setInputType('text')}
            className={`flex-1 py-3 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all ${inputType === 'text' ? 'bg-surface shadow-sm text-accent' : 'text-primary-400 hover:text-primary-600'}`}
          >
            <FileText size={18} /> Text Transcript
          </button>
        </div>

        <div className="p-8">
          {inputType === 'audio' ? (
            <div 
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${dragActive ? 'border-primary-500 bg-primary-50/50' : 'border-primary-200 hover:border-primary-300'}`}
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-500">
                <UploadCloud size={32} />
              </div>
              <h3 className="text-lg font-medium text-accent mb-1">Drag and drop your audio file here</h3>
              <p className="text-sm text-primary-400 mb-6">Supports MP3, WAV, M4A up to 50MB</p>
              <button className="px-6 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-primary-900 transition-colors shadow-sm">
                Browse Files
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <label className="block text-sm font-medium text-primary-600">Paste your transcript below:</label>
              <textarea 
                rows={8}
                className="w-full p-4 bg-primary-50/50 border border-primary-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all text-sm resize-none"
                placeholder="Agent: Hello, thank you for calling...&#10;Customer: Hi, I have an issue with my account..."
              ></textarea>
              <div className="flex justify-end">
                <button className="px-6 py-2.5 bg-accent text-white rounded-lg font-medium text-sm hover:bg-primary-900 transition-colors shadow-sm">
                  Analyze Transcript
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default UploadView;
