import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-background">
        <Sidebar />
        
        <main className="flex-1 ml-64 flex flex-col min-h-screen">
          <Header />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/conversations" element={<div className="p-10"><h2 className="text-2xl font-semibold">Conversations</h2></div>} />
              <Route path="/live" element={<div className="p-10"><h2 className="text-2xl font-semibold">Live Calls</h2></div>} />
              <Route path="/analytics" element={<div className="p-10"><h2 className="text-2xl font-semibold">Analytics</h2></div>} />
              <Route path="/settings" element={<div className="p-10"><h2 className="text-2xl font-semibold">Settings</h2></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
