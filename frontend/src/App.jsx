import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Conversations from './pages/Conversations';
import ConversationDetail from './pages/ConversationDetail';
import UploadView from './pages/UploadView';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';

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
              <Route path="/conversations" element={<Conversations />} />
              <Route path="/conversations/:id" element={<ConversationDetail />} />
              <Route path="/live" element={<UploadView />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
