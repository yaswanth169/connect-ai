import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Database,
  Workflow,
  FolderKanban,
  Search,
  Briefcase,
  Users,
  FileText,
  Code,
  LogIn,
  X,
  Zap,
  Sparkles,
  LogOut,
} from 'lucide-react';
import { Button } from '../ui';

interface NavItem {
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigationSections: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    ],
  },
  {
    title: 'Data',
    items: [
      { label: 'Sources', icon: Database, path: '/sources' },
      { label: 'Integrations', icon: Zap, path: '/integrations' },
      { label: 'Workspaces', icon: FolderKanban, path: '/workspaces' },
      { label: 'Explorer', icon: Search, path: '/explorer' },
      { label: 'Jobs', icon: Briefcase, path: '/jobs' },
    ],
  },
  {
    title: 'Manage',
    items: [
      { label: 'Users', icon: Users, path: '/users' },
      { label: 'Logs', icon: FileText, path: '/logs' },
    ],
  },
  {
    title: 'Documentation',
    items: [
      { label: 'API', icon: Code, path: '/api' },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleSSOLogin = () => {
    setUser({
      name: 'John Doe',
      email: 'john.doe@company.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-80 glass-dark border-r border-primary-700/30 z-50 transition-transform duration-500 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Workflow className="w-7 h-7 text-black" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-2xl font-bold text-white block leading-tight">
                  ConnectAI
                </span>
                <span className="text-xs text-primary-300 font-medium">Enterprise Platform</span>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-8">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-bold text-primary-300 uppercase tracking-wider mb-4 px-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            onClose();
                          }
                        }}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                          isActive
                            ? 'bg-white text-black shadow-lg'
                            : 'text-primary-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? 'text-black' : 'text-primary-400 group-hover:text-white'
                          }`}
                          strokeWidth={2.5}
                        />
                        <span className="font-semibold">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-black rounded-full" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* SSO Login Section */}
        <div className="p-4 border-t border-white/10">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-primary-400 truncate">{user.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={handleLogout}
                icon={LogOut}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="md"
              icon={LogIn}
              className="w-full"
              onClick={handleSSOLogin}
            >
              SSO Login
            </Button>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
