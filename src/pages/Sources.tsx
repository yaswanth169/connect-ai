import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Database, Plus, Search, ArrowRight, TrendingUp, 
  Server, Activity, CheckCircle2, XCircle, Filter 
} from 'lucide-react';
import { GlassCard, Button, Badge, Input } from '../components/ui';
import sourcesData from '../data/sources.json';

export const Sources: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const connected = sourcesData.filter((s) => s.status === 'connected').length;
  const offline = sourcesData.filter((s) => s.status === 'offline').length;

  const filteredSources = sourcesData.filter((source) =>
    source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-3">
                <span className="text-gradient">Data Sources</span>
              </h1>
              <p className="text-xl text-primary-300">
                Manage and monitor all your connected data sources
              </p>
            </div>
            <Button icon={Plus} size="lg" className="lg:w-auto">
              Add New Source
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <GlassCard hover className="group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-300 mb-2">Total Sources</p>
                <p className="text-4xl font-bold text-white">{sourcesData.length}</p>
                <p className="text-xs text-primary-400 mt-2 font-medium">Active connections</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-black" strokeWidth={2.5} />
              </div>
            </div>
          </GlassCard>

          <GlassCard hover className="group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-green-600 mb-2">Connected</p>
                <p className="text-4xl font-bold text-green-700">{connected}</p>
                <p className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  All systems operational
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </GlassCard>

          <GlassCard hover className="group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-red-600 mb-2">Offline</p>
                <p className="text-4xl font-bold text-red-700">{offline}</p>
                <p className="text-xs text-red-600 mt-2 font-medium">Requires attention</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-red-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <XCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by name or type..."
              icon={Search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="secondary" icon={Filter}>
            Filters
          </Button>
        </div>

        {/* Sources List */}
        <div className="space-y-4 animate-slide-up">
          {filteredSources.map((source, index) => (
            <GlassCard
              key={source.id}
              hover
              onClick={() => navigate(`/sources/${source.id}`)}
              className="group cursor-pointer transform"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon and Main Info */}
                <div className="flex items-start lg:items-center gap-4 flex-1">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <Database className="w-8 h-8 text-black" strokeWidth={2.5} />
                    </div>
                    {source.status === 'connected' ? (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-black">
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-black">
                        <XCircle className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                        {source.name}
                      </h3>
                      <Badge variant={source.status === 'connected' ? 'success' : 'danger'}>
                        {source.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-primary-300 mb-3 line-clamp-1">
                      {source.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-primary-400">
                      <span className="flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {source.type}
                      </span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span className="flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {source.rows.toLocaleString()} rows
                      </span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span>{source.tables} tables</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span>{source.size}</span>
                      <span className="w-1 h-1 bg-white/30 rounded-full" />
                      <span className="flex items-center gap-1.5 text-green-400">
                        <Activity className="w-3.5 h-3.5" strokeWidth={2.5} />
                        {source.uptime} uptime
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                  className="lg:w-auto group-hover:bg-primary-100/50"
                >
                  View Details
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredSources.length === 0 && (
          <div className="text-center py-24">
            <GlassCard className="max-w-2xl mx-auto">
              <div className="py-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary-100/50 flex items-center justify-center">
                  <Search className="w-12 h-12 text-primary-400" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  No sources found
                </h3>
                <p className="text-primary-300 mb-8">
                  Try adjusting your search terms
                </p>
                <Button variant="primary" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sources;
