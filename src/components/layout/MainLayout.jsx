import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import ChatBot from '../ChatBot';

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111111]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:pl-80">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="min-h-screen">
          <Outlet />
        </main>
      </div>

      {/* Floating Chatbot */}
      <ChatBot />
    </div>
  );
};

export default MainLayout;
