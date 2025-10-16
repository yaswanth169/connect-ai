import React from 'react';
import { Menu, Bell, Settings } from 'lucide-react';
import { Button } from '../ui';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 bg-dark-100/80 backdrop-blur-md border-b border-dark-200">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden text-dark-700 hover:text-dark-900 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden sm:block">
            <h1 className="text-xl font-semibold text-dark-900">Connect Data to AI</h1>
            <p className="text-sm text-dark-600">Seamlessly integrate your business data</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

