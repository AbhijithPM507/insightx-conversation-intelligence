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
import Login from './pages/Login';

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen flex bg-background">
    <Sidebar />
    <main className="flex-1 ml-64 flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Wrapped routes with Sidebar and Header */}
        <Route path="/" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/conversations" element={<DashboardLayout><Conversations /></DashboardLayout>} />
        <Route path="/conversations/:id" element={<DashboardLayout><ConversationDetail /></DashboardLayout>} />
        <Route path="/live" element={<DashboardLayout><UploadView /></DashboardLayout>} />
        <Route path="/analytics" element={<DashboardLayout><Analytics /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
