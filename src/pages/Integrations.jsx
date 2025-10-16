import React, { useState } from 'react';
import { Search, Filter, Sparkles, Check, ExternalLink, Star, TrendingUp, Zap } from 'lucide-react';
import { GlassCard, Input, Button, Badge } from '../components/ui';
import integrationsData from '../data/integrations.json';

const categories = ['All', 'AI', 'BI & Reporting', 'Dev', 'ETL', 'iPaaS', 'No-Code/Low-Code', 'CRM', 'ERP'];

const categoryIcons = {
  'All': <Sparkles className="w-4 h-4" strokeWidth={2.5} />,
  'AI': <Zap className="w-4 h-4" strokeWidth={2.5} />,
  'BI & Reporting': <TrendingUp className="w-4 h-4" strokeWidth={2.5} />,
  'CRM': <Star className="w-4 h-4" strokeWidth={2.5} />,
};

export const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIntegrations = integrationsData.filter((integration) => {
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
            <span className="text-sm font-semibold text-white">270+ Integrations Available</span>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient">Connect Everything</span>
          </h1>
          
          <p className="text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed">
            Seamlessly integrate with leading AI platforms, business tools, and data sources. 
            One click to connect, infinite possibilities to explore.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search integrations by name or category..."
                icon={Search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg"
              />
            </div>
            <Button variant="secondary" icon={Filter} className="lg:w-auto">
              Advanced Filters
            </Button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300 transform hover:scale-105
                  ${selectedCategory === category
                    ? 'bg-white text-black shadow-xl'
                    : 'glass hover:shadow-glass-lg text-white'
                  }
                `}
              >
                {categoryIcons[category]}
                {category}
                {selectedCategory === category && (
                  <Check className="w-4 h-4 ml-1" strokeWidth={3} />
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
            {filteredIntegrations.map((integration, index) => (
              <GlassCard
                key={integration.id}
                hover
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Connected Badge */}
                {integration.connected && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="success" className="shadow-lg">
                      <Check className="w-3 h-3 mr-1" strokeWidth={3} />
                      Connected
                    </Badge>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-4xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      {integration.icon}
                    </div>
                    {integration.connected && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-black">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                      {integration.name}
                    </h3>
                    <Badge variant="default" className="inline-block">
                      {integration.category}
                    </Badge>
                    <p className="text-sm text-primary-300 font-medium">
                      {integration.count} connector{integration.count !== 1 ? 's' : ''} available
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {integration.connected ? (
                      <>
                        <Button
                          size="sm"
                          variant="secondary"
                          icon={ExternalLink}
                          iconPosition="right"
                          className="flex-1"
                        >
                          View Docs
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="px-3"
                        >
                          <span className="text-xl">⚙️</span>
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        variant="primary"
                        icon={Sparkles}
                        className="flex-1"
                      >
                        Connect Now
                      </Button>
                    )}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </GlassCard>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-24">
            <GlassCard className="max-w-2xl mx-auto">
              <div className="py-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Search className="w-12 h-12 text-primary-400" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  No integrations found
                </h3>
                <p className="text-primary-300 mb-8 max-w-md mx-auto">
                  We couldn't find any integrations matching your search. Try adjusting your filters or search terms.
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

        {/* Popular Integrations Section */}
        {searchQuery === '' && selectedCategory === 'All' && (
          <div className="mt-24">
            <GlassCard className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-gradient">Most Popular</span>
                </h2>
                <p className="text-primary-300 text-lg">
                  These integrations are loved by thousands of teams worldwide
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {integrationsData.filter(i => i.connected).map((integration) => (
                  <div
                    key={integration.id}
                    className="text-center space-y-3 group cursor-pointer"
                  >
                    <div className="w-16 h-16 mx-auto rounded-xl bg-white/10 flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {integration.icon}
                    </div>
                    <div className="font-semibold text-white">{integration.name}</div>
                    <div className="flex items-center justify-center gap-1 text-green-600 text-sm font-semibold">
                      <Check className="w-4 h-4" strokeWidth={3} />
                      Active
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Integrations;
