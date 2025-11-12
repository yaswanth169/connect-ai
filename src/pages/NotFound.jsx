import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button, GlassCard } from '../components/ui';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center px-4">
      <GlassCard hover className="max-w-2xl w-full">
        <div className="text-center py-16 px-8">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-white/10 mb-6">
              <Search className="w-16 h-16 text-primary-400" strokeWidth={2} />
            </div>
            <h1 className="text-9xl font-bold mb-4">
              <span className="text-gradient">404</span>
            </h1>
            <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-xl text-primary-300 max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Return to BPAZ MCP dashboard.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button icon={Home} size="lg">
                Go to Homepage
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              icon={ArrowLeft} 
              size="lg"
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default NotFound;
