import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Database,
  BarChart3,
  Workflow,
  FolderKanban,
  Search,
  Briefcase,
  Users,
  FileText,
  Code,
  LogIn,
  Menu,
  X,
  Zap,
} from 'lucide-react';
import { Button } from '../ui';

interface NavItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  badge?: string;
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
    // Simulated SSO login - in real app, this would redirect to SSO provider
    setUser({
      name: 'John Doe',
      email: 'john.doe@company.com',
    });
    console.log('SSO Login initiated');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-dark-100 border-r border-dark-200 z-50 transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-200">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              ConnectAI
            </span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-dark-600 hover:text-dark-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto scrollbar-thin p-4 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-3">
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
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? 'bg-primary-600 text-white'
                            : 'text-dark-700 hover:bg-dark-200 hover:text-dark-900'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? 'text-white' : 'text-dark-500 group-hover:text-dark-700'
                          }`}
                        />
                        <span className="font-medium">{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto text-xs bg-primary-600/20 text-primary-400 px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
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
        <div className="p-4 border-t border-dark-200">
          {user ? (
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-dark-200 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark-900 truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-dark-600 truncate">{user.email}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="primary"
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

