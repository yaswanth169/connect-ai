import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus, FiSearch, FiFilter, FiTrendingUp, FiCheckCircle, FiPackage } from 'react-icons/fi';
import { GlassCard, Button, Badge, Input, Loader, SkeletonCard } from '../components/ui';
import RequestIntegrationModal from '../components/RequestIntegrationModal';
import sourcesData from '../data/sources.json';
import { getIcon } from '../utils/iconMap';

export const Sources = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [sources, setSources] = useState([]);
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSources(sourcesData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const available = sources.filter((s) => s.status === 'available').length;
  const popular = sources.filter((s) => s.popular).length;

  const filteredSources = sources.filter((source) =>
    source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    source.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Loader fullScreen tip="Loading sources..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-3">
                <span className="text-gradient">Software Tools</span>
              </h1>
              <p className="text-xl text-primary-300">
                Connect your business tools to AI-powered automation
              </p>
            </div>
            <Button 
              icon={FiPlus} 
              size="lg" 
              className="lg:w-auto"
              onClick={() => setRequestModalOpen(true)}
            >
              Request Integration
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <GlassCard hover className="group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-primary-300 mb-2">Total Tools</p>
                <p className="text-4xl font-bold text-white">{sources.length}</p>
                <p className="text-xs text-primary-400 mt-2 font-medium">Available integrations</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FiPackage className="w-8 h-8 text-white" />
              </div>
            </div>
          </GlassCard>

          <GlassCard hover className="group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-green-400 mb-2">Available</p>
                <p className="text-4xl font-bold text-green-500">{available}</p>
                <p className="text-xs text-green-400 mt-2 font-medium flex items-center gap-1">
                  <FiTrendingUp className="w-3 h-3" />
                  Ready to connect
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <FiCheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </GlassCard>

          <GlassCard hover className="group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-amber-400 mb-2">Popular</p>
                <p className="text-4xl font-bold text-amber-500">{popular}</p>
                <p className="text-xs text-amber-400 mt-2 font-medium">Most requested</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <FiTrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search by name, type, or category..."
              icon={FiSearch}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="secondary" icon={FiFilter}>
            Filters
          </Button>
        </div>

        {/* Sources List */}
        <div className="space-y-4 animate-slide-up">
          {filteredSources.map((source, index) => {
            const Icon = getIcon(source.icon);
            return (
              <GlassCard
                key={source.id}
                hover
                onClick={() => navigate(`/sources/${source.id}`)}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon and Main Info */}
                  <div className="flex items-start lg:items-center gap-4 flex-1">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {source.popular && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-2 border-black">
                          <FiTrendingUp className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                          {source.name}
                        </h3>
                        <Badge variant={source.status === 'available' ? 'success' : 'default'}>
                          {source.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary-300 mb-3 line-clamp-1">
                        {source.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-primary-400">
                        <span className="flex items-center gap-1.5">
                          <FiPackage className="w-3.5 h-3.5" />
                          {source.type}
                        </span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span className="flex items-center gap-1.5">
                          <FiCheckCircle className="w-3.5 h-3.5" />
                          {source.provider}
                        </span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span>{source.toolsCount} tools</span>
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        <span className="text-green-400">
                          {source.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={FiCheckCircle}
                    iconPosition="right"
                    className="lg:w-auto group-hover:bg-primary-100/50"
                  >
                    View Tools
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredSources.length === 0 && (
          <div className="text-center py-24">
            <GlassCard className="max-w-2xl mx-auto">
              <div className="py-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FiSearch className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  No tools found
                </h3>
                <p className="text-primary-300 mb-8">
                  Try adjusting your search terms or explore all available tools
                </p>
                <Button variant="primary" onClick={() => setSearchQuery('')}>
                  Clear Search
                </Button>
              </div>
            </GlassCard>
          </div>
        )}
      </div>

      {/* Request Integration Modal */}
      <RequestIntegrationModal 
        isOpen={requestModalOpen}
        onClose={() => setRequestModalOpen(false)}
      />
    </div>
  );
};

export default Sources;
