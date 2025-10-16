import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="lg:pl-80">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

