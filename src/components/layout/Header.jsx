import React from 'react';
import { Menu, Bell, Settings, Search } from 'lucide-react';
import { Button } from '../ui';

export const Header = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 glass-dark border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 rounded-xl glass-hover flex items-center justify-center text-white border border-white/10"
          >
            <Menu className="w-5 h-5" strokeWidth={2.5} />
          </button>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl glass-hover border border-white/10 min-w-[320px]">
            <Search className="w-5 h-5 text-primary-400" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Search anything..."
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-white placeholder:text-primary-400"
            />
            <kbd className="px-2 py-1 text-xs font-semibold text-white bg-white/10 rounded">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" strokeWidth={2.5} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-black"></span>
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="w-5 h-5" strokeWidth={2.5} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
