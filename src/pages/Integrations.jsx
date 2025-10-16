import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSearch, FiFilter, FiZap, FiCheck, FiExternalLink, FiCpu, FiCode, FiCloud, FiStar } from 'react-icons/fi';
import { GlassCard, Input, Button, Badge, Loader, SkeletonCard } from '../components/ui';
import integrationsData from '../data/integrations.json';
import { getIcon } from '../utils/iconMap';

const categories = ['All', 'LLM', 'Cloud Platform', 'Open Source', 'Custom'];

const categoryIcons = {
  'All': <FiZap className="w-4 h-4" />,
  'LLM': <FiCpu className="w-4 h-4" />,
  'Cloud Platform': <FiCloud className="w-4 h-4" />,
  'Open Source': <FiCode className="w-4 h-4" />,
  'Custom': <FiStar className="w-4 h-4" />,
};

export const Integrations = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProvider, setSelectedProvider] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [models, setModels] = useState([]);
  const [showProviderFilter, setShowProviderFilter] = useState(false);
  
  const sourceTool = location.state?.from;

  useEffect(() => {
    const timer = setTimeout(() => {
      setModels(integrationsData);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Get unique providers
  const providers = ['All', ...new Set(models.map(m => m.provider))];

  const filteredIntegrations = models.filter((integration) => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesProvider = selectedProvider === 'All' || integration.provider === selectedProvider;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesProvider && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Loader fullScreen tip="Loading AI models..." />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          {sourceTool && (
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
              <FiCheck className="w-4 h-4 text-green-500" />
              <span className="text-sm font-semibold text-white">Connecting from: {sourceTool}</span>
            </div>
          )}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <FiZap className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">{models.length}+ AI Models Available</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient">Choose Your AI Model</span>
          </h1>
          
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Select from leading AI models and connect them to your tools via MCP protocol. 
            Powerful integrations for intelligent automation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by model name or provider..."
                icon={FiSearch}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button 
              variant="secondary" 
              icon={FiFilter} 
              className="lg:w-auto"
              onClick={() => setShowProviderFilter(!showProviderFilter)}
            >
              {selectedProvider !== 'All' ? selectedProvider : 'Filter by Provider'}
            </Button>
          </div>

          {/* Provider Filter Dropdown */}
          {showProviderFilter && (
            <div className="animate-slide-up">
              <GlassCard className="p-4">
                <div className="flex flex-wrap items-center gap-3">
                  {providers.map((provider) => (
                    <button
                      key={provider}
                      onClick={() => {
                        setSelectedProvider(provider);
                        setShowProviderFilter(false);
                      }}
                      className={`px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        selectedProvider === provider
                          ? 'bg-white text-black shadow-lg'
                          : 'glass-hover text-white'
                      }`}
                    >
                      {provider}
                    </button>
                  ))}
                </div>
              </GlassCard>
            </div>
          )}

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-white text-black shadow-xl'
                    : 'glass hover:shadow-glass-lg text-white'
                  }
                `}
              >
                {categoryIcons[category]}
                {category}
                {selectedCategory === category && (
                  <FiCheck className="w-4 h-4 ml-1" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary-300">
            Showing <span className="text-white text-lg">{filteredIntegrations.length}</span> integration{filteredIntegrations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Integrations Grid */}
        {filteredIntegrations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-slide-up">
            {filteredIntegrations.map((integration, index) => {
              const Icon = getIcon(integration.icon);
              return (
                <GlassCard
                  key={integration.id}
                  hover
                  onClick={() => navigate(`/models/${integration.id}`, { state: { from: sourceTool } })}
                  className="group relative overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Connected Badge */}
                  {integration.connected && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="success" className="shadow-lg">
                        <FiCheck className="w-3 h-3 mr-1" />
                        Connected
                      </Badge>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {integration.connected && (
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-black">
                          <FiCheck className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3 mb-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                        {integration.name}
                      </h3>
                      <Badge variant="info" className="inline-block">
                        {integration.provider}
                      </Badge>
                      <p className="text-sm text-primary-300 font-medium">
                        {integration.contextWindow} • {integration.pricing}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      {integration.connected ? (
                        <>
                          <Button
                            size="sm"
                            variant="secondary"
                            icon={FiExternalLink}
                            iconPosition="right"
                            className="flex-1"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/models/${integration.id}`, { state: { from: sourceTool } });
                            }}
                          >
                            View Docs
                          </Button>
                        </>
                      ) : (
                        <Button
                          size="sm"
                          variant="primary"
                          icon={FiZap}
                          className="flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/models/${integration.id}`, { state: { from: sourceTool } });
                          }}
                        >
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </GlassCard>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-24">
            <GlassCard className="max-w-2xl mx-auto">
              <div className="py-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <FiSearch className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  No models found
                </h3>
                <p className="text-primary-300 mb-8 max-w-md mx-auto">
                  We couldn't find any AI models matching your search. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Popular Models Section */}
        {searchQuery === '' && selectedCategory === 'All' && (
          <div className="mt-24">
            <GlassCard className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">Most Popular</span>
                </h2>
                <p className="text-primary-300 text-lg">
                  These AI models are trusted by leading enterprises
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {models.filter(i => i.connected).map((integration) => {
                  const Icon = getIcon(integration.icon);
                  return (
                    <div
                      key={integration.id}
                      className="text-center space-y-3 group cursor-pointer"
                      onClick={() => navigate(`/models/${integration.id}`, { state: { from: sourceTool } })}
                    >
                      <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="font-semibold text-white">{integration.name}</div>
                      <div className="flex items-center justify-center gap-1 text-green-400 text-sm font-semibold">
                        <FiCheck className="w-4 h-4" />
                        Connected
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Integrations;
